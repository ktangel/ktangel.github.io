var conso = function(obj, rthis) {
	console.log("调用" + obj + "的对象是：", rthis);
}

//所有的方法函数都在这里;
var fn = (function() {
	var Plant = function() {};
	Plant.prototype.Page = {
		ListGetView: function() {
			ListData.Cur.getNo(this.id);
			ListData.Cur.getViewData();
			fn.Page.InitView();
		},
		InitView: function() {
			$.ajax(ajaxData.getpage.list);
			fn.PostPage(ListData.pageCache.pageNo);
		},
		RefView: function(obj) {
			ListData.pageData = null;
			viewData = null;
			$.ajax(ajaxData.getpage.list);
			fn.PostQuery(obj);
			console.log("页面刷新完成");
		},
		LoadViewData: function(obj) {
			var i,
				Data = obj || viewData,
				tex;
			console.log("loadViewData===", [Data]);
			for (i in ListData.Loading) {
				tex = Data ? ((i === "bugLevel") ? ListData.level[Data[i]] : Data[i]) : "未加载到数据";
			}
			fn.Page.AddList();
		},
		LoadEditData: function(data) {
			var i;
			$('#editbug input,textarea,select').each(function() {
				var id = $(this).attr('id');
				if (id === "discoverTime" || id === "modityTime") {
					var findate = data[id];
					findate && (findate = findate.replace(" ", "T"));
					this.value = findate;
				} else {
					if (id === 'status') {
						$(this).val(parseInt(data[id]));
						if (data[id]) {
							this.checked = true;
							$("input#modityTime").removeAttr("disabled", "disabled");
						} else {
							$("input#modityTime").attr("disabled", "disabled");
							this.checked = false;
						}
					} else {
						this.value = (id === 'bugLevel') ? parseInt(data[id]) : data[id]
					}
				}
			})
		},
		RemoveList: function(ID) {
			$("#" + ID), remove();
		},
		ClearList: function() {
			$("tbody.tbody").empty();
			console.log("标题列表清理完成");
		},
		AddList: function() {
			fn.Page.ClearList();
			if (!ListData.pageData.length) {
				return false;
			};
			//给下拉列表推数据的函数
			for (var i = 0, max = ListData.pageData.length; i < max; i++) {
				var discoverTime_td, modityTime_td, status, bugLevel_td, dutyPerson_td, submitPerson_td, matterText_td, modityText_td, lossText_td, modity_td, edit, del, List;
				discoverTime_td = $('<td></td>').addClass("discoverTime").text(ListData.pageData[i].discoverTime);
				modityTime_td = ListData.pageData[i].status ? ListData.pageData[i].modityTime : ListData.status[ListData.pageData[i].status];
				modityTime_td = $('<td></td>').addClass("modityTime").text(modityTime_td);
				bugLevel_td = $('<td></td>').addClass("bugLevel").text(ListData.level[ListData.pageData[i].bugLevel]);
				dutyPerson_td = $('<td></td>').addClass("dutyPerson").text(ListData.pageData[i].dutyPerson);
				submitPerson_td = $('<td></td>').addClass("submitPerson").text(ListData.pageData[i].submitPerson);
				matterText_td = $('<td></td>').append($("<div></div>").addClass("matterText").html($("<p></p>").text(ListData.pageData[i].matterText)));
				modityText_td = $('<td></td>').append($("<div></div>").addClass("modityText").html($("<p></p>").text(ListData.pageData[i].modityText)));
				lossText_td = $('<td></td>').append($("<div></div>").addClass("lossText").html($("<p></p>").text(ListData.pageData[i].lossText)));
				edit = $("<button></button>").addClass("edit").text("修改");
				del = $("<button></button>").addClass("del-list").text("删除");
				modity_td = $('<td></td>').attr("id", i).addClass("modify").append(edit, del);
				List = $("<tr></tr>").append(discoverTime_td, modityTime_td, bugLevel_td, dutyPerson_td, submitPerson_td, matterText_td, modityText_td, lossText_td, modity_td);
				$("tbody.tbody").append(List);
				//						console.log("==AddList 加载完成===");
			};
			console.log("AddList()执行完毕");
		}
	}
	Plant.prototype.Alert = {
		loadStart: function(tex, time) {
			$("#view-loading").text(tex || "数据加载中").fadeIn();
		},
		loadComplete: function(tex, time) {
			$("#view-loading").text(tex || "数据加载完成").fadeOut(time || 1000);
		},
		loadErr: function(tex, time) {
			$("#loading-bk").fadeIn();
			$("#view-loading").text(tex || "加载失败，请检查你的网络 ").fadeIn();
			$(".refresh").unbind()
				.on('click', function() {
					fn.Page.InitView();
					$("#view-loading").fadeOut();
					$("#loading-bk").fadeOut();
				});
		},
		Set: function(elem, opt) {
			var elems = opt ? elem : ".view-alert",
				opts = opt ? opt : elem;
			return function() {
				if (viewData === null) {
					return false;
				};
				$(elems).show();
				console.log(opts.msg);
				opts.entertext && $("button.enter").text(opts.entertext);
				$(".alert-message").text(opts.msg);
				$("button.enter").unbind()
					.on("click", function() {
						if (opts.enter) {
							opts.data !== 'undefined' ? opts.enter(opts.data) : opts.enter();
						};
						$(".view-alert").hide();
					});
				$("button.cancel").unbind()
					.on("click", function() {
						if (opts.cancel) {
							opts.cancel()
						};
						fn.Alert.hide()
					});
			}
		},
		getDel: function() {
			var getid = $(this).parent().attr("id"); //在弹出窗口的同时把td按钮的父级中的id数字缓存。
			fn.Alert.Set({
				msg: "确定要删除这条资料？",
				data: getid,
				enter: fn.but.Delcur
			})();
		},
		hide: function() {
			$(".view-alert").hide();
		},
		getLoadNull: function() {
			var that = this;
			conso("getLoadNull", that);
		},
		Err: function(mess) {
			fn.Alert.Set({
				msg: mess,
				enter: fn.Page.RefView,
				entertext: "重试"
			})();
		}
	}
	Plant.prototype.but = {
		checkis: function(e) {
			if ($("#status").prop('checked')) {
				$("#status").val(1);
				$("input#modityTime").removeAttr("disabled").attr('required', 'required');
			} else {
				$("#status").val(0);
				$("input#modityTime").attr("disabled", "disabled").removeAttr('required', 'required').val(null);
			}
			e.stopPropagation();
		},
		editlist: function() {
			ListData.Cur.getNo($(this).parent().attr("id"));
			ListData.Cur.getViewData();
			if (viewData === null) {
				return false
			};
			$.ajax(ajaxData.getpage.openedit);
		},
		newlist: function() {
			$.ajax(ajaxData.getpage.opennew);
			if ($('.newlist').attr('data-toggle') && (!$("#navbar").hasClass('in'))) {
				$('.newlist').removeAttr('data-toggle', 'data-target')
			};
			fn.but.HideDate();
		},
		HideDate: function() {
			$("#navbar-brand")[$("#navbar").hasClass('in') ? 'hide' : 'show']();
			$("#date")[$("#navbar").hasClass('in') ? 'show' : 'hide']();
		},
		Delcur: function(ID) {
			if (viewData === null) {
				return false
			};
			fn.PostDel(ListData.pageData[ID].id)
		},
		Brand: function() {
			!$("#navbar").hasClass('in') ? $(".newlist").attr({
					'data-toggle': "collapse",
					'data-target': "#navbar"
				}) : $('.newlist').removeAttr('data-toggle', 'data-target')
				//				setTimeout(fn.but.HideDate, 400);
		},
		addQueryMonth: function() {
			$("#selectmonth").unbind().on("focusout", function() {
				var month = $(this).val()
				if (!month) {
					fn.PostQuery();
					console.log("未选择有效月份");
					//					return false;
				} else {
					fn.PostMonth(month);
				}
			})
		},
		addSubmit: function() {
			//提交表添加事件
			$("#getsave").unbind().on("click", function() {
				fn.FormCheck();
				if (!fn.FormCheck()) {
					return false;
				};
				ListData.send = fn.dataPack(ajaxData.send);
				fn.PostAdd(ListData.send);
				console.log("完成提交的执行");
			});
		},
		saveSubmit: function() {
			$("#getsave").unbind().on("click", function() {
				fn.FormCheck();
				if (!fn.FormCheck()) {
					return false;
				}
				ListData.send = fn.dataPack(ajaxData.send, "edit");
				console.log(window.ListData.send);
				fn.PostUP(ListData.send);
				fn.Page.InitView()
				console.log("完成提交");
			});
		},
		NextPage: function() {
			if (ListData.pageCache.hasNext) {
				fn.PostPage(ListData.pageCache.pageNo + 1);
			} else {
				alert("已是最后一页");
			}
		},
		PrevPage: function() {
			if (ListData.pageCache.hasPrevious) {
				fn.PostPage(ListData.pageCache.pageNo - 1);
			} else {
				alert("已是最新页");
			}
		}
	}
	Plant.prototype.AddBaseEv = function() {
		fn.but.addQueryMonth();
		$(".newbut").on("click", fn.but.newlist);
		$(".center-view").delegate(".edit", "click", fn.but.editlist);
		$(".center-view").delegate(".del-list", "click", fn.Alert.getDel);
		$("button.all").on('click', function() {
			fn.Page.RefView()
		});
	}
	Plant.prototype.rdataCheck = function(rdata) {
		var sto = Array.prototype.toString;
		if (sto.call(rdata) !== "[object Object]") {
			console.log(rdata);
			rdata = JSON.parse(rdata);
		};
		if (!rdata) {
			console.log("传入的对象有问题，请检查");
			return false
		};
		if (rdata.code === "-1") {
			console.log("数据未获取成功 ==", rdata.msg);
			return false;
		}
		return true;
	}
	Plant.prototype.SaveData = function(rdata) {
		//收到的包数据分拣
		if (!fn.rdataCheck(rdata) || !rdata.obj.rows) {
			return false;
		};
		var returnValue;
		ListData.pageCache = ajaxData.cache = rdata.obj;
		ListData.pageData = rdata.obj.rows;
		ListData.page = rdata.obj.page;
		ListData.Cur.pageNum = rdata.obj.rows.length - 1;
		viewData = rdata.obj.rows[ListData.Cur.getNo()];
		viewData ? returnValue = true : returnValue = false;
		console.log("数据转存执行完毕==");
		return returnValue;
	}

	Plant.prototype.dataPack = function(data, edit) {
		var sdata = "",
			fdata = {};
		$('input,textarea,select').each(function() {
			var id = this.id;
			if (id === "discoverTime" || id === "modityTime") {
				var findate = $(this).val();
				if (findate) {
					findate = findate.replace("T", " ");
					findate = findate.replace("Z");
					findate = findate.concat(":00")
				}
				fdata[id] = findate;
				//					alert(fdata[id] + "==" + id);
			} else {
				if (id === "bugLevel" || id === "status") {
					var num = $(this).val();
					(id === "status") && (num = this.checked ? 1 : 0);
					fdata[id] = parseInt(num);
				} else {
					fdata[id] = $(this).val();
				}
			};
		})
		edit ? fdata.id = viewData.id : null;
		(fdata.status === 0) && (fdata.modityTime = null);
		//			console.log(fdata);
		return fdata;
	}
	Plant.prototype.formatDate = function(formatStr, fdate, intype) {
		var fTime, fStr = 'ymdhis';
		//			console.log(fdate)
		if (!formatStr)
			var formatStr = "y-m-d h:i:s";
		if (fdate) {
			fTime = new Date(fdate);
		} else {
			fTime = new Date();
		}
		var Year = fTime.getFullYear().toString(),
			Month = (fTime.getMonth() + 1) < 10 ? "0" + (fTime.getMonth() + 1) : (fTime.getMonth() + 1).toString(),
			Dates = fTime.getDate() < 10 ? "0" + fTime.getDate() : fTime.getDate().toString(),
			Hours = fTime.getHours() < 10 ? "0" + fTime.getHours() : fTime.getHours().toString(),
			Time = fTime.getMinutes() < 10 ? "0" + fTime.getMinutes() : fTime.getMinutes().toString(),
			Seconds = fTime.getSeconds() < 10 ? "0" + fTime.getSeconds() : fTime.getSeconds().toString();
		var formatArr = [Year, Month, Dates, Hours, Time, Seconds];
		for (var i = 0, max = formatArr.length; i < max; i++) {
			formatStr = formatStr.replace(fStr.charAt(i), formatArr[i]);
			if (isNaN(parseInt(formatArr[i]))) {
				console.log("fn.formatDate()--日期格式转换失败");
			}
		}
		return formatStr;
	}
	Plant.prototype.FormCheck = function() {
			var retu = false;
			$("span").remove(".required");
			$('[required="required"]').each(function() {
				if (!this.value) {
					this.focus();
					$(this).prev().css("color", 'red');
					$(this).prev().before("<span class='required'>&#42;</span>");
					return retu = false;
				} else {
					$(this).prev().css("color", '#000000');
					retu = true;
				}
			})
			return retu;
		}
		//用POST将提供的对象转换成JSON数据上传
	Plant.prototype.PostAdd = function(datas) {
		$.ajax({
			type: "POST",
			data: ajaxData.up(datas),
			url: Url.add,
			success: function(rdata) {
				if (!fn.rdataCheck(rdata)) {
					console.log("PostAdd()数据提交失败", [rdata]);
					return false;
				}
				console.log("数据提交完成===", rdata);
				fn.Page.RefView();
			},
			error: function(er) {
				fn.Alert.Err("连接超时，请检查你的网络");
				console.log("fn.PostUP--error", [er])
			}
		});
	}
	Plant.prototype.PostUP = function(datas) {
		var send = fn.dataPack(datas);
		console.log(send);
		$.ajax({
			type: "POST",
			data: ajaxData.up(datas),
			url: Url.up,
			success: function(rdata) {
				if (!fn.rdataCheck(rdata)) {
					fn.Alert.Err("提交的数据错误，" + ",记录未修改");
					console.log("PostUP()数据提交失败,记录未修改", rdata);
					return false;
				}
				console.log("数据提交完成===", rdata);
				fn.Page.RefView();
			},
			complete: function(er) {
				console.log("PostUP--Complete", [er]);
			},
			error: function(er) {
				fn.Alert.Err("连接超时，请检查你的网络");
				console.log("fn.PostUP--error", [er])
			}
		});
	}
	Plant.prototype.PostQuery = function(obj) {
		ListData.queryCache = obj ? obj : null; //缓存查询记录
		$.ajax({
			type: "POST",
			dataType: "json",
			url: Url.query,
			data: ajaxData.query.is(obj),
			success: function(rdata) {
				console.log(rdata);
				fn.Page.ClearList();
				if (!fn.SaveData(rdata)) {
					viewData = ListData.pageData = null;
					fn.Alert.Err("未查询到记录");
					console.log("未查询到数据", rdata);
					return false;
				};
				fn.Page.AddList();
				fn.Page.LoadViewData();
				return true;
			},
			complete: function(er) {
				console.log("fn.PostQuery--Complete", [er]);
				ListData.Cur.loading = false;

			},
			error: function(er) {
				fn.Alert.Err("连接超时，请检查你的网络");
				console.log("fn.PostQuery--error", [er])
			}
		});
	}
	Plant.prototype.PostOperId = function(ID) {
		$.ajax({
			type: "GET",
			dataType: "json",
			url: Url.oper,
			data: ajaxData.query.id(ID),
			success: function(rdata) {
				if (sto.call(rdata) !== "[object Object]") {
					console.log(rdata);
					rdata = JSON.parse(rdata);
				};
				if (fn.rdataCheck(rdata)) {
					console.log("未查询到数据", rdata);
				}
				viewData = rdata.obj;
				fn.Page.LoadViewData(viewData);
			},
			complete: function(er) {
				console.log("PostOperId，ID Post查询函数--Complete", [er]);
			},
			error: function(er) {
				fn.Alert.Err("连接超时，请检查你的网络");
				console.log("fn.PostOperId--error", [er])
			}
		});
	}
	Plant.prototype.PostPage = function(N) {
		$.ajax({
			type: "POST",
			dataType: "json",
			url: Url.query,
			data: ajaxData.query.is(ajaxData.query.CacheQuery({
				pageNo: N
			})),
			success: function(rdata) {
				console.log(rdata);
				fn.Page.ClearList();
				if (!fn.SaveData(rdata)) {
					viewData = ListData.pageData = null;
					fn.Alert.Err("未查询到记录");
					console.log("未查询到数据", rdata);
					return false;
				};
				fn.Page.AddList();
				fn.Page.LoadViewData();
				return true;
			},
			complete: function(er) {
				console.log("fn.PostQuery--Complete", [er]);
				ListData.Cur.loading = false;

			},
			error: function(er) {
				fn.Alert.Err("连接超时，请检查你的网络");
				console.log("fn.PostQuery--error", [er])
			}
		});
	}
	Plant.prototype.PostMonth = function(N) {
		var obj = {
			discoverMonth: N
		};
		ListData.queryCache = obj;
		console.log(N);
		$.ajax({
			type: "POST",
			dataType: "json",
			url: Url.query,
			data: ajaxData.query.is(obj),
			success: function(rdata) {
				console.log(rdata)
				if (!fn.SaveData(rdata)) {
					fn.Alert.Err("未查询到  " + N + "  的数据")
					console.log("未查询到  " + N + "  的记录");
					return false;
				};
				fn.Page.LoadViewData();
				fn.Page.AddList();

			},
			complete: function(rdata) {},
			error: function(er) {
				fn.Alert.Err("连接超时，请检查你的网络");
				console.log("fn.PostMonth--error", [er])
			}
		});
	}
	Plant.prototype.PostDel = function(ID) {
		$.ajax({
			type: "POST",
			data: ajaxData.del(ID),
			url: Url.del,
			success: function(rdata) {
				console.log(rdata);
				if (!fn.rdataCheck(rdata)) {
					console.log("PostDel()数据提交失败", [rdata]);
					return false;
				}
				if (ListData.Cur.pageNum === 0) {
					ListData.Cur.pageNum = null;
					viewData = null;
				}
				(ListData.Cur.getNo() !== 0) && ListData.Cur.getPrev();
				fn.Page.InitView();

			},
			complete: function(er) {
				console.log("PostDel，删除函数--Complete", [er])
			}
		});
	}
	var obj = new Plant();
	return obj;
})()
var ajaxData = (function() {
	var ajaxData = function() {};
	//页面控制对象
	ajaxData.prototype.getpage = {
		openedit: {
			type: "GET",
			dataType: "html",
			//			url:"buglist" + (++curPage) + ".html",
			url: "in-edit-pc.html",
			success: function(data) {
				$("#view-body").html(data)
				fn.but.HideDate();
			},
			complete: function() {
				fn.Page.LoadEditData(viewData)
				fn.but.saveSubmit();
				$("input#status").change(fn.but.checkis);
				console.log("=== complete")
			}
		},
		opennew: {
			type: "GET",
			dataType: "html",
			//			url:"buglist" + (++curPage) + ".html",
			url: "in-new-pc.html",
			success: function(data) {
				$("#view-body").html(data);
			},
			complete: function() {
				var now = fn.formatDate("y-m-dTh:i");
				$("#discoverTime").val(now);
				fn.but.addSubmit();
				$("input#status").change(fn.but.checkis);

			}
		},
		//主页
		listbody: {
			type: "GET",
			dataType: "html",
			//			url:"buglist" + (++curPage) + ".html",
			url: "listbody.html",
			success: function(data) {
				$("#view-body").html(data);
				if (viewData) {
					fn.Page.LoadViewData();
				}
			},
			complete: function() {}
		},
		list: {
			type: "GET",
			dataType: "html",
			//			url:"buglist" + (++curPage) + ".html",
			url: "list-pc.html",
			success: function(data) {
				$("#view-body").html(data);
				if (ListData.pageData) {
					fn.Page.AddList();
				}
			},
			complete: function() {
				$("#date").show();
			}
		}
	}
	ajaxData.prototype.send = {
		discoverTime: "Bug发现时间",
		modityTime: "Bug修正时间",
		status: "修正状态",
		bugLevel: "事故等级",
		dutyPerson: "责任人-text",
		submitPerson: "提交人-text",
		matterText: "问题描述",
		modityText: "修正方法-text",
		lossText: "损失估计-text"
	}
	ajaxData.prototype.testsend = {
		discoverTime: "2015-05-12 10:55:00",
		modityTime: "2015-05-12 10:55:00",
		status: 1,
		bugLevel: 2,
		dutyPerson: "责任人-text",
		submitPerson: "提交人-text",
		matterText: "问题描述",
		modityText: "修正方法-text",
		lossText: "损失估计-text"
	}
	ajaxData.prototype.query = {
		pageNo: function(N) {
			return {
				data: JSON.stringify({
					pageNo: N || 1
				})
			}
		},
		pageSize: function(N) {
			return {
				data: JSON.stringify({
					pageSize: N || ListData.Cur.pageSize
				})
			};
		},
		Month: function(N) {
			return {
				data: JSON.stringify({
					discoverMonth: N
				})
			};
		},
		id: function(ID) {
			return {
				data: JSON.stringify({
					id: ID
				})
			};
		},
		is: function(obj) {
			var obj = obj ? obj : {};
			return {
				data: JSON.stringify(obj)
			}
		},
		CacheQuery: function(obj) {
			var temp = obj;
			if (ListData.queryCache) {
				for (i in ListData.queryCache) {
					temp[i] = ListData.queryCache[i];
				}
			}
			return temp;
		}
	};
	ajaxData.prototype.up = function(obj) {
		return {
			data: JSON.stringify(obj)
		}
	}
	ajaxData.prototype.del = function(ID) {
		return {
			data: JSON.stringify({
				id: ID
			})
		}
	}
	var obj = new ajaxData();
	return obj;
})()

