(this.webpackJsonpkitchen_duty_slack_new_frontend=this.webpackJsonpkitchen_duty_slack_new_frontend||[]).push([[0],{35:function(t,e,n){t.exports=n(66)},40:function(t,e,n){},41:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),i=n(4),r=n.n(i),c=(n(40),n(29)),o=n(11),h=n(33),u=n(30),l=n(2),d=n(34),m=(n(41),n(14)),y=n(9),p=n.n(y),v=(n(45),Object(m.b)(p.a)),f=function(t){return s.a.createElement("div",{className:"calendarWrapper"},s.a.createElement(m.a,{localizer:v,getNow:t.getNow,events:t.eventsList,startAccessor:"start",endAccessor:"end",style:{height:500},selectable:!0,longPressThreshold:0,onSelectSlot:t.onSelecting}))},b=n(10),E=n.n(b),k=n(15),w=n(47),g=n(9),N="https://kitchen-duty-backend.herokuapp.com";function S(t){return M.apply(this,arguments)}function M(){return(M=Object(k.a)(E.a.mark((function t(e){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",w.post("".concat(N,"/get_date"),e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return(j=Object(k.a)(E.a.mark((function t(e){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",w.post("".concat(N,"/insert_date"),e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(){return(O=Object(k.a)(E.a.mark((function t(e){return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",w.post("".concat(N,"/remove_date"),e));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){var e=t.format("YYYY MM DD").split(" ");return{year:Number(e[0]),month:Number(e[1]),day:Number(e[2])}}n(64),n(65);var V=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(h.a)(this,Object(u.a)(e).call(this,t))).year=p()().year(),n.month=1,n.day=p()().date(),n.state={year:n.year,month:n.month,day:n.day,eventsList:[],inputValue:""},n.initEvents=n.initEvents.bind(Object(l.a)(n)),n.updateEvents=n.updateEvents.bind(Object(l.a)(n)),n.onDayClick=n.onSelecting.bind(Object(l.a)(n)),n.incrementMonth=n.incrementMonth.bind(Object(l.a)(n)),n.decrementMonth=n.decrementMonth.bind(Object(l.a)(n)),n.getNow=n.getNow.bind(Object(l.a)(n)),n.inputKeyDownHandler=n.inputKeyDownHandler.bind(Object(l.a)(n)),n.inputKeyPressHandler=n.inputKeyPressHandler.bind(Object(l.a)(n)),n}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentWillMount",value:function(){this.initEvents()}},{key:"initEvents",value:function(){var t=this;Promise.all(function(t,e){for(var n=[],a=1;a<=31;){var s=S(x(g("".concat(t,"-").concat(e)).date(a)));n.push(s),a++}return n}(this.state.year,this.state.month+1)).then((function(e){var n=e.map((function(t){return"None"===t.data?null:{start:"".concat(t.data.year,"-").concat(t.data.month,"-").concat(t.data.day),end:"".concat(t.data.year,"-").concat(t.data.month,"-").concat(t.data.day),title:t.data.name}}));t.onSelecting=t.onSelecting.bind(t),t.setState({eventsList:n})}))}},{key:"updateEvents",value:function(){var t=this,e=this.state.eventsList;""===this.state.inputValue?e=e.map((function(e){return null!==e&&e.start==="".concat(t.state.year,"-").concat(t.state.month+1,"-").concat(t.state.day)?null:e})):e[this.state.day+1]={start:"".concat(this.state.year,"-").concat(this.state.month+1,"-").concat(this.state.day),end:"".concat(this.state.year,"-").concat(this.state.month+1,"-").concat(this.state.day),title:this.state.inputValue},this.setState({eventsList:e})}},{key:"onSelecting",value:function(t){var e=p()(t.start),n=e.date(),a=e.year(),s=e.month();this.setState({day:n,year:a,month:s})}},{key:"inputKeyDownHandler",value:function(t){"Backspace"===t.key&&this.state.inputValue.length>0&&this.setState({inputValue:this.state.inputValue.substring(0,this.state.inputValue.length-1)})}},{key:"inputKeyPressHandler",value:function(t){"Enter"!==t.key?this.setState({inputValue:this.state.inputValue+t.key}):""!==this.state.inputValue?function(t){return j.apply(this,arguments)}({day:this.state.day,month:this.state.month+1,year:this.state.year,name:this.state.inputValue}).then(this.updateEvents):function(t){return O.apply(this,arguments)}({day:this.state.day,month:this.state.month+1,year:this.state.year}).then(this.updateEvents)}},{key:"incrementMonth",value:function(){11!==this.state.month?this.setState({month:this.state.month+1},this.initEvents):this.setState({month:0,year:this.state.year+1},this.initEvents),document.querySelectorAll("button").forEach((function(t){"Next"===t.innerHTML&&t.click()}))}},{key:"decrementMonth",value:function(){0===this.state.month&&2020===this.state.year||(0!==this.state.month?this.setState({month:this.state.month-1},this.initEvents):this.setState({month:11,year:this.state.year-1},this.initEvents),document.querySelectorAll("button").forEach((function(t){"Back"===t.innerHTML&&t.click()})))}},{key:"getNow",value:function(){return new Date(this.state.year,this.state.month,this.state.day)}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"inputWrapper"},s.a.createElement("div",{className:"instructionalText"},s.a.createElement("div",null,"Click on a Cell to select a date"),s.a.createElement("div",null,"Type in the text area to Enter a Name"),s.a.createElement("div",null,"Press Enter in the text area to Submit Name"),s.a.createElement("div",null,'Press Enter with no text Entered to delete Name"')),s.a.createElement("textarea",{value:this.state.inputValue,style:{width:"25%",height:"50px"},onKeyDown:this.inputKeyDownHandler,onKeyPress:this.inputKeyPressHandler}),s.a.createElement("div",{className:"MonthSwitcher"},s.a.createElement("div",{className:"increment button",onClick:this.incrementMonth},"+"),s.a.createElement("div",null,p()("".concat(12===this.state.month?1:this.state.month+1,"-").concat(this.state.year),"MM-YYYY").format("MMMM")," ",this.state.year),s.a.createElement("div",{className:"decrement button",onClick:this.decrementMonth},"-"))),s.a.createElement(f,{eventsList:this.state.eventsList,month:this.state.month-1,year:this.state.year,getNow:this.getNow,onSelecting:this.onSelecting}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.9793eaef.chunk.js.map