(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return i}));var r=n(129),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"008664cb-23c6-4b8d-9012-5ff37a31af39"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),o.getProfile(e)}},o={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},s={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},131:function(e,t,n){e.exports={preloader:"preloader_preloader__BOwYE"}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(3),a=n(26),c=n(27),o=n(29),s=n(28),i=n(0),u=n.n(i),l=n(12),d=n(9),f=n(1),j=function(e){return{isAuth:e.auth.isAuth}},p=function(e){var t=function(t){Object(o.a)(i,t);var n=Object(s.a)(i);function i(){return Object(a.a)(this,i),n.apply(this,arguments)}return Object(c.a)(i,[{key:"render",value:function(){return this.props.isAuth?Object(f.jsx)(e,Object(r.a)({},this.props)):Object(f.jsx)(d.a,{to:"/login"})}}]),i}(u.a.Component);return Object(l.b)(j)(t)}},15:function(e,t,n){e.exports={nav:"Nav_nav__3dC0x",item:"Nav_item__2PRDz",active:"Nav_active__pcpKv",itemButton:"Nav_itemButton__1-S3H",login:"Nav_login__25HI3",header:"Nav_header__2mblf"}},165:function(e,t,n){},166:function(e,t,n){},23:function(e,t,n){e.exports={userPhoto:"users_userPhoto__TfFrf",home:"users_home__15FJj",userProfile:"users_userProfile__3yWfo",followUnfollow:"users_followUnfollow__11Nbq",button:"users_button__26geI",text:"users_text__1COFn"}},290:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,297)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},a=n(0),c=n.n(a),o=n(65),s=n.n(o),i=(n(165),n(26)),u=n(27),l=n(29),d=n(28),f=(n(166),n(9)),j=n(12),p=n(8),b=n.n(p),h=n(14),O=n(40),g=n(3),m=n(11),v=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(g.a)(Object(g.a)({},e),{},{newObjProps:r}):e}))},x="FOLLOW",_="UNFOLLOW",w="SET_USERS",P="SET_CURRENT_PAGE",S="SET_TOTAL_USERS_COUNT",y="TOGGLE_IS_FETCHING",C="TOGGLE_IS_FOLLOWING_PROGRESS",N={users:[],pageSize:1,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},E=function(e){return{type:x,userId:e}},k=function(e){return{type:_,userId:e}},U=function(e){return{type:P,currentPage:e}},I=function(e){return{type:y,isFetching:e}},A=function(e,t){return{type:C,isFetching:e,userId:t}},T=function(){var e=Object(h.a)(b.a.mark((function e(t,n,r,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(A(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(A(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(g.a)(Object(g.a)({},e),{},{users:v(e.users,t.userId,"id",{followed:!0})});case _:return Object(g.a)(Object(g.a)({},e),{},{users:v(e.users,t.userId,"id",{followed:!1})});case w:return Object(g.a)(Object(g.a)({},e),{},{users:t.users});case P:return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case S:return Object(g.a)(Object(g.a)({},e),{},{totalUsersCount:t.count});case y:return Object(g.a)(Object(g.a)({},e),{},{isFetching:t.isFetching});case C:return Object(g.a)(Object(g.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(O.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},L=n(56),z=n(23),D=n.n(z),M=n(74),R=n(69),G=n(97),B=n(45),H=n.n(B),W=n(130),J=n.n(W),Y=n(1),q=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,c=e.onPageChanged,o=e.portionSize,s=void 0===o?3:o,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var d=Math.ceil(i/s),f=Object(a.useState)(1),j=Object(G.a)(f,2),p=j[0],b=j[1],h=(p-1)*s+1,O=p*s;return Object(Y.jsxs)("div",{className:H.a.paginator,children:[p>1&&Object(Y.jsx)("button",{onClick:function(){b(p-1)},className:H.a.back,children:"Back"}),u.filter((function(e){return e>=h&&e<=O})).map((function(e){return Object(Y.jsx)("span",{className:J()(Object(R.a)({},H.a.selectedPage,r===e),H.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),d>p&&Object(Y.jsx)("button",{onClick:function(){b(p+1)},className:H.a.next,children:"Next"})]})},K=n(17),X=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(Y.jsx)("div",{className:D.a.home,children:Object(Y.jsx)("span",{children:Object(Y.jsxs)("div",{className:D.a.userProfile,children:[Object(Y.jsx)(K.b,{to:"/profile/"+t.id,children:Object(Y.jsx)("img",{src:null!=t.photos.small?t.photos.small:M.a,className:D.a.userPhoto})}),Object(Y.jsx)("span",{children:Object(Y.jsxs)("div",{className:D.a.text,children:[Object(Y.jsx)("div",{children:t.name}),Object(Y.jsx)("div",{children:t.status})]})}),Object(Y.jsx)("div",{className:D.a.followUnfollow,children:t.followed?Object(Y.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},className:D.a.button,children:"Unfollow"}):Object(Y.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},className:D.a.button,children:"Follow"})})]})})})},V=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,c=e.users,o=Object(L.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(Y.jsx)("div",{children:Object(Y.jsxs)("div",{children:[c.map((function(e){return Object(Y.jsx)(X,{user:e,followingInProgress:o.followingInProgress,unfollow:o.unfollow,follow:o.follow},e.id)})),Object(Y.jsx)(q,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r})]})})},Q=n(41),Z=n(10),$=(n(135),n(132)),ee=Object($.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),te=function(e){return e.usersPage.pageSize},ne=function(e){return e.usersPage.totalUsersCount},re=function(e){return e.usersPage.currentPage},ae=function(e){return e.usersPage.isFetching},ce=function(e){return e.usersPage.followingInProgress},oe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(Y.jsxs)(Y.Fragment,{children:[this.props.isFetching?Object(Y.jsx)(Q.a,{}):null,Object(Y.jsx)(V,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),se=Object(Z.d)(Object(j.b)((function(e){return{users:ee(e),pageSize:te(e),totalUsersCount:ne(e),currentPage:re(e),isFetching:ae(e),followingInProgress:ce(e)}}),{follow:function(e){return function(){var t=Object(h.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:T(n,e,m.d.follow.bind(m.d),E);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(h.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:T(n,e,m.d.unfollow.bind(m.d),k);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:U,toggleFollowingProgress:A,getUsers:function(e,t){return function(){var n=Object(h.a)(b.a.mark((function n(r){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(I(!0)),r(U(e)),n.next=4,m.d.getUsers(e,t);case 4:a=n.sent,r(I(!1)),r((o=a.items,{type:w,users:o})),r((c=a.totalCount,{type:S,count:c}));case 8:case"end":return n.stop()}var c,o}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(oe),ie=n(32),ue="web-sovellus/auth/SET_USER_DATA",le="web-sovellus/auth/GET_CAPTCHA_URL_SUCCESS",de={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},fe=function(e,t,n,r){return{type:ue,payload:{userId:e,email:t,login:n,isAuth:r}}},je=function(e){return{type:le,payload:{captchaUrl:e}}},pe=function(){return function(){var e=Object(h.a)(b.a.mark((function e(t){var n,r,a,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.email,o=r.login,t(fe(a,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},be=function(){return function(){var e=Object(h.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(je(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:case le:return Object(g.a)(Object(g.a)({},e),t.payload);default:return e}},Oe=n(15),ge=n.n(Oe),me=n.p+"static/media/logo.549f01d3.png",ve=function(e){return Object(Y.jsxs)("nav",{className:ge.a.nav,children:[Object(Y.jsx)("div",{className:ge.a.header,children:Object(Y.jsx)("img",{src:me})}),Object(Y.jsx)("div",{className:ge.a.item,children:Object(Y.jsx)(K.b,{to:"/profile",activeClassName:ge.a.active,children:"Profile"})}),Object(Y.jsx)("div",{className:ge.a.item,children:Object(Y.jsx)(K.b,{to:"/dialogs",activeClassName:ge.a.active,children:"Messages"})}),Object(Y.jsx)("div",{className:ge.a.item,children:Object(Y.jsx)(K.b,{to:"/users",activeClassName:ge.a.active,children:"Users"})}),Object(Y.jsx)("div",{className:ge.a.item,children:Object(Y.jsx)("a",{children:"News"})}),Object(Y.jsx)("div",{className:ge.a.item,children:Object(Y.jsx)("a",{children:"Music"})}),Object(Y.jsx)("div",{className:ge.a.item,children:Object(Y.jsx)("a",{children:"Settings"})}),Object(Y.jsx)("div",{className:ge.a.itemButton,children:e.isAuth?Object(Y.jsxs)("div",{children:[e.login," - ",Object(Y.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(Y.jsx)(K.b,{to:"/login",className:ge.a.login,children:"Sign In"})})]})},xe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(Y.jsx)(ve,Object(g.a)({},this.props))}}]),n}(c.a.Component),_e=Object(j.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.logout();case 2:0===e.sent.data.resultCode&&t(fe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(xe),we=n(89),Pe=n(127),Se=n(39),ye=n(66),Ce=n(36),Ne=n.n(Ce),Ee=n(49),ke=n.n(Ee),Ue=Object(Pe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(Y.jsxs)("form",{onSubmit:t,className:Ne.a.formCard,children:[Object(Y.jsx)("div",{children:Object(Y.jsx)(we.a,{className:Ne.a.email,placeholder:"Email",name:"email",component:Se.a,validate:[ye.b]})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(we.a,{className:Ne.a.email,placeholder:"Password",name:"password",type:"password",component:Se.a,validate:[ye.b]})}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)(we.a,{component:Se.a,name:"rememberMe",type:"checkbox"})," ",Object(Y.jsx)("h3",{children:"remember me"})]}),r&&Object(Y.jsx)("img",{src:r}),r&&Object(Se.c)("Symbols from image","captcha",[ye.b],Se.a,{}),n&&Object(Y.jsx)("div",{className:ke.a.formSummaryError,children:n}),Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{children:"Sign in"})})]})})),Ie=Object(j.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(h.a)(b.a.mark((function a(c){var o,s;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.a.login(e,t,n,r);case 2:0===(o=a.sent).data.resultCode?c(pe()):(10===o.data.resultCode&&c(be()),s=o.data.messages.length>0?o.data.messages[0]:"Some error",c(Object(ie.a)("login",{_error:s})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(Y.jsx)(f.a,{to:"/profile"}):Object(Y.jsx)("div",{className:Ne.a.formBack,children:Object(Y.jsxs)("div",{className:Ne.a.form,children:[Object(Y.jsx)("div",{className:Ne.a.img,children:Object(Y.jsx)("img",{src:me})}),Object(Y.jsx)("h1",{children:"Sign in."}),Object(Y.jsx)(Ue,{onSubmit:function(t){e.login(t.email,t.password,t.rememnerMe,t.captcha)},captchaUrl:e.captchaUrl})]})})})),Ae="INITIALIZED_SUCCESS",Te={initialized:!1,globalError:null},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ae:return Object(g.a)(Object(g.a)({},e),{},{initialized:!0});default:return e}},Le=n(95),ze=n(96),De={},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De;return e},Re=n(134),Ge=n(128),Be=Object(Z.c)({profilePage:Le.b,dialogsPage:ze.a,sidebar:Me,usersPage:F,auth:he,form:Ge.a,app:Fe}),He=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,We=Object(Z.e)(Be,He(Object(Z.a)(Re.a)));window.__store__=We;var Je=We,Ye=function(e){return function(t){return Object(Y.jsx)(a.Suspense,{fallback:Object(Y.jsx)(Q.a,{}),children:Object(Y.jsx)(e,Object(g.a)({},t))})}},qe=c.a.lazy((function(){return n.e(4).then(n.bind(null,299))})),Ke=c.a.lazy((function(){return n.e(3).then(n.bind(null,298))})),Xe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e,t){alert("Some error occured"),console.error(PromiseRejectionEvent)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(Y.jsxs)("div",{className:"app-wrapper",children:[Object(Y.jsx)(_e,{}),Object(Y.jsx)("div",{className:"app-wrapper-content",children:Object(Y.jsxs)(f.d,{children:[Object(Y.jsx)(f.b,{exact:!0,path:"/",render:function(){return Object(Y.jsx)(f.a,{to:"/profile"})}}),Object(Y.jsx)(f.b,{path:"/dialogs",render:Ye(qe)}),Object(Y.jsx)(f.b,{path:"/profile/:userId?",render:Ye(Ke)}),Object(Y.jsx)(f.b,{path:"/users",render:function(){return Object(Y.jsx)(se,{})}}),Object(Y.jsx)(f.b,{path:"/login",render:function(){return Object(Y.jsx)(Ie,{})}}),Object(Y.jsx)(f.b,{path:"*",render:function(){return Object(Y.jsx)("div",{children:"404 NOT FOUND"})}})]})})]}):Object(Y.jsx)(Q.a,{})}}]),n}(a.Component),Ve=Object(Z.d)(f.g,Object(j.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(pe());Promise.all([t]).then((function(){e({type:Ae})}))}}}))(Xe),Qe=function(e){return Object(Y.jsx)(K.a,{children:Object(Y.jsx)(j.a,{store:Je,children:Object(Y.jsx)(Ve,{})})})};s.a.render(Object(Y.jsx)(Qe,{}),document.getElementById("root")),r()},36:function(e,t,n){e.exports={formBack:"Login_formBack__1ijlY",form:"Login_form__1Ao0R",img:"Login_img__1Uzq-",formCard:"Login_formCard__tsSAW",email:"Login_email__39LaY"}},39:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(3),a=n(56),c=(n(0),n(89)),o=n(49),s=n.n(o),i=n(1),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(c?s.a.error:" "),children:[Object(i.jsx)("div",{children:a}),c&&Object(i.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(i.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e,t,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(c.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},o))," ",s]})}},41:function(e,t,n){"use strict";var r=n.p+"static/media/loader_backinout.3e17615e.gif",a=n(131),c=n.n(a),o=n(1);t.a=function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:r,className:c.a.preloader})})}},45:function(e,t,n){e.exports={paginator:"Paginator_paginator__2h2AG",pageNumber:"Paginator_pageNumber__zj9Gk",selectedPage:"Paginator_selectedPage__1c_5N",back:"Paginator_back__1gmtv",next:"Paginator_next__1ClYI"}},49:function(e,t,n){e.exports={formControl:"FormControls_formControl__EDQ4Y",error:"FormControls_error__W31wb",formSummaryError:"FormControls_formSummaryError__1NvXo"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max lenght is ".concat(e,"  symbols")}}},74:function(e,t,n){"use strict";t.a=n.p+"static/media/Killjoy.f1d20e3b.png"},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return _}));var r=n(8),a=n.n(r),c=n(14),o=n(40),s=n(3),i=n(32),u=n(11),l="ADD_POST",d="SET_USER_PROFILE",f="SET_STATUS",j="DELETE_POST",p="SAVE_PHOTO_SUCCESS",b={posts:[{id:1,message:"Hi, how are you?",like:12},{id:2,message:"It's my first post",like:15}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},O=function(e){return{type:f,status:e}},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.d.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(O(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(O(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:p,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,u.b.savePhoto(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}n(g(c)),t.next=10;break;case 8:return n(Object(i.a)("edit-profile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,like:0};return Object(s.a)(Object(s.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case d:return Object(s.a)(Object(s.a)({},e),{},{profile:t.profile});case f:return Object(s.a)(Object(s.a)({},e),{},{status:t.status});case j:return Object(s.a)(Object(s.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.id}))});case p:return Object(s.a)(Object(s.a)({},e),{},{profile:Object(s.a)(Object(s.a)({},e.profile),{},{photos:t.photos})});default:return e}}},96:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(40),a=n(3),c="SEND-MESSAGE",o={dialogs:[{id:1,name:"Jenifer"},{id:2,name:"James"},{id:3,name:"Leo"},{id:4,name:"Amili"}],messages:[{id:2,message:"Hi, Jenifer!"},{id:2,message:"How are you?"},{id:2,message:"Would you like to meet today?"}]},s=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:5,message:n}])});default:return e}}}},[[290,1,2]]]);
//# sourceMappingURL=main.c483f250.chunk.js.map