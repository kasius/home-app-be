(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"Qu/u":function(t,o,n){"use strict";n.r(o),n.d(o,"MovimientosProductoModule",(function(){return R}));var e=n("SVse"),i=n("iInd"),c=n("HILO"),a=n("eIep"),d=n("itXk"),r=n("krsd"),m=n("PxUT"),s=n("8Y7J"),u=n("tqRt"),b=n("o+uz"),l=n("1AYW"),p=n("KcXr"),g=n("wh36"),f=n("cDif"),v=n("0/Vh"),_=n("WU+o");function h(t,o){1&t&&s.Ob(0,"app-header-app",11),2&t&&s.mc("msdIcon","back_app")}function x(t,o){1&t&&s.Ob(0,"div")}function y(t,o){if(1&t&&(s.Tb(0,"div",18),s.Tb(1,"div",19),s.Gc(2,"L\xednea de Cr\xe9dito"),s.Sb(),s.Tb(3,"div",20),s.Gc(4),s.fc(5,"currencyCLP"),s.Sb(),s.Sb()),2&t){const t=s.ec(3);s.Ab(4),s.Ic(" $",s.gc(5,1,null==t.lc?null:t.lc.montoDisponible),"")}}function C(t,o){if(1&t&&(s.Tb(0,"div",18),s.Tb(1,"div",19),s.Gc(2," Saldo Contable"),s.Sb(),s.Tb(3,"div",20),s.Gc(4),s.fc(5,"currencyCLP"),s.Sb(),s.Sb(),s.Tb(6,"div",18),s.Tb(7,"div",19),s.Gc(8," Retenciones"),s.Sb(),s.Tb(9,"div",20),s.Gc(10),s.fc(11,"currencyCLP"),s.Sb(),s.Sb(),s.Ec(12,y,6,3,"div",21),s.Tb(13,"div",18),s.Tb(14,"div",19),s.Gc(15,"Disponible total"),s.Sb(),s.Tb(16,"div",20),s.Gc(17),s.fc(18,"currencyCLP"),s.Sb(),s.Sb()),2&t){const t=s.ec(2);s.Ab(4),s.Ic(" $",s.gc(5,4,null==t.cuenta?null:t.cuenta.saldoContable),""),s.Ab(6),s.Ic(" $",s.gc(11,6,null==t.cuenta?null:t.cuenta.retenciones),""),s.Ab(2),s.mc("ngIf",null==t.lc?null:t.lc.montoDisponible),s.Ab(5),s.Ic(" $",s.gc(18,8,(null==t.cuenta?null:t.cuenta.saldoContable)+(null==t.lc?null:t.lc.montoDisponible)),"")}}function O(t,o){if(1&t&&(s.Tb(0,"div",18),s.Tb(1,"div",19),s.Gc(2),s.Sb(),s.Tb(3,"div",20),s.Gc(4),s.Sb(),s.Sb(),s.Tb(5,"div",18),s.Tb(6,"div",19),s.Gc(7,"Monto utilizado"),s.Sb(),s.Tb(8,"div",20),s.Gc(9),s.fc(10,"currencyCLP"),s.Sb(),s.Sb(),s.Tb(11,"div",18),s.Tb(12,"div",19),s.Gc(13,"Monto autorizado"),s.Sb(),s.Tb(14,"div",20),s.Gc(15),s.fc(16,"currencyCLP"),s.Sb(),s.Sb()),2&t){const t=s.ec(2);s.Ab(2),s.Hc(t.creditLineOf(t.cuenta)),s.Ab(2),s.Ic(" ",t.cuenta.nroCtaCteAsociada,""),s.Ab(5),s.Ic(" $ ",s.gc(10,4,null==t.cuenta?null:t.cuenta.montoUtilizado),""),s.Ab(6),s.Ic(" $",s.gc(16,6,null==t.cuenta?null:t.cuenta.montoAutorizado),"")}}function P(t,o){if(1&t&&(s.Tb(0,"div",12),s.Ob(1,"app-card-producto",13),s.Tb(2,"div",14),s.Ec(3,x,1,0,"div",15),s.Ec(4,C,19,10,"ng-template",null,16,s.Fc),s.Ec(6,O,17,8,"ng-template",null,17,s.Fc),s.Sb(),s.Sb()),2&t){const t=s.vc(5),o=s.vc(7),n=s.ec();s.Ab(1),s.mc("cuenta",n.cuenta),s.Ab(2),s.mc("ngIf",n.itsProductAccount(n.cuenta.codigo))("ngIfThen",t)("ngIfElse",o)}}function M(t,o){if(1&t){const t=s.Ub();s.Tb(0,"button",25),s.ac("click",(function(){return s.yc(t),s.ec(2).ahorro()})),s.Gc(1,"Ahorra aqu\xed"),s.Sb()}}function T(t,o){if(1&t&&(s.Tb(0,"div",12),s.Ob(1,"app-card-ahorro",22),s.Tb(2,"div",14),s.Tb(3,"div",18),s.Tb(4,"div",19),s.Gc(5," Saldo Contable"),s.Sb(),s.Tb(6,"div",20),s.Gc(7),s.fc(8,"currencyCLP"),s.Sb(),s.Sb(),s.Tb(9,"div",18),s.Tb(10,"div",19),s.Gc(11," Retenciones"),s.Sb(),s.Tb(12,"div",20),s.Gc(13),s.Sb(),s.Sb(),s.Tb(14,"div",18),s.Tb(15,"div",19),s.Gc(16,"N\xba giros del periodo"),s.Sb(),s.Tb(17,"div",20),s.Gc(18),s.Sb(),s.Sb(),s.Sb(),s.Ob(19,"div",23),s.Ec(20,M,2,0,"button",24),s.Sb()),2&t){const t=s.ec();s.Ab(1),s.mc("cuentaAhorro",t.cuenta),s.Ab(6),s.Ic("$",s.gc(8,5,null==t.cuenta?null:t.cuenta.saldoAhorroContable),""),s.Ab(6),s.Ic("$",null==t.cuenta?null:t.cuenta.saldoRetenido,""),s.Ab(5),s.Hc(null==t.cuenta?null:t.cuenta.giros),s.Ab(2),s.mc("ngIf",(null==t.cuenta?null:t.cuenta.codigoNumericoProducto)===t.ahorraAquiButton)}}function S(t,o){1&t&&(s.Tb(0,"div",26),s.Gc(1,"No hay movimientos disponibles a la fecha"),s.Sb())}function A(t,o){1&t&&(s.Tb(0,"div",27),s.Ob(1,"div",28),s.Tb(2,"div",29),s.Ob(3,"div",30),s.Ob(4,"div",31),s.Ob(5,"div",32),s.Sb(),s.Tb(6,"div",29),s.Ob(7,"div",30),s.Ob(8,"div",31),s.Ob(9,"div",32),s.Sb(),s.Tb(10,"div",29),s.Ob(11,"div",30),s.Ob(12,"div",31),s.Ob(13,"div",32),s.Sb(),s.Tb(14,"div",29),s.Ob(15,"div",30),s.Ob(16,"div",31),s.Ob(17,"div",32),s.Sb(),s.Tb(18,"div",29),s.Ob(19,"div",30),s.Ob(20,"div",31),s.Ob(21,"div",32),s.Sb(),s.Sb())}function I(t,o){if(1&t&&s.Ob(0,"app-list-item-movimiento",39),2&t){const t=o.$implicit,n=s.ec(3);s.mc("glosa",t.desc)("monto",t.monto)("cargo",t.tip_mov)("detalle",t)("producto",n.cuenta.nombre)("show","ahorro"!==n.typeMovements)("lugar",t.comuna)("hora",t.horaReal)}}function k(t,o){if(1&t&&(s.Tb(0,"div",35),s.Tb(1,"div",36),s.Ob(2,"msd-icon",37),s.Gc(3),s.fc(4,"date"),s.Sb(),s.Ec(5,I,1,8,"app-list-item-movimiento",38),s.Sb()),2&t){const t=o.$implicit;s.Ab(3),s.Ic("",s.jc(4,2,t.fecha,"fullDate","0000","cl")," "),s.Ab(2),s.mc("ngForOf",t.movimientosAgrupados)}}function w(t,o){if(1&t&&(s.Tb(0,"div",33),s.Ec(1,k,6,7,"div",34),s.Sb()),2&t){const t=s.ec();s.Ab(1),s.mc("ngForOf",t.movimientos)}}function E(t,o){if(1&t&&(s.Tb(0,"div",40),s.Ob(1,"msd-fab-button",41),s.Sb()),2&t){const t=s.ec();s.Ab(1),s.mc("typeMenu",t.typeMenu)}}const G=[{path:"",component:(()=>{class t{constructor(t,o,n){this.movimientosStore$=t,this.productosStore$=o,this.ahorroStore$=n,this.ahorraAquiButton="0533",this.ahorroVivienda="0318",this.countA=0,this.countC=0}ngOnInit(){this.movimientosSubscription=this.movimientosStore$.select(c.c.seleccionarCuentaParaBuscarMovimientos).pipe(Object(a.a)(t=>(this.typeMovements=t.typeMovements,this.selector$="ahorro"===t.typeMovements?this.ahorroStore$.select(m.c.seleccionarCuentaAhorroPorId(t.accountToFind)):this.productosStore$.select(r.c.seleccionarProductoPorId(t.accountToFind)),Object(d.a)([this.movimientosStore$.select(c.c.seleccionarMovimientoPorId(t.accountToFind)),this.selector$])))).subscribe(([t,o])=>{this.cuenta=o.productoEncontrado,this.lc=o.lc,this.movimientos=t,this.movimientosFilter=t}),this.typeMenu=!0}ngOnDestroy(){this.movimientosSubscription.unsubscribe()}selectAbonos(){this.countA++,this.countC=0,1==this.countA?(document.getElementById("abono").classList.replace("filtro-movimientos__button--btn-disble","filtro-movimientos__button--abono-active"),document.getElementById("cargo").classList.replace("filtro-movimientos__button--cargo-active","filtro-movimientos__button--btn-disble"),this.movimientos=this.movimientosFilter.map(t=>{const o=t.movimientosAgrupados.filter(t=>{if("Credit"===t.tip_mov)return t});return{fecha:t.fecha,movimientosAgrupados:o}}).map(t=>{if(t.movimientosAgrupados.length)return t}).filter(Boolean)):this.countA>1&&(this.countA=0,document.getElementById("abono").classList.replace("filtro-movimientos__button--abono-active","filtro-movimientos__button--btn-disble"),this.movimientos=this.movimientosFilter)}selectCargo(){this.countC++,this.countA=0,1==this.countC?(document.getElementById("cargo").classList.replace("filtro-movimientos__button--btn-disble","filtro-movimientos__button--cargo-active"),document.getElementById("abono").classList.replace("filtro-movimientos__button--abono-active","filtro-movimientos__button--btn-disble"),this.movimientos=this.movimientosFilter.map(t=>{const o=t.movimientosAgrupados.filter(t=>{if("Debit"===t.tip_mov)return t});return{fecha:t.fecha,movimientosAgrupados:o}}).map(t=>{if(t.movimientosAgrupados.length)return t}).filter(Boolean)):this.countC>1&&(this.countC=0,document.getElementById("cargo").classList.replace("filtro-movimientos__button--cargo-active","filtro-movimientos__button--btn-disble"),this.movimientos=this.movimientosFilter)}ahorro(){window.location.href="/apps/ahorrovivienda-app/tef"}itsProductAccount(t){return"CCT"===t||"CTV"===t}accountTypeToShowFavButton(t){return"TI1"===t||"TIT"===t}creditLineOf(t){return t.mnemonic&&"LINEA_CREDITO_CUENTA_CORRIENTE"===t.mnemonic?"Cuenta Corriente":t.mnemonic&&"LINEA_CREDITO_CHEQUERA_ELECTRONICA"===t.mnemonic?"Chequera Electr\xf3nica":"Cuenta Corriente"}}return t.\u0275fac=function(o){return new(o||t)(s.Nb(u.h),s.Nb(u.h),s.Nb(u.h))},t.\u0275cmp=s.Hb({type:t,selectors:[["app-movimientos-producto"]],decls:16,vars:7,consts:[["title","Saldos y movimientos",3,"msdIcon",4,"ngIf"],["class","content-producto",4,"ngIf"],[1,"header-movimientos-list"],[1,"heder-movimientos-title"],[1,"filtro-movimientos"],["id","abono",1,"filtro-movimientos__button","filtro-movimientos__button--btn-disble",3,"click"],["id","cargo",1,"filtro-movimientos__button","filtro-movimientos__button--btn-disble",3,"click"],["class","sin-movimientos",4,"ngIf"],["class","msd-dummy-card-mov",4,"ngIf"],["class","movimientos-container",4,"ngIf"],["class","fab-button",4,"ngIf"],["title","Saldos y movimientos",3,"msdIcon"],[1,"content-producto"],[3,"cuenta"],[1,"detalle-cuenta"],[4,"ngIf","ngIfThen","ngIfElse"],["cuentaProducto",""],["cuentaLC",""],[1,"detalle-cuenta__list-item"],[1,"detalle-cuenta__label"],[1,"detalle-cuenta__value"],["class","detalle-cuenta__list-item",4,"ngIf"],[3,"cuentaAhorro"],[1,"bg-animacion"],["msdPrimary","",3,"click",4,"ngIf"],["msdPrimary","",3,"click"],[1,"sin-movimientos"],[1,"msd-dummy-card-mov"],[1,"msd-dummy-card-mov__fecha"],[1,"content-glosa"],[1,"msd-dummy-card-mov__glosa"],[1,"msd-dummy-card-mov__monto"],[1,"msd-dummy-card-mov__flecha"],[1,"movimientos-container"],["class","fecha-group",4,"ngFor","ngForOf"],[1,"fecha-group"],[1,"fecha-group__fecha"],["name","calendar"],[3,"glosa","monto","cargo","detalle","producto","show","lugar","hora",4,"ngFor","ngForOf"],[3,"glosa","monto","cargo","detalle","producto","show","lugar","hora"],[1,"fab-button"],[3,"typeMenu"]],template:function(t,o){1&t&&(s.Ec(0,h,1,1,"app-header-app",0),s.Ec(1,P,8,4,"div",1),s.Ec(2,T,21,7,"div",1),s.Tb(3,"div",2),s.Tb(4,"div",3),s.Gc(5,"Movimientos"),s.Sb(),s.Tb(6,"div",4),s.Tb(7,"button",5),s.ac("click",(function(){return o.selectAbonos()})),s.Gc(8," Abonos "),s.Sb(),s.Tb(9,"button",6),s.ac("click",(function(){return o.selectCargo()})),s.Gc(10," Cargos "),s.Sb(),s.Sb(),s.Sb(),s.Ec(11,S,2,0,"div",7),s.Ec(12,A,22,0,"div",8),s.Ec(13,w,2,1,"div",9),s.Ec(14,E,2,1,"div",10),s.Ob(15,"app-modo-seguro-fab")),2&t&&(s.mc("ngIf",o.cuenta),s.Ab(1),s.mc("ngIf","productos"===o.typeMovements),s.Ab(1),s.mc("ngIf","ahorro"===o.typeMovements),s.Ab(9),s.mc("ngIf",o.movimientos&&0===o.movimientos.length),s.Ab(1),s.mc("ngIf",!o.movimientos),s.Ab(1),s.mc("ngIf",o.movimientos&&o.movimientos.length>0),s.Ab(1),s.mc("ngIf",o.itsProductAccount(o.cuenta.codigo)&&o.accountTypeToShowFavButton(o.cuenta.tipoCuenta)))},directives:[e.o,b.a,l.a,p.a,g.a,f.g,e.n,f.n,v.a,_.a],pipes:[f.j,e.f],styles:['[hidden][_ngcontent-%COMP%]{display:none!important}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.content-producto[_ngcontent-%COMP%]{padding:16px 24px;background:#f6f7f8;position:relative}.content-producto[_ngcontent-%COMP%]   app-card-ahorro[_ngcontent-%COMP%], .content-producto[_ngcontent-%COMP%]   app-card-producto[_ngcontent-%COMP%]{position:relative;display:block;z-index:1}.header-movimientos-list[_ngcontent-%COMP%]{padding:12px 16px 8px;align-items:center;display:flex;background:#fff}.header-movimientos-list[_ngcontent-%COMP%]   title[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.detalle-cuenta[_ngcontent-%COMP%]{background:#fff;display:flex;flex-direction:column;box-shadow:0 4px 8px 0 rgba(0,0,0,.08);border-radius:0 0 8px 8px;z-index:2;top:-6px;padding:9px 16px;position:relative}.detalle-cuenta[_ngcontent-%COMP%]:before{content:"";display:flex;border-top:1px solid #e9ecf0;left:16px;right:16px;height:1px;top:0;position:absolute}.detalle-cuenta__list-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:12px}.detalle-cuenta__value[_ngcontent-%COMP%]{font-weight:600}.filtro-movimientos[_ngcontent-%COMP%]{margin-left:auto}.filtro-movimientos__button[_ngcontent-%COMP%]{font-size:12px;border-radius:60px;border:1px solid #d9dbe0;font-weight:700;padding:3px 8px;margin-right:8px;background:#fff;color:#868c99;outline:none;transition:.24s cubic-bezier(.1,.1,.25,.9)}.filtro-movimientos__button[_ngcontent-%COMP%]:last-child{margin-right:0}.filtro-movimientos__button--cargo-active[_ngcontent-%COMP%]{color:#d64040;border:1px solid #d64040;background:rgba(214,64,64,.1)}.filtro-movimientos__button--abono-active[_ngcontent-%COMP%]{color:#06c47b;border-color:#06c47b;background:rgba(6,196,123,.1)}.filtro-movimientos__button--btn-disble[_ngcontent-%COMP%]{color:#868c99;border:1px solid #d9dbe0}.movimientos-container[_ngcontent-%COMP%]{background:#f6f7f8;margin-bottom:72px}.fecha-group[_ngcontent-%COMP%]{background:#fff;margin-bottom:8px}.fecha-group__fecha[_ngcontent-%COMP%]{font-size:14px;display:flex;align-items:center;color:#868c99;padding:9px 16px 0;text-transform:lowercase}.fecha-group__fecha[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}.fecha-group__fecha[_ngcontent-%COMP%]   msd-icon[_ngcontent-%COMP%]{margin-right:4px}.fecha-group__fecha[_ngcontent-%COMP%]   msd-icon[_ngcontent-%COMP%]     svg{fill:#868c99}.bg-animacion[_ngcontent-%COMP%]{position:absolute;top:-1px;right:0;left:0;height:180px;width:100%;background-image:linear-gradient(90deg,#ff9100,#f40);border-radius:0 0 80% 40%;box-sizing:content-box;-webkit-animation:bg-up .24s cubic-bezier(.1,.1,.25,.9) both;animation:bg-up .24s cubic-bezier(.1,.1,.25,.9) both}@-webkit-keyframes bg-up{to{height:64px;border-radius:0 0 80% 15%}}@keyframes bg-up{to{height:64px;border-radius:0 0 80% 15%}}  .msd-alert-card--info,   .msd-alert-card__text{color:#444!important}',"[hidden][_ngcontent-%COMP%]{display:none!important}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.msd-dummy-container-horizontal[_ngcontent-%COMP%]{display:flex;padding:0 24px 24px;flex-wrap:unset;overflow:hidden}.msd-dummy-card-ti[_ngcontent-%COMP%]{padding:12px;background:#fff;height:112px;width:88px;box-shadow:0 4px 8px 0 rgba(0,0,0,.08);align-items:center;border-radius:8px;justify-content:center;display:flex;text-align:center;flex-direction:column;margin-right:16px;flex-shrink:0}.msd-dummy-card-ti__icono[_ngcontent-%COMP%]{background:#e1e4e7;border-radius:4px;margin-bottom:12px;width:40px;height:40px}.msd-dummy-card-ti__text[_ngcontent-%COMP%]{height:10px;width:70%;background:#e1e4e7;border-radius:4px;display:flex;margin-bottom:4px}.msd-dummy-card-prod[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.08);border-radius:8px;margin:0 24px 16px;padding:12px 16px}.msd-dummy-card-prod[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{margin-bottom:0}.msd-dummy-card-prod__nombre[_ngcontent-%COMP%]{height:16px;background:#e1e4e7;border-radius:4px;margin-bottom:8px;width:80%}.msd-dummy-card-prod__saldo[_ngcontent-%COMP%]{height:40px;background:#e1e4e7;border-radius:4px;margin-bottom:8px;width:50%}.msd-dummy-card-prod__saldo-text[_ngcontent-%COMP%]{height:10px;width:50%;background:#e1e4e7;border-radius:4px}.msd-dummy-card-prod__ultimos-movimientos[_ngcontent-%COMP%]{border-top:1px solid #e9ecf0;font-size:14px;font-weight:800;margin:12px -16px 0;padding:12px 16px 0}.msd-dummy-card-prod__ultimos-movimientos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#e1e4e7;height:16px;width:60%;display:block;border-radius:4px}.msd-dummy-card-mov[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:#fff;padding:12px 16px}.msd-dummy-card-mov[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{margin-bottom:0}.msd-dummy-card-mov[_ngcontent-%COMP%]   .content-glosa[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding-bottom:12px;margin-bottom:12px;border-bottom:1px solid #e9ecf0}.msd-dummy-card-mov__fecha[_ngcontent-%COMP%]{height:14px;background:#e1e4e7;border-radius:4px;margin-bottom:16px;width:70%}.msd-dummy-card-mov__glosa[_ngcontent-%COMP%]{height:16px;background:#e1e4e7;border-radius:4px;width:50%}.msd-dummy-card-mov__monto[_ngcontent-%COMP%]{height:16px;width:30%;background:#e1e4e7;border-radius:4px;margin-left:auto;margin-right:4px}.msd-dummy-card-mov__flecha[_ngcontent-%COMP%]{height:16px;background:#e1e4e7;border-radius:4px;width:16px}.msd-dummy-card-mov__ultimos-movimientos[_ngcontent-%COMP%]{border-top:1px solid #e9ecf0;font-size:14px;font-weight:800;margin:12px -16px 0;padding:12px 16px 0}.msd-dummy-card-mov__ultimos-movimientos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#e1e4e7;height:16px;width:60%;display:block;border-radius:4px}.dummybg[_ngcontent-%COMP%], .msd-dummy-card-mov__fecha[_ngcontent-%COMP%], .msd-dummy-card-mov__flecha[_ngcontent-%COMP%], .msd-dummy-card-mov__glosa[_ngcontent-%COMP%], .msd-dummy-card-mov__monto[_ngcontent-%COMP%], .msd-dummy-card-mov__ultimos-movimientos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .msd-dummy-card-prod__nombre[_ngcontent-%COMP%], .msd-dummy-card-prod__saldo[_ngcontent-%COMP%], .msd-dummy-card-prod__saldo-text[_ngcontent-%COMP%], .msd-dummy-card-prod__ultimos-movimientos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .msd-dummy-card-ti__icono[_ngcontent-%COMP%], .msd-dummy-card-ti__text[_ngcontent-%COMP%]{-webkit-animation:dummybg 1s ease-in-out infinite alternate;animation:dummybg 1s ease-in-out infinite alternate}@-webkit-keyframes dummybg{0%{opacity:.3}to{opacity:1}}@keyframes dummybg{0%{opacity:.3}to{opacity:1}}.sin-movimientos[_ngcontent-%COMP%]{text-align:center;padding:24px;font-size:14px}"]}),t})()}];let L=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(o){return new(o||t)},imports:[[i.c.forChild(G)],i.c]}),t})();var F=n("mfb2"),z=n("lFb0"),$=n("U6US"),B=n("mFkX"),D=n("TygU"),N=n("tDkE");let R=(()=>{class t{}return t.\u0275mod=s.Lb({type:t}),t.\u0275inj=s.Kb({factory:function(o){return new(o||t)},imports:[[e.c,F.a,z.a,L,$.a,B.a,D.a,N.a,f.p,f.o,f.b,f.f]]}),t})()}}]);