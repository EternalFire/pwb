
import Toolbar from 'Toolbar'
import ContentTable from 'ContentTable'

(function() {

  var IDSectionMain = document.getElementById('IDSectionMain');
  
  var pwb = require('../module/pwb');

  const { content,data } = require('../module/pwb').modules

  pwb.init();

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

    createContent(param) {
      content.create(param);
      pwb.save();
    }

    updateContent(param) {
      content.update(param);
      pwb.save();
    }

    deleteContent(param) {
      content.del(param);
      pwb.save();
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
              createContent={this.createContent.bind(this)}
              updateContent={this.updateContent.bind(this)}
              deleteContent={this.deleteContent.bind(this)}
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