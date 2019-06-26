CREATE DATABASE IF NOT EXISTS workersinfo;
USE workersinfo;
CREATE TABLE IF NOT EXISTS wokers (
id INT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
position_id INTEGER NOT NULL,
salary REAL NOT NULL);
CREATE TABLE IF NOT EXISTS positions (
id INT UNSIGNED NOT NULL AUTO_INCREMENT primary key,
position_name VARCHAR(30) NOT NULL);
INSERT INTO positions (id, position_name) VALUES (null, 'Lead Engineer');
INSERT INTO positions (id, position_name) VALUES (null, 'First Category Engineer');
INSERT INTO positions (id, position_name) VALUES (null, 'Second Category Engineer');
INSERT INTO positions (id, position_name) VALUES (null, 'Third Category Engineer');
INSERT INTO wokers (id, first_name, last_name, position_id, salary) VALUES (null, 'Elon','Musk', 1, 3000000);
INSERT INTO wokers (id, first_name, last_name, position_id, salary) VALUES (null, 'Steve','Jobs', 2, 2000000);
INSERT INTO wokers (id, first_name, last_name, position_id, salary) VALUES (null, 'Bill','Gates', 3, 3500000);
INSERT INTO wokers (id, first_name, last_name, position_id, salary) VALUES (null, 'Isaac','Newton', 4, 1000000);
INSERT INTO wokers (id, first_name, last_name, position_id, salary) VALUES (null, 'Nicola','Tesla', 2, 60000);
INSERT INTO wokers (id, first_name, last_name, position_id, salary) VALUES (null, 'Thomas','Edison', 3, 80000);