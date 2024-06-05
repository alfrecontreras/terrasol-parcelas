<?php
require 'vendor/autoload.php';

use OpenApi\Generator;

header('Content-Type: application/json');

$openapi = Generator::scan(['./src']);
echo $openapi->toJson();
