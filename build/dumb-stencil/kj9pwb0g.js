/*! Built with http://stenciljs.com */
const{h:t}=window.DumbStencil;class e{render(){return t("div",{class:"c-hero"},t("img",{class:"c-hero__img",src:this.heroImgSrc,alt:this.heroImgAlt}),t("div",{class:"c-hero__body"},t("h2",{class:"c-hero__title"},this.heroTitle),t("p",{class:"c-hero__description"},this.heroDescription)))}static get is(){return"dumb-hero"}static get encapsulation(){return"shadow"}static get properties(){return{heroDescription:{type:String,attr:"hero-description"},heroImgAlt:{type:String,attr:"hero-img-alt"},heroImgSrc:{type:String,attr:"hero-img-src"},heroTitle:{type:String,attr:"hero-title"}}}static get style(){return":host{background:#eee;display:block;position:relative}.c-hero{background:#eee;position:relative}.c-hero__img{display:block;height:auto;max-height:80vh;-o-object-fit:cover;object-fit:cover;width:100%}.c-hero__body{bottom:0;left:0;padding:3rem 2rem;position:absolute;z-index:1}.c-hero__title{font-size:3rem;margin:0}.c-hero__description{font-size:1.4rem;margin:0}"}}export{e as DumbHero};