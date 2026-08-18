'use client'
import { createContext, useContext, useState, useEffect, useCallback } from "react";

const AuthContext = createContext({
    user: null,
    getToken: async () => null,
    openSignIn: () => {},
});

export const useAuthSafe = () => useContext(AuthContext);

// Inner component that only renders inside ClerkProvider
function ClerkAuthBridge({ children }) {
    const { useUser, useAuth, useClerk } = require("@clerk/nextjs");
    const { user } = useUser();
    const { getToken } = useAuth();
    const { openSignIn } = useClerk();

    return (
        <AuthContext.Provider value={{ user, getToken, openSignIn }}>
            {children}
        </AuthContext.Provider>
    );
}

// Inner component when Clerk is NOT available
function NoAuthBridge({ children }) {
    return (
        <AuthContext.Provider value={{ user: null, getToken: async () => null, openSignIn: () => {} }}>
            {children}
        </AuthContext.Provider>
    );
}

export default function Providers({ children }) {
    const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

    if (!key) {
        return <NoAuthBridge>{children}</NoAuthBridge>;
    }

    const { ClerkProvider } = require("@clerk/nextjs");
    return (
        <ClerkProvider publishableKey={key}>
            <ClerkAuthBridge>{children}</ClerkAuthBridge>
        </ClerkProvider>
    );
}
