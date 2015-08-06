var FormCheck = function(el) {
		var retu = false,
			type = {
				//电话检查，提供13,15,17,17,8号段，还有2-8开头小灵通或固定电话检查
				phone: function(value) {
					return /^1[3|5|6|7|8][0-9]\d{8}$/.test(value) || /(^([0-2]\d{2,3})-([2-8][0-9][0-9]\d{4,5})$)|^[2-8][2-8][0-9]\d{4,5}$/.test(value) ;
				}
			};
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
				if (el.type === 'password') {//密码长度检查
					if (el.value.length < 6) {
						removetip(el);
						errtip(el, '密码长度不能小于6位');
						return false;
					}
					var els = $('input[type = password]');//确认密码
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
		//执行检查 
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
		return retu;//检查出错，返回false,通过就返回true;
	}