
import ToolbarItemToggle from 'ToolbarItemToggle'
import ToolbarItemSearch from 'ToolbarItemSearch'

class Toolbar extends React.Component {
  
  constructor(props, context) {
    super(props, context);

  }

  render() {

    return (
      <div className="panel panel-default toolbar">
        <ToolbarItemToggle icon="glyphicon glyphicon-edit" toggle={(isOn)=>{this.props.toggleEdit(isOn)}} text="edit" />
        <ToolbarItemToggle icon="glyphicon glyphicon-eye-open" toggle={(isOn)=>{this.props.toggleShowContent(isOn)}} text="show" />
        <ToolbarItemToggle icon="glyphicon glyphicon-cog" toggle={(isOn)=>{console.log('index----', isOn)}} text="setting" />
        <ToolbarItemSearch search={(text)=>console.log('get: ', text)}/>
      </div>
    )
  }
}

Toolbar.propTypes = {
  toggleEdit: React.PropTypes.func.isRequired,
  toggleShowContent: React.PropTypes.func.isRequired
};

export default Toolbar;