import { sendMessageCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthNavigate } from '../hoc/withAuthNavigate';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessage) => {
      dispatch(sendMessageCreator(newMessage));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthNavigate)(Dialogs);
