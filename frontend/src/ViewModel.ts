import Client from "./client";
import Store, { StoreStateType } from "./Store";

export default class ViewModel {
    store: Store

    constructor(store: Store) {
        this.store = store;
    }

    handleSubmit = (query: string) => {
        console.log('submitting query=', query)
        this.store.setState(StoreStateType.LOADING)
        // Client.getInstance().search(query).then((results) => {
        //     console.log('results: ', results)
        //     this.store.setState(StoreStateType.DONE)
        // }).catch((err) => { console.log('error: ', err); this.store.setState(StoreStateType.ERROR) })
        const results = Client.getInstance().search(query)
        this.store.setResults(results)
        this.store.setState(StoreStateType.DONE)
    }
}