<?php

    ob_start();
    system('ipconfig/all');
    $mycom=ob_get_contents(); 
    ob_clean(); 
    $findme = "Physical";
    $pmac = strpos($mycom, $findme); 
    $mac=substr($mycom,($pmac+36),17);
    echo $mac;
    $findme2 = "Host";
    $pmac2 = strpos($mycom, $findme2); 
    $mac2=substr($mycom,($pmac2+36),17);
    echo $mac2;
    require_once( 'php_classes/PrintIPP.php' );

    $ipp = new PrintIPP();
    $ipp->setHost( 'localhost' );
    $ipp->setPrinterURI( '/printers/epson' );
    $ipp->setData( 'invoice-2.pdf' );
    
    $ipp->printJob();
