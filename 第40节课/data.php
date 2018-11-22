<?php
// 实际的场合  数据接口 逻辑更多复杂  比如权限
header('Access-Control-Allow-Origin:*');
$arr = array(
    array(
        'id'=>1,
        'name'=>'追梦',
        'age'=>18
    ),
    array(
        'id'=>2,
        'name'=>'阿飞',
        'age'=>18
    )
);
// 必须 ;结束

// 编译成字符串
echo json_encode($arr);

?>