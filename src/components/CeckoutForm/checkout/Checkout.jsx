import React from "react";
import { useEffect } from "react";
import {useState} from 'react'
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { commerce } from "../../../lib/commerce";
import { useGlobalContext } from "../../../context";


import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import useStyles from "./styles";

    
const steps = ["Shipping address", "Payment details"];

const Checkout = ({ cart, hideCheck }) => {
  
  
 
 

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})
  const [order, setOrder] = useState({})
  const [card, setCart] = useState(cart)
  const [errorMessage, setErrorMessage] = useState('')

  const handleCaptureCheckout = async (checkoutToken, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutToken, newOrder)
      setOrder(incomingOrder)
      refreshCart()
    } catch (error) {
         setErrorMessage(error.data.error.message)
      }
  }
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart)
    

  }


  

  

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
        
           console.log(token)
        setCheckoutToken(token)

           
      } catch (error) {
         }
    }
    generateToken()
    
  }, [cart])

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1)
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1)


  const next = (data) => {

    setShippingData(data)
    nextStep()

  }

  //////////
               
  const Form = () => activeStep === 0 ? <AddressForm checkoutToken={checkoutToken} next={next} hideCheck={hideCheck} /> : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} onCaptureCheckout={handleCaptureCheckout} nextStep={nextStep} />

  const Confirmation = () => {
    return <div>Confirmation</div>;
  };

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
             
          </Stepper>
          <hr></hr>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken   && <Form/>}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
