# Tehtävä 2 - Getting started with Express framework

Tämän sovelluksen tarkoitus on rakentaa REST API hyödyntäen Express-frameworkia ja Node.js-alustaa. Sovelluksen avulla harjoitellaan Express-reititystä, CRUD-operaatioita (`/api/media` ja `/api/users`), stattisten kuvien tarjoilua sekä HTML-sivun dynaamista renderöintiä Pug-sivupohjamoottorilla. Sovelluksen toiminta ja HTTP-statuskoodit on testattu VS Coden REST Client -laajennuksella.

## Mitkä osiot sait tehtyä

Sain tehtyä kaikki osiot 1-5 + 6 (jsDoc comments).

## Mahdolliset ongelmat

Puuttuvat express- ja pug-riippuvuudet aiheuttivat alunperin sovelluksen kaatumisen. Lisäksi ESLint antoi varoituksen käyttämättömästä muuttujasta. Ratkaisin ongelmat asentamalla puuttuvat npm-paketit ja muuttamalla käyttäjätietojen käsittelyä (salasana poistetaan delete-operaattorilla destrukturointimuuttujan sijaan).

## Kuvakaappaukset sovelluksen toiminnasta

### GET Pug HTML landing page

![Pug Landing Page](screenshots/media_api_landing_page.png)

### GET static image file from media static middleware

![2f9b.jpg](screenshots/2f9b_proof.png)

![60ac.jpg](screenshots/60ac_proof.png)

![dbbd.jpg](screenshots/dbbd_proof.png)

![f504.jpg](screenshots/f504_proof.png)

![ffd8.jpg](screenshots/ffd8_proof.png)

### GET 404 non-existing route

HTTP request:

![GET 404 non-existing route](screenshots/image_nonexistent.png)

Response:

![GET 404 non-existing route](screenshots/image_nonexistent2.png)

## /api/media ENDPOINTS

### GET all media items

HTTP request:

![GET all media items](screenshots/image_1.png)

Response:

![GET all media items](screenshots/image_1.2.png)

### GET media items with limit parameter

HTTP request:

![GET media items with limit parameter](screenshots/image_2.png)

Response:

![GET media items with limit parameter](screenshots/image_2.2.png)

### GET media item by valid ID

HTTP request:

![GET media item by valid ID](screenshots/image_3.png)

Response:

![GET media item by valid ID](screenshots/image_3.2.png)

### GET media item by non-existing ID (404)

HTTP request:

![GET media item by non-existing ID (404)](screenshots/image_4.png)

Response:

![GET media item by non-existing ID (404)](screenshots/image_4.2.png)

### POST Add new media item (201 Created)

HTTP request:

![POST Add new media item (201 Created)](screenshots/image_5.png)

Response:

![POST Add new media item (201 Created)](screenshots/image_5.2.png)

### POST Add new media item missing title (400 Bad Request)

HTTP request:

![POST Add new media item missing title (400 Bad Request)](screenshots/image_6.png)

Response:

![POST Add new media item missing title (400 Bad Request)](screenshots/image_6.2.png)

### PUT Modify existing media item (200 OK)

HTTP request:

![PUT Modify existing media item (200 OK)](screenshots/image_7.png)

Response:

![PUT Modify existing media item (200 OK)](screenshots/image_7.2.png)

### PUT Modify non-existing media item (404 Not Found)

HTTP request:

![PUT Modify non-existing media item (404 Not Found)](screenshots/image_8.png)

Response:

![PUT Modify non-existing media item (404 Not Found)](screenshots/image_8.2.png)

### DELETE media item (200 OK)

HTTP request:

![DELETE media item (200 OK)](screenshots/image_9.png)

Response:

![DELETE media item (200 OK)](screenshots/image_9.2.png)

### DELETE non-existing media item (404 Not Found)

HTTP request:

![DELETE non-existing media item (404 Not Found)](screenshots/image_10.png)

Response:

![DELETE non-existing media item (404 Not Found)](screenshots/image_10.2.png)

## /api/users ENDPOINTS

### GET all users

HTTP request:

![GET all users](screenshots/image_11.png)

Response:

![GET all users](screenshots/image_11.2.png)

### GET user by valid ID

![GET user by valid ID](screenshots/image_12.png)

Response:

![GET user by valid ID](screenshots/image_12.2.png)

### GET user by non-existing ID (404)

HTTP request:

![GET user by non-existing ID (404)](screenshots/image_13.png)

Response:

![GET user by non-existing ID (404)](screenshots/image_13.2.png)

### POST Create new user (201 Created)

HTTP request:

![POST Create new user (201 Created)](screenshots/image_14.png)

Response:

![POST Create new user (201 Created)](screenshots/image_14.2.png)

### POST Create new user missing fields (400 Bad Request)

HTTP request:

![POST Create new user missing fields (400 Bad Request)](screenshots/image_15.png)

Response:

![POST Create new user missing fields (400 Bad Request)](screenshots/image_15.2.png)

### PUT Update existing user details (200 OK)

HTTP request:

![PUT Update existing user details (200 OK)](screenshots/image_16.png)

Response:

![PUT Update existing user details (200 OK)](screenshots/image_16.2.png)

### DELETE user (200 OK)

HTTP request:

![DELETE user (200 OK)](screenshots/image_17.png)

Response:

![DELETE user (200 OK)](screenshots/image_17.2.png)

### DELETE non-existing user (404 Not Found)

HTTP request:

![DELETE non-existing user (404 Not Found)](screenshots/image_18.png)

Response:

![DELETE non-existing user (404 Not Found)](screenshots/image_18.2.png)
