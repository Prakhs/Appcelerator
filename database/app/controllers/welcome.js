var tbl_data = [];
var db = Titanium.Database.install("/demo3.db", 'demo');

var query = db.execute("select * from tbl");

Ti.API.info('------query.rowCount():' + query.rowCount);

if (query.rowCount > 0) {

	while (query.isValidRow()) {

		//Ti.API.info('-----query.fieldByName:' + query.fieldByName('name'));
		//Ti.API.info('-----query.fieldByName:' + query.fieldByName('password'));
		var name = query.fieldByName('username');
		var password = query.fieldByName('password');
		Ti.API.info('--------name:' + name);
		Ti.API.info('--------name:' + password);

		var row = Titanium.UI.createTableViewRow({
			height : 70,
			width : '100%',
			backgroundColor : 'teal'
		});
		var lbl_name = Titanium.UI.createLabel({
			left : 10,
			top : 5,
			height : 25,
			font : {
				fontSize : 15,
				fontWeight : 'bold'
			},
			right : 5,
			color : 'black',
			text : "Username: "+name
		});
		var lbl_pass = Titanium.UI.createLabel({
			left : 10,
			top : 40,height : 20,
			font : {
				fontSize : 15,
			},
			right : 5,
			color : 'gray',
			text : "Password: "+password
		});
		row.add(lbl_name);
		row.add(lbl_pass);
		tbl_data.push(row);
		query.next();
	}
	query.close();
} else {
	Ti.API.info('----- reslut is zero');
}
db.close();
$.table.setData(tbl_data);

function closeMe() {
	$.container.close();
}



function showWelcome(){
	$.welcome.close();
}
