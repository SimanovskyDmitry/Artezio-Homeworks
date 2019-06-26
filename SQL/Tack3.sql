CREATE TABLE IF NOT EXISTS relationships (
id INT UNSIGNED NOT NULL primary key,
chief_id INT UNSIGNED NOT NULL,
subordinate_id INT UNSIGNED NOT NULL);
INSERT INTO relationships (id, chief_id, subordinate_id) VALUES (null, 1, 2);
INSERT INTO relationships (id, chief_id, subordinate_id) VALUES (null, 1, 3);
INSERT INTO relationships (id, chief_id, subordinate_id) VALUES (null, 1, 4);
INSERT INTO relationships (id, chief_id, subordinate_id) VALUES (null, 2, 3);
INSERT INTO relationships (id, chief_id, subordinate_id) VALUES (null, 4, 5);
INSERT INTO relationships (id, chief_id, subordinate_id) VALUES (null, 5, 6);
SELECT worker.first_name, worker.last_name
FROM workersinfo worker
INNER JOIN relationships relationship on
 worker.id = relationship.subordinate_id
WHERE relationship.chief_id=1;