
(function(){

  var IDSectionMain = $('#IDSectionMain');

  const initialState = {
    title: "",
    tag: "",
    content: ""
  };

  class InputPanel extends React.Component {
    constructor() {
      super();

      this.state = initialState;
    }

    componentDidMount() {
    }

    handleChange(event) {
      var 
        targetID = event.target.id, 
        value = event.target.value;

      switch (targetID) {
        case 'IDTitle':
          this.setState({ title: value });
          break;
        case 'IDTag':
          this.setState({ tag: value });
          break;
        case 'IDContent':
          this.setState({ content: value });
          break;
        default:
          break;
      }
    }

    handleClickFinish(event) {
      IDSectionMain.append($(`<p>title: ${this.state.title}|tag: ${this.state.tag}|content: ${this.state.content}</p>`))
    }

    handleReset() {
      this.setState(initialState);
    }

    render() {

      return (
        <div>
          <fieldset>
            <div><label>标 题<input id="IDTitle" type="text" value={this.state.title} onChange={(e) => this.handleChange(e)} /></label></div>
            <div><label>标 签<input id="IDTag" type="text" value={this.state.tag} onChange={(e) => this.handleChange(e)} /></label></div>
            <div><label>密 码<input id="IDContent" type="password" value={this.state.content} onChange={(e) => this.handleChange(e)} /></label></div>
            <div>
              <input type="button" value="完 成" onClick={(e) => this.handleClickFinish(e) } />
              <input type="button" value="重 置" onClick={() => this.handleReset() }/>
            </div>
          </fieldset>
        </div>
      );
    }
  }

  ReactDOM.render(
    <InputPanel></InputPanel>,
    IDSectionMain[0]
  );
}());