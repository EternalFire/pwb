define('view/Toolbar.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  var _ToolbarItemToggle = require('view/ToolbarItemToggle.jsx');
  
  var _ToolbarItemToggle2 = _interopRequireDefault(_ToolbarItemToggle);
  
  var _ToolbarItemSearch = require('view/ToolbarItemSearch.jsx');
  
  var _ToolbarItemSearch2 = _interopRequireDefault(_ToolbarItemSearch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var Toolbar = function (_React$Component) {
    _inherits(Toolbar, _React$Component);
  
    function Toolbar(props, context) {
      _classCallCheck(this, Toolbar);
  
      return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(this, props, context));
    }
  
    _createClass(Toolbar, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            toggleAdd = _props.toggleAdd,
            toggleShowContent = _props.toggleShowContent,
            toggleSetting = _props.toggleSetting,
            modalDialogID = _props.modalDialogID,
            toggleDownload = _props.toggleDownload,
            toggleUpload = _props.toggleUpload;
  
  
        var dialogID = '#' + modalDialogID;
  
        return React.createElement(
          'div',
          { className: 'panel panel-default toolbar' },
          React.createElement(
            'div',
            { className: 'panel-heading' },
            React.createElement(
              'h3',
              { 'class': 'panel-title' },
              'Toolbar'
            )
          ),
          React.createElement(
            'div',
            { className: 'panel-body' },
            React.createElement(
              'div',
              { className: 'input-group toolbarLine' },
              React.createElement(_ToolbarItemToggle2.default, { icon: 'glyphicon glyphicon-plus',
                toggle: toggleAdd,
                text: 'Add'
              }),
              React.createElement(_ToolbarItemToggle2.default, { icon: 'glyphicon glyphicon-eye-open',
                toggle: toggleShowContent,
                text: 'show'
              }),
              React.createElement(_ToolbarItemToggle2.default, { icon: 'glyphicon glyphicon-cog',
                toggle: toggleSetting,
                text: 'setting',
                'data-toggle': 'modal',
                'data-target': dialogID,
                'data-backdrop': 'static',
                isOn: false
              }),
              React.createElement(_ToolbarItemToggle2.default, { icon: 'glyphicon glyphicon-download',
                text: 'download',
                toggle: toggleDownload,
                'data-toggle': 'modal',
                'data-target': dialogID,
                'data-backdrop': 'static',
                isOn: false
              }),
              React.createElement(_ToolbarItemToggle2.default, { icon: 'glyphicon glyphicon-upload',
                text: 'upload',
                toggle: toggleUpload,
                'data-toggle': 'modal',
                'data-target': dialogID,
                'data-backdrop': 'static',
                isOn: false
              })
            ),
            React.createElement(
              'div',
              { className: 'input-group toolbarLine' },
              React.createElement(_ToolbarItemSearch2.default, { search: function search(text) {
                  return text;
                } })
            )
          )
        );
      }
    }]);
  
    return Toolbar;
  }(React.Component);
  
  Toolbar.propTypes = {
    toggleAdd: React.PropTypes.func.isRequired,
    toggleShowContent: React.PropTypes.func.isRequired,
    toggleSetting: React.PropTypes.func.isRequired
  };
  
  exports.default = Toolbar;

});
