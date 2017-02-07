define('view/Popup.jsx', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var Popup = function (_React$Component) {
    _inherits(Popup, _React$Component);
  
    function Popup(props, context) {
      _classCallCheck(this, Popup);
  
      return _possibleConstructorReturn(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props, context));
    }
  
    _createClass(Popup, [{
      key: "render",
      value: function render() {
        var _props = this.props,
            id = _props.id,
            title = _props.title,
            onClose = _props.onClose,
            onCancel = _props.onCancel,
            onOK = _props.onOK,
            cancelText = _props.cancelText,
            okText = _props.okText,
            renderBody = _props.renderBody;
  
  
        return React.createElement(
          "div",
          { className: "modal fade", tabindex: "-1", role: "dialog", id: id },
          React.createElement(
            "div",
            { className: "modal-dialog", role: "document" },
            React.createElement(
              "div",
              { className: "modal-content" },
              React.createElement(
                "div",
                { className: "modal-header" },
                React.createElement(
                  "button",
                  { type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close",
                    onClick: function onClick() {
                      if (onClose) {
                        return onClose();
                      }
                    }
                  },
                  React.createElement(
                    "span",
                    { "aria-hidden": "true" },
                    "\xD7"
                  )
                ),
                React.createElement(
                  "h4",
                  { className: "modal-title" },
                  title ? title : 'title'
                )
              ),
              React.createElement(
                "div",
                { className: "modal-body" },
                renderBody ? renderBody() : null
              ),
              React.createElement(
                "div",
                { className: "modal-footer" },
                React.createElement(
                  "button",
                  { type: "button", className: "btn btn-default btn-lg", "data-dismiss": "modal",
                    onClick: function onClick() {
                      if (onCancel) {
                        return onCancel();
                      }
  
                      if (onClose) {
                        return onClose();
                      }
                    }
                  },
                  cancelText ? cancelText : 'cancel'
                ),
                React.createElement(
                  "button",
                  { type: "button", className: "btn btn-primary btn-lg", "data-dismiss": "modal",
                    onClick: function onClick() {
                      if (onOK) {
                        return onOK();
                      }
                    }
                  },
                  okText ? okText : 'ok'
                )
              )
            )
          )
        );
      }
    }]);
  
    return Popup;
  }(React.Component);
  
  Popup.propTypes = {
    id: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    onClose: React.PropTypes.func
  };
  
  exports.default = Popup;

});
