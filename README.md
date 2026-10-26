# Tehtävä 1 - Getting started with node.js

**GitHub Repositorio (node-start):** https://github.com/HelmiPit/Viikkoteht-v-t---K-ytt-j-keskeinen-sovelluskehitys/tree/node-start

## Mitkä osiot sait tehtyä

Sain tehtyä kaikki osiot 1-6.

## Mahdolliset ongelmat

Ei tullut varsinaisia ongelmia, mutta lisäsin jonkin verran virheenkäsittelyä (esim. virheellisen JSON-datan käsittely `try-catch`-lohkossa sekä 404-virheet JSON-muodossa) ja muutin koodia siistimmäksi.

Lisäsin yhden oman ominaisuuden (Search items by name), jonka tarkoitus on suodattaa ja hakea itemit nimen perusteella käyttäen hakusanaa (GET /items?name=Item 1).

## Kuvakaappaukset sovelluksen toiminnasta

## 1. Get server root

HTTP request:

![Get server root](screenshots/image_1.2.png)

Response:

![Get server root](screenshots/image_1.png)

## 2. Get not found 404

HTTP request:

![Get not found 404](screenshots/image_2.2.png)

Response:

![Get not found 404](screenshots/image_2.png)

## 3. Get all items

HTTP request:

![Get all items](screenshots/image_3.2.png)

Response:

![Get all items](screenshots/image_3.png)

## 4. Get an item by id (existing)

HTTP request:

![Get an item by id](screenshots/image_4.2.png)

Response:

![Get an item by id](screenshots/image_4.png)

## 5. Get an item by id (not found - 404 test)

HTTP request:

![Get an item by id (not found - 404 test)](screenshots/image_5.2.png)

Response:

![Get an item by id (not found - 404 test)](screenshots/image_5.png)

## 6. Search items by name (oma lisäys)

HTTP request:

![Search items by name](screenshots/image_6.2.png)

Response:

![Search items by name](screenshots/image_6.png)

## 7. Post new item

HTTP request:

![Post new item](screenshots/image_7.2.png)

Response:

![Post new item](screenshots/image_7.png)

## 8. Modify existing item by id

HTTP request:

![Modify existing item by id](screenshots/image_8.2.png)

Response:

![Modify existing item by id](screenshots/image_8.png)

## 9. Modify item with invalid id (404 test)

HTTP request:

![Modify item with invalid id (404 test)](screenshots/image_9.2.png)

Response:

![Modify item with invalid id (404 test)](screenshots/image_9.png)

## 10. Delete item by id

HTTP request:

![Delete item by id](screenshots/image_10.2.png)

Response:

![Delete item by id](screenshots/image_10.png)

## 11. Delete item with invalid id (404 test)

HTTP request:

![Delete item with invalid id (404 test)](screenshots/image_11.2.png)

Response:

![Delete item with invalid id (404 test)](screenshots/image_11.png)
