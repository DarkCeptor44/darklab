// ==UserScript==
// @name         DarkCeptor44's Dynamic Compressor
// @namespace    https://darkceptor44.github.io/darklab
// @version      1.0
// @description  Compresses main audio in the page with SHIFT+X
// @author       DarkCeptor44
// @include      http://*
// @include      https://*
// @exclude      http://*.twitch.tv/*
// @exclude      https://*.twitch.tv/*
// @grant        none
// @run-at       document-start
// @downloadURL  https://darkceptor44.github.io/darklab/assets/userscripts/dark-dynamic-compressor.user.js
// ==/UserScript==

let ctx = window.AudioContext || window.webkitAudioContext;
let audioContext;
let gainNode,compressorNode,source;
let compressorOn=false;

window.onload=function() {
    'use strict';

    let l1=document.createElement('link'); l1.rel='stylesheet'; l1.href='https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.core.min.css'; l1.integrity='sha512-JQUnm7fl0rXYdnCc1hDC9d1lAWnJezXv3unSwUIGWKyD5xl+zj8ekMI/Z2fQKemXmM670/QVe8mNcGOZvuOPjQ=='; l1.crossorigin='anonymous';
    let l2=document.createElement('link'); l2.rel='stylesheet'; l2.href='https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.default.min.css'; l2.integrity='sha512-wUS5ozkpB4c5aUrsfvYhDl6hc2oOC2AZbsKzym3DmOhBvCHs626N/NMxOdarpDKeJ1eq9cwZwNKTc3ELRnJbfQ=='; l2.crossorigin='anonymous';
    document.head.appendChild(l1);
    document.head.appendChild(l2);

    let s1=document.createElement('script'); s1.src='https://cdnjs.cloudflare.com/ajax/libs/alertify.js/0.3.11/alertify.min.js'; s1.integrity='sha512-2R8JJ9GapQ1VCvcazWIP4F7rOrMs6mzorqtZlXpvakAU0O/iw4n90CFrmG9+BwI//xxtnHxb5rbpkIF2s6z39w=='; s1.crossorigin='anonymous';
    document.body.appendChild(s1);

    audioContext=new ctx();
    source=document.querySelector('video[src]')||document.querySelector('audio[src]');
    buildAudioGraph();

    document.addEventListener('keypress',(e)=>{
        if (matches(e.target, 'input,select,button,textarea,div[role="textbox"]')) return;
        switch(e.key){
            case 'X':
                e.preventDefault();
                if(compressorOn){
                    gainNode.gain.value=parseFloat(1);
                    compressorNode.disconnect(audioContext.destination);
                    gainNode.disconnect(compressorNode);
                    gainNode.connect(audioContext.destination);
                    fancyLog('Compressor OFF');
                }else{
                    gainNode.gain.value=parseFloat(2);
                    gainNode.disconnect(audioContext.destination);
                    gainNode.connect(compressorNode);
                    compressorNode.connect(audioContext.destination);
                    fancyLog('Compressor ON');
                }
                compressorOn=!compressorOn;
                break;
        }
    },false);
};

function buildAudioGraph(){
    let gainMediaElementSource=audioContext.createMediaElementSource(source);
    gainNode=audioContext.createGain();
    //gainNode.gain.value=parseFloat(10);
    compressorNode=audioContext.createDynamicsCompressor();
    gainMediaElementSource.connect(gainNode);
    gainNode.connect(audioContext.destination);
}

function log(txt){
    console.log('DDC: '+txt);
}

function fancyLog(txt){
    log(txt);
    if(typeof(alertify)!=='undefined'){
        alertify.log(txt,1);
    }
}

const matches = function (el, selector) {
    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
};