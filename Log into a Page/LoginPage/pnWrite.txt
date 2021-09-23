
var page = require('webpage').create();

var fillLoginInfo = function(){
    var document= document.getElementById("login_form");
    document.getElementById("username").value = 'Your Username';
    document.getElementById("password").value = 'Your Password';
    document.getElementById("form").submit();
}

page.onLoadFinished = function(){
	if(page.title == "Asbestos Data Management | Log in"){
		page.evaluate(fillLoginInfo);
		return;
	}
	else
		page.render('./screens/some.png');
		console.log("completed");
		phantom.exit();
}
page.open('http://3.249.185.14:8080/login');

