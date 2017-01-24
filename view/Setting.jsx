import Popup from 'Popup'

class Setting extends React.Component {
  
  constructor(props, context) {
    super(props, context);

    this.state = {
      id: this.props.id,
      passwd: ''
    };
  }

  onCloseSetting() {
    this.props.onCloseSetting();
  }  
  onSaveSetting() {
    this.props.onSaveSetting();
  }
  renderSetting() {
    return (
      <div className="form-group">
        <label>
          Password(to encrypt content)
          <input type="password" className="form-control" placeholder="enter Password" />
        </label>
      </div>
    );
  }

  render() {
    const {id} = this.props;

    return (
      <Popup id={id} 
        title="Setting" 
        onClose={this.onCloseSetting.bind(this)} 
        onOK={this.onSaveSetting.bind(this)} 
        renderBody={this.renderSetting.bind(this)} 
      />
    );
  }
}

Setting.propTypes = {
  onCloseSetting: React.PropTypes.func,
  onSaveSetting: React.PropTypes.func
};

export default Setting;