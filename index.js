const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const { executablePath } = require('puppeteer');

// Lê os números e a mensagem
const numeros = fs.readFileSync('numeros.txt', 'utf-8')
    .split('\n')
    .map(n => n.replace(/\D/g, '').trim())
    .filter(n => n !== '');
const mensagem = fs.readFileSync('mensagem.txt', 'utf-8').trim();

// Função de delay entre envios
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        executablePath: executablePath(),
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

// Geração do QR Code
client.on('qr', (qr) => {
    console.log('Escaneie o QR abaixo com seu WhatsApp:');
    qrcode.generate(qr, { small: true });
});

// Quando o cliente estiver pronto
client.on('ready', async () => {
    console.log('✅ Cliente conectado! Iniciando envio de mensagens...\n');

    for (const numero of numeros) {
        const chatId = `${numero}@c.us`;
        console.log(`🔄 Verificando número: ${numero}`);

        try {
            const isRegistered = await client.isRegisteredUser(chatId);
            if (!isRegistered) {
                console.warn(`⚠️ Número ${numero} não está registrado no WhatsApp.`);
                continue;
            }

            await client.sendMessage(chatId, mensagem);
            console.log(`✅ Mensagem enviada para ${numero}`);

            await delay(2000); // Espera 2 segundos entre mensagens
        } catch (error) {
            console.error(`❌ Erro ao enviar para ${numero}: ${error.message}`);
        }
    }

    console.log('\n📨 Todas as mensagens foram processadas.');
    await client.destroy();
    process.exit(0);
});

// Inicializa o cliente
client.initialize();
