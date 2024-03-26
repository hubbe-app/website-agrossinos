# Website Agrossinos

## Configuração das Variáveis de Ambiente

O código fonte fornecido depende de variáveis de ambiente para configurar o serviço de email e outras configurações relevantes. Abaixo estão as variáveis de ambiente necessárias e suas descrições:

- `DIRECTUS_URL`: A URL do CMS Directus.
- `ADMIN_STATIC_TOKEN`: O token estático de administração.

### Configurações do Serviço de Email

As configurações abaixo são específicas para o serviço de email:

- `MAIL_FROM`: O endereço de email do remetente.
- `MAIL_TO`: O endereço de email do destinatário.
- `MAIL_SERVICE`: O serviço de email a ser utilizado (pode ser 'gmail', 'sendgrid', 'outlook' ou 'smtp').
- `MAIL_USER`: O usuário do serviço de email para autenticação.
- `MAIL_PASSWORD`: A senha do serviço de email para autenticação.
- `MAIL_HOST`: O host do servidor SMTP.
- `MAIL_PORT`: A porta do servidor SMTP.
- `MAIL_SECURE`: Indica se a conexão deve ser segura (true ou false).

Certifique-se de configurar todas essas variáveis de ambiente no seu ambiente de desenvolvimento. Você pode fazer isso definindo-as em um arquivo `.env`.