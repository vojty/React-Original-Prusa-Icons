(this["webpackJsonpreact-original-prusa-icons"]=this["webpackJsonpreact-original-prusa-icons"]||[]).push([[91,103,104,105],{131:function(e,o,a){"use strict";a.r(o);var r=a(9),t=a(5),i=a(0),n=a.n(i),c=a(36),l=a(37),d=a(38),h=function(e){var o=Object(i.useState)(e.primaryColor),a=Object(r.a)(o,2),t=a[0],h=a[1],u=Object(i.useState)(e.backgroundColor),C=Object(r.a)(u,2),s=C[0],g=C[1];return Object(i.useEffect)((function(){Object(d.ThemeSwitcherMonoColor)(e.theme,h,g)}),[e.theme,e.withBackground,e.withPadding]),n.a.createElement(l.Svg,{viewBox:307.69,width:e.width,height:e.height,withPadding:e.withPadding},n.a.createElement(c.Scale,{viewBox:307.69,backgroundColor:s,withPadding:e.withPadding,withBackground:e.withBackground,backgroundRounded:e.backgroundRounded,backgroundRadius:e.backgroundRadius,width:e.width,height:e.height},n.a.createElement("path",{fill:null===t||void 0===t?void 0:t.toString(),d:"M77.12 230.71l153.72 0c42.44,-0 76.86,-34.42 76.86,-76.87 0,-42.44 -34.42,-76.86 -76.86,-76.86l-154.21 0c-42.35,0.13 -76.61,34.51 -76.61,76.86 0,42.44 34.42,76.86 76.86,76.86 0.08,0 0.18,0 0.25,0l0 0zm0 -26.77c27.67,0 50.09,-22.43 50.09,-50.09 0,-27.67 -22.43,-50.09 -50.09,-50.09 -27.66,0 -50.09,22.43 -50.09,50.09 0,27.66 22.43,50.09 50.09,50.09z"})))};o.default=h,h.defaultProps={name:"Switch off icon",componentName:"SwitchOffIcon",description:"Switch icon at off state for all types of printers.",tags:[t.Tag.ICONS,t.Tag.MINI,t.Tag.SL1],folder:t.Folder.ICONS,width:48,height:48,theme:t.Theme.LIGHT,primaryColor:t.Color.GRAY,withBackground:!0,backgroundColor:t.Color.WHITE,backgroundRounded:!0,backgroundRadius:307.69*t.DefaultRadiusRatio}},36:function(e,o,a){"use strict";a.r(o),a.d(o,"Scale",(function(){return n}));var r=a(5),t=a(0),i=a.n(t),n=function(e){var o=Math.round((e.viewBox-e.viewBox*(1-r.DefaultPaddingRatio))/2);return i.a.createElement(i.a.Fragment,null,function(){var a;if(e.withBackground)return i.a.createElement("rect",{transform:e.withPadding?"translate(".concat(-2*o,", ").concat(-2*o,")"):"",fill:null===(a=e.backgroundColor)||void 0===a?void 0:a.toString(),width:e.viewBox*(1+(e.withPadding?Math.abs(r.DefaultPaddingRatio):0)),height:e.viewBox*(1+(e.withPadding?Math.abs(r.DefaultPaddingRatio):0)),rx:e.backgroundRounded?e.backgroundRadius:0,ry:e.backgroundRounded?e.backgroundRadius:0})}(),e.withPadding?i.a.createElement("g",{transform:"translate(".concat(-o,", ").concat(-o,")")},e.children):i.a.createElement(i.a.Fragment,null,e.children))}},37:function(e,o,a){"use strict";a.r(o),a.d(o,"Svg",(function(){return n}));var r=a(5),t=a(0),i=a.n(t),n=function(e){return i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fillRule:"evenodd",clipRule:"evenodd",imageRendering:"optimizeQuality",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",viewBox:e.withPadding?"".concat(0-e.viewBox*Math.abs(r.DefaultPaddingRatio)," ").concat(0-e.viewBox*Math.abs(r.DefaultPaddingRatio)," ").concat(e.viewBox+e.viewBox*Math.abs(r.DefaultPaddingRatio)," ").concat(e.viewBox+e.viewBox*Math.abs(r.DefaultPaddingRatio)):"".concat(0," ",0," ",e.viewBox," ").concat(e.viewBox)},e.children)}},38:function(e,o,a){"use strict";a.r(o),a.d(o,"ThemeSwitcherMonoColor",(function(){return t})),a.d(o,"ThemeSwitcherMonoInverseColor",(function(){return i})),a.d(o,"ThemeSwitcherDuoColor",(function(){return n}));var r=a(5),t=function(e,o,a){switch(e){case r.Theme.CUSTOM:break;case r.Theme.LIGHT:o(r.Color.DARK_GRAY),a(r.Color.WHITE);break;case r.Theme.DARK:o(r.Color.WHITE),a(r.Color.GRAY);break;case r.Theme.WHITE:o(r.Color.WHITE),a(r.Color.BLACK);break;case r.Theme.BLACK:o(r.Color.BLACK),a(r.Color.WHITE);break;case r.Theme.GRAYSCALE:o(r.Color.WHITE),a(r.Color.GRAY);break;case r.Theme.MONOCHROME:o(r.Color.WHITE),a(r.Color.BLACK)}},i=function(e,o,a){switch(e){case r.Theme.CUSTOM:break;case r.Theme.LIGHT:o(r.Color.ORANGE),a(r.Color.WHITE);break;case r.Theme.DARK:o(r.Color.ORANGE),a(r.Color.GRAY);break;case r.Theme.WHITE:o(r.Color.WHITE),a(r.Color.BLACK);break;case r.Theme.BLACK:o(r.Color.BLACK),a(r.Color.WHITE);break;case r.Theme.GRAYSCALE:o(r.Color.GRAY),a(r.Color.GRAY);break;case r.Theme.MONOCHROME:o(r.Color.WHITE),a(r.Color.BLACK)}},n=function(e,o,a,t){switch(e){case r.Theme.CUSTOM:break;case r.Theme.LIGHT:o(r.Color.DARK_GRAY),a(r.Color.ORANGE),t(r.Color.WHITE);break;case r.Theme.DARK:o(r.Color.WHITE),a(r.Color.ORANGE),t(r.Color.GRAY);break;case r.Theme.WHITE:o(r.Color.WHITE),a(r.Color.WHITE),t(r.Color.BLACK);break;case r.Theme.BLACK:o(r.Color.BLACK),a(r.Color.BLACK),t(r.Color.WHITE);break;case r.Theme.GRAYSCALE:o(r.Color.WHITE),a(r.Color.DARK_GRAY),t(r.Color.GRAY);break;case r.Theme.MONOCHROME:o(r.Color.WHITE),a(r.Color.WHITE),t(r.Color.BLACK)}}}}]);
//# sourceMappingURL=91.75bf5ed3.chunk.js.map