define(['text', 'underscore'],
	function (text, _) {
		var loadResource = function (resourceName, parentRequire, callback, config) {
			if(config.isBuild){
				text.get(parentRequire.toUrl(resourceName), function(rawText){
					var template = _.template(rawText);
					callback(template);
				});
			} else {
				parentRequire([("text!"+resourceName)], function(templateContent){
					var template = _.template(templateContent);
					callback(template);
				});
			}
		};

		return {
			load: loadResource
		};
});
