SELECT worker.first_name, worker.last_name, positionn.position_name
FROM workersinfo worker
INNER JOIN positions positionn on
 worker.position_id = positionn.id
WHERE worker.salary < 30000;