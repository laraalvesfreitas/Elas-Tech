# Configuração TypeScript 

1. Inicializar um projeto Node.js
    `npm init   ou    npm init -y`

2. Instalar o TypeScript 
 2.1 Instalação Global : `npm install - g  typescript`
 2.2 Instalaçao local (Dentro do projeto) : `npm install typescript -D`

3. Utilizar o TypeScript instalado para transpilar o nosso código (converter o nosso código ts para js) 
    `npx tsc index.ts`
    `npx tsc index.ts --watch`

4. Configurando o arquivo tsconfig
    `npx tsc --init`