FROM node:22-alpine

WORKDIR /app

# Copiar apenas os arquivos de definição de dependências
COPY package*.json ./

# Rodar npm ci para garantir que estamos instalando as dependências exatas especificadas
RUN npm ci

# Copiar o restante do código
COPY . .

# Exportar porta 9999, que é a porta interna da aplicação
EXPOSE 9999

# Comando padrão para iniciar o servidor
CMD ["node", "api.js"]