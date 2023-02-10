"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86628],{86628:(e,t,i)=>{i.r(t),i.d(t,{ix_datetime_picker:()=>h});var s=i(60598);const h=class{constructor(e){(0,s.r)(this,e),this.done=(0,s.c)(this,"done",7),this.timeChange=(0,s.c)(this,"timeChange",7),this.dateChange=(0,s.c)(this,"dateChange",7),this.dateSelect=(0,s.c)(this,"dateSelect",7),this.range=!0,this.showHour=!1,this.showMinutes=!1,this.showSeconds=!1,this.minDate=void 0,this.maxDate=void 0,this.dateFormat="yyyy/LL/dd",this.timeFormat="TT",this.from=void 0,this.to=null,this.time=void 0,this.showTimeReference=void 0,this.eventDelimiter=" - ",this.timeReference=void 0,this.textSelectDate="Done"}onDone(){var e;this.done.emit([this._from,null!==(e=this._to)&&void 0!==e?e:"",this._time].join(this.eventDelimiter)),this.dateSelect.emit({from:this._from,to:this._to,time:this._time})}async onDateChange(e){e.preventDefault(),e.stopPropagation();const{detail:t}=e;this.dateChange.emit(t);const i=await this.datePickerElement.getCurrentDate();this._from=i.start,this._to=i.end}async onTimeChange(e){e.preventDefault(),e.stopPropagation();const{detail:t}=e;this.timeChange.emit(t);const i=await this.timePickerElement.getCurrentTime();this._time=i}componentDidLoad(){this._from=this.from,this._to=this.to,this._time=this.time}render(){return(0,s.h)(s.H,null,(0,s.h)("div",{class:"flex"},(0,s.h)("div",{class:"separator"}),(0,s.h)("ix-date-picker",{ref:e=>this.datePickerElement=e,corners:"left",individual:!1,range:this.range,onDateChange:e=>this.onDateChange(e),from:this.from,to:this.to,format:this.dateFormat,minDate:this.minDate,maxDate:this.maxDate,eventDelimiter:this.eventDelimiter}),(0,s.h)("ix-time-picker",{ref:e=>this.timePickerElement=e,corners:"right",individual:!1,showHour:this.showHour,showMinutes:this.showMinutes,showSeconds:this.showSeconds,showTimeReference:this.showTimeReference,onTimeChange:e=>this.onTimeChange(e),time:this.time,format:this.timeFormat,timeReference:this.timeReference}),(0,s.h)("div",{class:"separator"})),(0,s.h)("div",{class:"done"},(0,s.h)("ix-button",{onClick:()=>this.onDone()},this.textSelectDate)))}};h.style=".sc-ix-datetime-picker-h{display:block;background-color:var(--theme-menu--background);border-radius:4px}.flex.sc-ix-datetime-picker{display:flex;justify-content:center}.done.sc-ix-datetime-picker{display:inline-flex;justify-content:flex-end;padding:1rem;width:100%}.separator.sc-ix-datetime-picker{border:1px solid var(--theme-datepicker-separator--background);width:100%;margin-top:72px;height:1px}"}}]);