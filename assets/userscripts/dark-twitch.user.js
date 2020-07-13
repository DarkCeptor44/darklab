// ==UserScript==
// @name         Twitch Utilities
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wMS0xNVQxOToyMDozNi0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDEtMTVUMTk6Mjk6NDAtMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDEtMTVUMTk6Mjk6NDAtMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJlMDZkOWUtNjc1ZC0yMzQ1LWI0NTAtMzRhYTQ5NmMxMzliIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDM0ZTJjMzItNzhjZC04YjQxLWIyODctNDg1N2E1N2NhNTIwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MWM1NGYwNDQtODUyOS0xYTRmLWFkMDQtYWZmOTE0Zjg4NDJhIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYzU0ZjA0NC04NTI5LTFhNGYtYWQwNC1hZmY5MTRmODg0MmEiIHN0RXZ0OndoZW49IjIwMjAtMDEtMTVUMTk6MjA6MzYtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyZTA2ZDllLTY3NWQtMjM0NS1iNDUwLTM0YWE0OTZjMTM5YiIgc3RFdnQ6d2hlbj0iMjAyMC0wMS0xNVQxOToyOTo0MC0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz47YvsVAAABh0lEQVRYhe2Xv07CUBSHv0uQQScdQCnGlzCaQIxYkLcwcXUwYTdRExJ3EwYnExMGZiaDQHgENT4AGlpXdpQ6QPRC/1Da2i78ppuem36/e849t7fCMAwAKAlM2ild8d68NgcCUNMQADHbCf8JlxR3DW8awRBnMm3OQEgrtzYQMnzaQATwaQNe4SVh3UF2z20NRKSlgaWByA1YH8WLyO6Idnl0R56BcA3U7yaDvwMqPAONGtyfjceKWgnXQKMG1ZPxOJ2/QWtfhmdAhivFW/TuhRz23wVu4CIGm7k6Wqs8O8W9gdkvm9xm8iqtpBQe6D+dWoX8l2AefPv4mdGwbBf2VwIneHwNkrtvfA+P0LsDu1d4z8C8lW9leyAOnOAAQvovCOjaC6T2dVbWc/Qfe7ZzJnso+C5Q1A9E4tARLkk2MO8CZ85Qcu+TxEZ2CqZ13HB/5X0PZIovJrgHeStBRn1l9JVHbw38wL0ZUAo1+m2H7b+Y3JcgvgpptYoWHHwxA6lsBb1zHiQc4AdxoHecmzg0GAAAAABJRU5ErkJggg==
// @namespace    https://darkceptor44.github.io/darklab
// @version      1.2
// @description  Adds some useful stuff to Twitch like T for Theather mode instead of Alt+T and E for opening/closing chat, also claims bonus chests automatically
// @author       DarkCeptor44
// @include      https://*.twitch.tv/*
// @grant        GM_addStyle
// @run-at       document-start
// @history      1.1 Seekbar is now RGB!!
// @history      1.2 Script works on every subdomain of Twitch and it automatically claims bonus chests for channel points
// @downloadURL  https://darkceptor44.github.io/darklab/assets/userscripts/dark-twitch.user.js
// ==/UserScript==

