(this["webpackJsonphili-tl"]=this["webpackJsonphili-tl"]||[]).push([[0],{15:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),s=t(9),o=t.n(s),r=(t(15),t(4)),c=t(5),l=t(2),u=t(7),p=t(6),h=t(10),b=t.p+"static/media/1.7c9f6a56.gif",d=t(0);function j(){var e=Object(n.useState)(!0),a=Object(h.a)(e,2),t=a[0],i=a[1],s=t?"flex":"none";return Object(d.jsx)("div",{className:"note",style:{display:s},children:Object(d.jsxs)("div",{className:"note-information",children:[Object(d.jsx)("h2",{children:"NOTA:"}),Object(d.jsxs)("p",{children:["Aplikasaun ida nee kria husi ",Object(d.jsx)("b",{children:Object(d.jsx)("code",{children:"create-react-app"})}),". Aplikasaun ida nee ho inisiativa atu dezenvolve diak liu tan ita nia koniesimentu iha Zona Timor-Leste. I oferese perguntas no hatan ho hili resposta neebe mak loos!"]}),Object(d.jsx)("img",{src:b,alt:b}),Object(d.jsx)("p",{className:"close",onClick:function(){return i((function(e){return!e}))},children:"X"})]})})}var m=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"welcome-heading",children:"Bemvindu  Mai iha Hau nia App."}),Object(d.jsx)("button",{className:"button",type:"button",onClick:e.nextApp,children:"Hahuu..."}),Object(d.jsx)(j,{})]})},O=t(3),x=t.p+"static/media/xanana.3bd0bac0.jpg",f=t.p+"static/media/uma_lisan.bfce2b0b.jpeg",v=t.p+"static/media/nain_feto_rm.62ad52ab.jpg",g=t.p+"static/media/ai_pelo.59b75258.jpg",y=t.p+"static/media/ramos_horta.534aae7c.jpg",k=t.p+"static/media/capital_dili.420fb7b3.jpg",S=t.p+"static/media/papa_ii.1420313c.jpg",A=t.p+"static/media/tebe_dai.085e41a0.jpg";function q(e){var a;return a=0===e.myQuestion?x:1===e.myQuestion?f:2===e.myQuestion?v:3===e.myQuestion?g:4===e.myQuestion?y:5===e.myQuestion?k:6===e.myQuestion?S:7===e.myQuestion?A:null,Object(d.jsx)("img",{className:"app-photo",src:a,alt:a})}function C(e){return Object(d.jsx)(d.Fragment,{children:e.myQuestion<O.length&&Object(d.jsxs)("form",{onSubmit:e.onHandledSubmit,children:[Object(d.jsx)("label",{className:"question",children:O[e.myQuestion].question}),Object.keys(O[e.myQuestion].answer).length>0&&Object.keys(O[e.myQuestion].answer).map((function(a,t){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",className:"rads",name:"answer",value:a,onChange:e.onHandledChange,required:!0,autoFocus:!0}),a]},t.toString())})),Object(d.jsx)("input",{className:"button",type:"submit",value:"next"})]})})}function F(e){var a={fontWeight:"bold",color:e.information};return Object(d.jsx)(d.Fragment,{children:e.playerScore>-1&&Object(d.jsxs)("p",{style:a,children:["Hau nia Valor: ",e.playerScore]})})}function Q(e){return Object(d.jsx)(d.Fragment,{children:e.myQuestion>O.length-1&&Object(d.jsxs)("div",{className:"yourscore",children:[e.playerScore>40?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"Parabens!"}),Object(d.jsxs)("p",{children:["Ita nia valor ",e.playerScore,"!"]})]}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h3",{children:"Valor laduun diak!"}),Object(d.jsxs)("p",{style:{color:"red"},children:["Ita nia valor ",e.playerScore,"!"]})]}),Object(d.jsx)("button",{className:"button",onClick:e.onPrevApp,children:"Fila..."})]})})}var w=function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={text:"",question:0,score:0,information:null},n.handledChange=n.handledChange.bind(Object(l.a)(n)),n.handledSubmit=n.handledSubmit.bind(Object(l.a)(n)),n}return Object(c.a)(t,[{key:"handledChange",value:function(e){this.setState({text:e.target.value})}},{key:"handledSubmit",value:function(e){e.preventDefault(),this.countScore(O[this.state.question].answer["".concat(this.state.text)]),this.setState((function(e){return{text:"",question:e.question+1}}))}},{key:"countScore",value:function(e){"loos"===e?(this.setState((function(e){return{score:e.score+12.5}})),this.setState({information:"#1abc9c"})):this.setState({information:"red"})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"main-app",children:[Object(d.jsx)(q,{myQuestion:this.state.question}),Object(d.jsx)(C,{onHandledChange:this.handledChange,onHandledSubmit:this.handledSubmit,myQuestion:this.state.question}),Object(d.jsx)(F,{playerScore:this.state.score,information:this.state.information}),Object(d.jsx)(Q,{myQuestion:this.state.question,playerScore:this.state.score,onPrevApp:this.props.prevApp})]})}}]),t}(i.a.Component),N=(t(17),function(e){Object(u.a)(t,e);var a=Object(p.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={app:0},n.prevApp=n.prevApp.bind(Object(l.a)(n)),n.nextApp=n.nextApp.bind(Object(l.a)(n)),n}return Object(c.a)(t,[{key:"nextApp",value:function(){this.setState((function(e){return{app:e.app+1}}))}},{key:"prevApp",value:function(){this.setState((function(e){return{app:e.app-1}}))}},{key:"render",value:function(){var e=0===this.state.app?Object(d.jsx)(m,{nextApp:this.nextApp}):Object(d.jsx)(w,{prevApp:this.prevApp});return Object(d.jsx)(d.Fragment,{children:e})}}]),t}(i.a.Component));var z=function(){return Object(d.jsx)(N,{})},L=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,s=a.getLCP,o=a.getTTFB;t(e),n(e),i(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root")),L()},3:function(e){e.exports=JSON.parse('[{"question":"Prezidente RDTL primeiru hahu iha tina 2002-2007, no naran?","answer":{"Sr. Ramos Horta":"sala","Sr. Xanana Gusmao":"loos","Sr. Fernando Lasama":"sala","Sr. Mari alkatiri":"sala"}},{"question":"uma neebe reprezenta iha figura nee iha rai TL bolu?","answer":{"Uma Lisan":"loos","Igreza":"sala","Uma bai bain":"sala","Fatin Turismu":"sala"}},{"question":"Ilas Nain Feto neebe reprenzenta iha figura nee iha foho ida ho naran?","answer":{"Matebain":"sala","Kablaki":"sala","Ramelau":"loos","Fatuk Mean":"sala"}},{"question":"Prisaun Ai pelo lokaliza iha municipio?","answer":{"Likisa":"loos","Ermera":"sala","Dili":"sala","Ainaro":"sala"}},{"question":"Sr. Jose Ramos Horta nu\'udar prezidente ba timor ba daruak iha tinan?","answer":{"2002-2007":"sala","2007-2014":"sala","2003-2008":"sala","2007-2012":"loos"}},{"question":"Timor-Leste iha municipio 12 ho zona espesial oecusse, no ho municipio ho naran?","answer":{"Ainaro":"sala","Baucau":"sala","Dili":"loos","Ermera":"sala"}},{"question":"iha figura ida nee reprezenta ilas Papa Joao Paulo II neebe mak lokaliza iha municipio?","answer":{"Likisa":"sala","Dili":"loos","Covalima":"sala","Baucau":"sala"}},{"question":"Timor-Leste ho nia dansa kultura dahur i no mos....","answer":{"Kizomba":"sala","Kanotak Tohar":"sala","4 kali":"sala","Tebe tebe dai":"loos"}}]')}},[[18,1,2]]]);
//# sourceMappingURL=main.ade14f99.chunk.js.map