"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86628],{86628:(t,e,i)=>{i.r(e),i.d(e,{ix_datetime_picker:()=>n});var o=i(53484);const n=class{constructor(t){(0,o.r)(this,t),this.done=(0,o.c)(this,"done",7),this.timeChange=(0,o.c)(this,"timeChange",7),this.dateChange=(0,o.c)(this,"dateChange",7),this.dateSelect=(0,o.c)(this,"dateSelect",7),this.range=!0,this.showHour=!0,this.showMinutes=!0,this.showSeconds=!0,this.minDate=void 0,this.maxDate=void 0,this.dateFormat="yyyy/LL/dd",this.timeFormat="HH:mm:ss",this.from=void 0,this.to=void 0,this.time=void 0,this.showTimeReference=void 0,this.timeReference=void 0,this.textSelectDate=void 0,this.i18nDone="Done",this.weekStartIndex=0,this.locale=void 0,this.eventDelimiter=" - "}async onDone(){var t;const e=await this.datePickerElement.getCurrentDate(),i=await this.timePickerElement.getCurrentTime();this.dateSelect.emit({from:e.from,to:e.to,time:i}),this.done.emit([e.from,null!==(t=e.to)&&void 0!==t?t:"",i].join(this.eventDelimiter))}async onDateChange(t){t.preventDefault(),t.stopPropagation();const{detail:e}=t;this.dateChange.emit(e)}async onTimeChange(t){t.preventDefault(),t.stopPropagation();const{detail:e}=t;this.timeChange.emit(e)}render(){return(0,o.h)(o.H,null,(0,o.h)("ix-layout-grid",{class:"no-padding"},(0,o.h)("ix-row",null,(0,o.h)("ix-col",{class:"no-padding"},(0,o.h)("ix-date-picker",{ref:t=>this.datePickerElement=t,corners:"left",range:this.range,onDateChange:t=>this.onDateChange(t),from:this.from,to:this.to,format:this.dateFormat,minDate:this.minDate,maxDate:this.maxDate,weekStartIndex:this.weekStartIndex,standaloneAppearance:!1,locale:this.locale})),(0,o.h)("ix-col",{class:"no-padding"},(0,o.h)("ix-time-picker",{class:"min-width",ref:t=>this.timePickerElement=t,corners:"right",standaloneAppearance:!1,showHour:this.showHour,showMinutes:this.showMinutes,showSeconds:this.showSeconds,onTimeChange:t=>this.onTimeChange(t),format:this.timeFormat,time:this.time}))),(0,o.h)("ix-row",null,(0,o.h)("ix-col",null,(0,o.h)("ix-button",{class:"btn-select-date btn-md-width",onClick:()=>this.onDone()},this.textSelectDate||this.i18nDone)))))}};n.style=":host{display:block;background-color:var(--theme-menu--background);border-radius:4px;position:relative;width:-moz-min-content;width:min-content}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .min-width{width:-moz-min-content;width:min-content}:host .no-padding{padding:0}:host .flex{display:flex;justify-content:center;flex-direction:column}@media (min-width: 576px){:host{min-width:-moz-max-content;min-width:max-content}:host .btn-select-date{left:unset !important}}:host .individual{box-shadow:none;border:none}:host .btn-select-date{position:absolute;bottom:1rem;right:1rem;left:1rem}"}}]);