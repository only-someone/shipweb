# -*- coding: utf-8 -*-
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
                try:
                    with open(filename,encoding='utf-8-sig') as csvfile:
                        csv_reader = csv.reader(csvfile)  # 使用csv.reader读取csvfile中的文件
                        birth_header = next(csv_reader)
                        for device in csv_reader:
                            data={
                                "_id":device[0],
                                "shipinfo":device[0],
                                "英文名":device[1],
                                "发电机功率":device[2],
                                '主机平均转速':device[3],
                                '增压器转速':device[4],
                                '气缸排气量':device[5],
                                '气缸冷却水温度':device[6],
                                '燃料油量':device[7],
                                '柴油量':device[8],
                                '活塞冷却水温度':device[9],
                                '机油温度':device[10],
                                '减速箱油压':device[11],
                                '增压器压强':device[12],
                                '海水温度':device[13],
                                '机舱温度':device[14],
                                '发动机状态':device[15],
                                '增压器状态':device[16],
                                '气缸状态':device[17],
                                '油箱状态':device[18],
                                '更新时间':device[19],
                            }
                            datahis = {
                                "shipinfo":device[0],
                                "英文名":device[1],
                                "发电机功率":device[2],
                                '主机平均转速':device[3],
                                '增压器转速':device[4],
                                '气缸排气量':device[5],
                                '气缸冷却水温度':device[6],
                                '燃料油量':device[7],
                                '柴油量':device[8],
                                '活塞冷却水温度':device[9],
                                '机油温度':device[10],
                                '减速箱油压':device[11],
                                '增压器压强':device[12],
                                '海水温度':device[13],
                                '机舱温度':device[14],
                                '发动机状态':device[15],
                                '增压器状态':device[16],
                                '气缸状态':device[17],
                                '油箱状态':device[18],
                                '更新时间':device[19],
                            }

                            current_device = collection_device.find_one({"_id": device[0]})
                            print(device[19])
                            try:
                                current_date = time.mktime(time.strptime(current_device["更新时间"], "%Y-%m-%d/%H/%M"))
                            except Exception as e:
                                print(e)
                                current_date = time.mktime(time.strptime("2017-01-01/1/1", "%Y-%m-%d/%H/%M"))
                            date = time.mktime(time.strptime(device[19], "%Y-%m-%d/%H/%M"))
                            if current_date < date:
                                print(device[0] + "更新")
                                collection_device.save(data)
                            collection_devicehis.insert(datahis)
                        csvfile.close()
                        os.remove(filename)
                except Exception as e:
                    print("文件格式错误或者没有数据")
                    os.remove(filename)
        time.sleep(60)

