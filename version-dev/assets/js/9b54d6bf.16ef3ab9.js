"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74180],{30876:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>m});var i=l(2784);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,i)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,i,n=function(e,t){if(null==e)return{};var l,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)l=a[i],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},d=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=s(l),m=n,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return l?i.createElement(f,o(o({ref:t},d),{},{components:l})):i.createElement(f,o({ref:t},d))}));function m(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,o=new Array(a);o[0]=p;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var s=2;s<a;s++)o[s]=l[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,l)}p.displayName="MDXCreateElement"},29642:(e,t,l)=>{l.d(t,{Z:()=>c});var i=l(69979),n=l(6277),a=l(2784);const o="docusaurus.ix.general.tab";const r=e=>{const[t,l]=(0,a.useState)(function(){const e=window.localStorage.getItem(o);return e&&("styleguide"===(t=e)||"code"===t)?e:"styleguide";var t}()),i=e=>{l(e),function(e){window.localStorage.setItem(o,e)}(e)},n=e[t];return a.createElement(a.Fragment,null,a.createElement("div",{className:"Docs__Tabs"},a.createElement(s,{name:"UX guidelines",active:"styleguide"===t,onClick:()=>i("styleguide")},a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 2C18.0228 2 22.5 6.47715 22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2ZM4.56189 11C5.01314 7.38128 7.88128 4.51314 11.5 4.06189V6H13.5V4.06189C17.1187 4.51314 19.9869 7.38128 20.4381 11H18.5V13H20.4381C19.9869 16.6187 17.1187 19.4869 13.5 19.9381V18H11.5V19.9381C7.88128 19.4869 5.01314 16.6187 4.56189 13H6.5V11H4.56189ZM11 10.5L17.5 7L14 13.5L7.5 17L11 10.5ZM13.5 12C13.5 12.5523 13.0523 13 12.5 13C11.9477 13 11.5 12.5523 11.5 12C11.5 11.4477 11.9477 11 12.5 11C13.0523 11 13.5 11.4477 13.5 12Z"}))),a.createElement(s,{name:"Development",active:"code"===t,onClick:()=>i("code")},a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.0168 6.52423L13.0849 6.00659L9.97911 17.5977L11.911 18.1153L15.0168 6.52423ZM7.45711 6.79042L8.87132 8.20463L5.07921 11.9975L8.87132 15.7904L7.45711 17.2046L2.25 11.9975L7.45711 6.79042ZM17.5342 6.79216L16.12 8.20637L19.9121 11.9993L16.12 15.7922L17.5342 17.2064L22.7413 11.9993L17.5342 6.79216Z",fill:"inherit"})))),a.createElement("div",{className:"Docs__Tabs__Content"},a.createElement(n,null)))},c=e=>a.createElement(i.Z,null,(()=>a.createElement(r,e)));function s(e){return a.createElement("div",{onClick:e.onClick,className:(0,n.Z)("Doc_Tab",{active:e.active})},e.children,e.name)}},28595:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>x,contentTitle:()=>y,default:()=>I,frontMatter:()=>v,metadata:()=>w,toc:()=>N});var i=l(7896),n=l(2784),a=l(30876),o=l(29642);const r={toc:[{value:"Usage",id:"usage",level:2},{value:"iX Icon library",id:"ix-icon-library",level:2},{value:"Designing new icons",id:"designing-new-icons",level:2},{value:"Technical requirements",id:"technical-requirements",level:3},{value:"Formal requirements",id:"formal-requirements",level:3},{value:"1. Icon grid size",id:"1-icon-grid-size",level:2},{value:"2. iX in-app icon design grid",id:"2-ix-in-app-icon-design-grid",level:2},{value:"Exceptions to the clearance zone",id:"exceptions-to-the-clearance-zone",level:3},{value:"3. Light weight icons",id:"3-light-weight-icons",level:2},{value:"4. Simple and geometric",id:"4-simple-and-geometric",level:2},{value:"5. Stroke widths",id:"5-stroke-widths",level:2},{value:"6. Gaps",id:"6-gaps",level:2},{value:"7. Strikethrough, cuts and cutouts",id:"7-strikethrough-cuts-and-cutouts",level:2},{value:"8. The technical finish",id:"8-the-technical-finish",level:2},{value:"Prepare your icon for integration",id:"prepare-your-icon-for-integration",level:3},{value:"Integrate in Figma",id:"integrate-in-figma",level:3},{value:"Export for development",id:"export-for-development",level:3}]};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"icons"},"Icons"),(0,a.kt)("p",null,"The following section is about in-app icons, used in the actual application UI and UI elements. It is not about application icons, that usually appear on a launch pad, home screen, desktop, task bar or the like."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Icons are graphical representations of terms, functions, objects etc.. Ideally, they are used together with a descriptive text to make it easier for users to learn their meaning. A standalone icon, without textual description, has to be paired with a tooltip that describes the meaning of the icon. Make sure a description can be read out by screen readers."),(0,a.kt)("h2",{id:"ix-icon-library"},"iX Icon library"),(0,a.kt)("p",null,"IX comes with an extensive set of icons made for the industrial context. Since it is almost impossible to cover every thinkable icon usecase, it is also possible to integrate external icons to complement the iX icon set."),(0,a.kt)("h2",{id:"designing-new-icons"},"Designing new icons"),(0,a.kt)("p",null,"Before you start designing your specific icon set for your application, consider the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Make sure the icons you need are not already in the library")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Maybe the icon already exists under a slightly different name or it might be planned for a future release so please double check or ask the iX team when in doubt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Consider using more generic iX icons than creating multiple very specific new ones (e.g.: Use the generic "add" icon instead of creating an "add-wireless-device" icon)')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Do not create alternatives to existing iX icons just for the sake of your own look")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ask other designers within your company about the existance of an icion, to prevent creation of duplicates")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Finally: Entrust a professional designer with the task of designing an icon"))),(0,a.kt)("h3",{id:"technical-requirements"},"Technical requirements"),(0,a.kt)("p",null,'Icons in iX are monochromiatic. They will be colored during runtime, depending on the context they are being used in. For more technical requirements see the "Code" tab above.'),(0,a.kt)("h3",{id:"formal-requirements"},"Formal requirements"),(0,a.kt)("p",null,"New icons should follow the app icon guidelines below for a consistent look & feel across applications. For Siemens applications it is mandatory to follow these guidelines."),(0,a.kt)("h1",{id:"ix-icon-design-guidelines"},"iX icon design guidelines"),(0,a.kt)("p",null,"These guidelines extend the basic guidelines on ",(0,a.kt)("a",{parentName:"p",href:"https://brandville.siemens.com/en/design-elements/icons/ui-icons"},"Siemens brandville"),"."),(0,a.kt)("h2",{id:"1-icon-grid-size"},"1. Icon grid size"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The basic icon grid size is 24\u271524")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"/version-dev/figma/wEptRgAezDU1z80Cn3eZ0o_801_253.png",alt:"Basic grid"})),(0,a.kt)("h2",{id:"2-ix-in-app-icon-design-grid"},"2. iX in-app icon design grid"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the design grid component \u201cIcon Design Grid\u201d from the \u201cAssets\u201d library as background for creating new icons")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The design grid helps to limit the icon boundaries to achieve an evenly optical weight of different icon shapes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The clearance zone (red area) should not be touched by the icon (for exceptions see below)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The lines represent the boundaries of key shapes or just mark the center ",(0,a.kt)("img",{parentName:"p",src:"/version-dev/figma/wEptRgAezDU1z80Cn3eZ0o_801_856.png",alt:"iX app icon design grid"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the portrait key shape for vertically oriented shapes\n",(0,a.kt)("img",{parentName:"p",src:"/version-dev/figma/wEptRgAezDU1z80Cn3eZ0o_802_17540.png",alt:"Portrait key shapes"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the landscape key shape for horizontally oriented shapes\n",(0,a.kt)("img",{parentName:"p",src:"/version-dev/figma/wEptRgAezDU1z80Cn3eZ0o_802_19334.png",alt:"Landscape key shapes"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the square key shape for square icons\n",(0,a.kt)("img",{parentName:"p",src:"/version-dev/figma/wEptRgAezDU1z80Cn3eZ0o_802_23090.png",alt:"Square key shapes"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use the circle key shape for round icons\n",(0,a.kt)("img",{parentName:"p",src:"/version-dev/figma/wEptRgAezDU1z80Cn3eZ0o_802_23091.png",alt:"Circle key shapes"})))),(0,a.kt)("h3",{id:"exceptions-to-the-clearance-zone"},"Exceptions to the clearance zone"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Icons with attributes: Icons can be enhanced with attributes. These attributes are allowed to touch the clearance zone but should keep at least 1px space to the outer boundary\n",(0,a.kt)("img",{parentName:"p",src:"/version-dev/figma/wEptRgAezDU1z80Cn3eZ0o_802_23092.png",alt:"Exception 1: icon attributes"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Optical fixes: Shapes are allowed to touch the clearance zone to equalize visual effects with pointed shapes or single strokes\n",(0,a.kt)("img",{parentName:"p",src:"/version-dev/figma/wEptRgAezDU1z80Cn3eZ0o_802_23093.png",alt:"Exception 2: optical fixes"})))),(0,a.kt)("h2",{id:"3-light-weight-icons"},"3. Light weight icons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Prefer strokes and outlines over filled shapes"),(0,a.kt)("li",{parentName:"ul"},"Please provide a filled variant of the icon as well, where possible and potentially useful. It can be used in situations when more visual weight is required. The filled variant gets the name suffix \u201c_filled\u201d.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"/version-dev/figma/wEptRgAezDU1z80Cn3eZ0o_808_23094.png",alt:"Normal and filled variant"})),(0,a.kt)("h2",{id:"4-simple-and-geometric"},"4. Simple and geometric"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Keep icons as simple as possible"),(0,a.kt)("li",{parentName:"ul"},"Avoid complex symbols or symbol combinations whenever possible"),(0,a.kt)("li",{parentName:"ul"},"Create icons from geometric shapes"),(0,a.kt)("li",{parentName:"ul"},"Prefer sharp corners and straight lines"),(0,a.kt)("li",{parentName:"ul"},"Use rounded corners and endings only to support the characteristics of the represented object")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"/version-dev/figma/wEptRgAezDU1z80Cn3eZ0o_808_23095.png",alt:"Simple and geometric shapes"})),(0,a.kt)("h2",{id:"5-stroke-widths"},"5. Stroke widths"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default stroke width is 2px"),(0,a.kt)("li",{parentName:"ul"},"In case icon readabilty can't be guaranteed otherwise, stroke widths of 1.5px or even 1x are also allowed. Before doing that please make sure all rules from section 4 are followed.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"/version-dev/figma/wEptRgAezDU1z80Cn3eZ0o_809_23096.png",alt:"Stroke widths"})),(0,a.kt)("h2",{id:"6-gaps"},"6. Gaps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Antialiasing effects can lead to blurry borders and edges"),(0,a.kt)("li",{parentName:"ul"},"Use 2px gaps to visually separate two shapes from each other"),(0,a.kt)("li",{parentName:"ul"},"Avoid unsafe patterns of alternating between set pixel and no pixel. In the worst case such shapes cannot be visually distinguished anymore.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"/version-dev/figma/wEptRgAezDU1z80Cn3eZ0o_809_23097.png",alt:"Gaps and unsafe pattern"})),(0,a.kt)("h2",{id:"7-strikethrough-cuts-and-cutouts"},"7. Strikethrough, cuts and cutouts"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A diagonal strikethrough is used to symbolize the opposite of an icon or an unavailability (e.g. show & hide, switch off alarm)"),(0,a.kt)("li",{parentName:"ul"},"A diagonal strikethrough starts from top left and ends at the bottom right (refers to the crossbar of letter \u201cN\u201d for \u201cNo\u201d), followed by a 2px space above right"),(0,a.kt)("li",{parentName:"ul"},"Use at least 1px space for cuts or cutouts (be aware of \u201cunsafe patterns\u201d, see 6.)")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"/version-dev/figma/wEptRgAezDU1z80Cn3eZ0o_810_23098.png",alt:"Strike-throughs and gaps"})),(0,a.kt)("h2",{id:"8-the-technical-finish"},"8. The technical finish"),(0,a.kt)("h3",{id:"prepare-your-icon-for-integration"},"Prepare your icon for integration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The icon size (including clearance zone) must be 24x24"),(0,a.kt)("li",{parentName:"ul"},"The icon must not contain strokes (convert all strokes to outlines)"),(0,a.kt)("li",{parentName:"ul"},"Combine all icon parts to one single shape by using boolean operations"),(0,a.kt)("li",{parentName:"ul"},"Name the remaining shape \u201cVector\u201d, otherwise color overrides will not work properly in Figma"),(0,a.kt)("li",{parentName:"ul"},"Make sure the shape is set to \u201cScale\u201d in the \u201cConstraints\u201d settings in Figma, otherwise the resizing will not work properly")),(0,a.kt)("h3",{id:"integrate-in-figma"},"Integrate in Figma"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a component from your icon"),(0,a.kt)("li",{parentName:"ul"},"Use a short, descriptive and unique name - also consider adding a project or application suffix to the icon name to prevent naming collisions with other external icons"),(0,a.kt)("li",{parentName:"ul"},'"Publish" the document with your icon(s) and it will be available as library in your document assets'),(0,a.kt)("li",{parentName:"ul"},"Activate your library in the design document")),(0,a.kt)("h3",{id:"export-for-development"},"Export for development"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create an instance of your icon (this can be done in the same document the icon is stored in)"),(0,a.kt)("li",{parentName:"ul"},"Resize this instance to 512\xd7512 (target size for development integration)"),(0,a.kt)("li",{parentName:"ul"},"Check if the scaling works properly (check scaling settings, if not)"),(0,a.kt)("li",{parentName:"ul"},"Export the instance as SVG"),(0,a.kt)("li",{parentName:"ul"},"Make sure the name of the SVG file matches the icon name to avoid confusion"),(0,a.kt)("li",{parentName:"ul"},"Hand the SVG over to your development")))}c.isMDXComponent=!0;const s=JSON.parse('{"c":["about-filled","about","add-application","add-circle-filled","add-circle","add-document-note","add-eye-filled","add-eye","add-task-list","add-task","add-user-filled","add-user","add","ai","alarm-bell-cancelled-filled","alarm-bell-cancelled","alarm-bell-filled","alarm-bell","alarm-clock-filled","alarm-clock","alarm-filled","alarm","analyze","anomaly-found","anomaly","app-menu","application-screen","applications","apps","arrow-down-right","arrow-down","arrow-left","arrow-right-down","arrow-right","arrow-up","attach","attachment-upload","audio-description1","audio-description2","audit-report","average","backup-filled","backup","bar-code","barchart","battery-check","battery-empty-question","battery-empty","battery-exclamation","battery-full-check","battery-full","battery-half","battery-low","battery-quarter","battery-slash","battery-three-quarter","battery-xmark","bezier-curve","binoculars-filled","binoculars","blazor","book","bookmark-filled","bookmark","boundary-signals","building1-filled","building1","building2-filled","building2","bulb-filled","bulb","calendar-filled","calendar-settings","calendar","cancel","cancelled","capacity-filled","capacity","capture","car-filled","car","card-layout-filled","card-layout","certificate-error-filled","certificate-error","certificate-exclamation-filled","certificate-exclamation","certificate-success-filled","certificate-success","chart-cursor","chart-curve-linear","chart-curve-spline","chart-curve-stepped","chart-diagram-add","chart-diagram","chart-diagrams","chart-labels-filled","chart-labels","check-in","check-out","checkbox-component-checked","checkbox-component-mixed","checkbox-component-unchecked","checkbox-filled","checkbox","checkboxes-filled","checkboxes","chevron-down-small","chevron-down","chevron-left-small","chevron-left","chevron-right-small","chevron-right","chevron-up-small","chevron-up","circle-dot-filled","circle-dot","circle-filled","circle-pause-filled","circle-pause","circle-play-filled","circle-play","circle-stop-filled","circle-stop","circle","clear-filter-filled","clear-filter","clear","clock-filled","clock","close-small","close","cloud-download-add-filled","cloud-download-add","cloud-download-filled","cloud-download-list-filled","cloud-download-list","cloud-download","cloud-filled","cloud-new-filled","cloud-new","cloud-success-filled","cloud-success","cloud-upload-filled","cloud-upload","cloud","code","coffee-empty-filled","coffee-empty","coffee-filled","coffee","cogwheel-filled","cogwheel","combine","compact-disc-filled","compact-disc","compound-block","configuration","configure-filled","configure","connected","connector-chart-filled","connector-chart","connector-filled","connector-hex-filled","connector-hex","connector-rect-filled","connector-rect","connector-rhomb-filled","connector-rhomb","connector","consistency-check","contact-details-filled","contact-details","context-menu","controlled-device","controller-device","copy","corner-arrow-up-left","couch-filled","couch","create-plant-filled","create-plant","cut","cycle","data-egress","data-ingress-egress","data-ingress","database-filled","database","details","diagram-module-library","diagram-module-new","diagram-module","diamond","disconnected","disk-filled","disk-pen","disk","distribution","doc-document","document-bulk","document-info","document-link","document-management","document-reference","document-settings","document-success","document","double-check","double-chevron-down","double-chevron-left","double-chevron-right","double-chevron-up","doublet-filled","doublet","download-add","download-list","download","drop","duplicate-document","duplicate","e-mail-filled","e-mail","earth-filled","earth","edit-plant","electrical-energy-filled","electrical-energy","ellipse-arc","ellipse-filled","ellipse","error-filled","error","explore-filled","explore","export","eye-cancelled-filled","eye-cancelled","eye-filled","eye","factory-reset-filled","factory-reset","filter-filled","filter-outline","filter","flag-filled","flag","folder-down-filled","folder-down","folder-filled","folder-new-filled","folder-new-outline","folder-new","folder-open-filled","folder-open-outline","folder-open","folder-outline","folder-up-filled","folder-up","folder","full-screeen-exit","full-screeen","function-block-library","function-block-new","function-block","function-diagram-new","function-diagram","gauge-filled","gauge","gaugechart","global-plant-filled","global-plant","globe-filled","globe","goto","group","hard-reset","hardware-cabinet","health-filled","health","heart-filled","heart","hexagon-vertical-bars-database-filled","hexagon-vertical-bars-database","hexagon-vertical-bars-filled","hexagon-vertical-bars","hierarchy","highlight-filled","highlight","history-list","history","home-filled","home","hourglass","image-filled","image","import","info-feed","info-filled","info","ingestion-report","ingestion","ink-pen","inquiry-filled","inquiry-mail","inquiry","item-details-filled","item-details","label-filled","label","language-filled","language","layers-filled","layers","leaf","legal","library-new","library","license","light-dark","line-diagonal","link","list","live-schedule","location-filled","location-outline","location","lock-filled","lock-key-filled","lock-key","lock","log-in","log-out","log","logic-diagram","lower-limit","mail-filled","mail","maintenance-documents","maintenance-info","maintenance-warning-filled","maintenance-warning","maintenance","mandatory-done","mandatory","map","maximize","microphone-filled","microphone","minimize","minus","missing-symbol","mix","monitor-filled","monitor-trend","monitor","monitoring-add","monitoring","monitorings","moon-filled","moon","more-menu","mouse-click-filled","mouse-click","mouse-select-filled","mouse-select","mp4-document","namur-check-function-filled","namur-check-function","namur-failure-filled","namur-failure","namur-maintenance-required-filled","namur-maintenance-required","namur-ok-filled","namur-ok","namur-out-of-spec-filled","namur-out-of-spec","navigation-filled","navigation-left","navigation-right","navigation","new-indicator-filled","new-indicator","no-filter-filled","no-filter","no-image","note-filled","note","notification-filled","notification","notifications-filled","notifications","ontology-filled","ontology","open-external","open-file-filled","open-file","operate-plant-filled","operate-plant","optimize","p-and-i-symbols","p-i-diagram","pan","paste","pause","pc-tower-filled","pc-tower","pdf-document","pen-filled","pen","phone-filled","phone","photo-camera-add","photo-camera-cancelled-filled","photo-camera-cancelled","photo-camera-filled","photo-camera","photo-cameras","piechart-filled","piechart","pin-filled","pin","plant-filled","plant-handbook-filled","plant-handbook","plant-outline","plant-security","plant-settings-filled","plant-settings","plant-user-filled","plant-user","plant","plants-filled","plants","play-filled","play-pause-filled","play-pause","play-stepwise-filled","play-stepwise","play","plus-minus-times-divide","plus","point-up-filled","point-up","polar-plot","polygon-filled","polygon-line","polygon","ppt-document","print-filled","print","prio-high","prio-low","prio-middle","product-catalog","product-management","product","project-configuration","project-new","project-scenarios","project-server-filled","project-server","project","protocol","publish-document","publish","qr-code","quality-report","question-filled","question","radarchart","radio-waves-off","radio-waves","random-filled","random","reboot","rectangle-filled","rectangle","redo","reference","refresh-cancelled","refresh","reload","remove-application","remove-eye-filled","remove-eye","rename","replace","report-barchart","report-linechart","report-text","reset","restore-backup-filled","restore-backup-pc","restore-backup","rhomb-filled","rhomb","road-filled","road","rocket-filled","rocket","route-target","route","scatterplot","scheduler-filled","scheduler","screen-filled","screen","screenshot-filled","screenshot","script-add","script","scripts","search","share-filled","share","shopping-cart-filled","shopping-cart","shout-filled","shout","sign-language","signal-strength-0","signal-strength-1","signal-strength-2","signal-strength-3","signal-strength-4","signal-strength-5","signal-strength-6","signal-strength-7","signal-strength-8","simit-component","simit-macro-component-editor","simit-macro","single-check","skip-back-filled","skip-back","skip-filled","skip","snowflake","sort-ascending","sort-descending","sort","sound-loud-filled","sound-loud","sound-mute-filled","sound-mute","sound-off-filled","sound-off","sound-quiet-filled","sound-quiet","spatial","split-horizontally","split-vertically","stamp-filled","stamp","standby","star-add-filled","star-add","star-cancelled-filled","star-cancelled","star-filled","star-list-filled","star-list","star","start-data-analysis","steering-user-filled","steering-user","steering","stethoscope","stop-filled","stop","success-filled","success","sun-filled","sun","support","surveillance-cancelled-filled","surveillance-cancelled","surveillance-filled","surveillance","svg-document","swap-left-right","switch-slider","table-columns","table-rows","table-settings","table","tag-filled","tag-plus-filled","tag-plus","tag","tasks-all","tasks-done","tasks-open","text-circle-rectangle-filled","text-circle-rectangle","text-document","text","threshold-cancelled","threshold-off","threshold-on","to-be-published","to-search","topic-filled","topic","touch-filled","touch","trashcan-filled","trashcan","tree","trend","triangle-filled","triangle","truck-filled","truck","tulip-filled","tulip","txt-document","undo","ungroup","unlock-filled","unlock-plant-filled","unlock-plant","unlock","upload-document-note","upload-success","upload","upper-limit","user-check-filled","user-check","user-filled","user-management-filled","user-management","user-profile-filled","user-profile","user-reading-reading","user-reading","user-settings-filled","user-settings","user","validate","vdi-folder","version-history","video-file-filled","video-file","warning-filled","warning-rhomb-filled","warning-rhomb","warning","water-bathing","water-fish","water-sunbathing","waveform","webcam-cancelled-filled","webcam-cancelled","webcam-filled","webcam","wlan-off","wlan-strength-0","wlan-strength-1","wlan-strength-2","wlan-strength-3","work-case-filled","work-case","workspace","workspaces","x-axis-settings","xls-document","xml-document","y-axis-settings","youtube-filled","youtube","zoom-in","zoom-out","zoom-selection"]}');var d=l(6277);const u="Icons__34L",p="Icon__Tile_suDU",m="Search_sFnl",f="Search__Label_M00B",h="Hide__Input_ld4o",g=()=>{const e=(0,n.useRef)({}),[t,l]=(0,n.useState)(),[i]=(0,n.useState)(s.c);return n.createElement(n.Fragment,null,n.createElement("div",{className:(0,d.Z)(m)},n.createElement("span",{className:(0,d.Z)(f)},"Search: "),n.createElement("input",{placeholder:"Search Icon",onInput:e=>l(e.target.value.toLocaleLowerCase())})),n.createElement("div",{className:(0,d.Z)(u)},i.filter((e=>!t||e.includes(t))).map((t=>n.createElement("div",{key:t,className:(0,d.Z)(p),onClick:()=>{}},n.createElement("div",null,n.createElement("ix-icon",{name:t})),n.createElement("input",{ref:l=>{e.current[t]=l},className:(0,d.Z)(h),type:"text",readOnly:!0,value:t,onChange:()=>{}}))))))},k={toc:[{value:"Usage",id:"usage",level:2},{value:"Angular",id:"angular",level:3},{value:"React",id:"react",level:3},{value:"Web components",id:"web-components",level:3},{value:"Vue",id:"vue",level:3},{value:"Integrate external icons",id:"integrate-external-icons",level:2},{value:"Technical requirements",id:"technical-requirements",level:3},{value:"Icon library",id:"icon-library",level:2}]};function b(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"angular"},"Angular"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-icon name="star" size="16"></ix-icon>\n<ix-icon name="star" size="24"></ix-icon>\n<ix-icon name="star" size="32"></ix-icon>\n')),(0,a.kt)("h3",{id:"react"},"React"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<IxIcon name="star" size="16"></IxIcon>\n<IxIcon name="star" size="24"></IxIcon>\n<IxIcon name="star" size="32"></IxIcon>\n')),(0,a.kt)("h3",{id:"web-components"},"Web components"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-icon name="star" size="16"></ix-icon>\n<ix-icon name="star" size="24"></ix-icon>\n<ix-icon name="star" size="32"></ix-icon>\n')),(0,a.kt)("h3",{id:"vue"},"Vue"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<IxIcon name="star" size="16"></IxIcon>\n<IxIcon name="star" size="24"></IxIcon>\n<IxIcon name="star" size="32"></IxIcon>\n')),(0,a.kt)("h2",{id:"integrate-external-icons"},"Integrate external icons"),(0,a.kt)("h3",{id:"technical-requirements"},"Technical requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Supported icon format is SVG"),(0,a.kt)("li",{parentName:"ul"},"Each icon is a single SVG file, Sprites are not supported yet"),(0,a.kt)("li",{parentName:"ul"},"The icon has a size of 512\u2715512 (width, height and viewBox)"),(0,a.kt)("li",{parentName:"ul"},"All color information within the SVG will be ignored"),(0,a.kt)("li",{parentName:"ul"},"For visual and formal requirements see guidelines tab above")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'  <ix-icon name="./assets/my-icon.svg"></ix-icon>\n  <ix-icon name="https://my.example.cdn.address/assets/my-icon.svg"></ix-icon>\n')),(0,a.kt)("h2",{id:"icon-library"},"Icon library"),(0,a.kt)(g,{mdxType:"Icons"}))}b.isMDXComponent=!0;const v={title:"Icons"},y="Icons",w={unversionedId:"icon-library/icons",id:"icon-library/icons",title:"Icons",description:"",source:"@site/docs/icon-library/icons.md",sourceDirName:"icon-library",slug:"/icon-library/icons",permalink:"/version-dev/docs/icon-library/icons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/icon-library/icons.md",tags:[],version:"current",frontMatter:{title:"Icons"},sidebar:"mySidebar",previous:{title:"Core UI 6.5.0 to Siemens iX v1",permalink:"/version-dev/docs/migration/core-ui"},next:{title:"Animations",permalink:"/version-dev/docs/theming/animation"}},x={},N=[],z={toc:N};function I(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},z,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"icons"},"Icons"),(0,a.kt)(o.Z,{styleguide:c,code:b,mdxType:"DocsTabs"}))}I.isMDXComponent=!0}}]);