var myfn = (function() {
	var my = function() {};
	my.prototype.Page = {
		LoadViewData: function(obj) {
			var i,
				Data = obj || viewData,
				tex;
			//			console.log("loadViewData===", [Data]);
			for (i in ListData.Loading) {
				tex = Data ? ((i === "bugLevel") ? ListData.level[Data[i]] : Data[i]) : "未加载到数据";
				if (i === "status") {
					tex = ListData.status[Data[i]];
					Data[i] ? $("#" + i).css("color", "limegreen") : $("#" + i).css("color", "red");
				}
				$("#" + i).text(tex);
			}
			myfn.Page.AddList();
		},
		LoadEditData: function(data) {
			var i;
			$('#editbug input,textarea,select').each(function() {
				var id = this.id;
				if (data[id] && (this.type === "datetime-local")) {
					this.value = myfn.makeDate(data[id], 'view');
				} else {
					if (id === 'status') {
						$(this).val(parseInt(data[id]));
						if (data[id]) {
							this.checked = true;
							$("input[name='modityTime']").removeAttr("disabled", "disabled");
						} else {
							$("input[name='modityTime']").attr("disabled", "disabled");
							this.checked = false;
						}
					} else {
						this.value = (id === 'bugLevel') ? parseInt(data[id]) : data[id]
					}
				}
			})
		},
		ClearList: function() {
			$("ul.nav li").remove();
			//			console.log("标题列表清理完成");
		},
		AddList: function() {
			ListData.pageCache.hasNext ? $('#pushup-list').show() : $('#pushup-list').hide();
			ListData.pageCache.hasPrevious ? $('#pushdown-list').show() : $('#pushdown-list').hide();
			myfn.Page.ClearList();
			if (!ListData.pageData) {
				return false;
			};
			//给下拉列表推数据的函数
			for (var i = 0, max = ListData.pageData.length; i < max; i++) {
				var divnav, div, div1, div2, sta, List;
				div2 = $('<div></div>').addClass("matterText-ti").append($("<p></p>").text("问题描述:").append($("<span></span>").text(ListData.pageData[i].matterText)));
				div1 = $('<div></div>').addClass("bugLevel-ti").append($("<p></p>").text("事故等级:").append($("<span></span>").text(ListData.level[ListData.pageData[i].bugLevel])));
				div = $('<div></div>').addClass("discoverTime-ti").append($("<p></p>").text("发现时间:").append($("<span></span>").text(ListData.pageData[i].discoverTime)));
				sta = $("<div></div>").addClass('status-ti').text(ListData.status[ListData.pageData[i].status]);
				ListData.pageData[i].status ? $(sta).css("background-color", "#3DA2E3") : $(sta).css("background-color", "red");
				List = $("<li></li>").append($("<div class='nav-list'></div>").append(div2, div1, div, sta));
				//绑定id到li标签
				$(List).attr("id", i);
				//下一步是绑点击li后查看详情的动作
				$(List).on('click', fn.Page.ListGetView);
				if (i === ListData.Cur.getNo()) {
					$(List).addClass("active");
				}
				$(".pushup-list").before(List);
				//						console.log("==AddList 加载完成===");
			};
			//			console.log("AddList()执行完毕");
		},
	}
	my.prototype.but = {
		inputFix: function() {
			$("input,textarea").each(function() {
				$(this).on('focusin', function(e) {
					$('.footbut').hide();
					myScroll.disable();
					e.stopPropagation();
				});
				$(this).on('focusout', function(e) {
					$('.footbut').show();
					myScroll.enable();
					e.stopPropagation();
				})
			})
		},
		checkis: function(e) {
			if ($("#status").prop('checked')) {
				$("#status").val(1);
				$("input#modityTime").removeAttr("disabled").attr('required','required');
			} else {
				$("#status").val(0);
				$("input#modityTime").attr("disabled", "disabled").removeAttr('required','required').val(null);
			}
			e.stopPropagation();
		},
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
	my.prototype.AddBaseEv = function() {
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
			$("#editbug input,textarea,select").each(function() {
				var ids = this.id;
				if ($(this).val()) {
					fdata[ids] = ((ids === 'status') || (ids === 'bugLevel')) ? parseInt($(this).val()) : (this.type === "datetime-local" ? myfn.makeDate($(this).val(), 'send') : $(this).val());
				}
				//				console.log(ids+"---ok");
			})
			edit ? fdata.id = viewData.id : null;
			(fdata.status === 0) && (fdata.modityTime = null);
			//			console.log(fdata);
			return fdata;
		}
		//==日期转换函数
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
	my.prototype.FormCheck = function(el) {
			var retu = false,
				type = {
					phone: function(value) {
						return /^1[3|5|6|7|8][0-9]\d{8}$/.test(value) || /(^([0-2]\d{2,3})-([2-8][0-9][0-9]\d{4,5})$)|^[2-8][2-8][0-9]\d{4,5}$/.test(value);
					}
				},
				el = el || $('[required="required"]');
			var isCheck = function(values, el) {
					if (!values) {
						return false
					};
					if ($(el).hasClass("phone")) {
						if (!type.phone(values)) {
							removetip(el);
							errtip(el, '电话号码格式不正确');
							return false;
						};
					}
					if (el.type === 'password') {
						if (el.value.length < 6) {
							removetip(el);
							errtip(el, '密码长度不能小于6位');
							return false;
						}
						var els = $('input[type = password]');
						if (els[1].value && (els[0].value !== els[1].value)) {
							this.focus();
							!els[1].value && els[1].focus();
							$(els[1]).addClass('inputerr');
							removetip(el);
							errtip(el, '两次密码输入不一致，请重填');
							return false;
						}
					}
					return true;
				},
				hastip = function() {
					//判断悬浮文字是否存在
					return $('div.inputerrtip').hasClass('inputerrtip')
				},
				removetip = function() {
					if (hastip()) {
						$('span.tiptext').unwrap();
						$('span.tiptext').remove();
					}
				},
				hidetip = function() {
					$('.inputerrtip span.tiptext').fadeOut();
				},
				errtip = function(el, msg) {
					if (hastip()) {
						return;
					}
					var tip = $('<div class="inputerrtip"></div>'),
						msgspan = $('<span class="tiptext"></span>').text(msg);
					$(el).wrap(tip);
					$(el).after(msgspan);
					$('.inputerrtip span.tiptext').on('tap', hidetip);
					$(el).on('tap keyup blur', hidetip);
				};
			//下面开始检查
			$(el).each(function() {
				$(this).hasClass("inputerr") && $(this).removeClass("inputerr");
				if (!isCheck(this.value, this)) {
					$(this).focus();
					myScroll.scrollToElement(this, 1200, null, -50);
					$(this).addClass('inputerr');
					return retu = false;
				} else {
					retu = true;
				}
			})
			return retu;
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
			},
			complete: function() {
				myfn.but.HideDate();
				fn.but.footbut("edit");
				myfn.but.inputFix();
				$("#status").click(myfn.but.checkis);
				ListData.Cur.loading = true;
				myfn.Page.LoadEditData(viewData);
				myScroll.refresh();
				//				myScroll.disable();
				myScroll.scrollTo(0, 0, 1000);
				console.log("=== complete")
			}
		},
		opennew: {
			type: "GET",
			dataType: "html",
			url: "in-new-m.html",
			success: function(data) {
				$("#scroller").html(data)
			},
			complete: function() {
				fn.but.footbut("new");
				$("#status").on('click', function(e) {
					myfn.but.checkis(e);
				});
				var now = myfn.formatDate("y-m-dTh:i");
				$("#discoverTime").val(now);
				myfn.but.HideDate();
				myfn.but.inputFix();
				myScroll.refresh();
				myScroll.scrollTo(0, 0, 1000);
				ListData.Cur.loading = true;
			}
		},
		//主页 
		listbody: {
			type: "GET",
			dataType: "html",
			url: "viewbody.html",
			success: function(data) {
				$("#scroller").html(data);
			},
			complete: function() {
				if (viewData) {
					myfn.Page.LoadViewData();
				}
				fn.but.footbut("view");
				myScroll.refresh();
				myScroll.scrollTo(0, 0, 1000);
				ListData.Cur.loading = false;
			}
		}
	}
	ajaxData.prototype.send = {
		discoverTime: "Bug发现时间",
		modityTime: "Bug修正时间",
		bugLevel: "事故等级",
		status: "修正状态",
		dutyPerson: "责任人-text",
		submitPerson: "提交人-text",
		matterText: "问题描述",
		modityText: "修正方法-text",
		lossText: "损失估计-text"
	}
	ajaxData.prototype.testsend = {
		discoverTime: "2015-05-12 10:55:00",
		modityTime: "2015-05-12 10:55:00",
		status: 0,
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