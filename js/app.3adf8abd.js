(function(t){function e(e){for(var r,o,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/monopoly/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"4a9a":function(t,e,n){},"51f2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("h2",[t._v("Монополия")])])]),n("br"),n("br"),n("br"),n("players")],1)},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"players"},[n("v-layout",[n("v-btn",{on:{click:t.createPlayer}},[t._v("Добавить игрока")]),n("v-dialog",{attrs:{"max-width":"300"},model:{value:t.showPlayerCreationDialog,callback:function(e){t.showPlayerCreationDialog=e},expression:"showPlayerCreationDialog"}},[n("v-card",[n("v-card-title",[t._v("Введите имя игрока")]),n("v-card-text",[n("v-text-field",{attrs:{label:"Имя",solo:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addPlayer(e)}},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("v-card-actions",[n("v-btn",{attrs:{color:"success"},on:{click:t.addPlayer}},[t._v("Добавить")])],1)],1)],1)],1),n("v-layout",[n("ul",{staticClass:"players__list"},t._l(t.players,(function(t){return n("li",{key:t.id,staticClass:"players__item"},[n("player",{attrs:{name:t.name}})],1)})),0)])],1)},i=[],c=(n("b0c0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"player"},[n("h2",[t._v(t._s(t.name))]),n("v-divider"),n("br"),n("loan",{attrs:{"turns-to-return-credit":t.turnsToReturnCredit},on:{"loan-taken":t.onLoanTaken,"loan-closed":function(e){t.turnsToReturnCredit=0}}}),n("deposit",{attrs:{"turns-to-take-deposit":t.turnsToTakeDeposit},on:{"deposit-put":t.onDepositPut,"deposit-taken":function(e){t.turnsToTakeDeposit=0}}}),n("v-container",[n("h3",[t._v("Акции")]),t.sharesToShow.length?n("ul",t._l(t.sharesToShow,(function(e){return n("li",{key:e.name},[n("span",[t._v(t._s(e.name)+" : "+t._s(e.amount))])])})),0):n("p",[t._v("У Вас пока нет акций")])]),n("br"),n("br"),n("v-btn",{attrs:{color:"success"},on:{click:t.finishCircle}},[t._v("Завершить круг")]),n("v-dialog",{attrs:{"max-width":"400"},model:{value:t.showEvent,callback:function(e){t.showEvent=e},expression:"showEvent"}},[n("v-card",[n("v-card-title",[t._v(t._s(t.event.title))]),n("v-card-text",[t._v(t._s(t.event.message))]),n("v-card-actions",[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.showEvent=!1}}},[t._v("Продолжить...")]),t.event.type===t.$options.EVENT_TYPES.SHARES?n("v-btn",{attrs:{color:"success"},on:{click:function(e){return t.startSharesByingProcess(t.event.company)}}},[t._v(t._s(t.event.dealType)+" акции... ")]):t._e(),n("v-dialog",{attrs:{"max-width":400},model:{value:t.sharesByingInProcess,callback:function(e){t.sharesByingInProcess=e},expression:"sharesByingInProcess"}},[n("v-card",[n("v-card-title",[t._v("Купить акции")]),n("v-card-text",[n("v-overflow-btn",{attrs:{items:[10,20,30,40,50,60,70,80,90],placeholder:"Какое количество акций Вы хотели бы "+t.event.dealType+"?"},model:{value:t.amountOfSharesToBuy,callback:function(e){t.amountOfSharesToBuy=e},expression:"amountOfSharesToBuy"}}),n("p",[t._v("Итоговая сумма: "+t._s(t.amountOfSharesToBuy*t.event.sharePrice))])],1),n("v-card-actions",[n("v-btn",{attrs:{color:"red"},on:{click:function(e){t.amountOfSharesToBuy=!1}}},[t._v("Отмена")]),n("v-spacer"),t.event.dealType===t.$options.DEAL_TYPES.BUY?n("v-btn",{attrs:{color:"success"},on:{click:t.buyShares}},[t._v("Купить "+t._s(t.company)+" ")]):n("v-btn",{attrs:{color:"success"},on:{click:t.sellShares}},[t._v("Продать "+t._s(t.company))])],1)],1)],1)],1)],1)],1)],1)}),u=[],l=(n("4de4"),n("d81d"),n("b64b"),n("07ac"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h3",[t._v("Кредит")]),t.hasLoan?n("v-container",[n("p",[t._v(t._s(t.loanWarning))]),n("br"),n("v-btn",{attrs:{color:"success"},on:{click:t.returnLoan}},[t._v("Погасить кредит")])],1):n("v-container",[n("v-row",{attrs:{"align-content":"center"}},[n("v-row",[n("p",[t._v("У Вас пока нет кредитов.")])]),n("v-row",[n("v-btn",{attrs:{color:"primary",ripple:""},on:{click:t.startLoanProcess}},[t._v("Взять кредит")]),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.isLoanProcessing,callback:function(e){t.isLoanProcessing=e},expression:"isLoanProcessing"}},[n("v-card",{staticClass:"player__dialog-content"},[n("v-card-title",[t._v("Оформление кредита")]),n("v-card-text",[n("h3",[t._v("Банк готов предоставить кредит под "+t._s(t.loanInterestFormatted)+" круговых.")]),n("v-overflow-btn",{attrs:{items:[100,200,300,400,500,600,700,800,900,1e3,1500,2e3],placeholder:"Какую сумму Вы хотели бы взять?"},model:{value:t.loanSum,callback:function(e){t.loanSum=e},expression:"loanSum"}}),n("br"),n("p",[t._v(t._s(t.loanMessage))])],1),n("v-card-actions",[n("v-btn",{attrs:{color:"red"},on:{click:t.cancelLoanProcess}},[t._v("Отмена")]),n("v-spacer"),n("v-btn",{attrs:{color:"success",disabled:!t.loanTerm||!t.loanSum},on:{click:t.takeLoan}},[t._v("Взять кредит")])],1)],1)],1),n("v-spacer"),n("v-chip",{attrs:{color:"primary"}},[t._v(" Ставка: "+t._s(t.loanInterestFormatted)+" ")])],1)],1)],1)],1)}),p=[],d=(n("99af"),n("a9e3"),{name:"Loan",props:{turnsToReturnCredit:{type:Number,required:!0}},data:function(){return{hasLoan:!1,isLoanProcessing:!1,loanInterest:.2,loanTerm:3,loanSum:0}},computed:{loanInterestFormatted:function(){return 10*this.loanInterest+"0%"},loanSumToReturn:function(){return this.loanSum+this.loanInterest*this.loanSum},loanMessage:function(){return"Через 3 круга Вы должны будете вернуть ".concat(this.loanSumToReturn,".")},loanWarning:function(){if(!this.turnsToReturnCredit)return"Верни ".concat(this.loanSumToReturn,", урод, а не то мы выбьем из тебя все дерьмо, мать твою, и заберем твою недвижимость!");var t=1===this.turnsToReturnCredit?"круг":"круга";return"Через ".concat(this.turnsToReturnCredit," ").concat(t," Вы должны будете вернуть ").concat(this.loanSumToReturn,".")}},methods:{startLoanProcess:function(){this.isLoanProcessing=!0},takeLoan:function(){this.hasLoan=!0,this.isLoanProcessing=!1,this.$emit("loan-taken",this.loanTerm)},returnLoan:function(){this.hasLoan=!1,this.$emit("loan-closed")},cancelLoanProcess:function(){this.isLoanProcessing=!1}}}),v=d,h=n("2877"),f=n("6544"),m=n.n(f),y=n("8336"),T=n("b0af"),_=n("99d9"),b=n("cc20"),S=n("a523"),g=n("169a"),P=n("de8e"),C=n("0fd9"),k=n("2fa4"),E=Object(h["a"])(v,l,p,!1,null,null,null),w=E.exports;m()(E,{VBtn:y["a"],VCard:T["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VChip:b["a"],VContainer:S["a"],VDialog:g["a"],VOverflowBtn:P["a"],VRow:C["a"],VSpacer:k["a"]});var D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("h3",[t._v("Депозит")]),t.hasDeposit?n("v-container",[n("p",[t._v(t._s(t.depositWarning))]),n("br"),n("v-btn",{attrs:{disabled:!!t.turnsToTakeDeposit,color:"success"},on:{click:t.returnDeposit}},[t._v("Забрать вклад")])],1):n("v-container",[n("v-row",{attrs:{"align-content":"center"}},[n("v-row",[n("p",[t._v("У Вас пока нет депозитов.")])]),n("v-row",[n("v-btn",{attrs:{color:"primary",ripple:""},on:{click:t.startDepositProcess}},[t._v("Сделать вклад")]),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.isDepositProcessing,callback:function(e){t.isDepositProcessing=e},expression:"isDepositProcessing"}},[n("v-card",{staticClass:"player__dialog-content"},[n("v-card-title",[t._v("Оформление вклада")]),n("v-card-text",[n("h3",[t._v("Банк готов принять вклад под "+t._s(t.depositInterestFormatted)+" круговых.")]),n("v-overflow-btn",{attrs:{items:[100,200,300,400,500,600,700,800,900,1e3,1500,2e3],placeholder:"Какую сумму Вы хотели бы разместить?"},model:{value:t.depositSum,callback:function(e){t.depositSum=e},expression:"depositSum"}}),n("v-overflow-btn",{attrs:{items:[1,2,3,4,5],placeholder:"На какой срок (количество ходов)?"},model:{value:t.depositTerm,callback:function(e){t.depositTerm=e},expression:"depositTerm"}}),n("br"),n("p",[t._v(t._s(t.depositMessage))])],1),n("v-card-actions",[n("v-btn",{attrs:{color:"red"},on:{click:t.cancelDepositProcess}},[t._v("Отмена")]),n("v-spacer"),n("v-btn",{attrs:{color:"success",disabled:!t.depositTerm||!t.depositSum},on:{click:t.setDeposit}},[t._v("Разместить депозит")])],1)],1)],1),n("v-spacer"),n("v-chip",{attrs:{color:"primary"}},[t._v(" Ставка: "+t._s(t.depositInterestFormatted)+" ")])],1)],1)],1)],1)},R=[],V={name:"Deposit",props:{turnsToTakeDeposit:{type:Number,required:!0}},data:function(){return{hasDeposit:!1,isDepositProcessing:!1,depositTerm:1,depositSum:0}},computed:{depositInterest:function(){switch(this.depositTerm){case 1:return.1;case 2:return.15;case 3:return.2;case 4:return.25;case 5:return.3}return.1},depositInterestFormatted:function(){return 100*this.depositInterest+"%"},depositSumToReturn:function(){return this.depositSum+this.depositInterest*this.depositSum*this.depositTerm},depositMessage:function(){var t=1===this.depositTerm?"круг":"кругов";return"Через ".concat(this.depositTerm," ").concat(t," Вы получите ").concat(this.depositSumToReturn,".")},depositWarning:function(){if(!this.turnsToTakeDeposit)return"Заберите ".concat(this.depositSumToReturn);var t=1===this.turnsToTakeDeposit?"круг":"круга";return"Через ".concat(this.turnsToTakeDeposit," ").concat(t," Вы получите ").concat(this.depositSumToReturn,".")}},methods:{startDepositProcess:function(){this.isDepositProcessing=!0},setDeposit:function(){this.hasDeposit=!0,this.isDepositProcessing=!1,this.$emit("deposit-put",this.depositTerm)},returnDeposit:function(){this.hasDeposit=!1,this.$emit("deposit-taken")},cancelDepositProcess:function(){this.isDepositProcessing=!1}}},x=V,O=Object(h["a"])(x,D,R,!1,null,null,null),A=O.exports;m()(O,{VBtn:y["a"],VCard:T["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VChip:b["a"],VContainer:S["a"],VDialog:g["a"],VOverflowBtn:P["a"],VRow:C["a"],VSpacer:k["a"]});var L=n("7d3a"),B=n.n(L),F={PURCHASE_OFFER:"PURCHASE_OFFER",RACKET:"RACKET",FAS:"FAS",SHARES:"SHARES",FINE:"FINE"},I=[F.PURCHASE_OFFER,F.RACKET,F.FAS,F.SHARES,F.FINE],$={BUY:"купить",SELL:"продать"},j={RDRB:"RDRB",OMZZP:"OMZZP",ISKJ:"ISKJ",SIBG:"SIBG",KAZTP:"KAZTP",FXZK:"FXZK",CHGZ:"CHGZ",YAKG:"YAKG",GTLC:"GTLC",FESH:"FESH",TANL:"TANL"},H=["Огарева","Варшавское шоссе","Первая Парковая","Полянка","Сретенка","Ростовская набережная","Вавилова","Рязанский проспект","Рублевское шоссе","Житная","Нагатинская","Площадь Маяковского","Тверская","Пушкинская","Грузинский вал","Чайковского","Смоленская площадь","Щусева","Кутузовский проспект","Гоголевский бульвар","Малая Бронная","Арбат","Водопровод","Электростанция","Рижская жд","Ленинградская жд","Курская жд","Казанская жд"],K=function(){var t=B()(I);switch(t){case F.PURCHASE_OFFER:return N();case F.RACKET:return M();case F.FAS:return U();case F.SHARES:return Z();case F.FINE:return Y()}};function N(){var t=B()([.5,1,2,3]),e=B()(H),n="Есть покупатель!",r='Вы можете продать "'.concat(e,'" за "стоимость участка" х ').concat(t,"\n     или продать это право другому игроку");return{title:n,message:r,type:F.PURCHASE_OFFER}}function M(){var t=B()(H),e="Рэкет!",n='Вы вынуждены отдать "'.concat(t,'" за полцены или попробовать откупиться.\n     Сумма взятки = бросок одного кубика х 100');return{title:e,message:n,type:F.RACKET}}function U(){var t="ФАС ведет расследование!",e="ФАС заинтересовалась Вашей монополией. Продайте одну из улиц любой Вашей\n     монополии по себестоимости или заплатите штраф. Сумма штрафа = бросок одного кубика х 100";return{title:t,message:e,type:F.FAS}}function Z(){var t=B()(j),e=B()([0,10,10,10,20,20,30,30,40,50,100]),n="Движение на фондовом рынке!",r=B()([$.BUY,$.SELL]),a="Вы или любой другой игрок можете ".concat(r," акции ").concat(t," по цене ").concat(e," за штуку.");return{title:n,message:a,sharePrice:e,company:t,dealType:r,type:F.SHARES}}function Y(){var t=B()(["Ваши помещения не соответствуют требования пожарной безопасности.","Ваш сотрудник ударил ребенка.","Ваш бухгалтер напутал с отчетностью.","Вы оскорбили чувства верующих.","Вы косо посмотрели на сотрудника администрации.","Как-то криво Вы ходите под Богом."]),e="Штраф!",n="".concat(t," Сумма штрафа = бросок кубика х 20");return{title:e,message:n,type:F.FINE}}var G={name:"Player",components:{Loan:w,Deposit:A},props:{name:{type:String,required:!0}},created:function(){var t=this;this.$options.EVENT_TYPES=F,this.$options.DEAL_TYPES=$,Object.values(j).forEach((function(e){t.$set(t.shares,e,0)}))},data:function(){return{turnsToReturnCredit:0,turnsToTakeDeposit:0,event:"",showEvent:!1,sharesByingInProcess:!1,amountOfSharesToBuy:0,company:"",shares:{}}},computed:{sharesToShow:function(){var t=this;return Object.keys(this.shares).map((function(e){return{name:e,amount:t.shares[e]}})).filter((function(t){return t.amount}))}},methods:{onLoanTaken:function(t){this.turnsToReturnCredit=t},onDepositPut:function(t){this.turnsToTakeDeposit=t},finishCircle:function(){this.turnsToReturnCredit&&this.turnsToReturnCredit--,this.turnsToTakeDeposit&&this.turnsToTakeDeposit--,this.event=K(),this.showEvent=!0},startSharesByingProcess:function(t){this.company=t,this.sharesByingInProcess=!0},buyShares:function(){this.shares[this.company]+=this.amountOfSharesToBuy,this.sharesByingInProcess=!1,this.company="",this.$forceUpdate()},sellShares:function(){this.shares[this.company]-=this.amountOfSharesToBuy,this.sharesByingInProcess=!1,this.company="",this.$forceUpdate()}}},J=G,W=(n("74c9"),n("ce7e")),q=Object(h["a"])(J,c,u,!1,null,null,null),X=q.exports;m()(q,{VBtn:y["a"],VCard:T["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VContainer:S["a"],VDialog:g["a"],VDivider:W["a"],VOverflowBtn:P["a"],VSpacer:k["a"]});var z=1,Q={name:"Players",components:{Player:X},data:function(){return{players:[],name:"",showPlayerCreationDialog:!1}},methods:{createPlayer:function(){this.showPlayerCreationDialog=!0},addPlayer:function(){this.players.push({id:z++,name:this.name}),this.showPlayerCreationDialog=!1,this.name=""}}},tt=Q,et=(n("e41e"),n("a722")),nt=n("8654"),rt=Object(h["a"])(tt,o,i,!1,null,null,null),at=rt.exports;m()(rt,{VBtn:y["a"],VCard:T["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VContainer:S["a"],VDialog:g["a"],VLayout:et["a"],VTextField:nt["a"]});var st={name:"App",components:{Players:at},data:function(){return{}}},ot=st,it=n("7496"),ct=n("40dc"),ut=Object(h["a"])(ot,a,s,!1,null,null,null),lt=ut.exports;m()(ut,{VApp:it["a"],VAppBar:ct["a"]});var pt=n("2f62");r["a"].use(pt["a"]);var dt=new pt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),vt=n("f309");r["a"].use(vt["a"]);var ht=new vt["a"]({});r["a"].config.productionTip=!1,new r["a"]({store:dt,vuetify:ht,render:function(t){return t(lt)}}).$mount("#app")},"74c9":function(t,e,n){"use strict";var r=n("51f2"),a=n.n(r);a.a},e41e:function(t,e,n){"use strict";var r=n("4a9a"),a=n.n(r);a.a}});
//# sourceMappingURL=app.3adf8abd.js.map