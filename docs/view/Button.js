define('view/Button.jsx', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  
  var buttonStyles = {
    // border: '1px solid #eee',
    // borderRadius: 3,
    // backgroundColor: '#FFFFFF',
    // cursor: 'pointer',
    // fontSize: 15,
    // padding: '3px 10px',
    // margin: 10,
  };
  
  var Button = function Button(_ref) {
    var children = _ref.children,
        onClick = _ref.onClick;
    return React.createElement(
      "button",
      {
        style: buttonStyles,
        onClick: onClick
      },
      children
    );
  };
  Button.propTypes = {
    children: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func
  };
  
  exports.default = Button;

});
