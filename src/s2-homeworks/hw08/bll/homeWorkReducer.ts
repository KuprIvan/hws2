import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

type UserStateType = UserType[]

export const homeWorkReducer = (state: UserStateType, action: ActionType): UserStateType => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let newState = [...state]
            if (action.payload === 'up') {
                newState = newState.sort(function (a, b){
                    return a.name.localeCompare(b.name)
                })
            } else if (action.payload === 'down') {
                newState = newState.sort(function (a, b){
                    return b.name.localeCompare(a.name)
                })
            }
            return newState
        }
        case 'check': {
            return state.filter((el) => el.age > 18)
        }
        default:
            return state
    }
}
