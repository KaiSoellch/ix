"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82289],{82289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7896),o=(n(2784),n(30876));const r={},d=void 0,s={unversionedId:"auto-generated/previews/vue/date-dropdown-user-range",id:"auto-generated/previews/vue/date-dropdown-user-range",title:"date-dropdown-user-range",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/date-dropdown-user-range.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/date-dropdown-user-range",permalink:"/version-dev/docs/auto-generated/previews/vue/date-dropdown-user-range",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/date-dropdown-user-range.md",tags:[],version:"current",frontMatter:{}},i={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<script setup lang=\"ts\">\nimport { IxDateDropdown } from '@siemens/ix-vue';\n\nconst today = new Date().toLocaleDateString('en-US', {\n      year: 'numeric',\n      month: '2-digit',\n      day: '2-digit',\n});\n\nconst lastSevenDays = new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', {\n  year: 'numeric',\n  month: '2-digit',\n  day: '2-digit',\n});\n\nconst dateDropdownOptions = [\n  {\n    id: 'last-7',\n    label: 'Last 7 days',\n    from: lastSevenDays,\n    to: today,\n  },\n  {\n    id: 'today',\n    label: 'Today',\n    from: today,\n    to: today,\n  },\n];\n<\/script>\n\n<template>\n  <IxDateDropdown :dateRangeOptions=\"dateDropdownOptions\" date-range-id=\"last-7\" format=\"LL/dd/yyyy\"/>\n</template>\n\n<style scoped></style>\n\n")))}c.isMDXComponent=!0}}]);