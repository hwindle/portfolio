CREATE TABLE tool (
  tool_id int(11) NOT NULL AUTO_INCREMENT PRIMARY_KEY,
  craft_id int(11) NOT NULL,
  title varchar(150) NOT NULL,
  description text(),
  brought_at varchar(100),
  price decimal(10,2),
  img_url varchar(200),
  CONSTRAINT `fk_craft` FOREIGN KEY (craft_id)
  REFERENCES crafts (craft_id)
);
