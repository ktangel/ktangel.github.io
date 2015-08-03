(function(win, doc) {
	var mAlert = "m-alert"
		,overlayClss = "m-overlay"
		,mModal = "m-modal"
		,modalIndex = 9999;
	var param = {
		modalClass:"",
		title : "温馨提示",
		titleClass:"",
		content : "hello world!!!",
		contentClass:"",
		okFunction :function(){
			console.log("okfunction")
		},
		imgURL:'img/loading.gif',
		okText : "确定",
		okClass:"red",
		onlyOk : false,
		cancelText : "取消",
		cancelClass:"",
		cancelFunction : function(){
		}
	}
	function clone(source,target){
		if(!source || typeof source!=='object') return;
		for (var key in source) {
			if(source.hasOwnProperty(key) && !target.hasOwnProperty(key)){
				target[key] = typeof source[key]==='object'? deepCoyp(source[key]): source[key];
			}
		}
		return target;
	}
	function Modal(p){
		this.param = clone(param,p);
		return this;
	}
	function generateID(){
		return "m" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
	}
	function getElem(selector){
		return document.querySelector(selector);
	}
	function getById(id){
		return document.getElementById(id);
	}
	function click(elem,callback){
		elem.addEventListener("click",callback,false);
	}
	function removeHTML(id){
		var elem = getById(id);
		var parent = getById(mAlert);
		if(parent && elem){
			parent.removeChild(elem);
		}
		if(!getElem("."+mModal)){
			document.body.removeChild(parent);
		}
	}
	function removeTip(id){
		document.body.removeChild(getById(id));
	}
	function generateHTML(html,clazz,id){
		var div = document.createElement("div");
		div.setAttribute("class",mModal);

		if(clazz){
			clazz += div.getAttribute('class');
			div.setAttribute("class",clazz);
		}
		div.setAttribute("id",id);
		div.innerHTML = html;
		return div;
	}
	function generateOverlay(oid){
		var div = document.createElement("div");
		div.setAttribute("id",oid);
		div.className = overlayClss;
		return div;
	}
	function handleModalEve(p,id,oid){
		var doc = getById(id);
		var mok = doc.querySelector(".m-footer .m-ok");
		var mcancel = doc.querySelector(".m-footer .m-cancel");

		click(mok,function(){
			var input_ = doc.querySelectorAll(".m-content input[type='text']");
			var flag = false;
			for (var i = 0; i < input_.length; i++) {
				var item = input_[i];
				var req = item.getAttribute('required');
				flag = (req != null && item.value)?true:req==null?true:false;
				console.log("input required");
				if(!flag) break;
			}
			if(!flag && input_.length!=0){
				mOverlay({content:"请输入合法的数据！"}).showTip();
				return;//input 输入框为空的时候，不会把弹出框删除掉
			}
			p.okFunction();
			removeHTML(oid);
			removeHTML(id);
		});

		!mcancel||click(mcancel,function(){
			p.cancelFunction();
			removeHTML(oid);
			removeHTML(id);
		});
	}
	Modal.prototype.show = function(){
		var p = this.param;
		var html = '<div class="m-title">'+p.title+'</div><div class="m-content">'+p.content+
			'</div><div class="m-footer">';

		if(!p.onlyOk){
			html += '<div class="m-cancel">'+p.cancelText+'</div>';
		}
		html +=  '<div class="m-ok">'+p.okText+'</div></div>';
		var mid = generateID();
		var oid = generateID();
		var m = generateHTML(html,p.modalClass||'',mid);
		var o = generateOverlay(oid);
		var div = getById(mAlert);
		if(div){
			div.appendChild(o);
			div.appendChild(m);
		}else{
			div = document.createElement("div");
			div.setAttribute("id",mAlert);
			div.appendChild(o);
			div.appendChild(m);
			document.body.appendChild(div);
		}
		getById(mid).style.zIndex = modalIndex;
		getById(oid).style.zIndex = modalIndex;
		modalIndex++;
		handleModalEve(p,mid,oid);
	};
	Modal.prototype.showTip = function(){
		var p = this.param;
		var html = '<span class="tip-content">'+p.content+'</span>';
		var id = generateID();
		p.modalClass += p.modalClass + "m-tip ";
		var m = generateHTML(html,p.modalClass,id);
		document.body.appendChild(m);
		setTimeout(function(){
			removeTip(id);
		},1600);

	};
	Modal.prototype.showLoading = function(){
		var p = this.param;
		//p.content += "<div><img src='"+p.imgURL+"'/></div>";
		var html = '<span class="load-content">'+p.content+'</span>';
		var id = generateID();
		p.modalClass += p.modalClass + "m-load ";
		var m = generateHTML(html,p.modalClass,id);
		document.body.appendChild(m);
	};
	Modal.prototype.hideLoading = function(){
		var elem = getElem('.m-load');
		!elem||document.body.removeChild(elem);
	};
	Modal.prototype.remove = function(){
		return this;
	};
	mOverlay = function(p){
		p||(p = {});
		var instance = new Modal(p);
		return instance;
	};

	return win.mOverlay = mOverlay;
})(window,document);
