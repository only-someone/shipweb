$(document).ready(function() {
    $.ajax({
        url: '/all',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            var map = new AMap.Map('container', {
                resizeEnable: true,
                center: [120.480983, 32.989628],
                zoom: 5,
                mapStyle: 'amap://styles/whitesmoke',
            });
            for (var doc in response["res"]) {
                var marker = new AMap.Marker({
                    position: response["res"][doc]["GPS"],//位置
                    map: map,
                })
                //alert(response["res"][doc]["MMSI"])
                // var content=getshipinfo(response["res"][doc]["MMSI"])
                var content = [" sad " + response["res"][doc]["GPS"]]
                AMap.event.addListener(marker, 'click', function () {
                    getshipinfo(response["res"][doc]["MMSI"])
                    var infoWindow = new AMap.InfoWindow({
                        content: content.join("<br/>"),
                    });
                    infoWindow.open(map, response["res"][doc]["GPS"]);
                });
                marker.setMap(map);//添加到地图
                //var tittle="chuanboming"
            }
        }
    })
})
/*
function createInfoWindow(title, content) {
    var info = document.createElement("div");
    info.className = "custom-info input-card content-window-card";

    //可以通过下面的方式修改自定义窗体的宽高
    //info.style.width = "400px";
    // 定义顶部标题
    var top = document.createElement("div");
    var titleD = document.createElement("div");
    var closeX = document.createElement("img");
    top.className = "info-top";
    titleD.innerHTML = title;
    closeX.src = "https://webapi.amap.com/images/close2.gif";
    closeX.onclick = closeInfoWindow;

    top.appendChild(titleD);
    top.appendChild(closeX);
    info.appendChild(top);

    // 定义中部内容
    var middle = document.createElement("div");
    middle.className = "info-middle";
    middle.style.backgroundColor = 'white';
    middle.innerHTML = content;
    info.appendChild(middle);

    // 定义底部内容
    var bottom = document.createElement("div");
    bottom.className = "info-bottom";
    bottom.style.position = 'relative';
    bottom.style.top = '0px';
    bottom.style.margin = '0 auto';
    var sharp = document.createElement("img");
    sharp.src = "https://webapi.amap.com/images/sharp.png";
    bottom.appendChild(sharp);
    info.appendChild(bottom);
    return info;
}
*/

//关闭信息窗体
function closeInfoWindow() {
    map.clearInfoWindow();
}

function getshipinfo(shipid){
    var data={"id":shipid};
    $.ajax({
        url:"/ship",
        type:"POST",
        data:data,
        dataType: "json",
        success:function(response){
            shipinfo=response["res"];
            allert(response["res"])
            return shipinfo;
        }
    })
}
