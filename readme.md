# 📰 Newsletter Stack

Esta aplicação foi construída em uma [vídeo aula](https://youtu.be/yPn6C-DYPeg) no canal do [YouTube](https://www.youtube.com/@doutorwaka). A aplicação é dividida em três partes principais:
  1. ***Frontend*** (Next)
  2. ***API Gateway*** (Node/Express)
  3. ***App*** (Nest/Node)

Para executar a aplicação, basta clonar este repositório e executar (necessário ter o [Docker](https://www.youtube.com/watch?v=EhuHJEppU40) instalado):
```
docker-compose up -d --build
```

## Casos de uso

A aplicação é referente a uma `newsletter` fictícia onde ela deverá abordar dois casos de uso:
  1. Cadastro de novo usuário
  2. Enviar mensagem para usuários cadastrados utilizando senha de admin.

## Fluxo de negócios

O fluxo da aplicação seguirá a imagem abaixo:

![newsletter-stack-schema](https://github.com/doutorwaka/newsletter-stack/assets/107580593/75a1d8a6-4e0c-4598-9c83-b0d68c45d5f4)

Note que a ***API Gateway*** será o portão de entrada para o ***backend*** da aplicação. Ela deverá interceptar todos os ***requests*** do ***frontend***. Caso seja cadastro de novo usuário, ela simplesmente irá repassar a requisição para frente. Caso seja um envio de mensagem para os usuários da ***newsletter***, ela irá verificar se a senha informada pelo administrador é válida.

## Mais sobre o autor

Olá! Tudo bem? Eu me chamo José Eurípedes, tenho 35 anos e sou doutor em Ciência da Computação. Escrevi minhas primeiras linhas de código com 13 anos e hoje tenho uma grande paixão em ensinar tudo o que aprendi nessa minha caminhada de 22 anos de experiência.

Para saber mais sobre mim, basta acessar minhas redes sociais:
  - [YouTube](https://www.youtube.com/@doutorwaka)
  - [Instagram](https://instagram.com/doutorwaka)
  - [TikTok](https://www.tiktok.com/@doutorwaka)
  - [Site Pessoal](https://www.doutorwaka.com/)
