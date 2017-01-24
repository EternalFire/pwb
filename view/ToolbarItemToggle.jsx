
class ToolbarItemToggle extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isOn: false
    };
  }

  componentDidMount() {

    // convert DOMStringMap
    Object.keys(this.props)
      .filter((key) => {
        return key.indexOf('data-') === 0;
      })
      .map((key) => {
        let m = { src: key, dst: ''};

        m.dst = key.split('-').splice(1).reduce((a, b) => {
          a = a + b[0].toUpperCase() + b.substr(1)
          return a;  
        });

        return m;
      })
      .forEach((keyMap) => {
        this.refs['btn'].dataset[keyMap.dst] = this.props[keyMap.src];
      });
  }

  handleClick() {
    let isOn = !this.state.isOn;

    this.setState({
      isOn: isOn
    });

    this.props.toggle ? this.props.toggle(isOn) : null;
  }

  toggleClass(isOn) {
    $(this.refs['btn']).toggleClass('active', isOn ? true : false);    
  }

  render() {
    const { icon, text } = this.props;    

    if (typeof this.props.isOn == 'boolean') {
      this.state.isOn = this.props.isOn;
    }
    this.toggleClass(this.state.isOn);

    return (
      <button className="btn btn-default btn-lg" 
        onClick={() => this.handleClick()} 
        ref="btn" 
      >
        <span className={icon}></span> {text}
      </button>      
    )
  }
}

export default ToolbarItemToggle;