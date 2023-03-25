import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import { useSelector, useDispatch } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';



export default function App() {
  const cartquantity =useSelector((state)=>state.AllCart.totalQuantity)
  const cartz =useSelector((state)=>state.AllCart.cart)

 const dispatch= useDispatch()
useEffect(() => {
dispatch(getCartTotal())

 
}, [cartz])

  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
       
        <MDBNavbarBrand>Navbar</MDBNavbarBrand>
       <Link to='/'> <span>All Products</span> </Link>
        <MDBBtn color='dark'>
     <Link to='/cart' style={{color:'#fff'}}>  Cart <span style={{color:'red'}}>({cartquantity})</span> </Link> 
      </MDBBtn>
   
      </MDBContainer>
    </MDBNavbar>
  );
}