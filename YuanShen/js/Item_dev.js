//初始化地图
t = L.latLngBounds([0, 0], [-66.5, 90]);
var map = L.map("map", {
    //crs: L.CRS.Simple,
    center: [-35, 45],
    zoomDelta: 0.5,
    zoomSnap: 0.5,
    maxZoom: 7,
    minZoom: 4,
    zoom: 4,
    maxBounds: t,
    attributionControl: false,
    zoomControl: false
});
L.control.attribution({
    prefix: "<a href='https://leafletjs.com/'>米游社空荧酒馆</a>"
}).addTo(map);
L.control.zoom({
    zoomInTitle: '+',
    zoomOutTitle: '-'
}).addTo(map);
L.TileLayer.T = L.TileLayer.extend({
    getTileUrl: function (coords) {
        x = coords.x
        y = coords.y
        return 'tiles1/' + coords.z + '/ppp' + x + '_' + y + '.png';
    }
});
L.tileLayer.t = function () {
    return new L.TileLayer.T();
}
map.addLayer(L.tileLayer.t());
L.TileLayer.T1 = L.TileLayer.extend({
    getTileUrl: function (coords) {
        x = coords.x
        y = coords.y
        if (x % 2 == 0)
            if (y % 2 == 0)
                return 'tiles2/SY.png';
            else return 'tiles2/SY1.png';
        else
        if (y % 2 == 0)
            return 'tiles2/SY1.png';
        else return 'tiles2/SY.png';
    }
});
L.tileLayer.t1 = function () {
    return new L.TileLayer.T1();
}
map.addLayer(L.tileLayer.t1());
//各个坐标的分类类别的初始化
var Layer_FST = L.layerGroup();
var Layer_YST = L.layerGroup();
var Layer_DLK_MD = L.layerGroup();
var Layer_DLK_LY = L.layerGroup();
var Layer_JYJJ = L.layerGroup();
var Layer_NSH = L.layerGroup();
var Layer_LLBH = L.layerGroup();
var Layer_GGG = L.layerGroup();
var Layer_DDL = L.layerGroup();
var Layer_SXLYH = L.layerGroup();
var Layer_MFMG = L.layerGroup();
var Layer_LLM = L.layerGroup();
var Layer_FCJ = L.layerGroup();
var Layer_PGYZ = L.layerGroup();
var Layer_YPS = L.layerGroup();
var Layer_SP = L.layerGroup();
var Layer_SJK_LY = L.layerGroup();
var Layer_BTK_LY = L.layerGroup();
var Layer_SJK_MD = L.layerGroup();
var Layer_BTK_MD = L.layerGroup();
var Layer_YJSW_LY = L.layerGroup();
var Layer_YJLZ_LY = L.layerGroup();
var Layer_LYSS_LY = L.layerGroup();
var Layer_ZWCLR_LY = L.layerGroup();
var Layer_SYFS_LY = L.layerGroup();
var Layer_DXQQR_LY = L.layerGroup();
//定义各个坐标使用的图标
var ST = L.Icon.extend({
    options: {
        iconSize: [21.6, 22.8], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [10.8, 11.4], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [0, -11.4] // point from which the popup should open relative to the iconAnchor
    }
});
var DLK = L.Icon.extend({
    options: {
        shadowUrl: "./imgs/BK_45.png",
        iconSize: [33, 33], // size of the icon
        shadowSize: [45, 45], // size of the shadow
        iconAnchor: [16.5, 16.5], // point of the icon which will correspond to marker's location
        shadowAnchor: [22.5, 22.5], // the same for the shadow
        popupAnchor: [0, -16.5] // point from which the popup should open relative to the iconAnchor
    }
});
var WP = L.Icon.extend({
    options: {
        shadowUrl: "./imgs/BK_32.png",
        iconSize: [16, 16], // size of the icon
        shadowSize: [22, 22], // size of the shadow
        iconAnchor: [8, 8], // point of the icon which will correspond to marker's location
        shadowAnchor: [11, 11], // the same for the shadow
        popupAnchor: [0, -8] // point from which the popup should open relative to the iconAnchor
    }
});
var KW = L.Icon.extend({
    options: {
        iconSize: [20, 20], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [10, 10], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [0, -10] // point from which the popup should open relative to the iconAnchor
    }
});
var JYG = L.Icon.extend({
    options: {
        shadowUrl: "./imgs/BK_32.png",
        iconSize: [24, 24], // size of the icon
        shadowSize: [32, 32], // size of the shadow
        iconAnchor: [12, 12], // point of the icon which will correspond to marker's location
        shadowAnchor: [16, 16], // the same for the shadow
        popupAnchor: [0, -12] // point from which the popup should open relative to the iconAnchor
    }
});
var PTG = L.Icon.extend({
    options: {
        shadowUrl: "./imgs/BK_32.png",
        iconSize: [16, 16], // size of the icon
        shadowSize: [22, 22], // size of the shadow
        iconAnchor: [8, 8], // point of the icon which will correspond to marker's location
        shadowAnchor: [11, 11], // the same for the shadow
        popupAnchor: [0, -8] // point from which the popup should open relative to the iconAnchor
    }
});
var FST = new ST({
    iconUrl: "./imgs/FST.png"
});
var YST = new ST({
    iconUrl: "./imgs/YST.png"
});
var DLK_MD = new DLK({
    iconUrl: "./imgs/DLK_MD.png",
});
var DLK_LY = new DLK({
    iconUrl: "./imgs/DLK_LY.png"
});
var JYJJ = new WP({
    iconUrl: "./imgs/JYJJ.png"
});
var NSH = new WP({
    iconUrl: "./imgs/NSH.png"
});
var LLBH = new WP({
    iconUrl: "./imgs/LLBH.png"
});
var PGYZ = new WP({
    iconUrl: "./imgs/PGYZ.png"
});
var FCJ = new WP({
    iconUrl: "./imgs/FCJ.png"
});
var GGG = new WP({
    iconUrl: "./imgs/GGG.png"
});
var DDL = new WP({
    iconUrl: "./imgs/DDL.png"
});
var SXLYH = new WP({
    iconUrl: "./imgs/SXLYH.png"
});
var MFMG = new WP({
    iconUrl: "./imgs/MFMG.png"
});
var LLM = new WP({
    iconUrl: "./imgs/LLM.png"
});
var YPS = new WP({
    iconUrl: "./imgs/YPS.png"
});
var SP = new WP({
    iconUrl: "./imgs/SP.png"
});
var SJK = new KW({
    iconUrl: "./imgs/SJK.png"
});
var BTK = new KW({
    iconUrl: "./imgs/BTK.png"
});
var YJSW = new JYG({
    iconUrl: "./imgs/YJSW.png"
});
var YJLZ = new JYG({
    iconUrl: "./imgs/YJLZ.png"
});
var SYFS = new PTG({
    iconUrl: "./imgs/SYFS.png"
});
var ZWCLR = new PTG({
    iconUrl: "./imgs/ZWCLR.png"
});
var LYSS = new PTG({
    iconUrl: "./imgs/LYSS.png"
});
var DXQQR = new PTG({
    iconUrl: "./imgs/DXQQR.png"
});
//添加坐标点击信息
function onEachFeature(feature, layer) {
    var popupContent = `<b>${feature.properties.popTitle}</b>&nbsp&nbsp&nbsp&nbsp&nbspid:${feature.id}<br><a href="javascript:delmarker2(${feature.id});">删除点位</a>`;

    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
    }
    layer.bindPopup(popupContent);
}
//定义分类的三个数组，分别对应坐标的组别，坐标的位置和坐标的名称，新增时在对应数组后增加对象即可
var typearray1=[Layer_FST,Layer_YST,Layer_DLK_MD,Layer_DLK_LY,Layer_JYJJ,Layer_NSH,Layer_LLBH,Layer_GGG,Layer_DDL,Layer_SXLYH,Layer_MFMG,Layer_LLM,Layer_FCJ,Layer_PGYZ,Layer_YPS,Layer_SP,Layer_SJK_LY,Layer_BTK_LY,Layer_SJK_MD,Layer_BTK_MD,Layer_YJSW_LY,Layer_YJLZ_LY,Layer_LYSS_LY,Layer_ZWCLR_LY,Layer_SYFS_LY,Layer_DXQQR_LY];
var typearray2=[JS_FST,JS_YST ,JS_DLK_MD,JS_DLK_LY,JS_JYJJ,JS_NSH ,JS_LLBH,JS_GGG ,JS_DDL ,JS_SXLYH ,JS_MFMG,JS_LLM ,JS_FCJ ,JS_PGYZ,JS_YPS ,JS_SP,JS_SJK_LY ,JS_BTK_LY ,JS_SJK_MD ,JS_BTK_MD ,JS_YJSW_LY ,JS_YJLZ_LY ,JS_LYSS_LY ,JS_ZWCLR_LY,JS_SYFS_LY ,JS_DXQQR_LY];
var typearray3=[FST,YST,DLK_MD,DLK_LY,JYJJ,NSH,LLBH,GGG,DDL,SXLYH,MFMG,LLM,FCJ,PGYZ,YPS,SP,SJK,BTK,SJK,BTK,YJSW,YJLZ,LYSS,ZWCLR,SYFS,DXQQR];
//初始化各个坐标
for(let i=0;i<typearray2.length;i++)
{
    L.geoJSON(typearray2[i], {
        pointToLayer: function (feature, latlng) {
            return L.marker([latlng.lng, latlng.lat], {
                icon: typearray3[i],
                alt:`${latlng.lng},${latlng.lat}`,
                draggable:true
            },
            ).on('dragend',function(event){
                var position=this.getLatLng();
                $(".modify-x").val(position.lat);
				$(".modify-y").val(position.lng);
            }).addTo(typearray1[i]);
        },
        onEachFeature: onEachFeature
    })
};
//定义筛选器项目
var overlays = {
    "<span class='ST-OPT map-opts'>风神瞳</span>": Layer_FST,
    "<span class='ST-OPT map-opts'>岩神瞳</span>": Layer_YST,
    "<span class='DLK-OPT map-opts'>蒙德</span>": Layer_DLK_MD,
    "<span class='DLK-OPT map-opts'>璃月</span>": Layer_DLK_LY,
    "<span class='KW-LY-OPT map-opts'>水晶矿</span>": Layer_SJK_LY,
    "<span class='KW-LY-OPT map-opts'>白铁矿</span>": Layer_BTK_LY,
    "<span class='KW-MD-OPT map-opts'>水晶矿</span>": Layer_SJK_MD,
    "<span class='KW-MD-OPT map-opts'>白铁矿</span>": Layer_BTK_MD,
    "<span class='CJW-OPT map-opts'>绝云椒椒</span>": Layer_JYJJ,
    "<span class='CJW-OPT map-opts'>霓裳花</span>": Layer_NSH,
    "<span class='CJW-OPT map-opts'>琉璃百合</span>": Layer_LLBH,
    "<span class='CJW-OPT map-opts'>夜泊石</span>": Layer_YPS,
    "<span class='CJW-OPT map-opts'>石珀</span>": Layer_SP,
    "<span class='CJW-MD-OPT map-opts'>钩钩果</span>": Layer_GGG,
    "<span class='CJW-MD-OPT map-opts'>嘟嘟莲</span>": Layer_DDL,
    "<span class='CJW-MD-OPT map-opts'>落落梅</span>": Layer_LLM,
    "<span class='CJW-MD-OPT map-opts'>塞西莉亚花</span>": Layer_SXLYH,
    "<span class='CJW-MD-OPT map-opts'>慕风蘑菇</span>": Layer_MFMG,
    "<span class='CJW-MD-OPT map-opts'>风车菊</span>": Layer_FCJ,
    "<span class='CJW-MD-OPT map-opts'>蒲公英籽</span>": Layer_PGYZ,
    "<span class='JYG-LY-OPT map-opts'>遗迹守卫</span>": Layer_YJSW_LY,
    "<span class='JYG-LY-OPT map-opts'>遗迹猎者</span>": Layer_YJLZ_LY,
    "<span class='JYG-LY-OPT map-opts'>大型丘丘人</span>": Layer_DXQQR_LY,
    "<span class='JYG-LY-OPT map-opts'>深渊法师</span>": Layer_SYFS_LY,
    "<span class='JYG-LY-OPT map-opts'>债务处理人</span>": Layer_ZWCLR_LY,
    "<span class='JYG-LY-OPT map-opts'>雷莹术士</span>": Layer_LYSS_LY,
};
//添加筛选器
L.control.layers(null, overlays).addTo(map);
$(".leaflet-control-layers-overlays label").eq(0).before('<a class="ST-OPT assortType">神瞳</a>');
$(".leaflet-control-layers-overlays label").eq(2).before('<a class="DLK-OPT assortType">地灵龛</a>');
$(".leaflet-control-layers-overlays label").eq(4).before('<a class="KW-LY-OPT assortType">矿物——璃月</a>');
$(".leaflet-control-layers-overlays label").eq(6).before('<a class="KW-MD-OPT assortType">矿物——蒙德</a>');
$(".leaflet-control-layers-overlays label").eq(8).before('<a class="CJW-OPT assortType">采集物——璃月</a>');
$(".leaflet-control-layers-overlays label").eq(13).before('<a class="CJW-MD-OPT assortType">采集物——蒙德</a>');
$(".leaflet-control-layers-overlays label").eq(20).before('<a class="JYG-LY-OPT assortType">精英怪——璃月</a>');

