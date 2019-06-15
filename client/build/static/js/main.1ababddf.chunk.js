(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(64)},39:function(e,t,a){},40:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),o=a.n(l),i=(a(39),a(8)),s=a(9),c=a(11),u=a(10),m=a(12),h=a(15),d=a(6),f=(a(40),a(31));var E=function(e){return r.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var v=function(e){return r.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)};var p=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return r.a.createElement("div",{className:t},e.children)};var g=function(e){return r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,e.heading)),r.a.createElement("div",{className:"card-body"},e.children))};var b=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search:"),r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For a Book",id:"search"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary"},"Search")))};var k=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"Title: ",e.title1),r.a.createElement("h3",null,"Author(s): ",e.authors1),r.a.createElement("img",{alt:e.title1,className:"img-fluid",src:e.src1,style:{margin:"0 auto"}}),r.a.createElement("p",null," ",e.description1," "),r.a.createElement("a",{href:"{props.link1}"},"Get more Information")),r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"Title: ",e.title2),r.a.createElement("h3",null,"Author(s): ",e.authors2),r.a.createElement("img",{alt:e.title2,className:"img-fluid",src:e.src2,style:{margin:"0 auto"}}),r.a.createElement("p",null," ",e.description2," "),r.a.createElement("a",{href:"{props.link2}"},"Get more Information")),r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"Title: ",e.title3),r.a.createElement("h3",null,"Author(s): ",e.authors),r.a.createElement("img",{alt:e.title3,className:"img-fluid",src:e.src3,style:{margin:"0 auto"}}),r.a.createElement("p",null," ",e.description3," "),r.a.createElement("a",{href:"{props.link3}"},"Get more Information")),r.a.createElement("div",{className:"text-center"},r.a.createElement("h2",null,"Title: ",e.title4),r.a.createElement("h3",null,"Author(s): ",e.authors4),r.a.createElement("img",{alt:e.title4,className:"img-fluid",src:e.src4,style:{margin:"0 auto"}}),r.a.createElement("p",null," ",e.description4," "),r.a.createElement("a",{href:"{props.link4}"},"Get more Information")))},I=a(7),N=a.n(I),y=Object({NODE_ENV:"production",PUBLIC_URL:""}).API_KEY,j={search:function(e){return N.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+y)},google:function(e){return N.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&projection=lite&maxResults=5")},getBooks:function(){return N.a.get("/api/books")},getBook:function(e){return N.a.get("/api/books/"+e)},deleteBook:function(e){return N.a.delete("/api/books/"+e)},saveBook:function(e){return N.a.post("/api/books",e)}},B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={result:[],search:""},a.searchBooks=function(e){j.search(e).then(function(e){return a.setState({result:e.data},console.log(e.data))}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(f.a)({},n,t))},a.handleFormSubmit=function(e){e.preventDefault(),a.searchBooks(a.state.search)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.searchBooks("JavaScript")}},{key:"render",value:function(){return r.a.createElement(E,null,r.a.createElement(v,null,r.a.createElement(p,{size:"md-4"},r.a.createElement(g,{heading:"Search"},r.a.createElement(b,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}))),r.a.createElement(p,{size:"md-8"},r.a.createElement(g,{heading:this.state.search||"Search for a Book"},this.state.result.items?r.a.createElement(k,{title1:this.state.result.items[1].volumeInfo.title,src1:this.state.result.items[1].volumeInfo.imageLinks.thumbnail,authors1:this.state.result.items[1].volumeInfo.authors,description1:this.state.result.items[1].volumeInfo.description,link1:this.state.result.items[1].volumeInfo.infoLink,title2:this.state.result.items[2].volumeInfo.title,src2:this.state.result.items[2].volumeInfo.imageLinks.thumbnail,authors2:this.state.result.items[2].volumeInfo.authors,description2:this.state.result.items[2].volumeInfo.description,link2:this.state.result.items[2].volumeInfo.infoLink,title3:this.state.result.items[3].volumeInfo.title,src3:this.state.result.items[3].volumeInfo.imageLinks.thumbnail,authors3:this.state.result.items[3].volumeInfo.authors,description3:this.state.result.items[3].volumeInfo.description,link3:this.state.result.items[3].volumeInfo.infoLink,title4:this.state.result.items[4].volumeInfo.title,src4:this.state.result.items[4].volumeInfo.imageLinks.thumbnail,authors4:this.state.result.items[4].volumeInfo.authors,description4:this.state.result.items[4].volumeInfo.description,link4:this.state.result.items[4].volumeInfo.infoLink}):r.a.createElement("h3",null,"Search for books!")))))}}]),t}(n.Component);var O=function(){return r.a.createElement(B,null)};var S=function(e){var t=e.children;return r.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},t)};a(58);var w=function(e){return r.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};function x(e){var t=e.size,a=e.children;return r.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}function C(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function L(e){var t=e.fluid,a=e.children;return r.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}a(59);function A(e){var t=e.children;return r.a.createElement("div",{className:"list-overflow-container"},r.a.createElement("ul",{className:"list-group"},t))}function F(e){var t=e.children;return r.a.createElement("li",{className:"list-group-item"},t)}var G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={books:[],title:"",authors:"",description:"",image:"",link:""},a.loadBooks=function(){j.getBooks().then(function(e){return a.setState({books:e.data,title:"",authors:"",description:"",image:"",link:""})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){j.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){var e=this;return r.a.createElement(C,{fluid:!0},r.a.createElement(L,null,r.a.createElement(x,{size:"md-12 sm-12"},r.a.createElement(S,null,r.a.createElement("h1",null,"Books On My List")),this.state.books.length?r.a.createElement(A,null,this.state.books.map(function(t){return r.a.createElement(F,{key:t._id},r.a.createElement("strong",null,t.title," by ",t.authors),r.a.createElement("p",null,t.description),r.a.createElement("p",null,t.image),r.a.createElement("p",null,t.link),r.a.createElement(w,{onClick:function(){return e.deleteBook(t._id)}}))})):r.a.createElement("h3",null,"There are no saved books yet."))))}}]),t}(n.Component);var T=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Books on Google Api"))},z=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(T,null),r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(h.b,{to:"/"},"GoogleBooks")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/Search"},"Search")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/Saved"},"Saved"))),r.a.createElement("hr",null),r.a.createElement(d.a,{exact:!0,path:"/",component:O}),r.a.createElement(d.a,{path:"/saved",component:G}),r.a.createElement(d.a,{path:"/search",component:O})))}}]),t}(n.Component);o.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.1ababddf.chunk.js.map