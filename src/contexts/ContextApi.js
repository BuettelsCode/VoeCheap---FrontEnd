import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
    const [packSelect, setPackSelect] = useState("");
    
    return (
        <UserContext.Provider value={{ packSelect, setPackSelect }} >
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;

export { UserProvider };