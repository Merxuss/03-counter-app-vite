import { useState } from 'react'
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value )

    const handleAdd = (event) => { 
        // console.log(event)
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 )
    }

    const handleSustract = () => setCounter( counter - 1 )

    const handleReset = (event) => { 
        setCounter( value );
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>


            <button onClick={ (event) => handleAdd(event) }> +1 </button>
            <button onClick={ handleSustract }> -1 </button>
            <button onClick={ handleReset }> Reset </button>
        </>
    );
    
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}