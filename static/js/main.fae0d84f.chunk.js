(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o}));var r=n(129),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"008664cb-23c6-4b8d-9012-5ff37a31af39"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},131:function(e,t,n){e.exports={preloader:"preloader_preloader__BOwYE"}},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(4),a=n(26),s=n(27),c=n(29),o=n(28),i=n(0),u=n.n(i),l=n(11),f=n(10),d=n(1),j=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var t=function(t){Object(c.a)(i,t);var n=Object(o.a)(i);function i(){return Object(a.a)(this,i),n.apply(this,arguments)}return Object(s.a)(i,[{key:"render",value:function(){return this.props.isAuth?Object(d.jsx)(e,Object(r.a)({},this.props)):Object(d.jsx)(f.a,{to:"/login"})}}]),i}(u.a.Component);return Object(l.b)(j)(t)}},14:function(e,t,n){e.exports={nav:"Nav_nav__3dC0x",item:"Nav_item__2PRDz",active:"Nav_active__pcpKv",itemButton:"Nav_itemButton__1-S3H",login:"Nav_login__25HI3",header:"Nav_header__2mblf"}},165:function(e,t,n){},166:function(e,t,n){},23:function(e,t,n){e.exports={userPhoto:"users_userPhoto__TfFrf",home:"users_home__15FJj",userProfile:"users_userProfile__3yWfo",followUnfollow:"users_followUnfollow__11Nbq",button:"users_button__26geI",text:"users_text__1COFn"}},290:function(e,t,n){"use strict";n.r(t);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,296)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},a=n(0),s=n.n(a),c=n(63),o=n.n(c),i=(n(165),n(26)),u=n(27),l=n(29),f=n(28),d=(n(166),n(10)),j=n(11),b=n(9),p=n.n(b),h=n(17),g=n(38),O=n(4),m=n(13),v=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(O.a)(Object(O.a)({},e),{},{newObjProps:r}):e}))},x="FOLLOW",_="UNFOLLOW",w="SET_USERS",P="SET_CURRENT_PAGE",S="SET_TOTAL_USERS_COUNT",y="TOGGLE_IS_FETCHING",C="TOGGLE_IS_FOLLOWING_PROGRESS",N={users:[],pageSize:1,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},E=function(e){return{type:x,userId:e}},I=function(e){return{type:_,userId:e}},k=function(e){return{type:P,currentPage:e}},U=function(e){return{type:y,isFetching:e}},A=function(e,t){return{type:C,isFetching:e,userId:t}},T=function(){var e=Object(h.a)(p.a.mark((function e(t,n,r,a){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(A(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(A(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(O.a)(Object(O.a)({},e),{},{users:v(e.users,t.userId,"id",{followed:!0})});case _:return Object(O.a)(Object(O.a)({},e),{},{users:v(e.users,t.userId,"id",{followed:!1})});case w:return Object(O.a)(Object(O.a)({},e),{},{users:t.users});case P:return Object(O.a)(Object(O.a)({},e),{},{currentPage:t.currentPage});case S:return Object(O.a)(Object(O.a)({},e),{},{totalUsersCount:t.count});case y:return Object(O.a)(Object(O.a)({},e),{},{isFetching:t.isFetching});case C:return Object(O.a)(Object(O.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(g.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},z=n(53),L=n(23),M=n.n(L),D=n(73),R=n(67),G=n(127),B=n(69),H=n.n(B),W=n(130),J=n.n(W),Y=n(1),X=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,c=e.portionSize,o=void 0===c?3:c,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var f=Math.ceil(i/o),d=Object(a.useState)(1),j=Object(G.a)(d,2),b=j[0],p=j[1],h=(b-1)*o+1,g=b*o;return Object(Y.jsxs)("div",{className:H.a.paginator,children:[b>1&&Object(Y.jsx)("button",{onClick:function(){p(b-1)},children:"PREV"}),u.filter((function(e){return e>=h&&e<=g})).map((function(e){return Object(Y.jsx)("span",{className:J()(Object(R.a)({},H.a.selectedPage,r===e),H.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),f>b&&Object(Y.jsx)("button",{onClick:function(){p(b+1)},children:"NEXT"})]})},q=n(16),K=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,a=e.follow;return Object(Y.jsx)("div",{className:M.a.home,children:Object(Y.jsx)("span",{children:Object(Y.jsxs)("div",{className:M.a.userProfile,children:[Object(Y.jsx)(q.b,{to:"/profile/"+t.id,children:Object(Y.jsx)("img",{src:null!=t.photos.small?t.photos.small:D.a,className:M.a.userPhoto})}),Object(Y.jsx)("span",{children:Object(Y.jsxs)("div",{className:M.a.text,children:[Object(Y.jsx)("div",{children:t.name}),Object(Y.jsx)("div",{children:t.status})]})}),Object(Y.jsx)("div",{className:M.a.followUnfollow,children:t.followed?Object(Y.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},className:M.a.button,children:"Unfollow"}):Object(Y.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},className:M.a.button,children:"Follow"})})]})})})},V=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,s=e.users,c=Object(z.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(Y.jsxs)("div",{children:[Object(Y.jsx)("div",{children:s.map((function(e){return Object(Y.jsx)(K,{user:e,followingInProgress:c.followingInProgress,unfollow:c.unfollow,follow:c.follow},e.id)}))}),Object(Y.jsx)(X,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r})]})},Q=n(39),Z=n(8),$=(n(135),n(132)),ee=Object($.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),te=function(e){return e.usersPage.pageSize},ne=function(e){return e.usersPage.totalUsersCount},re=function(e){return e.usersPage.currentPage},ae=function(e){return e.usersPage.isFetching},se=function(e){return e.usersPage.followingInProgress},ce=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(Y.jsxs)(Y.Fragment,{children:[this.props.isFetching?Object(Y.jsx)(Q.a,{}):null,Object(Y.jsx)(V,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),oe=Object(Z.d)(Object(j.b)((function(e){return{users:ee(e),pageSize:te(e),totalUsersCount:ne(e),currentPage:re(e),isFetching:ae(e),followingInProgress:se(e)}}),{follow:function(e){return function(){var t=Object(h.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:T(n,e,m.c.follow.bind(m.c),E);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(h.a)(p.a.mark((function t(n){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:T(n,e,m.c.unfollow.bind(m.c),I);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:k,toggleFollowingProgress:A,getUsers:function(e,t){return function(){var n=Object(h.a)(p.a.mark((function n(r){var a;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(U(!0)),r(k(e)),n.next=4,m.c.getUsers(e,t);case 4:a=n.sent,r(U(!1)),r((c=a.items,{type:w,users:c})),r((s=a.totalCount,{type:S,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ce),ie=n(54),ue="web-sovellus/auth/SET_USER_DATA",le={userId:null,email:null,login:null,isAuth:!1},fe=function(e,t,n,r){return{type:ue,payload:{userId:e,email:t,login:n,isAuth:r}}},de=function(){return function(){var e=Object(h.a)(p.a.mark((function e(t){var n,r,a,s,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.email,c=r.login,t(fe(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return Object(O.a)(Object(O.a)({},e),t.payload);default:return e}},be=n(14),pe=n.n(be),he=n.p+"static/media/logo.549f01d3.png",ge=function(e){return Object(Y.jsxs)("nav",{className:pe.a.nav,children:[Object(Y.jsx)("div",{className:pe.a.header,children:Object(Y.jsx)("img",{src:he})}),Object(Y.jsx)("div",{className:pe.a.item,children:Object(Y.jsx)(q.b,{to:"/profile",activeClassName:pe.a.active,children:"Profile"})}),Object(Y.jsx)("div",{className:pe.a.item,children:Object(Y.jsx)(q.b,{to:"/dialogs",activeClassName:pe.a.active,children:"Messages"})}),Object(Y.jsx)("div",{className:pe.a.item,children:Object(Y.jsx)(q.b,{to:"/users",activeClassName:pe.a.active,children:"Users"})}),Object(Y.jsx)("div",{className:pe.a.item,children:Object(Y.jsx)("a",{children:"News"})}),Object(Y.jsx)("div",{className:pe.a.item,children:Object(Y.jsx)("a",{children:"Music"})}),Object(Y.jsx)("div",{className:pe.a.item,children:Object(Y.jsx)("a",{children:"Settings"})}),Object(Y.jsx)("div",{className:pe.a.itemButton,children:e.isAuth?Object(Y.jsxs)("div",{children:[e.login," - ",Object(Y.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(Y.jsx)(q.b,{to:"/login",className:pe.a.login,children:"Sign In"})})]})},Oe=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(Y.jsx)(ge,Object(O.a)({},this.props))}}]),n}(s.a.Component),me=Object(j.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(h.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.logout();case 2:0===e.sent.data.resultCode&&t(fe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Oe),ve=n(125),xe=n(126),_e=n(64),we=n(74),Pe=n(35),Se=n.n(Pe),ye=n(50),Ce=n.n(ye),Ne=Object(xe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(Y.jsxs)("form",{onSubmit:t,className:Se.a.formCard,children:[Object(Y.jsx)("div",{children:Object(Y.jsx)(ve.a,{className:Se.a.email,placeholder:"Email",name:"email",component:_e.a,validate:[we.b]})}),Object(Y.jsx)("div",{children:Object(Y.jsx)(ve.a,{className:Se.a.email,placeholder:"Password",name:"password",type:"password",component:_e.a,validate:[we.b]})}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)(ve.a,{component:_e.a,name:"rememberMe",type:"checkbox"})," ",Object(Y.jsx)("h3",{children:"remember me"})]}),n&&Object(Y.jsx)("div",{className:Ce.a.formSummaryError,children:n}),Object(Y.jsx)("div",{children:Object(Y.jsx)("button",{children:"Sign in"})})]})})),Ee=Object(j.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(h.a)(p.a.mark((function r(a){var s,c;return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(de()):(c=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(ie.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(Y.jsx)(d.a,{to:"/profile"}):Object(Y.jsx)("div",{className:Se.a.formBack,children:Object(Y.jsxs)("div",{className:Se.a.form,children:[Object(Y.jsx)("div",{className:Se.a.img,children:Object(Y.jsx)("img",{src:he})}),Object(Y.jsx)("h1",{children:"Sign in."}),Object(Y.jsx)(Ne,{onSubmit:function(t){e.login(t.email,t.password,t.rememnerMe)}})]})})})),Ie="INITIALIZED_SUCCESS",ke={initialized:!1},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ie:return Object(O.a)(Object(O.a)({},e),{},{initialized:!0});default:return e}},Ae=n(94),Te=n(95),Fe={},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;return e},Le=n(134),Me=n(128),De=Object(Z.c)({profilePage:Ae.b,dialogsPage:Te.a,sidebar:ze,usersPage:F,auth:je,form:Me.a,app:Ue}),Re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Z.d,Ge=Object(Z.e)(De,Re(Object(Z.a)(Le.a)));window.__store__=Ge;var Be=Ge,He=function(e){return function(t){return Object(Y.jsx)(a.Suspense,{fallback:Object(Y.jsx)(Q.a,{}),children:Object(Y.jsx)(e,Object(O.a)({},t))})}},We=s.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),Je=s.a.lazy((function(){return n.e(3).then(n.bind(null,297))})),Ye=function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(Y.jsxs)("div",{className:"app-wrapper",children:[Object(Y.jsx)(me,{}),Object(Y.jsxs)("div",{className:"app-wrapper-content",children:[Object(Y.jsx)(d.b,{path:"/dialogs",render:He(We)}),Object(Y.jsx)(d.b,{path:"/profile/:userId?",render:He(Je)}),Object(Y.jsx)(d.b,{path:"/users",render:function(){return Object(Y.jsx)(oe,{})}}),Object(Y.jsx)(d.b,{path:"/login",render:function(){return Object(Y.jsx)(Ee,{})}})]})]}):Object(Y.jsx)(Q.a,{})}}]),n}(a.Component),Xe=Object(Z.d)(d.f,Object(j.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(de());Promise.all([t]).then((function(){e({type:Ie})}))}}}))(Ye),qe=function(e){return Object(Y.jsx)(q.a,{children:Object(Y.jsx)(j.a,{store:Be,children:Object(Y.jsx)(Xe,{})})})};o.a.render(Object(Y.jsx)(qe,{}),document.getElementById("root")),r()},35:function(e,t,n){e.exports={formBack:"Login_formBack__1ijlY",form:"Login_form__1Ao0R",img:"Login_img__1Uzq-",formCard:"Login_formCard__tsSAW",email:"Login_email__39LaY"}},39:function(e,t,n){"use strict";var r=n.p+"static/media/loader_backinout.3e17615e.gif",a=n(131),s=n.n(a),c=n(1);t.a=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:r,className:s.a.preloader})})}},50:function(e,t,n){e.exports={formControl:"FormControls_formControl__EDQ4Y",error:"FormControls_error__W31wb",formSummaryError:"FormControls_formSummaryError__1NvXo"}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l}));var r=n(4),a=n(53),s=(n(0),n(50)),c=n.n(s),o=n(1),i=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r;return Object(o.jsxs)("div",{className:c.a.formControl+" "+(s?c.a.error:" "),children:[Object(o.jsx)("div",{children:a}),s&&Object(o.jsx)("span",{children:r})]})},u=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(i,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(o.jsx)(i,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},69:function(e,t,n){e.exports={paginator:"Paginator_paginator__2h2AG",pageNumber:"Paginator_pageNumber__zj9Gk",selectedPage:"Paginator_selectedPage__1c_5N"}},73:function(e,t,n){"use strict";t.a=n.p+"static/media/Killjoy.f1d20e3b.png"},74:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max lenght is ".concat(e,"  symbols")}}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"e",(function(){return O}));var r=n(9),a=n.n(r),s=n(17),c=n(38),o=n(4),i=n(13),u="ADD_POST",l="SET_USER_PROFILE",f="SET_STATUS",d="DELETE_POST",j={posts:[{id:1,message:"Hi, how are you?",like:12},{id:2,message:"It's my first post",like:15}],profile:null,status:""},b=function(e){return{type:u,newPostText:e}},p=function(e){return{type:f,status:e}},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,like:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case l:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case f:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case d:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.id}))});default:return e}}},95:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(38),a=n(4),s="SEND-MESSAGE",c={dialogs:[{id:1,name:"Jenifer"},{id:2,name:"James"},{id:3,name:"Leo"},{id:4,name:"Amili"}],messages:[{id:1,message:"Hi"},{id:2,message:"Could you recommend a good doctor?"},{id:3,message:"How are you?"},{id:4,message:"Hello!"}]},o=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:5,message:n}])});default:return e}}}},[[290,1,2]]]);
//# sourceMappingURL=main.fae0d84f.chunk.js.map