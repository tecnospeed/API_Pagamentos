<?php

$request = curl_init('https://api.pagamentobancario.com.br/api/v1/statement/parser');

curl_setopt($request, CURLOPT_POST, true);
curl_setopt(
    $request,
    CURLOPT_POSTFIELDS,
    array(
      'file' => '@' . realpath('file.ofx')
));

curl_setopt($request, CURLOPT_HTTPHEADER, array(
    'cnpjsh: 01001001000113',
    'tokensh: xxxxxxxxxxxxxxxx',
    'payercpfcnpj: 0100100100011'
));   

curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
echo curl_exec($request);

curl_close($request);