import { useState, createContext } from 'react';

export const MenetrendContext = createContext();

const ContextProvider = (props) => {
    const [viszonylatok, setViszonylatok] = useState([]);

    // useEffect(() => {
    //     if (JSON.parse(localStorage.getItem('reservedBooks'))) {
    //         let tomb = JSON.parse(localStorage.getItem('reservedBooks'));

    //         setSzamlalo(tomb.length);
    //     }
    // }, []);

    return (
        <MenetrendContext.Provider
            value={{
                viszonylatok,
                setViszonylatok,
            }}
        >
            {props.children}
        </MenetrendContext.Provider>
    );
};

export default ContextProvider;