(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["form"],{"7f5a":function(a,e,r){"use strict";r.r(e);var t=function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"about"},[r("h1",{staticClass:"text-center"},[a._v("Form Example")]),r("b-container",{staticClass:"bv-example-row"},[r("b-row",{attrs:{"align-h":"center"}},[r("b-col",{attrs:{cols:"6"}},[r("validation-observer",{ref:"observer"},[r("b-form",{on:{submit:a.onSubmit}},[r("input-validated",{attrs:{rules:"required|email",type:"email",label:"Email address:",name:"Email",placeholder:"Enter email"},model:{value:a.form.email,callback:function(e){a.$set(a.form,"email",e)},expression:"form.email"}}),r("input-validated",{attrs:{rules:"required",name:"Password",vid:"password",type:"password",label:"Password",placeholder:"Enter password"},model:{value:a.form.password,callback:function(e){a.$set(a.form,"password",e)},expression:"form.password"}}),r("input-validated",{attrs:{rules:"required|confirmed:password",name:"Password confirmation",type:"password",label:"Password confirmation",placeholder:"Confirm password"},model:{value:a.form.confirmation,callback:function(e){a.$set(a.form,"confirmation",e)},expression:"form.confirmation"}}),r("b-button",{staticClass:"mx-1",attrs:{type:"submit",variant:"primary"}},[a._v("Submit")]),r("b-button",{staticClass:"mx-1",attrs:{type:"reset",variant:"danger"}},[a._v("Reset")])],1)],1)],1)],1)],1)],1)},s=[],o={data:function(){return{form:{email:"",name:"",confirmation:""}}},methods:{onSubmit:function(a){a.preventDefault(),this.$refs.observer.validate(),alert(JSON.stringify(this.form))}}},i=o,n=r("2877"),l=Object(n["a"])(i,t,s,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=form.38bb2283.js.map