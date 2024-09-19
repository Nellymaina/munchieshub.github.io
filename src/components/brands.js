import React from 'react'
import {brands} from './brandsPage.js'
import crisp from './crispy-data2'
import {useParams, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import {ADDTOCART} from './cart-action'
import {AddShoppingCart} from '@mui/icons-material'

 export default function Brands({query}){
   const dispatch=useDispatch()
function handleCart(item){
dispatch({type:ADDTOCART, payload:item})
}

const {name}= useParams();
 
const feature={
   position:'absolute',
top:'40%',
right:'0',
color:'lime',
backgroundColor:'black'
   }


   const crispies=crisp.filter(item=>(
      query===""? item: item.FullName.toLowerCase().includes(query.toLowerCase())
   )).map(item=>{
      return( 
         <div className="container">
            <Link key={item.FullName} to={`/category6/${item.FullName}`}>
   
            {item.amount >=1? <img className="drinksimage" src={item.image} alt=""/> : <img className="drinksimage2" src={item.image} alt="" />}
   <p className="item-price">KES {item.price}.00 </p>
   <h5 className="Item-name">{item.namey}&nbsp;<span className="span-flex">{item.subname}</span>&nbsp;<span className="span-flex2">{item.subname2}</span>&nbsp;<span className='span-flex3'>{item.subname3}</span></h5>
</Link>
   {item.amount<1 && <p className='top-right'>out of stock</p>}
   {item.amount>0 && item.amount <=10 && <p className='top-right'>few units left</p>} 


   <AddShoppingCart style={feature} onClick={()=> handleCart(item, item.FullName)}/>
   </div>)
})
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   const newCrisps=brands.find(item=>(item.name)===name)
   const crispstype=newCrisps.brandimages.filter(item=>(
      query===""? item: item.length===0
   )).map(item=>{
      return( 
      <div className='container'>
   <Link to={`/category/${name}/${item.FullName}`}>
   {item.amount >=1? <img className="drinksimage" src={item.image} alt=""/> : <img className="drinksimage2" src={item.image} alt="" />}
   <p className="item-price">KES {item.price}.00 </p>
   <h5 className="Item-name">{item.namey}&nbsp;<span className="span-flex">{item.subname}</span>&nbsp;<span className="span-flex2">{item.subname2}</span>&nbsp;<span className='span-flex3'>{item.subname3}</span></h5>
</Link>
   {item.amount<1 && <p className='top-right'>out of stock</p>}
   {item.amount>0 && item.amount <=10 && <p className='top-right'>few units left</p>} 


   <AddShoppingCart style={feature} onClick={()=> handleCart(item, item.FullName)}/>
   </div>)
})
   
   
   
   
      return(
       <div className="crispy-background">
   
   
   
   <section className='grid-div'>
   
       { crispstype.length===0? crispies:crispstype}
       </section>
       </div>
      )
   
   }  



