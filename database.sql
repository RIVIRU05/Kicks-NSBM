
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
