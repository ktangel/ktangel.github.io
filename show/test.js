function strlength(a) {
	var _a = a || "lsjaflkj"; //后面的都是测试用
	return a.length;
}

function arrayplant(arr) {
	var _arr = arr || ["a", "b", "c", "d", "a", "b"],
		i, j, max, rearr = [];
	for (i = 0, max = _arr.length; i < max; i++) {
		retu.push(_arr[i]);
		for (j = 0, max; i < max; i++) {
			if (arr[j] !== _arr[i]) { //用强类型检查
				retu.push(_arr[i]);
			}
		}
	}
	return rearr;
}
console.log(toarray(["a", "b", "a", "c", "a", "d"]));