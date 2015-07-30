var fn = (function() {
		var pardata = [],//主要数据对象
			ssdata = {},
			cldata = {}, //材料对象
			dataarr = [];
			ssdata = {			};
		function getdata(arr) {
			$.each(arr, function(s, n) {
				var str = n[0],
					price = n[1]
				var cn = makePy(str);
				$.each(cn, function(a, b) {
					!cldata[b] && (cldata[b] = {
						'name': str,
						'price': price
					})
				});

			});
		}
		var sclist = [
			['月石', 0.96],
			['鬼魂石', 2.05],
			["灵石", 0.0493],
			["仙丹", 0.0493],
			["手续费", 1],
			["白青高级进化石", 260],
			["传说宝玉", 1.20],
			["传说武魂", 4.19]
		];
		getdata(sclist);
		function initdata(obj) {
			$.each(obj, function(s, n) {
				dataarr.push(n);

			});
			//			return dataarr;
		}
		initdata(dataarr);
		var _fn = function() {

		}
		return _fn;

})();
	//$.ajax({
	//	type: "get",
	//	url: "price.txt",
	//	success: function(obj) {
	//		if (!obj) {
	//			console.log("获取文件数据失败");
	//			return false;
	//		}
	//		console.log(typeof obj)
	//		$("#testp").html(obj)
	//		var s = /\n/,
	//			//				var obj = new String(obj);
	//			obj = obj.split(s);
	//		console.log([obj]);
	//		sclist = [];
	//		$.each(obj, function(s, n) {
	//			var N = n.split("\t");
	//			sclist.push(N);
	//		});
	//		getdata(sclist);
	//	}
	//});