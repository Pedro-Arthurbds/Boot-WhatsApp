# WhatsApp Message Sender

Um script Node.js para envio automatizado de mensagens via WhatsApp Web utilizando a biblioteca `whatsapp-web.js`.

## 📋 Pré-requisitos

- Node.js v16 ou superior
- NPM ou Yarn
- WhatsApp instalado no celular para escanear o QR Code
- Conexão com a internet

## ⚙️ Instalação

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/whatsapp-node-sender.git
cd whatsapp-node-sender
```

2. Instale as dependências:
```bash
npm install
```

## 📂 Estrutura de Arquivos

```
whatsapp-node-sender/
├── index.js          # Código principal
├── numeros.txt       # Lista de números para enviar (um por linha)
├── mensagem.txt      # Mensagem que será enviada
├── wwebjs_auth/      # Pasta de autenticação (gerada automaticamente)
└── node_modules/     # Dependências (gerada automaticamente)
```

## 🚀 Como Usar

1. Prepare os arquivos necessários:
   - Edite `numeros.txt` colocando um número por linha no formato: `5511999999999`
   - Edite `mensagem.txt` com a mensagem que deseja enviar

2. Execute o script:
```bash
node index.js
```

3. Escaneie o QR Code exibido no terminal com seu WhatsApp

4. Aguarde o processo de envio ser concluído

## ⚠️ Limitações e Boas Práticas

- Não envie mensagens em massa para números desconhecidos (risco de banimento)
- Mantenha intervalos de 2-3 segundos entre envios
- Comece com pequenos lotes (10-20 números) para testar
- Não compartilhe a pasta `wwebjs_auth` - ela contém sua sessão do WhatsApp

## 🛠️ Solução de Problemas

### Erros comuns:

1. **Módulos não encontrados**:
   ```bash
   npm install whatsapp-web.js qrcode-terminal puppeteer
   ```

2. **Problemas no Windows**:
   ```bash
   npm install -g windows-build-tools
   ```

3. **QR Code não funciona**:
   - Delete a pasta `wwebjs_auth` e tente novamente
   - Verifique se o WhatsApp está aberto no celular

4. **Números não recebem mensagem**:
   - Verifique se estão no formato internacional correto (ex: 5511999999999)
   - Confirme que são números válidos no WhatsApp

## 📝 Licença

Este projeto é para fins educacionais. Use por sua própria conta e risco.

---

**Nota**: Este projeto não é afiliado ao WhatsApp ou Meta. O uso deve seguir os Termos de Serviço do WhatsApp.
