(function(e){function t(t){for(var s,a,i=t[0],u=t[1],l=t[2],d=0,p=[];d<i.length;d++)a=i[d],o[a]&&p.push(o[a][0]),o[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);c&&c(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(s=!1)}s&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},o={app:0},r=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var c=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"37ec":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"\n*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box\n}\nbody,html{height:100%\n}\nbody{color:#fffce1;font-family:Raleway,Arial,sans-serif;margin:0\n}\n#app{height:100%\n}\na{color:#4e4a46;text-decoration:none\n}\na:focus,a:hover{color:#c94e50\n}\nmain{background:#b4bad2;height:100%;overflow:auto;padding:3em 2em;text-align:center\n}\nh1{font-size:3.75em;font-weight:800\n}\n.description{font-weight:400;line-height:1.3em;margin:1.2em auto 1em;max-width:20em\n}\n.demo-buttons{font-size:1em;margin:2em auto 3em;max-width:1200px;padding:0 10em\n}\n.demo-buttons a{background:#fffce1;border-bottom-left-radius:20px 50px;border-bottom-right-radius:20px 50px;border-top-left-radius:20px 50px;border-top-right-radius:20px 50px;cursor:pointer;display:inline-block;font-weight:800;letter-spacing:1px;margin:.75em;padding:1.35em 1.1em;text-transform:uppercase;width:15em\n}\n.demo-buttons a.currentDemo{background:#c94e50;color:#fffce1\n}\n.sideButton{background:#fffce1;cursor:pointer;display:inline-block;font-size:.8em;font-weight:800;height:2.5em;letter-spacing:1px;line-height:2.5em;text-transform:uppercase;width:5em\n}\n.sideButton.left{border-bottom-left-radius:10px;border-top-left-radius:10px\n}\n.sideButton.right{border-bottom-right-radius:10px;border-top-right-radius:10px\n}\n.sideButton.active{background:#c94e50;color:#fffce1\n}\n@media screen and (max-width:40em){\nmain{font-size:80%\n}\nh1{font-size:2.5em;padding-top:1em\n}\n.demo-buttons{max-width:900px;padding:0 2em\n}\n}\n.bm-burger-button{height:30px;left:36px;position:absolute;top:36px;width:36px\n}\n.right .bm-burger-button{left:auto;right:36px\n}\n.bm-burger-bars{background:#373a47\n}\n.bm-morph-shape{fill:#373a47\n}\n.bm-menu{background:#373a47\n}\n.bm-menu a{color:#b8b7ad\n}\n.bm-menu a:focus,.bm-menu a:hover{color:#c94e50\n}\n.menu-1 .bm-cross{background:#bdc3c7\n}\n.menu-1 .bm-menu{font-size:1.15em;padding:2.5em 1.5em 0\n}\n.menu-2 .bm-cross{background:#999\n}\n.menu-2 .bm-menu{padding:3.4em 1em 0\n}\n.menu-2 a{padding:1em\n}\n.menu-2 i{color:#282a35;font-size:1.7em;vertical-align:middle\n}\n.menu-3 .bm-cross{background:#888\n}\n.menu-3 .bm-menu{font-size:1.15em;padding:2em 1em\n}\n.menu-3 i{opacity:.5\n}\n.menu-3 span{font-size:.75em;letter-spacing:1px;text-transform:uppercase\n}\n.menu-4 .bm-cross{background:#888\n}\n.menu-4 h2{box-shadow:inset 0 -1px rgba(0,0,0,.2);color:rgba(0,0,0,.4);margin:0 auto;padding:2em 1em\n}\n.menu-4 h2 i{margin-left:.2em\n}\n.menu-4 h2 span{font-size:1.6em;font-weight:700\n}\n.menu-4 a{box-shadow:inset 0 -1px rgba(0,0,0,.2);padding:1em;text-transform:uppercase;transition:background .3s,box-shadow .3s\n}\n.menu-4 a span{font-weight:400;letter-spacing:1px\n}\n.menu-4 a:focus,.menu-4 a:hover{background:rgba(0,0,0,.2);box-shadow:inset 0 -1px transparent;color:#b8b7ad\n}",""])},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n(e.currentMenu,{tag:"component",attrs:{right:"right"===e.side}},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-fw fa-star-o"}),n("span",[e._v("Favourites")])]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-fw fa-bell-o"}),n("span",[e._v("Alerts")])]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-fw fa-envelope-o"}),n("span",[e._v("Messages")])]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-fw fa-comment-o"}),n("span",[e._v("Comments")])]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-fw fa-bar-chart-o"}),n("span",[e._v("Analytics")])]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fa fa-fw fa-newspaper-o"}),n("span",[e._v("Reading")])])]),n("main",{attrs:{id:"page-wrap"}},[n("img",{attrs:{src:"https://img.shields.io/npm/dt/vue-burger-menu.svg"}}),e._v("  \n        "),n("img",{attrs:{src:"https://img.shields.io/github/stars/mbj36/vue-burger-menu.svg"}}),e._m(0),n("a",{class:{sideButton:!0,left:!0,active:"left"===this.side},on:{click:function(t){e.changeSide("left")}}},[e._v("Left")]),n("a",{class:{sideButton:!0,right:!0,active:"right"===this.side},on:{click:function(t){e.changeSide("right")}}},[e._v("Right")]),n("h2",{staticClass:"description"},[e._v("An off-canvas sidebar vue component with a collection of effects and styles using CSS transitions and SVG path animations.")]),n("nav",{staticClass:"demo-buttons"},e._l(e.menus,function(t,s){return n("span",{key:s},[n("span",[n("a",{class:e.currentMenu===t.buttonText.replace(/ +/g,"").toLowerCase()?{currentDemo:!0}:{currentDemo:!1},on:{click:function(n){e.changeMenu(t.buttonText)}}},[e._v("\n                        "+e._s(t.buttonText)+"\n                    ")])])])})),e._v("\n        Inspired by\n        "),n("a",{attrs:{href:"https://github.com/codrops/OffCanvasMenuEffects"}},[e._v("Off-Canvas Menu Effects")]),e._v(" and\n        "),n("a",{attrs:{href:"https://github.com/codrops/SidebarTransitions"}},[e._v("Sidebar Transitions")]),e._v(" by Codrops\n    ")])],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[n("a",{attrs:{href:"https://github.com/mbj36/vue-burger-menu"}},[e._v("vue-burger-menu")]),n("br")])}],a=(n("a481"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({on:{openMenu:e.openMenu,closeMenu:e.closeMenu}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)}),i=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"sideNav",staticClass:"bm-menu"},[n("nav",{staticClass:"bm-item-list"},[e._t("default")],2),n("span",{staticClass:"bm-cross-button cross-style",class:{hidden:!e.crossIcon},on:{click:e.closeMenu}},e._l(2,function(e,t){return n("span",{key:e,staticClass:"bm-cross",style:{position:"absolute",width:"3px",height:"14px",transform:1===t?"rotate(45deg)":"rotate(-45deg)"}})}))]),n("div",{ref:"bmBurgerButton",staticClass:"bm-burger-button",class:{hidden:!e.burgerIcon},on:{click:e.openMenu}},e._l(3,function(e,t){return n("span",{key:t,staticClass:"bm-burger-bars line-style",style:{top:2*t*20+"%"}})}))])},l=[],c={name:"menubar",data:function(){return{isSideBarOpen:!1}},props:{isOpen:{type:Boolean,required:!1},right:{type:Boolean,required:!1},width:{type:[String],required:!1,default:"300"},disableEsc:{type:Boolean,required:!1},noOverlay:{type:Boolean,required:!1},onStateChange:{type:Function,required:!1},burgerIcon:{type:Boolean,required:!1,default:!0},crossIcon:{type:Boolean,required:!1,default:!0},disableOutsideClick:{type:Boolean,required:!1,default:!1},closeOnNavigation:{type:Boolean,required:!1,default:!1}},methods:{openMenu:function(){this.$emit("openMenu"),this.isSideBarOpen=!0,this.noOverlay||document.body.classList.add("bm-overlay"),this.right&&(this.$refs.sideNav.style.left="auto",this.$refs.sideNav.style.right="0px"),this.$nextTick(function(){this.$refs.sideNav.style.width=this.width?this.width+"px":"300px"})},closeMenu:function(){this.$emit("closeMenu"),this.isSideBarOpen=!1,document.body.classList.remove("bm-overlay"),this.$refs.sideNav.style.width="0px"},closeMenuOnEsc:function(e){e=e||window.event,"Escape"!==e.key&&27!==e.keyCode||this.closeMenu()},documentClick:function(e){var t=this.$refs.bmBurgerButton,n=null;e&&e.target&&(n=e.target),!t||t===n||t.contains(n)||this.hasClass(n,"bm-menu")||!this.isSideBarOpen||this.disableOutsideClick?t&&this.hasClass(n,"bm-menu")&&this.isSideBarOpen&&this.closeOnNavigation&&this.closeMenu():this.closeMenu()},hasClass:function(e,t){do{if(e.classList&&e.classList.contains(t))return!0;e=e.parentNode}while(e);return!1}},mounted:function(){this.disableEsc||document.addEventListener("keyup",this.closeMenuOnEsc)},created:function(){document.addEventListener("click",this.documentClick)},destroyed:function(){document.removeEventListener("keyup",this.closeMenuOnEsc),document.removeEventListener("click",this.documentClick)},watch:{isOpen:{deep:!0,immediate:!0,handler:function(e,t){var n=this;this.$nextTick(function(){!t&&e&&n.openMenu(),t&&!e&&n.closeMenu()})}},right:{deep:!0,immediate:!0,handler:function(e,t){var n=this;e&&this.$nextTick(function(){n.$refs.bmBurgerButton.style.left="auto",n.$refs.bmBurgerButton.style.right="36px",n.$refs.sideNav.style.left="auto",n.$refs.sideNav.style.right="0px",document.querySelector(".bm-burger-button").style.left="auto",document.querySelector(".bm-burger-button").style.right="36px",document.querySelector(".bm-menu").style.left="auto",document.querySelector(".bm-menu").style.right="0px",document.querySelector(".cross-style").style.right="250px"}),t&&this.$refs.bmBurgerButton.hasAttribute("style")&&(this.$refs.bmBurgerButton.removeAttribute("style"),this.$refs.sideNav.style.right="auto",document.querySelector(".bm-burger-button").removeAttribute("style"),document.getElementById("sideNav").style.right="auto",document.querySelector(".cross-style").style.right="0px")}}}},d=c,p=(n("efa6"),n("2877")),m=Object(p["a"])(d,u,l,!1,null,null,null);m.options.__file="Menu.vue";var h=m.exports,f={name:"slide",components:{Menu:h},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")}}},y=f,b=Object(p["a"])(y,a,i,!1,null,null,null);b.options.__file="slide.vue";var g=b.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({ref:"sideNav",on:{openMenu:e.openMenu,closeMenu:e.closeMenu}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)},x=[],w={name:"bubble",components:{Menu:h},data:function(){return{propsToPass:{isOpen:this.$attrs.isOpen,right:this.$attrs.right,width:this.$attrs.width,disableEsc:this.$attrs.disableEsc,noOverlay:this.$attrs.noOverlay,onStateChange:this.$attrs.onStateChange}}},methods:{openMenu:function(){var e=this.$refs.sideNav.$el.querySelector(".bm-menu");e.style.borderRadius="150% / 70%",this.$attrs.right?(e.style.borderTopRightRadius="0px 900px",e.style.borderBottomRightRadius="0px"):(e.style.borderTopLeftRadius="0px 900px",e.style.borderBottomLeftRadius="0px"),e.style.transitionTimingFunction="easy-in",this.$emit("openMenu"),setTimeout(function(){e.style.transitionTimingFunction="cubic-bezier(.29, 1.01, 1, -0.68)",e.style.borderRadius="0px"},300)},closeMenu:function(){var e=this.$refs.sideNav.$el.querySelector(".bm-menu");e.style.transitionTimingFunction=null,this.$emit("closeMenu")}}},M=w,S=Object(p["a"])(M,v,x,!1,null,null,null);S.options.__file="bubble.vue";var $=S.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({attrs:{openMenu:"openMenu"},on:{closeMenu:e.closeMenu}},"Menu",e.propsToPass,!1),[e._t("default")],2)],1)},O=[],q={name:"elastic",components:{Menu:h},data:function(){return{propsToPass:{isOpen:this.$attrs.isOpen,right:this.$attrs.right,width:this.$attrs.width,disableEsc:this.$attrs.disableEsc,noOverlay:this.$attrs.noOverlay,onStateChange:this.$attrs.onStateChange}}},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")}}},k=q,C=Object(p["a"])(k,_,O,!1,null,null,null);C.options.__file="elastic.vue";var B=C.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({ref:"sideNav",on:{openMenu:e.openMenu,closeMenu:e.closeMenu}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)},T=[],A={name:"elastic",components:{Menu:h},data:function(){return{bodyOldStyle:"",propsToPass:{isOpen:this.$attrs.isOpen,right:this.$attrs.right,width:this.$attrs.width,disableEsc:this.$attrs.disableEsc,noOverlay:this.$attrs.noOverlay,onStateChange:this.$attrs.onStateChange}}},methods:{openMenu:function(){var e=this;this.$emit("openMenu");var t=this.$attrs.width?this.$attrs.width+"px":"300px";this.$refs.sideNav.$el.querySelector(".bm-menu").style.overflowY="hidden",this.bodyOldStyle=document.body.getAttribute("style")||"",document.body.style.overflowX="hidden",this.$refs.sideNav.$el.querySelector(".bm-menu").style.transition="0.5s",this.$attrs.right?document.querySelector("#page-wrap").style.transform="translate3d(-".concat(t,", 0px, 0px )"):document.querySelector("#page-wrap").style.transform="translate3d(".concat(t,", 0px, 0px )"),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",this.$nextTick(function(){e.$refs.sideNav.$el.querySelector(".bm-menu").style.height="100%"})},closeMenu:function(){this.$emit("closeMenu"),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.transform="",document.body.setAttribute("style",this.bodyOldStyle),this.$refs.sideNav.$el.querySelector(".bm-menu").style.height="0px"}},mounted:function(){this.$refs.sideNav.$el.querySelector(".bm-menu").style.height="0px"}},j=A,N=Object(p["a"])(j,E,T,!1,null,null,null);N.options.__file="fallDown.vue";var R=N.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({on:{openMenu:e.push,closeMenu:e.pull}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)},P=[],L={name:"push",data:function(){return{bodyOldStyle:""}},components:{Menu:h},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")},push:function(){this.openMenu();var e=this.$attrs.width?this.$attrs.width+"px":"300px";this.bodyOldStyle=document.body.getAttribute("style")||"",document.body.style.overflowX="hidden",this.$attrs.right?document.querySelector("#page-wrap").style.transform="translate3d(-".concat(e,", 0px, 0px )"):document.querySelector("#page-wrap").style.transform="translate3d(".concat(e,", 0px, 0px )"),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s"},pull:function(){this.closeMenu(),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.transform="",document.body.setAttribute("style",this.bodyOldStyle)}}},D=L,F=Object(p["a"])(D,z,P,!1,null,null,null);F.options.__file="push.vue";var I=F.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({on:{openMenu:e.push,closeMenu:e.pull}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)},Y=[],J={name:"pushrotate",components:{Menu:h},data:function(){return{bodyOldStyle:"",appOldStyle:""}},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")},push:function(){this.openMenu();var e=this.$attrs.width?this.$attrs.width+"px":"300px";this.bodyOldStyle=document.body.getAttribute("style")||"",document.body.style.overflowX="hidden",this.$attrs.right?(document.querySelector("#page-wrap").style.transform="translate3d(-".concat(e,", 0px, 0px ) rotateY(15deg)"),document.querySelector("#page-wrap").style.transformOrigin="100% 50% 0px"):(document.querySelector("#page-wrap").style.transform="translate3d(".concat(e,", 0px, 0px ) rotateY(-15deg)"),document.querySelector("#page-wrap").style.transformOrigin="0% 50% 0px"),document.querySelector("#page-wrap").style.transformStyle="preserve-3d",document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",this.appOldStyle=document.querySelector("#app").getAttribute("style")||"",document.querySelector("#app").style.perspective="1500px",document.querySelector("#app").style.overflow="hidden"},pull:function(){this.closeMenu(),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.transform="",document.querySelector("#page-wrap").style.transformStyle="",document.querySelector("#page-wrap").style.transformOrigin="",document.querySelector("#app").setAttribute("style",this.appOldStyle),document.body.setAttribute("style",this.bodyOldStyle)}}},G=J,H=Object(p["a"])(G,X,Y,!1,null,null,null);H.options.__file="pushRotate.vue";var V=H.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({on:{openMenu:e.push,closeMenu:e.pull}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)},Q=[],U={name:"reveal",data:function(){return{bodyOldStyle:""}},components:{Menu:h},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")},push:function(){this.openMenu();var e=this.$attrs.width?this.$attrs.width+"px":"300px";this.bodyOldStyle=document.body.getAttribute("style")||"",document.body.style.overflowX="hidden",this.$attrs.right?document.querySelector("#page-wrap").style.transform="translate3d(-".concat(e,", 0px, 0px )"):document.querySelector("#page-wrap").style.transform="translate3d(".concat(e,", 0px, 0px )"),document.querySelector("#page-wrap").style.position="relative",document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s"},pull:function(){this.closeMenu(),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.transform="",document.querySelector("#page-wrap").style.position="",document.body.setAttribute("style",this.bodyOldStyle)}}},W=U,Z=Object(p["a"])(W,K,Q,!1,null,null,null);Z.options.__file="reveal.vue";var ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({on:{openMenu:e.push,closeMenu:e.pull}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)},ne=[],se={name:"scaledown",components:{Menu:h},data:function(){return{bodyOldStyle:"",appOldStyle:""}},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")},push:function(){this.openMenu();var e=this.$attrs.width?this.$attrs.width+"px":"100px";this.bodyOldStyle=document.body.getAttribute("style")||"",document.body.style.overflowX="hidden",this.$attrs.right?document.querySelector("#page-wrap").style.transform="translate3d(-".concat(e,", 0px, -600px ) "):document.querySelector("#page-wrap").style.transform="translate3d(".concat(e,", 0px, -600px ) "),document.querySelector("#page-wrap").style.transformStyle="preserve-3d",document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.overflow="hidden",this.appOldStyle=document.querySelector("#app").getAttribute("style")||"",document.querySelector("#app").style.perspective="1500px",document.querySelector("#app").style.overflow="hidden",document.querySelector("#app").style.height="100%"},pull:function(){this.closeMenu(),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.transform="",document.querySelector("#page-wrap").style.transformStyle="",document.querySelector("#page-wrap").style.transformOrigin="",document.querySelector("#page-wrap").style.overflow="auto",document.querySelector("#app").setAttribute("style",this.appOldStyle),document.body.setAttribute("style",this.bodyOldStyle)}}},oe=se,re=Object(p["a"])(oe,te,ne,!1,null,null,null);re.options.__file="scaleDown.vue";var ae=re.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({on:{openMenu:e.push,closeMenu:e.pull}},"Menu",this.$attrs,!1),[e._t("default")],2)],1)},ue=[],le={name:"scalerotate",components:{Menu:h},data:function(){return{bodyOldStyle:"",appOldStyle:""}},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")},push:function(){this.openMenu();var e=this.$attrs.width?this.$attrs.width+"px":"100px";this.bodyOldStyle=document.body.getAttribute("style")||"",document.body.style.overflowX="hidden",this.$attrs.right?document.querySelector("#page-wrap").style.transform="translate3d(-".concat(e,", 0px, -600px ) rotateY(20deg)"):document.querySelector("#page-wrap").style.transform="translate3d(".concat(e,", 0px, -600px ) rotateY(-20deg)"),document.querySelector("#page-wrap").style.transformStyle="preserve-3d",document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.overflow="hidden",this.appOldStyle=document.querySelector("#app").getAttribute("style")||"",document.querySelector("#app").style.perspective="1500px",document.querySelector("#app").style.overflow="hidden",document.querySelector("#app").style.height="100%"},pull:function(){this.closeMenu(),document.querySelector("#page-wrap").style.transition="all 0.5s ease 0s",document.querySelector("#page-wrap").style.transform="",document.querySelector("#page-wrap").style.transformStyle="",document.querySelector("#page-wrap").style.transformOrigin="",document.querySelector("#page-wrap").style.overflow="auto",document.querySelector("#app").setAttribute("style",this.appOldStyle),document.body.setAttribute("style",this.bodyOldStyle)}}},ce=le,de=Object(p["a"])(ce,ie,ue,!1,null,null,null);de.options.__file="scaleRotate.vue";var pe=de.exports,me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu",e._b({attrs:{openMenu:"openMenu"},on:{closeMenu:e.closeMenu}},"Menu",e.propsToPass,!1),[e._t("default")],2)],1)},he=[],fe={name:"stack",components:{Menu:h},data:function(){return{propsToPass:{isOpen:this.$attrs.isOpen,right:this.$attrs.right,width:this.$attrs.width,disableEsc:this.$attrs.disableEsc,noOverlay:this.$attrs.noOverlay,onStateChange:this.$attrs.onStateChange}}},methods:{openMenu:function(){this.$emit("openMenu")},closeMenu:function(){this.$emit("closeMenu")}}},ye=fe,be=Object(p["a"])(ye,me,he,!1,null,null,null);be.options.__file="stack.vue";var ge=be.exports,ve={data:function(){return{menus:{slide:{buttonText:"Slide"},push:{buttonText:"Push"},pushRotate:{buttonText:"Push Rotate"},reveal:{buttonText:"Reveal"},scaleDown:{buttonText:"Scale Down"},scaleRotate:{buttonText:"Scale Rotate"},bubble:{buttonText:"Bubble"},fallDown:{buttonText:"Fall Down"}},side:"left",currentMenu:"slide"}},components:{slide:g,bubble:$,elastic:B,push:I,pushrotate:V,scaledown:ae,scalerotate:pe,reveal:ee,stack:ge,falldown:R,Menu:h},methods:{changeMenu:function(e){return this.currentMenu=e.replace(/ +/g,"").toLowerCase(),this.currentMenu},changeSide:function(e){this.side=e}}},xe=ve,we=(n("7c55"),Object(p["a"])(xe,o,r,!1,null,null,null));we.options.__file="App.vue";var Me=we.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(Me)}}).$mount("#app")},"5e6f":function(e,t,n){var s=n("6d18");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var o=n("499e").default;o("55c52291",s,!0,{sourceMap:!1,shadowMode:!1})},"6d18":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,"\nhtml{font-family:Montserrat,Open Sans,Helvetica,Arial,sans-serif;height:100%\n}\n.bm-burger-button{color:#1f7699;cursor:pointer;height:27px;left:26px;position:absolute;top:26px;width:30px\n}\n.bm-burger-button.hidden{display:none\n}\n.bm-burger-bars{background-color:#1f7699\n}\n.line-style{height:20%;left:0;position:absolute;right:0\n}\n.cross-style{cursor:pointer;position:absolute;right:2px;top:12px\n}\n.bm-cross{background:#bdc3c7\n}\n.bm-cross-button{height:24px;width:24px\n}\n.bm-cross-button.hidden{display:none\n}\n.bm-menu{background-color:#1f7699;height:100%;left:0;overflow-x:hidden;padding-top:60px;position:fixed;top:0;transition:.5s;width:0;z-index:1000\n}\n.bm-overlay{background:rgba(0,0,0,.3)\n}\n.bm-item-list{color:#b8b7ad;font-size:20px;margin-left:10%\n}\n.bm-item-list>*{display:flex;padding:.7em;text-decoration:none\n}\n.bm-item-list>*>span{color:#fff;font-weight:700;margin-left:10px\n}",""])},"7c55":function(e,t,n){"use strict";var s=n("ca61"),o=n.n(s);o.a},ca61:function(e,t,n){var s=n("37ec");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var o=n("499e").default;o("3cfdf817",s,!0,{sourceMap:!1,shadowMode:!1})},efa6:function(e,t,n){"use strict";var s=n("5e6f"),o=n.n(s);o.a}});
//# sourceMappingURL=app.dbfabb0e.js.map