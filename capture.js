var system = require('system');

if (system.args.length < 3) {
    console.error('Usage: phantomjs ' + system.args[0] + ' <slide url> <page number>');
    phantom.exit();
}

var url = system.args[1];
var pageNumber = system.args[2];

var page = require('webpage').create();
page.viewportSize = {
    width: 1280,
    height: 960
}
page.open(url, function() {
    window.setTimeout(function() {
        for (var i = 0; i < pageNumber; ++i) {
            page.render('capture_' + (i + 1) + '.png')
            page.sendEvent('keypress', page.event.key.Down, null, null, 0);
        }
        phantom.exit();
    }, 200);
});
