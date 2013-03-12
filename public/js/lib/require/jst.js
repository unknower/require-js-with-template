//define(['text', 'underscore'],
//	function (text, _) {
define(['module', 'text', 'underscore'], function(module, text, _) {
	var settings = module.config() || {};
		var loadResource = function(resourceName, parentRequire, callback, config) {
			if (config.isBuild) {
				text.load.call(text, resourceName, parentRequire, callback, config);
				return;
			}
			parentRequire([ 'text!' + resourceName ], function(content) {
				callback(content ? _.template(content, undefined, settings) : function() { return ''; });
			});
		};
		var write = function(pluginName, moduleName, write, config) {
			text.write.call(text, pluginName, moduleName, {
				asModule: function(name, contents) {
					contents = contents.substr(contents.indexOf('return') + 7);
					contents = contents.substr(0, contents.lastIndexOf(';') - 3);
					try {
						var template = _.template(eval(contents), undefined, settings);
						write.asModule(pluginName + "!" + moduleName, "define(function() { return " + template.source + " });");
					}
					catch (err) {
						console.error('~~~~~');
						console.error('FAILED TO COMPILE ' + pluginName + "!" + moduleName);
						console.error('Error:\t\t' + String(err));
						console.error('\n');
						if (err && err.source) {
							console.error('Error Source:\n');
							console.error(err.source);
							console.error('\n\n');
						}
						console.error('Original Contents:\n');
						console.error(contents);
						console.error('\n\n');
						throw err;
					}
				}
			}, config);
		}

		return {
			load: loadResource,
			write: write
		};

});
