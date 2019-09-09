import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Quotebox = (props) => {
    const { quotes, selected, newQuote } = props
    return (
        <div className={'card'} >
        <div className={'card-body'}>
          <h1 className={'card-title'}>Quote</h1>
          <p className={'card-text'} >{quotes[selected].quoteText}</p>
          <p className={'font-italic'}>{quotes[selected].quoteAuthor}</p>
          <button onClick={newQuote} className={`btn btn-info`}>New quote</button>
        </div>
      </div>
    )
}

export default Quotebox