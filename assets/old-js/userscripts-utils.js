const dark = {
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
    getURLParams: function (url) {
        let array = url.match(/[^&?]+/g);
        let dict = {};
        array.forEach(e => {
            let obj = e.split('=');
            dict[obj[0]] = obj[1];
            return dict;
        });
    },
    getXML: function (url, callback, error) {
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
    postXML: function (url, data) {
        var request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(data);
    },
    getFetch: function (url, callback) {
        fetch(url)
            .then(response => response.json())
            .then((response = data => {
                callback(data);
            }));
    },
    postFetch: function (url, data, callback) {
        fetch(url, { method: 'POST', body: data })
            .then(response => response.json())
            .then((response = data => {
                callback(data);
            }));
    },
    getFetchSync: async function (url) {
        function getit() {
            return new Promise(resolve => {
                fetch(url)
                    .then(response => response.json())
                    .then((response = data => {
                        resolve(data);
                    }));
            })
        }
        return await getit();
    },
    postFetchSync: async function (url, data) {
        function getit() {
            return new Promise(resolve => {
                fetch(url, { method: 'POST', body: data })
                    .then(response => response.json())
                    .then((response = data => resolve(data)));
            });
        }
        return await getit();
    }
};

dark.vars.orange = '#ff4500';
dark.vars.orange2 = '#ff5722';
dark.vars.transition = '200ms ease';
dark.vars.transition2 = '100ms ease';
dark.vars.bg = '#121212';
dark.vars.bg2 = '#1a1a1a';
dark.vars.bg3 = '#272727';
dark.vars.bg4 = '#383838';
dark.vars.bg5 = '#474747';
dark.vars.rainbow_gradient = 'repeating-linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red)';
dark.vars.rainbow_animation = 'rainbow 8s ease infinite';

dark.initCSSVariables();

var st = document.createElement('link');
st.rel = 'stylesheet';
st.href = 'https://darkceptor44.github.io/darklab/assets/css/userscripts-utils.css';

var st2 = document.createElement('link');
st2.rel = 'stylesheet';
st2.href = dark.cssLibreBarFontUrl;

document.head.appendChild(st);
document.head.appendChild(st2);