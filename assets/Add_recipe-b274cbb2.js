import{_ as c,i as r,h as _,j as m,o as w,c as h,a as e,w as p,v as d,k as u,l as b,p as k,b as y}from"./index-72d2ae5b.js";import{g as f,b as R,c as z}from"./index.esm2017-66dc5ead.js";const g={apiKey:"AIzaSyDcvt3tNCGlU8YwSBsZQakfo9hiTpmpOuo",authDomain:"foodbuddy-3c448.firebaseapp.com",databaseURL:"https://foodbuddy-3c448.firebaseio.com",projectId:"foodbuddy-3c448",storageBucket:"foodbuddy-3c448.appspot.com",messagingSenderId:"864698295961",appId:"1:864698295961:web:beb2e5b10d1c88b7fd7a08",measurementId:"G-DMB55S2KMY"},S=r(g),I=f(S),v={data(){return{newRecipe:{Nazwa:"",Składniki:[],Kroki:"",Time:"",Typ:"",Poziom:"",Autor:"",PhotoLink:""}}},methods:{async addRecipe(){const s=_();m(s,async o=>{o&&(this.newRecipe.Autor=o.displayName||o.email,this.newRecipe.Składniki=this.ingredientsInput.split(",").map(l=>l.trim()),await R(z(I,"recipes"),this.newRecipe),this.newRecipe={Nazwa:"",Składniki:[],Kroki:"",Autor:""},this.ingredientsInput="")})}}},i=s=>(k("data-v-c0cc0803"),s=s(),y(),s),T=i(()=>e("h1",null,"Dodaj Przepis",-1)),A=i(()=>e("label",null,"Nazwa:",-1)),D=i(()=>e("label",null,"Składniki:",-1)),N=i(()=>e("label",null,"Kroki:",-1)),V=i(()=>e("label",null,"Czas przygotowania w minutach:",-1)),x=i(()=>e("label",null,"Typ:",-1)),B=i(()=>e("option",null,"Mięsne",-1)),K=i(()=>e("option",null,"Bezmięsne",-1)),U=i(()=>e("option",null,"Wegańskie",-1)),j=i(()=>e("option",null,"Wegetariańskie",-1)),M=[B,K,U,j],P=i(()=>e("label",null,"Poziom Trudności",-1)),q=i(()=>e("option",null,"Łatwy",-1)),C=i(()=>e("option",null,"Średni",-1)),L=i(()=>e("option",null,"Trudny",-1)),G=[q,C,L],W=i(()=>e("label",null,"Link do zdjęcia:",-1)),Y=i(()=>e("button",{type:"submit"},"Dodaj przepis",-1));function E(s,o,l,F,n,a){return w(),h("div",null,[T,e("form",{onSubmit:o[7]||(o[7]=b((...t)=>a.addRecipe&&a.addRecipe(...t),["prevent"])),class:"recipe-form"},[A,p(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>n.newRecipe.Nazwa=t),type:"text",required:""},null,512),[[d,n.newRecipe.Nazwa]]),D,p(e("input",{"onUpdate:modelValue":o[1]||(o[1]=t=>s.ingredientsInput=t),type:"text",required:"",placeholder:"Dodaj składniki, po przecinku"},null,512),[[d,s.ingredientsInput]]),N,p(e("textarea",{"onUpdate:modelValue":o[2]||(o[2]=t=>n.newRecipe.Kroki=t),required:""},null,512),[[d,n.newRecipe.Kroki]]),V,p(e("input",{"onUpdate:modelValue":o[3]||(o[3]=t=>n.newRecipe.Time=t),type:"number",required:""},null,512),[[d,n.newRecipe.Time]]),x,p(e("select",{"onUpdate:modelValue":o[4]||(o[4]=t=>n.newRecipe.Typ=t)},M,512),[[u,n.newRecipe.Typ]]),P,p(e("select",{"onUpdate:modelValue":o[5]||(o[5]=t=>n.newRecipe.Poziom=t)},G,512),[[u,n.newRecipe.Poziom]]),W,p(e("input",{"onUpdate:modelValue":o[6]||(o[6]=t=>n.newRecipe.photo=t),type:"text",required:""},null,512),[[d,n.newRecipe.photo]]),Y],32)])}const Z=c(v,[["render",E],["__scopeId","data-v-c0cc0803"]]);export{Z as default};