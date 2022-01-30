CREATE TABLE uploaded_img (
  uploaded_img_id int(11) NOT NULL AUTO_INCREMENT PRIMARY_KEY,
  user_id int(11) NOT NULL,
  img_url varchar(250) NOT NULL,
  CONSTRAINT `fk_user` FOREIGN KEY (user_id) REFERENCES user (user_id)
);
