SELECT worker.first_name, worker.last_name
FROM workersinfo worker
WHERE worker.position_id = 1 AND worker.salary < 30000;