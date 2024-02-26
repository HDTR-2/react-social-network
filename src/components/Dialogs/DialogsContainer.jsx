import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthNavigate } from '../hoc/withAuthNavigate';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthNavigate)(Dialogs);
