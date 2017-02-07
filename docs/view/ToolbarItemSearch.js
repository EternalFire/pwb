define('view/ToolbarItemSearch.jsx', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var ToolbarItemSearch = function (_React$Component) {
    _inherits(ToolbarItemSearch, _React$Component);
  
    function ToolbarItemSearch(props, context) {
      _classCallCheck(this, ToolbarItemSearch);
  
      var _this = _possibleConstructorReturn(this, (ToolbarItemSearch.__proto__ || Object.getPrototypeOf(ToolbarItemSearch)).call(this, props, context));
  
      _this.state = {
        text: ''
      };
      return _this;
    }
  
    _createClass(ToolbarItemSearch, [{
      key: "handleChange",
      value: function handleChange(e) {
        this.setState({
          text: e.target.value
        });
      }
    }, {
      key: "handleKeyDown",
      value: function handleKeyDown(e) {
        // enter
        if (e.which == 13) {
          var text = this.state.text.trim();
          this.props.search(text);
        }
      }
    }, {
      key: "handleBlur",
      value: function handleBlur(e) {
        var text = this.state.text.trim();
        this.props.search(text);
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;
  
        return React.createElement(
          "div",
          null,
          React.createElement("span", { className: "glyphicon glyphicon-search" }),
          React.createElement("input", { type: "text", className: "searchInput",
            value: this.state.text,
            onChange: function onChange(e) {
              return _this2.handleChange(e);
            },
            onKeyDown: function onKeyDown(e) {
              return _this2.handleKeyDown(e);
            },
            onBlur: function onBlur(e) {
              return _this2.handleBlur(e);
            }
          })
        );
      }
    }]);
  
    return ToolbarItemSearch;
  }(React.Component);
  
  ToolbarItemSearch.propTypes = {
    search: React.PropTypes.func.isRequired
  };
  
  exports.default = ToolbarItemSearch;

});
