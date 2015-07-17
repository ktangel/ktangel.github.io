(function(){
	var $todoform = $('#todoForm'),
	$todoInput = $('#todoInput'),
	$todoList = $('#todoList'),
	$todoCount = $('#todoCount');
	function count(){
		var len = $todoList.children().length;
		$todoCount.html(len>0 ? "现有" + len +'项todo list' : '');
	}
	$todoform.submit(function(e){
		var input_value = $todoInput.val();
		$todoList.append('<li>'+input_value+'&nbsp;<a href="#" class="todoDelete">x</a></li>');
		$todoInput.val('');
		count();
		return false;//阻止提交后的刷新
	})
	$todoList.on('click','.todoDelete',function(e){
		$(this).parent().remove();
		count()
	})
})();
