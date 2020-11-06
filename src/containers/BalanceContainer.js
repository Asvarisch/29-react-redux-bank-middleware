import {connect} from "react-redux";
import Balance from "../components/Balance";

function mapStateToProps(state) {
    return {
        balance: state.balance,
        quote: state.quote
    }
}

export default connect(mapStateToProps)(Balance);