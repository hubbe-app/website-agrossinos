# Site Agrossinos

Este documento oferece instruções detalhadas sobre como configurar e executar o site Agrossinos.

## Estrutura do Projeto

- **Localização do Conteúdo:** Todo o conteúdo do site está na pasta `/website`.

## Configuração do Ambiente de Desenvolvimento

1. **Versão do Node.js**
   
   - Utilize a versão LTS (Long-Term Support) chamada `hydrogen`.
   - Instale usando o NVM (Node Version Manager) com o comando:
     ```
     nvm install --lts
     ```

2. **Instalação do Yarn**
   - Yarn é um gerenciador de pacotes. Instale-o globalmente usando o comando:
     ```
     npm install -g yarn
     ```

## Configuração do Arquivo `.env.local`

Para executar o site localmente, é necessário configurar um arquivo `.env.local` na pasta `/website`. Este arquivo deve incluir as seguintes variáveis de ambiente:


```
WEBSITE_ID=agrossinos # esse id está no cms
DIRECTUS_URL=https://cms.hubbe.app # esse url é o do cms
ADMIN_STATIC_TOKEN=token # esse token está no cms
```

- Utilize o arquivo `.env.template` como referência para a configuração.

## Executando o Site Localmente

Para iniciar o site em um ambiente local, siga estes passos:

1. Navegue até a pasta do site:
```bash
cd website
```
2. Instale as dependências:
```bash
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
yarn dev
```

Estas instruções irão ajudá-lo a configurar e rodar o site Agrossinos de maneira eficiente.
