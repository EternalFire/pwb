
import Toolbar from 'Toolbar'
import ContentTable from 'ContentTable'
import PopupDialog from 'PopupDialog'


(function() {

  var IDSectionMain = document.getElementById('IDSectionMain');
  
  var pwb = require('../module/pwb');
  pwb.init();
  const { content,data,dataio } = pwb.modules;


  class View extends React.Component {

    constructor(props, context) {
      super(props, context);

      this.state = {
        showInput: false,
        showContent: false,
        popupModel: {
          id: 'myModal',
          type: '',
          data: ''
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
      this.state.popupModel.type = 'setting';
      this.state.popupModel.data = '';

      this.setState({
        popupModel: this.state.popupModel
      });
    }
    
    // onCloseSetting() {
    //   console.log('onCloseSetting', this.state.showSetting);
    // }
    
    // onSaveSetting() {
    //   console.log('onSaveSetting');
    // }

    toggleDownload() {
      this.state.popupModel.type = 'io';
      this.state.popupModel.data = dataio.output(content.retrieve());
      this.state.popupModel.isInput = false;

      this.setState({
        popupModel: this.state.popupModel
      });
    }

    toggleUpload() {
      this.state.popupModel.type = 'io';
      this.state.popupModel.data = '';
      this.state.popupModel.isInput = true;
      
      this.setState({
        popupModel: this.state.popupModel
      });
    }

    createContent(param) {
      var result = content.create(param);
      if (result) {
        pwb.save();
      }
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
      const {showInput, showContent, popupModel} = this.state

      return (
        <div className="row">
          <div className="col-md-12">
          
            <Toolbar 
              toggleAdd={this.toggleAdd.bind(this)}
              toggleShowContent={this.toggleShowContent.bind(this)} 
              toggleSetting={this.toggleSetting.bind(this)}
              modalDialogID={popupModel.id}
              toggleDownload={this.toggleDownload.bind(this)} 
              toggleUpload={this.toggleUpload.bind(this)} 
            />

            <ContentTable id="ContentTable" 
              showInput={showInput} 
              showContent={showContent} 
              content={content}
              createContent={this.createContent.bind(this)}
              updateContent={this.updateContent.bind(this)}
              deleteContent={this.deleteContent.bind(this)}
            />

            <PopupDialog id={popupModel.id} 
              // onSaveSetting={this.onSaveSetting.bind(this)}
              // onCloseSetting={this.onCloseSetting.bind(this)} 
              dialogType={popupModel.type} 
              modelData={popupModel.data} 
              isInput={popupModel.isInput}
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