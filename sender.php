<?php
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $date = $_POST['date'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];
    $text = $_POST['text'];

	$to = "s.balabanowicz@gmail.com";
	$date = date ("d.m.Y");
	$time = date ("h:i");
	$from = $email;
	$subject = "Aplikacja ze strony internetowej";

	
	$msg="
    Imię: $name /n
    Nazwisko: $surname /n
    Data spotkania: $date /n
    Numer telefonu: $phone /n
    Email: $email /n
    Tekst: $text"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<div class="alert alert-success" role="alert">
        Dziękuję! Skontaktujemy się wkrótce!
        </div>