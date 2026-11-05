USE mediashare;

-- Insert user levels
INSERT INTO UserLevels (level_name) VALUES ('Admin'), ('User');

-- Insert users
INSERT INTO Users VALUES (null, 'VCHar', 'secret123', 'vchar@example.com', 1, null);
INSERT INTO Users VALUES (null, 'Donatello', 'secret234', 'dona@example.com', 2, null);
INSERT INTO Users VALUES (null, 'JaneDoe', 'pass5678', 'jane@example.com', 2, null);

-- Insert media items
INSERT INTO MediaItems (filename, filesize, title, description, user_id, media_type) 
  VALUES ('ffd8.jpg', 887574, 'Favorite drink', null, 1, 'image/jpeg'),
         ('dbbd.jpg', 60703, 'Miika', 'My Photo', 1, 'image/jpeg'),
         ('2f9b.jpg', 30635, 'Aksux and Jane', 'friends', 2, 'image/jpeg');

-- NEW: Insert albums
INSERT INTO Albums (user_id, title, description) VALUES
  (1, 'Vacation 2026', 'Photos and videos from my summer trip this year :D'),
  (2, 'Work Projects', 'Compilation of work-related media');

-- NEW: Link media items to albums
INSERT INTO AlbumMedia (album_id, media_id) VALUES
  (1, 1),
  (1, 2),
  (2, 3);

-- Insert comments and likes
INSERT INTO Comments (media_id, user_id, comment_text) VALUES
  (1, 2, 'Cool photo!'),
  (1, 3, 'Love this <3');

INSERT INTO Likes (media_id, user_id) VALUES
  (1, 2),
  (1, 3),
  (2, 2);
