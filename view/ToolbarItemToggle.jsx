
class ToolbarItemToggle extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isOn: false
    };
  }

  handleClick() {
    let isOn = !this.state.isOn;

    this.setState({
      isOn: isOn
    });

    this.props.toggle(isOn);

    $(this.refs['btn']).toggleClass('active');
  }

  render() {
    const { icon, text } = this.props;

    return (
      <button className="btn btn-default btn-lg" onClick={() => this.handleClick()} ref="btn">
        <span className={icon}></span> {text}
      </button>      
    )
  }
}

export default ToolbarItemToggle;