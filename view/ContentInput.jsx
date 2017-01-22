
class ContentInput extends React.Component {

  constructor(props, context) {
    super(props, context);

  }

  componentDidUpdate() {
    // jQuery animation
    const { show } = this.props;
    const $node = $(this.refs['node']);
    if (show) {
      $node.show('fast').toggleClass('active');      
    } else {
      $node.hide().toggleClass('active');
    }
  }

  handleClickCreate(e) {
    const { title, tag, content } = this.refs;
    const { create } = this.props;

    create({
      title: title.value.trim(), 
      tag: tag.value.trim(), 
      content: content.value.trim()
    });

    title.value = "";
    tag.value = "";
    content.value = "";
  }
  
render() {
    const { show } = this.props;

    if (show) {
      return (
        <tr ref="node">
          <td>-</td>
          <td>
            <input type="text" ref="title" />
          </td>
          <td>
            <input type="text" ref="tag" />
          </td>
          <td>
            <input type="text" ref="content" />
          </td>
          <td>
            <button className="btn btn-default btn-lg" onClick={(e) => this.handleClickCreate(e)} >
              创建
            </button>
          </td>
        </tr>
      );
    }
    return null;
  }
}

ContentInput.propTypes = {
  show: React.PropTypes.bool.isRequired,
  create: React.PropTypes.func.isRequired
};

export default ContentInput;