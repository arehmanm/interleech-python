(function(){var c=document,d="length",e=" med Google \u00d6vers\u00e4tt?",f=".",k="Drivs av ",l="Google har \u00f6versatt den h\u00e4r sidan automatiskt till: ",m="Inaktivera f\u00f6r: ",n="Inaktivera \u00f6vers\u00e4ttning av ",p="Vill du \u00f6vers\u00e4tta den h\u00e4r sidan till: ",q="Visa sidan p\u00e5: ",r="var ",s="\u00d6versatt till: ",t="\u00d6vers\u00e4tt",u="\u00d6vers\u00e4tt allt till ",v=this;
function w(a,y){var g=a.split(f),b=v;g[0]in b||!b.execScript||b.execScript(r+g[0]);for(var h;g[d]&&(h=g.shift());)g[d]||void 0===y?b[h]?b=b[h]:b=b[h]={}:b[h]=y};var x={0:t,1:"Avbryt",2:"St\u00e4ng",3:function(a){return l+a},4:function(a){return s+a},5:"Fel: Servern kunde inte slutf\u00f6ra din beg\u00e4ran. F\u00f6rs\u00f6k igen senare.",6:"L\u00e4s mer",7:function(a){return k+a},8:t,9:"\u00d6vers\u00e4ttning p\u00e5g\u00e5r",10:function(a){return p+(a+e)},11:function(a){return q+a},12:"Visa originalet",13:"N\u00e4r inneh\u00e5llet i den h\u00e4r lokala filen skickas till Google f\u00f6r \u00f6vers\u00e4ttning anv\u00e4nds en s\u00e4ker anslutning.",14:"N\u00e4r inneh\u00e5llet p\u00e5 den h\u00e4r s\u00e4kra sidan skickas till Google f\u00f6r \u00f6vers\u00e4ttning anv\u00e4nds en s\u00e4ker anslutning.",
15:"N\u00e4r inneh\u00e5llet p\u00e5 den h\u00e4r intran\u00e4tsidan skickas till Google f\u00f6r \u00f6vers\u00e4ttning anv\u00e4nds en s\u00e4ker anslutning.",16:"V\u00e4lj spr\u00e5k",17:function(a){return n+a},18:function(a){return m+a},19:"D\u00f6lj alltid",20:"K\u00e4lltext:",21:"Bidra med en b\u00e4ttre \u00f6vers\u00e4ttning",22:"Bidra",23:"\u00d6vers\u00e4tt alla",24:"\u00c5terst\u00e4ll alla",25:"Avbryt alla",26:"\u00d6vers\u00e4tt avsnitten till mitt spr\u00e5k",27:function(a){return u+
a},28:"Visa originalspr\u00e5k",29:"Alternativ",30:"Inaktivera \u00f6vers\u00e4ttning f\u00f6r den h\u00e4r webbplatsen",31:null,32:"Visa alternativa \u00f6vers\u00e4ttningar",33:"Klicka p\u00e5 orden om du vill visa alternativa \u00f6vers\u00e4ttningar",34:"Anv\u00e4nd",35:"H\u00e5ll ned Skift-tangenten och dra om du vill \u00e4ndra ordning",36:"Klicka om du vill visa alternativa \u00f6vers\u00e4ttningar",37:"Om du vill \u00e4ndra ordning p\u00e5 orden ovan h\u00e5ller du ned Skift-tangenten samtidigt som du klickar p\u00e5 orden och drar runt dem.",
38:"Tack f\u00f6r att du bidrar med ditt \u00f6vers\u00e4ttningsf\u00f6rslag till Google Translate.",39:"Hantera \u00f6vers\u00e4ttning f\u00f6r den h\u00e4r webbplatsen",40:"Klicka p\u00e5 ett ord om du vill visa alternativa \u00f6vers\u00e4ttningar, eller dubbelklicka f\u00f6r att redigera direkt",41:"K\u00e4lltext",42:t,43:t,44:"Din \u00e4ndring har skickats in.",45:"Fel: Webbsidans spr\u00e5k st\u00f6ds inte."};var z=window.google&&google.translate&&google.translate._const;
if(z){var A;n:{for(var B=[],C=["20,0.01,20140601"],D=0;D<C[d];++D){var E=C[D].split(","),F=E[0];if(F){var G=Number(E[1]);if(G&&!(0.1<G||0>G)){var H=Number(E[2]),I=new Date,J=1E4*I.getFullYear()+100*(I.getMonth()+1)+I.getDate();!H||H<J||B.push({version:F,a:G,b:H})}}}for(var K=0,L=window.location.href.match(/google\.translate\.element\.random=([\d\.]+)/),M=Number(L&&L[1])||Math.random(),D=0;D<B[d];++D){var N=B[D],K=K+N.a;if(1<=K)break;if(M<K){A=N.version;break n}}A="23"}var O="/translate_static/js/element/%s/element_main.js".replace("%s",
A);if("0"==A){var P=" translate_static js element %s element_main.js".split(" ");P[P[d]-1]="main_sv.js";O=P.join("/").replace("%s",A)}if(z._cjlc)z._cjlc(z._pas+z._pah+O);else{var Q=z._pas+z._pah+O,R=c.createElement("script");R.type="text/javascript";R.charset="UTF-8";R.src=Q;var S=c.getElementsByTagName("head")[0];S||(S=c.body.parentNode.appendChild(c.createElement("head")));S.appendChild(R)}w("google.translate.m",x);w("google.translate.v",A)};})()