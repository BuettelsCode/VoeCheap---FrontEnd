import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
    const [packSelect, setPackSelect] = useState("");
    const [packgeId, setPackId] = useState(0);
    
    return (
        <UserContext.Provider value={{ packSelect, setPackSelect, packgeId, setPackId }} >
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;

export { UserProvider };