CREATE TABLE yarn (
  yarn_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  brand_id int(11) NOT NULL,
  yarn_name_id int(11) NOT NULL,
  put_up_id int(11) NOT NULL,
  yarn_weight_id int(11) NOT NULL,
  notes varchar(300),
  handspun boolean() DEFAULT 0,
  fibres_id int(11) NOT NULL,
  metres_per_ball int(11) NOT NULL DEFAULT 0,
  price_gbp decimal(10,2) NOT NULL,
  ball_weight int(11) NOT NULL,

  CONSTRAINT `fk_1` FOREIGN KEY (brand_id) REFERENCES brand (brand_id),
  CONSTRAINT `fk_2` FOREIGN KEY (yarn_name_id) REFERENCES yarn_name (yarn_name_id),
  CONSTRAINT `fk_3` FOREIGN KEY (put_up_id) REFERENCES put_up (put_up_id),
  CONSTRAINT `fk_4` FOREIGN KEY (yarn_weight_id) REFERENCES yarn_weights (yarn_weight_id),
  CONSTRAINT `fk_5` FOREIGN KEY (fibres_id) REFERENCES fibres (fibres_id)
);
