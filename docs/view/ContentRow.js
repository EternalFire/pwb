define('view/ContentRow.jsx', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var ContentRow = function (_React$Component) {
    _inherits(ContentRow, _React$Component);
  
    function ContentRow(props, context) {
      _classCallCheck(this, ContentRow);
  
      var _this = _possibleConstructorReturn(this, (ContentRow.__proto__ || Object.getPrototypeOf(ContentRow)).call(this, props, context));
  
      var data = _this.props.data;
  
  
      _this.state = {
        clicked: {},
        data: data,
        isEditing: false
      };
      return _this;
    }
  
    // click the element to change data
  
  
    _createClass(ContentRow, [{
      key: 'handleClickData',
      value: function handleClickData(e) {
        var dataIndex = e.target.dataset.index;
        var clicked = this.state.clicked;
        clicked[dataIndex] = true;
  
        this.setState({
          clicked: clicked
        });
      }
    }, {
      key: 'handleKeyDownData',
      value: function handleKeyDownData(e) {
        this.state.isEditing = true;
  
        if (e.which == 13) {
          var dataIndex = e.target.dataset.index;
          this.changeData(dataIndex);
        }
      }
    }, {
      key: 'handleBlur',
      value: function handleBlur(e) {
        // if (this.state.isEditing) {      
        var dataIndex = e.target.dataset.index;
        this.changeData(dataIndex);
        // } else {
        //   this.setState({isEditing: false});
        // }
      }
    }, {
      key: 'handleChange',
      value: function handleChange(e) {
        var dataIndex = e.target.dataset.index;
  
        this.state.data[dataIndex] = e.target.value;
  
        this.setState({
          data: this.state.data
        });
      }
    }, {
      key: 'changeData',
      value: function changeData(index) {
        console.log('changeData >>> ', this.state.data[index]);
  
        this.state.clicked[index] = null;
        this.setState({
          clicked: this.state.clicked,
          isEditing: false
        });
  
        // update data
        this.props.updateData(this.state.data);
      }
    }, {
      key: 'handleDelete',
      value: function handleDelete() {
        this.props.deleteData(this.state.data);
      }
    }, {
      key: 'handlePaste',
      value: function handlePaste(e) {
        // console.log(e.target);
        // const dataIndex = e.target.dataset.index;
        // this.state.data[dataIndex] = e.target.value;
  
        // this.setState({
        //   data: this.state.data
        // })
      }
    }, {
      key: 'getValue',
      value: function getValue(index) {
        var decryptData = this.props.decryptData;
  
        var result = '';
  
        if (this.state.isEditing) {
          result = this.state.data[index];
        } else {
          result = decryptData(this.state.data)[index];
        }
  
        // console.log('result ', result);
        return result;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        // console.log('Row Update -> render');
  
        var clicked = this.state.clicked;
        var _props = this.props,
            data = _props.data,
            showData = _props.showData;
  
        this.state.data = data;
  
        return React.createElement(
          'tr',
          null,
          this.state.data.map(function (e, i, array) {
            return React.createElement(
              'td',
              null,
              i === 0 ?
              // 序号列
              React.createElement(
                'span',
                null,
                e
              ) : clicked[i] ?
              // 可修改
              React.createElement('input', { type: 'text',
                autoFocus: 'true',
                value: _this2.getValue(i)
                // value={e}
                , 'data-index': i,
                onKeyDown: _this2.handleKeyDownData.bind(_this2),
                onBlur: _this2.handleBlur.bind(_this2),
                onChange: _this2.handleChange.bind(_this2),
                onPaste: _this2.handlePaste.bind(_this2)
              }) :
              // {e ? (e) : '-'}
              React.createElement(
                'span',
                { onClick: _this2.handleClickData.bind(_this2),
                  'data-index': i
                },
                showData(array, i)
              )
            ); // end return
          }),
          React.createElement(
            'td',
            null,
            React.createElement(
              'button',
              { className: 'btn btn-danger ghost',
                onClick: this.handleDelete.bind(this)
              },
              'X'
            )
          )
        );
      }
    }]);
  
    return ContentRow;
  }(React.Component);
  
  ContentRow.propTypes = {
    data: React.PropTypes.array.isRequired,
    updateData: React.PropTypes.func.isRequired,
    deleteData: React.PropTypes.func.isRequired,
    decryptData: React.PropTypes.func.isRequired,
    showData: React.PropTypes.func.isRequired
  };
  
  exports.default = ContentRow;

});
