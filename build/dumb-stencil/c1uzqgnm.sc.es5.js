/*! Built with http://stenciljs.com */
DumbStencil.loadBundle("c1uzqgnm",["exports"],function(e){var t=window.DumbStencil.h,n=function(){function e(){var e=this;this.disabled=!1,this.handleClick=function(){e.clicked.emit(),void 0!==e.buttonClick&&e.buttonClick()}}return e.prototype.render=function(){return t("button",{onClick:this.handleClick,disabled:this.disabled},this.text)},Object.defineProperty(e,"is",{get:function(){return"dumb-button"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{buttonClick:{type:"Any",attr:"button-click"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},text:{type:String,attr:"text"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"clicked",method:"clicked",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-dumb-button-host]{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}button[data-dumb-button]{background:#333;border:0;color:#fff}.secondary[data-dumb-button-host]   button[data-dumb-button]{background:#eee;border:1px solid #eee;color:#222}"},enumerable:!0,configurable:!0}),e}(),i=function(){function e(){var e=this;this.handleButtonClick=function(){e.el.shadowRoot.querySelector("form").submit()}}return e.prototype.render=function(){return t("form",{class:"c-inline-form",method:this.method,action:this.action},t("label",{htmlFor:this.id,class:"c-inline-form__label u-is-vishidden"},this.label),t("input",{id:this.id,class:"c-inline-form__input",placeholder:this.placeholder}),t("dumb-button",{text:this.cta,buttonClick:this.handleButtonClick}))},Object.defineProperty(e,"is",{get:function(){return"dumb-inline-form"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{action:{type:String,attr:"action"},cta:{type:String,attr:"cta"},el:{elementRef:!0},id:{type:String,attr:"id"},label:{type:String,attr:"label"},method:{type:String,attr:"method"},placeholder:{type:String,attr:"placeholder"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[data-dumb-inline-form-host]{display:-webkit-box;display:-ms-flexbox;display:flex}.c-inline-form[data-dumb-inline-form]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:.5rem 0}.c-inline-form__input[data-dumb-inline-form]{-webkit-box-flex:1;-ms-flex:1 1;flex:1 1;padding:.5rem}.u-is-vishidden[data-dumb-inline-form]{border:0;clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;padding:0;position:absolute!important;width:1px}"},enumerable:!0,configurable:!0}),e}();e.DumbButton=n,e.DumbInlineForm=i,Object.defineProperty(e,"__esModule",{value:!0})});