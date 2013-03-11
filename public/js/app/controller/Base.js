define(["jst!template/temp.jst"], function (template) {
    function controllerBase(id) {
        this.id = id;
    }

    controllerBase.prototype = {
        setModel: function (model) {
            this.model = model;
        },

        render: function (bodyDom) {
			// 1. Original
			// bodyDom.prepend('<h1>Controller ' + this.id + ' says "' + this.model.getTitle() + '"</h2>');

			// 2. Using Template
			bodyDom.append(template({v: this.model}));
        }
    };

    return controllerBase;
});
