
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

#### Get all users

```https
  GET /users
```

#### Get user

```https
  GET /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to fetch |

#### Create user

```https
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

```https
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

#### Delete user

```https
  DELETE /users/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of user to delete|

#### Delete all users

```https
  DELETE /users
```

#### Get all posts

```https
  GET /posts
```

#### Get post

```https
  GET /posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of post to fetch |

#### Create post

```https
  POST /posts
```

| Parameter       | Type     | Description                              |
| :-------------- | :--------| :----------------------------------------|
| `location`      | `string` | **Required**. location of the user       |
| `image`         | `file`   | **Required**. image of the               |
| `userId`        | `number` | **Required**. id of the user             |
| `categoryId`    | `number` | **Required**. id of the category         |
| `categoryitemId`| `number` | **Required**. id of a item in a category |

#### Update post

```https
  POST /posts/${id}
```

| Parameter       | Type     | Description                       |
| :-------------- | :------- | :---------------------------------|
| `id`            | `string` | **Required**. Id of post to fetch |
| `location`      | `string` | location of the user              |
| `image`         | `file`   | image of the                      |
| `userId`        | `number` | id of the user                    |
| `categoryId`    | `number` | id of the category                |
| `categoryitemId`| `number` | id of a item in a category        |

#### Delete post

```https
  DELETE /posts/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of post to delete|

#### Delete all posts

```https
  DELETE /posts
```
#### Get all categories

```https
  GET /categories
```

#### Get category

```https
  GET /categories/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of category to fetch |

#### Create category

```https
  POST /categories
```

| Parameter | Type     | Description                             |
| :-------- | :------- | :---------------------------------------|
| `name`    | `string` | **Required**. name of teh category      |

#### Update category

```https
  POST /categories/${id}
```

| Parameter | Type     | Description                           |
| :-------- | :------- | :-------------------------------------|
| `id`      | `string` | **Required**. Id of category to fetch |
| `name`    | `string` | Name of the category                  |

#### Delete category

```https
  DELETE /categories/${id}
```

| Parameter | Type     | Description                            |
| :-------- | :------- | :------------------------------------- |
| `id`      | `string` | **Required**. Id of category to delete |

#### Delete all categories

```https
  DELETE /categories
```
#### Get all categoryitems

```https
  GET /categoryitems
```

#### Get categoryitem

```https
  GET /categoryitems/${id}
```

| Parameter | Type     | Description                               |
| :-------- | :------- | :---------------------------------------- |
| `id`      | `string` | **Required**. Id of categoryitem to fetch |

#### Create categoryitems

```https
  POST /categoryitems
```

| Parameter   | Type     | Description                                        |
| :---------- | :------- | :--------------------------------------------------|
| `name`      | `string` | **Required**. Name of the categoryitem             |
| `type`      | `string` | **Required**. Type of the categoryitem             |
| `image`     | `file`   | **Required**. Image of the categoryitem            |
| `tags`      | `string` | **Required**. Sustainable tags of the categoryitem |
| `categoryId`| `string` | **Required**. Id of the categoryitem               |

#### Update categoryitems

```https
  POST /categoryitems/${id}
```

| Parameter   | Type     | Description                            |
| :---------- | :------- | :--------------------------------------|
| `id`        | `string` | **Required**. Id of user to fetch    |
| `name`      | `string` | Name of the categoryitem             |
| `type`      | `string` | Type of the categoryitem             |
| `image`     | `file`   | Image of the categoryitem            |
| `tags`      | `string` | Sustainable tags of the categoryitem |
| `categoryId`| `string` | Id of the categoryitem               |

#### Delete categoryitems

```https
  DELETE /categoryitems/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of categoryitem to delete|

#### Delete all categoryitems

```https
  DELETE /categoryitems
```

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

