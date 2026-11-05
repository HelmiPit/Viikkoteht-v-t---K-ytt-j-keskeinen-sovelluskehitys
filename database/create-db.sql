-- Reset whole database (as root user)
DROP DATABASE IF EXISTS mediashare;
CREATE DATABASE mediashare;
USE mediashare;

-- Create UserLevels table
CREATE TABLE UserLevels (
  level_id INT NOT NULL AUTO_INCREMENT,
  level_name VARCHAR(255) NOT NULL UNIQUE,
  PRIMARY KEY (level_id)
);

-- Create Users table
CREATE TABLE Users (
  user_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  user_level_id INT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id),
  FOREIGN KEY (user_level_id) REFERENCES UserLevels(level_id) ON DELETE SET NULL
);

-- Create MediaItems table
CREATE TABLE MediaItems (
  media_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  filename VARCHAR(255) NOT NULL,
  filesize INT NOT NULL,
  media_type VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (media_id),
  FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- NEW TABLE 1: Create Albums table
CREATE TABLE Albums (
  album_id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (album_id),
  FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- NEW TABLE 2: Create AlbumMedia junction table
CREATE TABLE AlbumMedia (
  album_id INT NOT NULL,
  media_id INT NOT NULL,
  PRIMARY KEY (album_id, media_id),
  FOREIGN KEY (album_id) REFERENCES Albums(album_id) ON DELETE CASCADE,
  FOREIGN KEY (media_id) REFERENCES MediaItems(media_id) ON DELETE CASCADE
);

-- Create Comments table
CREATE TABLE Comments (
  comment_id INT NOT NULL AUTO_INCREMENT,
  media_id INT NOT NULL,
  user_id INT NOT NULL,
  comment_text TEXT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (comment_id),
  FOREIGN KEY (media_id) REFERENCES MediaItems(media_id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- Create Likes table
CREATE TABLE Likes (
  like_id INT NOT NULL AUTO_INCREMENT,
  media_id INT NOT NULL,
  user_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (like_id),
  FOREIGN KEY (media_id) REFERENCES MediaItems(media_id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);