import { makeAutoObservable } from "mobx";
import { Data } from "./types";

export enum StoreStateType {
    LOADING,
    ERROR,
    DONE
}

export default class Store {
    results: Data[] = []
    state: StoreStateType = StoreStateType.LOADING

    constructor() {
        makeAutoObservable(this)
    }

    setState = (state: StoreStateType) => {
        this.state = state;
    }

    setResults = (results: Data[]) => {
        this.results = results;
    }
}