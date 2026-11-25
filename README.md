# Tehtävä 5B - Input validation and error handling

Tämän sovelluksen tarkoitus on toimia medianjakopalvelun palvelimena. Sovellukseen lisätty virheenkäsittely ('notFoundHandler' ja 'errorHandler') sekä palvelinpuolen syötteiden validointi express-validator-kirjaston avulla MVC-mallin mukaisesti.

## Mitkä osiot sait tehtyä

Sain tehtyä kaikki osiot 1-3.

## Mahdolliset ongelmat

404-virheet palautuivat aluksi Expressin oletus HTML-sivuna ennen kuin 'notFoundHandler' ja 'errorHandler' lisättiin src/index.js-tiedoston loppuun.

## Kuvakaappaukset sovelluksen toiminnasta

## Error handling & 404 routes

### 1. Get not found 404

HTTP request:

![Get not found 404](screenshots/404-not-found1.png)

Response:

![Get not found 404](screenshots/404-not-found2.png)

### 2. Get media item by id (Not found)

HTTP request:

![Get media item by id (Not found)](screenshots/get-media-item-by-id-not-found1.png)

Response:

![Get media item by id (Not found)](screenshots/get-media-item-by-id-not-found2.png)

---

## Authentication routes

### 3. Post login

HTTP request:

![Post login](screenshots/post-login1.png)

Response:

![Post login](screenshots/post-login2.png)

### 4. Post login (validation error: missing password)

HTTP request:

![Post login (validation error)](screenshots/post-login-validation-error1.png)

Response:

![Post login (validation error)](screenshots/post-login-validation-error2.png)

---

## /users requests

### 5. Register new user

HTTP request:

![Register new user](screenshots/register-new-user1.png)

Response:

![Register new user](screenshots/register-new-user2.png)

### 6. Register new user (validation error: invalid email & short password)

HTTP request:

![Register new user (validation error)](screenshots/register-new-user-validation-error1.png)

Response:

![Register new user (validation error)](screenshots/register-new-user-validation-error2.png)

---

## /media requests

### 7. Get 3 latest media items (validation error)

HTTP request:

![Get 3 latest media items (validation error)](screenshots/get-3-latest-media-items-validation-error1.png)

Response:

![Get 3 latest media items (validation error)](screenshots/get-3-latest-media-items-validation-error2.png)

### 8. Get media item by id (validation error)

HTTP request:

![Get media item by id (validation error)](screenshots/get-media-item-by-id-validation-error1.png)

Response:

![Get media item by id (validation error)](screenshots/get-media-item-by-id-validation-error2.png)

### 9. Add new media item with image (with token)

HTTP request:

![Add new media item with image](screenshots/add-new-media-item-with-image-with-token1.png)

Response:

![Add new media item with image](screenshots/add-new-media-item-with-image-with-token2.png)

### 10. Add new media item (validation error: title too short)

HTTP request:

![Add new media item (validation error)](screenshots/add-new-media-item-validation-error-title-too-short1.png)

Response:

![Add new media item (validation error)](screenshots/add-new-media-item-validation-error-title-too-short2.png)
