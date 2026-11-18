import { createContext, useContext, type ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router';

interface NavContextType {
    active: string;
    setActive: (id: string) => void;
}

export const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const active = location.pathname.split('/')[1];

    const setActive = (id: string) => {
        navigate(id === 'home' ? '/' : `/${id}`);
    };

    return (
        <NavContext.Provider value={{ active, setActive }}>
            {children}
        </NavContext.Provider>
    );
};

export const useNav = () => {
    const context = useContext(NavContext);

    if (!context) throw new Error('useNav used within a NavProvider');

    return context;
};
