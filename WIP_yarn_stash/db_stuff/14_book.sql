CREATE TABLE book (
  book_id int(11) NOT NULL AUTO_INCREMENT PRIMARY_KEY,
  craft_id int(11) NOT NULL,
  author varchar(100) NOT NULL,
  title varchar(100) NOT NULL,
  no_of_patterns int(11) NOT NULL,
  stitch_dict boolean() DEFAULT 0,
  lang_id int(11) NOT NULL,
  CONSTRAINT `fk_craft` FOREIGN KEY (craft_id)
  REFERENCES crafts (craft_id),
  CONSTRAINT `fk_lang` FOREIGN KEY (lang_id)
  REFERENCES lang (lang_id)
);
