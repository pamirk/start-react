import React, {Context, Dispatch, FC, ReactNode, createContext, useContext, useReducer} from "react";
import * as firebase from "firebase/app";
import {Redirect} from "react-router-dom";
import {Routes} from "./Constants";
import {getUser} from "./API";
import Loading from "./Loading";
import {User} from "./Model";
import {useAsync} from "./Hookah";

export interface UserProps {
    user: User;
}
export const UNDETERMINED = null;
export const UNAUTHENTICATED = false;

type AuthState = User | typeof UNAUTHENTICATED | typeof UNDETERMINED;

const initialState: AuthState = UNDETERMINED;
const reducer = (_state: AuthState, user: AuthState) => user;

export const SIGN_IN_EMAIL_KEY = "signInEmail";

export const AuthContext: Context<[AuthState, Dispatch<User | null>]
    // @ts-ignore
    > = createContext();

interface UnprotectedProps {
    component: FC;
}

const Unprotected = ({component: Comp}: UnprotectedProps) => {
    const [user] = useContext(AuthContext);
    if (user === UNDETERMINED) {
        return <Loading/>;
    }
    if (user) {
        return <Redirect to={Routes.ACCOUNT}/>;
    }
    return <Comp/>;
};

export const withUnprotection = (component: FC) => () => (
    <Unprotected {...{component}} />
);

export const withProtection = <T extends UserProps>(Comp: FC<T>) => (
    props: T
) => {
    const [user] = useContext(AuthContext);
    if (user === UNDETERMINED) {
        return <Loading/>;
    }
    if (user === UNAUTHENTICATED) {
        if (window.location.pathname === Routes.YOUTUBE_FRIENDS) {
            return (
                <Redirect to={`${Routes.SIGN_IN}?r=${window.location.pathname}`}/>
            );
        }
        return <Redirect to={Routes.SIGN_IN}/>;
    }
    return <Comp {...{...props, user}} />;
};

interface AuthProviderProps {
    children: ReactNode;
}

export default ({children}: AuthProviderProps) => {
    const [value, dispatch] = useReducer(reducer, initialState);
    useAsync(
        async () =>
            firebase.auth().onAuthStateChanged(async user => {
                if (user) {
                    const u = await getUser();
                    dispatch(u);
                } else {
                    dispatch(UNAUTHENTICATED);
                }
            }),
        []
    );
    return (
        <AuthContext.Provider value={[value, dispatch]}>
            {children}
        </AuthContext.Provider>
    );
};
