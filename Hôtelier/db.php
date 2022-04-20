<?php

// Connection à la base de donnée
$pdo = new PDO('mariadb:dbname=Suites;host=localhost', 'root', '', [PDO::ATTR_PERSISTENT => true]);