(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{VEWC:function(e,o,t){"use strict";t.r(o),t.d(o,"IonPopover",function(){return f}),t.d(o,"IonPopoverController",function(){return b});var n=t("B5Ai"),r=t("cBjU"),i=t("HHlg"),s=t("6Fnk"),p=t("cHb+");function a(e,o,t){var n="top",r="left",i=o.querySelector(".popover-content"),s=i.getBoundingClientRect(),p=s.width,a=s.height,c=window.innerWidth,d=window.innerHeight,u=t&&t.target&&t.target.getBoundingClientRect(),m=null!=u&&"top"in u?u.top:d/2-a/2,f=null!=u&&"left"in u?u.left:c/2,v=u&&u.width||0,b=u&&u.height||0,h=o.querySelector(".popover-arrow"),y=h.getBoundingClientRect(),g=y.width,w=y.height;null==u&&(h.style.display="none");var x={top:m+b,left:f+v/2-g/2},P={top:m+b+(w-1),left:f+v/2-p/2},D=!1,k=!1;P.left<l+25?(D=!0,P.left=l):p+l+P.left+25>c&&(k=!0,P.left=c-p-l,r="right"),m+b+a>d&&m-a>0?(x.top=m-(w+1),console.log(x),console.log(m),console.log(a),P.top=m-a-(w-1),o.className=o.className+" popover-bottom",n="bottom"):m+b+a>d&&(i.style.bottom=l+"%"),h.style.top=x.top+"px",h.style.left=x.left+"px",i.style.top=P.top+"px",i.style.left=P.left+"px",D&&(i.style.left="calc("+P.left+"px + var(--ion-safe-area-left, 0px))"),k&&(i.style.left="calc("+P.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=n+" "+r;var j=new e,O=new e;O.addElement(o.querySelector("ion-backdrop")),O.fromTo("opacity",.01,.08);var E=new e;return E.addElement(o.querySelector(".popover-wrapper")),E.fromTo("opacity",.01,1),Promise.resolve(j.addElement(o).easing("ease").duration(100).add(O).add(E))}var l=5;function c(e,o){var t=new e,n=new e;n.addElement(o.querySelector("ion-backdrop"));var r=new e;return r.addElement(o.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(t.addElement(o).easing("ease").duration(500).add(n).add(r))}function d(e,o,t){var n="top",r="left",i=o.querySelector(".popover-content"),s=i.getBoundingClientRect(),p=s.width,a=s.height,l=window.innerWidth,c=window.innerHeight,d=t&&t.target&&t.target.getBoundingClientRect(),m=null!=d&&"top"in d?d.top:c/2-a/2,f=d&&d.height||0,v={top:m,left:null!=d&&"left"in d?d.left:l/2-p/2};v.left<u?v.left=u:p+u+v.left>l&&(v.left=l-p-u,r="right"),m+f+a>c&&m-a>0?(v.top=m-a,o.className=o.className+" popover-bottom",n="bottom"):m+f+a>c&&(i.style.bottom=u+"px"),i.style.top=v.top+"px",i.style.left=v.left+"px",i.style.transformOrigin=n+" "+r;var b=new e,h=new e;h.addElement(o.querySelector("ion-backdrop")),h.fromTo("opacity",.01,.08);var y=new e;y.addElement(o.querySelector(".popover-wrapper")),y.fromTo("opacity",.01,1);var g=new e;g.addElement(o.querySelector(".popover-content")),g.fromTo("scale",.001,1);var w=new e;return w.addElement(o.querySelector(".popover-viewport")),w.fromTo("opacity",.01,1),Promise.resolve(b.addElement(o).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(h).add(y).add(g).add(w))}var u=12;function m(e,o){var t=new e,n=new e;n.addElement(o.querySelector("ion-backdrop"));var r=new e;return r.addElement(o.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(t.addElement(o).easing("ease").duration(500).add(n).add(r))}var f=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return e.prototype.componentDidLoad=function(){this.ionPopoverDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionPopoverDidUnload.emit()},e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,s.a)},e.prototype.lifecycle=function(e){var o=this.usersElement,t=v[e.type];if(o&&t){var n=new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:e.detail});o.dispatchEvent(n)}},e.prototype.present=function(){return n.a(this,void 0,void 0,function(){var e,o,t;return n.c(this,function(n){switch(n.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return o=Object.assign({},this.componentProps,{popover:this.el}),t=this,[4,Object(i.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],o)];case 1:return t.usersElement=n.sent(),[4,Object(p.a)(this.usersElement)];case 2:return n.sent(),[2,Object(s.e)(this,"popoverEnter",a,d,this.event)]}})})},e.prototype.dismiss=function(e,o){return n.a(this,void 0,void 0,function(){var t;return n.c(this,function(n){switch(n.label){case 0:return[4,Object(s.b)(this,e,o,"popoverLeave",c,m,this.event)];case 1:return(t=n.sent())?[4,Object(i.b)(this.delegate,this.usersElement)]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2,t]}})})},e.prototype.onDidDismiss=function(){return Object(s.c)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(s.c)(this.el,"ionPopoverWillDismiss")},e.prototype.hostData=function(){return{style:{zIndex:2e4+this.overlayIndex},"no-router":!0,class:Object.assign({"popover-translucent":this.translucent},Object(i.g)(this.cssClass))}},e.prototype.render=function(){return[Object(r.b)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.b)("div",{class:"popover-wrapper"},Object(r.b)("div",{class:"popover-arrow"}),Object(r.b)("div",{class:"popover-content"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},event:{type:"Any",attr:"event"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionPopoverDidLoad",method:"ionPopoverDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidUnload",method:"ionPopoverDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return'.sc-ion-popover-ios-h{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;z-index:1000}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.popover-content.sc-ion-popover-ios{border-radius:10px;width:200px;min-width:0;min-height:0;max-height:90%;background-color:var(--ion-background-color,#fff);color:var(--ion-text-color,#000)}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:var(--ion-background-color,#fff);content:"";z-index:10}.popover-bottom.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after{top:-6px}.popover-translucent.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h   .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}'},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),v={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},b=function(){function e(){}return e.prototype.create=function(e){return Object(s.f)(this.doc.createElement("ion-popover"),e)},e.prototype.dismiss=function(e,o,t){return Object(s.g)(this.doc,e,o,"ion-popover",t)},e.prototype.getTop=function(){return n.a(this,void 0,void 0,function(){return n.c(this,function(e){return[2,Object(s.h)(this.doc,"ion-popover")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-popover-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}()}}]);