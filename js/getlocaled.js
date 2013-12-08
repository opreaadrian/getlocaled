var GetLocaled = (function(window, document, undefined) {
    
    var _browserLang,
        _direction,
        _root,
        _localize;


    _browserLang = navigator.language || navigator.userLanguage || navigator.browserLanguage;

    _direction = {
        rtl: 'rtl',
        ltr: 'ltr'
    };

    _root = document.documentElement;

    /**
     * @method _changeTextDirection
     * @private
     * @description Updates the text direction attribute - `dir` on the root <html> element,
     * along with the `lang` attribute.
     * @param {String} direction The text direction - rtl, ltr
     * @param {String} language The detected browser language
     *
     */

    _changeTextDirection = function(direction, language) {

        _root.dir = direction;
        _root.lang = language;
        return true;

    };
    

    /**
     * @method _localize
     * @private
     * @description Performs a check for the given locale and if it finds a match it will
     * call the _localize method.
     * @param {String} locale The abbreviated version of the locale - ar, en, de, it, fr ...
     * @param {String} direction The direction of the text - rtl, ltr
     */

    _localize = function(locale, dir) {

        return (_browserLang.toLowerCase().indexOf(locale) !== -1) ? _changeTextDirection(_direction[dir], _browserLang) : false;

    };

    


    return {
        
        init: _localize
    
    };

})(window, document);
