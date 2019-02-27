<?php
header('Content-Type: text/html; charset=utf-8');

    $nombres = [
        "Javier Gonzalez","Jose Rafa Alvarez", "Mario Navarro", 
        "Fran Ramirez", "Marcos Gallardo", "Angelo Barbara",
        "Rafael Zurita", "Guillermo Boquizo", "Rafa Sojo",
        "Suso Mejias", "Jose Manuel Bravo", "Chema Romero"
    ];

    $input = strtolower($_GET["input"]);
    
    $lInput = strlen($input);
    $mensaje = "";

    if($input !== ""){
        foreach ($nombres as $alumno) {
            if(preg_match("/".$input."/i",$alumno)){
                $mensaje .= ", $alumno ";
            }
        }
    }
    echo $mensaje === "" ? "No hay coincidencias" : $mensaje;

    
?>