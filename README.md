require-js-with-template
========================

An environment for using require.js with jst, unofficially forked from [https://github.com/requirejs/example-multipage-shim](https://github.com/requirejs/example-multipage-shim)  


## How to run
### A. Non-optimized version    
      
1. Run server

        npm install

        node app

2. Try visiting http://localhost:3000/page1.html from browser. It should say:

        Go to Page 2
        This is a page for Model 1
        Backbone Version: 0.9.2
        Underscore Version: 1.3.3
 

3. Check the browser's network tab and see that all javascripts (from js folder and its children) are being loaded.

		- /js/common.js
		- /js/lib/require.js
		- /js/lib/jquery.js
		- /js/lib/text.js
		- /js/lib/backbone.js
		- /js/lib/underscore.js
		- /js/lib/require/jst.js
		- /js/controller/c1.js
		- /js/model/m1.js
		- /js/app/model/Base.js
		- /js/app/controller/Base.js
		- /js/app/main1.js
		- /js/app/lib.js
    
### B. Optimized version    
 

1. Run server

        npm install

        node app

2. Try visiting http://localhost:3000/www-built/page1.html from browser. It should say:

        Go to Page 2
        This is a page for Model 1
        Backbone Version: 0.9.2
        Underscore Version: 1.3.3
 

3. Check the browser's network tab and see that all javascripts have been compressed into 3.

    - /www-built/js/lib/require.js
    - /www-built/js/common.js
    - /www-built/js/app/main1.js
    
******************

## How to build

1. Remove www-built directory (in order to start from scratch)

        rm -rf www-built

2. Run the optimize command

        node tools/r.js -o tools/build.js

3. For some reason, build.js trying to build itself throws an error, but otherwise, rest of the files will be successfully compressed, resulting in the 3 js files mentioned above:

		- /www-built/js/lib/require.js
		- /www-built/js/common.js
		- /www-built/js/app/main1.js
