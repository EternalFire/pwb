
class Popup extends React.Component {

  constructor(props, context) {
    super(props, context);

  }

  render() {
    const { 
      id,
      title,
      onClose,
      onCancel,
      onOK, 
      cancelText,
      okText,
      renderBody

    } = this.props;

    return (
      <div className="modal fade" tabindex="-1" role="dialog" id={id}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" 
                onClick={()=>{
                  if (onClose) {
                    return onClose();
                  }
                }} 
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">{title ? title: 'title'}</h4>
            </div>
            <div className="modal-body">
              {renderBody ? renderBody() : null}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default btn-lg" data-dismiss="modal" 
                onClick={()=>{
                  if (onCancel) {
                    return onCancel();
                  }

                  if (onClose){
                    return onClose();
                  }
                }}
              >
                {cancelText ? cancelText : 'cancel'}
              </button>
              <button type="button" className="btn btn-primary btn-lg" data-dismiss="modal" 
                onClick={()=>{
                  if (onOK) {
                    return onOK();
                  }
                }}
              >
                {okText ? okText : 'ok'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Popup.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  onClose: React.PropTypes.func
};

export default Popup;