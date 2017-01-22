
import ContentRow from 'ContentRow'
import ContentInput from 'ContentInput'

class ContentTable extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      content: this.props.content
    };
  }

  componentDidUpdate() {}

  renderTitle() {
    // console.log('renderTitle()');

    return (
      <tr className="info">
        <th>ID</th>
        <th>标题</th>
        <th>标签</th>
        <th>内容</th>
        <th></th>
      </tr> 
    )
  }
  
  renderContent() {
    // console.log('renderContent()');
    const { showContent, updateContent, deleteContent } = this.props;
    let contents = this.state.content.retrieve();  

    // console.log('=>', contents);
    if (contents) {
      return (
        contents.map((e, i) => {
          let dataArray = [e.id, e.title, e.tag, e.content];

          return <ContentRow 
            data={dataArray} 

            updateData={(dataToUpdate) => {
              let index = 0;

              updateContent({
                id: dataToUpdate[index++],
                title: dataToUpdate[index++],
                tag: dataToUpdate[index++],
                content: dataToUpdate[index++]
              });
            }} 
            
            deleteData={(dataToDelete) => {
              let contentObject = this.state.content;

              deleteContent({
                id: dataToDelete[0]
              });
              
              this.setState({
                content: contentObject
              });
            }} 

            decryptData={(data) => {
              let result = data.map((element) => element);              
              console.log('decryptData', result);
              return result;
            }} 

            showData={(data, index) => {
              if (index == 3 && !showContent) {
                return '******';
              }

              return data[index] ? data[index] : '-';
            }}
          />
        })
      )
    } else {
      return null;
    }
  }

  renderInput() {
    // console.log('renderInput()');

    let contentObject = this.state.content;
    const { showInput, createContent } = this.props;

    return (<ContentInput 
      show={showInput} 
      create={(param) => {

        createContent(param);

        // to render 
        this.setState({
          content: contentObject
        })
      }}
    />)
  }

  render() {
    const { id } = this.props;

    return (
      <table className="table table-hover" id={id}>
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
  content: React.PropTypes.object.isRequired,
  createContent: React.PropTypes.func.isRequired,
  updateContent: React.PropTypes.func.isRequired,
  deleteContent: React.PropTypes.func.isRequired
};

export default ContentTable;