# Usa uma imagem leve do Nginx
FROM nginx:alpine

# Remove a configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do frontend para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

# Expõe a porta padrão do Nginx
EXPOSE 80

# Comando padrão do Nginx (já vem configurado na imagem base)
CMD ["nginx", "-g", "daemon off;"]
