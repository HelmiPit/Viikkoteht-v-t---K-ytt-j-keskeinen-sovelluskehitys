# Tehtävä 5A - User authentication

Tämän sovelluksen tarkoitus on toimia medianjakopalvelun palvelimena. Tässä sovellukseen on lisätty käyttäjien tunnistautuminen (authentication) JWT-tokeneilla sekä käyttöoikeuksien hallinta (authorization) MVC-mallin mukaisesti.

## Mitkä osiot sait tehtyä

Sain tehtyä kaikki osiot 1-4.

## Mahdolliset ongelmat

Aluksi admin-käyttäjällä kirjautuminen palautti '401 Unauthorized', koska test-requests.http-tiedostossa oli väärä käyttäjätunnus suhteessa MediaSharingApp-tietokannan testidataan, ja 'jsonwebtoken'-kirjasto piti asentaa erikseen.

## Kuvakaappaukset sovelluksen toiminnasta

## Authentication routes

### 1. Post login (regular user)

HTTP request:

![Post login (regular user)](screenshots/post-login-regular-user1.png)

Response:

![Post login (regular user)](screenshots/post-login-regular-user2.png)

### 2. Post login (admin user)

HTTP request:

![Post login (admin user)](screenshots/post-login-admin-user1.png)

Response:

![Post login (admin user)](screenshots/post-login-admin-user2.png)

---

## /media requests

### 3. Add new media item (JSON, no file included)

HTTP request:

![Add new media item](screenshots/add-new-media-item1.png)

Response:

![Add new media item](screenshots/add-new-media-item2.png)

### 4. Modify own media item (user_id = 2)

HTTP request:

![Modify own media item](screenshots/modify-own-media-item1.png)

Response:

![Modify own media item](screenshots/modify-own-media-item2.png)

### 5. Modify another user's media item as regular user (unauthorized)

HTTP request:

![Modify another user's media item](screenshots/modify-another-user-info1.png)

Response:

![Modify another user's media item](screenshots/modify-another-user-info2.png)

### 6. Delete own media item

HTTP request:

![Delete own media item](screenshots/delete-own-media-item1.png)

Response:

![Delete own media item](screenshots/delete-own-media-item2.png)

### 7. Delete any media item as admin

HTTP request:

![Delete any media item as admin](screenshots/delete-any-media-item-as-admin1.png)

Response:

![Delete any media item as admin](screenshots/delete-any-media-item-as-admin2.png)

---

## /users requests

### 8. Modify own user info (user_id = 2)

HTTP request:

![Modify own user info](screenshots/modify-own-user-info1.png)

Response:

![Modify own user info](screenshots/modify-own-user-info2.png)

### 9. Modify another user info as regular user (forbidden)

HTTP request:

![Modify another user info as regular user](screenshots/modify-another-user-info-as-regular-user1.png)

Response:

![Modify another user info as regular user](screenshots/modify-another-user-info-as-regular-user2.png)

### 10. Modify any user info as admin

HTTP request:

![Modify any user info as admin](screenshots/modify-any-user-info-as-admin1.png)

Response:

![Modify any user info as admin](screenshots/modify-any-user-info-as-admin2.png)
