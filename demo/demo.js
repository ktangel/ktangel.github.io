var arrs = ["a", "b", "c", "d", "a", "b", {
		"i": 3,
		"c": 4
	}, {
		"i": 3,
		"c": 4
	}, {
		"i": 3,
		"c": 5
	}, {
		"i": 3,
		"c": 4
	}, {
		"i": 3,
		"c": 5
	}, {
		"i": 3,
		"c": 5
	},
	["ddd", "eee", 0],
	["ddd", "eee", 0],
	["ddd", {
		"as": 0,
		"ab": 2,
		"ac": "3unobjunobj2"
	}, "eee", 0],
	["ddd", {
		"as": 0,
		"ab": 1,
		"ac": "32"
	}, "eee", 0],
	["ddd", {
		"as": 0,
		"ab": 1,
		"ac": "33"
	}, "eee", 0],
	["ddd", "eee", 0, {
		"as": 0,
		"ab": 2,
		"ac": "32"
	}],
	["eeee", "eee", 0],
	["ddd", "eee", 0],
	["ddd", "eee", 1]
];
var arr2 = [{
		"i": 3,
		"c": 4
	}, {
		"i": 3,
		"c": 5
	}, {
		"i": 3,
		"c": 4
	}, {
		"i": 3,
		"c": 5
	}, {
		"i": 3,
		"c": 5
	},
	["ddd", "eee", 0],
	["ddd", "eee", 0],
	["ddd", {
		"as": 0,
		"ab": 2,
		"ac": "32"
	}, "eee", 0],
	["ddd", {
		"as": 0,
		"ab": 2,
		"ac": "32"
	}, "eee", 0],
	["ddd", {
		"as": 0,
		"ab": 2,
		"ac": "32"
	}, "eee", 0],
	["ddd", "eee", 0, {
		"as": 0,
		"ab": 2,
		"ac": "32"
	}],
	["ddd", "eee", 0],
	["ddd", "eee", 0],
	["ddd", "eee", 1]
];
var s1 = {
	's1': 324,
	'aaa': {
		'lkjasf': 2214
	},
	'aaas2': {
		'lkjasf': 2214
	},
	'aaas1': {
		'lkjasf': 2214
	}
};
var s2 = {
	's2': 324,
	'aaa': {
		'lkjasf': 2214
	},
	'aaas2': {
		'lkjasf': 2214
	},
	'aaas1': {
		'lkjasf': 2214
	}
};
var s3 = {
	's1': 324,
	'aaa': {
		'lkjasf': 2214
	},
	'aaas2': {
		'lkjasf': 2214
	},
	'aaas1': {
		'lkjasf': 2214
	}
};
var s4 = {
	's4': 324,
	'aaa': {
		'lkjasf': 2214
	},
	'aaas2': {
		'lkjasf': {
			'nas': '第三层',
			'nass': '哎被你找到了',
			'zz': {
				aa: '再挖个洞。。。'
			}
		}

	},
	'aaas1': {
		'lkjasf': 2214
	}
};
var s5 = {
	's4': 324,
	'aaa': {
		'lkjasf': 2214
	},
	'aaas2': {
		'lkjasf': {
			'nas': '第三层',
			'nass': '哎被你找到了',
			'zz': {
				aa: '再挖个洞。。。'
			}
		}

	},
	'aaas1': {
		'lkjasf': 2214
	}
};
var s6 = {
	's4': 324,
	'aaa': {
		'lkjasf': 2214
	},
	'aaas2': {
		'lkjasf': {
			'nas': '第三层',
			'nass': '哎被你找到了',
			'zz': {
				aa: '进洞了。。。'
			}
		}

	},
	'aaas1': {
		'lkjasf': 2214
	}
};
var s7 = {
	's4': 324,
	'aaa': {
		'lkjasf': 2214
	},
	'aaas2': {
		'lkjasf': {
			'nas': '第三层',
			'nass': '哎被你找到了',
			'zz': {
				aa: '进洞了。。。'
			}
		}

	},
	'aaas1': {
		'lkjasf': 2214
	}
};
var s8 = {
		'sn5': 324,
		'aaa': {
			'lkjasf': 2214
		},
		'aaas2': {
			'lkjasf': {
				'nas': '第三层',
				'nass': '哎被你找到了',
				'zz': {
					aa: '进洞了。。。'
				}
			}

		},
		'aaas5': {
			'lkjasf': {
				'nas': '第三层',
				'nass': '哎被你找到了',
				'zz': {
					'saa': '进洞了。。。',
					'N5': {
						'lkjasf': {
							'nas': '第三层',
							'nass': '哎被你找到了',
							'zz': {
								aa: '进洞了。。。',
								'NN5': {
									'lkjasf': {
										'nas': '第三层',
										'nass': '哎被你找到了',
										'zz': {
											aa: '进洞了。。。',
											test: 112
										}
									}

								}
							}
						}

					}
				}
			}

		},
		'aaas1': {
			'lkjasf': 2214
		}
	},
	s9 = {
		'sn5': 324,
		'aaa': {
			'lkjasf': 2214
		},
		'aaas2': {
			'lkjasf': {
				'nas': '第三层',
				'nass': '哎被你找到了',
				'zz': {
					aa: '进洞了。。。'
				}
			}

		},
		'aaas5': {
			'lkjasf': {
				'nas': '第三层',
				'nass': '哎被你找到了',
				'zz': {
					'saa': '进洞了。。。',
					'N5': {
						'lkjasf': {
							'nas': '第三层',
							'nass': '哎被你找到了',
							'zz': {
								aa: '进洞了。。。',
								NN5: {
									'lkjasf': {
										'nas': '第三层',
										'nass': '哎被你找到了',
										'zz': {
											aa: '进洞了。。。',
											test: '112'
										}
									}

								}
							}
						}

					}
				}
			}

		},
		'aaas1': {
			'lkjasf': 2214
		}
	},
	s10 = {
		'sn5': 324,
		'aaa': {
			'lkjasf': 2214
		},
		'aaas2': {
			'lkjasf': {
				'nas': '第三层',
				'nass': '哎被你找到了',
				'zz': {
					aa: '进洞了。。。'
				}
			}

		},
		'aaas5': {
			'lkjasf': {
				'nas': '第三层',
				'nass': '哎被你找到了',
				'zz': {
					'saa': '进洞了。。。',
					'N5': {
						'lkjasf': {
							'nas': '第三层',
							'nass': '哎被你找到了',
							'zz': {
								aa: '进洞了。。。',
								'NN111': {
									'lkjasf': {
										'nas': '第三层',
										'nass': '哎被你找到了',
										'zz': {
											aa: '进洞了。。。'
										}
									}

								}
							}
						}

					}
				}
			}

		},
		'aaas1': {
			'lkjasf': 2214
		}
	};
