dark.vars.orange = '#ff4500';
dark.vars.orange2 = '#ff5722';
dark.vars.transition = '200ms ease';
dark.vars.rainbow_gradient = 'repeating-linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)';
dark.vars.rainbow_animation = 'rainbow 8s ease infinite';

dark.initCSSVariables();

document.head.appendChild('<link rel="stylesheet" href="https://darkceptor44.github.io/darklab/assets/css/userscripts-utils.css"/><link rel="stylesheet" href="' + dark.cssLibreBarFontUrl + '"/>');

var dark = {
    cssVarPrefix: 'dark-',
    cssLibreBarFontUrl: 'https://fonts.googleapis.com/css?family=Libre+Barcode+128+Text',
    vars: {},

    initCSSVariables: function () {
        if (this.vars !== undefined && this.vars.length !== 0) {
            for (var varr in this.vars) {
                var varrnew = varr.replace(/_/g, '-');
                this.setCSSVarValue('--' + this.cssVarPrefix + varrnew, this.vars[varr]);
            }
        }
        else
            console.log('vars object is null or empty');
    },
    getCSSVarValue: function (varname) {
        return getComputedStyle(document.documentElement).getPropertyValue(varname);
    },
    setCSSVarValue: function (varname, varvalue) {
        document.documentElement.style.setProperty(varname, varvalue);
    },
    get: function (url, callback, error) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                callback(request, data);
            }
            else {
                console.log('couldnt do it, status: ' + request.status);
            }
        };
        request.onerror = function () { error(); };
        request.send();
    },
    post: function (url, data) {
        var request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(data);
    }
};