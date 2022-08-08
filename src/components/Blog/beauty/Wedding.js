import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'

const  Wedding = (props)=> {
 const [data , setdata] = useState([]);
 const [Arrdata , setArrdata] = useState([]);

 useEffect(()=>{
    if(props.arr || props.arr2){
        setdata(props.arr)
        setArrdata(props.arr2)
    }
 },[props.arr, props.arr2])
 console.log('asdfghj',Arrdata)
  return (
    <Container>
    <div className='row'>
        <div  className='col-lg-4'>
            <div style={{width:'100%', height:'8vh', fontSize:'30px', borderBottom: "2px solid black"}}>
                <strong>Wedding</strong>
            </div>
        <img
      src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/08/04145906/Fotowalle2-1.jpg-min-1.jpg"
      alt="...."
      style={{width:'92%', marginTop:'20px'}}
      
    />
     <div style={{marginTop:'25px'}}>
        <h3>20 Wedding Saree Ideas To Inspire You!</h3>
        <p>That, there is no match to the grace and elegance of an Indian saree, 
            is old news. No wonder generations of women opted for the timeless nine yards on their wedding days…</p>
     </div>
     </div>
     <div  className='col-lg-4'>
     <div style={{width:'100%', height:'8vh', fontSize:'30px', borderBottom: "2px solid black" }}>
                <strong>Interiors</strong>
            </div>
     <img
      src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/09/29170111/Untitled-design-1-2.jpg"
      alt="...."
      style={{width:'100%', marginTop:'20px'}}
    />
     <div style={{marginTop:'25px'}}>
        <h3>Wallpapers and Stencils Are a Great Way to Go, Here’s Why</h3>
        <p>What’s a cost-effective but great way to get statement walls? You guessed it. Both wallpapers and stencils for walls are great to break the monotony of solid coloured walls. Have doubts? Let…</p>
     </div>
     </div>
     </div>
     <div style={{display:"flex", flexWrap:"wrap", width:"80%",padding:'20px'}}>
        {
            data.map((dt)=>{
                return(
                    <div style={{display:"flex"}}>
                        <img  src={dt.link} alt='' style={{width:'40%', padding:'10px'}}/>
                        <div style={{width:"200px"}}>
                            <p>{dt.subtitle}</p>
                        </div>
                    </div>


                )
            })
        }
     </div>

     <div className='row'>
     <div  className='col-lg-4'>
     <div style={{width:'100%', height:'8vh', fontSize:'30px', borderBottom: "2px solid black" }}>
                <strong>Lifestyle</strong>
            </div>
     <img
      src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/08/25222436/Lotus-pose-1.jpg"
      alt="...."
      style={{width:'100%', marginTop:'20px'}}
    />
     <div style={{marginTop:'25px'}}>
        <h3>Yoga for PCOS: 6 Asanas to Treat PCOS</h3>
        <p>Polycystic ovary syndrome (PCOS) is a common hormonal problem that affects 1 out of 10 women globally. However, did you know that yoga is a great way to treat PCOS and facilitate…</p>
     </div>
     </div>
     <div  className='col-lg-4'>
     <div style={{width:'100%', height:'8vh', fontSize:'30px', borderBottom: "2px solid black" }}>
                <strong>Men</strong>
            </div>
     <img
      src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2020/09/03122055/best-dandruff-shampoo-for-men-1024x459.jpg"
      alt="...."
      style={{width:'100%', marginTop:'20px'}}
    />
     <div style={{marginTop:'25px'}}>
        <h3>How To Prevent Dandruff In Men</h3>
        <p>Dandruff is a common problem faced by people across the globe. Men are more frequent victims of this condition. Although the flaking of skin (particularly on the scalp) is the primary symptom, …</p>
     </div>
     </div>

     <div style={{display:"flex", flexWrap:"wrap", width:"80%",padding:'20px'}}>
        {
           Arrdata.slice(0,4).map((dt)=>{
                return(
                    <div style={{display:"flex"}}>
                        <img  src={dt.link} alt='' style={{width:'40%', padding:'10px'}}/>
                        <div style={{width:"200px"}}>
                            <p>{dt.subtitle}</p>
                        </div>
                    </div>


                )
            })
        }
     </div>
     </div>
    </Container>
  )
}

export default Wedding