// export interface IHomeWorkState {
//     _id: number
//     name: string
//     age: number
// }
//
// const SORT = 'sort';
// const CHECK = 'check';
// const UP = 'up';
// const DOWN = 'down';
//
// type HomeWorkTypes = typeof SORT | typeof CHECK;
// type SortPayloadValues = typeof UP | typeof DOWN;
//
// export interface IHomeWorkAction<T> {
//     type: HomeWorkTypes;
//     payload: T;
// }
//
//
// const sortAnimalsAC = (payload: SortPayloadValues): IHomeWorkAction<SortPayloadValues> => ({
//     type: SORT,
//     payload
// })
//
// sortAnimalsAC("down")

export type HomeWorkReducerType = {
    _id: number
    name: string
    age: number
}
export type ActionType = SortUpAC | SortDownAC | CheckAC
type SortUpAC = {
    type: "sort"
    payload: "up"
}

type SortDownAC = {
    type: "sort"
    payload: "down"
}
type CheckAC = {
    type: "check"
    payload: 18
}

export const homeWorkReducer = (state: HomeWorkReducerType[], action: ActionType): HomeWorkReducerType[] => {
    switch (action.type) {
        case "sort": {
            return  [...state.sort(function (a, b) {
                if (action.payload === "up") {
                    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                    if (nameA < nameB)
                        return -1
                    if (nameA > nameB)
                        return 1
                    return 0
                } else {
                    let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                    if (nameA > nameB)
                        return -1
                    if (nameA < nameB)
                        return 1
                    return 0
                }
            })]

        }
        case "check": {

            return state.filter(a =>
                a.age >= action.payload)
        }
        default:
            return state
    }
};