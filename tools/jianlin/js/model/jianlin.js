var pardata = [], //主要数据对象
	temp = {
		ssdata: {}
	},
	findata = {
		ssdata: {
			name: "传说首饰（任意）",
			lev: {}
		}
	},
	cldata = {}, //材料名和价格对象
	dataarr = []; //
temp.ssdata.level = [{
	GHS: 7,
	LS: 176,
	YS: 4,
	XD: 36,
	SXF: 27
}, {
	GHS: 9,
	LS: 229,
	YS: 6,
	XD: 46,
	SXF: 35
}, {
	GHS: 11,
	LS: 298,
	YS: 7,
	XD: 60,
	SXF: 45.54
}, {
	GHS: 15,
	LS: 387,
	YS: 10,
	XD: 77,
	SXF: 59.21
}, {
	GHS: 19,
	CSBY: 1,
	LS: 603,
	YS: 13,
	XD: 101,
	SXF: 76.93
}, {
	GHS: 25,
	CSBY: 1,
	LS: 654,
	YS: 16,
	XD: 131,
	SXF: 100.4
}, {
	GHS: 32,
	CSBY: 1,
	LS: 851,
	YS: 21,
	XD: 170,
	SXF: 130.8
}, {
	GHS: 41,
	CSBY: 1,
	YS: 9,
	XD: 100,
	BQGJJHS: 1,
	SXF: 169.9
}, {
	GHS: 54,
	CSBY: 2,
	YS: 17,
	XD: 156,
	BQGJJHS: 1,
	SXF: 173.47
}];

var sclist = [
	['月石', 0.96],
	['鬼魂石', 2.05],
	["灵石", 0.0493],
	["仙丹", 0.95],
	["手续费", 1],
	["白青高级进化石", 260],
	["传说宝玉", 1.20],
	["传说武魂", 4.19]
];

function getdata(arr, type) {
	var type = type || 'price';
	$.each(arr, function(s, n) {
		var str = n[0],
			price = n[1]
		var cn = makePy(str);
		$.each(cn, function(a, b) {
			!cldata[b] && (cldata[b] = {
				'name': str,
				[type]: price
			});
		});
	});
}
getdata(sclist);

function initdata(obj) {
	$.each(obj, function(s, n) {
		dataarr.push(n);
	});
	//			return dataarr;
}

function regdata(obj) {}; //设置初始化对象的名字。
function builprice(numdata, finobj) {
	var val = 0;
	$.each(numdata, function(n, s) {
		var _val = cldata[n].price * s;
		val += _val;
		finobj[n] = {
			'Num': s,
			'total': _val
		};
		//				regdata()
	});
	return val;
}

function plant(inobj) { //数据初始化函数
	var type = inobj.constructor.name;
	console.log(type);
	var _obj = inobj,
		Num, buildata = {},
		_fn = function(inobj) {
			_self = this;
			$.each(_obj, function(n, s) {
				var names = "level" + (n + 1);
				_self[names] = {
					"title": n + 1 + "段升" + (n + 2) + "段",
					"viptotal": 0,
					'total': 0
				};
				$.each(s, function(PYname, num) {
					_self[names][PYname] = {
						"names": PYname,
						"Num": num,
						"total": 0,
						"cnames": cldata[PYname].name,
						"price": cldata[PYname].price,
						"buil": function() {
							var _total = num * this.price;
							this.total = _total;
							if (PYname === "SXF") {
								_self[names].vip = _total * 0.15;
							}
							//			     	      		console.log(this);
							return _total
						}
					};
					var _total = _self[names][PYname].buil();
					_self[names].total += _total;

				});
				_self[names]['buil'] = function() {
					var __self = this,
						total = 0;
					$.each(__self, function(na, ns) {
						var types = ns.constructor.name;
						var _total = (types !== 'Object') ? 0 : ns.buil();
						total += _total;
					});
					__self.total = total;
					__self.viptotal = total - __self.vip;
					return total;
				}
			});
		};
	_fn.prototype.builprice = function(level) {
		var total = this.Num * cldata[this.names].price;
		return total;
	};
	_fn.prototype.builtotal = function(star, end) {
		var _self = this,
			viptotal = 0,
			total = 0,
			_star, _end, i;
		_star = star || 1, _end = end || 10;
		//			 console.log(_self,_star,_end);
		for (i = _star; i < _end; i++) {
			var names = "level" + i,
				_total;
			_total = _self[names].buil();
			total += _total;
			viptotal += (_total - _self[names].vip);
			//			 	console.log(i,_end,names);
		}
		if (star) {
			_self.cutotal = total
		} else {
			_self.total = total;
			_self.viptotal = viptotal;
			_self.all = total * 5;
		}
		//			 console.log(total)
		return total;
	}
	var buildata = new _fn();
	buildata.builtotal();
	return buildata;
}
findata.ssdata.lev = plant(temp.ssdata.level); //数据初始化
function viewinit(){
	var tabel = '<table class="tb-cut"><table>',//先定义要用到的这些标签的字串;
	lev = '<div class="lev-title"></div>',
	tb_title = '<div class="tb-title"></div>',
	th = '<th></th>',
	td = '<td></td>',
	thead,tbody,table,
	tr = '<tr></tr>';
	//开始制作数据主体
	$.each(findata.ssdata.lev,function(n,o){
		
	})
	
	//先组装表格主体;
	
}
//		视图分部函数


//		function totalprice(level,star,end,finobj){
//			var total=0,_star,_end,_length,i;
//			 _star = (star-1)||0,_end = (end-1)||level.length;
//			 step = _end - _star;
//			 _length = level.length;
//			 console.log(level,_star,_end,step);
//			 for(i = _star; i < _end ; i++ ){
//			 	window[finobj][i]={};
//			 	total += builprice(level[i],finobj[i]);
//			 	console.log(i,_end);
//			 }
//			 console.log(total)
//			 return total;
//		}
//		var find = totalprice(temp.ssdata.level,"findata.ssdata.level");
//		initdata(dataarr);