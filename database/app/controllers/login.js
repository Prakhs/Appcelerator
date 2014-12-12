function showWelcome(e) {
	var db = Titanium.Database.install("/demo3.db", 'demo');
	Ti.API.info($.user.value);
	Ti.API.info($.pass.value);
	db.execute("DELETE from tbl where username==?","Prakhar");
	var query = db.execute("select * from tbl where username==? and password==?", $.user.value, $.pass.value);
	Ti.API.info('-----query result' + query.rowCount);
	if (query.rowCount > 0) {
		var win1 = Alloy.createController('welcome').getView();
		win1.open();
	}
	query.close();
	db.close();
}