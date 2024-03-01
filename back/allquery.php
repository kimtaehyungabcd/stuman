<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$data = [];

if(isset($_GET['Religion'])) {
    $religion = $_GET['Religion'];
    $data = [
        [
            "religion" => "hindu",
            "number" => 12 
        ],
        [
            "religion" => "chrition",
            "number" => 12 
        ]
    ];
    
} else {
    // Handle case when 'Religion' parameter is missing
    $data['error'] = "Religion parameter is missing";
}

echo json_encode($data);
?>
