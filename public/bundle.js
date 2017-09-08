/******/
(function(modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
                    /******/
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() { return module['default']; } :
            /******/
            function getModuleExports() { return module; };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__index_html__ = __webpack_require__(1);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__index_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__index_html__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__styles_main_css__ = __webpack_require__(2);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__styles_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_main_css__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__js_skel_settings_js__ = __webpack_require__(7);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__js_skel_settings_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_skel_settings_js__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__js_slick_settings_js__ = __webpack_require__(8);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__js_slick_settings_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__js_slick_settings_js__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__js_script_js__ = __webpack_require__(9);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__js_script_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__js_script_js__);






        /***/
    }),
    /* 1 */
    /***/
    (function(module, exports) {

        module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset=\"utf-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n    <title>Rooster Grin Front End Dev Test</title>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.7.1/slick.min.css\" />\n</head>\n\n<body>\n\n    <header class=\"top-bar\">\n        <div class=\"container\">\n            <h1 id=\"logo\">LiftIgniter</h1>\n        </div>\n    </header>\n\n    <section id=\"front-slider\" class=\"\">\n        <section class=\"regular slider\">\n\n            <div id=\"slide-1\" class=\"slide\">\n                <img src=\"/src/images/hero-img.jpg\" />\n                <div class=\"container\">\n                    <h2>I used Slick Carousel</h2>\n                    <a href=\"http://kenwheeler.github.io/slick/\" target=\"_blank\">\n                        <button>Learn More</button>\n                    </a>\n                </div>\n            </div>\n\n            <div id=\"slide-2\" class=\"slide\">\n                <img src=\"/src/images/hero-img2.jpg \"   />\n                <div class=\"container \">\n                    <h2>Carousel Slide 2</h2>\n                    <button>Do More</button>\n                </div>\n            </div>\n\n            <div id=\"slide-3\" class=\"slide\">\n                <img src=\"/src/images/hero-img3.jpg \" />\n                <div class=\"container \">\n                    <h2>Carousel Slide 3</h2>\n                    <button>Help More</button>\n                </div>\n            </div>\n        </section>\n    </section>\n\n    <section id=\"checkers\" class=\"band\">\n        <div class=\"container\">\n            <ul class=\"checkerboard\">\n                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>\n            </ul>\n        </div>\n        <div class=\"tidbit\">\n            <p class=\"container\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus venenatis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. In vel risus magna.</p>\n        </div>\n    </section>\n\n    <section id=\"cta\" class=\"band container fadeIn \">\n        <h2 class=\"title\"><strong>Lorem</strong> Ipsum</h2>\n        <div class=\"row\">\n            <div class=\"6u 12u(xsmall)\">\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a cursus odio. Ut vel auctor mauris. Suspendisse ornare vel lectus faucibus consectetur. Quisque accumsan elementum mi, in blandit mauris sodales quis. Sed consequat nisl non\n                    mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a cursus odio. Ut vel auctor mauris. Suspendisse ornare vel lectus faucibus consectetur. Quisque accumsan elementum mi, in blandit mauris sodales quis. Sed consequat\n                    nisl non mauris.\n                </p>\n            </div>\n            <div class=\"6u 12u(xsmall) center \">\n                <button>Button</button>\n            </div>\n        </div>\n    </section>\n\n    <section id=\"percents\" class=\"band fadeIn\">\n        <div class=\"container\">\n            <div class=\"row center\">\n                <figure class=\"4u 12u(xsmall)\">\n                    <span class=\"percent\"><span id=\"stat-one\">0</span>%</span>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a cursus odio.</p>\n                </figure>\n                <figure class=\"4u 12u(xsmall)\">\n                    <span class=\"percent\"><span id=\"stat-two\">0</span>%</span>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a cursus odio.</p>\n                </figure>\n                <figure class=\"4u 12u(xsmall)\">\n                    <span class=\"percent\"><span id=\"stat-three\">0</span>%</span>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a cursus odio.</p>\n                </figure>\n            </div>\n        </div>\n    </section>\n\n\n    <section id=\"showcase\" class=\"band fadeIn\">\n        <h2 class=\"title\"><strong>Lorem</strong> Ipsum</h2>\n        <div class=\"row\">\n            <img class=\"6u 12u(small) \" src=\"/src/images/img1.jpg \" />\n            <div class=\"4u 12u(small) showcase-text \">\n                <h2>Lorem ipsum dolor sit amet.</h2>\n                <h3>Nulla a cursus odio.</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a cursus odio. Ut vel auctor mauris. Suspendisse ornare vel lectus faucibus consectetur. Quisque accumsan elementum mi, in blandit mauris sodales quis.</p>\n            </div>\n        </div>\n        <br/>\n        <br/>\n        <br/>\n        <div class=\"row reverse-col \">\n            <div class=\"4u -2u 12u(small) showcase-text \">\n                <h2>Lorem ipsum dolor sit amet.</h2>\n                <h3>Nulla a cursus odio.</h3>\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a cursus odio. Ut vel auctor mauris. Suspendisse ornare vel lectus faucibus consectetur. Quisque accumsan elementum mi, in blandit mauris sodales quis.</p>\n            </div>\n            <img class=\"6u 12u(small) \" src=\"/src/images/img2.jpg \" />\n        </div>\n    </section>\n\n    <section id=\"thanks\" class=\"slant \">\n        <div class=\"tidbit2 \">\n            <p class=\"container \">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus venenatis est. Interdum et malesuada fames ac ante ipsum primis in faucibus. In vel risus magna.</p>\n        </div>\n    </section>\n\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js \"></script>\n    <script type=\"text/javascript \" src=\"src/js/vendor/skel.min.js \"></script>\n    <script type=\"text/javascript \" src=\"src/js/vendor/skel-layout.min.js \"></script>\n    <script type=\"text/javascript \" src=\"src/js/vendor/slick.min.js \"></script>\n    <script type=\"text/javascript \" src=\"bundle.js \"></script>\n</body>\n\n</html>"

        /***/
    }),
    /* 2 */
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(3);
        if (typeof content === 'string') content = [
            [module.i, content, '']
        ];
        // Prepare cssTransformation
        var transform;

        var options = {}
        options.transform = transform
            // add the styles to the DOM
        var update = __webpack_require__(5)(content, options);
        if (content.locals) module.exports = content.locals;
        // Hot Module Replacement
        if (false) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./main.css", function() {
                    var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./main.css");
                    if (typeof newContent === 'string') newContent = [
                        [module.id, newContent, '']
                    ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() { update(); });
        }

        /***/
    }),
    /* 3 */
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(4)(undefined);
        // imports
        exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);", ""]);

        // module
        exports.push([module.i, "@keyframes ripple {\n  0% {\n    opacity: 1;\n    transform: scale(0, 0); }\n  50% {\n    transform: scale(30, 30); }\n  100% {\n    opacity: 0;\n    transform: scale(90, 90); } }\n\nbutton:before {\n  content: '';\n  background: rgba(255, 255, 255, 0.35);\n  border-radius: 100%;\n  opacity: 0;\n  height: 10px;\n  width: 10px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%); }\n\nbutton:focus:not(:active):not(.slick-arrow)::before {\n  animation: ripple 1s ease-out; }\n\nbody {\n  background: #fafafa;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  line-height: 20px; }\n\nbody .band {\n  padding: 60px 0px; }\n\nh1, h2, h3, h4, h5, h6 {\n  overflow: auto;\n  line-height: initial; }\n\nfigure {\n  margin: 0px; }\n\nh2 {\n  font-size: 28px;\n  color: #283647;\n  font-weight: normal; }\n\nh2.title {\n  text-transform: uppercase;\n  margin: 60px auto; }\n\nh2.title strong {\n  color: #F36819; }\n\nh3 {\n  font-size: 20px;\n  color: #F7931D;\n  letter-spacing: 2px; }\n\nbutton {\n  background: linear-gradient(90deg, #F36819, #F7931D 50%, #FBC98E);\n  border: 0px;\n  border-radius: 5px;\n  box-shadow: 1px 1px 2px #666;\n  color: #fff;\n  cursor: pointer;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  height: 40px;\n  letter-spacing: 2px;\n  line-height: 40px;\n  min-width: 215px;\n  overflow: hidden;\n  position: relative;\n  margin: 30px 0;\n  z-index: 998; }\n\n.center, h2.title {\n  text-align: center; }\n\n.fadeIn {\n  opacity: 0; }\n\n.slant:before {\n  display: block;\n  content: \" \";\n  width: 100%;\n  height: 100px;\n  background-color: #fff;\n  background: linear-gradient(4deg, #1676DD 50%, 50%, #fafafa); }\n\n@media (max-width: 736px) {\n  .reverse-col {\n    display: flex;\n    flex-direction: column-reverse; } }\n\n.top-bar {\n  height: 60px;\n  background: #1676DD;\n  overflow: hidden;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  position: fixed;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n  right: 0; }\n\n#logo {\n  text-align: center;\n  background: url(\"/src/images/igniter-logo-white.svg\") no-repeat 50% 50%;\n  text-indent: -999999px; }\n\n#checkers {\n  opacity: 0;\n  padding-bottom: 0px;\n  margin-top: 60px; }\n\nul.checkerboard {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0px;\n  padding: 0px;\n  list-style: none; }\n\nul.checkerboard li {\n  flex: 1 1 50%;\n  margin-bottom: 30px;\n  background: url(\"/src/images/page-icon.svg\");\n  background-repeat: no-repeat;\n  background-position: 0% 0%;\n  min-height: 60px;\n  padding: 0px 50px;\n  box-sizing: border-box; }\n\n@media (max-width: 480px) {\n  ul.checkerboard li {\n    flex: 1 1 100%;\n    padding: 0px 10px 0px 50px; } }\n\ndiv.tidbit {\n  padding: 100px 0px 50px;\n  background: url(\"/src/images/slanted-gradient-background.svg\");\n  background-size: cover;\n  font-size: 2em;\n  line-height: 1.2em;\n  color: #fff;\n  text-align: center; }\n\n#percents {\n  background: #fff; }\n\n#percents figure {\n  margin: 30px auto; }\n\n#percents p {\n  color: #F36819;\n  margin-bottom: 30px; }\n\n.percent {\n  font-weight: bold;\n  font-size: 55px;\n  letter-spacing: 2px;\n  line-height: initial; }\n\n.showcase-text {\n  box-sizing: border-box;\n  padding: 0px 20px 0px 40px; }\n\n.showcase-text h2 {\n  color: #F36819;\n  margin-bottom: 0px; }\n\n.showcase-text h3 {\n  margin: 0; }\n\ndiv.tidbit2 {\n  padding: 50px 100px;\n  background: linear-gradient(180deg, #1676DD, #0C4078);\n  font-size: 2em;\n  line-height: 1.2em;\n  color: #fff;\n  text-align: center; }\n\n#front-slider {\n  position: relative;\n  margin-top: 60px; }\n\n#front-slider .slide {\n  height: 509px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n#front-slider .slide:after {\n  display: flex;\n  content: \" \";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: linear-gradient(90deg, #F36819, #000);\n  opacity: 0.3; }\n\n#front-slider .slide .container {\n  display: block;\n  align-items: center;\n  margin-top: 10%;\n  position: absolute; }\n\n@media (max-width: 680px) {\n  #front-slider .slide .container {\n    flex-direction: column;\n    justify-content: center;\n    text-align: center; } }\n\n#front-slider .slide h2 {\n  position: relative;\n  font-weight: bold;\n  font-size: 48px;\n  color: #fff;\n  z-index: 998;\n  margin: 0px; }\n\nbutton.slick-arrow {\n  position: absolute;\n  background: transparent;\n  box-shadow: none;\n  height: 100%;\n  width: 50%;\n  margin: 0; }\n\nbutton.slick-arrow:hover {\n  background: rgba(255, 255, 255, 0.15); }\n\nbutton.slick-arrow.slick-prev {\n  left: 0;\n  text-align: left; }\n\nbutton.slick-arrow.slick-next {\n  right: 0;\n  text-align: right; }\n\nul.pagination {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  bottom: -90px;\n  width: 100%; }\n\nul.pagination li {\n  margin: 10px; }\n\nul.pagination li button {\n  background: transparent;\n  min-width: 0px;\n  width: 10px;\n  height: 10px; }\n\nul.pagination li.slick-active button {\n  background: #283647; }\n", ""]);

        // exports


        /***/
    }),
    /* 4 */
    /***/
    (function(module, exports) {

        /*
        	MIT License http://www.opensource.org/licenses/mit-license.php
        	Author Tobias Koppers @sokra
        */
        // css base code, injected by the css-loader
        module.exports = function(useSourceMap) {
            var list = [];

            // return the list of modules as css string
            list.toString = function toString() {
                return this.map(function(item) {
                    var content = cssWithMappingToString(item, useSourceMap);
                    if (item[2]) {
                        return "@media " + item[2] + "{" + content + "}";
                    } else {
                        return content;
                    }
                }).join("");
            };

            // import a list of modules into the list
            list.i = function(modules, mediaQuery) {
                if (typeof modules === "string")
                    modules = [
                        [null, modules, ""]
                    ];
                var alreadyImportedModules = {};
                for (var i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    if (typeof id === "number")
                        alreadyImportedModules[id] = true;
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                        if (mediaQuery && !item[2]) {
                            item[2] = mediaQuery;
                        } else if (mediaQuery) {
                            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                        }
                        list.push(item);
                    }
                }
            };
            return list;
        };

        function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || '';
            var cssMapping = item[3];
            if (!cssMapping) {
                return content;
            }

            if (useSourceMap && typeof btoa === 'function') {
                var sourceMapping = toComment(cssMapping);
                var sourceURLs = cssMapping.sources.map(function(source) {
                    return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
                });

                return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
            }

            return [content].join('\n');
        }

        // Adapted from convert-source-map (MIT)
        function toComment(sourceMap) {
            // eslint-disable-next-line no-undef
            var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
            var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

            return '/*# ' + data + ' */';
        }


        /***/
    }),
    /* 5 */
    /***/
    (function(module, exports, __webpack_require__) {

        /*
        	MIT License http://www.opensource.org/licenses/mit-license.php
        	Author Tobias Koppers @sokra
        */

        var stylesInDom = {};

        var memoize = function(fn) {
            var memo;

            return function() {
                if (typeof memo === "undefined") memo = fn.apply(this, arguments);
                return memo;
            };
        };

        var isOldIE = memoize(function() {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            return window && document && document.all && !window.atob;
        });

        var getElement = (function(fn) {
            var memo = {};

            return function(selector) {
                if (typeof memo[selector] === "undefined") {
                    memo[selector] = fn.call(this, selector);
                }

                return memo[selector]
            };
        })(function(target) {
            return document.querySelector(target)
        });

        var singleton = null;
        var singletonCounter = 0;
        var stylesInsertedAtTop = [];

        var fixUrls = __webpack_require__(6);

        module.exports = function(list, options) {
            if (typeof DEBUG !== "undefined" && DEBUG) {
                if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
            }

            options = options || {};

            options.attrs = typeof options.attrs === "object" ? options.attrs : {};

            // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
            // tags it will allow on a page
            if (!options.singleton) options.singleton = isOldIE();

            // By default, add <style> tags to the <head> element
            if (!options.insertInto) options.insertInto = "head";

            // By default, add <style> tags to the bottom of the target
            if (!options.insertAt) options.insertAt = "bottom";

            var styles = listToStyles(list, options);

            addStylesToDom(styles, options);

            return function update(newList) {
                var mayRemove = [];

                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];

                    domStyle.refs--;
                    mayRemove.push(domStyle);
                }

                if (newList) {
                    var newStyles = listToStyles(newList, options);
                    addStylesToDom(newStyles, options);
                }

                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];

                    if (domStyle.refs === 0) {
                        for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

                        delete stylesInDom[domStyle.id];
                    }
                }
            };
        };

        function addStylesToDom(styles, options) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];

                if (domStyle) {
                    domStyle.refs++;

                    for (var j = 0; j < domStyle.parts.length; j++) {
                        domStyle.parts[j](item.parts[j]);
                    }

                    for (; j < item.parts.length; j++) {
                        domStyle.parts.push(addStyle(item.parts[j], options));
                    }
                } else {
                    var parts = [];

                    for (var j = 0; j < item.parts.length; j++) {
                        parts.push(addStyle(item.parts[j], options));
                    }

                    stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
                }
            }
        }

        function listToStyles(list, options) {
            var styles = [];
            var newStyles = {};

            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                var id = options.base ? item[0] + options.base : item[0];
                var css = item[1];
                var media = item[2];
                var sourceMap = item[3];
                var part = { css: css, media: media, sourceMap: sourceMap };

                if (!newStyles[id]) styles.push(newStyles[id] = { id: id, parts: [part] });
                else newStyles[id].parts.push(part);
            }

            return styles;
        }

        function insertStyleElement(options, style) {
            var target = getElement(options.insertInto)

            if (!target) {
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            }

            var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

            if (options.insertAt === "top") {
                if (!lastStyleElementInsertedAtTop) {
                    target.insertBefore(style, target.firstChild);
                } else if (lastStyleElementInsertedAtTop.nextSibling) {
                    target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
                } else {
                    target.appendChild(style);
                }
                stylesInsertedAtTop.push(style);
            } else if (options.insertAt === "bottom") {
                target.appendChild(style);
            } else {
                throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            }
        }

        function removeStyleElement(style) {
            if (style.parentNode === null) return false;
            style.parentNode.removeChild(style);

            var idx = stylesInsertedAtTop.indexOf(style);
            if (idx >= 0) {
                stylesInsertedAtTop.splice(idx, 1);
            }
        }

        function createStyleElement(options) {
            var style = document.createElement("style");

            options.attrs.type = "text/css";

            addAttrs(style, options.attrs);
            insertStyleElement(options, style);

            return style;
        }

        function createLinkElement(options) {
            var link = document.createElement("link");

            options.attrs.type = "text/css";
            options.attrs.rel = "stylesheet";

            addAttrs(link, options.attrs);
            insertStyleElement(options, link);

            return link;
        }

        function addAttrs(el, attrs) {
            Object.keys(attrs).forEach(function(key) {
                el.setAttribute(key, attrs[key]);
            });
        }

        function addStyle(obj, options) {
            var style, update, remove, result;

            // If a transform function was defined, run it on the css
            if (options.transform && obj.css) {
                result = options.transform(obj.css);

                if (result) {
                    // If transform returns a value, use that instead of the original css.
                    // This allows running runtime transformations on the css.
                    obj.css = result;
                } else {
                    // If the transform function returns a falsy value, don't add this css.
                    // This allows conditional loading of css
                    return function() {
                        // noop
                    };
                }
            }

            if (options.singleton) {
                var styleIndex = singletonCounter++;

                style = singleton || (singleton = createStyleElement(options));

                update = applyToSingletonTag.bind(null, style, styleIndex, false);
                remove = applyToSingletonTag.bind(null, style, styleIndex, true);

            } else if (
                obj.sourceMap &&
                typeof URL === "function" &&
                typeof URL.createObjectURL === "function" &&
                typeof URL.revokeObjectURL === "function" &&
                typeof Blob === "function" &&
                typeof btoa === "function"
            ) {
                style = createLinkElement(options);
                update = updateLink.bind(null, style, options);
                remove = function() {
                    removeStyleElement(style);

                    if (style.href) URL.revokeObjectURL(style.href);
                };
            } else {
                style = createStyleElement(options);
                update = applyToTag.bind(null, style);
                remove = function() {
                    removeStyleElement(style);
                };
            }

            update(obj);

            return function updateStyle(newObj) {
                if (newObj) {
                    if (
                        newObj.css === obj.css &&
                        newObj.media === obj.media &&
                        newObj.sourceMap === obj.sourceMap
                    ) {
                        return;
                    }

                    update(obj = newObj);
                } else {
                    remove();
                }
            };
        }

        var replaceText = (function() {
            var textStore = [];

            return function(index, replacement) {
                textStore[index] = replacement;

                return textStore.filter(Boolean).join('\n');
            };
        })();

        function applyToSingletonTag(style, index, remove, obj) {
            var css = remove ? "" : obj.css;

            if (style.styleSheet) {
                style.styleSheet.cssText = replaceText(index, css);
            } else {
                var cssNode = document.createTextNode(css);
                var childNodes = style.childNodes;

                if (childNodes[index]) style.removeChild(childNodes[index]);

                if (childNodes.length) {
                    style.insertBefore(cssNode, childNodes[index]);
                } else {
                    style.appendChild(cssNode);
                }
            }
        }

        function applyToTag(style, obj) {
            var css = obj.css;
            var media = obj.media;

            if (media) {
                style.setAttribute("media", media)
            }

            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                while (style.firstChild) {
                    style.removeChild(style.firstChild);
                }

                style.appendChild(document.createTextNode(css));
            }
        }

        function updateLink(link, options, obj) {
            var css = obj.css;
            var sourceMap = obj.sourceMap;

            /*
            	If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
            	and there is no publicPath defined then lets turn convertToAbsoluteUrls
            	on by default.  Otherwise default to the convertToAbsoluteUrls option
            	directly
            */
            var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

            if (options.convertToAbsoluteUrls || autoFixUrls) {
                css = fixUrls(css);
            }

            if (sourceMap) {
                // http://stackoverflow.com/a/26603875
                css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
            }

            var blob = new Blob([css], { type: "text/css" });

            var oldSrc = link.href;

            link.href = URL.createObjectURL(blob);

            if (oldSrc) URL.revokeObjectURL(oldSrc);
        }


        /***/
    }),
    /* 6 */
    /***/
    (function(module, exports) {


        /**
         * When source maps are enabled, `style-loader` uses a link element with a data-uri to
         * embed the css on the page. This breaks all relative urls because now they are relative to a
         * bundle instead of the current page.
         *
         * One solution is to only use full urls, but that may be impossible.
         *
         * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
         *
         * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
         *
         */

        module.exports = function(css) {
            // get current location
            var location = typeof window !== "undefined" && window.location;

            if (!location) {
                throw new Error("fixUrls requires window.location");
            }

            // blank or null?
            if (!css || typeof css !== "string") {
                return css;
            }

            var baseUrl = location.protocol + "//" + location.host;
            var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

            // convert each url(...)
            /*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
            var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
                // strip quotes (if they exist)
                var unquotedOrigUrl = origUrl
                    .trim()
                    .replace(/^"(.*)"$/, function(o, $1) { return $1; })
                    .replace(/^'(.*)'$/, function(o, $1) { return $1; });

                // already a full url? no change
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
                    return fullMatch;
                }

                // convert the url to a full url
                var newUrl;

                if (unquotedOrigUrl.indexOf("//") === 0) {
                    //TODO: should we add protocol?
                    newUrl = unquotedOrigUrl;
                } else if (unquotedOrigUrl.indexOf("/") === 0) {
                    // path should be relative to the base url
                    newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
                } else {
                    // path should be relative to current directory
                    newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
                }

                // send back the fixed url(...)
                return "url(" + JSON.stringify(newUrl) + ")";
            });

            // send back the fixed css
            return fixedCss;
        };


        /***/
    }),
    /* 7 */
    /***/
    (function(module, exports) {

        // Skel Settings
        skel.breakpoints({
            xlarge: "(max-width: 1680px)",
            large: "(max-width: 1280px)",
            medium: "(max-width: 980px)",
            small: "(max-width: 736px)",
            xsmall: "(max-width: 480px)"
        });

        skel.layout({
            reset: "normalize",
            containers: true,
            grid: true,
            breakpoints: {
                medium: {
                    containers: "90%"
                },
                small: {
                    containers: "95%",
                    grid: { gutters: 20 }
                },
                xsmall: {
                    grid: { gutters: 10 }
                }
            }
        });

        /***/
    }),
    /* 8 */
    /***/
    (function(module, exports) {

        // Init Slick Carousel
        $('.slider').slick({
            dots: true,
            dotsClass: 'pagination',
            speed: 500,
            fade: true,
            prevArrow: '',
            nextArrow: '',
            mobileFirst: true,
            autoplay: true
        });

        /***/
    }),
    /* 9 */
    /***/
    (function(module, exports) {

        // Monkey Patch jQuery prototype
        $.fn.isInViewport = function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            return (elementBottom > viewportTop && elementTop < viewportBottom);
        };


        // Animate Percents
        const animatePercent = function(id, num) {
            let i = 0;
            let interval = (num > 200) ? 10 : 20;

            let counter = setInterval(() => {
                document.getElementById(`${id}`).innerHTML = i;

                if (i > num) {
                    document.getElementById(`${id}`).innerHTML = num;
                    clearInterval(counter);
                }

                i += 3;
            }, interval);

        };

        let flag = true;

        // Doc ready
        document.addEventListener("DOMContentLoaded", () => {
            // Fade Checkers on load
            $('#checkers').animate({ 'opacity': '1' }, 1500);

            // On scroll
            $(window).scroll(function() {
                $('#logo').animate({ 'background-position-x': '0%' }, 500);
                // Select .fadeIn, calc 1/3 of view, fade it in.
                $('.fadeIn').each(function(i) {
                    const bottom = ($(this).position().top + $(this).outerHeight() / 3);
                    const windowBottom = $(window).scrollTop() + $(window).height();
                    // If 1/3 of object is in the window, fade it in
                    if (windowBottom > (bottom)) {
                        $(this).animate({ 'opacity': '1' }, 1000);
                    }

                    if ($('#percents').isInViewport()) {
                        if (flag) {
                            animatePercent('stat-one', 240);
                            animatePercent('stat-two', 105);
                            animatePercent('stat-three', 159);
                            flag = false;
                        }
                    }

                });
            });

        });

        /***/
    })
    /******/
]);