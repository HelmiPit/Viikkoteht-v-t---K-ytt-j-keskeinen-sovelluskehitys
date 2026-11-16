# Tehtävä 4 - Express MVC and database

Tämän sovelluksen tarkoitus on toimia medianjakopalvelun palvelimena. Sen avulla käyttäjät voivat tallentaa tietokantaan kuvia ja videoita, selata niitä, muokata tai poistaa omia tietojaan sekä tykätä toisten käyttäjien julkaisuista.

## Mitkä osiot sait tehtyä

Sain tehtyä kaikki osiot 1-4.

## Mahdolliset ongelmat

Ei ollut varsinainen ongelma, mutta aluksi MariaDB-tietokannassa ei ollut mediatestuser-käyttäjää, koska se oli aiemmin luotu vain Microsoft Azuren pilvipalvelimelle. Ratkaisin tilanteen luomalla käyttäjän (CREATE USER), antamalla sille oikeudet MediaSharingApp-tietokantaan ja lisäämällä tunnukset .env-tiedostoon.

## Kuvakaappaukset sovelluksen toiminnasta

### 1. Get server root

HTTP request:

![Get server root](screenshots/get-server-root1.png)

Response:

![Get server root](screenshots/get-server-root2.png)

### 2. Get api root

HTTP request:

![Get api root](screenshots/get-api-root1.png)

Response:

![Get api root](screenshots/get-api-root2.png)

---

## /media requests

### 3. GET all media items

HTTP request:

![GET all media items](screenshots/get-all-media-items1.png)

Response:

![GET all media items](screenshots/get-all-media-items2.png)

### 4. GET 2 media items

HTTP request:

![GET 2 media items](screenshots/get-2-media-items1.png)

Response:

![GET 2 media items](screenshots/get-2-media-items2.png)

### 5. GET media item by id

HTTP request:

![GET media item by id](screenshots/get-media-item-by-id1.png)

Response:

![GET media item by id](screenshots/get-media-items-by-id2.png)

### 6. GET media item by id (Not found)

HTTP request:

![GET media item by id (Not found)](screenshots/get-media-items-by-id-notfound1.png)

Response:

![GET media item by id (Not found)](screenshots/get-media-items-by-id-notfound2.png)

### 7. Add new media item with image (form-data)

HTTP request:

![Add new media item with image (form-data)](screenshots/add-new-media-item-with-image-formdata1.png)

Response:

![Add new media item with image (form-data)](screenshots/add-new-media-item-with-image-formdata2.png)

### 8. Modify existing media item

HTTP request:

![Modify existing media item](screenshots/modify-existing-media-item1.png)

Response:

![Modify existing media item](screenshots/modify-existing-media-item2.png)

### 9. Delete media item

HTTP request:

![Delete media item](screenshots/delete-media-item1.png)

Response:

