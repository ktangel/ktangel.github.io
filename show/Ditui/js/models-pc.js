var myfn = (function() {
	var my = function() {};
	my.prototype.Page = {
		LoadViewData: function(obj) {
			var Data = obj || viewData;
			$('.data-show').each(function() {
				var id = this.id;
				$(this).text(Data[id] ? Data[id] : "无数据");
			})
		},
		LoadEditData: function(data) {
			var id;
			$('#editbug input,textarea').each(function() {
				id = $(this).attr('id');
				if (this.type === "datetime-local") {
					this.value = myfn.makeDate(data[id], 'view');
				} else {
					data[id] && (this.value = data[id]);
				}
			})
		},
		ClearList: function() {
			$("ul.nav li").remove();
			console.log("标题列表清理完成");
		},
		AddList: function() {
			ListData.pageCache.hasNext ? $('#pushup-list').show() : $('#pushup-list').hide();
			ListData.pageCache.hasPrevious ? $('#pushdown-list').show() : $('#pushdown-list').hide();
			myfn.Page.ClearList();
			if (!ListData.pageData.length) {
				return false;
			};
			//给下拉列表推数据的函数
			$.each(ListData.pageData, function(i, n) {
				var divnav, div, div1, div2, div3, sta, List;
				div = $('<div></div>').addClass("activityName-ti").append($("<p></p>").text("活动主题:").append($("<span></span>").text(n.activityName)));
				div1 = $('<div></div>').addClass("generalizePerson").append($("<p></p>").text("地推人员:").append($("<span></span>").text(n.generalizePerson)));
				div2 = $('<div></div>').addClass("generalizeStartTime").append($("<p></p>").text("开始时间:").append($("<span></span>").text(n.generalizeStartTime)));
				div3 = $('<div></div>').addClass("updateTime").append($("<p></p>").text("更新时间:").append($("<span></span>").text(n.updateTime)));
				List = $("<li></li>").append($("<div class='nav-list'></div>").append(div, div1, div2, div3));
				//绑定id到li标签
				$(List).attr("id", i);
				//下一步是绑点击li后查看详情的动作
				$(List).on('click', fn.Page.ListGetView);
				if (i === ListData.Cur.getNo()) {
					$(List).addClass("active");
				}
				$(".pushup-list").before(List);
			})
			console.log("AddList()执行完毕");
		}
	}
	my.prototype.but = {
		getPrev: function() {
			if ((!ListData.Cur.alert) && (!ListData.Cur.loading)) {
				if (ListData.Cur.getNo() === 0) {
					if (ListData.pageCache.hasPrevious) {
						$("#pushdown").text("松开将加载更多：\n第" + (ListData.pageCache.pageNo - 1) + "页内容").fadeIn();
						ListData.Cur.loadPrevStart = true;
					} else {
						$("#pushdown").text("已是第一页").fadeIn();
						$("#pushdown").fadeOut();
						return false;
					}
				} else {
					$("#pushdown").text("加载第" + (ListData.Cur.No) + "条记录").fadeIn();
					ListData.Cur.loadPrevStart = true;
				}
				ListData.Cur.alert = true;
			}
			touchis.EndFunc();
		},
		getNext: function() {
			if ((!ListData.Cur.alert) && (!ListData.Cur.loading)) {
				if (ListData.Cur.getNo() === ListData.Cur.pageNum) {
					if (ListData.pageCache.hasNext) {
						$("#pushup").text("松开将加载更多：\n第" + (ListData.pageCache.pageNo + 1) + "页内容").fadeIn();
						ListData.Cur.loadNextStart = true;
					} else {
						$("#pushup").text("已是最后一页").fadeIn();
						$("#pushup").fadeOut();
						return false;
					}
				} else {

					$("#pushup").text("加载第" + (ListData.Cur.No + 2) + "条记录").fadeIn();
					ListData.Cur.loadNextStart = true;
				}
				ListData.Cur.alert = true;
			}
			touchis.EndFunc();
		},
		//		inputFix: function() {
		//			$("input,textarea").each(function() {
		//				$(this).on('focusin', function(e) {
		//					$('.footbut').hide();
		//					myScroll.disable();
		//					e.stopPropagation();
		//				});
		//				$(this).on('focusout', function(e) {
		//					$('.footbut').show();
		//					myScroll.enable();
		//					e.stopPropagation();
		//				})
		//			})
		//		},
		HideDate: function() {
			$("#navbar-brand")[$("#navbar").hasClass('in') ? 'hide' : 'show']();
			$("#date")[$("#navbar").hasClass('in') ? 'show' : 'hide']();
		},
		Brand: function() {
			if ($("#navbar").hasClass('in')) {
				fn.but.navbarToggle()
			};
		},
	}
	my.prototype.AddBaseEv = function() {
		$("#PrevBut").on("click", myfn.but.getPrev);
		$("#NextBut").on("click", myfn.but.getNext);
		fn.but.addQueryMonth();
		$(".newbut").on("click", fn.but.newlist);
		$('button.navbar-toggle,.nav-close').on('click', fn.but.navbarToggle);
		$("#pushdown-list").on('click', function() {
			fn.Alert.loadStart();
			fn.Page.PrevPage();
			setTimeout(function() {
				window.location = "#" + ListData.Cur.No
			}, 400);
		})
		$("#pushup-list").on('click', function() {
			fn.Page.NextPage();
			fn.Alert.loadStart();
			setTimeout(function() {
				window.location = "#pushdown-list"
			}, 400);
		});
		$("button.all").on('click', function() {
			fn.PostQuery();
		});
	}
	my.prototype.dataPack = function(data, edit) {
		var sdata = "",
			fdata = {};
		$("#editbug input,textarea").each(function() {
			var ids = this.id;
			if ($(this).val()) {
				fdata[ids] = (this.type === 'number') ? parseInt($(this).val()) : (this.type === "datetime-local" ? myfn.makeDate($(this).val(), 'send') : $(this).val());
			}
			//				console.log(ids+"---ok");
		})
		edit && (fdata.id = viewData.id);
		//						console.log(fdata);
		return fdata;
	}
	my.prototype.FormCheck = function() {
			var retu = false;
			$("span").remove(".required");
			$('[required="required"]').each(function() {
				if (!this.value) {
					myScroll.scrollToElement(this,1200,null,-50);
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
		//==日期转换函数
	my.prototype.makeDate = function(indate, type) {
		var findate = indate;
		if (type === 'send') {
			findate = findate.replace("T", " ");
			findate = findate.replace("Z");
			findate = findate.concat(":00")
			return findate;
		}
		if (type === 'view') {
			findate = findate.replace(" ", "T")
			return findate;
		}
	}
	my.prototype.formatDate = function(formatStr, fdate, intype) {
		var fTime, fStr = 'ymdhis';
		console.log(fdate)
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
				console.log("myfn.formatDate()--日期格式转换失败");
			}
		}
		return formatStr;
	}
	my = new my();
	return my;
})();
var ajaxData = (function() {
	var ajaxData = function() {};
	//页面控制对象
	ajaxData.prototype.getpage = {
		openedit: {
			type: "GET",
			dataType: "html",
			url: "in-edit-m.html",
			success: function(data) {
				$("#scroller").html(data)
				myfn.but.HideDate();
				$(".PageList").hide();
				//				myfn.but.inputFix();
				fn.but.footbut("edit");
				myScroll.refresh();
				myScroll.scrollTo(0, 0, 1000);
			},
			complete: function() {
				ListData.Cur.loading = true;
				myfn.Page.LoadEditData(viewData)
				console.log("=== complete")
				fn.Page.requiredspan();
			}
		},
		opennew: {
			type: "GET",
			dataType: "html",
			url: "in-new-m.html",
			success: function(data) {
				$("#scroller").html(data)
				myfn.but.HideDate();
				//				myfn.but.inputFix();
				fn.but.footbut("new");
				$(".PageList").hide();
			},
			complete: function() {
				myScroll.refresh();
				myScroll.scrollTo(0, 0, 1000);
				ListData.Cur.loading = true;
				var now = myfn.formatDate("y-m-dTh:i");
				$("#generalizeTimeS").val(now);
				$("#generalizeTimeE").val(now);
				fn.Page.requiredspan();
			}
		},
		//主页 
		listbody: {
			type: "GET",
			dataType: "html",
			//			url:"buglist" + (++curPage) + ".html",
			url: "viewbody.html",
			success: function(data) {
				$("#scroller").html(data);

				//					touchis.bindEvent();
				if (viewData) {
					myfn.Page.LoadViewData();
				}
				fn.but.footbut("view");
				$("#navbar-brand").hide();
				$("#date").show();
			$(".PageList").show();
			//					myScroll.refresh(); 
		},
		complete: function() {
			myScroll.refresh();
			myScroll.scrollTo(0, 0, 1000);
			ListData.Cur.loading = false;
			//				fn.but.HideDate();
		}
	}
}
ajaxData.prototype.send = {
	updateTime: '更新时间',
	generalizePerson: "地推人员",
	generalizeStartTime: "开始时间",
	generalizeEndTime: "结束时间",
	qrcodeNo: "推广二维码",
	activityName: "活动主题",
	activityExplain: "活动说明",
	donationNum: "赠品数量",
	address: "地推地点",
	districtTrait: "区域特点",
	addressType: "地推类型",
	coverageNum: "覆盖人数",
	attentionNum: "关注人数",
	registerNum: "注册人数",
	orderNum: "下单数量",
	finishNum: "完成数量",
	orderAmount: "订单交易金额",
	activityRemark: "活动总结"
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
		return {
			data: JSON.stringify(obj ? obj : {})
		}
	},
	CacheQuery: function(obj) {
		var temp = obj;
		if (ListData.queryCache) {
			$.each(ListData.queryCache, function(i, n) {
				temp[i] = n;
			})
		}
		return temp;
	}
}; ajaxData.prototype.up = function(obj) {
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
		Path = "/ECW-OperMallMgt/operate/operateGeneralize/";
	return {
		add: IP + Path + "addOperateGeneralize.ihtml",
		del: IP + Path + "deleteOperateGeneralize.ihtml",
		up: IP + Path + "updateOperateGeneralize.ihtml",
		query: IP + Path + "pageOperateGeneralize.ihtml",
		oper: IP + Path + "operateGeneralizeDetail.ihtml"
	}
})();