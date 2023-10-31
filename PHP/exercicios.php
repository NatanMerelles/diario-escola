<?php
// PHP 7.4

$nomes = ['Francisco Souza', 'Guilherme Rosa', 'Arthur Golveia'];

$cliente1 = new stdClass();
$cliente1->nome = $nomes[0];

$cliente2 = new stdClass();
$cliente2->nome = $nomes[1];

$cliente3 = new stdClass();
$cliente3->nome = $nomes[2];

$arrayDeClientes = [$cliente1, $cliente2, $cliente3];

/* 
    1) Utilizando a variável $arrayDeClientes de um echo no nome do segundo cliente.
*/
echo($arrayDeClientes[1]->nome);

$arrayDeNascimento = [
'Francisco Souza' => '10-12-1996',
'Arthur Golveia' => '14-01-2000',
'Guilherme Rosa' => '26-05-1985',
'Marcelo Planalto' => '26-05-1985'
];

/* 
    2) Utilize a estrutura de dados $arrayDeNascimento para adicionar na estrutura
    $arrayDeClientes a data de nascimento de cada cliente.
*/
foreach($arrayDeClientes as $cliente) {
	$cliente->dataNascimento = $arrayDeNascimento[$cliente->nome];
}

/* 
    3) Faça a ordenação e impressão da estrutura $arrayDeClientes resultante do exercício
    2 pela data de nascimento (pode ser ascendente ou descendente).
*/
$datas = array();
foreach ($arrayDeClientes as $index => $cliente) {
   $datas[$index] = strtotime($cliente->dataNascimento);
}

array_multisort($datas, SORT_DESC, $arrayDeClientes);

foreach($arrayDeClientes as $cliente) {
	echo $cliente->nome.' nascido em '.$cliente->dataNascimento;
    echo '<br>';
}
?>