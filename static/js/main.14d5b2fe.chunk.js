(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),l=n.n(i),s=(n(13),n(1)),c=n(2),r=n(4),m=n(3),u=n(5),h=function(e){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-1 col-xs-offset-11"},o.a.createElement("h1",null,e.homeLink))))},d=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(m.a)(t).call(this,e))).state={age:e.initialAge,status:0,homeLink:e.initialName},setTimeout(function(){n.setState({status:1})},3e3),console.log("constructor"),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onMakeOlder",value:function(){this.setState({age:this.state.age+3})}},{key:"handleGreet",value:function(){this.props.greet(this.state.age)}},{key:"onChangeLink",value:function(){this.props.changeLink(this.state.homeLink)}},{key:"onHandleChange",value:function(e){this.setState({homeLink:e.target.value})}},{key:"componentWillMount",value:function(){console.log("1.Component will mount")}},{key:"componentDidMount",value:function(){console.log("2.Component did mount")}},{key:"componentWillReceiveProps",value:function(e){console.log("3.Component will update",e)}},{key:"shouldComponentUpdate",value:function(e,t){return console.log("4.Component should update",e,t),1!==t.status}},{key:"componentWillUpdate",value:function(e,t){console.log("5.Component will update",e,t)}},{key:"componentDidUpdate",value:function(e,t){console.log("6.Component did update",e,t)}},{key:"componentWillUnmount",value:function(){console.log("7.Component did Unmount")}},{key:"render",value:function(){var e=this;return console.log("render"),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-1 col-xs-offset-11"},o.a.createElement("div",null,"Your name is ",this.props.name,",your age is ",this.state.age),o.a.createElement("p",null,this.state.status),o.a.createElement("button",{onClick:this.onMakeOlder.bind(this),className:"btn btn-primary"},"Make me older"),o.a.createElement("hr",null),o.a.createElement("button",{onClick:this.handleGreet.bind(this),className:"btn btn-primary"},"Greet"),o.a.createElement("hr",null),o.a.createElement("input",{type:"text",defaultValue:this.props.initialName,value:this.state.initialName,onChange:function(t){return e.onHandleChange(t)}}),o.a.createElement("button",{onClick:this.onChangeLink.bind(this),className:"btn btn-primary"},"Changed Header Link"))))}}]),t}(a.Component),p=(n(15),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(r.a)(this,Object(m.a)(t).call(this))).state={homeLink:"Home",homeMounted:!0},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onGreet",value:function(e){alert(e)}},{key:"onChangeLinkName",value:function(e){this.setState({homeLink:e})}},{key:"onChangeHomeMounted",value:function(){this.setState({homeMounted:!this.state.homeMounted})}},{key:"render",value:function(){var e="";return this.state.homeMounted&&(e=o.a.createElement(d,{name:"Max",initialAge:12,user:{name:"Anna",hobbies:["Sports","Reading"]},greet:this.onGreet,changeLink:this.onChangeLinkName.bind(this),initialName:this.state.homeLink})),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-1 col-xs-offset-11"},o.a.createElement(h,{homeLink:this.state.homeLink}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-1 col-xs-offset-11"},o.a.createElement("h1",null,"Hello!!"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-1 col-xs-offset-11"},e)),o.a.createElement("hr",null),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-xs-1 col-xs-offset-11"},o.a.createElement("button",{onClick:this.onChangeHomeMounted.bind(this),className:"btn btn-primary"},"(Un)mount Home Component"))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,n){e.exports=n(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.14d5b2fe.chunk.js.map