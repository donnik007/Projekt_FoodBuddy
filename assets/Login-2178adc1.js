import{_ as f,m as l,u as v,o as b,c as E,a as e,l as _,w as d,v as u,s as h,q as g,x as y,p as C,b as P}from"./index-72d2ae5b.js";const j={setup(){const a=l(""),s=l(""),c=l(""),r=l(""),m=v();return{email:a,password:s,login:async()=>{try{const n=(await h(g,a.value,s.value)).user;m.push({name:"Home"})}catch(i){const n=i.code,p=i.message;console.error(`Error Code: ${n}, Error Message: ${p}`)}},registerEmail:c,registerPassword:r,register:async()=>{try{const n=(await y(g,c.value,r.value)).user;m.push({name:"Home"})}catch(i){const n=i.code,p=i.message;console.error(`Error Code: ${n}, Error Message: ${p}`)}}}}},t=a=>(C("data-v-162367ef"),a=a(),P(),a),x={class:"container"},M={class:"form-container"},q=t(()=>e("h2",null,"Zaloguj",-1)),I=t(()=>e("label",{for:"email"},"Email:",-1)),S=t(()=>e("label",{for:"password"},"Hasło:",-1)),U=t(()=>e("button",{type:"submit",class:"submit-button"},"Zaloguj",-1)),V={class:"form-container"},H=t(()=>e("h2",null,"Zarejestruj",-1)),Z=t(()=>e("label",{for:"registerEmail"},"Email:",-1)),B=t(()=>e("label",{for:"registerPassword"},"Hasło:",-1)),k=t(()=>e("button",{type:"submit",class:"submit-button"},"Zarejestruj",-1));function A(a,s,c,r,m,w){return b(),E("div",x,[e("div",M,[q,e("form",{onSubmit:s[2]||(s[2]=_((...o)=>r.login&&r.login(...o),["prevent"]))},[I,d(e("input",{type:"email",id:"email","onUpdate:modelValue":s[0]||(s[0]=o=>r.email=o),required:""},null,512),[[u,r.email]]),S,d(e("input",{type:"password",id:"password","onUpdate:modelValue":s[1]||(s[1]=o=>r.password=o),required:""},null,512),[[u,r.password]]),U],32)]),e("div",V,[H,e("form",{onSubmit:s[5]||(s[5]=_((...o)=>r.register&&r.register(...o),["prevent"]))},[Z,d(e("input",{type:"email",id:"registerEmail","onUpdate:modelValue":s[3]||(s[3]=o=>r.registerEmail=o),required:""},null,512),[[u,r.registerEmail]]),B,d(e("input",{type:"password",id:"registerPassword","onUpdate:modelValue":s[4]||(s[4]=o=>r.registerPassword=o),required:""},null,512),[[u,r.registerPassword]]),k],32)])])}const W=f(j,[["render",A],["__scopeId","data-v-162367ef"]]);export{W as default};