(function () {
    'use strict';
    var pip = false;
    var accent = '#ff4500';
    var logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMC0wMS0xNVQxOToyMDozNi0wMzowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjAtMDEtMTVUMTk6Mjk6NDAtMDM6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjAtMDEtMTVUMTk6Mjk6NDAtMDM6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJlMDZkOWUtNjc1ZC0yMzQ1LWI0NTAtMzRhYTQ5NmMxMzliIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZDM0ZTJjMzItNzhjZC04YjQxLWIyODctNDg1N2E1N2NhNTIwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MWM1NGYwNDQtODUyOS0xYTRmLWFkMDQtYWZmOTE0Zjg4NDJhIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxYzU0ZjA0NC04NTI5LTFhNGYtYWQwNC1hZmY5MTRmODg0MmEiIHN0RXZ0OndoZW49IjIwMjAtMDEtMTVUMTk6MjA6MzYtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyZTA2ZDllLTY3NWQtMjM0NS1iNDUwLTM0YWE0OTZjMTM5YiIgc3RFdnQ6d2hlbj0iMjAyMC0wMS0xNVQxOToyOTo0MC0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz47YvsVAAABh0lEQVRYhe2Xv07CUBSHv0uQQScdQCnGlzCaQIxYkLcwcXUwYTdRExJ3EwYnExMGZiaDQHgENT4AGlpXdpQ6QPRC/1Da2i78ppuem36/e849t7fCMAwAKAlM2ild8d68NgcCUNMQADHbCf8JlxR3DW8awRBnMm3OQEgrtzYQMnzaQATwaQNe4SVh3UF2z20NRKSlgaWByA1YH8WLyO6Idnl0R56BcA3U7yaDvwMqPAONGtyfjceKWgnXQKMG1ZPxOJ2/QWtfhmdAhivFW/TuhRz23wVu4CIGm7k6Wqs8O8W9gdkvm9xm8iqtpBQe6D+dWoX8l2AefPv4mdGwbBf2VwIneHwNkrtvfA+P0LsDu1d4z8C8lW9leyAOnOAAQvovCOjaC6T2dVbWc/Qfe7ZzJnso+C5Q1A9E4tARLkk2MO8CZ85Qcu+TxEZ2CqZ13HB/5X0PZIovJrgHeStBRn1l9JVHbw38wL0ZUAo1+m2H7b+Y3JcgvgpptYoWHHwxA6lsBb1zHiQc4AdxoHecmzg0GAAAAABJRU5ErkJggg==';

    var style = '@keyframes rainbow{0%{background-position:0% 50%}50%{background-position:100% 25%}100%{background-position:0% 50%}}@-webkit-keyframes rainbow{0%{background-position:0% 50%}50%{background-position:100% 25%}100%{background-position:0% 50%}}@-moz-keyframes rainbow{0%{background-position:0% 50%}50%{background-position:100% 25%}100%{background-position:0% 50%}}@-o-keyframes rainbow{0%{background-position:0% 50%}50%{background-position:100% 25%}100%{background-position:0% 50%}}@-ms-keyframes rainbow{0%{background-position:0% 50%}50%{background-position:100% 25%}100%{background-position:0% 50%}}' +
        `.tw-textarea:focus{border-color:${accent} !important;}` +
        `.tw-core-button--text,.tw-link,.tw-c-text-link,a:hover,.channel-header-verified-badge, .tw-root--theme-dark .channel-header-verified-badge, .tw-root--theme-light .channel-header-verified-badge{color:${accent} !important;}` +
        `.tw-core-button--primary,.tw-toggle__input:checked+.tw-toggle__button{background-color:${accent} !important;}` +
        `.tw-animated-glitch-logo__body{fill:${accent} !important;}` +
        `.chat-line__message-body--highlighted{background:${accent} !important;border-color:${accent} !important;border-radius:3px;}` +
        `*::selection{background-color:${accent} !important;}` +
        `.video-player{user-select:none;}`+
        `.seekbar-segment.tw-absolute{background-image:repeating-linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red) !important;background-size:800% 800% !important;animation:rainbow 8s ease infinite !important;}`;

    GM_addStyle(style);

    //document.querySelectorAll('link[rel=icon]').forEach(d=>{d.href=logo;});
    var t = setInterval(function () {
        var d = document.querySelector('link[rel=icon]');
        if (d.href !== logo) {
            d.href = logo;
        }
        else {
            clearInterval(t);
        }
    }, 100);

    console.log('dark: looking for bonus chest...');
    var t2=setInterval(function(){
        let claimButton=document.querySelector('.claimable-bonus__icon');
        if(claimButton!=null&&claimButton!=undefined){
            document.querySelector('.claimable-bonus__icon').click();
            console.log('dark: bonus chest claimed!');
        }
    },5000);

    if (document.querySelector('video[src]') !== null) {
        document.querySelector('video[src]').addEventListener('enterpictureinpicture', () => { pip = true; }, false);
        document.querySelector('video[src]').addEventListener('leavepictureinpicture', () => { pip = false; }, false);
    }

    document.addEventListener('keypress', (e) => {
        const player = document.querySelector('video[src]');
        if (matches(e.target, 'input,select,button,textarea,div[role="textbox"]')) return;
        switch (e.key) {
            case 'e':
                e.preventDefault();
                document.querySelector('button[data-a-target="right-column__toggle-collapse-btn"]').click();
                break;
            case 't':
                e.preventDefault();
                document.querySelector('button[data-a-target="player-theatre-mode-button"]').click();
                break;
            case 'i':
                e.preventDefault();
                if (player !== null) {
                    if (pip) {
                        document.exitPictureInPicture();
                        console.log('picture-in-picture deactivated');
                    }
                    else {
                        player.requestPictureInPicture();
                        console.log('picture-in-picture activated');
                    }
                }
                break;
            case 'Enter':
                e.preventDefault();
                if (player !== null) {
                    if (player.paused) {
                        //player.play();
                        console.log('video unpaused');
                    }
                    else {
                        //player.pause();
                        console.log('video paused');
                    }
                    document.querySelector('[data-a-target=player-play-pause-button]').click();
                }
                break;
            case '+':
            case '8':
                e.preventDefault();
                /*try {
                    if (player !== null) {
                        if (player.volume >= 0 && player.volume <= 1) {
                            player.volume += 0.05;
                            console.log(`volume changed to ${(player.volume * 100).toFixed(0)}%`);
                        }
                    }
                } catch (err) {
                    console.warn(err);
                }*/
                changeVolumeBy(0.05);
                break;
            case '-':
            case '2':
                e.preventDefault();
                /*try {
                    if (player !== null) {
                        if (player.volume >= 0 && player.volume <= 1) {
                            player.volume -= 0.05;
                            console.log(`volume changed to ${(player.volume * 100).toFixed(0)}%`);
                        }
                    }
                } catch (err) {
                    console.warn(err);
                }*/
                changeVolumeBy(-0.05);
                break;
            case 'J':
                e.preventDefault();
                seekBy(-30);
                break;
            case 'L':
                e.preventDefault();
                seekBy(30);
                break;
            case '<':
                e.preventDefault();
                seekBy(-60);
                break;
            case '>':
                e.preventDefault();
                seekBy(60);
                break;
        }
    }, false);

    const matches = function (el, selector) {
        return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    };

    const seekBy = (n) => {
        let d = document.querySelector('video[src]');
        if (d !== null) {
            let a = Math.abs(n);
            (n >= 0) ? d.currentTime += a : d.currentTime -= a;
            console.log('video seeked by %ds', n);
        }
    };

    const changeVolumeBy=(n)=>{
        try{
            let d=document.querySelector('video[src]');
            if(d!==null){
                let a=Math.abs(n);
                if (d.volume >= 0 && d.volume <= 1) {
                    (n>=0)?d.volume+=a:d.volume-=a;
                    console.log(`volume changed to ${(d.volume * 100).toFixed(0)}%`);
                }
            }
        }catch(err){
            console.warn(err);
        }
    };
})();