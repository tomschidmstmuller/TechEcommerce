'use client'
import { createContext, useContext } from "react";

const AuthContext = createContext({
    user: null,
    getToken: async () => null,
    openSignIn: () => {},
});

export const useAuthSafe = () => useContext(AuthContext);

export function AuthProvider({ children }) {
    return (
        <AuthContext.Provider value={{ user: null, getToken: async () => null, openSignIn: () => {} }}>
            {children}
        </AuthContext.Provider>
    );
}
