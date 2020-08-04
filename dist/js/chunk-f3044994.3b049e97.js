(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f3044994"],{"0d3f":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todos",style:{"--activeColor":t.activeColor}},[o("router-link",{attrs:{to:"/"}},[o("button",{staticClass:"todos__back-button"},[t._v(" ❮ ")])]),t.note.noteTitle?o("input",{directives:[{name:"model",rawName:"v-model",value:t.newTodo,expression:"newTodo"}],staticClass:"todos__input",attrs:{type:"text",placeholder:"What needs to be done?",maxlength:"30"},domProps:{value:t.newTodo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)},input:function(e){e.target.composing||(t.newTodo=e.target.value)}}}):t._e(),t.note.noteTitle?o("h2",{staticClass:"todos__title",on:{dblclick:function(e){return t.editNoteTitle(t.note.noteTitle)}}},[t._v(" "+t._s(t.note.noteTitle)+" ")]):o("input",{directives:[{name:"model",rawName:"v-model",value:t.newNoteTitle,expression:"newNoteTitle"}],staticClass:"todos__title--input",attrs:{type:"text",placeholder:"Give a title to your note",maxlength:"30"},domProps:{value:t.newNoteTitle},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addNoteTitle(e)},input:function(e){e.target.composing||(t.newNoteTitle=e.target.value)}}}),t.titleEditing?o("input",{directives:[{name:"model",rawName:"v-model",value:t.note.noteTitle,expression:"note.noteTitle"},{name:"focus",rawName:"v-focus"}],staticClass:"todos__title--edit",attrs:{type:"text",placeholder:"Edit note title",maxlength:"30"},domProps:{value:t.note.noteTitle},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.doneEditTitle(t.note.noteTitle)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.showEditModal(e)}],input:function(e){e.target.composing||t.$set(t.note,"noteTitle",e.target.value)}}}):t._e(),t.titleEditing?o("button",{staticClass:"todos__title--cancel-edit",attrs:{title:"Cancel editing"},on:{click:t.showEditModal}},[t._v(" × ")]):t._e(),t.todos.length?o("ul",{staticClass:"todos__list"},t._l(t.todos,(function(e,i){return o("TodoItem",{key:e.id,attrs:{todo:e,index:i},on:{"check-todo":t.checkTodo,"show-modal":t.showModal,"edit-todo":t.editTodo,"done-edit":t.doneEdit,"cancel-edit":t.cancelEdit}})})),1):o("p",{staticClass:"todos__empty"},[t._v("No todos yet.")]),o("Modal",{directives:[{name:"show",rawName:"v-show",value:t.isModalShowing,expression:"isModalShowing"}],on:{close:t.closeModal,deleteItem:t.deleteItem}}),o("Modal",{directives:[{name:"show",rawName:"v-show",value:t.isEditModalShowing,expression:"isEditModalShowing"}],on:{close:t.closeModal},scopedSlots:t._u([{key:"body",fn:function(){return[t._v(" Are you sure you don't want to save your changes? ")]},proxy:!0},{key:"footer",fn:function(){return[o("button",{staticClass:"modal__button--red",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.cancelEditTitle}},[t._v(" Don't save ")])]},proxy:!0}])})],1)},n=[],d=(o("7db0"),o("c975"),o("a9e3"),o("498a"),o("5530")),s=o("714b"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"todo"},[o("span",{staticClass:"todo__wrapper",class:{todo__done:t.todo.completed}},[o("input",{staticClass:"todo__checkbox",attrs:{type:"checkbox"},domProps:{checked:t.todo.completed},on:{change:function(e){return t.$emit("check-todo",t.todo.completed=!t.todo.completed,t.index)}}}),o("div",{staticClass:"todo__title"},[t.todo.editing?o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.title,expression:"todo.title"},{name:"focus",rawName:"v-focus"}],staticClass:"todo__title--edit",attrs:{type:"text",maxlength:"30"},domProps:{value:t.todo.title},on:{blur:function(e){return t.$emit("done-edit",t.todo)},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("done-edit",t.todo)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.$emit("cancel-edit",t.todo)}],input:function(e){e.target.composing||t.$set(t.todo,"title",e.target.value)}}}):o("div",{staticClass:"todo__title--text",on:{dblclick:function(e){return t.$emit("edit-todo",t.todo,t.index)}}},[t._v(" "+t._s(t.todo.title)+" ")])])]),o("button",{staticClass:"todo__remove",on:{click:function(e){return t.$emit("show-modal",t.index)}}},[t._v(" × ")])])},r=[],c={props:{todo:{type:Object,required:!0},index:Number},directives:{focus:{inserted:function(t){t.focus()}}}},l=c,u=(o("c1e6"),o("2877")),f=Object(u["a"])(l,a,r,!1,null,"5950a3af",null),h=f.exports,m=o("2f62"),p={name:"TodoList",data:function(){return{id:this.$route.params.id,currentNoteIndex:"",note:[],todos:[],newNoteTitle:"",editTitleCache:"",titleEditing:!1,newTodo:"",newTodoCache:"",editTodoCache:"",isModalShowing:!1,isEditModalShowing:!1,deleteIndex:"",activeColor:""}},directives:{focus:{inserted:function(t){t.focus()}}},components:{Modal:s["a"],TodoItem:h},computed:Object(d["a"])({},Object(m["b"])(["getNotes","getColors"])),created:function(){var t=this;this.note=this.getNotes.find((function(e){return e.noteId===Number(t.id)})),this.currentNoteIndex=this.getNotes.indexOf(this.note),this.todos=this.note.todos},methods:Object(d["a"])(Object(d["a"])({},Object(m["c"])(["setCurrentNoteIndex","addNoteTitle","editNoteTitle","setCurrentTodoIndex","addTodo","checkTodo","editTodo","removeTodo"])),{},{addNoteTitle:function(){this.$store.commit("setCurrentNoteIndex",this.currentNoteIndex),this.newNoteTitle.trim()&&(this.$store.commit("addNoteTitle",this.newNoteTitle),this.newNoteTitle="",this.getRandomColor())},editNoteTitle:function(t){this.editTitleCache=t,this.titleEditing=!0},doneEditTitle:function(t){t.trim()&&(this.$store.commit("editNoteTitle",t),this.titleEditing=!1,this.getRandomColor())},showEditModal:function(){this.isEditModalShowing=!0},cancelEditTitle:function(){this.note.noteTitle=this.editTitleCache,this.titleEditing=!1,this.isEditModalShowing=!1},setCurrentTodoIndex:function(t){this.$store.commit("setCurrentTodoIndex",t)},addTodo:function(){this.newTodo.trim()&&(this.$store.commit("addTodo",{id:Date.now(),title:this.newTodo,completed:!1,editing:!1}),this.getRandomColor(),this.newTodo="")},checkTodo:function(t,e){this.setCurrentTodoIndex(e),this.$store.commit("checkTodo",t),this.getRandomColor()},editTodo:function(t,e){this.setCurrentTodoIndex(e),this.editTodoCache=t.title,t.editing=!0},doneEdit:function(t){t.title.trim()&&(this.$store.commit("editTodo",t),t.editing=!1,this.getRandomColor())},cancelEdit:function(t){t.title=this.editTodoCache,t.editing=!1},showModal:function(t){this.isModalShowing=!0,this.deleteIndex=t},closeModal:function(){this.isModalShowing=!1,this.isEditModalShowing=!1},deleteItem:function(){this.$store.commit("removeTodo",this.deleteIndex),this.getRandomColor()},getRandomColor:function(){var t=this.getColors.sort((function(){return Math.random()-.5}));this.activeColor=t[0]}})},v=p,_=(o("98bf"),Object(u["a"])(v,i,n,!1,null,"1c3e66d2",null));e["default"]=_.exports},"498a":function(t,e,o){"use strict";var i=o("23e7"),n=o("58a8").trim,d=o("c8d2");i({target:"String",proto:!0,forced:d("trim")},{trim:function(){return n(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,o){var i=o("1d80"),n=o("5899"),d="["+n+"]",s=RegExp("^"+d+d+"*"),a=RegExp(d+d+"*$"),r=function(t){return function(e){var o=String(i(e));return 1&t&&(o=o.replace(s,"")),2&t&&(o=o.replace(a,"")),o}};t.exports={start:r(1),end:r(2),trim:r(3)}},"714b":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"modal-fade"}},[o("div",{staticClass:"backdrop"},[o("div",{staticClass:"modal",attrs:{role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"}},[o("header",{staticClass:"modal__header",attrs:{id:"modalTitle"}},[t._v(" Please, confirm the action "),o("button",{staticClass:"modal__button--close",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.close}},[t._v(" × ")])]),o("div",{staticClass:"modal__body",attrs:{id:"modalDescription"}},[t._t("body",[t._v(" Are you sure you want to delete this item? ")])],2),o("footer",{staticClass:"modal__footer"},[t._t("footer",[o("button",{staticClass:"modal__button--red",attrs:{type:"button","aria-label":"Close modal"},on:{click:t.deleteItem}},[t._v(" Delete ")])])],2)])])])},n=[],d={name:"Modal",methods:{close:function(){this.$emit("close")},deleteItem:function(){this.$emit("deleteItem"),this.$emit("close")}}},s=d,a=(o("a3bd"),o("2877")),r=Object(a["a"])(s,i,n,!1,null,"cd952020",null);e["a"]=r.exports},7156:function(t,e,o){var i=o("861d"),n=o("d2bb");t.exports=function(t,e,o){var d,s;return n&&"function"==typeof(d=e.constructor)&&d!==o&&i(s=d.prototype)&&s!==o.prototype&&n(t,s),t}},"7db0":function(t,e,o){"use strict";var i=o("23e7"),n=o("b727").find,d=o("44d2"),s=o("ae40"),a="find",r=!0,c=s(a);a in[]&&Array(1)[a]((function(){r=!1})),i({target:"Array",proto:!0,forced:r||!c},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),d(a)},"90b2":function(t,e,o){},"94fd":function(t,e,o){},"98bf":function(t,e,o){"use strict";var i=o("b8e8"),n=o.n(i);n.a},a3bd:function(t,e,o){"use strict";var i=o("94fd"),n=o.n(i);n.a},a9e3:function(t,e,o){"use strict";var i=o("83ab"),n=o("da84"),d=o("94ca"),s=o("6eeb"),a=o("5135"),r=o("c6b6"),c=o("7156"),l=o("c04e"),u=o("d039"),f=o("7c73"),h=o("241c").f,m=o("06cf").f,p=o("9bf2").f,v=o("58a8").trim,_="Number",T=n[_],g=T.prototype,b=r(f(g))==_,C=function(t){var e,o,i,n,d,s,a,r,c=l(t,!1);if("string"==typeof c&&c.length>2)if(c=v(c),e=c.charCodeAt(0),43===e||45===e){if(o=c.charCodeAt(2),88===o||120===o)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+c}for(d=c.slice(2),s=d.length,a=0;a<s;a++)if(r=d.charCodeAt(a),r<48||r>n)return NaN;return parseInt(d,i)}return+c};if(d(_,!T(" 0o1")||!T("0b1")||T("+0x1"))){for(var y,x=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof x&&(b?u((function(){g.valueOf.call(o)})):r(o)!=_)?c(new T(C(e)),o,x):C(e)},w=i?h(T):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;w.length>k;k++)a(T,y=w[k])&&!a(x,y)&&p(x,y,m(T,y));x.prototype=g,g.constructor=x,s(n,_,x)}},b8e8:function(t,e,o){},c1e6:function(t,e,o){"use strict";var i=o("90b2"),n=o.n(i);n.a},c8d2:function(t,e,o){var i=o("d039"),n=o("5899"),d="​᠎";t.exports=function(t){return i((function(){return!!n[t]()||d[t]()!=d||n[t].name!==t}))}},c975:function(t,e,o){"use strict";var i=o("23e7"),n=o("4d64").indexOf,d=o("a640"),s=o("ae40"),a=[].indexOf,r=!!a&&1/[1].indexOf(1,-0)<0,c=d("indexOf"),l=s("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:r||!c||!l},{indexOf:function(t){return r?a.apply(this,arguments)||0:n(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-f3044994.3b049e97.js.map