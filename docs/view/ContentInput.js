define('view/ContentInput.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var ContentInput = function (_React$Component) {
    _inherits(ContentInput, _React$Component);
  
    function ContentInput(props, context) {
      _classCallCheck(this, ContentInput);
  
      return _possibleConstructorReturn(this, (ContentInput.__proto__ || Object.getPrototypeOf(ContentInput)).call(this, props, context));
    }
  
    _createClass(ContentInput, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        // jQuery animation
        var show = this.props.show;
  
        var $node = $(this.refs['node']);
        if (show) {
          $node.show('fast').toggleClass('active');
        } else {
          $node.hide().toggleClass('active');
        }
      }
    }, {
      key: 'handleClickCreate',
      value: function handleClickCreate(e) {
        var _refs = this.refs,
            title = _refs.title,
            tag = _refs.tag,
            content = _refs.content;
        var create = this.props.create;
  
  
        create({
          title: title.value.trim(),
          tag: tag.value.trim(),
          content: content.value.trim()
        });
  
        title.value = "";
        tag.value = "";
        content.value = "";
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        var show = this.props.show;
  
  
        if (show) {
          return React.createElement(
            'tr',
            { ref: 'node' },
            React.createElement(
              'td',
              null,
              '-'
            ),
            React.createElement(
              'td',
              null,
              React.createElement('input', { type: 'text', ref: 'title' })
            ),
            React.createElement(
              'td',
              null,
              React.createElement('input', { type: 'text', ref: 'tag' })
            ),
            React.createElement(
              'td',
              null,
              React.createElement('input', { type: 'text', ref: 'content' })
            ),
            React.createElement(
              'td',
              null,
              React.createElement(
                'button',
                { className: 'btn btn-default btn-lg', onClick: function onClick(e) {
                    return _this2.handleClickCreate(e);
                  } },
                '\u521B\u5EFA'
              )
            )
          );
        }
        return null;
      }
    }]);
  
    return ContentInput;
  }(React.Component);
  
  ContentInput.propTypes = {
    show: React.PropTypes.bool.isRequired,
    create: React.PropTypes.func.isRequired
  };
  
  exports.default = ContentInput;

});
