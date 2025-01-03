import { User } from '@supabase/supabase-js';
import { Children, createContext, useContext, useState} from 'react'

interface AuthContexProsps{
    user: User | null;
    setAuth: (authUser: User | null) => void;
}


const AuthContex = createContext({} as AuthContexProsps)

export const AuthProvider = ({ children }: {children: React.ReactNode }) => {

    const [user, setUser] = useState<User | null>(null)

    function setAuth(authUser: User | null){
        setUser(authUser);

    }


    return(
        <AuthContex.Provider value={{ user, setAuth }}>
            {children}
        </AuthContex.Provider>
    )
}

export const useAuth = () => useContext(AuthContex)