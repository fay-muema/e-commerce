import React, {useState, useEffect} from 'react'
import {Paper, Step, StepLabel, Stepper, Typography} from '@mui/material'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import useStyles from './styles'
import {commerce} from '../../../Components/lib/commerce'

const steps = ['Shipping Address', 'Payment'] 
const Chekout = ( {cart }) => {

  const classes = useStyles();

  const [checkoutToken, setcheckoutToken] = useState(null);
  const [activestep, setActiveStep] = useState(0)
  const [shippingData, setShippingData] = useState({})

   
    useEffect(() => {
      const generateToken = async() => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'})

          setcheckoutToken(token)
          
        } catch (error) {
          
        }
      }
      generateToken();
    }, []);

    const nextStep = () => setActiveStep((previousStep) => previousStep + 1);
    const backStep = () => setActiveStep((previousStep) => previousStep - 1);

    const next = (data) => {
      setShippingData(data);

      nextStep();
    }

    
 
    const Confrimation = () =>(
      <div>
        Confrimation
      </div>
    );


    const Form = () => activestep === 0 
      ? <AddressForm checkoutToken ={checkoutToken} next={next}/> : <PaymentForm shippingData={shippingData} checkoutToken ={checkoutToken}/>
    

    
  return (
    <>
      <div/>
      <main className={classes.layout}>
        <Paper variant="outlined" className={classes.paper}>
            <Typography variant="h4"  align ="center">
                Checkout
            </Typography>
            <Stepper activestep = {activestep} className={classes.stepper}>
                {steps.map((step) =>(
                                    <Step key={step}> 
                                    <StepLabel>
                                        {step}
                                    </StepLabel>
                                    </Step>
                ))}

            </Stepper>
            {activestep === steps.length? <Confrimation/> : checkoutToken && <Form/>}
        </Paper>
      </main>
    </>
  )
}

export default Chekout
