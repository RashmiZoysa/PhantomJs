var page = require('webpage').create();

page.open("https://github.com/RashmiZoysa", function(status) {

  if (status === "success") {

    window.setTimeout(function() {
       page.render("page.png");
       phantom.exit();
    }, 5000);
  }
});