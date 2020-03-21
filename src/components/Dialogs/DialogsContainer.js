import Dialogs from './Dialogs';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateMessageText: (textMessage) => {
            dispatch(updateMessageTextActionCreator(textMessage));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
