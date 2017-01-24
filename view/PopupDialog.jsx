import Popup from 'Popup'

class PopupDialog extends React.Component {
  
  constructor(props, context) {
    super(props, context);

    this.state = {
      id: this.props.id,
      setting: {
        title: 'Setting',
        data: '',
        render: this.renderSetting.bind(this),

      },
      io: {
        title: 'Download & Upload',
        data: '',
        render: this.renderIO.bind(this)
      }
    };
  }

  getModel(dialogType) {
    return this.state[dialogType] ? this.state[dialogType] : this.state['setting'];
  }

  onClose() {
    this.state.io.data = '';
    this.state.io.isInput = false;
  }  
  onOK() {
    this.state.io.data = '';  
    this.state.io.isInput = false;
  }
  renderSetting() {
    return (
      <div className="form-group">
        <label>
          Password
        </label>
        <input type="password" className="form-control" placeholder="enter Password" />
      </div>      
    );
  }
  renderIO() {
    const { dialogType, modelData, isInput } = this.props;    
    let dialogModel = this.state.io;

    if (isInput) {
      dialogModel.data = dialogModel.data || modelData;
    } else {
      // not change data
      dialogModel.data = modelData;
    }

    return (
      <div className="form-group">
        <label>
          Data:
        </label>
        <textarea className="form-control dataIOArea" 
          value={dialogModel.data} 
          onChange={(e)=>{ 
            dialogModel.data = e.target.value;             
            this.setState(() => {
              io: dialogModel
            });
          }} 
        ></textarea>
      </div>      
    );
  }
  
  renderBody() {
    const { dialogType } = this.props;
    return this.getModel(dialogType).render();
  }

  render() {
    const {id, dialogType, modelData} = this.props;
    let dialogModel = this.getModel(dialogType);

    return ( 
      <Popup id={id} 
        title={dialogModel.title}
        onClose={this.onClose.bind(this)} 
        onOK={this.onOK.bind(this)} 
        renderBody={this.renderBody.bind(this)}         
      />
    );
  }
}

// PopupDialog.propTypes = {
// };

export default PopupDialog;