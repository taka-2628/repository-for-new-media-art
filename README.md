# Repository for New Media Art

Repository for New Media Art(https://repository-for-new-media-art.herokuapp.com/) is a full-stack web application that uses Rails API to support a React front-end application. 

## Background
Repository for New Media Art is an online repository for digital art. It is a platform for creators to showcase their projects and learn from other creatives. Artists and creators can find artistic inspirations as well as technical solutions here. Each project has a comment section where people can discuss, connect or ask the author questions.

## Features
- A user can sign up, log in and logout
- A user can upload projects
- A user can leave, edit, and delete a comment 

## Installation
1. Fork and clone this repository
2. Create and seed the database
```
rails db:migrate db:seed
```
3. Run rails server
```
rails s
```
4. Run react server
```
npm start --prefix client
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