var Url = (function() {
	var IP = "http://112.124.14.112:8084",
		Path = "/ECW-OperMallMgt/operate/operateBug/";
	return {
		add: IP + Path + "addOperateBug.ihtml",
		del: IP + Path + "deleteOperateBug.ihtml",
		up: IP + Path + "updateOperateBug.ihtml",
		query: IP + Path + "pageOperateBug.ihtml",
		oper: IP + Path + "operateBugDetail.ihtml"
	}
})();
var Getnew = function() {
		//把完成函数最后再加上下面的页面刷新	closedpage();
	}
	//var getsave = {}
	//	//将要发送到服务器的数据包初始化

var ListData = {
	pageCache: {
		pageSize: null
	},
	Loading: {
		discoverTime: "数据加载中",
		modityTime: "数据加载中",
		status: "数据加载中",
		bugLevel: "数据加载中",
		dutyPerson: "数据加载中",
		submitPerson: "数据加载中",
		matterText: "数据加载中",
		modityText: "数据加载中",
		lossText: "数据加载中"
	},
	level: ["提交测试Bug", "生产环境BUG", "生产环境事故"],
	status: ["未修正", "已修正"],
	names: {
		discoverTime: "发现时间:",
		bugLevel: "事故等级:",
		matterText: "问题描述:"
	},
	default: {},
	pageData: null,
	viewData: null,
	send: {},
	Cur: {
		No: 0,
		NoOut: function(N) {
			console.log("Cur.NoOut===this.Num", this.pageNum);
			return (this.pageNum || this.pageNum === 0) && (((N - 1) < this.pageNum) ? true : false);
		},
		getNo: function(i) {
			if (typeof i === "string") {
				i = parseInt(i)
			};
			var n = i || this.No;
			if (i === 0) {
				n = i
			};
			if (n === null) {
				n = this.getReset();
			}
			//指针定位的变化保存到ListData.Cur.No中
			if (!this.NoOut(n)) {
				console.log(this.No, "<<this.No===NoOut is false===this.pageNum>>", this.pageNum);
				return this.No = 0;
			}
			this.No = n;
			this.Intpos();
			console.log("No=", this.No, "<<<Next = = ", this.Next, ">>> Prev ===", this.Prev);
			return this.No;
		},
		getViewData: function() {
			if (!ListData.pageData) {
				return false;
			}
			if (ListData.Cur.pageNum === null) {
				return false;
			}
			viewData = ListData.pageData[this.getNo()];
			console.log(viewData, "===", ListData.pageData);
			return viewData ? true : false;
		},
		curlist: "list-pc",
		//确保不会同一时间重复载入同一个页面
		loading: true, //刷新状态
		pageNo: 1,
		pageNum: null,
		pageSize: 10,
		getReset: function() {
			this.No = 0;
			this.pageNum = ajaxData.cache.rows.length - 1;
			this.pageNo = 1;
			this.pageSize = 9;
			this.Intpos();
			return this.No;
		},
		page: function() {
			var page = ajaxData.cache.page || null;
			return page;
		},
		total: function(N) {
			var toal = ajaxData.cache.page || null;
			return toal;
		},
		Intpos: function() {
			this.No === this.pageNum ? (this.Next = 0) : (this.Next = this.No + 1);
			this.No === 0 ? (this.Prev = this.pageNum) : (this.Prev = this.No - 1);
		},
		Next: 1,
		getNext: function() {
			this.No === this.pageNum ? (this.No = 0) : ++this.No;
			this.Intpos();
			console.log("No=", this.No, "<<<Next = = ", this.Next, ">>> Prev ===", this.Prev);
			return this.getViewData();
		},
		Prev: 10,
		getPrev: function() {
			this.No === 0 ? (this.No = this.pageNum) : --this.No;
			this.Intpos();
			console.log("No=", this.No, "<<<Next = = ", this.Next, ">>> Prev ===", this.Prev);
			return this.getViewData();
		}
	}

};
//alert(fn.formatDate(""));