var arr3 = [];
arr3.push(s1, s2, s3, s4, s5, s6, s7, s8, s9, s10);

function fn1(a) {
	var _a = a || "lsjaflkj"; //后面的都是测试用
	return a.length;
}

function fn2(a) {
	var _a = a || "lsjaflkj"; //后面的都是测试用
	return a.length;
}

function fn3(b) {
	var _b = a || "lsjaflkj"; //后面的都是测试用
	return a.length;
}

function fn4(b) {
	var _e = a || "lsjaflkj"; //后面的都是测试用
	return a.length;
}
var fw1 = function fn10(a) {
	var _a = a || "lsjaflkj"; //后面的都是测试用
	return a.length;
};
var fw2 = function fn1(a) {
	var _a = a || "lsjaflkj"; //后面的都是测试用
	return a.length;
};
var fw3 = (function fn2(a) {
	var _a = a || "lsjaflkj";
	var fn = function() {
		this.ss = 222
	};
	fn.a = 12;
	fn = new fn(); //后面的都是测试用
	return fn;
})();
var fw13 = (function fn2(a) {
	var _a = a || "lsjaflkj";
	var fn = function() {
		this.ss = 222
	};
	fn.a = 12;
	fn.prototype.bb = 323;
	fn = new fn(); //后面的都是测试用
	return fn;
})();
var fw14 = (function fn2(a) {
	var _a = a || "lsjaflkj";
	var fn = function() {
		this.saas = 222
	};
	fn.a = 12;
	fn = new fn(); //后面的都是测试用
	return fn;
})();
var fw4 = function fn2(a) {
	var _a = a || "lsjaflkj"; //后面的都是测试用
	return a.length;
};
var fw5 = function fn3(a) {
	var _a = a || "lsjaflkj"; //后面的都是测试用
	return a.length;
};


