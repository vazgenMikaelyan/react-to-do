(this["webpackJsonpreact-to-do"]=this["webpackJsonpreact-to-do"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),r=a.n(c),i=a(1),s=a(2),o=a(4),d=a(3),u=a(5),h=a(6),m={checked:l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},l.a.createElement("path",{fill:"#5ab87d",d:"M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z"})),unChecked:l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},l.a.createElement("path",{fill:"#d3dae0",d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h352c8.8 0 16 7.2 16 16v352z"})),pencil:l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l.a.createElement("path",{fill:"#d3dae0",d:"M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zm-95.196 140.45L174 420.745V386h-48v-48H91.255l224.059-224.059 82.745 82.745zM126.147 468.598l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"})),trash:l.a.createElement("svg",{fill:"none",stroke:"#d3dae0",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("polyline",{points:"3 6 5 6 21 6"}),l.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}),l.a.createElement("line",{x1:"10",x2:"10",y1:"11",y2:"17"}),l.a.createElement("line",{x1:"14",x2:"14",y1:"11",y2:"17"}))},p=(a(14),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("span",{className:"icon-block",onClick:this.props.onClick},m[this.props.type])}}]),t}(l.a.Component));p.defaultProps={type:"unChecked",onClick:function(){}};var b=p,v=(a(15),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("form",{className:"form",onSubmit:this.props.onSave},l.a.createElement("div",{className:"form-prepend"},l.a.createElement(b,{type:"pencil"})),l.a.createElement("input",{type:"text",name:"addTodo",placeholder:"What needs to be accomplished"}))}}]),t}(l.a.PureComponent)),f=(a(16),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(l)))).handleSelect=function(e){a.props.onSelect(e)},a.handleDelete=function(e){a.props.onDelete(e)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("ul",{className:"todo-list"},this.props.items.map((function(t,a){var n=t.seleced?"checked":"unChecked";return l.a.createElement("li",{className:"todo-list-item",key:a},l.a.createElement(b,{type:n,onClick:e.handleSelect.bind(e,t.id)}),l.a.createElement("div",{className:"item-lable ".concat(t.seleced?"selected":"")},t.label),l.a.createElement(b,{type:"trash",onClick:e.handleDelete.bind(e,t.id)}))})))}}]),t}(l.a.PureComponent)),j=(a(17),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"block-clear"},l.a.createElement("span",{className:"button-clear",onClick:this.props.onClick},l.a.createElement(b,{type:"trash"}),"Clear All"))}}]),t}(l.a.PureComponent)),k={items:[{id:81632937,label:"Get up early",seleced:!0},{id:425132549,label:"do some meditation",seleced:!0},{id:632979655,label:"eat a healthy breakfast",seleced:!1},{id:95140890,label:"drink plenty of water",seleced:!1},{id:951114890,label:"exercise",seleced:!1},{id:32156454216,label:"have fun",seleced:!1}]},O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state=k,a.handleSave=a.handleSave.bind(Object(h.a)(a)),a.handleClear=a.handleClear.bind(Object(h.a)(a)),a.handleSelect=a.handleSelect.bind(Object(h.a)(a)),a.handleDelete=a.handleDelete.bind(Object(h.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleSave",value:function(e){e.preventDefault();var t=e.target.addTodo;if(t.value!==t.defaultValue){var a={id:Date.now(),label:t.value,seleced:!1};t.value=t.defaultValue,this.setState((function(e){return{items:e.items.concat(a)}}))}}},{key:"handleClear",value:function(){var e=this.state.items.map((function(e,t){return e.seleced=!1,e}));this.setState({items:e})}},{key:"handleSelect",value:function(e){var t=this.state.items.map((function(t,a){return e===t.id&&(t.seleced=!t.seleced),t}));this.setState({items:t})}},{key:"handleDelete",value:function(e){var t=this.state.items.filter((function(t,a){return e!==t.id}));this.setState({items:t})}},{key:"render",value:function(){var e={items:this.state.items,onDelete:this.handleDelete,onSelect:this.handleSelect};return l.a.createElement(l.a.Fragment,null,l.a.createElement(v,{onSave:this.handleSave}),l.a.createElement(f,e),l.a.createElement(j,{onClick:this.handleClear}))}}]),t}(l.a.PureComponent),y=(a(18),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("header",{className:"header"},"react to do"),l.a.createElement(O,null))}}]),t}(l.a.Component));r.a.render(l.a.createElement(y,null),document.getElementById("app-root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.fec4f890.chunk.js.map