CREATE TABLE yarn (
  yarn_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  brand varchar(200) NOT NULL,
  yarn_name varchar(200) NOT NULL,
  weight_id int(11) NOT NULL,
  fibre_id int(11) NOT NULL,
  construction_id int(11) NOT NULL DEFAULT 0,
  colourway varchar(200) NOT NULL,
  actual_colour varchar(100) DEFAULT 'FFFFFF',
  dye_job_id int(11) NOT NULL DEFAULT 0,
  metres_per_ball int(11) NOT NULL DEFAULT 200,
  grams int(11) NOT NULL DEFAULT 100,
  num_balls int(11) NOT NULL DEFAULT 1,
  /* total_metres */
  cost_per_ball decimal(10,2) NOT NULL,
  /* total_cost */
  purpose varchar(500),
  wishlist boolean() DEFAULT 0,
  place varchar(200),
  web_link varchar(250),

  
  CONSTRAINT `fk_1` FOREIGN KEY (weight_id) REFERENCES yarn_weight (yarn_weight_id),
  CONSTRAINT `fk_2` FOREIGN KEY (fibre_id) REFERENCES fibre (fibre_id),
  CONSTRAINT `fk_3` FOREIGN KEY (construction_id) REFERENCES construction (construction_id),
  CONSTRAINT `fk_4` FOREIGN KEY (dye_job_id) REFERENCES dye_job (dye_job_id),
); 
