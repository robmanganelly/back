!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,o){if(!t)return;if("string"==typeof t)return e(t,o);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,o)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,n=new Array(e);o<e;o++)n[o]=t[o];return n}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[939],{4939:function(e,n,i){"use strict";i.r(n),i.d(n,{ContactsModule:function(){return K}});var a=i(9436),c=i(8583),u=i(9763),s=i(5257),l=i(8002),m=i(7716),p=i(6673),d=i(2468),f=function(){var t=function(){function t(e,n){o(this,t),this.coreService=e,this.dataService=n}return r(t,[{key:"resolve",value:function(t,e){return this.coreService.loadContacts().pipe((0,s.q)(1),(0,l.U)(function(t){return t.data.data}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(m.LFG(p.p),m.LFG(d.D))},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),g=i(5319),h=i(3342),v=i(3679),w=i(3772),b=i(6284),Z=i(2325),C=i(2522),y=i(1095),A=i(1769),k=i(2684),I=i(7539),T=i(3738),F=i(171),q=i(6627),S=i(7701);function x(t,e){if(1&t){var o=m.EpF();m.TgZ(0,"div",2),m.TgZ(1,"div",3),m.TgZ(2,"mat-checkbox",4),m.NdJ("change",function(t){var e=m.CHM(o).$implicit;return m.oxw(2).reportState(e._id,t.checked)}),m.qZA(),m._UZ(3,"img",5),m.TgZ(4,"span"),m._uU(5),m.ALo(6,"truncate"),m.ALo(7,"titlecase"),m.qZA(),m.TgZ(8,"span"),m._uU(9),m.qZA(),m.qZA(),m._UZ(10,"mat-divider"),m.qZA()}if(2&t){var n=e.$implicit;m.xp6(3),m.Q6J("src",n.userId.photo,m.LSH),m.xp6(2),m.Oqu(m.xi3(6,3,m.lcZ(7,6,n.username),25)),m.xp6(4),m.Oqu(n.email)}}function N(t,e){if(1&t&&(m.TgZ(0,"div"),m.YNc(1,x,11,8,"div",1),m.qZA()),2&t){var o=m.oxw();m.xp6(1),m.Q6J("ngForOf",o.contacts)}}function _(t,e){if(1&t){var o=m.EpF();m.TgZ(0,"button",9),m.NdJ("click",function(){var t=m.CHM(o).$implicit,e=m.oxw().$implicit;return t.action(e)}),m.TgZ(1,"mat-icon"),m._uU(2),m.qZA(),m.qZA()}if(2&t){var n=e.$implicit;m.xp6(2),m.Oqu(n.icon)}}function R(t,e){if(1&t&&(m.TgZ(0,"div"),m.TgZ(1,"mat-expansion-panel"),m.TgZ(2,"mat-expansion-panel-header"),m._UZ(3,"img",5),m.TgZ(4,"span"),m._uU(5),m.qZA(),m.qZA(),m.TgZ(6,"div"),m.TgZ(7,"div"),m._uU(8),m.qZA(),m.TgZ(9,"div",7),m.YNc(10,_,3,1,"button",8),m.qZA(),m.qZA(),m.qZA(),m.qZA()),2&t){var o=e.$implicit,n=m.oxw(2);m.xp6(3),m.Q6J("src",o.userId.photo,m.LSH),m.xp6(2),m.Oqu(o.username),m.xp6(3),m.hij(" ",o.email,""),m.xp6(2),m.Q6J("ngForOf",n.buttons)}}function J(t,e){if(1&t&&(m.TgZ(0,"mat-accordion"),m.YNc(1,R,11,4,"div",6),m.qZA()),2&t){var o=m.oxw();m.xp6(1),m.Q6J("ngForOf",o.contacts)}}var G=function(){var t=function(){function t(e,n,r,i,a,c){o(this,t),this.coreService=e,this.snack=n,this.router=r,this.msgService=i,this.asset=a,this.activatedRoute=c,this.selectable=!1,this.editContact=!1,this.roomFactorySub=new g.w,this.contactSub=new g.w,this.StateReporter=new m.vpe,this.buttons=[{icon:"chat",action:this.onClickChat.bind(this)},{icon:"edit",action:this.onClickEdit.bind(this)},{icon:"delete",action:this.onClickDelete.bind(this)}]}return r(t,[{key:"onClickChat",value:function(t){var e=this;this.coreService.createRoom({roomName:t.username,roomPhoto:t.userId.photo,members:[t.userId._id]}).pipe((0,s.q)(1)).subscribe(function(t){e.router.navigate(["../home"],{relativeTo:e.activatedRoute,state:{rememberRoom:!0}})},function(){console.log("failed create room")})}},{key:"onClickEdit",value:function(){this.editContact=!this.editContact}},{key:"onClickDelete",value:function(){}},{key:"ngOnInit",value:function(){var t=this;this.activatedRoute.data.subscribe(function(e){var o;t.contacts=e.contacts,null===(o=t.contacts)||void 0===o||o.forEach(function(e){e.userId.photo=t.asset.buildAsset(e.userId.photo)})}),this.contactSub=this.coreService.ContactsBehaviorSubject.subscribe(function(e){var o;t.contacts=e,null===(o=t.contacts)||void 0===o||o.forEach(function(e){e.userId.photo=t.asset.buildAsset(e.userId.photo)})})}},{key:"ngOnDestroy",value:function(){this.contactSub.unsubscribe()}},{key:"reportState",value:function(t,e){this.StateReporter.emit({id:t,checked:e})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(m.Y36(p.p),m.Y36(Z.f),m.Y36(u.F0),m.Y36(k.e),m.Y36(b.z),m.Y36(u.gz))},t.\u0275cmp=m.Xpm({type:t,selectors:[["app-contact-tile"]],inputs:{selectable:"selectable"},outputs:{StateReporter:"flag"},decls:2,vars:2,consts:[[4,"ngIf"],["id","tile-container",4,"ngFor","ngForOf"],["id","tile-container"],["id","selectable-container"],["color","primary",3,"change"],["alt","contact image","mat-card-avatar","",3,"src"],[4,"ngFor","ngForOf"],["id","contact-actions"],["mat-icon-button","",3,"click",4,"ngFor","ngForOf"],["mat-icon-button","",3,"click"]],template:function(t,e){1&t&&(m.YNc(0,N,2,1,"div",0),m.YNc(1,J,2,1,"mat-accordion",0)),2&t&&(m.Q6J("ngIf",e.selectable),m.xp6(1),m.Q6J("ngIf",!e.selectable))},directives:[c.O5,c.sg,I.oG,T.kc,A.d,F.pp,F.ib,F.yz,y.lW,q.Hw],pipes:[S.W,c.rS],styles:["#contact-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}#selectable-container[_ngcontent-%COMP%]{display:grid;width:100%;grid-template-columns:10% 30% 30% 30%;align-items:start;justify-content:space-between}"]}),t}(),U=i(8295),E=i(9983),O=i(1436),M=["class","chart"];function P(t,e){if(1&t){var o=m.EpF();m.TgZ(0,"span"),m.TgZ(1,"button",8),m.NdJ("click",function(){return m.CHM(o),m.oxw().switchCreateContact()}),m._uU(2,"Create Contact"),m.qZA(),m.qZA()}}function Y(t,e){if(1&t&&(m.TgZ(0,"span"),m.TgZ(1,"button",9),m._uU(2,"Create Room"),m.qZA(),m.qZA()),2&t){var o=m.oxw();m.xp6(1),m.Q6J("disabled",!o.newRoomForm.valid)}}function Q(t,e){1&t&&(m.TgZ(0,"div",18),m._uU(1,"can not create group with no members"),m.qZA())}function H(t,e){if(1&t){var o=m.EpF();m.TgZ(0,"button",19),m.NdJ("click",function(){return m.CHM(o),m.oxw(2).onDiscardImage()}),m._uU(1,"Discard Image"),m.qZA()}}function D(t,e){if(1&t&&m._UZ(0,"img",20),2&t){var o=m.oxw(2);m.Q6J("src",o.newGroupImagePreview,m.LSH)}}function j(t,e){if(1&t){var o=m.EpF();m.TgZ(0,"div"),m.YNc(1,Q,2,0,"div",5),m.TgZ(2,"form",10),m.NdJ("ngSubmit",function(){return m.CHM(o),m.oxw().onSubmitCreateRoom()}),m.TgZ(3,"mat-form-field",11),m.TgZ(4,"mat-label"),m._uU(5,"New Group Name"),m.qZA(),m._UZ(6,"input",12),m.TgZ(7,"mat-error"),m._uU(8," Please choose a valid Name before Submit"),m.qZA(),m.qZA(),m.TgZ(9,"span"),m.TgZ(10,"button",13),m.NdJ("click",function(){return m.CHM(o),m.MAs(15).click()}),m._uU(11,"Select Image..."),m.qZA(),m.qZA(),m.TgZ(12,"span"),m.YNc(13,H,2,0,"button",14),m.qZA(),m.qZA(),m.TgZ(14,"input",15,16),m.NdJ("change",function(t){return m.CHM(o),m.oxw().onPickedGroupImage(t)}),m.qZA(),m.TgZ(16,"div"),m.YNc(17,D,1,1,"img",17),m.qZA(),m.qZA()}if(2&t){var n=m.oxw();m.xp6(1),m.Q6J("ngIf",!(null==n.newRoomForm.errors||!n.newRoomForm.errors.emptyGroupError)),m.xp6(1),m.Q6J("formGroup",n.newRoomForm),m.xp6(11),m.Q6J("ngIf",!!n.newGroupImagePreview),m.xp6(4),m.Q6J("ngIf",!!n.newGroupImagePreview)}}function z(t,e){1&t&&(m.TgZ(0,"div",18),m._uU(1,"this email is already registered as a contact"),m.qZA())}function V(t,e){1&t&&(m.TgZ(0,"div",18),m._uU(1,"this email does not exist on this server"),m.qZA())}function L(t,e){if(1&t){var o=m.EpF();m.TgZ(0,"form",21),m.NdJ("ngSubmit",function(){return m.CHM(o),m.oxw().onSaveNewContact()}),m.TgZ(1,"div",22),m.TgZ(2,"mat-form-field",11),m.TgZ(3,"mat-label"),m._uU(4,"New Contact Name"),m.qZA(),m._UZ(5,"input",23),m.TgZ(6,"mat-error"),m._uU(7," Please choose a valid Name before Submit"),m.qZA(),m.qZA(),m.TgZ(8,"mat-form-field",11),m.TgZ(9,"mat-label"),m._uU(10,"New Contact Email"),m.qZA(),m._UZ(11,"input",24),m.TgZ(12,"mat-error"),m._uU(13," Please choose a valid and registered Email before Submit"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(14,"div"),m.TgZ(15,"button",25),m._uU(16," Save Contact"),m.qZA(),m.qZA(),m.qZA()}if(2&t){var n=m.oxw();m.Q6J("formGroup",n.newContactForm),m.xp6(15),m.Q6J("disabled",!n.newContactForm.valid)}}var $,B,W=[{path:"",component:($=function(){function e(t,n,r,i,a,c){var u,s,l=this;o(this,e),this.errHandler=t,this.coreService=n,this.asset=r,this.snackService=i,this.router=a,this.activatedRoute=c,this.createSub=new g.w,this.createContact=!1,this.contactsForValidation=[],this.createRoom=!1,this.newGroupImagePreview=void 0,this.newGroupMembers=[],this.newRoomForm=new v.cw({newGroupName:new v.NI(null,[v.kI.required,v.kI.max(50),v.kI.min(5)]),newGroupImage:new v.NI(null),imageToUpload:new v.NI(null)},{validators:function(){return l.newGroupMembers.length>=1?null:{emptyGroupError:!0}}}),this.newContactForm=new v.cw({newContactName:new v.NI(null,[v.kI.required]),newContactEmail:new v.NI(null,[v.kI.required,v.kI.email,function(t){return l.coreService.testContactEmail(t.value,l.contactsForValidation)?{DuplicatedEmailError:!0}:null}])}),(null===(s=null===(u=this.router.getCurrentNavigation())||void 0===u?void 0:u.extras.state)||void 0===s?void 0:s.createRoom)&&(this.createRoom=!0)}return r(e,[{key:"ngOnInit",value:function(){var t=this;this.activatedRoute.data.subscribe(function(e){t.contactsForValidation=e.contacts}),this.coreService.ContactsBehaviorSubject.subscribe(function(e){e&&(t.contactsForValidation=e)})}},{key:"goHome",value:function(){this.onDiscardImage(),this.router.navigate(["../home"],{relativeTo:this.activatedRoute})}},{key:"onSubmitCreateRoom",value:function(){var e=this;return console.log("launched on Submit"),this.newRoomForm.valid?(console.log("dev log calling service on create room method"),this.coreService.createRoom({isGroup:!0,roomName:this.newRoomForm.value.newGroupName,roomPhoto:this.newRoomForm.value.newGroupImage,file:this.newRoomForm.value.imageToUpload,members:t(this.newGroupMembers)}).pipe().subscribe(function(t){e.newRoomForm.reset(),e.onDiscardImage(),e.router.navigate(["..","home"],{relativeTo:e.activatedRoute})})):this.snackService.warn("Can not create Group. Please check your input ")()}},{key:"switchCreateContact",value:function(){this.createContact=!this.createContact,this.createContact||this.newContactForm.reset()}},{key:"onSaveNewContact",value:function(){var t=this;if(this.newContactForm.valid)return this.coreService.createContact({username:this.newContactForm.value.newContactName,email:this.newContactForm.value.newContactEmail}).pipe((0,s.q)(1),(0,h.b)(function(e){t.snackService.green("contact created")(),t.newContactForm.reset()})).subscribe(function(e){t.switchCreateContact()},function(){t.newContactForm.controls.newContactEmail.setErrors({notFoundEmail:!0})});this.snackService.warn("Can not create Contact. Please check your input ")()}},{key:"ngOnDestroy",value:function(){this.createSub&&this.createSub.unsubscribe()}},{key:"onPickedGroupImage",value:function(t){var e=this,o=t.target.files[0];this.newRoomForm.patchValue({imageToUpload:o}),this.newRoomForm.patchValue({newGroupImage:o.name}),this.newRoomForm.updateValueAndValidity();var n=new FileReader;n.onload=function(t){e.newGroupImagePreview=n.result},n.readAsDataURL(o)}},{key:"onFlagReceived",value:function(t){t.checked?this.newGroupMembers.push(t.id):this.newGroupMembers=this.newGroupMembers.filter(function(e){return e!==t.id}),this.newRoomForm.updateValueAndValidity()}},{key:"onDiscardImage",value:function(){this.newGroupImagePreview=this.coreService.buildAsset("user-default.png"),this.newRoomForm.controls.newGroupImage.reset(),this.newRoomForm.controls.imageToUpload.reset()}}]),e}(),$.\u0275fac=function(t){return new(t||$)(m.Y36(w.W),m.Y36(p.p),m.Y36(b.z),m.Y36(Z.f),m.Y36(u.F0),m.Y36(u.gz))},$.\u0275cmp=m.Xpm({type:$,selectors:[["app-contact",8,"chart"]],attrs:M,decls:17,vars:7,consts:[[1,"options"],["color","primary"],["type","reset","mat-flat-button","",3,"click"],[4,"ngIf"],[1,"tight-container"],["class","mat-error",4,"ngIf"],["id","_newContactForm","style","margin-bottom: 2px;",3,"formGroup","ngSubmit",4,"ngIf"],[3,"selectable","flag"],["mat-flat-button","",3,"click"],["type","submit","form","_newRoomForm","mat-flat-button","",3,"disabled"],["id","_newRoomForm",1,"spacer",3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","placeholder","Choose a Name","formControlName","newGroupName"],["type","button","mat-stroked-button","","matTooltip","Select a Group Image",3,"click"],["type","button","mat-stroked-button","","matTooltip","Cancel",3,"click",4,"ngIf"],["type","file",3,"change"],["groupImagePickerRef",""],["id","groupImage","alt","group image","matTooltip","group image",3,"src",4,"ngIf"],[1,"mat-error"],["type","button","mat-stroked-button","","matTooltip","Cancel",3,"click"],["id","groupImage","alt","group image","matTooltip","group image",3,"src"],["id","_newContactForm",2,"margin-bottom","2px",3,"formGroup","ngSubmit"],[1,"spacer"],["matInput","","placeholder","Choose a Name","formControlName","newContactName"],["matInput","","placeholder","Choose an Email","formControlName","newContactEmail"],["mat-stroked-button","","type","submit","form","_newContactForm",3,"disabled"]],template:function(t,e){1&t&&(m.TgZ(0,"div",0),m.TgZ(1,"mat-toolbar",1),m.TgZ(2,"mat-toolbar-row"),m.TgZ(3,"span"),m.TgZ(4,"button",2),m.NdJ("click",function(){return e.goHome()}),m._uU(5," Go Home"),m.qZA(),m.qZA(),m.YNc(6,P,3,0,"span",3),m.YNc(7,Y,3,1,"span",3),m.qZA(),m.qZA(),m.TgZ(8,"div",4),m.TgZ(9,"div"),m.YNc(10,j,18,4,"div",3),m.YNc(11,z,2,0,"div",5),m.YNc(12,V,2,0,"div",5),m.YNc(13,L,17,2,"form",6),m._UZ(14,"mat-divider"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(15,"div",4),m.TgZ(16,"app-contact-tile",7),m.NdJ("flag",function(t){return e.onFlagReceived(t)}),m.qZA(),m.qZA()),2&t&&(m.xp6(6),m.Q6J("ngIf",!e.createRoom),m.xp6(1),m.Q6J("ngIf",e.createRoom),m.xp6(3),m.Q6J("ngIf",e.createRoom&&!e.createContact),m.xp6(1),m.Q6J("ngIf",!(null==e.newContactForm.controls.newContactEmail.errors||!e.newContactForm.controls.newContactEmail.errors.DuplicatedEmailError)),m.xp6(1),m.Q6J("ngIf",!(null==e.newContactForm.controls.newContactEmail.errors||!e.newContactForm.controls.newContactEmail.errors.notFoundEmail)),m.xp6(1),m.Q6J("ngIf",e.createContact&&!e.createRoom),m.xp6(3),m.Q6J("selectable",e.createRoom))},directives:[C.Ye,C.rD,y.lW,c.O5,A.d,G,v._Y,v.JL,v.sg,U.KE,U.hX,E.Nt,v.Fj,v.JJ,v.u,U.TO,O.gM],styles:[".tight-container[_ngcontent-%COMP%]{width:-webkit-min-content;width:min-content;min-width:55%;margin:1% auto auto}.options[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background-color:#fff}mat-toolbar-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:20px}.spacer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}input[type=file][_ngcontent-%COMP%]{visibility:hidden}div.spacer[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] > button.mat-stroked-button[_ngcontent-%COMP%]{align-self:center;margin-left:4px}div.spacer[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:flex}#groupImage[_ngcontent-%COMP%]{max-width:50%;min-width:20%}"]}),$),resolve:{contacts:f}}],X=function(){var t=function t(){o(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=m.oAB({type:t}),t.\u0275inj=m.cJS({imports:[[c.ez,u.Bz.forChild(W)],u.Bz]}),t}(),K=((B=function t(){o(this,t)}).\u0275fac=function(t){return new(t||B)},B.\u0275mod=m.oAB({type:B}),B.\u0275inj=m.cJS({imports:[[a.m,X]]}),B)}}])}();