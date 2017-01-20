
import ContentRow from 'ContentRow'
import ContentInput from 'ContentInput'


class ContentTable extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      content: this.props.content
    };
  }

  componentDidUpdate() {

  }

  renderTitle() {
    return (
      <tr className="info">
        <th>#</th>
        <th>标题</th>
        <th>标签</th>
        <th>内容</th>
        <th></th>
      </tr> 
    )
  }
  
  renderContent() {
    const { showContent } = this.props;
    let contents = this.state.content.retrieve();  

    if (contents) {
      return (
        contents.map((e, i) => {          
          // let content = showContent ? e.content : '******';
          let content = e.content;

          return <ContentRow 
            data={[e.id, e.title, e.tag, content]} 

            update={(dataToUpdate) => {
              let i = 0;
              this.state.content.update({
                id: dataToUpdate[i++],
                title: dataToUpdate[i++],
                tag: dataToUpdate[i++],
                content: dataToUpdate[i++]
              });
            }} 
            
            deleteData={(dataToDelete) => {
              let contentObject = this.state.content;

              contentObject.del({
                id: dataToDelete[0]
              });
              
              this.setState({
                content: contentObject
              });
            }}
          />
        })
      )
    } else {
      return (
        <ContentRow data={[]}/>
      )
    }
  }

  renderInput() {
    let contentObject = this.state.content;
    const showInput = this.props.showInput;

    return (<ContentInput 
      show={showInput} 
      create={(titleValue, tagValue, contentValue) => {

        contentObject.create({
          title: titleValue, 
          tag: tagValue, 
          content: contentValue 
        }); 

        this.setState({
          content: contentObject
        })
      }}
    />)
  }

  render() {
    const { id } = this.props;

    return (
      <table className="table table-hover"  id={id}>
        <thead>
          {this.renderTitle()}
        </thead>
        <tbody>
          {this.renderInput()}
          {this.renderContent()}
        </tbody>
      </table>
    )
  }
}

ContentTable.propTypes = {
  id: React.PropTypes.string.isRequired,
  showInput: React.PropTypes.bool.isRequired,
  showContent: React.PropTypes.bool.isRequired,
  content: React.PropTypes.object.isRequired
};

export default ContentTable;