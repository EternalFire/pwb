
import Toolbar from 'Toolbar'
import ContentTable from 'ContentTable'
import Setting from 'Setting'

(function() {

  var IDSectionMain = document.getElementById('IDSectionMain');
  
  var pwb = require('../module/pwb');
  pwb.init();
  const { content,data } = pwb.modules;


  class View extends React.Component {

    constructor(props, context) {
      super(props, context);

      this.state = {
        showInput: false,
        showContent: false,
        showSetting: false,
        popupModel: {
          id: 'myModal'
        }
      };
    }
    
    toggleAdd(isOn) {
      this.setState({
        showInput: isOn
      });
    }

    toggleShowContent(isOn) {
      this.setState({
        showContent: isOn
      });
    }

    toggleSetting(isOn) {
      this.setState({showSetting: isOn});
    }

    onCloseSetting() {
      console.log('onCloseSetting', this.state.showSetting);

      this.setState({showSetting: false});
    }
    onSaveSetting() {
      console.log('onSaveSetting');

      this.setState({showSetting: false});      
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
      const {showInput, showContent, showSetting, popupModel} = this.state

      return (
        <div className="row">
          <div className="col-md-12">
          
            <Toolbar 
              toggleAdd={this.toggleAdd.bind(this)}
              toggleShowContent={this.toggleShowContent.bind(this)} 
              toggleSetting={this.toggleSetting.bind(this)}
              showSetting={showSetting} 
              settingDialogID={popupModel.id}
            />

            <ContentTable id="ContentTable" 
              showInput={showInput} 
              showContent={showContent} 
              content={content}
              createContent={this.createContent.bind(this)}
              updateContent={this.updateContent.bind(this)}
              deleteContent={this.deleteContent.bind(this)}
            />

            <Setting id={popupModel.id} 
              onSaveSetting={this.onSaveSetting.bind(this)}
              onCloseSetting={this.onCloseSetting.bind(this)} 
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