(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{FBI9:function(t,n,e){"use strict";e.r(n),e.d(n,"MovimientosTCModule",(function(){return J}));var o=e("SVse"),i=e("iInd"),a=e("uIF3"),c=e("itXk"),r=e("eIep"),d=e("pLZG"),s=e("7ad5"),l=e("wQPj"),m=e("8Y7J"),b=e("tqRt"),u=e("1AYW"),g=e("WU+o"),p=e("o+uz"),_=e("UsZg");let f=(()=>{class t{constructor(){this.max="100"}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=m.Hb({type:t,selectors:[["msd-barra-progeso"]],inputs:{max:"max",value:"value"},decls:1,vars:2,consts:[[3,"max","value"]],template:function(t,n){1&t&&m.Ob(0,"progress",0),2&t&&m.mc("max",n.max)("value",n.value)},styles:["[hidden][_ngcontent-%COMP%]{display:none!important}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}progress[_ngcontent-%COMP%]{border:none;width:100%;height:8px}progress[_ngcontent-%COMP%]::-webkit-progress-value{background-color:#06c47b;border-radius:8px 0 0 8px}progress[_ngcontent-%COMP%]::-webkit-progress-bar{background-color:#e7eaed;border-radius:8px}"]}),t})(),v=(()=>{class t{constructor(t){this.fto=t,this.tarjeta={nombre:"",numero:"",nrotarjeta:"",lastnumber:"",vencimiento:"",cvv:"",usuario:"",montoUtilizadoNacional:"",montoUtilizadoInternacional:"",montoDisponibleNacional:"",montoDisponibleInternacional:""}}ngOnInit(){}getCardNumber(t){return t.slice(t.length-4)}showAmount(t){return this.fto.mostrarMonto(this.fto.sacarCaracteresEspeciales(t))}}return t.\u0275fac=function(n){return new(n||t)(m.Nb(_.a))},t.\u0275cmp=m.Hb({type:t,selectors:[["msd-card-detalle"]],inputs:{tarjeta:"tarjeta"},decls:31,vars:14,consts:[[1,"msd-card-detalle"],[1,"msd-card-detalle__container"],[1,"msd-card-detalle__header"],[1,"msd-card-detalle__nombre"],[1,"msd-card-detalle__numero"],[1,"msd-card-detalle__titular"],[1,"msd-card-detalle__saldos"],[1,"msd-card-detalle__saldos--column-left"],[1,"msd-card-detalle__label"],[1,"msd-card-detalle__saldos--column-right"],[1,"msd-card-detalle__barra"],[3,"value","max"],[1,"msd-card-detalle__number"],[1,"msd-card-detalle__us-number"]],template:function(t,n){1&t&&(m.Tb(0,"div",0),m.Tb(1,"div",1),m.Tb(2,"div",2),m.Tb(3,"div",3),m.Gc(4),m.Sb(),m.Tb(5,"div",4),m.Gc(6),m.Sb(),m.Tb(7,"div",5),m.Gc(8,"Titular"),m.Sb(),m.Sb(),m.Tb(9,"div",6),m.Tb(10,"div",7),m.Tb(11,"div",8),m.Gc(12,"Monto utilizado"),m.Sb(),m.Sb(),m.Tb(13,"div",9),m.Tb(14,"div",8),m.Gc(15,"Disponible"),m.Sb(),m.Sb(),m.Sb(),m.Tb(16,"div",10),m.Ob(17,"msd-barra-progeso",11),m.Sb(),m.Tb(18,"div",6),m.Tb(19,"div",7),m.Tb(20,"div",12),m.Gc(21),m.Sb(),m.Tb(22,"div",13),m.Gc(23),m.fc(24,"currency"),m.Sb(),m.Sb(),m.Tb(25,"div",9),m.Tb(26,"div",12),m.Gc(27),m.Sb(),m.Tb(28,"div",13),m.Gc(29),m.fc(30,"currency"),m.Sb(),m.Sb(),m.Sb(),m.Sb(),m.Sb()),2&t&&(m.Ab(4),m.Hc(null==n.tarjeta?null:n.tarjeta.nombre),m.Ab(2),m.Ic("N\xb0 **** ",n.getCardNumber(null==n.tarjeta?null:n.tarjeta.nrotarjeta)," "),m.Ab(11),m.mc("value",null==n.tarjeta?null:n.tarjeta.montoUtilizadoNacional)("max",n.tarjeta.montoDisponibleNacional),m.Ab(4),m.Ic("$",n.showAmount(null==n.tarjeta||null==n.tarjeta.montoUtilizadoNacional?null:n.tarjeta.montoUtilizadoNacional.toString()),""),m.Ab(2),m.Ic("US ",m.hc(24,8,null==n.tarjeta?null:n.tarjeta.montoUtilizadoInternacional,"USD"),""),m.Ab(4),m.Ic("$",n.showAmount(null==n.tarjeta||null==n.tarjeta.montoDisponibleNacional?null:n.tarjeta.montoDisponibleNacional.toString()),""),m.Ab(2),m.Ic("US ",m.hc(30,11,null==n.tarjeta?null:n.tarjeta.montoDisponibleInternacional,"USD"),""))},directives:[f],pipes:[o.d],styles:["[hidden][_ngcontent-%COMP%]{display:none!important}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.msd-card-detalle__container[_ngcontent-%COMP%]{background:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.08);border-radius:8px;display:block;padding:12px 16px 12px 12px;text-align:left;position:relative}.msd-card-detalle__header[_ngcontent-%COMP%]{display:flex}.msd-card-detalle__nombre[_ngcontent-%COMP%]{font-weight:800;font-size:14px;color:#868c99}.msd-card-detalle__titular[_ngcontent-%COMP%]{font-weight:400}.msd-card-detalle__numero[_ngcontent-%COMP%], .msd-card-detalle__titular[_ngcontent-%COMP%]{margin-left:8px;display:inline-block;font-size:14px;color:#868c99}.msd-card-detalle__saldos[_ngcontent-%COMP%]{display:flex;padding-top:12px}.msd-card-detalle__saldos--column-left[_ngcontent-%COMP%]{flex:0 0 50%;padding-right:4px}.msd-card-detalle__saldos--column-right[_ngcontent-%COMP%]{flex:0 0 50%;text-align:right}.msd-card-detalle__label[_ngcontent-%COMP%]{font-weight:600;font-size:12px;color:#868c99}.msd-card-detalle__number[_ngcontent-%COMP%]{color:#2c3038;font-weight:800;font-size:18px}@media only screen and (max-device-width:320px){.msd-card-detalle__number[_ngcontent-%COMP%]{font-size:16px}}.msd-card-detalle__us-number[_ngcontent-%COMP%]{color:#2c3038;font-weight:400;font-size:14px}"]}),t})();var h=e("66Gl"),x=e("cDif"),C=e("0/Vh");function O(t,n){}function y(t,n){1&t&&m.Ec(0,O,0,0,"ng-template")}function M(t,n){if(1&t&&m.Ob(0,"msd-card-detalle",21),2&t){const t=m.ec();m.mc("tarjeta",t.tarjetaCredito)}}function P(t,n){if(1&t&&m.Ob(0,"app-card-tarjetacredito",21),2&t){const t=m.ec();m.mc("tarjeta",t.tarjetaCredito)}}function T(t,n){if(1&t&&(m.Tb(0,"div",22),m.Tb(1,"div",23),m.Tb(2,"div",24),m.Gc(3,"Cupo autorizado"),m.Sb(),m.Tb(4,"div",25),m.Gc(5),m.fc(6,"number"),m.Sb(),m.Sb(),m.Tb(7,"div",23),m.Tb(8,"div",24),m.Gc(9,"Disponible avance"),m.Sb(),m.Tb(10,"div",25),m.Gc(11),m.fc(12,"number"),m.Sb(),m.Sb(),m.Tb(13,"div",23),m.Tb(14,"div",24),m.Gc(15,"Pago m\xednimo"),m.Sb(),m.Tb(16,"div",25),m.Gc(17),m.fc(18,"number"),m.Sb(),m.Sb(),m.Tb(19,"div",23),m.Tb(20,"div",24),m.Gc(21,"Fecha vencimiento"),m.Sb(),m.Tb(22,"div",25),m.Gc(23),m.fc(24,"date"),m.Sb(),m.Sb(),m.Sb()),2&t){const t=m.ec();m.Ab(5),m.Ic("$ ",m.ic(6,4,null==t.tarjetaCredito?null:t.tarjetaCredito.cupoTotalNacional,"1.0-0","cl"),""),m.Ab(6),m.Ic("$ ",m.ic(12,8,null==t.tarjetaCredito?null:t.tarjetaCredito.montoDisponibleAvanceNacional,"1.0-0","cl")," "),m.Ab(6),m.Ic("$ ",m.ic(18,12,null==t.tarjetaCredito?null:t.tarjetaCredito.pagoMinimo,"1.0-0","cl"),""),m.Ab(6),m.Hc(m.hc(24,16,t.generateDateFromTemplate(null==t.tarjetaCredito?null:t.tarjetaCredito.fechaVencimientoFacturacion),"dd/MM/yyyy"))}}function S(t,n){if(1&t&&(m.Tb(0,"div",22),m.Tb(1,"div",23),m.Tb(2,"div",24),m.Gc(3,"Cupo autorizado"),m.Sb(),m.Tb(4,"div",25),m.Gc(5),m.fc(6,"currency"),m.Sb(),m.Sb(),m.Tb(7,"div",23),m.Tb(8,"div",24),m.Gc(9,"Fecha vencimiento"),m.Sb(),m.Tb(10,"div",25),m.Gc(11),m.fc(12,"date"),m.Sb(),m.Sb(),m.Sb()),2&t){const t=m.ec();m.Ab(5),m.Hc(m.hc(6,2,null==t.tarjetaCredito?null:t.tarjetaCredito.cupoTotalInternacional,"USD")),m.Ab(6),m.Hc(m.hc(12,5,t.generateDateFromTemplate(null==t.tarjetaCredito?null:t.tarjetaCredito.fechaVencimientoFacturacion),"dd/MM/yyyy"))}}function k(t,n){1&t&&(m.Tb(0,"div",26),m.Gc(1," No hay movimientos disponibles a la fecha"),m.Sb())}function w(t,n){1&t&&(m.Tb(0,"div",27),m.Ob(1,"div",28),m.Tb(2,"div",29),m.Ob(3,"div",30),m.Ob(4,"div",31),m.Ob(5,"div",32),m.Sb(),m.Tb(6,"div",29),m.Ob(7,"div",30),m.Ob(8,"div",31),m.Ob(9,"div",32),m.Sb(),m.Tb(10,"div",29),m.Ob(11,"div",30),m.Ob(12,"div",31),m.Ob(13,"div",32),m.Sb(),m.Tb(14,"div",29),m.Ob(15,"div",30),m.Ob(16,"div",31),m.Ob(17,"div",32),m.Sb(),m.Tb(18,"div",29),m.Ob(19,"div",30),m.Ob(20,"div",31),m.Ob(21,"div",32),m.Sb(),m.Sb())}function j(t,n){if(1&t&&m.Ob(0,"app-list-item-movimiento",39),2&t){const t=n.$implicit;m.mc("glosa",t.description)("monto",t.amountUsd)("cargo","Credit")("show",!1)}}function A(t,n){if(1&t&&(m.Tb(0,"div",35),m.Tb(1,"div",36),m.Ob(2,"msd-icon",37),m.Gc(3),m.fc(4,"date"),m.Sb(),m.Ec(5,j,1,4,"app-list-item-movimiento",38),m.Sb()),2&t){const t=n.$implicit;m.Ab(3),m.Ic(" ",m.jc(4,2,t.fecha,"fullDate","-0003","cl")," "),m.Ab(2),m.mc("ngForOf",t.movimientosAgrupados)}}function I(t,n){if(1&t&&(m.Tb(0,"div",33),m.Ec(1,A,6,7,"div",34),m.Sb()),2&t){const t=m.ec();m.Ab(1),m.mc("ngForOf",t.nacionales)}}function G(t,n){if(1&t&&m.Ob(0,"app-list-item-movimiento",41),2&t){const t=n.$implicit;m.mc("glosa",t.description)("monto",t.amountUsd)("show",!1)}}function E(t,n){if(1&t&&(m.Tb(0,"div",35),m.Tb(1,"div",36),m.Ob(2,"msd-icon",37),m.Gc(3),m.fc(4,"date"),m.Sb(),m.Ec(5,G,1,3,"app-list-item-movimiento",40),m.Sb()),2&t){const t=n.$implicit;m.Ab(3),m.Ic(" ",m.jc(4,2,null==t?null:t.fecha,"fullDate","-0003","cl")," "),m.Ab(2),m.mc("ngForOf",t.movimientosAgrupados)}}function z(t,n){if(1&t&&(m.Tb(0,"div",33),m.Ec(1,E,6,7,"div",34),m.Sb()),2&t){const t=m.ec();m.Ab(1),m.mc("ngForOf",t.internacionales)}}const D=function(t,n){return{active:t,"":n}},F=[{path:"",component:(()=>{class t{constructor(t,n){this.movimientosTcrStore$=t,this.tarjetasCreditoStore$=n,this.tabActive=!0,this.movimientos=[],this.countA=0,this.countC=0,this.internationalEvent=!1}ngOnInit(){this.movimientosTcrSubscription=this.movimientosTcrStore$.select(a.c.seleccionarCuentaParaBuscarMovimientosTcr).pipe(Object(r.a)(t=>Object(c.a)([this.tarjetasCreditoStore$.select(s.c.seleccionarTarjetaCreditoPorId(t.uuid)),this.movimientosTcrStore$.select(a.c.seleccionarMovimientosTcrPorId(t.lastNumbers))])),Object(d.a)(([t,n])=>null!==t&&null!==n)).subscribe(([t,n])=>{this.tarjetaCredito=t,this.nacionales=n?this.formatoMovimientosTcr(n.nacional):null,this.internacionales=n?this.formatoMovimientosTcr(n.internacional):null})}ngOnDestroy(){this.movimientosTcrSubscription.unsubscribe()}generateDateFromTemplate(t){return t?Object(l.a)(t):""}formatoMovimientosTcr(t){return t.reduce((t,n)=>{const e=t.map(t=>t.fecha).indexOf(n.txnDate);return e>-1?t[e].movimientosAgrupados.push(n):t.push({fecha:n.txnDate,movimientosAgrupados:[n]}),t},[]).map(t=>({...t,fecha:Object(l.a)(t.fecha)})).reverse()}selectCargo(){this.countC++,this.countA=0,1==this.countC?(document.getElementById("cargo").classList.replace("filtro-movimientos__button--btn-disble","filtro-movimientos__button--cargo-active"),document.getElementById("abono").classList.replace("filtro-movimientos__button--abono-active","filtro-movimientos__button--btn-disble")):this.countC>1&&(this.countC=0,document.getElementById("cargo").classList.replace("filtro-movimientos__button--cargo-active","filtro-movimientos__button--btn-disble"))}selectAbonos(){this.countA++,this.countC=0,1==this.countA?(document.getElementById("abono").classList.replace("filtro-movimientos__button--btn-disble","filtro-movimientos__button--abono-active"),document.getElementById("cargo").classList.replace("filtro-movimientos__button--cargo-active","filtro-movimientos__button--btn-disble")):this.countA>1&&(this.countA=0,document.getElementById("abono").classList.replace("filtro-movimientos__button--abono-active","filtro-movimientos__button--btn-disble"))}changeTab(t){1==t?(this.internationalEvent=!1,this.tabActive=!0):(this.internationalEvent=!0,this.tabActive=!1)}}return t.\u0275fac=function(n){return new(n||t)(m.Nb(b.h),m.Nb(b.h))},t.\u0275cmp=m.Hb({type:t,selectors:[["app-movimientos-tc"]],decls:31,vars:19,consts:[["title","Saldos y movimientos",3,"msdIcon"],[1,"content-producto"],[4,"ngIf","ngIfThen","ngIfElse"],["digitalCard",""],["otherCard",""],[1,"msd-tab"],[1,"msd-tab__buttons"],["aria-label","Ingreso personas",1,"msd-tab__button-tab",3,"ngClass","click"],["aria-label","Ingreso empresas",1,"msd-tab__button-tab",3,"ngClass","click"],[1,"msd-tab__content"],["class","detalle-cuenta",4,"ngIf"],[1,"header-movimientos-list"],[1,"heder-movimientos-title"],[1,"filtro-movimientos"],["id","abono",1,"filtro-movimientos__button","filtro-movimientos__button--btn-disble",3,"click"],["id","cargo",1,"filtro-movimientos__button","filtro-movimientos__button--btn-disble",3,"click"],["class","sin-movimientos",4,"ngIf"],["class","msd-dummy-card-mov",4,"ngIf"],["class","movimientos-container",4,"ngIf"],[1,"fab-button"],[3,"internationalEvent"],[3,"tarjeta"],[1,"detalle-cuenta"],[1,"detalle-cuenta__list-item"],[1,"detalle-cuenta__label"],[1,"detalle-cuenta__value"],[1,"sin-movimientos"],[1,"msd-dummy-card-mov"],[1,"msd-dummy-card-mov__fecha"],[1,"content-glosa"],[1,"msd-dummy-card-mov__glosa"],[1,"msd-dummy-card-mov__monto"],[1,"msd-dummy-card-mov__flecha"],[1,"movimientos-container"],["class","fecha-group",4,"ngFor","ngForOf"],[1,"fecha-group"],[1,"fecha-group__fecha"],["name","calendar"],[3,"glosa","monto","cargo","show",4,"ngFor","ngForOf"],[3,"glosa","monto","cargo","show"],["cargo","Credit",3,"glosa","monto","show",4,"ngFor","ngForOf"],["cargo","Credit",3,"glosa","monto","show"]],template:function(t,n){if(1&t&&(m.Ob(0,"app-header-app",0),m.Tb(1,"div",1),m.Ec(2,y,1,0,void 0,2),m.Ec(3,M,1,1,"ng-template",null,3,m.Fc),m.Ec(5,P,1,1,"ng-template",null,4,m.Fc),m.Sb(),m.Tb(7,"div",5),m.Tb(8,"div",6),m.Tb(9,"button",7),m.ac("click",(function(){return n.changeTab(1)})),m.Gc(10,"Nacional"),m.Sb(),m.Tb(11,"button",8),m.ac("click",(function(){return n.changeTab(2)})),m.Gc(12,"Internacional"),m.Sb(),m.Sb(),m.Tb(13,"div",9),m.Ec(14,T,25,19,"div",10),m.Ec(15,S,13,8,"div",10),m.Sb(),m.Sb(),m.Tb(16,"div",11),m.Tb(17,"div",12),m.Gc(18,"Movimientos"),m.Sb(),m.Tb(19,"div",13),m.Tb(20,"button",14),m.ac("click",(function(){return n.selectAbonos()})),m.Gc(21," Abonos "),m.Sb(),m.Tb(22,"button",15),m.ac("click",(function(){return n.selectCargo()})),m.Gc(23," Cargos "),m.Sb(),m.Sb(),m.Sb(),m.Ec(24,k,2,0,"div",16),m.Ec(25,w,22,0,"div",17),m.Ec(26,I,2,1,"div",18),m.Ec(27,z,2,1,"div",18),m.Tb(28,"div",19),m.Ob(29,"msd-fab-button",20),m.Sb(),m.Ob(30,"app-modo-seguro-fab")),2&t){const t=m.vc(4),e=m.vc(6);m.mc("msdIcon","back_app"),m.Ab(2),m.mc("ngIf","DIGITAL"===(null==n.tarjetaCredito?null:n.tarjetaCredito.tipoTarjeta))("ngIfThen",t)("ngIfElse",e),m.Ab(7),m.mc("ngClass",m.rc(13,D,n.tabActive,!n.tabActive)),m.Ab(2),m.mc("ngClass",m.rc(16,D,!n.tabActive,n.tabActive)),m.Ab(3),m.mc("ngIf",n.tabActive),m.Ab(1),m.mc("ngIf",!n.tabActive),m.Ab(9),m.mc("ngIf",n.tabActive&&n.nacionales&&0===n.nacionales.length||!n.tabActive&&n.internacionales&&0===n.internacionales.length),m.Ab(1),m.mc("ngIf",!n.nacionales||!n.internacionales),m.Ab(1),m.mc("ngIf",n.tabActive&&n.nacionales&&n.nacionales.length>0),m.Ab(1),m.mc("ngIf",!n.tabActive&&n.internacionales&&n.internacionales.length>0),m.Ab(2),m.mc("internationalEvent",n.internationalEvent)}},directives:[u.a,o.o,o.m,g.a,p.a,v,h.a,o.n,x.n,C.a],pipes:[o.g,o.f,o.d],styles:["[hidden][_ngcontent-%COMP%]{display:none!important}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.content-producto[_ngcontent-%COMP%]{padding:16px 24px;background:#f6f7f8;position:relative}.content-producto[_ngcontent-%COMP%]   app-card-tarjetacredito[_ngcontent-%COMP%]{position:relative;display:block;z-index:1}.header-movimientos-list[_ngcontent-%COMP%]{padding:12px 16px 8px;align-items:center;display:flex;background:#fff}.header-movimientos-list[_ngcontent-%COMP%]   title[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.detalle-cuenta[_ngcontent-%COMP%]{background:#fff;display:flex;flex-direction:column;padding:9px 16px}.detalle-cuenta__list-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:14px}.detalle-cuenta__value[_ngcontent-%COMP%]{font-weight:600}.filtro-movimientos[_ngcontent-%COMP%]{margin-left:auto}.filtro-movimientos__button[_ngcontent-%COMP%]{font-size:12px;border-radius:60px;border:1px solid #d9dbe0;font-weight:700;padding:0 8px;margin-right:8px;background:#fff;color:#868c99;outline:none}.filtro-movimientos__button[_ngcontent-%COMP%]:last-child{margin-right:0}.filtro-movimientos__button--cargo-active[_ngcontent-%COMP%]{color:#d64040;background:rgba(214,64,64,.1)}.filtro-movimientos__button--abono-active[_ngcontent-%COMP%]{color:#06c47b;background:rgba(6,196,123,.1)}.filtro-movimientos__button--btn-disble[_ngcontent-%COMP%]{color:#868c99;border:1px solid #d9dbe0}.fecha-group[_ngcontent-%COMP%]{background:#fff;margin-bottom:8px}.fecha-group__fecha[_ngcontent-%COMP%]{font-size:14px;display:flex;align-items:center;color:#868c99;padding:9px 16px 0;text-transform:lowercase}.fecha-group__fecha[_ngcontent-%COMP%]:first-letter{text-transform:uppercase}.fecha-group__fecha[_ngcontent-%COMP%]   msd-icon[_ngcontent-%COMP%]{margin-right:4px}.fecha-group__fecha[_ngcontent-%COMP%]   msd-icon[_ngcontent-%COMP%]     svg{fill:#868c99}.bg-animacion[_ngcontent-%COMP%]{position:absolute;top:-1px;right:0;left:0;height:180px;width:100%;background-image:linear-gradient(90deg,#ff9100,#f40);border-radius:0 0 80% 40%;box-sizing:content-box;-webkit-animation:bg-up .24s cubic-bezier(.1,.1,.25,.9) both;animation:bg-up .24s cubic-bezier(.1,.1,.25,.9) both}@-webkit-keyframes bg-up{to{height:64px;border-radius:0 0 80% 15%}}@keyframes bg-up{to{height:64px;border-radius:0 0 80% 15%}}.msd-tab[_ngcontent-%COMP%]{border:8px solid #f6f7f8}.msd-tab__buttons[_ngcontent-%COMP%]{display:block;justify-content:space-around;width:100%;background-color:#fff;border-bottom:1px solid #e9ecf0;margin-bottom:-1px}.msd-tab__button-tab[_ngcontent-%COMP%]{background:none;background:transparent;border:0;outline:0;width:50%;max-height:40px;padding:12px;font-size:14px;font-weight:800;color:#868c99;transition:all .2s ease-in-out;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;border-bottom:2px solid transparent}.msd-tab__button-tab.active[_ngcontent-%COMP%]{border-bottom:2px solid #ff9100;color:#ff9100}.msd-tab__button-tab[_ngcontent-%COMP%]:hover{cursor:pointer}.msd-tab__button-tab[_ngcontent-%COMP%]:active, .msd-tab__button-tab[_ngcontent-%COMP%]:focus, .msd-tab__button-tab[_ngcontent-%COMP%]:hover{background:rgba(255,145,0,.07)}.movimientos-container[_ngcontent-%COMP%]{background:#f6f7f8;margin-bottom:72px}","[hidden][_ngcontent-%COMP%]{display:none!important}@-webkit-keyframes fade-in{0%{opacity:0}to{opacity:1}}@keyframes fade-in{0%{opacity:0}to{opacity:1}}.msd-dummy-container-horizontal[_ngcontent-%COMP%]{display:flex;padding:0 24px 24px;flex-wrap:unset;overflow:hidden}.msd-dummy-card-ti[_ngcontent-%COMP%]{padding:12px;background:#fff;height:112px;width:88px;box-shadow:0 4px 8px 0 rgba(0,0,0,.08);align-items:center;border-radius:8px;justify-content:center;display:flex;text-align:center;flex-direction:column;margin-right:16px;flex-shrink:0}.msd-dummy-card-ti__icono[_ngcontent-%COMP%]{background:#e1e4e7;border-radius:4px;margin-bottom:12px;width:40px;height:40px}.msd-dummy-card-ti__text[_ngcontent-%COMP%]{height:10px;width:70%;background:#e1e4e7;border-radius:4px;display:flex;margin-bottom:4px}.msd-dummy-card-prod[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:#fff;box-shadow:0 4px 8px 0 rgba(0,0,0,.08);border-radius:8px;margin:0 24px 16px;padding:12px 16px}.msd-dummy-card-prod[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{margin-bottom:0}.msd-dummy-card-prod__nombre[_ngcontent-%COMP%]{height:16px;background:#e1e4e7;border-radius:4px;margin-bottom:8px;width:80%}.msd-dummy-card-prod__saldo[_ngcontent-%COMP%]{height:40px;background:#e1e4e7;border-radius:4px;margin-bottom:8px;width:50%}.msd-dummy-card-prod__saldo-text[_ngcontent-%COMP%]{height:10px;width:50%;background:#e1e4e7;border-radius:4px}.msd-dummy-card-prod__ultimos-movimientos[_ngcontent-%COMP%]{border-top:1px solid #e9ecf0;font-size:14px;font-weight:800;margin:12px -16px 0;padding:12px 16px 0}.msd-dummy-card-prod__ultimos-movimientos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#e1e4e7;height:16px;width:60%;display:block;border-radius:4px}.msd-dummy-card-mov[_ngcontent-%COMP%]{display:flex;flex-direction:column;background:#fff;padding:12px 16px}.msd-dummy-card-mov[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{margin-bottom:0}.msd-dummy-card-mov[_ngcontent-%COMP%]   .content-glosa[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding-bottom:12px;margin-bottom:12px;border-bottom:1px solid #e9ecf0}.msd-dummy-card-mov__fecha[_ngcontent-%COMP%]{height:14px;background:#e1e4e7;border-radius:4px;margin-bottom:16px;width:70%}.msd-dummy-card-mov__glosa[_ngcontent-%COMP%]{height:16px;background:#e1e4e7;border-radius:4px;width:50%}.msd-dummy-card-mov__monto[_ngcontent-%COMP%]{height:16px;width:30%;background:#e1e4e7;border-radius:4px;margin-left:auto;margin-right:4px}.msd-dummy-card-mov__flecha[_ngcontent-%COMP%]{height:16px;background:#e1e4e7;border-radius:4px;width:16px}.msd-dummy-card-mov__ultimos-movimientos[_ngcontent-%COMP%]{border-top:1px solid #e9ecf0;font-size:14px;font-weight:800;margin:12px -16px 0;padding:12px 16px 0}.msd-dummy-card-mov__ultimos-movimientos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:#e1e4e7;height:16px;width:60%;display:block;border-radius:4px}.dummybg[_ngcontent-%COMP%], .msd-dummy-card-mov__fecha[_ngcontent-%COMP%], .msd-dummy-card-mov__flecha[_ngcontent-%COMP%], .msd-dummy-card-mov__glosa[_ngcontent-%COMP%], .msd-dummy-card-mov__monto[_ngcontent-%COMP%], .msd-dummy-card-mov__ultimos-movimientos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .msd-dummy-card-prod__nombre[_ngcontent-%COMP%], .msd-dummy-card-prod__saldo[_ngcontent-%COMP%], .msd-dummy-card-prod__saldo-text[_ngcontent-%COMP%], .msd-dummy-card-prod__ultimos-movimientos[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .msd-dummy-card-ti__icono[_ngcontent-%COMP%], .msd-dummy-card-ti__text[_ngcontent-%COMP%]{-webkit-animation:dummybg 1s ease-in-out infinite alternate;animation:dummybg 1s ease-in-out infinite alternate}@-webkit-keyframes dummybg{0%{opacity:.3}to{opacity:1}}@keyframes dummybg{0%{opacity:.3}to{opacity:1}}.sin-movimientos[_ngcontent-%COMP%]{text-align:center;padding:24px;font-size:14px}"]}),t})()}];let N=(()=>{class t{}return t.\u0275mod=m.Lb({type:t}),t.\u0275inj=m.Kb({factory:function(n){return new(n||t)},imports:[[i.c.forChild(F)],i.c]}),t})();var U=e("lFb0"),$=e("TygU"),B=e("QSFY"),L=e("U6US"),H=e("tDkE"),V=e("paBB");let J=(()=>{class t{}return t.\u0275mod=m.Lb({type:t}),t.\u0275inj=m.Kb({factory:function(n){return new(n||t)},providers:[_.a],imports:[[o.c,N,U.a,$.a,B.a,L.a,H.a,x.o,V.a]]}),t})()}}]);