(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[3],{455:function(e,t,a){e.exports={profileInfo:"ProfileInfo_profileInfo__3ItUV",profilePhoto:"ProfileInfo_profilePhoto__1zFIr",descriptionBlock:"ProfileInfo_descriptionBlock__1JLh1",status:"ProfileInfo_status__z0yvy"}},456:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__17qAL",posts:"MyPosts_posts__RvDT0"}},457:function(e,t,a){e.exports={item:"Post_item__3bFxP"}},458:function(e,t,a){"use strict";a.r(t);var r=a(60),n=a(61),s=a(62),o=a(63),u=a(0),i=a.n(u),l=a(16),c=a(455),p=a.n(c),f=a(451),m=a(167),d=a.n(m);var h=a(157);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,s=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(i){n=!0,s=i}finally{try{r||null==u.return||u.return()}finally{if(n)throw s}}return a}}(e,t)||Object(h.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=function(e){var t=b(Object(u.useState)(e.status),2),a=t[0],r=t[1],n=b(Object(u.useState)(!1),2),s=n[0],o=n[1];Object(u.useEffect)((function(){r(e.status)}),[e.status]);return i.a.createElement("div",null,"\u0421\u0442\u0430\u0442\u0443\u0441:",s?i.a.createElement("input",{autoFocus:!0,onBlur:function(){o(!1),e.updateUserStatus(a)},value:a,onChange:function(e){r(e.target.value)},placeholder:"Status will be here"}):i.a.createElement("span",{className:p.a.status,onClick:function(){o(!0)}}," ",e.status||"Status will be here"))},E=function(e){var t=e.profile,a=e.updateUserStatus,r=e.status;return t?i.a.createElement("div",{className:p.a.profileInfo},i.a.createElement("div",{className:p.a.profilePhoto},i.a.createElement("img",{src:t.photos.large||d.a,alt:"ava"})),i.a.createElement("div",{className:p.a.descriptionBlock},"description"),i.a.createElement(v,{updateUserStatus:a,status:r})):i.a.createElement(f.a,{size:"large"})},y=a(456),k=a.n(y),P=a(457),S=a.n(P),_=function(e){var t=e.message,a=e.likesCount;return i.a.createElement("div",{className:S.a.item},i.a.createElement("img",{src:"https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg",alt:"\u0444\u043e\u0442\u043e"}),t,i.a.createElement("div",null,i.a.createElement("span",null,"like: ",a)))},g=a(202),j=a(203),O=a(134),I=a(103),U=Object(O.a)(15),w=function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement(g.a,{name:"postText",component:I.b,validate:[O.b,U],placeholder:"Type your post"})),i.a.createElement("button",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"))},T=w=Object(j.a)({form:"addNewPostForm"})(w),N=i.a.memo((function(e){var t=e.profilePage,a=e.addPost,r=t.postsData.map((function(e){var t=e.id,a=e.message,r=e.likesCount;return i.a.createElement(_,{key:t,message:a,likesCount:r})}));return i.a.createElement("div",{className:k.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(T,{onSubmit:function(e){a(e.postText)}}),i.a.createElement("div",{className:k.a.posts},r))})),x=a(155),B=Object(l.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addPost:function(t){e(Object(x.a)(t))}}}))(N),C=function(e){var t=e.profile,a=e.updateUserStatus,r=e.status;return i.a.createElement("div",null,i.a.createElement(E,{profile:t,status:r,updateUserStatus:a}),i.a.createElement(B,null))},A=a(44),F=a(8),M=function(e){Object(o.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.userId)||this.props.history.push("/login"),this.props.setUserProfile(e),this.props.setUserStatusThunk(e)}},{key:"render",value:function(){return i.a.createElement(C,{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatusThunk})}}]),a}(u.Component);t.default=Object(F.d)(Object(l.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,userId:e.auth.id,isAuth:e.auth.isAuth}}),{setUserProfile:x.c,setUserStatusThunk:x.d,updateUserStatusThunk:x.e}),A.f)(M)}}]);
//# sourceMappingURL=3.90866a96.chunk.js.map