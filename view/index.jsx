
import Button from './Button'

// (function($){

  // const buttonStyles = {
  //   // border: '1px solid #eee',
  //   // borderRadius: 3,
  //   // backgroundColor: '#FFFFFF',
  //   // cursor: 'pointer',
  //   // fontSize: 15,
  //   // padding: '3px 10px',
  //   // margin: 10,
  // };

  // const Button = ({ children, onClick }) => (
  //   <button
  //     style={buttonStyles}
  //     onClick={onClick}
  //   >
  //     {children}
  //   </button>
  // );
  // Button.propTypes = {
  //   children: React.PropTypes.string.isRequired,
  //   onClick: React.PropTypes.func,
  // };


  var IDSectionMain = document.getElementById('IDSectionMain'); //$('#IDSectionMain');
  console.log(IDSectionMain);

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
      // IDSectionMain.append($(`<p>title: ${this.state.title}|tag: ${this.state.tag}|content: ${this.state.content}</p>`))
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
    <div>
    <InputPanel></InputPanel>
    <Button>sdfsdfs</Button>
    </div>,
    IDSectionMain
  );

// }(jQuery));