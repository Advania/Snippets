/**
 * This file contains a utility modile which 
 * encapsulates useful general purpous functions.
 * Invoked on any page like so: App.Utils.<function-name>
 */
 
var App = App || {};

App.Utils = {
    /**
     * Limits the number of times a function can be called. 
     * This can be useful to safeguard performance critical code like scroll events.
     */
    debounce : function(method, delay) {
        clearTimeout(method._tId);
        method._tId= setTimeout(function(){
            method();
        }, delay);
    }

};