var arra = [];
arra.push(fn1, fn2, fn3, fn4, fw1, fw2, fw3, fw4, fw13, fw14);

function uniqarr(arr, nosort, exp, unobj) {
	/*
	 *数组去重函数
	 *parm: 参数arr为要处理的数组，默认以最优的速度处理字符串数组，参数 [nosort] 为true时不对数组重新排序,
	 *当想处理包含对象的数组时使用,请传入exp参数：默认不将对象不会去重,会保留所有对象,如果想对象也去重,传入参数[unobj]，
	 */
	var retarr = [],
		_arr = nosort ? arr.sort() : arr,
		hash = {},
		_exp = exp && true,
		_unobj = unobj && true;
	cacheobj = [],
		str = Object.prototype.toString;
	if (!_exp) {
		for (var i = 0, max = _arr.length; i < max; i++) {
			var val = _arr[i];
			if (!hash[val]) {
				retarr.push(val);
				hash[val] = true;
			}
		}
		return retarr;
	}
	var unobj = function(obja, objb) {
		var a = obja,
			b = objb;
		console.log(a.length)
		if (!((typeof a === typeof b) && (typeof a.length === typeof b.length) && (a.length === b.length))) {
			return false;
		}
		for (var n in a) {
			var vala = a[n],
				valb = b[n];
			if (istype(vala)) {
				if (!unobj(vala, valb)) {
					return false;
				}
			} else if (vala !== valb) {
				return false;
			}
		}
		return true;
	}

	function uniqobj(vobj) {
		var _obj = vobj;
		if (!_unobj) return false;
		for (var i in cacheobj) {
			var has = unobj(_obj, cacheobj[i]);
			if (has) {
				return true;
			}
		}
		return false;
	}

	function istype(val) {
		var type = str.call(val);
		return _exp && (type === "[object Array]") || (type === "[object Object]");
	}
	for (var i = 0, max = _arr.length; i < max; i++) {
		var val = _arr[i];
		if (!istype(val)) {
			if (!hash[val]) {
				retarr.push(val);
				hash[val] = val;
			}
		} else {
			var che = uniqobj(val);
			if (!che) {
				retarr.push(val);
				cacheobj.push(val);
			}
		}
	}
	return retarr;
}

function uniq(arr, sopt, unobj) {
	var _arr = arr,
		result = [],
		type,
		_sopt = sopt && true,
		_unobj = unobj && true,
		prev = [],
		hash = {};
	for (var i = 0, max = _arr.length; i < max; i++) {
		var val = _arr[i];
		if (_sopt) {
			if (prev !== val) result.push(val);
			prev.push(val);
		} else if (unobj) {
			type = typeof val === 'object';
			if (type) {
				val = JSON.stringify(val);
				console.log(val);
			}
			if (!hash[val]) {
				result.push(_arr[i]);
				hash[val] = true;
			}
		} else {
			if (!hash[val]) {
				result.push(_arr[i]);
				hash[val] = true;
			}
		}
	}
	return result;
}
console.log("ok=====", uniq(arrs, false));
console.log("ok=====", uniqarr(arr3));
console.log("ok=====", _.uniq(arrs, false, true));