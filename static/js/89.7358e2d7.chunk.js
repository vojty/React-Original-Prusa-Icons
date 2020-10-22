(this["webpackJsonpreact-original-prusa-icons"]=this["webpackJsonpreact-original-prusa-icons"]||[]).push([[89,103,104,105],{129:function(e,o,a){"use strict";a.r(o);var r=a(9),t=a(5),n=a(0),i=a.n(n),c=a(36),l=a(37),d=a(38),h=function(e){var o=Object(n.useState)(e.primaryColor),a=Object(r.a)(o,2),t=a[0],h=a[1],u=Object(n.useState)(e.secondaryColor),C=Object(r.a)(u,2),s=C[0],g=C[1],T=Object(n.useState)(e.backgroundColor),m=Object(r.a)(T,2),R=m[0],w=m[1];return Object(n.useEffect)((function(){Object(d.ThemeSwitcherDuoColor)(e.theme,h,g,w)}),[e.theme,e.withBackground,e.withPadding]),i.a.createElement(l.Svg,{viewBox:800.1,width:e.width,height:e.height,withPadding:e.withPadding},i.a.createElement(c.Scale,{viewBox:800.1,backgroundColor:R,withPadding:e.withPadding,withBackground:e.withBackground,backgroundRounded:e.backgroundRounded,backgroundRadius:e.backgroundRadius,width:e.width,height:e.height},i.a.createElement("path",{fill:null===t||void 0===t?void 0:t.toString(),d:"M400.06 48.03c-194.43,0 -352.05,157.61 -352.05,352.04 0,65.23 17.74,126.3 48.67,178.67l0 -178.67 0 -0.73c0.4,-167.21 136.08,-302.64 303.35,-302.64 269.41,0 405.15,327.26 214.51,517.89 -144.67,144.71 -368.03,101.35 -467.31,-45.75l0 76.2c63.98,66.02 153.6,107.06 252.79,107.06 194.43,0 352.05,-157.61 352.05,-352.05 0,-194.43 -157.61,-352.05 -352.05,-352.05l0.03 0.03zm93.18 258.87c-82.76,-82.79 -224.91,-23.88 -224.91,93.18 0,117.03 142.15,175.96 224.91,93.18 51.43,-51.46 51.47,-134.88 0,-186.32l0 -0.04zm-93.18 -1.64c-52.34,0 -94.78,42.44 -94.78,94.78 0,52.34 42.44,94.78 94.78,94.78 52.34,0 94.79,-42.44 94.79,-94.78 0,-52.34 -42.45,-94.78 -94.79,-94.78z"}),i.a.createElement("path",{fill:null===s||void 0===s?void 0:s.toString(),d:"M400.06 96.7c269.42,0 405.16,327.26 214.52,517.89 -144.67,144.71 -368.03,101.35 -467.31,-45.75l0 156.22c0,13.97 -11.33,25.28 -25.28,25.28 -13.97,0 -25.28,-11.33 -25.28,-25.28l0 -324.97 0 -0.73c0.4,-167.21 136.08,-302.65 303.35,-302.65l0 -0zm93.18 210.2c-82.76,-82.79 -224.91,-23.88 -224.91,93.18 0,117.03 142.15,175.96 224.91,93.18 51.43,-51.46 51.47,-134.88 0,-186.32l0 -0.04z"})))};o.default=h,h.defaultProps={name:"Spool icon",componentName:"SpoolIcon",description:"Filament spool icon.",tags:[t.Tag.ICONS,t.Tag.MINI],folder:t.Folder.ICONS,width:48,height:48,theme:t.Theme.LIGHT,primaryColor:t.Color.DARK_GRAY,secondaryColor:t.Color.ORANGE,withBackground:!0,backgroundColor:t.Color.WHITE,backgroundRounded:!0,backgroundRadius:800.1*t.DefaultRadiusRatio}},36:function(e,o,a){"use strict";a.r(o),a.d(o,"Scale",(function(){return i}));var r=a(5),t=a(0),n=a.n(t),i=function(e){var o=Math.round((e.viewBox-e.viewBox*(1-r.DefaultPaddingRatio))/2);return n.a.createElement(n.a.Fragment,null,function(){var a;if(e.withBackground)return n.a.createElement("rect",{transform:e.withPadding?"translate(".concat(-2*o,", ").concat(-2*o,")"):"",fill:null===(a=e.backgroundColor)||void 0===a?void 0:a.toString(),width:e.viewBox*(1+(e.withPadding?Math.abs(r.DefaultPaddingRatio):0)),height:e.viewBox*(1+(e.withPadding?Math.abs(r.DefaultPaddingRatio):0)),rx:e.backgroundRounded?e.backgroundRadius:0,ry:e.backgroundRounded?e.backgroundRadius:0})}(),e.withPadding?n.a.createElement("g",{transform:"translate(".concat(-o,", ").concat(-o,")")},e.children):n.a.createElement(n.a.Fragment,null,e.children))}},37:function(e,o,a){"use strict";a.r(o),a.d(o,"Svg",(function(){return i}));var r=a(5),t=a(0),n=a.n(t),i=function(e){return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fillRule:"evenodd",clipRule:"evenodd",imageRendering:"optimizeQuality",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:e.withPadding?"".concat(0-e.viewBox*Math.abs(r.DefaultPaddingRatio)," ").concat(0-e.viewBox*Math.abs(r.DefaultPaddingRatio)," ").concat(e.viewBox+e.viewBox*Math.abs(r.DefaultPaddingRatio)," ").concat(e.viewBox+e.viewBox*Math.abs(r.DefaultPaddingRatio)):"".concat(0," ",0," ",e.viewBox," ").concat(e.viewBox)},e.children)}},38:function(e,o,a){"use strict";a.r(o),a.d(o,"ThemeSwitcherMonoColor",(function(){return t})),a.d(o,"ThemeSwitcherMonoInverseColor",(function(){return n})),a.d(o,"ThemeSwitcherDuoColor",(function(){return i}));var r=a(5),t=function(e,o,a){switch(e){case r.Theme.CUSTOM:break;case r.Theme.LIGHT:o(r.Color.DARK_GRAY),a(r.Color.WHITE);break;case r.Theme.DARK:o(r.Color.WHITE),a(r.Color.GRAY);break;case r.Theme.WHITE:o(r.Color.WHITE),a(r.Color.BLACK);break;case r.Theme.BLACK:o(r.Color.BLACK),a(r.Color.WHITE);break;case r.Theme.GRAYSCALE:o(r.Color.WHITE),a(r.Color.GRAY);break;case r.Theme.MONOCHROME:o(r.Color.WHITE),a(r.Color.BLACK)}},n=function(e,o,a){switch(e){case r.Theme.CUSTOM:break;case r.Theme.LIGHT:o(r.Color.ORANGE),a(r.Color.WHITE);break;case r.Theme.DARK:o(r.Color.ORANGE),a(r.Color.GRAY);break;case r.Theme.WHITE:o(r.Color.WHITE),a(r.Color.BLACK);break;case r.Theme.BLACK:o(r.Color.BLACK),a(r.Color.WHITE);break;case r.Theme.GRAYSCALE:o(r.Color.GRAY),a(r.Color.GRAY);break;case r.Theme.MONOCHROME:o(r.Color.WHITE),a(r.Color.BLACK)}},i=function(e,o,a,t){switch(e){case r.Theme.CUSTOM:break;case r.Theme.LIGHT:o(r.Color.DARK_GRAY),a(r.Color.ORANGE),t(r.Color.WHITE);break;case r.Theme.DARK:o(r.Color.WHITE),a(r.Color.ORANGE),t(r.Color.GRAY);break;case r.Theme.WHITE:o(r.Color.WHITE),a(r.Color.WHITE),t(r.Color.BLACK);break;case r.Theme.BLACK:o(r.Color.BLACK),a(r.Color.BLACK),t(r.Color.WHITE);break;case r.Theme.GRAYSCALE:o(r.Color.WHITE),a(r.Color.DARK_GRAY),t(r.Color.GRAY);break;case r.Theme.MONOCHROME:o(r.Color.WHITE),a(r.Color.WHITE),t(r.Color.BLACK)}}}}]);
//# sourceMappingURL=89.7358e2d7.chunk.js.map