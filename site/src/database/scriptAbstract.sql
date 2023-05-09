create database abstract;

use abstract;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
sobrenome varchar(100),
dtNasc date,
telefone varchar(14),
email varchar(50),
senha varchar(20)
);

create table respostas (
idResposta int primary key auto_increment,
fkUsuario int,
constraint fkUsuarioResposta foreign key (fkUsuario) references usuario(idUsuario),
resultado varchar(100),
dtResposta DATETIME default current_timestamp
);

create table faleConosco (
idContato int primary key auto_increment,
mensagem varchar(250),
emailContato varchar(50)
)auto_increment = 100;
