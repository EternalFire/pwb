
import Toolbar from 'Toolbar'
import ContentTable from 'ContentTable'

(function() {

  var IDSectionMain = document.getElementById('IDSectionMain');
  
  const { content } = require('../module/pwb').modules

  class View extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        showInput: false,
        showContent: false,
      };
    }
    
    toggleEdit(isOn) {
      this.setState({
        showInput: isOn
      });
    }

    toggleShowContent(isOn) {
      this.setState({
        showContent: isOn
      });
    }

    render() {
      return (
        <div className="row">
          <div className="col-md-12">
            <Toolbar 
              toggleEdit={this.toggleEdit.bind(this)}
              toggleShowContent={this.toggleShowContent.bind(this)}
            />

            <ContentTable id="ContentTable" 
              showInput={this.state.showInput} 
              showContent={this.state.showContent} 
              content={content}
            />
          </div>
        </div>
      )
    }
  };

  ReactDOM.render(
    <View />, 
    IDSectionMain
  );
}());