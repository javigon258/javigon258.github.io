<?php
    $nombres = [
        "Javier Gonzalez","Jose Rafa Alvarez", "Mario Navarro", 
        "Fran Ramirez", "Marcos Gallardo", "Angelo Barbara",
        "Rafael Zurita", "Guillermo Boquizo", "Rafa Sojo",
        "Suso Mejias", "Jose Manuel Bravo", "Chema Romero"
    ];

    $input = strtolower($_REQUEST["input"]);
    echo $input;
    
    $lInput = strlen($valorInput);
    $mensaje = "";

    if($input !== ""){
        foreach ($nombres as $alumno) {
            if (stristr($input, substr($alumno, 0, $lInput))) {
                if ($mensaje === "") {
                    $mensaje = "$alumno";
                } else {
                    $mensaje .= ", $alumno";
                }
            }
        }
    }
    echo $mensaje === "" ? "No hay coincidencias" : $mensaje;

    
?>