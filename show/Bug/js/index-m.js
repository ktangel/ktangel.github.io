window.onload = function() {
	myScroll = new IScroll('#wrapper', {
		preventDefaultException: {
			tagName: /^(LABEL|INPUT|TEXTAREA|BUTTON|SELECT)$/
		},
		probeType: 1,
		tap: true,
		//		preventDefault:false,
		onBeforeScrollStart: function(e) {
			var target = e.target;
			while (target.nodeType != 1) target = target.parentNode;
			if (target.tagName != 'label' && target.tagName != 'select' && target.tagName != 'input' && target.tagName != 'textarea') {
				e.preventDefault();
			}
		},
		disableMouse: true,
		disablePointer: true
	});
	fn.Page.initNavbar();
	fn.Page.InitView();
	myfn.AddBaseEv();
	myScroll.on('scroll', touchis.MoveFunc);
	myScroll.on('scrollEnd', touchis.EndFunc);
};
var viewData = null;
var viewDatatest = {
	discoverTime: "2016-05-12 10:55:00",
	modityTime: "2016-05-12 10:55:00",
	status: 0,
	bugLevel: 2,
	dutyPerson: "责任人-text",
	submitPerson: "提交人-text",
	matterText: "问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述问题描述",
	modityText: "修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text修正方法-text",
	lossText: "损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text损失估计-text"
};
var pageData = null;
var ListData = {
	pageCache: {
		pageSize: null
	},
	Loading: {
		discoverTime: "数据加载中",
		modityTime: "数据加载中",
		status: "修正状态",
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
			return this.getViewData();
		},
		Prev: 15,
		getPrev: function() {
			this.No === 0 ? (this.No = this.pageNum) : --this.No;
			this.Intpos();
			return this.getViewData();
		}
	}
};