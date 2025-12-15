import { useState, createContext } from 'react';

export const MenetrendContext = createContext();

const MenetrendProvider = (props) => {
    const [viszonylatok, setViszonylatok] = useState([]);
    const [honnan, setHonnan] = useState('');

    return (
        <MenetrendContext.Provider
            value={{
                viszonylatok,
                setViszonylatok,
                honnan,
                setHonnan,
            }}
        >
            {props.children}
        </MenetrendContext.Provider>
    );
};

export default MenetrendProvider;