//给所有图例查找的label标签添加类

for (let i = 0; i < $(".leaflet-control-layers-overlays label").length; i++) {
    if ($(`.leaflet-control-layers-overlays label:eq(${i}) div span span`).hasClass("ST-OPT") == true) {
        $(`.leaflet-control-layers-overlays label:eq(${i})`).addClass("ST-OPT");
        $(`.leaflet-control-layers-overlays label:eq(${i}) div span span`).removeClass("ST-OPT");
    } else if ($(`.leaflet-control-layers-overlays label:eq(${i}) div span span`).hasClass("DLK-OPT") == true) {
        $(`.leaflet-control-layers-overlays label:eq(${i})`).addClass("DLK-OPT");
        $(`.leaflet-control-layers-overlays label:eq(${i}) div span span`).removeClass("DLK-OPT");
    } else if ($(`.leaflet-control-layers-overlays label:eq(${i}) div span span`).hasClass("CJW-OPT") == true) {
        $(`.leaflet-control-layers-overlays label:eq(${i})`).addClass("CJW-OPT");
        $(`.leaflet-control-layers-overlays label:eq(${i}) div span span`).removeClass("CJW-OPT");
    }else if ($(`.leaflet-control-layers-overlays label:eq(${i}) div span span`).hasClass("CJW-MD-OPT") == true) {
        $(`.leaflet-control-layers-overlays label:eq(${i})`).addClass("CJW-MD-OPT");
        $(`.leaflet-control-layers-overlays label:eq(${i}) div span span`).removeClass("CJW-MD-OPT");
    }else if ($(`.leaflet-control-layers-overlays label:eq(${i}) div span span`).hasClass("KW-LY-OPT") == true) {
        $(`.leaflet-control-layers-overlays label:eq(${i})`).addClass("KW-LY-OPT");
        $(`.leaflet-control-layers-overlays label:eq(${i}) div span span`).removeClass("KW-LY-OPT");
    }else if ($(`.leaflet-control-layers-overlays label:eq(${i}) div span span`).hasClass("KW-MD-OPT") == true) {
        $(`.leaflet-control-layers-overlays label:eq(${i})`).addClass("KW-MD-OPT");
        $(`.leaflet-control-layers-overlays label:eq(${i}) div span span`).removeClass("KW-MD-OPT");
    }else if ($(`.leaflet-control-layers-overlays label:eq(${i}) div span span`).hasClass("JYG-LY-OPT") == true) {
        $(`.leaflet-control-layers-overlays label:eq(${i})`).addClass("JYG-LY-OPT");
        $(`.leaflet-control-layers-overlays label:eq(${i}) div span span`).removeClass("JYG-LY-OPT");
    }
}
//更改筛选器的样式
$(".leaflet-control-layers-overlays").wrapInner('<ul  id="demo-list"/>')
$(".leaflet-control-layers-overlays").prepend('<div class="jquery-accordion-menu-header" id="form"></div>');
$(".leaflet-control-layers-overlays").append('<div class="jquery-accordion-menu-footer"><a href="https://bbs.mihoyo.com/ys/accountCenter/postList?id=5284717">空荧酒馆@A8</a></div>');
$(".leaflet-control-layers-overlays").wrapInner('<div class="htmleaf-container"/><form class="ac-custom ac-checkbox ac-checkmark" autocomplete="off"/><div id="jquery-accordion-menu" class="jquery-accordion-menu black"/>')

$(".leaflet-control-layers-overlays label").wrapInner('<li/><a/>');

$(".ST-OPT").wrapAll('<li/>');
$("label.ST-OPT").wrapAll('<ul class="submenu"/>');

$(".DLK-OPT").wrapAll('<li/>');
$("label.DLK-OPT").wrapAll('<ul class="submenu"/>');

$(".CJW-MD-OPT").wrapAll('<li/>');
$("label.CJW-MD-OPT").wrapAll('<ul class="submenu"/>');

$(".CJW-OPT").wrapAll('<li/>');
$("label.CJW-OPT").wrapAll('<ul class="submenu"/>');

$(".KW-LY-OPT").wrapAll('<li/>');
$("label.KW-LY-OPT").wrapAll('<ul class="submenu"/>');

$(".KW-MD-OPT").wrapAll('<li/>');
$("label.KW-MD-OPT").wrapAll('<ul class="submenu"/>');

$(".JYG-LY-OPT").wrapAll('<li/>');
$("label.JYG-LY-OPT").wrapAll('<ul class="submenu"/>');
