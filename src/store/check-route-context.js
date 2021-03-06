import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const CheckRouteContext = React.createContext({
    routePath: '/'
});



export const CheckRouteContextProvider = (props) => {

    const location = useLocation();

    const [routePath, setRoutePath] = useState('/');
    useEffect(() => {


        setRoutePath(location.pathname);

        // console.log(location.pathname)

    }, []);



    return (
        <CheckRouteContext.Provider
            value={{
                routePath: routePath,
            }}
        >
            {props.children}
        </CheckRouteContext.Provider>
    );
};

export default CheckRouteContext;