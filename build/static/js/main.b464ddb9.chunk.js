(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[0],{103:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return l}));var r=n(117),a=n(0),o=n.n(a),s=n(84),u=n.n(s),i=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,s=e.children,i=(Object(r.a)(e,["input","meta","children"]),n&&a);return o.a.createElement("div",{className:u.a.formControl+" "+(i&&u.a.error)},s,i&&o.a.createElement("p",null,a))},c=function(e){var t=e.input,n=(e.meta,Object(r.a)(e,["input","meta"]));return o.a.createElement(i,e,o.a.createElement("textarea",Object.assign({},t,n)))},l=function(e){var t=e.input,n=Object(r.a)(e,["input"]);return o.a.createElement(i,e,o.a.createElement("input",Object.assign({},t,n)))}},114:function(e,t,n){e.exports={friendsBlock:"Friends_friendsBlock__2HedO",friends:"Friends_friends__jx6Te",friend:"Friends_friend__2Vm7d"}},134:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Required field"},a=function(e){return function(t){if(t&&t.length>e)return"Must be ".concat(e," characters or less")}}},151:function(e,t,n){e.exports={user:"Users_user__2XG4Z",userPhoto:"Users_userPhoto__x1tGy"}},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return g}));var r=n(9),a=n.n(r),o=n(22),s=n(68),u=n(10),i=n(23),c="profile/ADD_POST",l={postsData:[{id:1,message:"Hi",likesCount:10},{id:2,message:"first post",likesCount:15}],profile:null,status:""},f=function(e){return{type:c,postText:e}},p=function(e){return{type:"profile/SET_USER_STATUS",status:e}},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.profileUser(e);case 2:r=t.sent,n({type:"profile/SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.setUserStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateUserStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n={id:3,message:t.postText,likesCount:5};return Object(u.a)({},e,{postsData:[].concat(Object(s.a)(e.postsData),[n])});case"profile/SET_USER_PROFILE":return Object(u.a)({},e,{profile:t.profile});case"profile/SET_USER_STATUS":return Object(u.a)({},e,{status:t.status});case"profile/DELETE_POST":return Object(u.a)({},e,{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});default:return e}}},167:function(e,t,n){e.exports=n.p+"static/media/ava.e4a4fd5a.jpg"},201:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var r=n(68),a=n(10),o={dialogsData:[{id:1,name:"\u0410\u0440\u0442\u0435\u043c"},{id:2,name:"\u041c\u0430\u0448\u0430"},{id:3,name:"\u041a\u0430\u0442\u044f"}],messagesData:[{id:1,message:"Hi"},{id:2,message:"Yo"},{id:3,message:"Come on"}]},s=function(e){return{type:"dialogs/SEND_MESSAGE",messageText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dialogs/SEND_MESSAGE":var n={id:4,message:t.messageText};return Object(a.a)({},e,{messagesData:[].concat(Object(r.a)(e.messagesData),[n])});default:return e}}},23:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var r=n(207),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"b4f99289-4387-4890-a9a9-fbce3d7bca05"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return a.get("users/?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return a.post("follow/".concat(e))},unfollowUser:function(e){return a.delete("follow/".concat(e))}},s={profileUser:function(e){return a.get("profile/".concat(e))},setUserStatus:function(e){return a.get("profile/status/".concat(e))},updateUserStatus:function(e){return a.put("profile/status",{status:e})}},u={authUser:function(){return a.get("auth/me")},logInUser:function(e,t,n){return a.post("auth/login",{email:e,password:t,rememberMe:n})},logOutUser:function(){return a.delete("auth/login")}}},254:function(e,t,n){e.exports=n(449)},259:function(e,t,n){},27:function(e,t,n){e.exports={nav:"Navbar_nav__12rWZ",item:"Navbar_item__2IXcX",activeLink:"Navbar_activeLink__2apJJ"}},449:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),s=n.n(o),u=n(60),i=n(61),c=n(62),l=n(63),f=(n(259),n(260),n(27)),p=n.n(f),d=n(26),m=(n(114),function(e){e.sidebar;return a.a.createElement("nav",{className:p.a.nav},a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/profile",activeClassName:p.a.activeLink},"Profile")),a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/dialogs",activeClassName:p.a.activeLink},"Messages")),a.a.createElement("div",{className:p.a.item},a.a.createElement(d.b,{to:"/users",activeClassName:p.a.activeLink},"Users")),a.a.createElement("div",{className:p.a.item},a.a.createElement("a",{href:"#s"},"News")),a.a.createElement("div",{className:p.a.item},a.a.createElement("a",{href:"#s"},"Music")),a.a.createElement("div",{className:p.a.item},a.a.createElement("a",{href:"#s"},"Settings")))}),g=n(44),E=n(16),h=n(9),b=n.n(h),v=n(22),_=n(68),O=n(10),w=n(23),S=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(O.a)({},e,{},r):e}))},U={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isLoading:!0,followingInProgress:[]},j=function(e){return{type:"user/FOLLOW",userId:e}},y=function(e){return{type:"user/UNFOLLOW",userId:e}},P=function(e){return{type:"user/SET_USERS",users:e}},C=function(e){return{type:"user/SET_TOTAL_USERS_COUNT",totalUsersCount:e}},L=function(e){return{type:"user/IS_LOADING",isLoading:e}},I=function(e,t){return{type:"user/TOGGLE_IS_FOLLOWING_PROGRESS",isLoading:e,userId:t}},N=function(){var e=Object(v.a)(b.a.mark((function e(t,n,r,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0,n)),e.next=3,r;case 3:0===e.sent.data.resultCode&&t(a(n)),t(I(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"user/FOLLOW":return Object(O.a)({},e,{users:S(e.users,t.userId,"id",{followed:!0})});case"user/UNFOLLOW":return Object(O.a)({},e,{users:S(e.users,t.userId,"id",{followed:!1})});case"user/SET_USERS":return Object(O.a)({},e,{users:t.users});case"user/SET_CURRENT_PAGE":return Object(O.a)({},e,{currentPage:t.currentPage});case"user/SET_TOTAL_USERS_COUNT":return Object(O.a)({},e,{totalUsersCount:t.totalUsersCount});case"user/IS_LOADING":return Object(O.a)({},e,{isLoading:t.isLoading});case"user/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(O.a)({},e,{followingInProgress:t.isLoading?[].concat(Object(_.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},k=n(452),A=n(151),x=n.n(A),D=n(167),F=n.n(D),R=n(453),z=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,o=e.unfollow;return a.a.createElement("div",{className:x.a.user},a.a.createElement("div",null,a.a.createElement(d.b,{to:"/profile/"+t.id},a.a.createElement("img",{src:null!=t.photos.small?t.photos.small:F.a,className:x.a.userPhoto,alt:"avatar"})),a.a.createElement("p",null,t.followed?a.a.createElement(R.a,{type:"primary",loading:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Unfollow"):a.a.createElement(R.a,{type:"primary",loading:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Follow"))),a.a.createElement("div",null,a.a.createElement("p",null,t.name),a.a.createElement("p",null,t.status)),a.a.createElement("div",null,a.a.createElement("p",null,"user.location.country"),a.a.createElement("p",null,"user.location.city")))},M=function(e){var t=e.totalUsersCount,n=e.currentPage,r=e.users,o=e.followingInProgress,s=e.onPageChanged,u=e.follow,i=e.unfollow;return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(k.a,{current:n,onChange:s,total:t})),r.map((function(e){return a.a.createElement(z,{user:e,followingInProgress:o,follow:u,unfollow:i,key:e.id})})))},G=n(451),B=function(e){return e.usersPage.users},H=function(e){return e.usersPage.totalUsersCount},J=function(e){return e.usersPage.pageSize},X=function(e){return e.usersPage.currentPage},Y=function(e){return e.usersPage.followingInProgress},K=function(e){return e.usersPage.isLoading},W=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n),e.props.setCurrentPage(t)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){var e=this.props,t=e.users,n=e.totalUsersCount,r=e.pageSize,o=e.currentPage,s=e.followingInProgress,u=e.isLoading,i=e.follow,c=e.unfollow,l=e.toggleFollowingProgress;return u?a.a.createElement(G.a,{size:"large"}):a.a.createElement(M,{users:t,totalUsersCount:n,pageSize:r,currentPage:o,followingInProgress:s,onPageChanged:this.onPageChanged,follow:i,unfollow:c,toggleFollowingProgress:l})}}]),n}(a.a.Component),Z=Object(E.b)((function(e){return{users:B(e),totalUsersCount:H(e),pageSize:J(e),currentPage:X(e),followingInProgress:Y(e),isLoading:K(e)}}),{follow:function(e){return function(){var t=Object(v.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=w.c.followUser(e),N(n,e,r,j);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(v.a)(b.a.mark((function t(n){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=w.c.unfollowUser(e),N(n,e,r,y);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsersAC:P,setCurrentPageAC:function(e){return{type:"user/SET_CURRENT_PAGE",currentPage:e}},setTotalUsersCountAC:C,toggleFollowingProgressAC:I,getUsers:function(e,t){return function(){var n=Object(v.a)(b.a.mark((function n(r){var a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(L(!0)),n.next=3,w.c.getUsers(e,t);case 3:a=n.sent,r(L(!1)),r(P(a.items)),r(C(a.totalCount));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(W),q=n(88),V=n.n(q),Q=function(e){var t=e.auth,n=e.logOutUser,r=(t.email,t.login),o=t.isAuth;return a.a.createElement("header",{className:V.a.header},a.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/b/be/Lineage_OS_Logo.png",alt:"logo"}),a.a.createElement("div",{className:V.a.loginBlock},o?a.a.createElement("div",null,a.a.createElement("span",{className:V.a.userName},r," "),a.a.createElement("span",null,"||"),a.a.createElement("span",{className:V.a.logout,onClick:n}," Log out")):a.a.createElement(d.b,{to:"/login"},"Login")))},$=n(90),ee={id:null,login:null,email:null,isAuth:!1},te=function(e,t,n,r){return{type:"auth/SET_USER_DATA",data:{id:e,login:t,email:n,isAuth:r}}},ne=function(){return function(){var e=Object(v.a)(b.a.mark((function e(t){var n,r,a,o,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.authUser();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.login,s=r.email,t(te(a,o,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(O.a)({},e,{},t.data);default:return e}},ae=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(Q,{auth:this.props.auth,logOutUser:this.props.logOutUser})}}]),n}(r.Component),oe=Object(E.b)((function(e){return{auth:e.auth}}),{logOutUser:function(){return function(){var e=Object(v.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.logOutUser();case 2:0===e.sent.data.resultCode&&t(te(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ae),se=n(202),ue=n(203),ie=n(103),ce=n(134),le=n(84),fe=n.n(le),pe=function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},n&&a.a.createElement("div",{className:fe.a.errorBlock},n),a.a.createElement("span",null,a.a.createElement(se.a,{name:"email",component:ie.a,placeholder:"Login",validate:ce.b})),a.a.createElement("span",null,a.a.createElement(se.a,{name:"password",component:ie.a,placeholder:"Password",validate:ce.b,type:"password"})),a.a.createElement("div",null,a.a.createElement("label",null,"remember me",a.a.createElement(se.a,{name:"rememberMe",component:ie.a,type:"checkbox"}))),a.a.createElement("button",null,"Log in"))},de=pe=Object(ue.a)({form:"login"})(pe),me=Object(E.b)((function(e){return{isAuth:e.auth.isAuth}}),{logInUser:function(e,t,n){return function(){var r=Object(v.a)(b.a.mark((function r(a){var o,s;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,w.a.logInUser(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(ne()):(s=o.data.messages.length>0?o.data.messages[0]:"Ooops, some error",a(Object($.a)("login",{_error:s})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){var t=e.logInUser;return e.isAuth?a.a.createElement(g.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Please sign in"),a.a.createElement(de,{onSubmit:function(e){var n=e.email,r=e.password,a=e.rememberMe;t(n,r,a)}}))})),ge={initialized:!1},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/SET_INITIALIZED":return Object(O.a)({},e,{initialized:!0});default:return e}},he=n(8),be=n(155),ve=n(201),_e={friends:[{id:1,photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLdL6lKDCM-MaoUFy-2Jbnz2IXxYtY7FpLKHf_aB-TUFZDlMJr",name:"\u0410\u0440\u0442\u0435\u043c"},{id:2,photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLdL6lKDCM-MaoUFy-2Jbnz2IXxYtY7FpLKHf_aB-TUFZDlMJr",name:"\u041c\u0430\u0448\u0430"},{id:3,photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSLdL6lKDCM-MaoUFy-2Jbnz2IXxYtY7FpLKHf_aB-TUFZDlMJr",name:"\u041a\u0430\u0442\u044f"}]},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e;arguments.length>1&&arguments[1];return e},we=n(204),Se=n(225),Ue=Object(he.c)({profilePage:be.b,dialogsPage:ve.a,sidebar:Oe,usersPage:T,auth:re,form:we.a,app:Ee}),je=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||he.d,ye=Object(he.e)(Ue,je(Object(he.a)(Se.a))),Pe=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement(G.a,{size:"large"})},a.a.createElement(e,t))}},Ce=a.a.lazy((function(){return n.e(3).then(n.bind(null,458))})),Le=a.a.lazy((function(){return n.e(4).then(n.bind(null,459))})),Ie=function(e){Object(l.a)(n,e);var t=Object(c.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(oe,null),a.a.createElement(m,null),a.a.createElement("div",{className:"app-wrapper-content"},a.a.createElement(g.b,{path:"/profile/:userId?",render:Pe(Ce)}),a.a.createElement(g.b,{path:"/dialogs",render:Pe(Le)}),a.a.createElement(g.b,{path:"/users",render:function(){return a.a.createElement(Z,null)}}),a.a.createElement(g.b,{path:"/login",render:function(){return a.a.createElement(me,null)}}))):a.a.createElement(G.a,{size:"large"})}}]),n}(r.Component),Ne=Object(he.d)(g.f,Object(E.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(ne()).then((function(){e({type:"app/SET_INITIALIZED"})}))}}}))(Ie),Te=function(e){return a.a.createElement(d.a,null,a.a.createElement(E.a,{store:ye},a.a.createElement(Ne,null)))};s.a.render(a.a.createElement(Te,null),document.getElementById("root"))},84:function(e,t,n){e.exports={formControl:"FormsControls_formControl__EnI5u",error:"FormsControls_error__bPcwt",errorBlock:"FormsControls_errorBlock__n2ibu"}},88:function(e,t,n){e.exports={header:"Header_header__7Fiq4",loginBlock:"Header_loginBlock__2tf97",userName:"Header_userName__n-GM1",logout:"Header_logout__8ARQ0"}}},[[254,1,2]]]);
//# sourceMappingURL=main.b464ddb9.chunk.js.map