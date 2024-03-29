/**
 *   DateFormat
 */
Date.prototype.format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "H+" : this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

function parseDate(param) {
    if (param) {
        if (typeof (param) == 'number') {
            return new Date(param);
        } else if (typeof (param) == 'string') {
            var arr = param.split(/[- : \/]/);
            var date = new Date(arr[0], arr[1]-1, arr[2], arr[3], arr[4], arr[5]);
            return date;
        }
    }
    return param;
}

/**
 *   DateFormat
 */
Date.prototype.formatDateTime = function () {
    return this.format('yyyy-MM-dd HH:mm:ss');
};


function identityCodeValid(code) {
    var city = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外 "
    };
    var tip = "";
    var pass = true;

    if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)) {
        pass = false;
    } else if (!city[code.substr(0, 2)]) {
        pass = false;
    } else {
        //18位身份证需要验证最后一位校验位
        if (code.length == 18) {
            code = code.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            //校验位
            var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
            var sum = 0;
            var ai = 0;
            var wi = 0;
            for (var i = 0; i < 17; i++) {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            var last = parity[sum % 11];
            if (parity[sum % 11] != code[17]) {
                pass = false;
            }
        }
    }
    return pass;
}

function checkMobile(mobile) {
    if (mobile) {
        var mobileReg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/;
        return mobileReg.test(mobile);
    }
    return false;
}

$.extend({
    openLoading : function() {
        var cover = $('<div class="cover" style="background-color: rgba(0, 0, 0, 0.1);z-index: 5000;position: fixed;top:0;bottom: 0;left:0;right: 0;"><div class="mui-clearfix" style="text-align: center; position: fixed; top: calc(50% - 30px); left:calc(50% - 30px);"><div class="loader4"></div></div></div>');
        $("body").append(cover);
        return cover;
    },
    closeLoading : function(cover) {
        if (cover) {
            cover.fadeOut(500, function() {
                cover.remove();
            });
        }
    }
});