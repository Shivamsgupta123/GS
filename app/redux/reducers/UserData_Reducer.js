// import { addUpdateData } from '../actions/UserData_Action';


export function changeData(state = { lang: 'en' }, action) {
    switch (action.type) {
        case 'CHANGE_LANG':
            return { ...state, ...action.data }
        default:
            return state
    }
}