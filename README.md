
# Food Recipe - Backend



## Run Locally

Clone the project

```bash
  git clone https://github.com/Rdhwnzaki/Backend-FoodRecipe.git
```

Go to the project directory

```bash
  cd Backend-FoodRecipe
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file
Start the server

```body
DB_USER=
DB_HOST=
DB_NAME=
DB_PASS=
DB_PORT=

JWT_KEY=
PORT=
HOST =

PHOTO_NAME=
PHOTO_KEY=
PHOTO_SECRET=

MAIL_USERNAME=
MAIL_PASSWORD=
OAUTH_CLIENTID=
OAUTH_CLIENT_SECRET=
OAUTH_REFRESH_TOKEN=
```


## API Reference
### API Deploy

```http
  https://busy-ruby-chiton-wear.cyclic.app
```

### Users

#### Login

```http
  POST /users/login
```
#### Body

```body
{
     "email_user": "ridhwanzaki177@gmail.com",
     "password_user": "wanwan123"
}
```
#### Register

```http
  POST /users/register
```

#### Body

```body
 {
    "email_user": "ridhwanzaki177@gmail.com",
    "password_user": "wanwan123",
    "fullname_user": "ridhwan",
    "phone": "0239348"
}
```
#### Verification

```http
  POST /users/verif
```

#### Body

```body
{
    "email_user":"ridhwanzaki177@gmail.com",
    "otp":"862454"
}
```
#### Profile

```http
  GET /users
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_user": "1662cabc-8504-415b-8773-045b66defe04",
            "email_user": "ridhwanzaki177@gmail.com",
            "password_user": "$2a$10$800h0T333HXTXJUQYtVO8.BMQLAldazPdmyTCCN1YHvlmRQg3ooZC",
            "fullname_user": "ridhwan",
            "phone": "0239348",
            "verif": 1,
            "otp": "862454",
            "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673884680/food/aupojyjumm9cetgggd9q.ico"
        }
    ],
    "message": "Get User Success"
}
```
#### Photo Profile

```http
  PUT /users/update-photo
```

#### Body

```body
  {
    "success": true,
    "statusCode": 200,
    "data": {
        "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673545779/shop.id/vgjnzgtodmlbkelv1smb.png"
    },
    "message": "Update Photo Success"
  }
```
### Recipe

#### All Recipe

```http
  GET /recipe
```
#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_recipe": 1,
            "title": "Loream Sandwich",
            "ingredients": "2 Eggs",
            "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673630664/food/n07hr4bixccnndpty4wh.png",
            "video": "https://res.cloudinary.com/dtvq0fxfo/video/upload/v1673630672/food/zzqutm7hmbtnt1lzfqyr.mp4",
            "user_id": "1662cabc-8504-415b-8773-045b66defe04"
        },
        {
            "id_recipe": 6,
            "title": "Checken Kare",
            "ingredients": "5 Egg",
            "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673789404/food/ukcd2unjgez2cxlbwpqx.png",
            "video": "https://res.cloudinary.com/dtvq0fxfo/video/upload/v1673789412/food/rxajo7zjgbmbovagh9ca.mp4",
            "user_id": "1662cabc-8504-415b-8773-045b66defe04"
        }
    ],
    "message": "Get recipe success"
}
```
#### Recipe Detail

```http
  GET /recipe/:id_recipe
```

#### Body

```body
 {
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_recipe": 1,
            "title": "Loream Sandwich",
            "ingredients": "2 Eggs",
            "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673630664/food/n07hr4bixccnndpty4wh.png",
            "video": "https://res.cloudinary.com/dtvq0fxfo/video/upload/v1673630672/food/zzqutm7hmbtnt1lzfqyr.mp4",
            "user_id": "1662cabc-8504-415b-8773-045b66defe04",
            "fullname_user": "ridhwan"
        }
    ],
    "message": "Get detail recipe success"
}
```
#### Recipe By User

```http
  GET /recipe/recipe-user
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_recipe": 1,
            "title": "Loream Sandwich",
            "ingredients": "2 Eggs",
            "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673630664/food/n07hr4bixccnndpty4wh.png",
            "video": "https://res.cloudinary.com/dtvq0fxfo/video/upload/v1673630672/food/zzqutm7hmbtnt1lzfqyr.mp4",
            "user_id": "1662cabc-8504-415b-8773-045b66defe04"
        },
        {
            "id_recipe": 6,
            "title": "Checken Kare",
            "ingredients": "5 Egg",
            "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673789404/food/ukcd2unjgez2cxlbwpqx.png",
            "video": "https://res.cloudinary.com/dtvq0fxfo/video/upload/v1673789412/food/rxajo7zjgbmbovagh9ca.mp4",
            "user_id": "1662cabc-8504-415b-8773-045b66defe04"
        }
    ],
    "message": "Success Get Recipe By user"
}
```
#### Add Recipe

