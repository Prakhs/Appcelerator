



var option =Ti.UI.createOptionDialog({
	title:"Open new Window?",
	options:["Ok","Cancel","Help"],
	cancel:1
})


// Create a Button.
var button = Ti.UI.createButton({
	title : 'Option Dialog',
	height : 50,
	width : 100,
	bottom:20
});

option.addEventListener("click",function(e){
	if(e.index==0){
		var win1 = Alloy.createController('win1').getView();
		win1.open();
	}
	
});

button.addEventListener('click', function() {
	option.show();
});

$.win.add(button);

$.win.open();