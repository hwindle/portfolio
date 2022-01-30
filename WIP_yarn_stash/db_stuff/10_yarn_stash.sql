CREATE TABLE yarn_stash (
  yarn_stash_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  yarn_id int(11) NOT NULL,
  user_id int(11) NOT NULL,
  brought_at varchar(200),
  no_of_balls int(11) NOT NULL,
  total_price decimal(10,2) NOT NULL,
  total_meterage int(11),
  kept_in varchar(150) NOT NULL,
  label varchar(150),
  stash_pic_id int(11),
  nearest_col_id int(11) NOT NULL,
  colourway varchar(100) NOT NULL,
  CONSTRAINT `fk_pic` FOREIGN KEY (stash_pic_id) 
  REFERENCES uploaded_img (uploaded_img_id),
  CONSTRAINT `fk_nearest` FOREIGN KEY (nearest_col_id)
  REFERENCES nearest_col (nearest_col_id)
);
