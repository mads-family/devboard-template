# Usa imagem base oficial do Node
FROM node:18-alpine

# Define diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de dependência e instala
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos da aplicação
COPY . .

# Expõe a porta usada pela app
EXPOSE 3000

# Comando para iniciar a API
CMD ["npm", "start"]
