<?php 
if(($conn = fsockopen('192.168.10.106',9100,$errno,$errstr))===false){
    echo 'Connection Failed' . $errno . $errstr;
}

$data = <<<HERE
    ^XA
    ^FT50,200
    ^A0N,200,200^FDTEST^FS
    ^FT50,500
    ^A0N,200,200^FDZebra Printer^FS
    ^XZ
HERE;

#send request
$fput = fputs($conn, $data, strlen($data));

#close the connection
fclose($conn);
