-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 19-Jan-2024 às 23:19
-- Versão do servidor: 10.4.32-MariaDB
-- versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `ap2`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `autores`
--

CREATE TABLE `autores` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `autorname` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `autores`
--

INSERT INTO `autores` (`id`, `autorname`, `created_at`, `updated_at`) VALUES
(78, 'Fernando Pessoa', '2024-01-19 17:36:46', '2024-01-19 17:36:46'),
(79, 'Eça de Queirós', '2024-01-19 17:37:46', '2024-01-19 17:37:46'),
(80, 'Luís de Camões', '2024-01-19 17:38:38', '2024-01-19 17:38:38');

-- --------------------------------------------------------

--
-- Estrutura da tabela `livros`
--

CREATE TABLE `livros` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `livroname` varchar(191) NOT NULL,
  `id_autor` varchar(191) NOT NULL,
  `nameautor` varchar(191) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Extraindo dados da tabela `livros`
--

INSERT INTO `livros` (`id`, `livroname`, `id_autor`, `nameautor`, `created_at`, `updated_at`) VALUES
(36, 'Livro do Desassossego', '78', NULL, '2024-01-19 17:36:46', '2024-01-19 17:36:46'),
(37, 'Mensagem', '78', NULL, '2024-01-19 17:37:05', '2024-01-19 17:37:05'),
(38, 'Tabacaria', '78', NULL, '2024-01-19 17:37:21', '2024-01-19 17:37:21'),
(39, 'Os Maias', '79', NULL, '2024-01-19 17:37:46', '2024-01-19 17:37:46'),
(40, 'O Crime do Padre Amaro', '79', NULL, '2024-01-19 17:38:02', '2024-01-19 17:38:02'),
(41, 'Os Lusíadas', '80', NULL, '2024-01-19 17:38:38', '2024-01-19 17:38:38');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `autores`
--
ALTER TABLE `autores`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `livros`
--
ALTER TABLE `livros`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `autores`
--
ALTER TABLE `autores`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT de tabela `livros`
--
ALTER TABLE `livros`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
