(self.webpackChunkchat_app=self.webpackChunkchat_app||[]).push([[939],{4939:function(t,e,o){"use strict";o.r(e),o.d(e,{ContactsModule:function(){return L}});var n=o(9436),i=o(8583),a=o(9763),r=o(5257),c=o(8002),s=o(7716),m=o(6673),u=o(2468);let l=(()=>{class t{constructor(t,e){this.coreService=t,this.dataService=e}resolve(t,e){return this.coreService.loadContacts().pipe((0,r.q)(1),(0,c.U)(t=>t.data.data))}}return t.\u0275fac=function(e){return new(e||t)(s.LFG(m.p),s.LFG(u.D))},t.\u0275prov=s.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=o(5319),d=o(3342),g=o(3679),h=o(3772),f=o(6284),w=o(2325),b=o(2522),Z=o(1095),v=o(1769),C=o(2684),T=o(7539),I=o(3738),A=o(171),F=o(6627),q=o(7701);function x(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"div",2),s.TgZ(1,"div",3),s.TgZ(2,"mat-checkbox",4),s.NdJ("change",function(e){const o=s.CHM(t).$implicit;return s.oxw(2).reportState(o._id,e.checked)}),s.qZA(),s._UZ(3,"img",5),s.TgZ(4,"span"),s._uU(5),s.ALo(6,"truncate"),s.ALo(7,"titlecase"),s.qZA(),s.TgZ(8,"span"),s._uU(9),s.qZA(),s.qZA(),s._UZ(10,"mat-divider"),s.qZA()}if(2&t){const t=e.$implicit;s.xp6(3),s.Q6J("src",t.userId.photo,s.LSH),s.xp6(2),s.Oqu(s.xi3(6,3,s.lcZ(7,6,t.username),25)),s.xp6(4),s.Oqu(t.email)}}function k(t,e){if(1&t&&(s.TgZ(0,"div"),s.YNc(1,x,11,8,"div",1),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngForOf",t.contacts)}}function N(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"button",9),s.NdJ("click",function(){const e=s.CHM(t).$implicit,o=s.oxw().$implicit;return e.action(o)}),s.TgZ(1,"mat-icon"),s._uU(2),s.qZA(),s.qZA()}if(2&t){const t=e.$implicit;s.xp6(2),s.Oqu(t.icon)}}function S(t,e){if(1&t&&(s.TgZ(0,"div"),s.TgZ(1,"mat-expansion-panel"),s.TgZ(2,"mat-expansion-panel-header"),s._UZ(3,"img",5),s.TgZ(4,"span"),s._uU(5),s.qZA(),s.qZA(),s.TgZ(6,"div"),s.TgZ(7,"div"),s._uU(8),s.qZA(),s.TgZ(9,"div",7),s.YNc(10,N,3,1,"button",8),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t){const t=e.$implicit,o=s.oxw(2);s.xp6(3),s.Q6J("src",t.userId.photo,s.LSH),s.xp6(2),s.Oqu(t.username),s.xp6(3),s.hij(" ",t.email,""),s.xp6(2),s.Q6J("ngForOf",o.buttons)}}function _(t,e){if(1&t&&(s.TgZ(0,"mat-accordion"),s.YNc(1,S,11,4,"div",6),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngForOf",t.contacts)}}let R=(()=>{class t{constructor(t,e,o,n,i,a){this.coreService=t,this.snack=e,this.router=o,this.msgService=n,this.asset=i,this.activatedRoute=a,this.selectable=!1,this.editContact=!1,this.roomFactorySub=new p.w,this.contactSub=new p.w,this.StateReporter=new s.vpe,this.buttons=[{icon:"chat",action:this.onClickChat.bind(this)},{icon:"edit",action:this.onClickEdit.bind(this)},{icon:"delete",action:this.onClickDelete.bind(this)}]}onClickChat(t){this.coreService.createRoom({roomName:t.username,roomPhoto:t.userId.photo,members:[t.userId._id]}).pipe((0,r.q)(1)).subscribe(t=>{this.router.navigate(["../home"],{relativeTo:this.activatedRoute,state:{rememberRoom:!0}})},()=>{console.log("failed create room")})}onClickEdit(){this.editContact=!this.editContact}onClickDelete(){}ngOnInit(){this.activatedRoute.data.subscribe(t=>{var e;this.contacts=t.contacts,null===(e=this.contacts)||void 0===e||e.forEach(t=>{t.userId.photo=this.asset.buildAsset(t.userId.photo)})}),this.contactSub=this.coreService.ContactsBehaviorSubject.subscribe(t=>{var e;this.contacts=t,null===(e=this.contacts)||void 0===e||e.forEach(t=>{t.userId.photo=this.asset.buildAsset(t.userId.photo)})})}ngOnDestroy(){this.contactSub.unsubscribe()}reportState(t,e){this.StateReporter.emit({id:t,checked:e})}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(m.p),s.Y36(w.f),s.Y36(a.F0),s.Y36(C.e),s.Y36(f.z),s.Y36(a.gz))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-contact-tile"]],inputs:{selectable:"selectable"},outputs:{StateReporter:"flag"},decls:2,vars:2,consts:[[4,"ngIf"],["id","tile-container",4,"ngFor","ngForOf"],["id","tile-container"],["id","selectable-container"],["color","primary",3,"change"],["alt","contact image","mat-card-avatar","",3,"src"],[4,"ngFor","ngForOf"],["id","contact-actions"],["mat-icon-button","",3,"click",4,"ngFor","ngForOf"],["mat-icon-button","",3,"click"]],template:function(t,e){1&t&&(s.YNc(0,k,2,1,"div",0),s.YNc(1,_,2,1,"mat-accordion",0)),2&t&&(s.Q6J("ngIf",e.selectable),s.xp6(1),s.Q6J("ngIf",!e.selectable))},directives:[i.O5,i.sg,T.oG,I.kc,v.d,A.pp,A.ib,A.yz,Z.lW,F.Hw],pipes:[q.W,i.rS],styles:["#contact-actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}#selectable-container[_ngcontent-%COMP%]{display:grid;width:100%;grid-template-columns:10% 30% 30% 30%;align-items:start;justify-content:space-between}"]}),t})();var y=o(8295),J=o(9983),G=o(1436);const U=["class","chart"];function E(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"span"),s.TgZ(1,"button",8),s.NdJ("click",function(){return s.CHM(t),s.oxw().switchCreateContact()}),s._uU(2,"Create Contact"),s.qZA(),s.qZA()}}function M(t,e){if(1&t&&(s.TgZ(0,"span"),s.TgZ(1,"button",9),s._uU(2,"Create Room"),s.qZA(),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("disabled",!t.newRoomForm.valid)}}function O(t,e){1&t&&(s.TgZ(0,"div",18),s._uU(1,"can not create group with no members"),s.qZA())}function P(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"button",19),s.NdJ("click",function(){return s.CHM(t),s.oxw(2).onDiscardImage()}),s._uU(1,"Discard Image"),s.qZA()}}function Y(t,e){if(1&t&&s._UZ(0,"img",20),2&t){const t=s.oxw(2);s.Q6J("src",t.newGroupImagePreview,s.LSH)}}function Q(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"div"),s.YNc(1,O,2,0,"div",5),s.TgZ(2,"form",10),s.NdJ("ngSubmit",function(){return s.CHM(t),s.oxw().onSubmitCreateRoom()}),s.TgZ(3,"mat-form-field",11),s.TgZ(4,"mat-label"),s._uU(5,"New Group Name"),s.qZA(),s._UZ(6,"input",12),s.TgZ(7,"mat-error"),s._uU(8," Please choose a valid Name before Submit"),s.qZA(),s.qZA(),s.TgZ(9,"span"),s.TgZ(10,"button",13),s.NdJ("click",function(){return s.CHM(t),s.MAs(15).click()}),s._uU(11,"Select Image..."),s.qZA(),s.qZA(),s.TgZ(12,"span"),s.YNc(13,P,2,0,"button",14),s.qZA(),s.qZA(),s.TgZ(14,"input",15,16),s.NdJ("change",function(e){return s.CHM(t),s.oxw().onPickedGroupImage(e)}),s.qZA(),s.TgZ(16,"div"),s.YNc(17,Y,1,1,"img",17),s.qZA(),s.qZA()}if(2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",!(null==t.newRoomForm.errors||!t.newRoomForm.errors.emptyGroupError)),s.xp6(1),s.Q6J("formGroup",t.newRoomForm),s.xp6(11),s.Q6J("ngIf",!!t.newGroupImagePreview),s.xp6(4),s.Q6J("ngIf",!!t.newGroupImagePreview)}}function H(t,e){1&t&&(s.TgZ(0,"div",18),s._uU(1,"this email is already registered as a contact"),s.qZA())}function D(t,e){1&t&&(s.TgZ(0,"div",18),s._uU(1,"this email does not exist on this server"),s.qZA())}function z(t,e){if(1&t){const t=s.EpF();s.TgZ(0,"form",21),s.NdJ("ngSubmit",function(){return s.CHM(t),s.oxw().onSaveNewContact()}),s.TgZ(1,"div",22),s.TgZ(2,"mat-form-field",11),s.TgZ(3,"mat-label"),s._uU(4,"New Contact Name"),s.qZA(),s._UZ(5,"input",23),s.TgZ(6,"mat-error"),s._uU(7," Please choose a valid Name before Submit"),s.qZA(),s.qZA(),s.TgZ(8,"mat-form-field",11),s.TgZ(9,"mat-label"),s._uU(10,"New Contact Email"),s.qZA(),s._UZ(11,"input",24),s.TgZ(12,"mat-error"),s._uU(13," Please choose a valid and registered Email before Submit"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(14,"div"),s.TgZ(15,"button",25),s._uU(16," Save Contact"),s.qZA(),s.qZA(),s.qZA()}if(2&t){const t=s.oxw();s.Q6J("formGroup",t.newContactForm),s.xp6(15),s.Q6J("disabled",!t.newContactForm.valid)}}const V=[{path:"",component:(()=>{class t{constructor(t,e,o,n,i,a){var r,c;this.errHandler=t,this.coreService=e,this.asset=o,this.snackService=n,this.router=i,this.activatedRoute=a,this.createSub=new p.w,this.createContact=!1,this.contactsForValidation=[],this.createRoom=!1,this.newGroupImagePreview=void 0,this.newGroupMembers=[],this.newRoomForm=new g.cw({newGroupName:new g.NI(null,[g.kI.required,g.kI.max(50),g.kI.min(5)]),newGroupImage:new g.NI(null),imageToUpload:new g.NI(null)},{validators:()=>this.newGroupMembers.length>=1?null:{emptyGroupError:!0}}),this.newContactForm=new g.cw({newContactName:new g.NI(null,[g.kI.required]),newContactEmail:new g.NI(null,[g.kI.required,g.kI.email,t=>this.coreService.testContactEmail(t.value,this.contactsForValidation)?{DuplicatedEmailError:!0}:null])}),(null===(c=null===(r=this.router.getCurrentNavigation())||void 0===r?void 0:r.extras.state)||void 0===c?void 0:c.createRoom)&&(this.createRoom=!0)}ngOnInit(){this.activatedRoute.data.subscribe(t=>{this.contactsForValidation=t.contacts}),this.coreService.ContactsBehaviorSubject.subscribe(t=>{t&&(this.contactsForValidation=t)})}goHome(){this.onDiscardImage(),this.router.navigate(["../home"],{relativeTo:this.activatedRoute})}onSubmitCreateRoom(){return console.log("launched on Submit"),this.newRoomForm.valid?(console.log("dev log calling service on create room method"),this.coreService.createRoom({isGroup:!0,roomName:this.newRoomForm.value.newGroupName,roomPhoto:this.newRoomForm.value.newGroupImage,file:this.newRoomForm.value.imageToUpload,members:[...this.newGroupMembers]}).pipe().subscribe(t=>{this.newRoomForm.reset(),this.onDiscardImage(),this.router.navigate(["..","home"],{relativeTo:this.activatedRoute})})):this.snackService.warn("Can not create Group. Please check your input ")()}switchCreateContact(){this.createContact=!this.createContact,this.createContact||this.newContactForm.reset()}onSaveNewContact(){if(this.newContactForm.valid)return this.coreService.createContact({username:this.newContactForm.value.newContactName,email:this.newContactForm.value.newContactEmail}).pipe((0,r.q)(1),(0,d.b)(t=>{this.snackService.green("contact created")(),this.newContactForm.reset()})).subscribe(t=>{this.switchCreateContact()},()=>{this.newContactForm.controls.newContactEmail.setErrors({notFoundEmail:!0})});this.snackService.warn("Can not create Contact. Please check your input ")()}ngOnDestroy(){this.createSub&&this.createSub.unsubscribe()}onPickedGroupImage(t){const e=t.target.files[0];this.newRoomForm.patchValue({imageToUpload:e}),this.newRoomForm.patchValue({newGroupImage:e.name}),this.newRoomForm.updateValueAndValidity();const o=new FileReader;o.onload=t=>{this.newGroupImagePreview=o.result},o.readAsDataURL(e)}onFlagReceived(t){t.checked?this.newGroupMembers.push(t.id):this.newGroupMembers=this.newGroupMembers.filter(e=>e!==t.id),this.newRoomForm.updateValueAndValidity()}onDiscardImage(){this.newGroupImagePreview=this.coreService.buildAsset("user-default.png"),this.newRoomForm.controls.newGroupImage.reset(),this.newRoomForm.controls.imageToUpload.reset()}}return t.\u0275fac=function(e){return new(e||t)(s.Y36(h.W),s.Y36(m.p),s.Y36(f.z),s.Y36(w.f),s.Y36(a.F0),s.Y36(a.gz))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-contact",8,"chart"]],attrs:U,decls:17,vars:7,consts:[[1,"options"],["color","primary"],["type","reset","mat-flat-button","",3,"click"],[4,"ngIf"],[1,"tight-container"],["class","mat-error",4,"ngIf"],["id","_newContactForm","style","margin-bottom: 2px;",3,"formGroup","ngSubmit",4,"ngIf"],[3,"selectable","flag"],["mat-flat-button","",3,"click"],["type","submit","form","_newRoomForm","mat-flat-button","",3,"disabled"],["id","_newRoomForm",1,"spacer",3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","placeholder","Choose a Name","formControlName","newGroupName"],["type","button","mat-stroked-button","","matTooltip","Select a Group Image",3,"click"],["type","button","mat-stroked-button","","matTooltip","Cancel",3,"click",4,"ngIf"],["type","file",3,"change"],["groupImagePickerRef",""],["id","groupImage","alt","group image","matTooltip","group image",3,"src",4,"ngIf"],[1,"mat-error"],["type","button","mat-stroked-button","","matTooltip","Cancel",3,"click"],["id","groupImage","alt","group image","matTooltip","group image",3,"src"],["id","_newContactForm",2,"margin-bottom","2px",3,"formGroup","ngSubmit"],[1,"spacer"],["matInput","","placeholder","Choose a Name","formControlName","newContactName"],["matInput","","placeholder","Choose an Email","formControlName","newContactEmail"],["mat-stroked-button","","type","submit","form","_newContactForm",3,"disabled"]],template:function(t,e){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"mat-toolbar",1),s.TgZ(2,"mat-toolbar-row"),s.TgZ(3,"span"),s.TgZ(4,"button",2),s.NdJ("click",function(){return e.goHome()}),s._uU(5," Go Home"),s.qZA(),s.qZA(),s.YNc(6,E,3,0,"span",3),s.YNc(7,M,3,1,"span",3),s.qZA(),s.qZA(),s.TgZ(8,"div",4),s.TgZ(9,"div"),s.YNc(10,Q,18,4,"div",3),s.YNc(11,H,2,0,"div",5),s.YNc(12,D,2,0,"div",5),s.YNc(13,z,17,2,"form",6),s._UZ(14,"mat-divider"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(15,"div",4),s.TgZ(16,"app-contact-tile",7),s.NdJ("flag",function(t){return e.onFlagReceived(t)}),s.qZA(),s.qZA()),2&t&&(s.xp6(6),s.Q6J("ngIf",!e.createRoom),s.xp6(1),s.Q6J("ngIf",e.createRoom),s.xp6(3),s.Q6J("ngIf",e.createRoom&&!e.createContact),s.xp6(1),s.Q6J("ngIf",!(null==e.newContactForm.controls.newContactEmail.errors||!e.newContactForm.controls.newContactEmail.errors.DuplicatedEmailError)),s.xp6(1),s.Q6J("ngIf",!(null==e.newContactForm.controls.newContactEmail.errors||!e.newContactForm.controls.newContactEmail.errors.notFoundEmail)),s.xp6(1),s.Q6J("ngIf",e.createContact&&!e.createRoom),s.xp6(3),s.Q6J("selectable",e.createRoom))},directives:[b.Ye,b.rD,Z.lW,i.O5,v.d,R,g._Y,g.JL,g.sg,y.KE,y.hX,J.Nt,g.Fj,g.JJ,g.u,y.TO,G.gM],styles:[".tight-container[_ngcontent-%COMP%]{width:-webkit-min-content;width:min-content;min-width:55%;margin:1% auto auto}.options[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1;background-color:#fff}mat-toolbar-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:20px}.spacer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}input[type=file][_ngcontent-%COMP%]{visibility:hidden}div.spacer[_ngcontent-%COMP%] > span[_ngcontent-%COMP%] > button.mat-stroked-button[_ngcontent-%COMP%]{align-self:center;margin-left:4px}div.spacer[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{display:flex}#groupImage[_ngcontent-%COMP%]{max-width:50%;min-width:20%}"]}),t})(),resolve:{contacts:l}}];let j=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[i.ez,a.Bz.forChild(V)],a.Bz]}),t})(),L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[n.m,j]]}),t})()}}]);