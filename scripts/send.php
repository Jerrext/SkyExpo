<?php
    //получаем данные с элементов формы
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    $tovar = $_POST['tovar'];
    $msg = $_POST['msg'];
    //обрабатываем полученные данные
    //преобразование символов в сущности
    $name = htmlspecialchars($name);
    $tel = htmlspecialchars($tel);
    $email = htmlspecialchars($email);
    $tovar = htmlspecialchars($tovar);
    $msg = htmlspecialchars($msg);
    //декодирование URL
    $name = urldecode($name);
    $tel = urldecode($tel);
    $email = urldecode($email);
    $tovar = urldecode($tovar);
    $msg = urldecode($msg);
    //удаление пробельных символов с обоих сторо
    $name = trim($name);
    $tel = trim($tel);
    $email = trim($email);
    $tovar = trim($tovar);
    $msg = trim($msg);
    //отправляем данные на почту
    if (mail("kolpakov_2002@mail.ru",
            "Новое письмо с сайта",
            "Имя: ".$name."\n".
            "Телефон: ".$tel."\n".
            "E-mail: ".$email."\n".
            "Интересующий товар: ".$tovar."\n".
            "Сообщение: ".$msg."\n",
            "From: no-reply@mydomain.ru \r\n")
       )
        header('Location: index.php');
?>