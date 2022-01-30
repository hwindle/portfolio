CREATE TABLE yarn_name (
  yarn_name_id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  yarn_name varchar(100) NOT NULL,
  brand_id int(11) NOT NULL,
  CONSTRAINT `brand` FOREIGN KEY (brand_id) REFERENCES brand (brand_id)
);
