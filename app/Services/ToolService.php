<?php

namespace App\Services;


class ToolService
{
    /**
     * 构造前端的select 
     * 
     */
    public function objColumn($data, $key, $justkey = true) {
        $returnData = [];
        foreach ($data as $item) {
            if ($justkey) {
                $returnData[] = $item->$key;
            } else {
                $returnData[$item->$key] = $item;
            }
        }
        return $returnData;
    }

    public function csv($downname, $header, $data) {
        $tempfile = "/tmp/".time().".csv";
        $fp = fopen($tempfile, 'w+');//生成CSV文件
        $row = [];
        foreach($header as $k => $v) {
            $row[] = iconv("UTF-8", "GB2312//IGNORE", $v);
        }
        fputcsv($fp, $row);//生成报表头，
        foreach ($data as $item) {
            $row = [];
            foreach (array_keys($header) as $key) {
                $row[] = iconv("UTF-8", "GB2312//IGNORE", strval($item[$key]));
            }
            fputcsv($fp, $row);
        }
        fclose($fp);//关闭操作文件
        header("Content-Type: text/csv;charset=utf-8"); 
        header("Content-Disposition: attachment; filename=".$downname.'-'.date('Ymd').".csv"); 
        header('Cache-Control:must-revalidate,post-check=0,pre-check=0'); 
        header('Expires:0'); 
        header('Pragma:public');
        ob_start();//对输出数据进行压缩，可减少用户下载时候的等待时间
        echo file_get_contents($tempfile);
        ob_end_flush();//结束压缩
    }
}