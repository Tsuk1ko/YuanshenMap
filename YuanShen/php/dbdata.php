<?php
$datatype=$_POST["postdata"];
//数据库的查询PHP
$manager = new MongoDB\Driver\Manager("mongodb://yuanshen.site:27017",array('username'=>'CCW','password'=>'ccw'));//连接数据库
//设置查询条件  
$filter = ['type' => 'FeatureCollection'];
//设置查询选项
$options = [
    'projection' => ['_id' => 0],//不在查询结果中显示数据库ID
    'sort' => ['type' => 1],//排序方式，1位按查询条件正序，-1位倒叙
];

// 查询数据
$query = new MongoDB\Driver\Query($filter, $options);
$cursor = $manager->executeQuery($datatype, $query);
$resultlist=[];
foreach ($cursor as $document) {
    $document=json_encode($document);
    // $resultval=json_decode($document,true);
}
print_r($document);
?>