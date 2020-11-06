class Store {
    constructor(reducer, initialState) {
        this._state = initialState;
        this._reducer = reducer;
        this._callbacks = [];
    }

    get state() {
        return this._state;
    }

    dispatch(action){
        this._state = this._reducer(this._state, action);
        this._callbacks.forEach(callback => callback());
    }

    subscribe(callback){
        this._callbacks.push(callback);
        return () => this._callbacks = this._callbacks.filter(func => func !== callback);
    }

}

export default Store;