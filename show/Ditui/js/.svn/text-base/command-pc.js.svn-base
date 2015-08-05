var conso = function(obj, rthis) {
		console.log("调用" + obj + "的对象是：", rthis);
	}
	//所有的方法函数都在这里;
var fn = (function() {
	var Plant = function() {};
	Plant.prototype.Page = {
		requiredspan:function(){
			$("[required]").parent().prepend($("<span class='required'></span>").html("&#42"))
		},
		initNavbar: function() {
			var height = $(window).height();
			$('.nav').css("max-height", ((height - 114) + 'px'));
		},
		ListGetView: function() {
			fn.but.navbarToggle();
			ListData.Cur.getNo(this.id);
			ListData.Cur.getViewData();
			fn.Page.InitView();
		},
		InitView: function() {
			$.ajax(ajaxData.getpage.listbody);
			fn.PostPage(ListData.pageCache.pageNo);
			setTimeout(fn.but.HideDate, 500);
			return true;
			//			};
			//			console.log("初始化完成");
		},
		RefView: function(obj) {
			ListData.pageData = null;
			viewData = null;
			$.ajax(ajaxData.getpage.listbody);
			fn.PostQuery(obj);
			console.log("页面刷新完成");
		},
		NextPage: function() {
			if (ListData.pageCache.hasNext) {
				ListData.Cur.getNo(0);
				fn.PostPage((ListData.pageCache.pageNo + 1));
			} else {
				//					alert("已是最后一页");
			}
		},
		PrevPage: function() {
			if (ListData.pageCache.hasPrevious) {
				ListData.Cur.getNo(ListData.Cur.pageNum);
				fn.PostPage((ListData.pageCache.pageNo - 1));
			} else {

				//					alert("已是最新页");
			}
		},
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
				$(elems).show();
				console.log(opts.msg);
				opts.entertext && $("button.enter").text(opts.entertext);
				$(".alert-message").text(opts.msg);
				$("button.enter").unbind()
					.on("click", function() {
						if (opts.enter) {
							opts.enter()
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
			if (viewData === null) {
				return false;
			};
			fn.Alert.Set({
				msg: "确定要删除这条资料？",
				enter: fn.but.Delcur,
				entertext: "确定"
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
		footbut: function(type) {
			if (type == "view") {
				$("#LeftBut").removeClass()
					.addClass('getedit')
					.unbind()
					.on("click", fn.but.editlist)
					.text("修 改");
				$("#ReigthBut").removeClass()
					.addClass('getdel')
					.unbind()
					.on("click", fn.Alert.getDel)
					.text("删除");
			}
			if (type == "edit") {
				$("#LeftBut").removeClass()
					.addClass('save')
					.unbind()
					.on("click", function() {
						//						fn.FormCheck();
						if (!myfn.FormCheck()) {
							return false;
						}
						ListData.send = myfn.dataPack(ajaxData.send, "edit");
						console.log(window.ListData.send);
						fn.Alert.loadStart("数据提交中");
						fn.PostUP(ListData.send);
						console.log("完成提交");
					})
					.text("保 存");
				$("#ReigthBut").removeClass()
					.addClass('close')
					.unbind()
					.on("click", fn.Page.InitView)
					.text("关 闭");
			}
			if (type == "new") {
				$("#LeftBut").removeClass()
					.addClass('add')
					.unbind()
					.on("click", function() {
						//						fn.FormCheck();
						if (!myfn.FormCheck()) {
							return false;
						};
						ListData.send = myfn.dataPack(ajaxData.send);
						fn.Alert.loadStart("数据提交中");
						fn.PostAdd(ListData.send);
						console.log("完成提交的执行");
					})
					.text("保 存");
				$("#ReigthBut").removeClass()
					.addClass('close')
					.unbind()
					.on("click", fn.Page.InitView)
					.text("关 闭")
			}
		},
		navbarToggle: function() {
			if ($("#navbar").hasClass('in')) {
				$("#navbar").slideToggle();
				setTimeout(function() {
					$("#navbar").toggleClass('in')
				}, 500);
			} else {
				$("#navbar").slideDown();
				$("#navbar").toggleClass('in');
			}
		},
		editlist: function() {
			if (viewData === null) {
				return false
			};
			$.ajax(ajaxData.getpage.openedit);
		},
		newlist: function() {
			$.ajax(ajaxData.getpage.opennew);
			myfn.but.Brand()
			myfn.but.HideDate();
		},

		Delcur: function() {
			if (viewData === null) {
				return false
			};
			fn.PostDel(viewData.id)
		},
		addQueryMonth: function() {
			$("#selectmonth").unbind().on("focusout", function() {
				var month = $(this).val();
				if (!month) {
					fn.PostQuery();
					console.log("未选择有效月份");
					//					return false;
				} else {
					fn.PostMonth(month);
				}
			})
		},
	}
	Plant.prototype.SaveData = function(rdata) {
		//收到的包数据分拣
		if (!fn.rdataCheck(rdata) || !rdata.obj || !rdata.obj.rows) {
			return false;
		};
		var returnValue;
		ListData.pageCache = ajaxData.cache = rdata.obj;
		ListData.pageData = rdata.obj.rows;
		ListData.page = rdata.obj.page;
		ListData.Cur.pageNum = rdata.obj.rows.length - 1;
		viewData = rdata.obj.rows[ListData.Cur.getNo()];
		returnValue = viewData ? true : false;
		//		console.log("数据转存执行完毕==");
		return returnValue;
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
		//用POST将提供的对象转换成JSON数据上传
	Plant.prototype.PostAdd = function(datas) {
		var send = myfn.dataPack(datas);
		console.log(send);
		$.ajax({
			type: "POST",
			//				dataType:"json",
			data: ajaxData.up(datas),
			url: Url.add,
			success: function(rdata) {
				if (!fn.rdataCheck(rdata)) {
					fn.Alert.Err("数据提交失败");
					console.log("PostAdd()数据提交失败", [rdata]);
					return false;
				}
				console.log("数据提交完成===", rdata);
				fn.Page.InitView();
			},
			error: function(er) {
				fn.Alert.Err("保存失败，请检查你的网络");
				//				alert("连接超时，请检查你的网络");
				console.log("fn.PostUP--error", [er])
			}
		});
	}
	Plant.prototype.PostUP = function(datas) {
		$.ajax({
			type: "POST",
			data: ajaxData.up(datas),
			url: Url.up,
			success: function(rdata) {
				if (!fn.rdataCheck(rdata)) {
					fn.Alert.Err("数据提交失败,记录未修改");
					console.log("PostUP()数据提交失败,记录未修改", rdata);
					return false;
				}
				console.log("数据提交完成===", rdata);
				fn.Page.InitView();
			},
			complete: function(er) {
				console.log("PostUP--Complete", [er]);
			},
			error: function(er) {
				fn.Alert.Err("修改失败，请检查你的网络");
				//				alert("连接超时，请检查你的网络");
				console.log("fn.PostUP--error", [er])
			}
		});
	}
	Plant.prototype.PostQuery = function(obj) {
		ListData.queryCache = obj ? obj : null; //缓存上一次的查询记录
		$.ajax({
			type: "POST",
			dataType: "json",
			url: Url.query,
			data: ajaxData.query.is(obj),
			success: function(rdata) {
				//				console.log(rdata);
				myfn.Page.ClearList();
				if (!fn.SaveData(rdata)) {
					viewData = ListData.pageData = null;
					fn.Alert.Err("未查询到数据");
					console.log("未查询到数据", rdata);
					return false;
				};
				myfn.Page.AddList();
				fn.PostOperId(viewData.id)
				fn.Alert.loadComplete();
				return true;
			},
			complete: function(er) {
				//				console.log("fn.PostQuery--Complete", [er]);
				ListData.Cur.loading = false;
				myScroll.refresh();
			},
			error: function(er) {
				fn.Alert.Err("连接超时，请检查你的网络");
				//				console.log("fn.PostQuery--error", [er])
			}
		});
	}
	Plant.prototype.PostOperId = function(ID) {
		console.log(ajaxData.query.id(ID));
		$.ajax({
			type: "POST",
			url: Url.oper,
			data: ajaxData.query.id(ID),
			success: function(rdata) {
				var sto = Array.prototype.toString;
				if (sto.call(rdata) !== "[object Object]") {
					console.log(rdata);
					rdata = JSON.parse(rdata);
				};
				if (!fn.rdataCheck(rdata)) {
					viewData = ListData.pageData = null;
					fn.Alert.Err("未查询到数据");
					console.log("未查询到数据", rdata);
					return false;
				};
				console.log(rdata);
				viewData = rdata.obj;
				myfn.Page.LoadViewData(viewData);
				fn.Alert.loadComplete();
			},
			complete: function(er) {
				console.log("PostOperId，ID Post查询函数--Complete", [er]);
			},
			error: function(er) {
				fn.Alert.Err("查询ID失败，请检查你的网络");
				//				alert("连接超时，请检查你的网络");
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
				myfn.Page.ClearList();
				if (!fn.SaveData(rdata)) {
					viewData = ListData.pageData = null;
					fn.Alert.Err("未查询到数据");
					console.log("未查询到数据", rdata);
					return false;
				};
				myfn.Page.AddList();
				fn.PostOperId(viewData.id)
				fn.Alert.loadComplete();
				return true;
			},
			complete: function(er) {
				console.log("fn.PostQuery--Complete", [er]);
				ListData.Cur.loading = false;
			},
			error: function(er) {
				fn.Alert.Err("加载失败，请检查你的网络");
				//				alert("连接超时，请检查你的网络");
				console.log("fn.PostQuery--error", [er])
			}
		});
	}
	Plant.prototype.PostMonth = function(N) {
		var obj = {
			discoverMonth: N
		};
		ListData.queryCache = obj;
		console.log(obj);
		$.ajax({
			type: "POST",
			dataType: "json",
			url: Url.query,
			data: ajaxData.query.is(obj),
			success: function(rdata) {
				console.log(rdata)
				myfn.Page.ClearList();
				if (!fn.SaveData(rdata)) {
					viewData = ListData.pageData = null;
					fn.Alert.Err("未查询到数据");
					console.log("未查询到数据", rdata);
					return false;
				};
				myfn.Page.AddList();
				fn.PostOperId(viewData.id)
				fn.Alert.loadComplete();
			},
			complete: function(rdata) {},
			error: function(er) {
				fn.Alert.Err("加载失败，请检查你的网络");
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
					fn.Alert.Err("删除失败");
					console.log("PostDel()数据提交失败", [rdata]);
					return false;
				}
				if (ListData.Cur.pageNum === 0) {
					ListData.Cur.pageNum = null;
					viewData = null;
				}
				(ListData.Cur.getNo() === 0) || ListData.Cur.getPrev();
				fn.Page.RefView();

			},
			complete: function(er) {
				console.log("PostDel，删除函数--Complete", [er])
			},
			error: function(er) {
				fn.Alert.Err("删除失败，请检查你的网络");
			}
		});
	}
	var obj = new Plant();
	return obj;
})()
var touchis = (function() {
	var paer = function() {};
	paer.prototype = {
		MoveFunc: function() {
			if (ListData.Cur.loading) {
				return false;
			}
			if ((this.y - this.maxScrollY < (-75)) && (!ListData.Cur.alert) && (!ListData.Cur.loading)) {
				if (ListData.Cur.getNo() === ListData.Cur.pageNum) {
					if (ListData.pageCache.hasNext) {
						$("#pushup").text("松开将加载更多：\n第" + (ListData.pageCache.pageNo + 1) + "页内容").fadeIn();
						ListData.Cur.loadNextStart = true;
					} else {
						$("#pushup").text("无法加载，已是最后一页").fadeIn();
					}
				} else {

					$("#pushup").text("松开加载第" + (ListData.Cur.No + 2) + "条记录").fadeIn();
					ListData.Cur.loadNextStart = true;
				}
				ListData.Cur.alert = true;
			}
			if ((this.y > (75)) && (!ListData.Cur.alert) && (!ListData.Cur.loading)) {
				if (ListData.Cur.getNo() === 0) {
					if (ListData.pageCache.hasPrevious) {
						$("#pushdown").text("松开将加载更多：\n第" + (ListData.pageCache.pageNo - 1) + "页内容").fadeIn();
						ListData.Cur.loadPrevStart = true;
					} else {
						$("#pushdown").text("已是第一页").fadeIn();
					}
				} else {
					$("#pushdown").text("松开加载第" + (ListData.Cur.No) + "条记录").fadeIn();
					ListData.Cur.loadPrevStart = true;
				}
				ListData.Cur.alert = true;

			}
		},
		EndFunc: function() {
			if (!ListData.Cur.loading && ListData.Cur.loadNextStart) {
				if (ListData.Cur.getNo() === ListData.Cur.pageNum) {
					ListData.Cur.loading = true;
					if (ListData.pageCache.hasNext) {
						fn.Page.NextPage();
						$("#pushup").text("数据加载成功").fadeOut("slow");
						setTimeout(function() {
							myScroll.refresh()
							myScroll.scrollTo(0, 0, 1000);
						}, 200);
					} else {
						$("#pushup").fadeOut("slow");
						ListData.Cur.loading = false;
					};
				} else {
					ListData.Cur.loading = true;
					ListData.Cur.getNext();
					myfn.Page.LoadViewData();
					//				alert("下一页执行成功");
					ListData.Cur.loading = false;
					$("#pushup").text("数据加载成功").fadeOut("slow");
					setTimeout(function() {
						myScroll.refresh();
						myScroll.scrollTo(0, 0, 1000);
					}, 200);
				};
				ListData.Cur.alert = ListData.Cur.loadNextStart = false;
			};
			if (!ListData.Cur.loading && ListData.Cur.loadPrevStart) {
				if (ListData.Cur.getNo() === 0) {
					ListData.Cur.loading = true;
					if (ListData.pageCache.hasPrevious) {
						fn.Page.PrevPage();
						$("#pushdown").text("数据加载成功").fadeOut("slow");
						setTimeout(function() {
							myScroll.refresh()
							myScroll.scrollTo(0, 0, 1000);
						}, 200);
					} else {
						$("#pushdown").fadeOut("slow");
						ListData.Cur.loading = false;
					};
				} else {
					ListData.Cur.loading = true;
					ListData.Cur.getPrev();
					myfn.Page.LoadViewData();
					$("#pushdown").text("数据加载成功").fadeOut("slow");
					//				alert("上一页执行成功");
					ListData.Cur.loading = false;
					setTimeout(function() {
						myScroll.refresh()
						myScroll.scrollTo(0, 0, 1000);
					}, 200);
				};
				ListData.Cur.alert = ListData.Cur.loadPrevStart = false;
			};
			if (ListData.Cur.alert) {
				$("#pushdown").fadeOut("slow");
				$("#pushup").fadeOut("slow");
				ListData.Cur.alert = false;
			}

		}
	}
	paer = new paer();
	return paer;
})();