webpackJsonp([10],{"+VNG":function(t,e){},"Sy/k":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("gUTm"),a("X2Oc");var s=a("FaxB"),i=a("0xDb"),l={data:function(){return{dataList:[],input:"",total:0,currentPage:1,dialogTableVisible:!1,dialogFormVisible:!1,caseListPage:1,status:"",roleId:"",form:{uid:"",username:"",userNick:"",roleId:"",status:"",createTime:"",updateTime:""},formLabelWidth:"120px",delCallBack:!1,options:[{value:"1",label:"普通用户"},{value:"0",label:"管理员"},{value:"2",label:"高级用户"}],options1:[{value1:"1",label:"启用登录"},{value1:"0",label:"禁用登录"}],value:"",value1:""}},methods:{getList:function(){var t=this;this.$axios.post(s.b.domain+s.a.getUserManagerInfo,{currentPage:this.currentPage}).then(function(e){t.dataList=e.data.data.list,t.total=e.data.data.total;for(var a=0;a<t.dataList.length;a++){var s=Object(i.b)(t.dataList[a].createTime,"{y}-{m}-{d} {h}:{i}:{s}"),l=Object(i.b)(t.dataList[a].updateTime,"{y}-{m}-{d} {h}:{i}:{s}");switch(t.dataList[a].createTime=s,t.dataList[a].updateTime=l,t.dataList[a].roleId){case 0:t.dataList[a].roleId="管理员";break;case 1:t.dataList[a].roleId="普通用户";break;case 2:t.dataList[a].roleId="高级用户"}switch(t.dataList[a].status){case 0:t.dataList[a].status="禁用登录";break;case 1:t.dataList[a].status="启用登录"}}})},selectData:function(){var t=this;this.$axios.post(s.b.domain+s.a.getUserManagerInfoByName,{userNick:this.input,currentPage:1}).then(function(e){if(2e4===e.data.code){t.dataList=e.data.data.list,t.total=e.data.data.total;for(var a=0;a<t.dataList.length;a++){var s=Object(i.b)(t.dataList[a].createTime,"{y}-{m}-{d} {h}:{i}:{s}"),l=Object(i.b)(t.dataList[a].updateTime,"{y}-{m}-{d} {h}:{i}:{s}");switch(t.dataList[a].createTime=s,t.dataList[a].updateTime=l,t.dataList[a].roleId){case 0:t.dataList[a].roleId="管理员";break;case 1:t.dataList[a].roleId="普通用户";break;case 2:t.dataList[a].roleId="高级用户"}switch(t.dataList[a].status){case 0:t.dataList[a].status="禁用登录";break;case 1:t.dataList[a].status="启用登录"}}}})},detailPermission:function(t){this.dialogFormVisible=!0,this.form.uid=t.uid,this.form.username=t.username,this.form.userNick=t.userNick,this.form.roleId=t.roleId,this.form.status=t.status,this.status=t.status,this.form.createTime=t.createTime,this.form.updateTime=t.updateTime},sureModify:function(){var t=this;switch(this.form.roleId){case"管理员":this.form.roleId=0;break;case"普通用户":this.form.roleId=1;break;case"高级用户":this.form.roleId=2}switch(this.form.status){case"启用登录":this.form.status=1;break;case"禁用登录":this.form.status=0}this.dialogFormVisible=!1,this.$axios.post(s.b.domain+s.a.updateUserPermission,{uid:this.form.uid,username:this.form.username,roleId:this.form.roleId,status:this.form.status}).then(function(e){2e4===e.data.code?(t.dialogFormVisible=!1,t.openWarning(e.data.message,"success"),t.getList()):t.openWarning(e.data.message,"error")})},handleCaseListPageChange:function(t){var e=this;console.log(t),this.currentPage=t,this.caseListPage=t,this.$axios.post(s.b.domain+s.a.getUserManagerInfo,{currentPage:this.currentPage}).then(function(t){e.dataList=t.data.data.list,e.total=t.data.data.total;for(var a=0;a<e.dataList.length;a++){var s=Object(i.b)(e.dataList[a].createTime,"{y}-{m}-{d} {h}:{i}:{s}"),l=Object(i.b)(e.dataList[a].updateTime,"{y}-{m}-{d} {h}:{i}:{s}");switch(e.dataList[a].createTime=s,e.dataList[a].updateTime=l,e.dataList[a].roleId){case 0:e.dataList[a].roleId="管理员";break;case 1:e.dataList[a].roleId="普通用户";break;case 2:e.dataList[a].roleId="高级用户"}switch(e.dataList[a].status){case 1:e.dataList[a].status="启用登录";break;case 0:e.dataList[a].status="禁用登录"}}})},openWarning:function(t,e){this.$message({message:t,type:e})}},created:function(){this.getList()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a("div",{staticClass:"app-container"},[a("el-card",{attrs:{shadow:"never"}},[a("el-input",{staticStyle:{width:"200px","margin-bottom":"20px"},attrs:{placeholder:"请输用户姓名",clearable:""},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.selectData}},[t._v("查询")]),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""}},[a("el-table-column",{attrs:{fixed:"",type:"index",label:"序号",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(20*(t.caseListPage-1)+e.$index+1))])]}}])}),t._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"username",label:"用户名"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"userNick",label:"用户姓名"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"roleId",label:"用户角色"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"status",label:"当前状态"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"createTime",label:"创建时间","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{fixed:"",prop:"updateTime",label:"更新时间","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return t.detailPermission(e.row)}}},[t._v("授权")])]}}])})],1),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{plain:!0},on:{click:t.openWarning}}),t._v(" "),a("el-pagination",{staticStyle:{float:"right",margin:"20px"},attrs:{background:"",layout:"prev, pager, next",total:this.total,"page-size":20},on:{"current-change":t.handleCaseListPageChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:"修改用户权限",visible:t.dialogFormVisible,width:"600px"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"用户名","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off",disabled:""},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"用户姓名","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off",disabled:""},model:{value:t.form.userNick,callback:function(e){t.$set(t.form,"userNick",e)},expression:"form.userNick"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"用户角色","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.roleId,callback:function(e){t.$set(t.form,"roleId",e)},expression:"form.roleId"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"当前状态","label-width":t.formLabelWidth}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},t._l(t.options1,function(t){return a("el-option",{key:t.value1,attrs:{label:t.label,value:t.value1}})}),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"创建时间","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off",disabled:""},model:{value:t.form.createTime,callback:function(e){t.$set(t.form,"createTime",e)},expression:"form.createTime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"更新时间","label-width":t.formLabelWidth}},[a("el-input",{attrs:{"auto-complete":"off",disabled:""},model:{value:t.form.updateTime,callback:function(e){t.$set(t.form,"updateTime",e)},expression:"form.updateTime"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.sureModify}},[t._v("确 定")])],1)],1)],1)])},staticRenderFns:[]};var o=a("C7Lr")(l,r,!1,function(t){a("+VNG")},"data-v-49c8084f",null);e.default=o.exports}});
//# sourceMappingURL=10.68697a27f5f974cd9b2d.js.map