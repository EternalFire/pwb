
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
      modalDialogID,
      toggleDownload,
      toggleUpload
    } = this.props;

    let dialogID = '#' + modalDialogID;

    return (
      <div className="panel panel-default toolbar">
        <div className="panel-heading">
          <h3 class="panel-title">Toolbar</h3>
        </div>
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
              data-target={dialogID} 
              data-backdrop="static" 
              isOn={false} 
            />

            <ToolbarItemToggle icon="glyphicon glyphicon-download" 
              text="download" 
              toggle={toggleDownload} 
              data-toggle="modal" 
              data-target={dialogID} 
              data-backdrop="static" 
              isOn={false} 
            />

            <ToolbarItemToggle icon="glyphicon glyphicon-upload" 
              text="upload" 
              toggle={toggleUpload} 
              data-toggle="modal" 
              data-target={dialogID} 
              data-backdrop="static" 
              isOn={false}
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
  toggleSetting: React.PropTypes.func.isRequired
};

export default Toolbar;