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
dtHorario DATETIME default current_timestamp,
questao1 varchar(45),
questao2 varchar(45),
questao3 varchar(45),
questao4 varchar(45),
questao5 varchar(45)
);
-- ver a questão do relacionamento forte/ pk composta

create table faleConosco (
idContato int primary key auto_increment,
mensagem varchar(250),
emailContato varchar(50)
)auto_increment = 100;

delete from usuario where idUsuario = 8;

desc respostas;
select * from usuario;
select * from faleConosco;
select * from respostas;

