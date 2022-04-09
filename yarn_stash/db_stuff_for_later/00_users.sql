CREATE TABLE users (
  user_id int(11) NOT NULL AUTO_INCREMENT PRIMARY_KEY,
  user_name varchar(30) NOT NULL,
  email varchar(200) UNIQUE,
  password varchar(200) NOT NULL
);
