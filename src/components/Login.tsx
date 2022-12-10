import { useEffect, useReducer } from "react";

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
};

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
};

type LoginPayload = {
    username: string,
    nombre: string
};

type AuthAction = { type: 'logout' } | { type: 'login', payload: LoginPayload };

const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    switch(action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                username: '',
                nombre: ''
            }
        case 'login':
            return {
                validando: false,
                token: 'ABC123',
                username: action.payload.username,
                nombre: action.payload.nombre
            }
        default:
            return state
    }
}

const Login = () => {

    const [{ validando, token, username }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' })
        }, 1500)
    }, []);

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                username: 'MattLamp22',
                nombre: 'Matias'
            }
        })
    };

    const logout = () => dispatch({type: 'logout'});

    if(validando) {
        return (
            <div className="alert alert-info"> 
                Validando...
            </div>
        );
    };

    return (
        <div>
            <h3>Login</h3>

            {
                token ? 
                (
                    <div className="alert alert-success"> 
                        Autenticado como: { username }
                    </div>
                ) : (
                    <div className="alert alert-danger"> 
                        No autenticado
                    </div>
                )
            }

            {
                token ? 
                (
                    <button className="btn btn-danger" onClick={logout}>
                        Logout
                    </button>
                ) : (
                    <button className="btn btn-primary" onClick={login}>
                        Login
                    </button>
                )
            }
            
        </div>
    )
}

export default Login;
