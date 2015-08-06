window.onload = function() {
	myScroll = new IScroll('#wrapper', {
		probeType: 1,
		disableMouse: true,
		disablePointer: true,
		preventDefaultException: {
			tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
		}
	});
	fn.Page.initNavbar();
	fn.Page.InitView();
	myfn.AddBaseEv();
	myScroll.on('scroll', touchis.MoveFunc);
	myScroll.on('scrollEnd', touchis.EndFunc);
};

var ListData = {
	pageCache: {},
	testsend: {
		generalizePerson: "张三",
		generalizeStartTime: "2015-06-07 12:11:00",
		generalizeEndTime: "2015-06-07 12:11:00",
		qrcodeNo: "dsa",
		activityName: "dasfasfd",
		activityExplain: "活动说明",
		donationNum: 333, //赠品数量
		address: "地推地点",
		districtTrait: "区域特点",
		addressType: "地推类型",
		activityRemark: "活动总结"
	},
	default: {},
	pageData: null,
	viewData: null,
	send: {},
	queryCache: null,
	movestart: false,
	Cur: {
		No: 0,
		NoOut: function(N) {
			//			console.log("Cur.NoOut===this.Num", this.pageNum);
			return (this.pageNum || this.pageNum === 0) && (((N - 1) < this.pageNum) ? true : false);
		},
		getNo: function(i) {
			var n = i || this.No;
			if (i === 0) {
				n = i
			};
			if (n === null) {
				n = this.getReset();
			}
			if (typeof n === 'string') {
				n = parseInt(n)
			}
			//指针定位的变化保存到ListData.Cur.No中
			if (!this.NoOut(n)) {
				//				console.log(this.No, "<<this.No===NoOut is false===this.pageNum>>", this.pageNum);
				return this.No = 0;
			}
			this.No = n;
			this.Intpos();
			//			console.log("No=", this.No, "<<<Next = = ", this.Next, ">>> Prev ===", this.Prev);
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
			//			console.log(viewData, "===", this.No, ListData.pageData);
			return viewData ? true : false;
		},
		curlist: "listbody",
		loading: false, //页面刷新状态，是否支持touch事件运行等。//确保不会同一时间重复载入同一个页面
		loadNextStart: false, //是否满足加载执行的开关;
		loadPrevStart: false, //是否满足加载执行的开关;
		alert: false, //是否出现了弹出框
		pageNo: 1,
		pageNum: null,
		pageSize: 15,
		getReset: function() {
			this.No = 0;
			this.pageNum = ajaxData.cache.rows.length - 1;
			this.pageNo = 1;
			this.pageSize = 15;
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
			//			console.log("No=", this.No, "<<<Next = = ", this.Next, ">>> Prev ===", this.Prev);
			return this.getViewData();
		},
		Prev: 15,
		getPrev: function() {
			this.No === 0 ? (this.No = this.pageNum) : --this.No;
			this.Intpos();
			//			console.log("No=", this.No, "<<<Next = = ", this.Next, ">>> Prev ===", this.Prev);
			return this.getViewData();
		}
	}

};

var viewData = null;
var pageData = null;