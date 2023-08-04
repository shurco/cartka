/**
  * vee-validate v4.10.7
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("vue"),require("vee-validate")):"function"==typeof define&&define.amd?define(["exports","vue","vee-validate"],e):e((r="undefined"!=typeof globalThis?globalThis:r||self).VeeValidateRules={},r.Vue,r.veeValidate)}(this,(function(r,e,t){"use strict";const i={en:/^[A-Z]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[A-ZÆØÅ]*$/i,de:/^[A-ZÄÖÜß]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[A-Z\xC0-\xFF]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,nl:/^[A-ZÉËÏÓÖÜ]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ru:/^[А-ЯЁ]*$/i,kz:/^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[A-ZČĆŽŠĐ]*$/i,sv:/^[A-ZÅÄÖ]*$/i,tr:/^[A-ZÇĞİıÖŞÜ]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[A-ZÇƏĞİıÖŞÜ]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i},n={en:/^[A-Z\s]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,da:/^[A-ZÆØÅ\s]*$/i,de:/^[A-ZÄÖÜß\s]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ\s]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,it:/^[A-Z\xC0-\xFF\s]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,nl:/^[A-ZÉËÏÓÖÜ\s]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,ru:/^[А-ЯЁ\s]*$/i,kz:/^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA\s]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,sr:/^[A-ZČĆŽŠĐ\s]*$/i,sv:/^[A-ZÅÄÖ\s]*$/i,tr:/^[A-ZÇĞİıÖŞÜ\s]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ\s]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,az:/^[A-ZÇƏĞİıÖŞÜ\s]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ\s]*$/i},s={en:/^[0-9A-Z]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,da:/^[0-9A-ZÆØÅ]$/i,de:/^[0-9A-ZÄÖÜß]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,it:/^[0-9A-Z\xC0-\xFF]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,ru:/^[0-9А-ЯЁ]*$/i,kz:/^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,sr:/^[0-9A-ZČĆŽŠĐ]*$/i,sv:/^[0-9A-ZÅÄÖ]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,az:/^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,ug:/^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ]*$/i},u={en:/^[0-9A-Z_-]*$/i,cs:/^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,da:/^[0-9A-ZÆØÅ_-]*$/i,de:/^[0-9A-ZÄÖÜß_-]*$/i,es:/^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,fr:/^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,it:/^[0-9A-Z\xC0-\xFF_-]*$/i,lt:/^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,nl:/^[0-9A-ZÉËÏÓÖÜ_-]*$/i,hu:/^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,pl:/^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,pt:/^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,ru:/^[0-9А-ЯЁ_-]*$/i,kz:/^[0-9А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA_-]*$/i,sk:/^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,sr:/^[0-9A-ZČĆŽŠĐ_-]*$/i,sv:/^[0-9A-ZÅÄÖ_-]*$/i,tr:/^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,uk:/^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,ar:/^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,az:/^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,ug:/^[0-9A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ_-]*$/i},a=r=>{if(r)return Array.isArray(r)?r[0]:r.locale};function A(r,e){return Array.isArray(r)?r[0]:r[e]}function o(r){return null==r||""===r||!(!Array.isArray(r)||0!==r.length)}const $=(r,e)=>{if(o(r))return!0;const t=a(e);if(Array.isArray(r))return r.every((r=>$(r,{locale:t})));const n=String(r);return t?(i[t]||i.en).test(n):Object.keys(i).some((r=>i[r].test(n)))},l=(r,e)=>{if(o(r))return!0;const t=a(e);if(Array.isArray(r))return r.every((r=>l(r,{locale:t})));const i=String(r);return t?(u[t]||u.en).test(i):Object.keys(u).some((r=>u[r].test(i)))},y=(r,e)=>{if(o(r))return!0;const t=a(e);if(Array.isArray(r))return r.every((r=>y(r,{locale:t})));const i=String(r);return t?(s[t]||s.en).test(i):Object.keys(s).some((r=>s[r].test(i)))},c=(r,e)=>{if(o(r))return!0;const t=a(e);if(Array.isArray(r))return r.every((r=>c(r,{locale:t})));const i=String(r);return t?(n[t]||n.en).test(i):Object.keys(n).some((r=>n[r].test(i)))};const g=(r,e)=>{if(o(r))return!0;const{min:t,max:i}=function(r){return Array.isArray(r)?{min:r[0],max:r[1]}:r}(e);if(Array.isArray(r))return r.every((r=>g(r,{min:t,max:i})));const n=Number(r);return Number(t)<=n&&Number(i)>=n},m=(r,e)=>{const t=A(e,"target");return String(r)===String(t)},Z=(r,e)=>{if(o(r))return!0;const t=A(e,"length");if(Array.isArray(r))return r.every((r=>Z(r,{length:t})));const i=String(r);return/^[0-9]*$/.test(i)&&i.length===Number(t)};const f=(r,e)=>{if(o(r))return!0;const{width:t,height:i}=function(r){return r?Array.isArray(r)?{width:Number(r[0]),height:Number(r[1])}:{width:Number(r.width),height:Number(r.height)}:{width:0,height:0}}(e),n=[],s=Array.isArray(r)?r:[r];for(let r=0;r<s.length;r++){if(!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(s[r].name))return Promise.resolve(!1);n.push(s[r])}return Promise.all(n.map((r=>((r,e,t)=>{const i=window.URL||window.webkitURL;return new Promise((n=>{const s=new Image;s.onerror=()=>n(!1),s.onload=()=>n(s.width===e&&s.height===t),s.src=i.createObjectURL(r)}))})(r,t,i)))).then((r=>r.every((r=>r))))},h=r=>{if(o(r))return!0;const e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(r)?r.every((r=>e.test(String(r)))):e.test(String(r))},p=(r,e)=>{if(o(r))return!0;const t=new RegExp(`\\.(${e.join("|")})$`,"i");return Array.isArray(r)?r.every((r=>t.test(r.name))):t.test(r.name)},d=r=>{if(o(r))return!0;const e=/\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;return Array.isArray(r)?r.every((r=>e.test(r.name))):e.test(r.name)},v=r=>!!o(r)||(Array.isArray(r)?r.every((r=>/^-?[0-9]+$/.test(String(r)))):/^-?[0-9]+$/.test(String(r))),_=(r,e)=>r===A(e,"other"),b=(r,e)=>r!==A(e,"other");function x(r){return null==r}const w=(r,e)=>{const t=A(e,"length");return!x(r)&&("number"==typeof r&&(r=String(r)),r.length||(r=Array.from(r)),r.length===Number(t))},S=(r,e)=>{if(o(r))return!0;const t=A(e,"length");return Array.isArray(r)?r.every((r=>S(r,{length:t}))):[...String(r)].length<=Number(t)},k=(r,e)=>{if(o(r))return!0;const t=A(e,"max");return Array.isArray(r)?r.length>0&&r.every((r=>k(r,{max:t}))):Number(r)<=Number(t)},N=/\+(.+)?/;function z(r){let e=r;return N.test(r)&&(e=r.replace(N,"(\\+$1)?")),new RegExp(e.replace("*",".+"),"i")}const j=(r,e)=>{if(o(r))return!0;e||(e=[]);const t=e.map(z);return Array.isArray(r)?r.every((r=>t.some((e=>e.test(r.type))))):t.some((e=>e.test(r.type)))},E=(r,e)=>{if(o(r))return!0;const t=A(e,"length");return Array.isArray(r)?r.every((r=>E(r,{length:t}))):[...String(r)].length>=Number(t)},R=(r,e)=>{if(o(r))return!0;const t=A(e,"min");return Array.isArray(r)?r.length>0&&r.every((r=>R(r,{min:t}))):Number(r)>=Number(t)},B=(r,e)=>!!o(r)||(Array.isArray(r)?r.every((r=>B(r,e))):Array.from(e).some((e=>e==r))),F=(r,e)=>!!o(r)||!B(r,e),O=/^[٠١٢٣٤٥٦٧٨٩]+$/,V=/^[0-9]+$/,q=r=>{if(o(r))return!0;const e=r=>{const e=String(r);return V.test(e)||O.test(e)};return Array.isArray(r)?r.every(e):e(r)},C=(r,e)=>{if(o(r))return!0;let t=A(e,"regex");return"string"==typeof t&&(t=new RegExp(t)),Array.isArray(r)?r.every((r=>C(r,{regex:t}))):t.test(String(r))},D=r=>{return!x(r)&&(e=r,!Array.isArray(e)||0!==e.length)&&!1!==r&&!!String(r).trim().length;var e},L=(r,e)=>{if(o(r))return!0;let t=A(e,"size");if(t=Number(t),isNaN(t))return!1;const i=1024*t;if(!Array.isArray(r))return r.size<=i;for(let e=0;e<r.length;e++)if(r[e].size>i)return!1;return!0},P=(r,e)=>{var t;if(o(r))return!0;let i=A(e,"pattern");"string"==typeof i&&(i=new RegExp(i));try{new URL(r)}catch(r){return!1}return null===(t=null==i?void 0:i.test(r))||void 0===t||t};const T={alpha_dash:l,alpha_num:y,alpha_spaces:c,alpha:$,between:g,confirmed:m,digits:Z,dimensions:f,email:h,ext:p,image:d,integer:v,is_not:b,is:_,length:w,max_value:k,max:S,mimes:j,min_value:R,min:E,not_one_of:F,numeric:q,one_of:B,regex:C,required:D,size:L,url:P};r.alpha=$,r.alpha_dash=l,r.alpha_num=y,r.alpha_spaces=c,r.between=g,r.confirmed=m,r.default=T,r.digits=Z,r.dimensions=f,r.email=h,r.ext=p,r.image=d,r.integer=v,r.is=_,r.is_not=b,r.length=w,r.max=S,r.max_value=k,r.mimes=j,r.min=E,r.min_value=R,r.not_one_of=F,r.numeric=q,r.one_of=B,r.regex=C,r.required=D,r.size=L,r.toTypedSchema=function(r){return{__type:"VVTypedSchema",async parse(e){if("string"==typeof r){return{errors:[{errors:(await t.validate(e,r)).errors}]}}const i=await t.validateObject(r,e);return{errors:(n=i.errors,Object.keys(n)).map((r=>{var e;return{path:r,errors:(null===(e=i.results[r])||void 0===e?void 0:e.errors)||[]}}))};var n}}},r.url=P,Object.defineProperty(r,"__esModule",{value:!0})}));