
<!-- control shift p -->

<?php

$cleanname = false;

$cleanemail = false;

$cleannumber = false;

$cleansubject = false;

$cleanmessage = false;

$number = "";

$subject = "";

$name = "";

$aaa = false;

if (isset($_POST["email"]) && $_POST["email"] != "" && isset($_POST["name"]) && $_POST["name"] != "" && isset($_POST["phone"]) && $_POST["phone"] != "" && isset($_POST["message"]) && $_POST["message"] != "" && isset($_POST["subject"]) && $_POST["subject"] != "") {



        // Regex Name 

        $pattern = "/^[a-zA-ZÀ-ÿ0-9-']+$/";
        $pattern2 = "/^([+]?\d{1,2}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$/";


        if (!preg_match($pattern, $_POST['name'])) {
                echo "Wrong name";
        }



        // Regex E-mail 




        elseif (!filter_var(
                $_POST["email"],
                FILTER_VALIDATE_EMAIL

        )) {
                echo "Wrong E-mail";
        }


        // Regex Number




        elseif (!preg_match($pattern2, $_POST['phone'])) {
                echo "Wrong number";
        } else {
                $name = htmlentities($_POST['name']);
                $cleanname = true;

                $number = htmlentities($_POST['phone']);
                $cleannumber = true;

                $email = htmlentities($_POST['email']);
                $cleanemail = true;

                $subject = htmlentities($_POST['subject']);
                $cleansubject = true;

                $message = htmlentities($_POST['message']);
                $cleanmessage = true;

                
                mail('john432@hotmail.fr', 'un client vous a envoyé un retour dans la page contact', $name . "\r\n" . $email . "\r\n" . $number . "\r\n" . $subject . "\r\n" . $message);
                echo 'Votre message a bien été envoyé';
        }
}


?>

