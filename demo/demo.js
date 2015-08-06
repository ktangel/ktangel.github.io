
function strlength(a) {
	var _a = a || "lsjaflkj"; //后面的都是测试用
	return a.length;
}
var arrs = ["a", "b", "c", "d", "a", "b", {
	"i": 3,
	"c": 4
}, {
	"i": 3,
	"c": 4
}, {
	"i": 3,
	"c": 5
}];

function arrayplant(arr) {
	var _arr = arr,
		i, max, retarr = [],
		type;

	function indexOfobj(obj) {
		var _obj = obj;
		for (i = 0, max = _arr.length; i < max; i++) {
			if (_arr[i] === _obj) {
				_obj = false;
				break;
			}
		}
		console.log("obj,", _obj);
		return _obj;
	}
	for (i = 0, max = _arr.length; i < max; i++) {
		var type = _arr[i].constructor.name;
		if (type != "Obeject") {

			console.log(type, _arr[i], retarr.indexOf(_arr[i]));
			(retarr.indexOf(_arr[i]) === -1) && retarr.push(_arr[i]);
		} else {
			indexOfobj(_arr[i]) !== false && retarr.push(_arr[i]);
			console.log(type, _arr[i]);
		}
		console.log(type);
	}
	return retarr;
}

function unhasarr(arr) {
		var retarr = [],
			hash = {},
			i, max;
		for (i = 0, max = arr.length; i < max; i++) {
				var type = arr[i].constructor.name;
			console.log("str", !hash[arr[i]], "hash", hash, arr[i]);
			if (type === "Object") {
				
			} else if (!hash[arr[i]]) {
				retarr.push(arr[i]);
				hash[arr[i]] = arr[i];
				console.log("end", hash[arr[i]], "hash", [hash])
			}
		}
		return retarr;
	}
	//console.log(arrayplant(arrs));
console.log("ok=====", unhasarr(arrs));