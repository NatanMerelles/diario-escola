-- PostgreSQL 16.0
/*
 1) Escreva comandos SQL para inserir os dados abaixo conforme o diagrama
 apresentado.
 a) Pablo é Pai de Lucas
 b) Brenda é Mãe de Lucas
 */
create table aluno (
	id integer not null,
	nome varchar(50) not null
);

create table responsavel(
	id integer not null,
	nome varchar(50) not null
);

create table parentesco (
	idResponsavel integer not null,
	idAluno integer not null,
	parentesco varchar(20) not null
);

alter table
	aluno
add
	constraint pk_aluno primary key(id);

alter table
	responsavel
add
	constraint pk_responsavel primary key(id);

alter table
	parentesco
add
	constraint pk_parentesco primary key(idResponsavel, idAluno);

alter table
	parentesco
add
	constraint fk_parentesco_aluno foreign key (idAluno) references aluno;

alter table
	parentesco
add
	constraint fk_parentesco_responsavel foreign key (idResponsavel) references responsavel;

insert into
	aluno
values
	(1, 'Lucas');

insert into
	responsavel
values
	(1, 'Pablo');

insert into
	responsavel
values
	(2, 'Brenda');

insert into
	parentesco
values
	(1, 1, 'Pai'),
	(2, 1, 'Mãe');

/*
 2) Escreva uma consulta SQL para retornar dados únicos conforme tabela abaixo.
 Caso o aluno tenha mais de dois responsáveis, traga apenas os dois primeiros
 responsáveis encontrados na tabela.
 */
with parents as (
	select
		*
	from
		parentesco P,
		responsavel R
	where
		P.idResponsavel = R.id
	order by
		R.id desc
)
select
	distinct on (aluno) A.nome as aluno,
	P1.nome as responsavel,
	P1.parentesco,
	P2.nome as responsavel,
	P2.parentesco
from
	aluno A
	join parents P1 on A.id = P1.idAluno
	join parents P2 on A.id = P2.idAluno
	and P1.idResponsavel != P2.idResponsavel;

/* 
 Bônus:
 1) Escreva uma consulta SQL para trazer todos os dados. Seja criativo.
 */
select
	*
from
	parentesco P 
	full outer join aluno A on P.idAluno = A.id 
	full outer join responsavel R on P.idResponsavel = R.id;
