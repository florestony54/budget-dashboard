(this.webpackJsonpdash=this.webpackJsonpdash||[]).push([[0],{164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},169:function(e,t,a){"use strict";a.r(t);for(var n=a(0),r=a.n(n),o=a(55),i=a.n(o),s=(a(65),a(66),a(67),a(2)),c=a(3),l=a(4),d=a(5),u=(a(68),a(6)),p=a(57),h=a(12),b=(a(164),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={icon:null},n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){switch(this.props.icon){case 0:this.setState({icon:h.d});break;case 1:this.setState({icon:h.c});break;case 2:this.setState({icon:h.e});break;case 3:this.setState({icon:h.b});break;case 4:this.setState({icon:h.a});break;case 5:this.setState({icon:null})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"card bg-success col-3",id:"icon-card"},r.a.createElement(p.a,{icon:this.state.icon,size:"2x"}))}}]),a}(r.a.Component)),m=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={data:{one:{labels:["2/1","2/2","2/3","2/4","2/5","2/6","2/7","2/8"],datasets:[{label:"Funds ($)",backgroundColor:"rgba(135, 15, 255, 0.2)",borderColor:"rgba(135, 15, 255, 1)",borderWidth:2,data:[1185,1040,995,965,1450,1370,1370,1295]}],options:{title:{display:!0,text:"Total Available Funds",fontSize:20,fontColor:"white"},legend:{labels:{fontColor:"white"},display:!1,position:"right"}}},two:{labels:["2/1","2/2","2/3","2/4","2/5","2/6","2/7","2/8"],datasets:[{label:"Savings ($)",backgroundColor:"rgb(82, 248, 91, 0.2)",borderColor:"rgb(82, 248, 91, 1)",borderWidth:2,data:[500,600,700,950,950,1250,1250,1500]}],options:{title:{display:!0,text:"Total Savings",fontSize:20,fontColor:"white"},legend:{labels:{fontColor:"white"},display:!1,position:"right"}}}}},n.dataset=[],n.options=null,n}return Object(c.a)(a,[{key:"componentWillMount",value:function(){"one"===this.props.dataset?(this.dataset=this.state.data.one,this.options=this.state.data.one.options):"two"===this.props.dataset&&(this.dataset=this.state.data.two,this.options=this.state.data.two.options)}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e;return e=null==this.props.icon?null:r.a.createElement(b,{icon:this.props.icon}),r.a.createElement("div",{id:"line-chart"},e,r.a.createElement(u.c,{data:this.dataset,options:this.options}))}}]),a}(r.a.Component),v=(r.a.Component,function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={data:{labels:["One","Two","Three","Four"],datasets:[{data:[205,50,65,115],backgroundColor:["rgba(92, 38, 134, 1)","#36A2EB","#FFCE56","rgba(255,22,144,1)"],hoverBackgroundColor:["rgba(92, 38, 134, 1)","#36A2EB","#FFCE56","rgba(255,22,144,1)"]}]}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{id:"pie-chart"},r.a.createElement(u.d,{data:this.state.data,options:this.state.options}))}}]),a}(r.a.Component)),f=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={data:{labels:["Scatter"],datasets:[{label:"My First dataset",fill:!1,backgroundColor:"rgba(75,192,192,0.4)",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[{x:65,y:75},{x:59,y:49},{x:80,y:90},{x:81,y:29},{x:56,y:36},{x:55,y:25},{x:40,y:18}]}]}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{id:"scatter"},r.a.createElement(u.f,{data:this.state.data,options:this.state.options}))}}]),a}(r.a.Component),E=(a(53),a(165),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){var e,t=this.props.type;return"savings"===t?e="Projected Year-End Savings ($)":"dueDate"===t&&(e="Days Until Credit Card Payment:"),r.a.createElement("div",null,r.a.createElement(b,{icon:this.props.icon}),r.a.createElement("h5",{id:"num-panel-title"},e),r.a.createElement("h1",{id:"big-number"},this.props.number))}}]),a}(r.a.Component)),g=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,53]}]},options:{title:{display:!0,text:"Monthly Expenditures",fontSize:20,fontColor:"white"},legend:{labels:{fontColor:"white"},display:!1,position:"right"}}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{id:"radar-chart"},r.a.createElement(b,{icon:this.props.icon}),r.a.createElement(u.a,{data:this.state.data,options:this.state.options}))}}]),a}(r.a.Component),y=[],k=0;k<6;k++)y.push(Math.floor(1e3*Math.random())+1);var C=y,j=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={data:{labels:["Entertainment","Shopping","Groceries","Bills","Rent","Fast Food"],datasets:[{data:C,backgroundColor:["rgba(92, 38, 134, 1)","#36A2EB","#FFCE56","rgba(255,22,144,1)","red","#0D0221"],hoverBackgroundColor:["rgba(92, 38, 134, 1)","#36A2EB","#FFCE56","rgba(255,22,144,1)","red","#0D0221"]}]},options:{title:{display:!0,text:n.props.title,fontSize:20,fontColor:"white"},legend:{position:"right",labels:{fontColor:"white"}}}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{id:"donut-chart"},r.a.createElement(u.b,{data:this.state.data,options:this.state.options}))}}]),a}(r.a.Component),O=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={chart:null},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){switch(this.props.type){case"line":this.setState({chart:r.a.createElement(m,{dataset:this.props.dataset,icon:this.props.icon})});break;case"radar":this.setState({chart:r.a.createElement(E,{number:this.props.number,icon:this.props.icon,type:this.props.numType})});break;case"pie":this.setState({chart:r.a.createElement(v,{icon:this.props.icon})});break;case"bar":this.setState({chart:r.a.createElement(g,{icon:this.props.icon})});break;case"scatter":this.setState({chart:r.a.createElement(f,{icon:this.props.icon})});break;case"number":this.setState({chart:r.a.createElement(E,{number:this.props.number,icon:this.props.icon,type:this.props.numType})});break;case"doughnut":this.setState({chart:r.a.createElement(j,{number:this.props.number,icon:this.props.icon,title:this.props.title})})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text"},this.state.chart)))}}]),a}(r.a.Component),w=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Total Savings:"),r.a.createElement("h1",{id:"big-number"},"$",this.props.number," ",r.a.createElement("span",{style:{color:"gray"}},"/$5500")," "),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated bg-success",role:"progressbar",style:{width:parseInt(this.props.number)/5500*100+"%"}})))}}]),a}(r.a.Component),S=(a(166),function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-panel"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"col-sm"},r.a.createElement(w,{number:"1500"})),r.a.createElement("div",{className:"row",id:"big-panels"},r.a.createElement("div",{className:"col-md big-panel"},r.a.createElement(O,{title:"Spending Breakdown",type:"doughnut"})),r.a.createElement("div",{className:"col-md big-panel"},r.a.createElement(O,{type:"line",dataset:"two"}))),r.a.createElement("div",{className:"row",id:"small-panels"},r.a.createElement("div",{className:"col-md"},r.a.createElement(O,{type:"line",icon:0,dataset:"one"})),r.a.createElement("div",{className:"col-md"},r.a.createElement(O,{type:"number",number:3800,icon:4,numType:"savings"})),r.a.createElement("div",{className:"col-md"},r.a.createElement(O,{type:"number",number:5,icon:2,numType:"dueDate"})),r.a.createElement("div",{className:"col-md"},r.a.createElement(O,{type:"bar",icon:1})))))}}]),a}(r.a.Component));var B=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=a(32);i.a.render(r.a.createElement(N.a,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},53:function(e,t,a){},60:function(e,t,a){e.exports=a(169)},65:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.4b1cd661.chunk.js.map