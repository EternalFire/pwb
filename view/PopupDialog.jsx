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
        onOK: () => {},
        onClose: () => {}
      },
      io: {
        title: 'Download & Upload',
        data: '',
        render: this.renderIO.bind(this),
        onOK: () => {
          const { isInput, onOKUpload } = this.props;
          if (isInput) {
            onOKUpload ? onOKUpload(this.state.io.data) : null;
          }

          this.state.io.data = '';
        },
        onClose: () => {
          this.state.io.data = '';
        }
      }
    };
  }

  getModel(dialogType) {
    return this.state[dialogType] ? this.state[dialogType] : this.state['setting'];
  }

  onClose() {
    const { dialogType } = this.props;
    this.getModel(dialogType).onClose();
  }  
  onOK() {
    const { dialogType } = this.props;
    this.getModel(dialogType).onOK();
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

PopupDialog.propTypes = {
  id: React.PropTypes.string.isRequired,
  dialogType: React.PropTypes.string.isRequired,
  // modelData
  isInput: React.PropTypes.bool.isRequired,
  onOKUpload: React.PropTypes.func.isRequired
};

export default PopupDialog;