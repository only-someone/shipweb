#mysql> SELECT * FROM passwd INTO OUTFILE '/tmp/runoob.txt'
#    -> FIELDS TERMINATED BY ',' ENCLOSED BY '"'
#    -> LINES TERMINATED BY '\r\n';
#    导出csv文件，约定数据格式
#MySQL标记位记录是否导出或者利用时间从最新的开始导出直到上一次导出时间

import json
from pymongo import MongoClient
import pymongo
import csv
import datetime
import os
from threading import Timer
from datetime import datetime
import time
if __name__ == "__main__":
    client = MongoClient('127.0.0.1', 27017)
    db = client.ship
    collection_device=db.device
    collection_devicehis=db.devicehis
    while True:
        print(datetime.now())
        for filename in os.listdir():
            if(filename!="MySQL接入.py"):
                with open(filename,encoding='UTF-8') as csvfile:
                    csv_reader = csv.reader(csvfile)  # 使用csv.reader读取csvfile中的文件
                    for device in csv_reader:
                        data={
                            "_id":device[0],
                            "shipinfo":device[0],
                            "发电机功率":device[1],
                            '主机平均转速':device[2],
                            '增压器转速':device[3],
                            '气缸排气量':device[4],
                            '气缸冷却水温度':device[5],
                            '燃料油量':device[6],
                            '柴油量':device[7],
                            '活塞冷却水温度':device[8],
                            '机油温度':device[9],
                            '减速箱油压':device[10],
                            '增压器压强':device[11],
                            '海水温度':device[12],
                            '机舱温度':device[13],
                            '更新时间':device[14],
                        }
                        datahis = {
                            "shipinfo": device[0],
                            "发电机功率": device[1],
                            '主机平均转速': device[2],
                            '增压器转速': device[3],
                            '气缸排气量': device[4],
                            '气缸冷却水温度': device[5],
                            '燃料油量': device[6],
                            '柴油量': device[7],
                            '活塞冷却水温度': device[8],
                            '机油温度': device[9],
                            '减速箱油压': device[10],
                            '增压器压强': device[11],
                            '海水温度': device[12],
                            '机舱温度': device[13],
                            '更新时间': device[14],
                        }
                        collection_device.save(data)
                        collection_devicehis.insert_one(datahis)
                    csvfile.close()
                    os.remove(filename)
        time.sleep(60)




