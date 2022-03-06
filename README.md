# API Gateway for a Social Network Platform - Concept App

## Summary

I built this App because I wanted to learn more about using a NoSQL Database in
collaboration with an Express server running on Node. I used MongoDB as my
Database, and Mongoose as my ODM.

## The Concept

I've built a social network platform with a fully-functional API Gateway.

- All activity within the platform is tied to a unique `User`.
- A `User` has full crud-functionality.
- A `User` post or delete friends, which must be another `User` in the platform.
- A `User` can post or delete `Thoughts`, which are posts.
- A `User` can post or delete a `Reactions` to `Users` `Thoughts`, are resposnes to a thought.

---

## Table of Contents

- [API Gateway for a Social Network Platform - Concept App](#api-gateway-for-a-social-network-platform---concept-app)
  - [Summary](#summary)
  - [The Concept](#the-concept)
  - [Table of Contents](#table-of-contents)
  - [Getting Setup](#getting-setup)
    - [A. Headless   | MongoDB & Express](#a-headless----mongodb--express)
      - [Requirements - Getting Set Up for Headless](#requirements---getting-set-up-for-headless)
    - [B. Full-Stack | MongoDB, MySQL, Express, Handlebars](#b-full-stack--mongodb-mysql-express-handlebars)
      - [Requirements - Getting Setup for Full-Stack](#requirements---getting-setup-for-full-stack)
  - [API Reference Guide](#api-reference-guide)
    - [**`User`**](#user)
      - [**POST** - Create New `User`](#post---create-new-user)
    - [**`User.friends`**](#userfriends)
  - [Node Package Dependencies](#node-package-dependencies)
  - [Repo Stats](#repo-stats)
  - [Contributors](#contributors)
    - [Erik Plachta](#erik-plachta)
  - [Questions?](#questions)

---

## Getting Setup

The APP can either be ran Headless as an API Gateway or as a complete Full-Stack.

### A. Headless   | MongoDB & Express

The headless version of the APP is a Model and Controller from the MVC model. It's
meant to server as an API-Gateway to an already existing View.

#### Requirements - Getting Set Up for Headless

- [MongoDB](mongodb.com/try/download/community) is fully insatlled and setup
  > [See guide here for help](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)
- [Node.js](https://nodejs.dev/download) is fully instealled and setup
  > [See guide here for help](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs)
- [Download the Repo](https://github.com/ErikPlachta/api-gateway-express-mongodb/archive/refs/heads/main.zip)
- Unzip and Open with your IDE of choice
- Install Node Packages with `npm i`

### B. Full-Stack | MongoDB, MySQL, Express, Handlebars
  
The headless version of the APP is a complete MVC stack. It includes a Model,
Controller, and View for a complete user experience.

#### Requirements - Getting Setup for Full-Stack

- [MongoDB](mongodb.com/try/download/community) is fully insatlled and setup
  > [See guide here for help](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)
- [Node.js](https://nodejs.dev/download) is fully instealled and setup
  > [See guide here for help](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs)
- [MySQL](https://dev.mysql.com/downloads/mysql/) is fully insatlled and setup
  > [See guide here for help](https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide)
- [Download the Repo](https://github.com/ErikPlachta/api-gateway-express-mongodb/archive/refs/heads/main.zip)
- Unzip and Open with your IDE of choice
- Install Node Packages with `npm i`
- Update your .env file
  - `RENAME.env` to `.env`
  - Add your MySQL login details
    - Add `DB_USER`
    - Add `DB_PASSWORD`
  - Crate your own `SECRET`

---

## API Reference Guide

### **`User`**
> Accounts with access to API functionality

#### **POST** - Create New `User`

**`/api/users/`**

>Example:
>
> POST to 👉🏼 `127.0.0.1:3001/api/users/` with JSON body
>
> ```json
> {
>   "username"  : "ErikPlachta",
>   "email"     : "erik@noemail.com",
>   "password"  : "my-password"
> }
> ```

**GET** - ALL `User` accounts

**`/api/users/`**

> Example:
>
>

**GET** - Single `User` account by `id`
> `/api/users/:id`
>> Example: 

**PUT** - Change `User` values
> `/api/users/`
>> Example: 

**DELETE** - Remove `User`
> `/api/users/:id`

### **`User.friends`** 
> Association to toher users by `User`.`id`
> URL 👉🏼 /api/users/:userId/friends/:friendId

- **POST** - Create 1-way associtation to a `User` in  `User`.`friends`
> URL 👉🏼 /api/users/:userId/friends/:friendId

- DELETE to remove a friend from a user's friend list



- `Thought` CRUD Functionality
  - x
- `Reaction` CRUD Functionality
  - x
  - can add or remove `friends`.
  - `User` can post or delete a `Thought`.
  - `User` can post or delete a `Reaction` as a response within a `Thought`.




**/api/thoughts**

- GET to get all thoughts
- GET to get a single thought by its _id
- POST to create a new thought
    - (__Reminder: Don't forget to push the created thought's _id to the associated user's thoughts array field__)
    - Example: ```{ "thoughtText": "What if...", "username": "ErikPlachta", "userId": "5edff358a0fcb779aa7b118b"}```
- PUT to update a thought by its _id
- DELETE to remove a thought by its _id
- **/api/thoughts/:thoughtId/reactions**
    - POST to create a reaction stored in a single thought's reactions array field
    - DELETE to pull and remove a reaction by the reaction's reactionId value


---

## Node Package Dependencies

- **Utility**
  - [dotenv](https://www.npmjs.com/package/dotenv) - Used for local enviornment variables.
  - [moment]([#moment](https://www.npmjs.com/package/moment)) - Used by full-stack front helper functions for date-time manipulation.
- **Security**
  - [express-session](https://www.npmjs.com/package/express-session) - Used to allow a secure client sessions via the web browsers cookies/local caching.
  - [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) - Used to create a session between user and the Database.
  - [bcrypt](https://www.npmjs.com/package/bcrypt) - Used to hash user passwords.
- **Controller**
  - [express](https://www.npmjs.com/package/express) - The controller managing all communication between view and the database.
- **View**
  - [express-handlebars](https://www.npmjs.com/package/express-handlebars) - The View engine running the users for full-stack app.
- **Model**
  - [Mongoose](https://www.npmjs.com/package/mongoose) - A DRM for the MongoDB API database.
  - [mysql2](#mysql2) - A DRM for MySQL/JawsDB full-stack frontend User database.
  - [sequelize](https://www.npmjs.com/package/sequelize) - ORM for MySQL/JawsDB full-stack frontend user database.

## Repo Stats

[![GitHub license](https://img.shields.io/github/license/ErikPlachta/api-gateway-express-mongodb)](https://github.com/ErikPlachta/api-gateway-express-mongodb)

[![GitHub Number of Languages](https://img.shields.io/github/languages/count/ErikPlachta/api-gateway-express-mongodb)](https://github.com/ErikPlachta/api-gateway-express-mongodb)
[![GitHub top Language](https://img.shields.io/github/languages/top/ErikPlachta/api-gateway-express-mongodb)](https://github.com/ErikPlachta/api-gateway-express-mongodb)

[![GitHub issues](https://img.shields.io/github/issues/ErikPlachta/api-gateway-express-mongodb)](https://github.com/ErikPlachta/api-gateway-express-mongodb/issues)
![GitHub last commit](https://img.shields.io/github/last-commit/erikplachta/api-gateway-express-mongodb)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/erikplachta/api-gateway-express-mongodb)

## Contributors

### [Erik Plachta](https://github.com/ErikPlachta)

---

## Questions?

Let's get in touch :point_down:

> Feel free to contact me on my Twitter @ErikPlachta