![Delete media item](screenshots/delete-media-item2.png)
(poistamisen jälkeen## Kuvakaappaukset sovelluksen toiminnasta

### 1. Get server root

HTTP request:

![Get server root](screenshots/get-server-root1.png)

Response:

![Get server root](screenshots/get-server-root2.png)

### 2. Get api root

HTTP request:

![Get api root](screenshots/get-api-root1.png)

Response:

![Get api root](screenshots/get-api-root2.png)

---

## /media requests

### 3. GET all media items

HTTP request:

![GET all media items](screenshots/get-all-media-items1.png)

Response:

![GET all media items](screenshots/get-all-media-items2.png)

### 4. GET 2 media items

HTTP request:

![GET 2 media items](screenshots/get-2-media-items1.png)

Response:

![GET 2 media items](screenshots/get-2-media-items2.png)

### 5. GET media item by id

HTTP request:

![GET media item by id](screenshots/get-media-item-by-id1.png)

Response:

![GET media item by id](screenshots/get-media-items-by-id2.png)

### 6. GET media item by id (Not found)

HTTP request:

![GET media item by id (Not found)](screenshots/get-media-items-by-id-notfound1.png)

Response:

![GET media item by id (Not found)](screenshots/get-media-items-by-id-notfound2.png)

### 7. Add new media item with image (form-data)

HTTP request:

![Add new media item with image (form-data)](screenshots/add-new-media-item-with-image-formdata1.png)

Response:

![Add new media item with image (form-data)](screenshots/add-new-media-item-with-image-formdata2.png)

### 8. Modify existing media item

HTTP request:

![Modify existing media item](screenshots/modify-existing-media-item1.png)

Response:

![Modify existing media item](screenshots/modify-existing-media-item2.png)

### 9. Delete media item

HTTP request:

![Delete media item](screenshots/delete-media-item1.png)

Response:

![Delete media item](screenshots/delete-media-item2.png)

(poistamisen jälkeen / after deletion)

---

## /users requests

### 10. GET all users

HTTP request:

![GET all users](screenshots/get-all-users1.png)

Response:

![GET all users](screenshots/get-all-users2.png)

### 11. GET user by id

HTTP request:

![GET user by id](screenshots/get-user-by-id1.png)

Response:

![GET user by id](screenshots/get-user-by-id2.png)

### 12. Add new user

HTTP request:

![Add new user](screenshots/add-new-user1.png)

Response:

![Add new user](screenshots/add-new-user2.png)

### 13. Modify existing user

HTTP request:

![Modify existing user](screenshots/modify-existing-user1.png)

Response:

![Modify existing user](screenshots/modify-existing-user2.png)

### 14. Delete user

HTTP request:

![Delete user](screenshots/delete-user1.png)

Response:

![Delete user](screenshots/delete-user2.png)

---

## /likes requests

### 15. GET likes for media item 1

HTTP request:

![GET likes for media item 1](<screenshots/get-likes-for-media-item1(1).png>)

Response:

![GET likes for media item 1](<screenshots/get-likes-for-media-item2(1).png>)

### 16. GET likes by user 2

HTTP request:

![GET likes by user 2](<screenshots/get-likes-by-user1(2).png>)

Response:

![GET likes by user 2](<screenshots/get-likes-by-user2(2).png>)

### 17. Add new like

HTTP request:

![Add new like](screenshots/add-new-like1.png)

Response:

![Add new like](screenshots/add-new-like2.png)

### 18. Delete like

HTTP request:

![Delete like](screenshots/delete-like1.png)

Response:

![Delete like](screenshots/delete-like2.png))

---

## /users requests

### 10. GET all users

HTTP request:

![GET all users](screenshots/get-all-users1.png)

Response:

![GET all users](screenshots/get-all-users2.png)

### 11. GET user by id

HTTP request:

![GET user by id](screenshots/get-user-by-id1.png)

Response:

![GET user by id](screenshots/get-user-by-id2.png)

### 12. Add new user

HTTP request:

![Add new user](screenshots/add-new-user1.png)

Response:

![Add new user](screenshots/add-new-user2.png)

### 13. Modify existing user

HTTP request:

![Modify existing user](screenshots/modify-existing-user1.png)

Response:

![Modify existing user](screenshots/modify-existing-user2.png)

### 14. Delete user

HTTP request:

![Delete user](screenshots/delete-user1.png)

Response:

![Delete user](screenshots/delete-user2.png)

---

## /likes requests

### 15. GET likes for media item 1

HTTP request:

![GET likes for media item 1](<screenshots/get-likes-for-media-item1(1).png>)

Response:

![GET likes for media item 1](<screenshots/get-likes-for-media-item2(1).png>)

### 16. GET likes by user 2

HTTP request:

![GET likes by user 2](<screenshots/get-likes-by-user1(2).png>)

Response:

![GET likes by user 2](<screenshots/get-likes-by-user2(2).png>)

### 17. Add new like

HTTP request:

![Add new like](screenshots/add-new-like1.png)

Response:

![Add new like](screenshots/add-new-like2.png)

### 18. Delete like

HTTP request:

![Delete like](screenshots/delete-like1.png)

Response:

![Delete like](screenshots/delete-like2.png)
