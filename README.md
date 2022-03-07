# RESTful API Gateway for a Social Network Platform - Concept App

## Summary

I built this App because I wanted to learn more about using a NoSQL Database in
collaboration with an Express server running on Node. I used MongoDB as my
Database, and Mongoose as my ODM.

## The Concept

A social network platform with a fully-functional RESTful API gateway. The API
connects to a NoSQL Database that is fast, flexible, and allows for large volumes
of unstructured data.

- All activity within the platform is tied to a unique `User`.
- A `User` has full crud-functionality.
- A `User` post or delete friends, which must be another `User` in the platform.
- A `User` can post or delete `Thoughts`, which are posts.
- A `User` can post or delete a `Reactions` to `Users` `Thoughts`, are resposnes to a thought.

---

## Table of Contents

- [RESTful API Gateway for a Social Network Platform - Concept App](#restful-api-gateway-for-a-social-network-platform---concept-app)
  - [Summary](#summary)
  - [The Concept](#the-concept)
  - [Table of Contents](#table-of-contents)
  - [Node Package Dependencies](#node-package-dependencies)
  - [Repo Stats](#repo-stats)
  - [Contact Erik Plachta](#contact-erik-plachta)
  - [Getting Setup](#getting-setup)
- [API Reference](#api-reference)
  - [**`User`**](#user)
    - [**POST** - Create a New `User`](#post---create-a-new-user)
    - [**GET** - ALL `User` accounts](#get---all-user-accounts)
    - [**GET** - Single `User` account by `id`](#get---single-user-account-by-id)
    - [**PUT** - Change `User` values](#put---change-user-values)
    - [**DELETE** - Remove `User`](#delete---remove-user)
  - [**`User.friends`**](#userfriends)
- [Database Structure](#database-structure)
  - [`UserSchema`](#userschema)
  - [`ThoughtSchema`](#thoughtschema)
  - [`ReactionSchema`](#reactionschema)

---

## Node Package Dependencies

<!-- - **Utility**
  - [dotenv](https://www.npmjs.com/package/dotenv) - Used for local enviornment variables. -->
  <!-- - [moment]([#moment](https://www.npmjs.com/package/moment)) - Used by full-stack front helper functions for date-time manipulation. -->
<!-- - **Security**
  - [express-session](https://www.npmjs.com/package/express-session) - Used to allow a secure client sessions via the web browsers cookies/local caching.
  - [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) - Used to create a session between user and the Database.
  - [bcrypt](https://www.npmjs.com/package/bcrypt) - Used to hash user passwords. -->
- [express](https://www.npmjs.com/package/express) - The controller managing all communication between view and the database.
<!-- - **View**
  - [express-handlebars](https://www.npmjs.com/package/express-handlebars) - The View engine running the users for full-stack app. -->
- [Mongoose](https://www.npmjs.com/package/mongoose) - A DRM for the MongoDB API database.
  <!-- - [mysql2](#mysql2) - A DRM for MySQL/JawsDB full-stack frontend User database.
  - [sequelize](https://www.npmjs.com/package/sequelize) - ORM for MySQL/JawsDB full-stack frontend user database. -->

## Repo Stats

[![GitHub license](https://img.shields.io/github/license/ErikPlachta/api-gateway-express-mongodb)](https://github.com/ErikPlachta/api-gateway-express-mongodb)

[![GitHub Number of Languages](https://img.shields.io/github/languages/count/ErikPlachta/api-gateway-express-mongodb)](https://github.com/ErikPlachta/api-gateway-express-mongodb)
[![GitHub top Language](https://img.shields.io/github/languages/top/ErikPlachta/api-gateway-express-mongodb)](https://github.com/ErikPlachta/api-gateway-express-mongodb)

[![GitHub issues](https://img.shields.io/github/issues/ErikPlachta/api-gateway-express-mongodb)](https://github.com/ErikPlachta/api-gateway-express-mongodb/issues)
![GitHub last commit](https://img.shields.io/github/last-commit/erikplachta/api-gateway-express-mongodb)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/erikplachta/api-gateway-express-mongodb)

## Contact [Erik Plachta](https://github.com/ErikPlachta)

If you want to get in touch talk dev, collaborate, help improve my work, feel
free to reaech out to me on [Twitter](https://www.twitter.com/erikplachta/) or
[LinkedIn](https://www.linkedin.com/in/erikplachta/).

## Getting Setup

<!-- The APP can either be ran Headless as an API Gateway or as a complete Full-Stack. -->

<!-- ### Headless | MongoDB & Express -->

<!-- > It's meant to server as an API-Gateway to an already existing View. -->

<!-- #### Requirements - Getting Set Up for Headless -->
**Steps**

1. [MongoDB](mongodb.com/try/download/community) is fully insatlled and setup
  > [See guide here for help](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)
2. [Node.js](https://nodejs.dev/download) is fully instealled and setup
  > [See guide here for help](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs)
3. [Download the Repo](https://github.com/ErikPlachta/api-gateway-express-mongodb/archive/refs/heads/main.zip)
4. Unzip and Open with your IDE of choice
5. Install Node Packages with `npm i`
6. Run with `npm start`
7. Start making API calls
    > *This APP is designed to be a headless RESTful API gateway. You'll need to use a tool like [Insomnia](https://insomnia.rest/download) to use it.*

<!-- ### B. Full-Stack | MongoDB, MySQL, Express, Handlebars
  
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
  - Crate your own `SECRET` -->

---

# API Reference

## **`User`**

Accounts with access to API functionality
> [See here for more details on the User Schema](#user-schema).

---

### **POST** - Create a New `User`

Make a POST request to create a new `User` with a JSON Body a unique `username`, a unique
`email` and a password that is 6 or more characters.
> [See here for more details on the User Schema](#user-schema).

- **Path**
  - `/api/users/`
- **Use**
  - POST  `127.0.0.1:3001/api/users/`
  - JSON Body

    ```json
    {
      "username"  : "<username-goes-here>",
      "email"     : "<your@email.com>",
      "password"  : "<your-password>"
    }
    ```

---

### **GET** - ALL `User` accounts

Make a GET request to receive ALL `User` data within the database. The `thoughts[]`
and `friends[]` fields will just return the related Schema object `id`s.
> [See here for more details on the User Schema](#user-schema).

- **Path**
  - `/api/users/`
- **Use** 
  - GET `127.0.0.1:3001/api/users`

---

### **GET** - Single `User` account by `id`

Make a GET request for a specific `User` by `id` to get a single `User` with
populated `thoughts[]` and `friends[]` content.

- **Path**
  - `/api/users/:id`
- **Use**
  - GET `127.0.0.1:3001/api/users/<user-id-here>`

---

### **PUT** - Change `User` values

Make a PUT request with the `User`.`id` as a parameter, and a JSON Body of `User`
fields you'd like to update in alignment with [User](#user-schema) field
requirements.

- **Path** 
  - `/api/users/`
- **Use**
  - PUT `127.0.0.1:3001/api/users/<user-id-here>`

    ```json
      {
      "username"  : "<new-unique-username>",
      "email"     : "<new-unique@email.com>",
      "password"  : "<new-password>"
      }
    ```

---

### **DELETE** - Remove `User`

- **Path**
  - `/api/users/:id`
- **Use**
  - DELETE `127.0.0.1:3001/api/users/<user-id-here>`

---

---

## **`User.friends`** 
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

**/api/thoughts/:thoughtId/reactions**

- POST to create a reaction stored in a single thought's reactions array field
- DELETE to pull and remove a reaction by the reaction's reactionId value

---

# Database Structure

## `UserSchema`

- **Schema**
  - `username`
    - String
    - Unique
    - Required
  - `email`
    - String
    - Unique
    - Required
    - valid email address
  - `password`
    - String
    - Required
    - 6 or more characters
  - `date_created`
    - Date
    - Auto generated on creation
  - `thoughts`
    - Array
    - Contains `Thought`.`id` values  for each `Thought` created by `User`
  - `friends`
    - Array
    - Contains ObjectId values from other `User` Scehama objects.
- **Virtuals**
  - `friendCount`
    - Int
    - Counts total number of `User`.`id` values in `User`.`friends[]` every-time User Schema Object is accessed

## `ThoughtSchema`

- **Schema**
  - `text`
    - String
    - Min-Max of 1-280 characters
    - Required
  - `username`
    - String
    - Required
    - References a `User` schema object's `username` field to associate thought to a `User`
  - `date_created`
    - Date
    - Auto generated on creation
  - `reactions`
    - Array
    - Contains `Reaction`.`id` values for each unique reaction to `Thought`
- **Virtuals**
  - `reactionCount`
    - Int
    - Counts total number of `Reaction`.`id` values in `Thought`.`reactions[]` every-time `Thought` Schema Object is accessed

## `ReactionSchema`

- **Schema**
  - `reactionId`
    - Schema.Type.objectId
    - Defaults new Type ObjectId
  - `username`
    - String
    - Required
  - `reactionbody`
    - String
    - Required
    - Min-Max of 1-280 characters
  - `date_created`
    - Date
    - Auto generated on creation

---
