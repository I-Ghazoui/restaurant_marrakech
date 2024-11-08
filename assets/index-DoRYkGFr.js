(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=n(a);fetch(a.href,s)}})();const Ve=`
  <header>
    <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
      <a href="/" class="flex items-center space-x-2">
        <img src="/logo.svg" alt="Restaurant Marrakech" class="h-12 w-auto">
        <span class="font-display text-2xl font-bold text-secondary">Restaurant Marrakech</span>
      </a>
      <div class="hidden md:flex items-center space-x-8">
        <a href="/" class="nav-link">Accueil</a>
        <a href="#menu" class="nav-link">Menu</a>
        <a href="#about" class="nav-link">À Propos</a>
        <a href="#contact" class="nav-link">Contact</a>
        <a href="#order" class="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors duration-300">Commander</a>
      </div>
      <button class="md:hidden text-secondary" id="mobile-menu-button">
        <i class="fas fa-bars text-2xl"></i>
      </button>
    </nav>
    <div class="md:hidden hidden" id="mobile-menu">
      <div class="px-4 py-3 space-y-4">
        <a href="/" class="block nav-link">Accueil</a>
        <a href="#menu" class="block nav-link">Menu</a>
        <a href="#about" class="block nav-link">À Propos</a>
        <a href="#contact" class="block nav-link">Contact</a>
        <a href="#order" class="block bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors duration-300 text-center">Commander</a>
      </div>
    </div>
  </header>
`,Be=`
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Nos Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="service-card">
          <div class="icon-wrapper">
            <i class="fas fa-leaf"></i>
          </div>
          <h3>Options Végétariennes</h3>
          <p>Large sélection de plats végétariens savoureux</p>
        </div>
        <div class="service-card">
          <div class="icon-wrapper">
            <i class="fas fa-clock"></i>
          </div>
          <h3>Livraison Rapide</h3>
          <p>Service de livraison efficace à Narbonne</p>
        </div>
        <div class="service-card">
          <div class="icon-wrapper">
            <i class="fas fa-utensils"></i>
          </div>
          <h3>Cuisine Traditionnelle</h3>
          <p>Recettes authentiques marocaines</p>
        </div>
        <div class="service-card">
          <div class="icon-wrapper">
            <i class="fas fa-calendar-alt"></i>
          </div>
          <h3>Événements Privés</h3>
          <p>Organisation de repas de groupe</p>
        </div>
      </div>
    </div>
  </section>
`,$e=`
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Nos Plats Préférés</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="favorite-dish-card group">
          <div class="relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1585016495481-91613a3ab1bc?auto=format&fit=crop&w=800&q=80" alt="Couscous Royal" class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p class="text-white">Notre couscous signature aux légumes frais, agneau tendre, merguez épicées et poulet mariné</p>
            </div>
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-xl font-bold mb-2">Couscous Royal</h3>
            <div class="flex justify-between items-center">
              <p class="text-primary font-semibold text-xl">22€</p>
              <button class="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors duration-300">Commander</button>
            </div>
          </div>
        </div>
        <div class="favorite-dish-card group">
          <div class="relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?auto=format&fit=crop&w=800&q=80" alt="Tajine d'Agneau" class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p class="text-white">Tajine d'agneau aux pruneaux et amandes, mijoté pendant des heures avec nos épices maison</p>
            </div>
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-xl font-bold mb-2">Tajine d'Agneau</h3>
            <div class="flex justify-between items-center">
              <p class="text-primary font-semibold text-xl">24€</p>
              <button class="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors duration-300">Commander</button>
            </div>
          </div>
        </div>
        <div class="favorite-dish-card group">
          <div class="relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?auto=format&fit=crop&w=800&q=80" alt="Pastilla au Poulet" class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p class="text-white">Pastilla croustillante au poulet et aux amandes, parfumée à la cannelle et au sucre glace</p>
            </div>
          </div>
          <div class="p-6 bg-white">
            <h3 class="text-xl font-bold mb-2">Pastilla au Poulet</h3>
            <div class="flex justify-between items-center">
              <p class="text-primary font-semibold text-xl">20€</p>
              <button class="bg-primary text-white px-4 py-2 rounded-full hover:bg-secondary transition-colors duration-300">Commander</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`,qe=`
  <footer class="bg-secondary text-white pt-16 pb-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <img src="/logo-white.svg" alt="Restaurant Marrakech" class="h-12 w-auto mb-4">
          <p class="text-gray-300">Une expérience culinaire authentique marocaine au cœur de Narbonne.</p>
        </div>
        <div>
          <h3 class="text-xl font-display font-bold mb-4">Navigation</h3>
          <ul class="space-y-2">
            <li><a href="/" class="hover:text-primary transition-colors">Accueil</a></li>
            <li><a href="/menu" class="hover:text-primary transition-colors">Menu</a></li>
            <li><a href="/about" class="hover:text-primary transition-colors">À Propos</a></li>
            <li><a href="/contact" class="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-display font-bold mb-4">Contact</h3>
          <ul class="space-y-2">
            <li><i class="fas fa-map-marker-alt mr-2"></i>7 place du forum, 11100 Narbonne</li>
            <li><i class="fas fa-phone mr-2"></i>+33 4 00 00 00 00</li>
            <li><i class="fas fa-envelope mr-2"></i>contact@restaurantmarrakech.fr</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-display font-bold mb-4">Suivez-nous</h3>
          <div class="flex space-x-4">
            <a href="https://facebook.com/restaurantmarrakech" class="text-2xl hover:text-primary transition-colors">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com/restaurantmarrakech" class="text-2xl hover:text-primary transition-colors">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://snapchat.com/add/restmarrakech" class="text-2xl hover:text-primary transition-colors">
              <i class="fab fa-snapchat"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
        <p>&copy; ${new Date().getFullYear()} Restaurant Marrakech. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
`,Wt=()=>{};let Tt={},de={},pe=null,he={mark:Wt,measure:Wt};try{typeof window<"u"&&(Tt=window),typeof document<"u"&&(de=document),typeof MutationObserver<"u"&&(pe=MutationObserver),typeof performance<"u"&&(he=performance)}catch{}const{userAgent:Xt=""}=Tt.navigator||{},I=Tt,p=de,Gt=pe,at=he;I.document;const O=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",ge=~Xt.indexOf("MSIE")||~Xt.indexOf("Trident/");var h="classic",be="duotone",v="sharp",y="sharp-duotone",Ke=[h,be,v,y],Ze={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Vt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Qe=["kit"],Je=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,tn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,en={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},nn={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},an={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},rn={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},sn={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},on={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},ve={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},cn=["solid","regular","light","thin","duotone","brands"],ye=[1,2,3,4,5,6,7,8,9,10],ln=ye.concat([11,12,13,14,15,16,17,18,19,20]),q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},fn=[...Object.keys(rn),...cn,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY].concat(ye.map(t=>"".concat(t,"x"))).concat(ln.map(t=>"w-".concat(t))),un={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},mn={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},dn={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Bt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const P="___FONT_AWESOME___",vt=16,xe="fa",ke="svg-inline--fa",Y="data-fa-i2svg",yt="data-fa-pseudo-element",pn="data-fa-pseudo-element-pending",It="data-prefix",_t="data-icon",$t="fontawesome-i2svg",hn="async",gn=["HTML","HEAD","STYLE","SCRIPT"],Ae=(()=>{try{return!0}catch{return!1}})(),we=[h,v,y];function et(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[h]}})}const Ce={...ve};Ce[h]={...ve[h],...Vt.kit,...Vt["kit-duotone"]};const D=et(Ce),xt={...on};xt[h]={...xt[h],...Bt.kit,...Bt["kit-duotone"]};const J=et(xt),kt={...sn};kt[h]={...kt[h],...dn.kit};const j=et(kt),At={...an};At[h]={...At[h],...mn.kit};const bn=et(At),vn=Je,Ee="fa-layers-text",yn=tn,xn={...Ze};et(xn);const kn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dt=q,V=new Set;Object.keys(J[h]).map(V.add.bind(V));Object.keys(J[v]).map(V.add.bind(V));Object.keys(J[y]).map(V.add.bind(V));const An=[...Qe,...fn],Z=I.FontAwesomeConfig||{};function wn(t){var e=p.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Cn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const a=Cn(wn(n));a!=null&&(Z[r]=a)});const Ne={styleDefault:"solid",familyDefault:"classic",cssPrefix:xe,replacementClass:ke,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z.familyPrefix&&(Z.cssPrefix=Z.familyPrefix);const B={...Ne,...Z};B.autoReplaceSvg||(B.observeMutations=!1);const f={};Object.keys(Ne).forEach(t=>{Object.defineProperty(f,t,{enumerable:!0,set:function(e){B[t]=e,Q.forEach(n=>n(f))},get:function(){return B[t]}})});Object.defineProperty(f,"familyPrefix",{enumerable:!0,set:function(t){B.cssPrefix=t,Q.forEach(e=>e(f))},get:function(){return B.cssPrefix}});I.FontAwesomeConfig=f;const Q=[];function En(t){return Q.push(t),()=>{Q.splice(Q.indexOf(t),1)}}const L=vt,w={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Nn(t){if(!t||!O)return;const e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=p.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const s=n[a],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=s)}return p.head.insertBefore(e,r),t}const Pn="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tt(){let t=12,e="";for(;t-- >0;)e+=Pn[Math.random()*62|0];return e}function $(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ft(t){return t.classList?$(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Pe(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Sn(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Pe(t[n]),'" '),"").trim()}function ct(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function zt(t){return t.size!==w.size||t.x!==w.x||t.y!==w.y||t.rotate!==w.rotate||t.flipX||t.flipY}function On(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const a={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),o="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(i," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:c,path:l}}function Mn(t){let{transform:e,width:n=vt,height:r=vt,startCentered:a=!1}=t,s="";return a&&ge?s+="translate(".concat(e.x/L-n/2,"em, ").concat(e.y/L-r/2,"em) "):a?s+="translate(calc(-50% + ".concat(e.x/L,"em), calc(-50% + ").concat(e.y/L,"em)) "):s+="translate(".concat(e.x/L,"em, ").concat(e.y/L,"em) "),s+="scale(".concat(e.size/L*(e.flipX?-1:1),", ").concat(e.size/L*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var Ln=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Se(){const t=xe,e=ke,n=f.cssPrefix,r=f.replacementClass;let a=Ln;if(n!==t||r!==e){const s=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),o=new RegExp("\\.".concat(e),"g");a=a.replace(s,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(o,".".concat(r))}return a}let qt=!1;function pt(){f.autoAddCss&&!qt&&(Nn(Se()),qt=!0)}var Tn={mixout(){return{dom:{css:Se,insertCss:pt}}},hooks(){return{beforeDOMElementCreation(){pt()},beforeI2svg(){pt()}}}};const S=I||{};S[P]||(S[P]={});S[P].styles||(S[P].styles={});S[P].hooks||(S[P].hooks={});S[P].shims||(S[P].shims=[]);var C=S[P];const Oe=[],Me=function(){p.removeEventListener("DOMContentLoaded",Me),it=1,Oe.map(t=>t())};let it=!1;O&&(it=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),it||p.addEventListener("DOMContentLoaded",Me));function In(t){O&&(it?setTimeout(t,0):Oe.push(t))}function nt(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?Pe(t):"<".concat(e," ").concat(Sn(n),">").concat(r.map(nt).join(""),"</").concat(e,">")}function Kt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ht=function(e,n,r,a){var s=Object.keys(e),i=s.length,o=n,c,l,u;for(r===void 0?(c=1,u=e[s[0]]):(c=0,u=r);c<i;c++)l=s[c],u=o(u,e[l],l,e);return u};function _n(t){const e=[];let n=0;const r=t.length;for(;n<r;){const a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const s=t.charCodeAt(n++);(s&64512)==56320?e.push(((a&1023)<<10)+(s&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function wt(t){const e=_n(t);return e.length===1?e[0].toString(16):null}function Fn(t,e){const n=t.length;let r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Zt(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ct(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Zt(e);typeof C.hooks.addPack=="function"&&!r?C.hooks.addPack(t,Zt(e)):C.styles[t]={...C.styles[t]||{},...a},t==="fas"&&Ct("fa",e)}const{styles:R,shims:zn}=C,Rn={[h]:Object.values(j[h]),[v]:Object.values(j[v]),[y]:Object.values(j[y])};let Rt=null,Le={},Te={},Ie={},_e={},Fe={};const Dn={[h]:Object.keys(D[h]),[v]:Object.keys(D[v]),[y]:Object.keys(D[y])};function jn(t){return~An.indexOf(t)}function Yn(t,e){const n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!jn(a)?a:null}const ze=()=>{const t=r=>ht(R,(a,s,i)=>(a[i]=ht(s,r,{}),a),{});Le=t((r,a,s)=>(a[3]&&(r[a[3]]=s),a[2]&&a[2].filter(o=>typeof o=="number").forEach(o=>{r[o.toString(16)]=s}),r)),Te=t((r,a,s)=>(r[s]=s,a[2]&&a[2].filter(o=>typeof o=="string").forEach(o=>{r[o]=s}),r)),Fe=t((r,a,s)=>{const i=a[2];return r[s]=s,i.forEach(o=>{r[o]=s}),r});const e="far"in R||f.autoFetchSvg,n=ht(zn,(r,a)=>{const s=a[0];let i=a[1];const o=a[2];return i==="far"&&!e&&(i="fas"),typeof s=="string"&&(r.names[s]={prefix:i,iconName:o}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:i,iconName:o}),r},{names:{},unicodes:{}});Ie=n.names,_e=n.unicodes,Rt=lt(f.styleDefault,{family:f.familyDefault})};En(t=>{Rt=lt(t.styleDefault,{family:f.familyDefault})});ze();function Dt(t,e){return(Le[t]||{})[e]}function Un(t,e){return(Te[t]||{})[e]}function T(t,e){return(Fe[t]||{})[e]}function Re(t){return Ie[t]||{prefix:null,iconName:null}}function Hn(t){const e=_e[t],n=Dt("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function _(){return Rt}const jt=()=>({prefix:null,iconName:null,rest:[]});function lt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=h}=e,r=D[n][t],a=J[n][t]||J[n][r],s=t in C.styles?t:null;return a||s||null}const Wn={[h]:Object.keys(j[h]),[v]:Object.keys(j[v]),[y]:Object.keys(j[y])};function ft(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[h]:"".concat(f.cssPrefix,"-").concat(h),[v]:"".concat(f.cssPrefix,"-").concat(v),[y]:"".concat(f.cssPrefix,"-").concat(y)};let a=null,s=h;const i=Ke.filter(c=>c!==be);i.forEach(c=>{(t.includes(r[c])||t.some(l=>Wn[c].includes(l)))&&(s=c)});const o=t.reduce((c,l)=>{const u=Yn(f.cssPrefix,l);if(R[l]?(l=Rn[s].includes(l)?bn[s][l]:l,a=l,c.prefix=l):Dn[s].indexOf(l)>-1?(a=l,c.prefix=lt(l,{family:s})):u?c.iconName=u:l!==f.replacementClass&&!i.some(d=>l===r[d])&&c.rest.push(l),!n&&c.prefix&&c.iconName){const d=a==="fa"?Re(c.iconName):{},m=T(c.prefix,c.iconName);d.prefix&&(a=null),c.iconName=d.iconName||m||c.iconName,c.prefix=d.prefix||c.prefix,c.prefix==="far"&&!R.far&&R.fas&&!f.autoFetchSvg&&(c.prefix="fas")}return c},jt());return(t.includes("fa-brands")||t.includes("fab"))&&(o.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(o.prefix="fad"),!o.prefix&&s===v&&(R.fass||f.autoFetchSvg)&&(o.prefix="fass",o.iconName=T(o.prefix,o.iconName)||o.iconName),!o.prefix&&s===y&&(R.fasds||f.autoFetchSvg)&&(o.prefix="fasds",o.iconName=T(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||a==="fa")&&(o.prefix=_()||"fas"),o}class Xn{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(s=>{this.definitions[s]={...this.definitions[s]||{},...a[s]},Ct(s,a[s]);const i=j[h][s];i&&Ct(i,a[s]),ze()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:s,iconName:i,icon:o}=r[a],c=o[2];e[s]||(e[s]={}),c.length>0&&c.forEach(l=>{typeof l=="string"&&(e[s][l]=o)}),e[s][i]=o}),e}}let Qt=[],X={};const G={},Gn=Object.keys(G);function Vn(t,e){let{mixoutsTo:n}=e;return Qt=t,X={},Object.keys(G).forEach(r=>{Gn.indexOf(r)===-1&&delete G[r]}),Qt.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(s=>{typeof a[s]=="function"&&(n[s]=a[s]),typeof a[s]=="object"&&Object.keys(a[s]).forEach(i=>{n[s]||(n[s]={}),n[s][i]=a[s][i]})}),r.hooks){const s=r.hooks();Object.keys(s).forEach(i=>{X[i]||(X[i]=[]),X[i].push(s[i])})}r.provides&&r.provides(G)}),n}function Et(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(X[t]||[]).forEach(i=>{e=i.apply(null,[e,...r])}),e}function U(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(X[t]||[]).forEach(s=>{s.apply(null,n)})}function F(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return G[t]?G[t].apply(null,e):void 0}function Nt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||_();if(e)return e=T(n,e)||e,Kt(De.definitions,n,e)||Kt(C.styles,n,e)}const De=new Xn,Bn=()=>{f.autoReplaceSvg=!1,f.observeMutations=!1,U("noAuto")},$n={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return O?(U("beforeI2svg",t),F("pseudoElements2svg",t),F("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;f.autoReplaceSvg===!1&&(f.autoReplaceSvg=!0),f.observeMutations=!0,In(()=>{Kn({autoReplaceSvgRoot:e}),U("watch",t)})}},qn={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:T(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=lt(t[0]);return{prefix:n,iconName:T(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(f.cssPrefix,"-"))>-1||t.match(vn))){const e=ft(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||_(),iconName:T(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=_();return{prefix:e,iconName:T(e,t)||t}}}},x={noAuto:Bn,config:f,dom:$n,parse:qn,library:De,findIconDefinition:Nt,toHtml:nt},Kn=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=p}=t;(Object.keys(C.styles).length>0||f.autoFetchSvg)&&O&&f.autoReplaceSvg&&x.dom.i2svg({node:e})};function ut(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>nt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!O)return;const n=p.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Zn(t){let{children:e,main:n,mask:r,attributes:a,styles:s,transform:i}=t;if(zt(i)&&n.found&&!r.found){const{width:o,height:c}=n,l={x:o/c/2,y:.5};a.style=ct({...s,"transform-origin":"".concat(l.x+i.x/16,"em ").concat(l.y+i.y/16,"em")})}return[{tag:"svg",attributes:a,children:e}]}function Qn(t){let{prefix:e,iconName:n,children:r,attributes:a,symbol:s}=t;const i=s===!0?"".concat(e,"-").concat(f.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:i},children:r}]}]}function Yt(t){const{icons:{main:e,mask:n},prefix:r,iconName:a,transform:s,symbol:i,title:o,maskId:c,titleId:l,extra:u,watchable:d=!1}=t,{width:m,height:g}=n.found?n:e,M=r==="fak",z=[f.replacementClass,a?"".concat(f.cssPrefix,"-").concat(a):""].filter(W=>u.classes.indexOf(W)===-1).filter(W=>W!==""||!!W).concat(u.classes).join(" ");let k={children:[],attributes:{...u.attributes,"data-prefix":r,"data-icon":a,class:z,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(g)}};const N=M&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/g*16*.0625,"em")}:{};d&&(k.attributes[Y]=""),o&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(l||tt())},children:[o]}),delete k.attributes.title);const b={...k,prefix:r,iconName:a,main:e,mask:n,maskId:c,transform:s,symbol:i,styles:{...N,...u.styles}},{children:A,attributes:H}=n.found&&e.found?F("generateAbstractMask",b)||{children:[],attributes:{}}:F("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=A,b.attributes=H,i?Qn(b):Zn(b)}function Jt(t){const{content:e,width:n,height:r,transform:a,title:s,extra:i,watchable:o=!1}=t,c={...i.attributes,...s?{title:s}:{},class:i.classes.join(" ")};o&&(c[Y]="");const l={...i.styles};zt(a)&&(l.transform=Mn({transform:a,startCentered:!0,width:n,height:r}),l["-webkit-transform"]=l.transform);const u=ct(l);u.length>0&&(c.style=u);const d=[];return d.push({tag:"span",attributes:c,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function Jn(t){const{content:e,title:n,extra:r}=t,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},s=ct(r.styles);s.length>0&&(a.style=s);const i=[];return i.push({tag:"span",attributes:a,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:gt}=C;function Pt(t){const e=t[0],n=t[1],[r]=t.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(f.cssPrefix,"-").concat(dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(dt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(f.cssPrefix,"-").concat(dt.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:a}}const ta={found:!1,width:512,height:512};function ea(t,e){!Ae&&!f.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function St(t,e){let n=e;return e==="fa"&&f.styleDefault!==null&&(e=_()),new Promise((r,a)=>{if(n==="fa"){const s=Re(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&gt[e]&&gt[e][t]){const s=gt[e][t];return r(Pt(s))}ea(t,e),r({...ta,icon:f.showMissingIcons&&t?F("missingIconAbstract")||{}:{}})})}const te=()=>{},Ot=f.measurePerformance&&at&&at.mark&&at.measure?at:{mark:te,measure:te},K='FA "6.6.0"',na=t=>(Ot.mark("".concat(K," ").concat(t," begins")),()=>je(t)),je=t=>{Ot.mark("".concat(K," ").concat(t," ends")),Ot.measure("".concat(K," ").concat(t),"".concat(K," ").concat(t," begins"),"".concat(K," ").concat(t," ends"))};var Ut={begin:na,end:je};const rt=()=>{};function ee(t){return typeof(t.getAttribute?t.getAttribute(Y):null)=="string"}function aa(t){const e=t.getAttribute?t.getAttribute(It):null,n=t.getAttribute?t.getAttribute(_t):null;return e&&n}function ra(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(f.replacementClass)}function sa(){return f.autoReplaceSvg===!0?st.replace:st[f.autoReplaceSvg]||st.replace}function ia(t){return p.createElementNS("http://www.w3.org/2000/svg",t)}function oa(t){return p.createElement(t)}function Ye(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?ia:oa}=e;if(typeof t=="string")return p.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(s){r.setAttribute(s,t.attributes[s])}),(t.children||[]).forEach(function(s){r.appendChild(Ye(s,{ceFn:n}))}),r}function ca(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const st={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Ye(n),e)}),e.getAttribute(Y)===null&&f.keepOriginalSource){let n=p.createComment(ca(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ft(e).indexOf(f.replacementClass))return st.replace(t);const r=new RegExp("".concat(f.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const s=n[0].attributes.class.split(" ").reduce((i,o)=>(o===f.replacementClass||o.match(r)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});n[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}const a=n.map(s=>nt(s)).join(`
`);e.setAttribute(Y,""),e.innerHTML=a}};function ne(t){t()}function Ue(t,e){const n=typeof e=="function"?e:rt;if(t.length===0)n();else{let r=ne;f.mutateApproach===hn&&(r=I.requestAnimationFrame||ne),r(()=>{const a=sa(),s=Ut.begin("mutate");t.map(a),s(),n()})}}let Ht=!1;function He(){Ht=!0}function Mt(){Ht=!1}let ot=null;function ae(t){if(!Gt||!f.observeMutations)return;const{treeCallback:e=rt,nodeCallback:n=rt,pseudoElementsCallback:r=rt,observeMutationsRoot:a=p}=t;ot=new Gt(s=>{if(Ht)return;const i=_();$(s).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!ee(o.addedNodes[0])&&(f.searchPseudoElements&&r(o.target),e(o.target)),o.type==="attributes"&&o.target.parentNode&&f.searchPseudoElements&&r(o.target.parentNode),o.type==="attributes"&&ee(o.target)&&~kn.indexOf(o.attributeName))if(o.attributeName==="class"&&aa(o.target)){const{prefix:c,iconName:l}=ft(Ft(o.target));o.target.setAttribute(It,c||i),l&&o.target.setAttribute(_t,l)}else ra(o.target)&&n(o.target)})}),O&&ot.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function la(){ot&&ot.disconnect()}function fa(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,a)=>{const s=a.split(":"),i=s[0],o=s.slice(1);return i&&o.length>0&&(r[i]=o.join(":").trim()),r},{})),n}function ua(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let a=ft(Ft(t));return a.prefix||(a.prefix=_()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Un(a.prefix,t.innerText)||Dt(a.prefix,wt(t.innerText))),!a.iconName&&f.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function ma(t){const e=$(t.attributes).reduce((a,s)=>(a.name!=="class"&&a.name!=="style"&&(a[s.name]=s.value),a),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return f.autoA11y&&(n?e["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(r||tt()):(e["aria-hidden"]="true",e.focusable="false")),e}function da(){return{iconName:null,title:null,titleId:null,prefix:null,transform:w,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function re(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=ua(t),s=ma(t),i=Et("parseNodeAttributes",{},t);let o=e.styleParser?fa(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:w,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:o,attributes:s},...i}}const{styles:pa}=C;function We(t){const e=f.autoReplaceSvg==="nest"?re(t,{styleParser:!1}):re(t);return~e.extra.classes.indexOf(Ee)?F("generateLayersText",t,e):F("generateSvgReplacementMutation",t,e)}let E=new Set;we.map(t=>{E.add("fa-".concat(t))});Object.keys(D[h]).map(E.add.bind(E));Object.keys(D[v]).map(E.add.bind(E));Object.keys(D[y]).map(E.add.bind(E));E=[...E];function se(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!O)return Promise.resolve();const n=p.documentElement.classList,r=u=>n.add("".concat($t,"-").concat(u)),a=u=>n.remove("".concat($t,"-").concat(u)),s=f.autoFetchSvg?E:we.map(u=>"fa-".concat(u)).concat(Object.keys(pa));s.includes("fa")||s.push("fa");const i=[".".concat(Ee,":not([").concat(Y,"])")].concat(s.map(u=>".".concat(u,":not([").concat(Y,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=$(t.querySelectorAll(i))}catch{}if(o.length>0)r("pending"),a("complete");else return Promise.resolve();const c=Ut.begin("onTree"),l=o.reduce((u,d)=>{try{const m=We(d);m&&u.push(m)}catch(m){Ae||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise((u,d)=>{Promise.all(l).then(m=>{Ue(m,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),c(),u()})}).catch(m=>{c(),d(m)})})}function ha(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;We(t).then(n=>{n&&Ue([n],e)})}function ga(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:Nt(e||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:Nt(a||{})),t(r,{...n,mask:a})}}const ba=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=w,symbol:r=!1,mask:a=null,maskId:s=null,title:i=null,titleId:o=null,classes:c=[],attributes:l={},styles:u={}}=e;if(!t)return;const{prefix:d,iconName:m,icon:g}=t;return ut({type:"icon",...t},()=>(U("beforeDOMElementCreation",{iconDefinition:t,params:e}),f.autoA11y&&(i?l["aria-labelledby"]="".concat(f.replacementClass,"-title-").concat(o||tt()):(l["aria-hidden"]="true",l.focusable="false")),Yt({icons:{main:Pt(g),mask:a?Pt(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:{...w,...n},symbol:r,title:i,maskId:s,titleId:o,extra:{attributes:l,styles:u,classes:c}})))};var va={mixout(){return{icon:ga(ba)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=se,t.nodeCallback=ha,t}}},provides(t){t.i2svg=function(e){const{node:n=p,callback:r=()=>{}}=e;return se(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:a,titleId:s,prefix:i,transform:o,symbol:c,mask:l,maskId:u,extra:d}=n;return new Promise((m,g)=>{Promise.all([St(r,i),l.iconName?St(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(M=>{let[z,k]=M;m([e,Yt({icons:{main:z,mask:k},prefix:i,iconName:r,transform:o,symbol:c,maskId:u,title:a,titleId:s,extra:d,watchable:!0})])}).catch(g)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:a,transform:s,styles:i}=e;const o=ct(i);o.length>0&&(r.style=o);let c;return zt(s)&&(c=F("generateAbstractTransformGrouping",{main:a,transform:s,containerWidth:a.width,iconWidth:a.width})),n.push(c||a.icon),{children:n,attributes:r}}}},ya={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return ut({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(a=>{Array.isArray(a)?a.map(s=>{r=r.concat(s.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(f.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},xa={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:s={}}=e;return ut({type:"counter",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),Jn({content:t.toString(),title:n,extra:{attributes:a,styles:s,classes:["".concat(f.cssPrefix,"-layers-counter"),...r]}})))}}}},ka={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=w,title:r=null,classes:a=[],attributes:s={},styles:i={}}=e;return ut({type:"text",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:e}),Jt({content:t,transform:{...w,...n},title:r,extra:{attributes:s,styles:i,classes:["".concat(f.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:a,extra:s}=n;let i=null,o=null;if(ge){const c=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();i=l.width/c,o=l.height/c}return f.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([e,Jt({content:e.innerHTML,width:i,height:o,transform:a,title:r,extra:s,watchable:!0})])}}};const Aa=new RegExp('"',"ug"),ie=[1105920,1112319],oe={FontAwesome:{normal:"fas",400:"fas"},...nn,...en,...un},Lt=Object.keys(oe).reduce((t,e)=>(t[e.toLowerCase()]=oe[e],t),{}),wa=Object.keys(Lt).reduce((t,e)=>{const n=Lt[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Ca(t){const e=t.replace(Aa,""),n=Fn(e,0),r=n>=ie[0]&&n<=ie[1],a=e.length===2?e[0]===e[1]:!1;return{value:wt(a?e[0]:e),isSecondary:r||a}}function Ea(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(Lt[n]||{})[a]||wa[n]}function ce(t,e){const n="".concat(pn).concat(e.replace(":","-"));return new Promise((r,a)=>{if(t.getAttribute(n)!==null)return r();const i=$(t.children).filter(m=>m.getAttribute(yt)===e)[0],o=I.getComputedStyle(t,e),c=o.getPropertyValue("font-family"),l=c.match(yn),u=o.getPropertyValue("font-weight"),d=o.getPropertyValue("content");if(i&&!l)return t.removeChild(i),r();if(l&&d!=="none"&&d!==""){const m=o.getPropertyValue("content");let g=Ea(c,u);const{value:M,isSecondary:z}=Ca(m),k=l[0].startsWith("FontAwesome");let N=Dt(g,M),b=N;if(k){const A=Hn(M);A.iconName&&A.prefix&&(N=A.iconName,g=A.prefix)}if(N&&!z&&(!i||i.getAttribute(It)!==g||i.getAttribute(_t)!==b)){t.setAttribute(n,b),i&&t.removeChild(i);const A=da(),{extra:H}=A;H.attributes[yt]=e,St(N,g).then(W=>{const Xe=Yt({...A,icons:{main:W,mask:jt()},prefix:g,iconName:b,extra:H,watchable:!0}),mt=p.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(mt,t.firstChild):t.appendChild(mt),mt.outerHTML=Xe.map(Ge=>nt(Ge)).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Na(t){return Promise.all([ce(t,"::before"),ce(t,"::after")])}function Pa(t){return t.parentNode!==document.head&&!~gn.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(yt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function le(t){if(O)return new Promise((e,n)=>{const r=$(t.querySelectorAll("*")).filter(Pa).map(Na),a=Ut.begin("searchPseudoElements");He(),Promise.all(r).then(()=>{a(),Mt(),e()}).catch(()=>{a(),Mt(),n()})})}var Sa={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=le,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=p}=e;f.searchPseudoElements&&le(n)}}};let fe=!1;var Oa={mixout(){return{dom:{unwatch(){He(),fe=!0}}}},hooks(){return{bootstrap(){ae(Et("mutationObserverCallbacks",{}))},noAuto(){la()},watch(t){const{observeMutationsRoot:e}=t;fe?Mt():ae(Et("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const ue=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),s=a[0];let i=a.slice(1).join("-");if(s&&i==="h")return n.flipX=!0,n;if(s&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(s){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var Ma={mixout(){return{parse:{transform:t=>ue(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=ue(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:a,iconWidth:s}=e;const i={transform:"translate(".concat(a/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),u={transform:"".concat(o," ").concat(c," ").concat(l)},d={transform:"translate(".concat(s/2*-1," -256)")},m={outer:i,inner:u,path:d};return{tag:"g",attributes:{...m.outer},children:[{tag:"g",attributes:{...m.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...m.path}}]}]}}}};const bt={x:0,y:0,width:"100%",height:"100%"};function me(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function La(t){return t.tag==="g"?t.children:[t]}var Ta={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?ft(n.split(" ").map(a=>a.trim())):jt();return r.prefix||(r.prefix=_()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:a,mask:s,maskId:i,transform:o}=e;const{width:c,icon:l}=a,{width:u,icon:d}=s,m=On({transform:o,containerWidth:u,iconWidth:c}),g={tag:"rect",attributes:{...bt,fill:"white"}},M=l.children?{children:l.children.map(me)}:{},z={tag:"g",attributes:{...m.inner},children:[me({tag:l.tag,attributes:{...l.attributes,...m.path},...M})]},k={tag:"g",attributes:{...m.outer},children:[z]},N="mask-".concat(i||tt()),b="clip-".concat(i||tt()),A={tag:"mask",attributes:{...bt,id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[g,k]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:La(d)},A]};return n.push(H,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(N,")"),...bt}}),{children:n,attributes:r}}}},Ia={provides(t){let e=!1;I.matchMedia&&(e=I.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const s={...a,attributeName:"opacity"},i={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||i.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...s,values:"1;0;1;1;0;1;"}}),n.push(i),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...s,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...s,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},_a={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Fa=[Tn,va,ya,xa,ka,Sa,Oa,Ma,Ta,Ia,_a];Vn(Fa,{mixoutsTo:x});x.noAuto;x.config;const za=x.library;x.dom;x.parse;x.findIconDefinition;x.toHtml;x.icon;x.layer;x.text;x.counter;const Ra={prefix:"fas",iconName:"calendar-days",icon:[448,512,["calendar-alt"],"f073","M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z"]},Da=Ra,ja={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Ya={prefix:"fas",iconName:"leaf",icon:[512,512,[],"f06c","M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5l88 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0-72 0s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440l0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"]},Ua={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},Ha={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},Wa={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},Xa={prefix:"fas",iconName:"utensils",icon:[448,512,[127860,61685,"cutlery"],"f2e7","M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"]},Ga={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},Va=Ga,Ba={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},$a={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},qa={prefix:"fab",iconName:"snapchat",icon:[512,512,[62124,"snapchat-ghost"],"f2ab","M496.926,366.6c-3.373-9.176-9.8-14.086-17.112-18.153-1.376-.806-2.641-1.451-3.72-1.947-2.182-1.128-4.414-2.22-6.634-3.373-22.8-12.09-40.609-27.341-52.959-45.42a102.889,102.889,0,0,1-9.089-16.12c-1.054-3.013-1-4.724-.248-6.287a10.221,10.221,0,0,1,2.914-3.038c3.918-2.591,7.96-5.22,10.7-6.993,4.885-3.162,8.754-5.667,11.246-7.44,9.362-6.547,15.909-13.5,20-21.278a42.371,42.371,0,0,0,2.1-35.191c-6.2-16.318-21.613-26.449-40.287-26.449a55.543,55.543,0,0,0-11.718,1.24c-1.029.224-2.059.459-3.063.72.174-11.16-.074-22.94-1.066-34.534-3.522-40.758-17.794-62.123-32.674-79.16A130.167,130.167,0,0,0,332.1,36.443C309.515,23.547,283.91,17,256,17S202.6,23.547,180,36.443a129.735,129.735,0,0,0-33.281,26.783c-14.88,17.038-29.152,38.44-32.673,79.161-.992,11.594-1.24,23.435-1.079,34.533-1-.26-2.021-.5-3.051-.719a55.461,55.461,0,0,0-11.717-1.24c-18.687,0-34.125,10.131-40.3,26.449a42.423,42.423,0,0,0,2.046,35.228c4.105,7.774,10.652,14.731,20.014,21.278,2.48,1.736,6.361,4.24,11.246,7.44,2.641,1.711,6.5,4.216,10.28,6.72a11.054,11.054,0,0,1,3.3,3.311c.794,1.624.818,3.373-.36,6.6a102.02,102.02,0,0,1-8.94,15.785c-12.077,17.669-29.363,32.648-51.434,44.639C32.355,348.608,20.2,352.75,15.069,366.7c-3.868,10.528-1.339,22.506,8.494,32.6a49.137,49.137,0,0,0,12.4,9.387,134.337,134.337,0,0,0,30.342,12.139,20.024,20.024,0,0,1,6.126,2.741c3.583,3.137,3.075,7.861,7.849,14.78a34.468,34.468,0,0,0,8.977,9.127c10.019,6.919,21.278,7.353,33.207,7.811,10.776.41,22.989.881,36.939,5.481,5.778,1.91,11.78,5.605,18.736,9.92C194.842,480.951,217.707,495,255.973,495s61.292-14.123,78.118-24.428c6.907-4.24,12.872-7.9,18.489-9.758,13.949-4.613,26.163-5.072,36.939-5.481,11.928-.459,23.187-.893,33.206-7.812a34.584,34.584,0,0,0,10.218-11.16c3.434-5.84,3.348-9.919,6.572-12.771a18.971,18.971,0,0,1,5.753-2.629A134.893,134.893,0,0,0,476.02,408.71a48.344,48.344,0,0,0,13.019-10.193l.124-.149C498.389,388.5,500.708,376.867,496.926,366.6Zm-34.013,18.277c-20.745,11.458-34.533,10.23-45.259,17.137-9.114,5.865-3.72,18.513-10.342,23.076-8.134,5.617-32.177-.4-63.239,9.858-25.618,8.469-41.961,32.822-88.038,32.822s-62.036-24.3-88.076-32.884c-31-10.255-55.092-4.241-63.239-9.858-6.609-4.563-1.24-17.211-10.341-23.076-10.739-6.907-24.527-5.679-45.26-17.075-13.206-7.291-5.716-11.8-1.314-13.937,75.143-36.381,87.133-92.552,87.666-96.719.645-5.046,1.364-9.014-4.191-14.148-5.369-4.96-29.189-19.7-35.8-24.316-10.937-7.638-15.748-15.264-12.2-24.638,2.48-6.485,8.531-8.928,14.879-8.928a27.643,27.643,0,0,1,5.965.67c12,2.6,23.659,8.617,30.392,10.242a10.749,10.749,0,0,0,2.48.335c3.6,0,4.86-1.811,4.612-5.927-.768-13.132-2.628-38.725-.558-62.644,2.84-32.909,13.442-49.215,26.04-63.636,6.051-6.932,34.484-36.976,88.857-36.976s82.88,29.92,88.931,36.827c12.611,14.421,23.225,30.727,26.04,63.636,2.071,23.919.285,49.525-.558,62.644-.285,4.327,1.017,5.927,4.613,5.927a10.648,10.648,0,0,0,2.48-.335c6.745-1.624,18.4-7.638,30.4-10.242a27.641,27.641,0,0,1,5.964-.67c6.386,0,12.4,2.48,14.88,8.928,3.546,9.374-1.24,17-12.189,24.639-6.609,4.612-30.429,19.343-35.8,24.315-5.568,5.134-4.836,9.1-4.191,14.149.533,4.228,12.511,60.4,87.666,96.718C468.629,373.011,476.119,377.524,462.913,384.877Z"]};za.add(Ua,Va,Wa,Ya,Xa,Da,ja,Ha,$a,Ba,qa);document.querySelector("#app").innerHTML=`
  ${Ve}
  <main>
    <!-- Hero Section -->
    <section class="hero-section flex items-center justify-center text-center text-white">
      <div class="container mx-auto px-4">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Bienvenue au Restaurant Marrakech</h1>
        <p class="text-xl md:text-2xl mb-8">Discover the Authentic Taste of Morocco in Narbonne</p>
        <a href="#menu" class="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-secondary transition-colors duration-300">
          Découvrir Notre Menu
        </a>
      </div>
    </section>

    ${Be}
    ${$e}

    <!-- Contact Section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">Contactez-Nous</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="space-y-6">
              <div class="flex items-center space-x-4">
                <i class="fas fa-map-marker-alt text-primary text-2xl"></i>
                <span>7 place du forum, 11100 Narbonne</span>
              </div>
              <div class="flex items-center space-x-4">
                <i class="fas fa-phone text-primary text-2xl"></i>
                <a href="tel:+33400000000" class="hover:text-primary">+33 4 00 00 00 00</a>
              </div>
              <div class="flex items-center space-x-4">
                <i class="fas fa-envelope text-primary text-2xl"></i>
                <a href="mailto:contact@restaurantmarrakech.fr" class="hover:text-primary">contact@restaurantmarrakech.fr</a>
              </div>
              <div class="flex space-x-6 pt-4">
                <a href="https://facebook.com/restaurantmarrakech" class="social-icon">
                  <i class="fab fa-facebook text-3xl"></i>
                </a>
                <a href="https://instagram.com/restaurantmarrakech" class="social-icon">
                  <i class="fab fa-instagram text-3xl"></i>
                </a>
                <a href="https://snapchat.com/add/restmarrakech" class="social-icon">
                  <i class="fab fa-snapchat text-3xl"></i>
                </a>
              </div>
            </div>
            <div class="h-80 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.6983612065766!2d3.0419!3d43.1839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b1ac5e5c6b8e6d%3A0x5c6b8e6d!2s7%20Pl.%20du%20Forum%2C%2011100%20Narbonne!5e0!3m2!1sen!2sfr!4v1635959123456!5m2!1sen!2sfr"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  ${qe}

  <script>
    document.getElementById('mobile-menu-button')?.addEventListener('click', () => {
      const mobileMenu = document.getElementById('mobile-menu')
      if (mobileMenu) {
        mobileMenu.classList.toggle('hidden')
      }
    })
  <\/script>
`;
