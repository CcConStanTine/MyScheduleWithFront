import React, { useState, useEffect, createContext, ReactNode, useContext } from 'react';
import { LoadingPageContext } from './LoadingPageContext';
import DataRequests from './DataRequests';
import LoaderPage from '../components/mobile/Loader';
import { AppContextInterface, UserContext } from '../utils/interfaces';

interface UseAppContextInterface {
    children: ReactNode;
}

export const AppContext = createContext<AppContextInterface>({});

export const UseAppContext = ({ children }: UseAppContextInterface) => {
    const { loading, setLoading } = useContext(LoadingPageContext);
    const [userContext, setLoggedIn] = useState<UserContext>({});

    const checkIfTokenExpired = async () => {
        const userInfo = await DataRequests.getCurrentUserInfo();

        if (userInfo.status)
            return false;

        return userInfo;
    }

    useEffect(() => {
        const getUserData = async () => {
            const { token } = DataRequests.getCurrentUser();
            const userInfo = token && await checkIfTokenExpired();

            userInfo && setLoggedIn({ token, ...userInfo });

            setLoading!(false);
        }
        getUserData()
    }, [setLoading]);

    return (
        <AppContext.Provider value={{ userContext, setLoggedIn }}>
            {loading && <LoaderPage />}
            {children}
        </AppContext.Provider>
    )
}