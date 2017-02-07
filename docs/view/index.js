define('view/index.jsx', function(require, exports, module) {

  'use strict';
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  var _Toolbar = require('view/Toolbar.jsx');
  
  var _Toolbar2 = _interopRequireDefault(_Toolbar);
  
  var _ContentTable = require('view/ContentTable.jsx');
  
  var _ContentTable2 = _interopRequireDefault(_ContentTable);
  
  var _PopupDialog = require('view/PopupDialog.jsx');
  
  var _PopupDialog2 = _interopRequireDefault(_PopupDialog);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  (function () {
  
    var IDSectionMain = document.getElementById('IDSectionMain');
  
    var pwb = require('module/pwb/index');
    pwb.init();
    var _pwb$modules = pwb.modules,
        content = _pwb$modules.content,
        data = _pwb$modules.data,
        dataio = _pwb$modules.dataio;
  
    var View = function (_React$Component) {
      _inherits(View, _React$Component);
  
      function View(props, context) {
        _classCallCheck(this, View);
  
        var _this = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, props, context));
  
        _this.state = {
          showInput: false,
          showContent: false,
          popupModel: {
            id: 'myModal',
            type: '',
            data: ''
          },
          contents: content.retrieve()
        };
        return _this;
      }
  
      _createClass(View, [{
        key: 'toggleAdd',
        value: function toggleAdd(isOn) {
          this.setState({
            showInput: isOn
          });
        }
      }, {
        key: 'toggleShowContent',
        value: function toggleShowContent(isOn) {
          this.setState({
            showContent: isOn
          });
        }
      }, {
        key: 'toggleSetting',
        value: function toggleSetting(isOn) {
          this.state.popupModel.type = 'setting';
          this.state.popupModel.data = '';
  
          this.setState({
            popupModel: this.state.popupModel
          });
        }
  
        // onCloseSetting() {
        //   console.log('onCloseSetting', this.state.showSetting);
        // }
  
        // onSaveSetting() {
        //   console.log('onSaveSetting');
        // }
  
      }, {
        key: 'toggleDownload',
        value: function toggleDownload() {
          this.state.popupModel.type = 'io';
          this.state.popupModel.data = dataio.output(content.retrieve());
          this.state.popupModel.isInput = false;
  
          this.setState({
            popupModel: this.state.popupModel
          });
        }
      }, {
        key: 'toggleUpload',
        value: function toggleUpload() {
          this.state.popupModel.type = 'io';
          this.state.popupModel.data = '';
          this.state.popupModel.isInput = true;
  
          this.setState({
            popupModel: this.state.popupModel
          });
        }
      }, {
        key: 'createContent',
        value: function createContent(param) {
          var result = content.create(param);
          if (result) {
            pwb.save();
  
            this.notifyContentChanged();
          }
        }
      }, {
        key: 'createContentWithString',
        value: function createContentWithString(str) {
          var array = dataio.input(str);
          if (array && Array.isArray(array)) {
            array.forEach(function (e) {
              content.create(e);
            });
            pwb.save();
  
            this.notifyContentChanged();
          }
        }
      }, {
        key: 'updateContent',
        value: function updateContent(param) {
          content.update(param);
          pwb.save();
  
          this.notifyContentChanged();
        }
      }, {
        key: 'deleteContent',
        value: function deleteContent(param) {
          content.del(param);
          pwb.save();
  
          this.notifyContentChanged();
        }
      }, {
        key: 'notifyContentChanged',
        value: function notifyContentChanged() {
          this.setState({ contents: content.retrieve() });
        }
      }, {
        key: 'render',
        value: function render() {
          // console.log('render index');
          var _state = this.state,
              showInput = _state.showInput,
              showContent = _state.showContent,
              popupModel = _state.popupModel;
  
  
          return React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
              'div',
              { className: 'col-md-12' },
              React.createElement(_Toolbar2.default, {
                toggleAdd: this.toggleAdd.bind(this),
                toggleShowContent: this.toggleShowContent.bind(this),
                toggleSetting: this.toggleSetting.bind(this),
                modalDialogID: popupModel.id,
                toggleDownload: this.toggleDownload.bind(this),
                toggleUpload: this.toggleUpload.bind(this)
              }),
              React.createElement(_ContentTable2.default, { id: 'ContentTable',
                showInput: showInput,
                showContent: showContent,
                createContent: this.createContent.bind(this),
                updateContent: this.updateContent.bind(this),
                deleteContent: this.deleteContent.bind(this),
                contents: this.state.contents
              }),
              React.createElement(_PopupDialog2.default, { id: popupModel.id
                // onSaveSetting={this.onSaveSetting.bind(this)}
                // onCloseSetting={this.onCloseSetting.bind(this)} 
                , dialogType: popupModel.type,
                modelData: popupModel.data,
                isInput: popupModel.isInput,
                onOKUpload: this.createContentWithString.bind(this)
              })
            )
          );
        }
      }]);
  
      return View;
    }(React.Component);
  
    ;
  
    ReactDOM.render(React.createElement(View, null), IDSectionMain);
  })();

});
