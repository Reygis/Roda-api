<div>
  <img src="https://user-images.githubusercontent.com/90655270/161388302-145d58d6-723a-4dc1-97e7-80133dfa4c3a.png" width="100px">
  <img alt="Stack Hacker" src="https://img.shields.io/static/v1?label=stack&message=hacker&color=success&labelColor=grey">
</div>

<h1 align="center">Roda</h1>

<p align="center">
This project provides a API for exchanging books and experiences.
</p>
<p align="center"><a href="https://insomnia.rest/run/?label=Parrot&uri=https%3A%2F%2Fraw.githubusercontent.com%2FNeryVictor%2Fparrot%2Fmain%2F.docs%2FInsomnia_2022-09-09.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</a></p>

✨ Client
===============

An API that allows users to register, exchange and review books.<br>
And also the creation of groups to exchange literary experiences.

🏗️ Back-end authors
=================

- [x] Cristiano Daniel Nascimento 
- [x] Daniel Antunes Pereira 
- [x] Giovana Paula Donzella 
- [x] Leonardo Maia Prado  
- [x] Reygis Azevedo
- [x] Victor César Nery 

🏗️ Front-end authors
=================

- [x] Andrei Alcantara

Repository: https://github.com/dreialcantara/Roda-Front <br>
Deploy:  https://roda-lovat.vercel.app

🏗️ Designers UX authors
=================

- [x] Laíza Mariano
- [x] Mariane Souza
- [x] Weslley Pinheiro

Documentation: 
https://available-dugout-b61.notion.site/Roda-Plataforma-Social-de-Leitura-c0efc9bc1300455991555f81286de6a8

📝 Features Created
=====================
* Login (JWT Authentication)
* Users CRUD
* Book CRUD
* Review CRUD
* Group CRUD
* Deploy API Heroku

🚀 Techs
=================

<table>
<tr>
<td>mysql2</td>
<td>node</td>
<td>express</td>
<td>typeorm</td>
<td>typeorm-extension</td>
<td>bcrypt</td>
<td>jsonwebtoken</td>
<td>class-validator</td>
<td>reflect-metadata</td>
</tr>
</table>

## Local Project

To run this project locally, you'll need Git, Node and MySQL installed on your computer. 

After cloning project, remember to insert your local database credentials into /.env.

```bash
# Clone this repository
$ git clone https://github.com/Reygis/Roda-api

# Go into the repository
$ cd Roda-api

# Install dependencies
$ npm install

# Create database
$ npm db:create

# Generate migrations
$ npm migration:generate

# Run migrations
$ npm migration:run

# Add seeds
$ npm seed

# Run server
$ npm run dev

# running on port 3030
```

📇 API documentation
=================

#### Create User

```http
  POST http://roda-api.herokuapp.com/user
```

Json example:

```
{
    "name":"User Test", 
    "email": "testuser@roda.com.br",
    "password": "123456", 
    "bio": "Hi Im User!", 
    "imgurl": "https://urlimg.com.br" 
}  
```

#### Login

```http
  POST http://roda-api.herokuapp.com/login
```

Json example:

```
{
  "email": "testuser@roda.com.br",
  "password": "123456"
}  
```

#### Logged user profile 

```http
  GET http://roda-api.herokuapp.com/login/profile
```

#### Edit logged user

```http
  PUT http://roda-api.herokuapp.com/user/edit
```

Json example:

```
{
  "name":"Test User Edit",
  "email": "testuseredit@roda.com.br",
  "bio": "Hi Im User Edited!",
  "imgurl": "https://urlimgedited.com.br"
}
```

#### List all users 

```http
  GET http://roda-api.herokuapp.com/user/alluser
```

#### Search users by name

```http
  GET http://roda-api.herokuapp.com/user/:name

| Parameter | Type       | Descrição                                   |
| `name`    | `string`   | Put user name to search |
```

#### Create Book

```http
  POST http://roda-api.herokuapp.com/book/create
```

Json example:

```
{
    "name":"Harry", 
    "genres": "Drama, Fiction, Action",
    "description": " A good book description is a detailed", 
    "condition": "4"
}  
```

#### List all books

```http
  GET http://roda-api.herokuapp.com/book/allbooks
```

#### Search books by name

```http
  GET http://roda-api.herokuapp.com/user/:name

| Parameter | Type       | Descrição                                   |
| `name`    | `string`   | Put book name to search |
```

#### List users books

```http
  GET http://roda-api.herokuapp.com/book/mybooks
```

#### Create Book Rating

```http
  POST http://roda-api.herokuapp.com/review/create/:idbook
```

Json example:

```
{
    "content": "This book is very...",
    "rating": "4",
    "tags": "Fantasy"
}  
```

#### Create Group

```http
  POST http://roda-api.herokuapp.com/group/create
```

Json example:

```
{
    "name": "Test Group",
    "about": "4",
    "discussion": "Fantasy",
    "books": "Name Book Test"
}  
```

#### List all groups

```http
    GET http://roda-api.herokuapp.com/group/allgroups
```

#### List all groups by logged user

```http
    GET http://roda-api.herokuapp.com/group/mygroups
```

Made by <br>

🔹 Cristiano Daniel Nascimento 👋 [Get in touch](https://github.com/Cristiano-Melo)<br>
🔹 Daniel Antunes Pereira Junior 👋 [Get in touch](https://github.com/DanielAntunes-dev)<br>
🔹 Giovana Paula Donzella 👋 [Get in touch](https://github.com/ale11011971)<br>
🔹 Leonardo Maia Garcia 👋 [Get in touch](https://github.com/LeoMPG)<br>
🔹 Reygis Azevedo 👋 [Get in touch](https://github.com/Reygis)<br>
🔹 Victor Nery 👋 [Get in touch](https://github.com/NeryVictor)<br>

🔸 Andrei Alcantara 👋 [Get in touch](https://github.com/dreialcantara)<br>

🔹 Laíza Mariano 👋 [Get in touch](https://www.linkedin.com/in/la%C3%ADzamariano/)<br>
🔹 Mariane Souza 👋 [Get in touch](https://www.linkedin.com/in/mariane-souza-42576b65/)<br>
🔹 Weslley Pinheiro 👋 [Get in touch](https://www.linkedin.com/in/weslley-pinheiro-8751251a6/)<br>