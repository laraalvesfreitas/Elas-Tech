
interface User{
    name: string;
    email: string;
}

interface UserState{
    user: User | null
}

const initialState: UserState = {
    user:null
}

interface UserAction{
    type: string;
    payload?: User
}

// Reducer: guardo o estado que desejamos exportar na aplicação
//          manipula/altera o estado 

// Todo Reducer precisa retornar o nosso estado atualizado
export function userReducer(state = initialState, action: UserAction ): UserState{
    if(action.type === 'user/login'){
        return{
            ...state,
            user:action.payload as User,
            }
        }else if(action.type === 'user/logout'){
        return {
            ...state,
            user: null
        }
        }
    
    return state;
}