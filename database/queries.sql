USE mediashare;

-- Select all media items along with the username of the owner
SELECT MediaItems.media_id, MediaItems.filename, Users.username 
  FROM MediaItems 
  JOIN Users ON MediaItems.user_id = Users.user_id;

-- NEW QUERY 1: Select all media items belonging to a specific album along with album title and owner
SELECT Albums.title AS AlbumTitle, Users.username AS Owner, MediaItems.title AS MediaTitle, MediaItems.filename
  FROM Albums
  JOIN Users ON Albums.user_id = Users.user_id
  JOIN AlbumMedia ON Albums.album_id = AlbumMedia.album_id
  JOIN MediaItems ON AlbumMedia.media_id = MediaItems.media_id
  WHERE Albums.album_id = 1;

-- NEW QUERY 2: Count the number of media items in each album
SELECT Albums.title, COUNT(AlbumMedia.media_id) AS TotalItems
  FROM Albums
  LEFT JOIN AlbumMedia ON Albums.album_id = AlbumMedia.album_id
  GROUP BY Albums.album_id;

-- NEW UPDATE: Update title and description of an album
UPDATE Albums 
  SET title = 'Summer Vacation 2026', description = 'Updated memories from the trip :)' 
  WHERE album_id = 1;

-- NEW DELETE: Remove a specific media item from an album
DELETE FROM AlbumMedia 
  WHERE album_id = 1 AND media_id = 2;