import React from 'react'

function Women() {
  return (
    <div className='container'>
        <div style={{ background:"" , borderBottom: "1px solid #bbb"}}>
    <div className='row'>
        <div className='col-6'>
            {/* <div>
                <img src='https://res.cloudinary.com/urbanclap/image/upload/pply/customer-app-supply/1648463875565-a4ce06.svg' alt='...'/>
            </div> */}
        <div>
        <ul   style={{  listStyle:"none" }}>
            <strong>Delhi NCR</strong>
            <li>Connought Place, new delhi</li>
            </ul>
        </div>
        </div>
        <div className='col-6'>
        <div>
            <ul  style={{ display:"flex" , justifyContent:"end"  , listStyle:"none", padding:'10px' }}>
            <strong>Home</strong>
            <strong style={{ padding:"0px 40px 0px"}}>Booking</strong>
            <strong>Blog</strong>
            </ul>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Women