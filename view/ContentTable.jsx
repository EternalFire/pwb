
import ContentRow from 'ContentRow'
import ContentInput from 'ContentInput'

class ContentTable extends React.Component {

  constructor(props, context) {
    super(props, context);

    // this.state = {
      
    // };
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
  
  renderContents() {
    // console.log('renderContents()');
    const { showContent, updateContent, deleteContent, contents } = this.props;
    
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
              deleteContent({
                id: dataToDelete[0]
              });              
            }} 

            decryptData={(data) => {
              let result = data.map((element) => element);              
              // console.log('decryptData', result);
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
    } 
    
    return null;
  }

  renderInput() {
    // console.log('renderInput()');
    const { showInput, createContent } = this.props;

    return (<ContentInput 
      show={showInput} 
      create={createContent}
    />)
  }

  render() {
    // console.log('render ContentTable');
    const { id } = this.props;

    return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 class="panel-title">Data</h3>
        </div>
        <div className="panel-body">      
          <table className="table table-hover" id={id}>
            <thead>
              {this.renderTitle()}
            </thead>
            <tbody>
              {this.renderInput()}
              {this.renderContents()}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

ContentTable.propTypes = {
  id: React.PropTypes.string.isRequired,
  showInput: React.PropTypes.bool.isRequired,
  showContent: React.PropTypes.bool.isRequired,
  createContent: React.PropTypes.func.isRequired,
  updateContent: React.PropTypes.func.isRequired,
  deleteContent: React.PropTypes.func.isRequired
};

export default ContentTable;