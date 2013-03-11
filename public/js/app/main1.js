define(function (require) {
    var $ = require('jquery'),
        lib = require('./lib'),
        controller = require('./controller/c1'),
        model = require('./model/m1'),
        backbone = require('backbone'),
        underscore = require('underscore'),
		versionTemplate = require("jst!template/version.jst");

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function () {
        controller.render(lib.getBody());

        //Display backbone and underscore versions
		
		// 1. Original
        // $('body')
        //    .append('<div>backbone version: ' + backbone.VERSION + '</div>')
        //    .append('<div>underscore version: ' + underscore.VERSION + '</div>');
		// 

		// 2. Using Template
		$("body").append(versionTemplate({bb: backbone.VERSION, us: underscore.VERSION}));

    });
});
