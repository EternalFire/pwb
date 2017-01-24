
import ToolbarItemToggle from 'ToolbarItemToggle'
import ToolbarItemSearch from 'ToolbarItemSearch'

class Toolbar extends React.Component {
  
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      toggleAdd, 
      toggleShowContent, 
      toggleSetting, 
      showSetting,
      settingDialogID
    } = this.props;

    return (
      <div className="panel panel-default toolbar">
        <div className="panel-body">

          <div className="input-group toolbarLine">
            <ToolbarItemToggle icon="glyphicon glyphicon-plus" 
              toggle={toggleAdd} 
              text="Add" 
            />

            <ToolbarItemToggle icon="glyphicon glyphicon-eye-open" 
              toggle={toggleShowContent} 
              text="show" 
            />

            <ToolbarItemToggle icon="glyphicon glyphicon-cog" 
              toggle={toggleSetting} 
              text="setting" 
              data-toggle="modal" 
              data-target={"#"+settingDialogID} 
              data-backdrop="static" 
              data-keyboard="true" 
              isOn={showSetting} 
            />

            <ToolbarItemToggle icon="glyphicon glyphicon-download" 
              text="download"
            />

            <ToolbarItemToggle icon="glyphicon glyphicon-upload" 
              text="upload"
            />
          </div>

          <div className="input-group toolbarLine">
            <ToolbarItemSearch search={(text)=>(text)} />
          </div>
        </div>
      </div>
    )
  }
}

Toolbar.propTypes = {
  toggleAdd: React.PropTypes.func.isRequired,
  toggleShowContent: React.PropTypes.func.isRequired,
  toggleSetting: React.PropTypes.func.isRequired,
  showSetting: React.PropTypes.bool
};

export default Toolbar;