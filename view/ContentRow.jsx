
class ContentRow extends React.Component {

  constructor(props, context) {
    super(props, context);

    const { data } = this.props;

    this.state = {
      clicked: {},
      data: data,
      isEditing: false
    };
  }

  // click the element to change data
  handleClickData(e) {
    const dataIndex = e.target.dataset.index;
    let clicked = this.state.clicked;
    clicked[dataIndex] = true;

    this.setState({
      clicked: clicked
    })
  }

  handleKeyDownData(e) {
    this.state.isEditing = true;

    if (e.which == 13) {
      const dataIndex = e.target.dataset.index;
      this.changeData(dataIndex);
    }
  }

  handleBlur(e) {
    // if (this.state.isEditing) {      
      const dataIndex = e.target.dataset.index;
      this.changeData(dataIndex);
    // } else {
    //   this.setState({isEditing: false});
    // }
  }

  handleChange(e) {
    const dataIndex = e.target.dataset.index;

    this.state.data[dataIndex] = e.target.value;

    this.setState({
      data: this.state.data
    })
  }

  changeData(index) {
    console.log('changeData >>> ', this.state.data[index])

    this.state.clicked[index] = null;
    this.setState({
      clicked: this.state.clicked,
      isEditing: false
    })

    // update data
    this.props.updateData(this.state.data);
  }

  handleDelete() {
    this.props.deleteData(this.state.data);
  }

  handlePaste(e) {
    // console.log(e.target);
    // const dataIndex = e.target.dataset.index;
    // this.state.data[dataIndex] = e.target.value;

    // this.setState({
    //   data: this.state.data
    // })
  }

  getValue(index) {
    const { decryptData } = this.props;
    let result = '';

    if (this.state.isEditing) {
      result = this.state.data[index];
    } else {
      result = decryptData(this.state.data)[index];
    }

    // console.log('result ', result);
    return result;
  }

  render() {
    console.log('Row Update -> render');

    const { clicked } = this.state;
    const { data, showData } = this.props;
    this.state.data = data;

    return (
      <tr>
        {this.state.data.map((e, i, array) => {
            return (<td>
              { i === 0 ? (
                  // 序号列
                  <span>{e}</span>
                ) 
                : ( clicked[i] ? (                  
                    // 可修改
                    <input type="text" 
                      autoFocus="true" 
                      value={this.getValue(i)} 
                      // value={e}
                      data-index={i}
                      onKeyDown={this.handleKeyDownData.bind(this)}
                      onBlur={this.handleBlur.bind(this)}
                      onChange={this.handleChange.bind(this)}
                      onPaste={this.handlePaste.bind(this)}
                    />
                  ) 
                  : (
                    // {e ? (e) : '-'}
                    <span onClick={this.handleClickData.bind(this)} 
                      data-index={i} 
                    >                      
                      {showData(array, i)}
                    </span>
                  )
                )
              }
            </td>) // end return
          })
        }
        <td>
          <button className="btn btn-danger ghost" 
            onClick={this.handleDelete.bind(this)}
          >
            X
          </button>
        </td>
      </tr>
    )
  }
}

ContentRow.propTypes = {
  data: React.PropTypes.array.isRequired,
  updateData: React.PropTypes.func.isRequired,
  deleteData: React.PropTypes.func.isRequired,
  decryptData: React.PropTypes.func.isRequired,
  showData: React.PropTypes.func.isRequired
}

export default ContentRow;