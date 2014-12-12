function showLogin(e) {
    var db = Titanium.Database.install("/demo3.db", 'demo');
		db.execute("insert into tbl(username,password,email,mobile)values(?,?,?,?)", $.user.value, $.pass.value,$.email.value,$.mobile.value);
		db.close();
		var win = Alloy.createController('login').getView();
		win.open();
}
$.index.addEventListener("click", function(){
	$.user.blur();
	$.pass.blur();
	$.email.blur();
	$.mobile.blur();
});

$.index.open();
