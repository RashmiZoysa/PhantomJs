
var page = require('webpage').create();

var fillLoginInfo = function(){
    var document= document.getElementById("login_form");
    document.getElementById("email").value = 'Your Email';
    document.getElementById("pass").value = 'Your Password';
    document.getElementById("u_0_d_2/").submit();
}

page.onLoadFinished = function(){
	if(page.title == "Welcome to Facebook - Log In, Sign Up or Learn More"){
		page.evaluate(fillLoginInfo);
		return;
	}
	else
		page.render('./some.png');
		console.log("completed");
		phantom.exit();
}
page.open('https://www.facebook.com/');

