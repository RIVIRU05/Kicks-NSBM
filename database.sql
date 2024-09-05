
CREATE DATABASE IF NOT EXISTS `demo`;
USE `demo`;


CREATE TABLE IF NOT EXISTS `joinus` (
  `id` int(11) NOT NULL,
  `country` enum('SL', 'US', 'IND', 'ML') DEFAULT NULL,
  `usrname` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `msg` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


ALTER TABLE `joinus`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `joinus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

CREATE TABLE signup (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    usrname VARCHAR(50) NOT NULL UNIQUE,
    pw VARCHAR(255) NOT NULL,
    repw VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
