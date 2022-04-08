import React from 'react';

const Hok = (Component) => {
    const WithHoc =({...props}) => {
        return (
            <div>
                {!!props.error && <p>{props.error}</p>}
                {props.loading ? <h5>Loading....</h5> : <Component {...props}/>}
            </div>
        );
    };
    return WithHoc;
}

export default Hok;
