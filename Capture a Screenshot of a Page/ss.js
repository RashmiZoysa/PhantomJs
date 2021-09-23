var page = require('webpage').create();

page.open("https://yifymovies.pro/", function(status) {

  if (status === "success") {

    window.setTimeout(function() {
       page.render("page.png");
       phantom.exit();
    }, 5000);
  }
});