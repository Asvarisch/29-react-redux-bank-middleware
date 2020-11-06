import {depositAction, putQuoteAction, withdrawAction} from "../actions/AccountActions";
import {connect} from "react-redux";
import Operation from "../components/Operation";

function mapDispatchToProps(dispatch){
    return {
        withdraw: sum => dispatch(withdrawAction(sum)),
        deposit: sum => dispatch(depositAction(sum)),
        putQuote: quote => dispatch(putQuoteAction(quote))
    }
}

export default connect(null, mapDispatchToProps)(Operation);