var vm = avalon.define({
	$id:"todos",
	txt:'',
	todolist:[],
	add:function(e){
		!!vm.txt.trim() && vm.todolist.push(vm.txt);
		vm.txt='';
		e.preventDefault();
	}
});
