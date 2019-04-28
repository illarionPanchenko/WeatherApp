import React from 'react';
import './App.css'
const Form = (props) => {
    return(
        <div className="form2">
            <form onSubmit={props.getWeather}>
                <input className = "input1" type='text' name='city' placeholder='City...'/>
                <input className = "input1" type='text' name='country' placeholder='Country...'/>
                <button className='btn btn-secondary'>Get weather</button>
            </form>
        </div>
    )
};
export default Form;