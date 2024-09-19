import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import responsive from "./responsive";
import React from 'react'
import {brands} from './brandsPage'
import {Link} from 'react-router-dom'
import drinks,{responsive2} from "./drinks-data"
import crisps from "./crispy-data"
import crisp from "./crispy-data2"
import sweetsour from './sweet&sour-snacks'
import crunchy from './crunchy-data'
import {ADDTOCART} from "./cart-action"
import { useParams } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { AddShoppingCart } from '@mui/icons-material'


export default function Cat({query}){

    const {Name} = useParams();
    const dispatch=useDispatch();


 const newBrands=brands.map((item)=>
    (
    <Link to={`/category/${item.name}`}>
     <img className="brands" src={item.imageurl} alt="" />
    </Link>
))


const feature={
    position:'relative',
    bottom:'20vh',
    left:'45%',
    color:'lime',
    backgroundColor:'rgb(7, 34, 43)'
    }
  
  
  
   
  const crispies=crisp.filter(item=>(
    query===""? item: item.FullName.toLowerCase().includes(query.toLowerCase())
  )).map(item=>{
     return( 
        <div className="container">
           <Link key={item.FullName} to={`/category6/${item.FullName}`}>
  
        {item.amount >=1? <img className="drinksimage" src={item.image} alt=""/> : <img className="drinksimage2" src={item.image} alt="" />}
  
        <h5 className="Item-name">{item.namey}&nbsp;<span className="span-flex">{item.subname}</span>&nbsp;<span className="span-flex2">{item.subname2}</span>&nbsp;<span className='span-flex3'>{item.subname3}</span></h5>
  
        </Link>
        {item.amount<1 && <p className='top-right'>out of stock</p>}
     {item.amount>0 && item.amount <=10 && <p className='top-right'>few units left</p>} 
      <AddShoppingCart style={feature} onClick={()=>handleCart(item)}/> 
       <p>ksh{item.price}</p>
       <p></p>
       </div>
    )
  })

  const crispydetails=crisp.filter(item=>(
    query===""? item: item===undefined
  )).find(product=>product.FullName===Name)


  function handleCart(){
    dispatch({type:ADDTOCART, payload:crispydetails})
  }



const drinksdata=drinks.map((item)=>
    (<div className="image-container">
    <Link key={item.name} to={`/category2/${item.name}`}>
     <img className="drinks-images" src={item.collectiveimage} alt="" />
    </Link>
    <p className="category-title">{item.name}</p>
    </div>
))

const crispydata=crisps.map((item)=>
(
    <div className="image-container">
<Link key={item.name} to={`/category3/${item.name}`}>
 <img  className="drinks-images" src={item.collectiveimage} alt="" />
</Link>
    <p className="category-title">{item.name}</p>
</div>
))


const sweetsourdata=sweetsour.map((item)=>
(
    <div className="image-container">
<Link key={item.name} to={`/category4/${item.name}`}>
 <img  className="drinks-images" src={item.collectiveimage} alt="" />
</Link>
<p className="category-title">{item.name}</p>
</div>
))





const crunchydata=crunchy.filter(item=> query===""? item: item.length===0).map((item)=>
(
    <div className="image-container">
<Link key={item.name} to={`/category5/${item.name}`}>
 <img  className="drinks-images" src={item.collectiveimage} alt="" />
</Link>
<p className="category-title">{item.name}</p>

</div>
))

    return(
        <>
        {crunchydata.length===0? <div className="grid-div">{crispies}</div>: 
            <div className="Category-page">
            <h3 className='category-name'>Shop by Brands</h3>
            <Carousel responsive={responsive} containerClass= "brands-container" draggable={true}  swipeable={true} autoPlay={true} infinite={true} autoPlaySpeed={1500}>
        {newBrands}
        </Carousel>
        <h3 className='category-name'>Drinks</h3>
        <Carousel responsive={responsive2} containerClass= "brands-container" draggable={true}  swipeable={true} >
        {drinksdata}
        </Carousel>

        <h3 className='category-name'>Crispy snacks</h3>
        <Carousel responsive={responsive2} containerClass= "brands-container" draggable={true}  swipeable={true} >
        {crispydata}
        </Carousel>
        <h3 className='category-name'>Sweet-tooth Snacks</h3>
        <Carousel responsive={responsive2} containerClass= "brands-container" draggable={true}  swipeable={true} >
        {sweetsourdata}
        </Carousel>
        <h3 className='category-name'>Crunchy snacks and pasteries</h3>
<Carousel responsive={responsive2} containerClass= "brands-container" draggable={true}  swipeable={true} >
{crunchydata}
</Carousel>
        
        </div>
    }</>
    
    )
 }