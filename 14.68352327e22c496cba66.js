(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{JfvI:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=(u("OO+k"),u("AwSQ")),r=u("BaxT"),o=function(l,n,u,e){return new(u||(u=Promise))(function(t,r){function o(l){try{a(e.next(l))}catch(l){r(l)}}function i(l){try{a(e.throw(l))}catch(l){r(l)}}function a(l){l.done?t(l.value):new u(function(n){n(l.value)}).then(o,i)}a((e=e.apply(l,n||[])).next())})},i=function(l,n){var u,e,t,r,o={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return r={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function i(r){return function(i){return function(r){if(u)throw new TypeError("Generator is already executing.");for(;o;)try{if(u=1,e&&(t=2&r[0]?e.return:r[0]?e.throw||((t=e.return)&&t.call(e),0):e.next)&&!(t=t.call(e,r[1])).done)return t;switch(e=0,t&&(r=[2&r[0],t.value]),r[0]){case 0:case 1:t=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,e=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(t=(t=o.trys).length>0&&t[t.length-1])&&(6===r[0]||2===r[0])){o=0;continue}if(3===r[0]&&(!t||r[1]>t[0]&&r[1]<t[3])){o.label=r[1];break}if(6===r[0]&&o.label<t[1]){o.label=t[1],t=r;break}if(t&&o.label<t[2]){o.label=t[2],o.ops.push(r);break}t[2]&&o.ops.pop(),o.trys.pop();continue}r=n.call(l,o)}catch(l){r=[6,l],e=0}finally{u=t=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,i])}}},a=function(){function l(l,n,u,e,t){this.alertController=l,this.router=n,this.dataService=u,this.changeDetectorRef=e,this.utilService=t}return l.prototype.ngOnInit=function(){this.currentGame=this.dataService.getCurrentGame()},l.prototype.handleBackBtn=function(){return o(this,void 0,void 0,function(){var l=this;return i(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Leaving Page...",message:"Sure want to leave?",buttons:[{text:"Cancel"},{text:"OK",handler:function(){l.dataService.saveData(),l.router.navigate(["/home"])}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l.prototype.addPlayer=function(){return o(this,void 0,void 0,function(){var l=this;return i(this,function(n){switch(n.label){case 0:return[4,this.alertController.create({header:"Enter player name",inputs:[{name:"playerName",type:"text",placeholder:"Player name"}],buttons:[{text:"Cancel",role:"cancel"},{text:"Add",handler:function(n){n.playerName?(l.dataService.addPlayer({name:n.playerName,scores:[],totalScore:0,newScore:void 0}),l.changeDetectorRef.detectChanges()):l.utilService.showMessage("Enter Player name"),l.dataService.emitDataUpdateEvent()}}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}})})},l.prototype.addScoreBtn=function(){0!=this.currentGame.players.length?this.router.navigate(["addscore"]):this.utilService.showMessage("Register users to add score")},l.prototype.showPlayer=function(l){this.router.navigate(["player",{playerName:l.name}])},l}(),c=function(){},b=u("pMnS"),s=u("ra/t"),p=u("ntG5"),f=u("M9A9"),d=u("ZYCi"),m=u("Ip0R"),h=u("CssM"),y=e.pb({encapsulation:0,styles:[[""]],data:{}});function g(l){return e.Eb(0,[(l()(),e.rb(0,0,null,null,5,"ion-card",[],null,null,null,s.D,s.f)),e.qb(1,49152,null,0,p.h,[e.i,e.l],null,null),(l()(),e.rb(2,0,null,0,3,"ion-card-content",[],null,null,null,s.A,s.g)),e.qb(3,49152,null,0,p.i,[e.i,e.l],null,null),(l()(),e.rb(4,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Db(-1,null,["Register users to get started"]))],null,null)}function q(l){return e.Eb(0,[(l()(),e.rb(0,0,null,null,8,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0,r=l.component;return"click"===n&&(t=!1!==e.Ab(l,2).onClick(u)&&t),"click"===n&&(t=!1!==r.showPlayer(l.context.$implicit)&&t),t},s.K,s.p)),e.qb(1,49152,null,0,p.E,[e.i,e.l],null,null),e.qb(2,16384,null,0,f.a,[[2,d.l],e.l],null,null),(l()(),e.rb(3,0,null,0,2,"ion-label",[],null,null,null,s.L,s.q)),e.qb(4,49152,null,0,p.K,[e.i,e.l],null,null),(l()(),e.Db(5,0,["",""])),(l()(),e.rb(6,0,null,0,2,"ion-badge",[["color","primary"]],null,null,null,s.x,s.c)),e.qb(7,49152,null,0,p.e,[e.i,e.l],{color:[0,"color"]},null),(l()(),e.Db(8,0,["",""]))],function(l,n){l(n,7,0,"primary")},function(l,n){l(n,5,0,n.context.$implicit.name),l(n,8,0,n.context.$implicit.totalScore)})}function v(l){return e.Eb(0,[(l()(),e.rb(0,0,null,null,15,"ion-card",[],null,null,null,s.D,s.f)),e.qb(1,49152,null,0,p.h,[e.i,e.l],null,null),(l()(),e.rb(2,0,null,0,13,"ion-card-content",[],null,null,null,s.A,s.g)),e.qb(3,49152,null,0,p.i,[e.i,e.l],null,null),(l()(),e.rb(4,0,null,0,11,"ion-list",[],null,null,null,s.N,s.r)),e.qb(5,49152,null,0,p.L,[e.i,e.l],null,null),(l()(),e.rb(6,0,null,0,7,"ion-list-header",[],null,null,null,s.M,s.s)),e.qb(7,49152,null,0,p.M,[e.i,e.l],null,null),(l()(),e.rb(8,0,null,0,2,"ion-label",[["color","primary"]],null,null,null,s.L,s.q)),e.qb(9,49152,null,0,p.K,[e.i,e.l],{color:[0,"color"]},null),(l()(),e.Db(-1,0,["Score Limit: "])),(l()(),e.rb(11,0,null,0,2,"ion-badge",[["color","danger"]],null,null,null,s.x,s.c)),e.qb(12,49152,null,0,p.e,[e.i,e.l],{color:[0,"color"]},null),(l()(),e.Db(13,0,["",""])),(l()(),e.ib(16777216,null,0,1,null,q)),e.qb(15,278528,null,0,m.h,[e.Q,e.N,e.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,9,0,"primary"),l(n,12,0,"danger"),l(n,15,0,u.currentGame.players)},function(l,n){l(n,13,0,n.component.currentGame.scoreLimit)})}function k(l){return e.Eb(0,[(l()(),e.rb(0,0,null,null,8,"ion-item",[],null,[[null,"click"]],function(l,n,u){var t=!0,r=l.component;return"click"===n&&(t=!1!==e.Ab(l,2).onClick(u)&&t),"click"===n&&(t=!1!==r.showPlayer(l.context.$implicit)&&t),t},s.K,s.p)),e.qb(1,49152,null,0,p.E,[e.i,e.l],null,null),e.qb(2,16384,null,0,f.a,[[2,d.l],e.l],null,null),(l()(),e.rb(3,0,null,0,2,"ion-label",[],null,null,null,s.L,s.q)),e.qb(4,49152,null,0,p.K,[e.i,e.l],null,null),(l()(),e.Db(5,0,["",""])),(l()(),e.rb(6,0,null,0,2,"ion-badge",[["color","primary"]],null,null,null,s.x,s.c)),e.qb(7,49152,null,0,p.e,[e.i,e.l],{color:[0,"color"]},null),(l()(),e.Db(8,0,["",""]))],function(l,n){l(n,7,0,"primary")},function(l,n){l(n,5,0,n.context.$implicit.name),l(n,8,0,n.context.$implicit.totalScore)})}function w(l){return e.Eb(0,[(l()(),e.rb(0,0,null,null,12,"ion-card",[],null,null,null,s.D,s.f)),e.qb(1,49152,null,0,p.h,[e.i,e.l],null,null),(l()(),e.rb(2,0,null,0,10,"ion-card-content",[],null,null,null,s.A,s.g)),e.qb(3,49152,null,0,p.i,[e.i,e.l],null,null),(l()(),e.rb(4,0,null,0,8,"ion-list",[],null,null,null,s.N,s.r)),e.qb(5,49152,null,0,p.L,[e.i,e.l],null,null),(l()(),e.rb(6,0,null,0,4,"ion-list-header",[],null,null,null,s.M,s.s)),e.qb(7,49152,null,0,p.M,[e.i,e.l],null,null),(l()(),e.rb(8,0,null,0,2,"ion-label",[["color","danger"]],null,null,null,s.L,s.q)),e.qb(9,49152,null,0,p.K,[e.i,e.l],{color:[0,"color"]},null),(l()(),e.Db(-1,0,["Dropped Players"])),(l()(),e.ib(16777216,null,0,1,null,k)),e.qb(12,278528,null,0,m.h,[e.Q,e.N,e.u],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,9,0,"danger"),l(n,12,0,u.currentGame.dropped)},null)}function x(l){return e.Eb(0,[(l()(),e.rb(0,0,null,null,21,"ion-header",[],null,null,null,s.H,s.m)),e.qb(1,49152,null,0,p.y,[e.i,e.l],null,null),(l()(),e.rb(2,0,null,0,19,"ion-toolbar",[["color","primary"]],null,null,null,s.P,s.t)),e.qb(3,49152,null,0,p.xb,[e.i,e.l],{color:[0,"color"]},null),(l()(),e.rb(4,0,null,0,7,"ion-buttons",[["slot","start"]],null,null,null,s.z,s.e)),e.qb(5,49152,null,0,p.g,[],null,null),(l()(),e.rb(6,0,null,0,5,"ion-button",[],null,[[null,"click"]],function(l,n,u){var t=!0,r=l.component;return"click"===n&&(t=!1!==e.Ab(l,8).onClick(u)&&t),"click"===n&&(t=!1!==r.handleBackBtn()&&t),t},s.y,s.d)),e.qb(7,49152,null,0,p.f,[e.i,e.l],null,null),e.qb(8,16384,null,0,f.a,[[2,d.l],e.l],null,null),(l()(),e.rb(9,0,null,0,1,"ion-icon",[["name","arrow-back"]],null,null,null,s.I,s.n)),e.qb(10,49152,null,0,p.z,[e.i,e.l],{name:[0,"name"]},null),(l()(),e.Db(-1,0,[" Start "])),(l()(),e.rb(12,0,null,0,2,"ion-title",[],null,null,null,s.O,s.u)),e.qb(13,49152,null,0,p.yb,[e.i,e.l],null,null),(l()(),e.Db(14,0,["",""])),(l()(),e.rb(15,0,null,0,6,"ion-buttons",[["slot","end"]],null,null,null,s.z,s.e)),e.qb(16,49152,null,0,p.g,[],null,null),(l()(),e.rb(17,0,null,0,4,"ion-button",[],null,[[null,"click"]],function(l,n,u){var t=!0,r=l.component;return"click"===n&&(t=!1!==e.Ab(l,19).onClick(u)&&t),"click"===n&&(t=!1!==r.addPlayer()&&t),t},s.y,s.d)),e.qb(18,49152,null,0,p.f,[e.i,e.l],null,null),e.qb(19,16384,null,0,f.a,[[2,d.l],e.l],null,null),(l()(),e.rb(20,0,null,0,1,"ion-icon",[["name","person-add"]],null,null,null,s.I,s.n)),e.qb(21,49152,null,0,p.z,[e.i,e.l],{name:[0,"name"]},null),(l()(),e.rb(22,0,null,null,13,"ion-content",[],null,null,null,s.E,s.j)),e.qb(23,49152,null,0,p.r,[e.i,e.l],null,null),(l()(),e.ib(16777216,null,0,1,null,g)),e.qb(25,16384,null,0,m.i,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,0,1,null,v)),e.qb(27,16384,null,0,m.i,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.ib(16777216,null,0,1,null,w)),e.qb(29,16384,null,0,m.i,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(l()(),e.rb(30,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,s.G,s.k)),e.qb(31,49152,null,0,p.t,[e.i,e.l],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.rb(32,0,null,0,3,"ion-fab-button",[["mini",""]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.addScoreBtn()&&e),e},s.F,s.l)),e.qb(33,49152,null,0,p.u,[e.i,e.l],null,null),(l()(),e.rb(34,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,s.I,s.n)),e.qb(35,49152,null,0,p.z,[e.i,e.l],{name:[0,"name"]},null)],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,10,0,"arrow-back"),l(n,21,0,"person-add"),l(n,25,0,0==u.currentGame.players.length),l(n,27,0,u.currentGame.players.length),l(n,29,0,u.currentGame.dropped.length),l(n,31,0,"end","bottom"),l(n,35,0,"add")},function(l,n){l(n,14,0,n.component.currentGame.gameName)})}var S=e.nb("app-startgame",a,function(l){return e.Eb(0,[(l()(),e.rb(0,0,null,null,1,"app-startgame",[],null,null,null,x,y)),e.qb(1,114688,null,0,a,[h.a,d.l,t.a,e.i,r.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),D=u("gIcY"),C=u("95zI"),E=u("9opb"),G=u("apKv"),I=u("B4/3");u.d(n,"StartgamePageModuleNgFactory",function(){return N});var N=e.ob(c,[],function(l){return e.xb([e.yb(512,e.k,e.db,[[8,[b.a,S]],[3,e.k],e.z]),e.yb(4608,m.k,m.j,[e.w,[2,m.q]]),e.yb(4608,D.i,D.i,[]),e.yb(4608,C.a,C.a,[e.B,e.g]),e.yb(4608,E.a,E.a,[C.a,e.k,e.s]),e.yb(4608,G.a,G.a,[C.a,e.k,e.s]),e.yb(1073742336,m.b,m.b,[]),e.yb(1073742336,D.h,D.h,[]),e.yb(1073742336,D.a,D.a,[]),e.yb(1073742336,I.a,I.a,[]),e.yb(1073742336,d.m,d.m,[[2,d.s],[2,d.l]]),e.yb(1073742336,c,c,[]),e.yb(1024,d.j,function(){return[[{path:"",component:a}]]},[])])})}}]);