if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,r)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let l={};const o=s=>n(s,a),c={module:{uri:a},exports:l,require:o};e[a]=Promise.all(i.map((s=>c[s]||o(s)))).then((s=>(r(...s),l)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"1d287386294ecd08577df549a75036f6"},{url:"android-chrome-512x512.png",revision:"8181eaa349f52889a069dc3b80b7e2a1"},{url:"apple-touch-icon.png",revision:"73b371d5b11b5924c222af257913ce98"},{url:"assets/alarm-47fbbbce.mp3",revision:null},{url:"assets/cat-7963b8c2.png",revision:null},{url:"assets/Home-277edfe1.js",revision:null},{url:"assets/Home-c76d469c.css",revision:null},{url:"assets/index-3cbe8ef8.css",revision:null},{url:"assets/index-815e30c1.js",revision:null},{url:"assets/list-1c3e60ea.js",revision:null},{url:"assets/List-680bd32b.js",revision:null},{url:"assets/List-a2c6f404.css",revision:null},{url:"assets/materialdesignicons-webfont-48d3eec6.woff",revision:null},{url:"assets/materialdesignicons-webfont-861aea05.eot",revision:null},{url:"assets/materialdesignicons-webfont-bd725a7a.ttf",revision:null},{url:"assets/materialdesignicons-webfont-e52d60f6.woff2",revision:null},{url:"assets/Settings-12a2ba9b.css",revision:null},{url:"assets/Settings-6eb17006.js",revision:null},{url:"assets/settings-8a013dd7.js",revision:null},{url:"assets/VInput-6305ee8f.js",revision:null},{url:"assets/VInput-d3ab9d85.css",revision:null},{url:"assets/VRow-c021c97e.js",revision:null},{url:"assets/webfontloader-523643f5.js",revision:null},{url:"assets/yay-ca7f6c55.mp3",revision:null},{url:"cat.png",revision:"647984e46746557bdac8dc9842403805"},{url:"done.png",revision:"99564c4619ec3c926b429ea1bcc03004"},{url:"favicon-16x16.png",revision:"44d8b66ce99146e5a382339c37428619"},{url:"favicon-32x32.png",revision:"ef833ff7e6e0f20d30873290c62f430c"},{url:"favicon.ico",revision:"6be35fd952181c09f7f080f9adb28b30"},{url:"index.html",revision:"981a90ebd362cc72f27dcf4486e427d8"},{url:"mstile-150x150.png",revision:"be2f050afb608c7d83621c3d414e65e0"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"65a773aa1073f2a432fffad891290a4e"},{url:"splashscreens/ipad_splash.png",revision:"45f4d357c8659a312d98ddfa36bb417a"},{url:"splashscreens/ipadpro1_splash.png",revision:"582136aed698e49687ef3ede1717c566"},{url:"splashscreens/ipadpro2_splash.png",revision:"53cd0c4ea2d67157f139519c19e7f859"},{url:"splashscreens/ipadpro3_splash.png",revision:"7005ae091a0bdfb9c7adb2776320738d"},{url:"splashscreens/iphone5_splash.png",revision:"d902d20db42f44c8751de599f898bd8a"},{url:"splashscreens/iphone6_splash.png",revision:"c2df810a5ae3486c6a508dfa29599af8"},{url:"splashscreens/iphoneplus_splash.png",revision:"a4fbdcb58e3f2047f1b82f1b8e057a25"},{url:"splashscreens/iphonex_splash.png",revision:"cb715e4fb1d1f66d3c6f758084cc4bc5"},{url:"splashscreens/iphonexr_splash.png",revision:"95e1c2f541da032f3ca4ec0fcc1ee29f"},{url:"splashscreens/iphonexsmax_splash.png",revision:"cce0a0446f002da813b937979e605210"},{url:"tired.png",revision:"969111f876893210d8e00e922906c3d0"},{url:"./android-chrome-192x192.png",revision:"1d287386294ecd08577df549a75036f6"},{url:"./android-chrome-512x512.png",revision:"8181eaa349f52889a069dc3b80b7e2a1"},{url:"manifest.webmanifest",revision:"5176180378bf377a63cfd8d3a9a347dd"}],{ignoreURLParametersMatching:[/^[0-9a-zA-Z]*$/]}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
