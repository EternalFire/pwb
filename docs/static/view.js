;/*!view/Button.jsx*/
define("view/Button.jsx",function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={},r=function(e){var t=e.children,r=e.onClick;return React.createElement("button",{style:n,onClick:r},t)};r.propTypes={children:React.PropTypes.string.isRequired,onClick:React.PropTypes.func},t.default=r});
;/*!view/ContentInput.jsx*/
define("view/ContentInput.jsx",function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e){function t(e,o){return n(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o))}return o(t,e),a(t,[{key:"componentDidUpdate",value:function(){var e=this.props.show,t=$(this.refs.node);e?t.show("fast").toggleClass("active"):t.hide().toggleClass("active")}},{key:"handleClickCreate",value:function(){var e=this.refs,t=e.title,n=e.tag,r=e.content,o=this.props.create;o({title:t.value.trim(),tag:n.value.trim(),content:r.value.trim()}),t.value="",n.value="",r.value=""}},{key:"render",value:function(){var e=this,t=this.props.show;return t?React.createElement("tr",{ref:"node"},React.createElement("td",null,"-"),React.createElement("td",null,React.createElement("input",{type:"text",ref:"title"})),React.createElement("td",null,React.createElement("input",{type:"text",ref:"tag"})),React.createElement("td",null,React.createElement("input",{type:"text",ref:"content"})),React.createElement("td",null,React.createElement("button",{className:"btn btn-default btn-lg",onClick:function(t){return e.handleClickCreate(t)}},"创建"))):null}}]),t}(React.Component);c.propTypes={show:React.PropTypes.bool.isRequired,create:React.PropTypes.func.isRequired},t.default=c});
;/*!view/ContentRow.jsx*/
define("view/ContentRow.jsx",function(t,e){"use strict";function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),s=function(t){function e(t,i){a(this,e);var r=n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),s=r.props.data;return r.state={clicked:{},data:s,isEditing:!1},r}return i(e,t),r(e,[{key:"handleClickData",value:function(t){var e=t.target.dataset.index,a=this.state.clicked;a[e]=!0,this.setState({clicked:a})}},{key:"handleKeyDownData",value:function(t){if(this.state.isEditing=!0,13==t.which){var e=t.target.dataset.index;this.changeData(e)}}},{key:"handleBlur",value:function(t){var e=t.target.dataset.index;this.changeData(e)}},{key:"handleChange",value:function(t){var e=t.target.dataset.index;this.state.data[e]=t.target.value,this.setState({data:this.state.data})}},{key:"changeData",value:function(t){console.log("changeData >>> ",this.state.data[t]),this.state.clicked[t]=null,this.setState({clicked:this.state.clicked,isEditing:!1}),this.props.updateData(this.state.data)}},{key:"handleDelete",value:function(){this.props.deleteData(this.state.data)}},{key:"handlePaste",value:function(){}},{key:"getValue",value:function(t){var e=this.props.decryptData,a="";return a=this.state.isEditing?this.state.data[t]:e(this.state.data)[t]}},{key:"render",value:function(){var t=this,e=this.state.clicked,a=this.props,n=a.data,i=a.showData;return this.state.data=n,React.createElement("tr",null,this.state.data.map(function(a,n,r){return React.createElement("td",null,0===n?React.createElement("span",null,a):e[n]?React.createElement("input",{type:"text",autoFocus:"true",value:t.getValue(n),"data-index":n,onKeyDown:t.handleKeyDownData.bind(t),onBlur:t.handleBlur.bind(t),onChange:t.handleChange.bind(t),onPaste:t.handlePaste.bind(t)}):React.createElement("span",{onClick:t.handleClickData.bind(t),"data-index":n},i(r,n)))}),React.createElement("td",null,React.createElement("button",{className:"btn btn-danger ghost",onClick:this.handleDelete.bind(this)},"X")))}}]),e}(React.Component);s.propTypes={data:React.PropTypes.array.isRequired,updateData:React.PropTypes.func.isRequired,deleteData:React.PropTypes.func.isRequired,decryptData:React.PropTypes.func.isRequired,showData:React.PropTypes.func.isRequired},e.default=s});
;/*!view/ContentTable.jsx*/
define("view/ContentTable.jsx",function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=e("view/ContentRow.jsx"),u=n(l),i=e("view/ContentInput.jsx"),s=n(i),p=function(e){function t(e,n){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return o(t,e),c(t,[{key:"componentDidUpdate",value:function(){}},{key:"renderTitle",value:function(){return React.createElement("tr",{className:"info"},React.createElement("th",null,"ID"),React.createElement("th",null,"标题"),React.createElement("th",null,"标签"),React.createElement("th",null,"内容"),React.createElement("th",null))}},{key:"renderContents",value:function(){var e=this.props,t=e.showContent,n=e.updateContent,r=e.deleteContent,a=e.contents;return a?a.map(function(e){var a=[e.id,e.title,e.tag,e.content];return React.createElement(u.default,{data:a,updateData:function(e){var t=0;n({id:e[t++],title:e[t++],tag:e[t++],content:e[t++]})},deleteData:function(e){r({id:e[0]})},decryptData:function(e){var t=e.map(function(e){return e});return t},showData:function(e,n){return 3!=n||t?e[n]?e[n]:"-":"******"}})}):null}},{key:"renderInput",value:function(){var e=this.props,t=e.showInput,n=e.createContent;return React.createElement(s.default,{show:t,create:n})}},{key:"render",value:function(){var e=this.props.id;return React.createElement("div",{className:"panel panel-info"},React.createElement("div",{className:"panel-heading"},React.createElement("h3",{"class":"panel-title"},"Data")),React.createElement("div",{className:"panel-body"},React.createElement("table",{className:"table table-hover",id:e},React.createElement("thead",null,this.renderTitle()),React.createElement("tbody",null,this.renderInput(),this.renderContents()))))}}]),t}(React.Component);p.propTypes={id:React.PropTypes.string.isRequired,showInput:React.PropTypes.bool.isRequired,showContent:React.PropTypes.bool.isRequired,createContent:React.PropTypes.func.isRequired,updateContent:React.PropTypes.func.isRequired,deleteContent:React.PropTypes.func.isRequired},t.default=p});
;/*!view/ToolbarItemToggle.jsx*/
define("view/ToolbarItemToggle.jsx",function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(t){function e(t,o){n(this,e);var s=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,o));return s.state={isOn:!1},s}return o(e,t),s(e,[{key:"componentDidMount",value:function(){var t=this;Object.keys(this.props).filter(function(t){return 0===t.indexOf("data-")}).map(function(t){var e={src:t,dst:""};return e.dst=t.split("-").splice(1).reduce(function(t,e){return t=t+e[0].toUpperCase()+e.substr(1)}),e}).forEach(function(e){t.refs.btn.dataset[e.dst]=t.props[e.src]})}},{key:"handleClick",value:function(){var t=!this.state.isOn;this.setState({isOn:t}),this.props.toggle?this.props.toggle(t):null}},{key:"toggleClass",value:function(t){$(this.refs.btn).toggleClass("active",t?!0:!1)}},{key:"render",value:function(){var t=this,e=this.props,n=e.icon,r=e.text;return"boolean"==typeof this.props.isOn&&(this.state.isOn=this.props.isOn),this.toggleClass(this.state.isOn),React.createElement("button",{className:"btn btn-default btn-lg",onClick:function(){return t.handleClick()},ref:"btn"},React.createElement("span",{className:n})," ",r)}}]),e}(React.Component);e.default=i});
;/*!view/ToolbarItemSearch.jsx*/
define("view/ToolbarItemSearch.jsx",function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(e){function t(e,o){n(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o));return a.state={text:""},a}return o(t,e),a(t,[{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleKeyDown",value:function(e){if(13==e.which){var t=this.state.text.trim();this.props.search(t)}}},{key:"handleBlur",value:function(){var e=this.state.text.trim();this.props.search(e)}},{key:"render",value:function(){var e=this;return React.createElement("div",null,React.createElement("span",{className:"glyphicon glyphicon-search"}),React.createElement("input",{type:"text",className:"searchInput",value:this.state.text,onChange:function(t){return e.handleChange(t)},onKeyDown:function(t){return e.handleKeyDown(t)},onBlur:function(t){return e.handleBlur(t)}}))}}]),t}(React.Component);i.propTypes={search:React.PropTypes.func.isRequired},t.default=i});
;/*!view/Toolbar.jsx*/
define("view/Toolbar.jsx",function(e,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),c=e("view/ToolbarItemToggle.jsx"),i=o(c),u=e("view/ToolbarItemSearch.jsx"),p=o(u),g=function(e){function t(e,o){return a(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o))}return l(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.toggleAdd,o=e.toggleShowContent,a=e.toggleSetting,n=e.modalDialogID,l=e.toggleDownload,r=e.toggleUpload,c="#"+n;return React.createElement("div",{className:"panel panel-default toolbar"},React.createElement("div",{className:"panel-heading"},React.createElement("h3",{"class":"panel-title"},"Toolbar")),React.createElement("div",{className:"panel-body"},React.createElement("div",{className:"input-group toolbarLine"},React.createElement(i.default,{icon:"glyphicon glyphicon-plus",toggle:t,text:"Add"}),React.createElement(i.default,{icon:"glyphicon glyphicon-eye-open",toggle:o,text:"show"}),React.createElement(i.default,{icon:"glyphicon glyphicon-cog",toggle:a,text:"setting","data-toggle":"modal","data-target":c,"data-backdrop":"static",isOn:!1}),React.createElement(i.default,{icon:"glyphicon glyphicon-download",text:"download",toggle:l,"data-toggle":"modal","data-target":c,"data-backdrop":"static",isOn:!1}),React.createElement(i.default,{icon:"glyphicon glyphicon-upload",text:"upload",toggle:r,"data-toggle":"modal","data-target":c,"data-backdrop":"static",isOn:!1})),React.createElement("div",{className:"input-group toolbarLine"},React.createElement(p.default,{search:function(e){return e}}))))}}]),t}(React.Component);g.propTypes={toggleAdd:React.PropTypes.func.isRequired,toggleShowContent:React.PropTypes.func.isRequired,toggleSetting:React.PropTypes.func.isRequired},t.default=g});
;/*!view/Popup.jsx*/
define("view/Popup.jsx",function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=function(e){function t(e,o){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,o))}return o(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.title,a=e.onClose,o=e.onCancel,r=e.onOK,c=e.cancelText,l=e.okText,i=e.renderBody;return React.createElement("div",{className:"modal fade",tabindex:"-1",role:"dialog",id:t},React.createElement("div",{className:"modal-dialog",role:"document"},React.createElement("div",{className:"modal-content"},React.createElement("div",{className:"modal-header"},React.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",onClick:function(){return a?a():void 0}},React.createElement("span",{"aria-hidden":"true"},"×")),React.createElement("h4",{className:"modal-title"},n?n:"title")),React.createElement("div",{className:"modal-body"},i?i():null),React.createElement("div",{className:"modal-footer"},React.createElement("button",{type:"button",className:"btn btn-default btn-lg","data-dismiss":"modal",onClick:function(){return o?o():a?a():void 0}},c?c:"cancel"),React.createElement("button",{type:"button",className:"btn btn-primary btn-lg","data-dismiss":"modal",onClick:function(){return r?r():void 0}},l?l:"ok")))))}}]),t}(React.Component);c.propTypes={id:React.PropTypes.string.isRequired,title:React.PropTypes.string,onClose:React.PropTypes.func},t.default=c});
;/*!view/PopupDialog.jsx*/
define("view/PopupDialog.jsx",function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=e("view/Popup.jsx"),l=n(s),u=function(e){function t(e,n){o(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.state={id:a.props.id,setting:{title:"Setting",data:"",render:a.renderSetting.bind(a),onOK:function(){},onClose:function(){}},io:{title:"Download & Upload",data:"",render:a.renderIO.bind(a),onOK:function(){var e=a.props,t=e.isInput,n=e.onOKUpload;t&&(n?n(a.state.io.data):null),a.state.io.data=""},onClose:function(){a.state.io.data=""}}},a}return a(t,e),i(t,[{key:"getModel",value:function(e){return this.state[e]?this.state[e]:this.state.setting}},{key:"onClose",value:function(){var e=this.props.dialogType;this.getModel(e).onClose()}},{key:"onOK",value:function(){var e=this.props.dialogType;this.getModel(e).onOK()}},{key:"renderSetting",value:function(){return React.createElement("div",{className:"form-group"},React.createElement("label",null,"Password"),React.createElement("input",{type:"password",className:"form-control",placeholder:"enter Password"}))}},{key:"renderIO",value:function(){var e=this,t=this.props,n=(t.dialogType,t.modelData),o=t.isInput,r=this.state.io;return r.data=o?r.data||n:n,React.createElement("div",{className:"form-group"},React.createElement("label",null,"Data:"),React.createElement("textarea",{className:"form-control dataIOArea",value:r.data,onChange:function(t){r.data=t.target.value,e.setState(function(){})}}))}},{key:"renderBody",value:function(){var e=this.props.dialogType;return this.getModel(e).render()}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.dialogType,o=(e.modelData,this.getModel(n));return React.createElement(l.default,{id:t,title:o.title,onClose:this.onClose.bind(this),onOK:this.onOK.bind(this),renderBody:this.renderBody.bind(this)})}}]),t}(React.Component);u.propTypes={id:React.PropTypes.string.isRequired,dialogType:React.PropTypes.string.isRequired,isInput:React.PropTypes.bool.isRequired,onOKUpload:React.PropTypes.func.isRequired},t.default=u});
;/*!view/index.jsx*/
define("view/index.jsx",function(t){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=t("view/Toolbar.jsx"),l=e(s),u=t("view/ContentTable.jsx"),p=e(u),r=t("view/PopupDialog.jsx"),d=e(r);!function(){var e=document.getElementById("IDSectionMain"),s=t("module/pwb/index");s.init();var u=s.modules,r=u.content,c=(u.data,u.dataio),h=function(t){function e(t,i){n(this,e);var a=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));return a.state={showInput:!1,showContent:!1,popupModel:{id:"myModal",type:"",data:""},contents:r.retrieve()},a}return i(e,t),a(e,[{key:"toggleAdd",value:function(t){this.setState({showInput:t})}},{key:"toggleShowContent",value:function(t){this.setState({showContent:t})}},{key:"toggleSetting",value:function(){this.state.popupModel.type="setting",this.state.popupModel.data="",this.setState({popupModel:this.state.popupModel})}},{key:"toggleDownload",value:function(){this.state.popupModel.type="io",this.state.popupModel.data=c.output(r.retrieve()),this.state.popupModel.isInput=!1,this.setState({popupModel:this.state.popupModel})}},{key:"toggleUpload",value:function(){this.state.popupModel.type="io",this.state.popupModel.data="",this.state.popupModel.isInput=!0,this.setState({popupModel:this.state.popupModel})}},{key:"createContent",value:function(t){var e=r.create(t);e&&(s.save(),this.notifyContentChanged())}},{key:"createContentWithString",value:function(t){var e=c.input(t);e&&Array.isArray(e)&&(e.forEach(function(t){r.create(t)}),s.save(),this.notifyContentChanged())}},{key:"updateContent",value:function(t){r.update(t),s.save(),this.notifyContentChanged()}},{key:"deleteContent",value:function(t){r.del(t),s.save(),this.notifyContentChanged()}},{key:"notifyContentChanged",value:function(){this.setState({contents:r.retrieve()})}},{key:"render",value:function(){var t=this.state,e=t.showInput,n=t.showContent,o=t.popupModel;return React.createElement("div",{className:"row"},React.createElement("div",{className:"col-md-12"},React.createElement(l.default,{toggleAdd:this.toggleAdd.bind(this),toggleShowContent:this.toggleShowContent.bind(this),toggleSetting:this.toggleSetting.bind(this),modalDialogID:o.id,toggleDownload:this.toggleDownload.bind(this),toggleUpload:this.toggleUpload.bind(this)}),React.createElement(p.default,{id:"ContentTable",showInput:e,showContent:n,createContent:this.createContent.bind(this),updateContent:this.updateContent.bind(this),deleteContent:this.deleteContent.bind(this),contents:this.state.contents}),React.createElement(d.default,{id:o.id,dialogType:o.type,modelData:o.data,isInput:o.isInput,onOKUpload:this.createContentWithString.bind(this)})))}}]),e}(React.Component);ReactDOM.render(React.createElement(h,null),e)}()});