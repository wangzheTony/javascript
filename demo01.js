var anim = function(opt){
	defined = {
		id: 1,
		name: 'Simon',
		age: 26
	},
	start = function(opt, defined){
		console.log('js start');
	},
	stop = function(opt, defined){
		console.log('js stop');
	}
}


function btn(){
	anim.start();
}


(function(){
	var foo = 10;
	var bar = 2;
	console.log(foo * bar);
})();
