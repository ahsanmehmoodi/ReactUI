import { createStore,applyMiddleware,compose}from "redux";
import {thunk} from "readux-thunk";

export const store=createStore(
    {},
    compose(applyMiddleware(thunk)
)

)