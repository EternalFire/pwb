$(function(){
  
  var IDSectionMain = $('#IDSectionMain');

  var InputPanel = React.createClass({
    getInitialState: function() {
      return {
        title: "",
        tag: "",
        content: "",
      };
    },

    componentDidMount: function() {

    },

    handleChange: function(event) {
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
    },

    handleClickFinish: function(event) {
      IDSectionMain.append($(`<p>title: ${this.state.title}|tag: ${this.state.tag}|content: ${this.state.content}</p>`))
    },

    render: function() {

      return (
        <div>
          <fieldset>
            <div><label>标 题<input id="IDTitle" type="text" onChange={this.handleChange}/></label></div>
            <div><label>标 签<input id="IDTag" type="text" onChange={this.handleChange}/></label></div>
            <div><label>密 码<input id="IDContent" type="password" onChange={this.handleChange}/></label></div>
            <div><input type="button" value="完 成" onClick={this.handleClickFinish} /><input type="button" value="重 置" /></div>
          </fieldset>
        </div>
      );
    }
  });

  ReactDOM.render(
    <InputPanel></InputPanel>,
    IDSectionMain[0]
  );
});