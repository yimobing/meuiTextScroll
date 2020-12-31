
/**
 * meuiTextScroll 演示
 */

 /**
* 获取询价单最新消息数据
* returns {object} 返回消息数据
*/
var count = 0;
function get_data_message(){
    count++;
    if(count == 1)
        var json = {
            data:[
                {"title":"东海太禾广场13号楼1918室", "shuoming":"东海太禾广场13号楼1918室有最新询价消息<br>用户张三发起了询价，询价对象1918室，<br>价格135000元/月", "create_time":"2020-12-15 14:32:21"},
                {"title":"闻馨一品15号楼0908室", "shuoming":"闻馨一品15号楼0908室有最新询价消息<br>用户张三发起了询价，询价对象1918室，<br>价格135000元/月", "create_time":"2020-12-15 14:32:21"},
                {"title":"城东星光耀广场20号楼2021室", "shuoming":"城东星光耀广场20号楼2021室有最新询价消息<br>用户张三发起了询价，询价对象1918室，<br>价格135000元/月", "create_time":"2020-12-15 14:32:21"},
                {"title":"星湖雅苑6号楼1705室", "shuoming":"星湖雅苑6号楼1705室有最新询价消息<br>用户张三发起了询价，询价对象1918室，<br>价格135000元/月", "create_time":"2020-12-15 14:32:21"},
                {"title":"万科上悦城7号楼1205室", "shuoming":"万科上悦城7号楼1205室有最新询价消息<br>用户张三发起了询价，询价对象1918室，<br>价格135000元/月", "create_time":"2020-12-15 14:32:21"}
            ]
        }
    else
        var json = {
            data:[
                {"title":"东海太禾广场13号楼1918室222", "shuoming":"东海太禾广场13号楼1918室有最新询价消息<br>用户张三发起了询价，询价对象1918室，<br>价格135000元/月", "create_time":"2020-12-15 14:32:21"},
                {"title":"闻馨一品15号楼0908室222", "shuoming":"闻馨一品15号楼0908室有最新询价消息<br>用户张三发起了询价，询价对象1918室，<br>价格135000元/月", "create_time":"2020-12-15 14:32:21"},
                {"title":"城东星光耀广场20号楼2021室222", "shuoming":"城东星光耀广场20号楼2021室有最新询价消息<br>用户张三发起了询价，询价对象1918室，<br>价格135000元/月", "create_time":"2020-12-15 14:32:21"},
                {"title":"星湖雅苑6号楼1705室222", "shuoming":"星湖雅苑6号楼1705室有最新询价消息<br>用户张三发起了询价，询价对象1918室，<br>价格135000元/月", "create_time":"2020-12-15 14:32:21"},
                {"title":"万科上悦城7号楼1205室222", "shuoming":"万科上悦城7号楼1205室有最新询价消息<br>用户张三发起了询价，询价对象1918室，<br>价格135000元/月", "create_time":"2020-12-15 14:32:21"}
            ]
        }

    return json;
}



/*--------------------------------------------------------*/
//=====开始执行
var timer;
clearInterval(timer);
timer = setInterval((function target(){
    $("#scrollbox-1").meuiTextScroll({
        source: get_data_message(), //数据源
        format: ["title", "shuoming", "create_time", ""], //自定义数据源字段,数组格式(可选). 数组元素分别对应数据源字段：标题, 描述, 发布时间, 链接地址
        caption: '询价单最新消息（每隔2秒滚动）', //区块标题(可选)
        width: 340, //滚动区域宽(可选)
        height: 500, //滚动区域高(可选)
        line: 1, //每次滚动的行数(可选)
        speed: 500, //滚动速度(毫秒)(可选)
        timer: 2000, //滚动间隔时间(毫秒)(可选)
        direction: 'up', //滚动方向(可选). up 向上(默认), down 向下
        pageBtn: true, //是否显示上下翻页按钮,默认true(可选)
        up: "but_up", //向上按钮ID属性名称(可选)
        down: "but_down" //向下按钮ID属性名称(可选)
    })

    return target;
    
})(), 15 * 1000)




$("#scrollbox-2").meuiTextScroll({
    source: get_data_message(), //数据源
    format: ["title", "shuoming", "create_time", ""], //自定义数据源字段,数组格式(可选). 数组元素分别对应数据源字段：标题, 描述, 发布时间, 链接地址
    caption: '实时播报（无缝滚动）', //区块标题(可选)
    width: 340, //滚动区域宽(可选)
    height: 500, //滚动区域高(可选)
    line: 1, //每次滚动的行数(可选)
    speed: 5000, //滚动速度(毫秒)(可选)
    timer: 100, //滚动间隔时间(毫秒)(可选)
    direction: 'up', //滚动方向(可选). up 向上(默认), down 向下
    pageBtn: false
})