```http
  POST /recipe/add-recipe
```

#### Body

```body
{
   "photo":"",
   "title":"",
   "ingredients":"",
   "video":
}
```
#### PUT Recipe

```http
  PUT /recipe/edit-recipe/:id_recipe
```

#### Body

```body
{
   "photo":"",
   "title":"",
   "ingredients":"",
   "video":
}
```
#### Post Comment

```http
  POST /recipe/add-comment/:id_recipe
```

#### Body

```body
{
    "comment_text":"Bagus"
}
```
#### GET Comment

```http
  GET /recipe/comment/:id_recipe
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_comment": 3,
            "comment_text": "Jelek",
            "user_id": "1662cabc-8504-415b-8773-045b66defe04",
            "recipe_id": 1,
            "fullname_user": "ridhwan",
            "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673925844/food/i7ddyxtcwpf46qc8iutb.png"
        },
        {
            "id_comment": 14,
            "comment_text": "Bagus",
            "user_id": "1662cabc-8504-415b-8773-045b66defe04",
            "recipe_id": 1,
            "fullname_user": "ridhwan",
            "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673925844/food/i7ddyxtcwpf46qc8iutb.png"
        },
        {
            "id_comment": 15,
            "comment_text": "Bisaan euy",
            "user_id": "1662cabc-8504-415b-8773-045b66defe04",
            "recipe_id": 1,
            "fullname_user": "ridhwan",
            "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673925844/food/i7ddyxtcwpf46qc8iutb.png"
        },
        {
            "id_comment": 16,
            "comment_text": "Bagus banget euy",
            "user_id": "1662cabc-8504-415b-8773-045b66defe04",
            "recipe_id": 1,
            "fullname_user": "ridhwan",
            "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673925844/food/i7ddyxtcwpf46qc8iutb.png"
        }
    ],
    "message": "Get comment success"
}
```
#### POST Saved Recipe

```http
  POST /recipe/saved-recipe/post-saved
```

#### Body

```body
{
    "recipe_id":1
}
```
#### GET Saved Recipe

```http
  GET /recipe/saved-recipe/get-saved
```

#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_saved": 10,
            "user_id": "1662cabc-8504-415b-8773-045b66defe04",
            "recipe_id": 1,
            "title": "Loream Sandwich",
            "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673630664/food/n07hr4bixccnndpty4wh.png"
        }
    ],
    "message": "Get saved recipe success"
}
```

#### DELETE Saved Recipe
```http
  DELETE /recipe/saved-recipe/delete/:id_saved
```
#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [],
    "message": "Delete save recipe success"
}
```
#### POST Liked Recipe
```http
  POST /recipe/like-recipe/post-like
```
#### Body

```body
{
    "recipe_id":1
}
```
#### GET Liked Recipe
```http
  GET /recipe/like-recipe/get-like
```
#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_liked": 9,
            "user_id": "1662cabc-8504-415b-8773-045b66defe04",
            "recipe_id": 1,
            "title": "Loream Sandwich",
            "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673630664/food/n07hr4bixccnndpty4wh.png"
        },
        {
            "id_liked": 10,
            "user_id": "1662cabc-8504-415b-8773-045b66defe04",
            "recipe_id": 6,
            "title": "Checken Kare",
            "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673789404/food/ukcd2unjgez2cxlbwpqx.png"
        }
    ],
    "message": "Get like success"
}
```
#### DELETE Liked Recipe
```http
  DELETE /recipe/like-recipe/delete/:id_liked
```
#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [],
    "message": "Delete like success"
}
```
#### DELETE Recipe
```http
  DELETE /recipe/delete-recipe/:id_recipe
```
#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "message": "Delete recipe success"
}
```
#### GET Search
```http
  GET /recipe/search/search-recipe
```
#### Body

```body
{
    "success": true,
    "statusCode": 200,
    "data": [
        {
            "id_recipe": 6,
            "title": "Checken Kare",
            "ingredients": "5 Egg",
            "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673789404/food/ukcd2unjgez2cxlbwpqx.png",
            "video": "https://res.cloudinary.com/dtvq0fxfo/video/upload/v1673789412/food/rxajo7zjgbmbovagh9ca.mp4",
            "user_id": "1662cabc-8504-415b-8773-045b66defe04"
        },
        {
            "id_recipe": 1,
            "title": "Loream Sandwich",
            "ingredients": "2 Eggs",
            "photo": "https://res.cloudinary.com/dtvq0fxfo/image/upload/v1673630664/food/n07hr4bixccnndpty4wh.png",
            "video": "https://res.cloudinary.com/dtvq0fxfo/video/upload/v1673630672/food/zzqutm7hmbtnt1lzfqyr.mp4",
            "user_id": "1662cabc-8504-415b-8773-045b66defe04"
        }
    ],
    "message": "get data success"
}
```
