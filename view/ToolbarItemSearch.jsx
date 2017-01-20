

class ToolbarItemSearch extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { 
      text: '' 
    };
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleKeyDown(e) {    
    // enter
    if (e.which == 13) {
      let text = this.state.text.trim();    
      this.props.search(text);
    }
  }

  handleBlur(e) {
    let text = this.state.text.trim();
    this.props.search(text);
  }

  render() {

    return (
      <span>
        <span className="glyphicon glyphicon-search">
        </span>
        <input type="text" className="searchInput"
          value={this.state.text}
          onChange={(e) => this.handleChange(e)}
          onKeyDown={(e) => this.handleKeyDown(e)} 
          onBlur={(e)=> this.handleBlur(e)}
        />
      </span>
    )
  }
}

ToolbarItemSearch.propTypes = {
  search: React.PropTypes.func.isRequired
};

export default ToolbarItemSearch;