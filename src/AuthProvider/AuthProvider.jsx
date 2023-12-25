import { createContext, useState } from "react";

export const Authcontext = createContext(null)

const AuthProvider = ({children}) => {
const [update, setUpadte] = useState(null)
const [upLoading, setupLoading] = useState(true)

const addCard = (addcard, status) => {

   
    setUpadte(addcard)
    setupLoading(status)
}





  
const userInfo = {
    addCard,
    update,
    upLoading
}





    return (
        <Authcontext.Provider value={userInfo}>
            {
                children
            }
            
        </Authcontext.Provider>
    );
};

export default AuthProvider;