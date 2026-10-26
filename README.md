# Tehtävä 1 - Getting started with node.js

**GitHub Repositorio (node-start):** https://github.com/HelmiPit/Viikkoteht-v-t---K-ytt-j-keskeinen-sovelluskehitys/tree/node-start

## Mitkä osiot sait tehtyä

Sain tehtyä kaikki osiot 1-6.

## Mahdolliset ongelmat

Ei tullut varsinaisia ongelmia, mutta lisäsin jonkin verran virheenkäsittelyä (esim. virheellisen JSON-datan käsittely `try-catch`-lohkossa sekä 404-virheet JSON-muodossa) ja muutin koodia siistimmäksi.

Lisäsin yhden oman ominaisuuden (Search items by name), jonka tarkoitus on suodattaa ja hakea itemit nimen perusteella käyttäen hakusanaa (GET /items?name=Item 1).

## Kuvakaappaukset sovelluksen toiminnasta

Get server root

![Get server root](screenshots/image.png)

Get not found 404

![Get not found 404](screenshots/image_2.png)

Get all items

![Get all items](screenshots/image_3.png)

Get an item by id (existing)

![Get an item by id](screenshots/image_4.png)

Get an item by id (not found - 404 test)

![Get an item by id (not found - 404 test)](screenshots/image_5.png)

Search items by name (oma lisäys)

![Search items by name](screenshots/image_6.png)

Post new item

![Post new item](screenshots/image_7.png)

Modify existing item by id

![Modify existing item by id](screenshots/image_8.png)

Modify item with invalid id (404 test)

![Modify item with invalid id (404 test)](screenshots/image_9.png)

Delete item by id

![Delete item by id](screenshots/image_10.png)

Delete item with invalid id (404 test)

![Delete item with invalid id (404 test)](screenshots/image_11.png)
