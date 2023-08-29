import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
    const [packSelect, setPackSelect] = useState("");
    const [packId, setPackId] = useState(0);
    
    return (
        <UserContext.Provider value={{ packSelect, setPackSelect, packId, setPackId }} >
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;

export { UserProvider };