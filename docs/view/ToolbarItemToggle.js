define('view/ToolbarItemToggle.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var ToolbarItemToggle = function (_React$Component) {
    _inherits(ToolbarItemToggle, _React$Component);
  
    function ToolbarItemToggle(props, context) {
      _classCallCheck(this, ToolbarItemToggle);
  
      var _this = _possibleConstructorReturn(this, (ToolbarItemToggle.__proto__ || Object.getPrototypeOf(ToolbarItemToggle)).call(this, props, context));
  
      _this.state = {
        isOn: false
      };
      return _this;
    }
  
    _createClass(ToolbarItemToggle, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
  
        // convert DOMStringMap
        Object.keys(this.props).filter(function (key) {
          return key.indexOf('data-') === 0;
        }).map(function (key) {
          var m = { src: key, dst: '' };
  
          m.dst = key.split('-').splice(1).reduce(function (a, b) {
            a = a + b[0].toUpperCase() + b.substr(1);
            return a;
          });
  
          return m;
        }).forEach(function (keyMap) {
          _this2.refs['btn'].dataset[keyMap.dst] = _this2.props[keyMap.src];
        });
      }
    }, {
      key: 'handleClick',
      value: function handleClick() {
        var isOn = !this.state.isOn;
  
        this.setState({
          isOn: isOn
        });
  
        this.props.toggle ? this.props.toggle(isOn) : null;
      }
    }, {
      key: 'toggleClass',
      value: function toggleClass(isOn) {
        $(this.refs['btn']).toggleClass('active', isOn ? true : false);
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;
  
        var _props = this.props,
            icon = _props.icon,
            text = _props.text;
  
  
        if (typeof this.props.isOn == 'boolean') {
          this.state.isOn = this.props.isOn;
        }
        this.toggleClass(this.state.isOn);
  
        return React.createElement(
          'button',
          { className: 'btn btn-default btn-lg',
            onClick: function onClick() {
              return _this3.handleClick();
            },
            ref: 'btn'
          },
          React.createElement('span', { className: icon }),
          ' ',
          text
        );
      }
    }]);
  
    return ToolbarItemToggle;
  }(React.Component);
  
  exports.default = ToolbarItemToggle;

});
