
enum AppActionType {
    SET_LOADING = 'APP/SET_LOADING'
}

type InitialState = {
    isLoading: boolean,
}

const initialState = {
    isLoading: false,
}

type ActionType = SetLoadingType;

export const AppReducer = (state: InitialState = initialState, action: ActionType) => {
    switch (action.type) {
        case AppActionType.SET_LOADING:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

type SetLoadingType = ReturnType<typeof setLoading>;
export const setLoading = (isLoading: boolean) => {
    return {
        type: AppActionType.SET_LOADING,
        payload: {
            isLoading
        }
    } as const
}
