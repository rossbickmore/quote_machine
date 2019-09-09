import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Rating = (props) => {
    const { addGood, addBad, good, bad } = props

    return (
        <div className={'card'} style={{top: '50px'}} >
            <div className={'card-body'} >
                <h1 className={'card-title'} >Do you like this quote?</h1>
                <div>
                <button className={`btn btn-success`} onClick={addGood}>Up vote!</button>
                <h1><bold>{good}</bold></h1>
                </div>
                <div>
                <button className={`btn btn-danger`} onClick={addBad}>Down vote!</button>
                <h1><bold>{bad}</bold></h1>
                </div>
            </div>
        </div>
    )
}





export default Rating