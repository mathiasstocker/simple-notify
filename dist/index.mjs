var f=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="m8.94 8 4.2-4.193a.67.67 0 0 0-.947-.947L8 7.06l-4.193-4.2a.67.67 0 1 0-.947.947L7.06 8l-4.2 4.193a.667.667 0 0 0 .217 1.093.666.666 0 0 0 .73-.146L8 8.94l4.193 4.2a.666.666 0 0 0 1.094-.217.665.665 0 0 0-.147-.73L8.94 8Z" fill="currentColor"/>
</svg>
`;var I=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="m19.627 11.72-5.72 5.733-2.2-2.2a1.334 1.334 0 1 0-1.88 1.881l3.133 3.146a1.333 1.333 0 0 0 1.88 0l6.667-6.667a1.333 1.333 0 1 0-1.88-1.893ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" fill="currentColor"/>
</svg>
`;var N=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16.334 17.667a1.334 1.334 0 0 0 1.334-1.333v-5.333a1.333 1.333 0 0 0-2.665 0v5.333a1.333 1.333 0 0 0 1.33 1.333Zm-.508 5.227c.325.134.69.134 1.014 0 .165-.064.314-.159.44-.28a1.56 1.56 0 0 0 .28-.44c.076-.158.112-.332.107-.507a1.332 1.332 0 0 0-.387-.946 1.532 1.532 0 0 0-.44-.28 1.334 1.334 0 0 0-1.838 1.226 1.4 1.4 0 0 0 .385.947c.127.121.277.216.44.28Zm.508 6.773a13.333 13.333 0 1 0 0-26.667 13.333 13.333 0 0 0 0 26.667Zm0-24A10.667 10.667 0 1 1 16.54 27a10.667 10.667 0 0 1-.206-21.333Z" fill="currentColor"/>
</svg>
`;var u=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24A10.667 10.667 0 0 1 5.333 16a10.56 10.56 0 0 1 2.254-6.533l14.946 14.946A10.56 10.56 0 0 1 16 26.667Zm8.413-4.134L9.467 7.587A10.56 10.56 0 0 1 16 5.333 10.667 10.667 0 0 1 26.667 16a10.56 10.56 0 0 1-2.254 6.533Z" fill="currentColor"/>
</svg>
`;var m=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M16 14.667A1.333 1.333 0 0 0 14.667 16v5.333a1.333 1.333 0 0 0 2.666 0V16A1.333 1.333 0 0 0 16 14.667Zm.507-5.227a1.333 1.333 0 0 0-1.014 0 1.334 1.334 0 0 0-.44.28 1.56 1.56 0 0 0-.28.44c-.075.158-.11.332-.106.507a1.332 1.332 0 0 0 .386.946c.13.118.279.213.44.28a1.334 1.334 0 0 0 1.84-1.226 1.4 1.4 0 0 0-.386-.947 1.334 1.334 0 0 0-.44-.28ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" fill="currentColor"/>
</svg>
`;var T=s=>{let e=new DOMParser,i="text/html";return e.parseFromString(s,i).body.childNodes[0]},r=s=>{let e=new DOMParser().parseFromString(s,"application/xml");return document.importNode(e.documentElement,!0).outerHTML};var t={CONTAINER:"sn-notifications-container",NOTIFY:"sn-notify",NOTIFY_CONTENT:"sn-notify-content",NOTIFY_ICON:"sn-notify-icon",NOTIFY_CLOSE:"sn-notify-close",NOTIFY_TITLE:"sn-notify-title",NOTIFY_TEXT:"sn-notify-text",IS_X_CENTER:"is-x-center",IS_Y_CENTER:"is-y-center",IS_CENTER:"is-center",IS_LEFT:"is-left",IS_RIGHT:"is-right",IS_TOP:"is-top",IS_BOTTOM:"is-bottom",NOTIFY_OUTLINE:"sn-notify-outline",NOTIFY_FILLED:"sn-notify-filled",NOTIFY_ERROR:"sn-notify-error",NOTIFY_WARNING:"sn-notify-warning",NOTIFY_SUCCESS:"sn-notify-success",NOTIFY_INFO:"sn-notify-info",NOTIFY_FADE:"sn-notify-fade",NOTIFY_FADE_IN:"sn-notify-fade-in",NOTIFY_SLIDE:"sn-notify-slide",NOTIFY_SLIDE_IN:"sn-notify-slide-in",NOTIFY_AUTOCLOSE:"sn-notify-autoclose"},n={ERROR:"error",WARNING:"warning",SUCCESS:"success",INFO:"info"},d={OUTLINE:"outline",FILLED:"filled"},c={FADE:"fade",SLIDE:"slide"},a={CLOSE:r(f),SUCCESS:r(I),ERROR:r(u),WARNING:r(N),INFO:r(m)};var l=s=>{s.wrapper.classList.add(t.NOTIFY_FADE),setTimeout(()=>{s.wrapper.classList.add(t.NOTIFY_FADE_IN)},100)},h=s=>{s.wrapper.classList.remove(t.NOTIFY_FADE_IN),setTimeout(()=>{s.wrapper.remove()},s.speed)},E=s=>{s.wrapper.classList.add(t.NOTIFY_SLIDE),setTimeout(()=>{s.wrapper.classList.add(t.NOTIFY_SLIDE_IN)},100)},O=s=>{s.wrapper.classList.remove(t.NOTIFY_SLIDE_IN),setTimeout(()=>{s.wrapper.remove()},s.speed)};var p=class{constructor(e){this.notifyOut=e=>{e(this)};let{notificationsGap:i=20,notificationsPadding:o=20,status:v,effect:S=c.FADE,type:L="outline",title:y,text:w,showIcon:_=!0,customIcon:C="",customClass:F="",speed:g=500,showCloseButton:Y=!0,autoclose:R=!1,autotimeout:x=3e3,position:A="right top",customWrapper:M=""}=e;if(this.customWrapper=M,this.status=v,this.title=y,this.text=w,this.showIcon=_,this.customIcon=C,this.customClass=F,this.speed=g,this.effect=S,this.showCloseButton=Y,this.autoclose=R,this.autotimeout=x,this.notificationsGap=i,this.notificationsPadding=o,this.type=L,this.position=A,!this.checkRequirements()){console.error("You must specify 'title' or 'text' at least.");return}this.setContainer(),this.setWrapper(),this.setPosition(),this.showIcon&&this.setIcon(),this.showCloseButton&&this.setCloseButton(),this.setContent(),this.container.prepend(this.wrapper),this.setEffect(),this.notifyIn(this.selectedNotifyInEffect),this.autoclose&&this.autoClose(),this.setObserver()}checkRequirements(){return!!(this.title||this.text)}setContainer(){let e=document.querySelector(`.${t.CONTAINER}`);e?this.container=e:(this.container=document.createElement("div"),this.container.classList.add(t.CONTAINER),document.body.appendChild(this.container)),this.notificationsPadding&&this.container.style.setProperty("--sn-notifications-padding",`${this.notificationsPadding}px`),this.notificationsGap&&this.container.style.setProperty("--sn-notifications-gap",`${this.notificationsGap}px`)}setPosition(){this.container.classList[this.position==="center"?"add":"remove"](t.IS_CENTER),this.container.classList[this.position.includes("left")?"add":"remove"](t.IS_LEFT),this.container.classList[this.position.includes("right")?"add":"remove"](t.IS_RIGHT),this.container.classList[this.position.includes("top")?"add":"remove"](t.IS_TOP),this.container.classList[this.position.includes("bottom")?"add":"remove"](t.IS_BOTTOM),this.container.classList[this.position.includes("x-center")?"add":"remove"](t.IS_X_CENTER),this.container.classList[this.position.includes("y-center")?"add":"remove"](t.IS_Y_CENTER)}setCloseButton(){let e=document.createElement("div");e.classList.add(t.NOTIFY_CLOSE),e.innerHTML=a.CLOSE,this.wrapper.appendChild(e),e.addEventListener("click",()=>{this.close()})}setWrapper(){switch(this.customWrapper?this.wrapper=T(this.customWrapper):this.wrapper=document.createElement("div"),this.wrapper.style.setProperty("--sn-notify-transition-duration",`${this.speed}ms`),this.wrapper.classList.add(t.NOTIFY),this.type){case d.OUTLINE:this.wrapper.classList.add(t.NOTIFY_OUTLINE);break;case d.FILLED:this.wrapper.classList.add(t.NOTIFY_FILLED);break;default:this.wrapper.classList.add(t.NOTIFY_OUTLINE)}switch(this.status){case n.SUCCESS:this.wrapper.classList.add(t.NOTIFY_SUCCESS);break;case n.ERROR:this.wrapper.classList.add(t.NOTIFY_ERROR);break;case n.WARNING:this.wrapper.classList.add(t.NOTIFY_WARNING);break;case n.INFO:this.wrapper.classList.add(t.NOTIFY_INFO);break}this.autoclose&&(this.wrapper.classList.add(t.NOTIFY_AUTOCLOSE),this.wrapper.style.setProperty("--sn-notify-autoclose-timeout",`${this.autotimeout+this.speed}ms`)),this.customClass&&this.wrapper.classList.add(this.customClass)}setContent(){let e=document.createElement("div");e.classList.add(t.NOTIFY_CONTENT);let i,o;this.title&&(i=document.createElement("div"),i.classList.add(t.NOTIFY_TITLE),i.textContent=this.title.trim(),this.showCloseButton||(i.style.paddingRight="0")),this.text&&(o=document.createElement("div"),o.classList.add(t.NOTIFY_TEXT),o.innerHTML=this.text.trim(),this.title||(o.style.marginTop="0")),this.wrapper.appendChild(e),this.title&&e.appendChild(i),this.text&&e.appendChild(o)}setIcon(){let e=o=>{switch(o){case n.SUCCESS:return a.SUCCESS;case n.ERROR:return a.ERROR;case n.WARNING:return a.WARNING;case n.INFO:return a.INFO}},i=document.createElement("div");i.classList.add(t.NOTIFY_ICON),i.innerHTML=this.customIcon||e(this.status),(this.status||this.customIcon)&&this.wrapper.appendChild(i)}setObserver(){let e=new IntersectionObserver(i=>{if(i[0].intersectionRatio<=0)this.close();else return},{threshold:0});setTimeout(()=>{e.observe(this.wrapper)},this.speed)}notifyIn(e){e(this)}autoClose(){setTimeout(()=>{this.close()},this.autotimeout+this.speed)}close(){this.notifyOut(this.selectedNotifyOutEffect)}setEffect(){switch(this.effect){case c.FADE:this.selectedNotifyInEffect=l,this.selectedNotifyOutEffect=h;break;case c.SLIDE:this.selectedNotifyInEffect=E,this.selectedNotifyOutEffect=O;break;default:this.selectedNotifyInEffect=l,this.selectedNotifyOutEffect=h}}};globalThis.Notify=p;export{p as default};
//# sourceMappingURL=index.mjs.map