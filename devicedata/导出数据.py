import csv
import random
from pymongo import MongoClient
from datetime import datetime
import time
def getid():
    with open(r'./MMSI.txt', 'r') as f:
        return str(f.read()).split("\n")

if __name__ == "__main__":
    client = MongoClient('127.0.0.1', 27017)
    db = client.ship
    collection_devicehis=db.devicehis
    while True:
        now = datetime.now()
        with open("device_data.csv", "w", newline='',encoding='utf-8-sig') as csvfile:
            writer = csv.writer(csvfile)

            means=["shipinfo", "发电机功率", '主机平均转速','增压器转速','气缸排气量',
                   '气缸冷却水温度','燃料油量','柴油量','活塞冷却水温度','机油温度',
                   '减速箱油压','增压器压强','海水温度','机舱温度', 
                   '发动机状态','增压器状态','气缸状态','油箱状态','更新时间']
            writer.writerow(means)#means.to_list().join(','))
            device_data=collection_devicehis.find()
            for x in device_data:
                writer.writerow([x["shipinfo"], x["发电机功率"], x['主机平均转速'],x['增压器转速'],x['气缸排气量'],
                   x['气缸冷却水温度'],x['燃料油量'],x['柴油量'],x['活塞冷却水温度'],x['机油温度'],
                   x['减速箱油压'],x['增压器压强'],x['海水温度'],x['机舱温度'],
                   x['发动机状态'],x['增压器状态'],x['气缸状态'],x['油箱状态'],x['更新时间']])
            csvfile.close()
        print("========休息======")
        time.sleep(7200)
