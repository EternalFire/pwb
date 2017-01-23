
class ToolbarItemToggle extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isOn: false
    };
  }

  componentDidMount() {
    console.log('ToolbarItemToggle', this.props);

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

    this.props.toggle(isOn);

    $(this.refs['btn']).toggleClass('active');
  }

  render() {
    const { icon, text } = this.props;

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