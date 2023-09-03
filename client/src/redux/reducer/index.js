import { CATS_SUBS, CLOSE_VISIT, GET_ALL_VISITS, GET_NOTATION, GET_TEAMS, GET_USER_VISITS, /*GET_VISIT_BYID, */GET_VISIT_ID, LOGIN_ADMIN, LOGIN_USER, LOG_OUT, POST_ADMIN, POST_IMAGE, POST_NOTATION, POST_TEAMS, POST_USER, SET_PAGE, STATUS_PAGES, WRITE, WRITECATS, WRITESUBS,  } from "../actions";
import { putCategories } from "./auxiliar";


const initialState= {
    
};


const rootReducer = (state= initialState, action)=>{
    switch (action.type) {
        // case GET_VISIT_BYID:
        //     return {
        //         ...state,
        //         visit: action.payload
        //     };

        default: return state;
    };
};

export default rootReducer;