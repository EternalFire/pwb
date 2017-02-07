define('view/PopupDialog.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  var _Popup = require('view/Popup.jsx');
  
  var _Popup2 = _interopRequireDefault(_Popup);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var PopupDialog = function (_React$Component) {
    _inherits(PopupDialog, _React$Component);
  
    function PopupDialog(props, context) {
      _classCallCheck(this, PopupDialog);
  
      var _this = _possibleConstructorReturn(this, (PopupDialog.__proto__ || Object.getPrototypeOf(PopupDialog)).call(this, props, context));
  
      _this.state = {
        id: _this.props.id,
        setting: {
          title: 'Setting',
          data: '',
          render: _this.renderSetting.bind(_this),
          onOK: function onOK() {},
          onClose: function onClose() {}
        },
        io: {
          title: 'Download & Upload',
          data: '',
          render: _this.renderIO.bind(_this),
          onOK: function onOK() {
            var _this$props = _this.props,
                isInput = _this$props.isInput,
                onOKUpload = _this$props.onOKUpload;
  
            if (isInput) {
              onOKUpload ? onOKUpload(_this.state.io.data) : null;
            }
  
            _this.state.io.data = '';
          },
          onClose: function onClose() {
            _this.state.io.data = '';
          }
        }
      };
      return _this;
    }
  
    _createClass(PopupDialog, [{
      key: 'getModel',
      value: function getModel(dialogType) {
        return this.state[dialogType] ? this.state[dialogType] : this.state['setting'];
      }
    }, {
      key: 'onClose',
      value: function onClose() {
        var dialogType = this.props.dialogType;
  
        this.getModel(dialogType).onClose();
      }
    }, {
      key: 'onOK',
      value: function onOK() {
        var dialogType = this.props.dialogType;
  
        this.getModel(dialogType).onOK();
      }
    }, {
      key: 'renderSetting',
      value: function renderSetting() {
        return React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            null,
            'Password'
          ),
          React.createElement('input', { type: 'password', className: 'form-control', placeholder: 'enter Password' })
        );
      }
    }, {
      key: 'renderIO',
      value: function renderIO() {
        var _this2 = this;
  
        var _props = this.props,
            dialogType = _props.dialogType,
            modelData = _props.modelData,
            isInput = _props.isInput;
  
        var dialogModel = this.state.io;
  
        if (isInput) {
          dialogModel.data = dialogModel.data || modelData;
        } else {
          // not change data
          dialogModel.data = modelData;
        }
  
        return React.createElement(
          'div',
          { className: 'form-group' },
          React.createElement(
            'label',
            null,
            'Data:'
          ),
          React.createElement('textarea', { className: 'form-control dataIOArea',
            value: dialogModel.data,
            onChange: function onChange(e) {
              dialogModel.data = e.target.value;
              _this2.setState(function () {
                io: dialogModel;
              });
            }
          })
        );
      }
    }, {
      key: 'renderBody',
      value: function renderBody() {
        var dialogType = this.props.dialogType;
  
        return this.getModel(dialogType).render();
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            id = _props2.id,
            dialogType = _props2.dialogType,
            modelData = _props2.modelData;
  
        var dialogModel = this.getModel(dialogType);
  
        return React.createElement(_Popup2.default, { id: id,
          title: dialogModel.title,
          onClose: this.onClose.bind(this),
          onOK: this.onOK.bind(this),
          renderBody: this.renderBody.bind(this)
        });
      }
    }]);
  
    return PopupDialog;
  }(React.Component);
  
  PopupDialog.propTypes = {
    id: React.PropTypes.string.isRequired,
    dialogType: React.PropTypes.string.isRequired,
    // modelData
    isInput: React.PropTypes.bool.isRequired,
    onOKUpload: React.PropTypes.func.isRequired
  };
  
  exports.default = PopupDialog;

});
