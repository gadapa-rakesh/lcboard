(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{uNRg:function(e,o,t){"use strict";t.r(o),t.d(o,"IonCheckbox",function(){return n});var r=t("cBjU"),c=t("k5vO"),i=t("HHlg"),n=function(){function e(){var e=this;this.inputId="ion-cb-"+a++,this.labelId=this.inputId+"-lbl",this.keyFocus=!1,this.name=this.inputId,this.checked=!1,this.disabled=!1,this.value="on",this.onChange=function(){e.checked=!e.checked},this.onKeyUp=function(){e.keyFocus=!0},this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.keyFocus=!1,e.ionBlur.emit()}}return e.prototype.componentWillLoad=function(){this.emitStyle()},e.prototype.checkedChanged=function(e){this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.emitStyle=function(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})},e.prototype.hostData=function(){return{class:Object.assign({},Object(i.h)(this.color),{"in-item":Object(i.j)("ion-item",this.el),"checkbox-checked":this.checked,"checkbox-disabled":this.disabled,"checkbox-key":this.keyFocus,interactive:!0})}},e.prototype.render=function(){return Object(c.d)(this.el,this.name,this.value,this.disabled),[Object(r.b)("div",{class:"checkbox-icon"},Object(r.b)("div",{class:"checkbox-inner"})),Object(r.b)("input",{type:"checkbox",id:this.inputId,"aria-labelledby":this.labelId,onChange:this.onChange,onFocus:this.onFocus,onBlur:this.onBlur,onKeyUp:this.onKeyUp,checked:this.checked,name:this.name,value:this.value,disabled:this.disabled})]},Object.defineProperty(e,"is",{get:function(){return"ion-checkbox"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{checked:{type:Boolean,attr:"checked",mutable:!0,watchCallbacks:["checkedChanged"]},color:{type:String,attr:"color"},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["emitStyle"]},el:{elementRef:!0},keyFocus:{state:!0},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},value:{type:String,attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return':host{--background-checked:var(--ion-color-primary,#3880ff);--border-color-checked:var(--ion-color-primary,#3880ff);--checkmark-color:var(--ion-color-primary-contrast,#fff);display:inline-block;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}input{left:0;top:0;margin:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}.checkbox-icon{border-radius:var(--border-radius);position:relative;width:var(--size);height:var(--size);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict}.checkbox-inner{border-color:var(--checkmark-color);opacity:0}:host(.checkbox-checked) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-inner{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--size:24px;--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:var(--ion-item-border-color,var(--ion-border-color,#c8c7cc));--background:var(--ion-item-background,var(--ion-background-color,#fff))}.checkbox-inner{left:calc(var(--size) / 2.5 - 1px);top:calc(var(--size) / 6);position:absolute;width:calc(var(--size) / 6 + 1px);height:calc(var(--size) / 2);-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid}:host(.checkbox-disabled){opacity:.3}:host(.checkbox-key) .checkbox-icon:after{border-radius:50%;left:-9px;top:-9px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:"";opacity:.2}:host(.in-item){margin:10px 8px 9px 0;display:block;position:static}:host(.in-item[slot=start]){margin:8px 16px 8px 2px}'},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),a=0}}]);