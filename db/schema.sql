DROP DATABASE IF EXISTS freshCatch;
CREATE DATABASE freshCatch;

CREATE TABLE userData (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	email VARCHAR(50),
	password VARCHAR(50),
);

CREATE TABLE fishData (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	fish_type VARCHAR(13),
	fish_length DECIMAL(4,2),
	user_id INT,
	date_caught DATE,
	FOREIGN KEY (user_id) REFERENCES userData(id)
);

CREATE TABLE lakeData (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	lake_name TEXT,
	city VARCHAR(50)
);