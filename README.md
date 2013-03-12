require-js-with-template
========================

An environment for using require.js with jst, unofficially forked from [https://github.com/requirejs/example-multipage-shim](https://github.com/requirejs/example-multipage-shim) This only modified the "page1" part of the original project.


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

		- /public/js/common.js
		- /public/js/lib/require.js
		- /public/js/lib/jquery.js
		- /public/js/lib/text.js
		- /public/js/lib/backbone.js
		- /public/js/lib/underscore.js
		- /public/js/lib/require/jst.js
		- /public/js/controller/c1.js
		- /public/js/model/m1.js
		- /public/js/app/model/Base.js
		- /public/js/app/controller/Base.js
		- /public/js/app/main1.js
		- /public/js/app/lib.js
    
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

		- /public/www-built/js/lib/require.js
		- /public/www-built/js/common.js
		- /public/www-built/js/app/main1.js
    
******************

## How to build

1. Remove www-built directory (in order to start from scratch)

        rm -rf www-built

2. Change the isBuild setting to true (inside common.js)

3. Run the optimize command

        node tools/r.js -o tools/build.js

4. The files will be successfully compressed, resulting in the following 3 js files:

		- /public/www-built/js/lib/require.js
		- /public/www-built/js/common.js
		- /public/www-built/js/app/main1.js

5. Confirm that the templates are baked into the files (common.js and main1.js).

