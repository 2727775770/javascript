<?php

$jsonp = $_GET['callback'];
$arr = array('追梦',18);

//echo getData($arr)
echo $jsonp.'('.json_encode($arr).')';






?>