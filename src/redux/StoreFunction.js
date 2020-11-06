export default function createStore(reducer, initialState){
    let _state = initialState;
    let _reducer = reducer;
    let _callbacks = [];

    function getState() {
        return _state;
    }

    function dispatch(action){
        _state = _reducer(_state, action);
        _callbacks.forEach(callback => callback());
    }

    function subscribe(callback){
        _callbacks.push(callback);
        return () => _callbacks = _callbacks.filter(func => func !== callback);
    }

    return {getState, dispatch, subscribe};
}