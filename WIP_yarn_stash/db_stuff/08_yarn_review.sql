CREATE TABLE yarn_review (
  yarn_review_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  yarn_id int(11) NOT NULL,
  user_id int(11) NOT NULL,
  title varchar(100) NOT NULL,
  description varchar(300),
  score int(2) NOT NULL,
  CONSTRAINT `fk_yarn` FOREIGN KEY (yarn_id) REFERENCES yarn (yarn_id),
  CONSTRAINT `fk_user` FOREIGN KEY (user_id) REFERENCES users (user_id)
);
