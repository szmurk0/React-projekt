-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sty 14, 2025 at 11:43 PM
-- Wersja serwera: 10.4.32-MariaDB
-- Wersja PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sklepik_baza`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `description`, `price`, `image`) VALUES
(12, 'Burger', 'Pyszny burger lorem ipsum przykład tekst nie wiem', 5.99, 'https://static.takeaway.com/images/restaurants/pl/O73RO07N/products/1433558420.jpg?timestamp=1736403585'),
(13, 'HotDog', 'Pyszny hotdog, nie wiem co więcej pisać lorem ipsum ', 4.99, 'https://media.istockphoto.com/id/157479378/pl/zdj%C4%99cie/hot-dog-z-ketchupem.jpg?s=612x612&w=0&k=20&c=k7e-YE7dEsb-wkyXng9goo5D_2WCBk0hvZtBq9fuRL4='),
(15, 'Zapiekanka', 'Przepyszna zapiekaneczka, random tekst ', 6.99, 'https://larybar.pl/50-medium_default/zapiekanka-z-pieczarkami.jpg'),
(16, 'Frytki', 'Chrupiące frytki, z sosem, więcej random tekstu', 4.99, 'https://jedynytakikebab.pl/images/produkty/produkt_kebab_frytki.jpg');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
