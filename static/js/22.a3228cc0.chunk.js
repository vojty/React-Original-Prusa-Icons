(this["webpackJsonpreact-original-prusa-icons"]=this["webpackJsonpreact-original-prusa-icons"]||[]).push([[22,103,104,105],{36:function(e,o,a){"use strict";a.r(o),a.d(o,"Scale",(function(){return i}));var r=a(5),t=a(0),n=a.n(t),i=function(e){var o=Math.round((e.viewBox-e.viewBox*(1-r.DefaultPaddingRatio))/2);return n.a.createElement(n.a.Fragment,null,function(){var a;if(e.withBackground)return n.a.createElement("rect",{transform:e.withPadding?"translate(".concat(-2*o,", ").concat(-2*o,")"):"",fill:null===(a=e.backgroundColor)||void 0===a?void 0:a.toString(),width:e.viewBox*(1+(e.withPadding?Math.abs(r.DefaultPaddingRatio):0)),height:e.viewBox*(1+(e.withPadding?Math.abs(r.DefaultPaddingRatio):0)),rx:e.backgroundRounded?e.backgroundRadius:0,ry:e.backgroundRounded?e.backgroundRadius:0})}(),e.withPadding?n.a.createElement("g",{transform:"translate(".concat(-o,", ").concat(-o,")")},e.children):n.a.createElement(n.a.Fragment,null,e.children))}},37:function(e,o,a){"use strict";a.r(o),a.d(o,"Svg",(function(){return i}));var r=a(5),t=a(0),n=a.n(t),i=function(e){return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fillRule:"evenodd",clipRule:"evenodd",imageRendering:"optimizeQuality",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:e.withPadding?"".concat(0-e.viewBox*Math.abs(r.DefaultPaddingRatio)," ").concat(0-e.viewBox*Math.abs(r.DefaultPaddingRatio)," ").concat(e.viewBox+e.viewBox*Math.abs(r.DefaultPaddingRatio)," ").concat(e.viewBox+e.viewBox*Math.abs(r.DefaultPaddingRatio)):"".concat(0," ",0," ",e.viewBox," ").concat(e.viewBox)},e.children)}},38:function(e,o,a){"use strict";a.r(o),a.d(o,"ThemeSwitcherMonoColor",(function(){return t})),a.d(o,"ThemeSwitcherMonoInverseColor",(function(){return n})),a.d(o,"ThemeSwitcherDuoColor",(function(){return i}));var r=a(5),t=function(e,o,a){switch(e){case r.Theme.CUSTOM:break;case r.Theme.LIGHT:o(r.Color.DARK_GRAY),a(r.Color.WHITE);break;case r.Theme.DARK:o(r.Color.WHITE),a(r.Color.GRAY);break;case r.Theme.WHITE:o(r.Color.WHITE),a(r.Color.BLACK);break;case r.Theme.BLACK:o(r.Color.BLACK),a(r.Color.WHITE);break;case r.Theme.GRAYSCALE:o(r.Color.WHITE),a(r.Color.GRAY);break;case r.Theme.MONOCHROME:o(r.Color.WHITE),a(r.Color.BLACK)}},n=function(e,o,a){switch(e){case r.Theme.CUSTOM:break;case r.Theme.LIGHT:o(r.Color.ORANGE),a(r.Color.WHITE);break;case r.Theme.DARK:o(r.Color.ORANGE),a(r.Color.GRAY);break;case r.Theme.WHITE:o(r.Color.WHITE),a(r.Color.BLACK);break;case r.Theme.BLACK:o(r.Color.BLACK),a(r.Color.WHITE);break;case r.Theme.GRAYSCALE:o(r.Color.GRAY),a(r.Color.GRAY);break;case r.Theme.MONOCHROME:o(r.Color.WHITE),a(r.Color.BLACK)}},i=function(e,o,a,t){switch(e){case r.Theme.CUSTOM:break;case r.Theme.LIGHT:o(r.Color.DARK_GRAY),a(r.Color.ORANGE),t(r.Color.WHITE);break;case r.Theme.DARK:o(r.Color.WHITE),a(r.Color.ORANGE),t(r.Color.GRAY);break;case r.Theme.WHITE:o(r.Color.WHITE),a(r.Color.WHITE),t(r.Color.BLACK);break;case r.Theme.BLACK:o(r.Color.BLACK),a(r.Color.BLACK),t(r.Color.WHITE);break;case r.Theme.GRAYSCALE:o(r.Color.WHITE),a(r.Color.DARK_GRAY),t(r.Color.GRAY);break;case r.Theme.MONOCHROME:o(r.Color.WHITE),a(r.Color.WHITE),t(r.Color.BLACK)}}},62:function(e,o,a){"use strict";a.r(o);var r=a(9),t=a(5),n=a(0),i=a.n(n),c=a(36),l=a(37),d=a(38),h=function(e){var o=Object(n.useState)(e.primaryColor),a=Object(r.a)(o,2),t=a[0],h=a[1],u=Object(n.useState)(e.secondaryColor),C=Object(r.a)(u,2),s=C[0],g=C[1],T=Object(n.useState)(e.backgroundColor),R=Object(r.a)(T,2),m=R[0],w=R[1];return Object(n.useEffect)((function(){Object(d.ThemeSwitcherDuoColor)(e.theme,h,g,w)}),[e.theme,e.withBackground,e.withPadding]),i.a.createElement(l.Svg,{viewBox:235.29,width:e.width,height:e.height,withPadding:e.withPadding},i.a.createElement(c.Scale,{viewBox:235.29,backgroundColor:m,withPadding:e.withPadding,withBackground:e.withBackground,backgroundRounded:e.backgroundRounded,backgroundRadius:e.backgroundRadius,width:e.width,height:e.height},i.a.createElement("path",{fill:null===s||void 0===s?void 0:s.toString(),d:"M191.18 110.29L191.18 80.88 235.29 117.65 191.18 154.41 191.18 125 117.65 125 117.65 110.29z"}),i.a.createElement("path",{fill:null===t||void 0===t?void 0:t.toString(),d:"M176.47 44.12L176.47 95.59 161.76 95.59 161.76 58.82 73.53 58.82 73.53 176.47 161.76 176.47 161.76 139.71 176.47 139.71 176.47 191.18 58.82 191.17 58.82 44.12z"})))};o.default=h,h.defaultProps={name:"Export Icon",componentName:"ExportIcon",description:"Universal export icon",tags:[t.Tag.ICONS,t.Tag.SL1],folder:t.Folder.ICONS,width:48,height:48,theme:t.Theme.LIGHT,primaryColor:t.Color.DARK_GRAY,secondaryColor:t.Color.ORANGE,withBackground:!0,backgroundColor:t.Color.WHITE,backgroundRounded:!0,backgroundRadius:235.29*t.DefaultRadiusRatio}}}]);
//# sourceMappingURL=22.a3228cc0.chunk.js.map