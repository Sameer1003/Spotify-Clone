"use client"

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProviderprops {
    children: React.ReactNode;
};

const UserProvider: React.FC<UserProviderprops> = ({
    children
}) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    );
};

export default UserProvider;