define('view/ContentTable.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  var _ContentRow = require('view/ContentRow.jsx');
  
  var _ContentRow2 = _interopRequireDefault(_ContentRow);
  
  var _ContentInput = require('view/ContentInput.jsx');
  
  var _ContentInput2 = _interopRequireDefault(_ContentInput);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var ContentTable = function (_React$Component) {
    _inherits(ContentTable, _React$Component);
  
    function ContentTable(props, context) {
      _classCallCheck(this, ContentTable);
  
      return _possibleConstructorReturn(this, (ContentTable.__proto__ || Object.getPrototypeOf(ContentTable)).call(this, props, context));
  
      // this.state = {
  
      // };
    }
  
    _createClass(ContentTable, [{
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {}
    }, {
      key: 'renderTitle',
      value: function renderTitle() {
        // console.log('renderTitle()');
  
        return React.createElement(
          'tr',
          { className: 'info' },
          React.createElement(
            'th',
            null,
            'ID'
          ),
          React.createElement(
            'th',
            null,
            '\u6807\u9898'
          ),
          React.createElement(
            'th',
            null,
            '\u6807\u7B7E'
          ),
          React.createElement(
            'th',
            null,
            '\u5185\u5BB9'
          ),
          React.createElement('th', null)
        );
      }
    }, {
      key: 'renderContents',
      value: function renderContents() {
        // console.log('renderContents()');
        var _props = this.props,
            showContent = _props.showContent,
            updateContent = _props.updateContent,
            deleteContent = _props.deleteContent,
            contents = _props.contents;
  
  
        if (contents) {
          return contents.map(function (e, i) {
            var dataArray = [e.id, e.title, e.tag, e.content];
  
            return React.createElement(_ContentRow2.default, {
              data: dataArray,
  
              updateData: function updateData(dataToUpdate) {
                var index = 0;
  
                updateContent({
                  id: dataToUpdate[index++],
                  title: dataToUpdate[index++],
                  tag: dataToUpdate[index++],
                  content: dataToUpdate[index++]
                });
              },
  
              deleteData: function deleteData(dataToDelete) {
                deleteContent({
                  id: dataToDelete[0]
                });
              },
  
              decryptData: function decryptData(data) {
                var result = data.map(function (element) {
                  return element;
                });
                // console.log('decryptData', result);
                return result;
              },
  
              showData: function showData(data, index) {
                if (index == 3 && !showContent) {
                  return '******';
                }
  
                return data[index] ? data[index] : '-';
              }
            });
          });
        }
  
        return null;
      }
    }, {
      key: 'renderInput',
      value: function renderInput() {
        // console.log('renderInput()');
        var _props2 = this.props,
            showInput = _props2.showInput,
            createContent = _props2.createContent;
  
  
        return React.createElement(_ContentInput2.default, {
          show: showInput,
          create: createContent
        });
      }
    }, {
      key: 'render',
      value: function render() {
        // console.log('render ContentTable');
        var id = this.props.id;
  
  
        return React.createElement(
          'div',
          { className: 'panel panel-info' },
          React.createElement(
            'div',
            { className: 'panel-heading' },
            React.createElement(
              'h3',
              { 'class': 'panel-title' },
              'Data'
            )
          ),
          React.createElement(
            'div',
            { className: 'panel-body' },
            React.createElement(
              'table',
              { className: 'table table-hover', id: id },
              React.createElement(
                'thead',
                null,
                this.renderTitle()
              ),
              React.createElement(
                'tbody',
                null,
                this.renderInput(),
                this.renderContents()
              )
            )
          )
        );
      }
    }]);
  
    return ContentTable;
  }(React.Component);
  
  ContentTable.propTypes = {
    id: React.PropTypes.string.isRequired,
    showInput: React.PropTypes.bool.isRequired,
    showContent: React.PropTypes.bool.isRequired,
    createContent: React.PropTypes.func.isRequired,
    updateContent: React.PropTypes.func.isRequired,
    deleteContent: React.PropTypes.func.isRequired
  };
  
  exports.default = ContentTable;

});
