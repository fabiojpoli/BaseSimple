CREATE DATABASE admin;

USE admin;

CREATE TABLE cliente (
  id int(11) NOT NULL AUTO_INCREMENT,
  nome varchar(100) NOT NULL,
  endereco varchar(100) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB, COLLATE=utf8_general_ci;

CREATE TABLE produto (
  id int(11) NOT NULL AUTO_INCREMENT,
  descricao varchar(100) NOT NULL,
  quantidade int(11) NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB, COLLATE=utf8_general_ci;

INSERT INTO cliente VALUES
(1, 'Cliente 1', 'Rua São João de Assis, 4352'),
(2, 'Cliente 2', 'Rua Theodoro Machiocci, 2553');
  
INSERT INTO produto VALUES
(1, 'Produto 1', 4),
(2, 'Produto 2', 12),
(3, 'Produto 3', 23),
(4, 'Produto 4', 14),
(5, 'Produto 5', 7);