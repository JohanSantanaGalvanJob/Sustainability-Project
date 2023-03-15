
# Be Good

Be good is a combination between a game and a social network. The aim is to make it easy and fun to be sustainable, while showing the users that small changes in behavior also helps. 


## Features

- Newsfeed
- List of sustainable attractions and resturants
- List of sustainable things to do
- Cross platform


## Screenshots

![Login](https://www.awesomescreenshot.com/image/38003491?key=aefbc6b1caae25df274fb1c5d391c179)


## Tech Stack

**Client:** React
 
 **npm packages:**
 -  axios
 -  framer
 -  motion
 -  react
 -  react-dom
 -  react-router-dom
 -  react-scripts
 -  sass
 -  web-vitals

**Server:** Node.js

 **npm packages:**
   - bcryptjs
   - body-parser
   - cors
   - dotenv
   - express
   - jsonwebtoken
   - multer
   - mysql2
   - path
   - sequelize
   - nodemon

## API Reference

#### Get all items

```http
  GET /users
```

#### Get item

```http
  GET /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Create user

```http
  POST /users
```

| Parameter | Type     | Description                                   |
| :-------- | :------- | :---------------------------------------------|
| `username`      | `string` | **Required**. Username of the user      |
| `email`         | `string` | **Required**. Email of the user         |
| `password`      | `string` | **Required**. Password of the user      |
| `birthdate`     | `Date` | **Required**. Date of birth of the user   |
| `image`         | `string` | **Required**. An image                  |

#### Update user

```http
  POST /users/${id}
```

| Parameter | Type     | Description                             |
| :-------- | :------- | :---------------------------------------|
| `id`            | `string` | **Required**. Id of user to fetch |
| `username`      | `string` | Username of the user              |
| `email`         | `string` | Email of the user                 |
| `password`      | `string` | Password of the user              |
| `birthdate`     | `Date`   | Date of birth of the user         |
| `image`         | `string` | An image                          |

## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```


## Authors

- [Stefan](https://github.com/stefansnaerh)
- [Johan](https://github.com/JohanSantanaGalvanJob)
- [Katrine](https://github.com/katrinedelrosario)
- [Philip](https://github.com/Nicekode4)

