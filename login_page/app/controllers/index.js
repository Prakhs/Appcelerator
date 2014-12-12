function showWin1(e) {
	   if($.user.value=="admin" && $.pass.value=="admin"){
			var win= Alloy.createController('win2').getView();
		    win.open();
		}
		else{
			$.label.value.setValue():"Invalid Credentials";
		}
}

$.index.open();
