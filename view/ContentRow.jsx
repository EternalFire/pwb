
class ContentRow extends React.Component {

  constructor(props, context) {
    super(props, context);

    const { data } = this.props;

    this.state = {
      clicked: {},
      data: data
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
    if (e.which == 13) {
      const dataIndex = e.target.dataset.index;
      this.changeData(dataIndex);
    }
  }

  handleBlur(e) {
    const dataIndex = e.target.dataset.index;
    this.changeData(dataIndex);
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
      clicked: this.state.clicked
    })

    // update data
    this.props.update(this.state.data);
  }

  handleDelete() {
    this.props.deleteData(this.state.data);
  }

  render() {
    const { clicked } = this.state;
    const { data } = this.props;
    this.state.data = data;

    return (
      <tr>
        {
          data.map((e, i) => {
            return (<td>
              { i === 0 ? (
                  <span>{e}</span>
                ) 
                : ( clicked[i] ? (
                    <input type="text" 
                      autoFocus="true" 
                      value={e} 
                      data-index={i}
                      onKeyDown={this.handleKeyDownData.bind(this)}
                      onBlur={this.handleBlur.bind(this)}
                      onChange={this.handleChange.bind(this)}
                    />
                  ) 
                  : (
                    <span onClick={this.handleClickData.bind(this)} 
                      data-index={i}                   
                    >
                      {e}
                    </span>
                  ))
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
  update: React.PropTypes.func.isRequired,
  deleteData: React.PropTypes.func.isRequired
}

export default ContentRow;