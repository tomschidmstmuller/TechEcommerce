'use client'
import { createContext, useContext } from "react";
import { useUser, useAuth, useClerk } from "@clerk/nextjs";

const AuthContext = createContext({
    user: null,
    getToken: async () => null,
    openSignIn: () => {},
});

export const useAuthSafe = () => useContext(AuthContext);

export function ClerkAuthProvider({ children }) {
    const { user } = useUser();
    const { getToken } = useAuth();
    const { openSignIn } = useClerk();

    return (
        <AuthContext.Provider value={{ user, getToken, openSignIn }}>
            {children}
        </AuthContext.Provider>
    );
}
