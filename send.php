<?php
if(isset($_POST['submit'])){
    $jmeno=htmlspecialchars($_POST['jmeno']);
    $email=htmlspecialchars($_POST['email']);
    $predmet=htmlspecialchars($_POST['predmet']);
    $zprava=htmlspecialchars($_POST['zprava']);

    $email=filter_var($email,FILTER_SANITIZE_EMAIL);
    
    $od='hlavkat@gmail.com';

    $hlavicka="From: $jmeno <$email>";
    $zprava="Predmet: $predmet\n\n$zprava";

    if(filter_var($email,FILTER_SANITIZE_EMAIL)&&mail($od,$predmet,$zprava,$hlavicka)){
        echo 'E-mail byl úspěšně odeslán.';
    }else{
        echo 'Při odesílání e-mailu došlo k chybě.';
    }
}
?>