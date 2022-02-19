import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Box,
  Typography,
  TextField
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";

import { commerce } from "../../../lib/commerce";

const AddressForm = ({ checkoutToken, cart }) => {
 const [shippingCountries, setShippingContries ] =useState([])
 const [shippingCountry, setShippingContry ] =useState('')
 const [shippingSubdivisions, setShippingSubdivisions] = useState([])
 const [shippingSubdivision, setShippingSubdivision] = useState('')
 const [shippingOptions, setShippingOptions] = useState([])
 const [shippingOption, setShippingOption] = useState('')

   


  const methods = useForm()

   const fetchShippingCountries = async (checkoutToken) => {
     const { countries } = await commerce.services.localeListShippingCountries(checkoutToken)

          console.log(countries)

     setShippingContries(countries)


  }
  ////////////////////////////////////////////////
    
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
    
        
   },[])


  return <>
     <Typography variant="h6" gutterBottom>
           Shipping Address
     </Typography>
     <FormProvider {...methods}>
       <form onSubmit="">
         <Box  sx={{
    display: 'grid',
    gap: 20,
    gridTemplateColumns: 'repeat(2, 1fr)',
  }}>

             <TextField required name="firstName" label="First name" />
            <TextField required name="lastName" label="Last name" />
            <TextField required name="address1" label="Address" />
            <TextField required name="email" label="Email" />
            <TextField required name="city" label="City" />
            <TextField required name="zip" label="ZIP / Postal code" />
            <Grid  xs={12} sm={6}>
                 <InputLabel>Shipping Country</InputLabel>
                 <Select value fullWidth >
                   <MenuItem key value>
                     Select me
                   </MenuItem>

                 </Select>
            </Grid>
            <Grid  xs={12} sm={6}>
                 <InputLabel>Shipping Subdivision</InputLabel>
                 <Select fullWidth >
                   <MenuItem >
                     Select me
                   </MenuItem>

                 </Select>
            </Grid>
            <Grid  xs={12} sm={6}>
                 <InputLabel>Shipping Options</InputLabel>
                 <Select fullWidth >
                   <MenuItem >
                     Select me
                   </MenuItem>

                 </Select>
            </Grid>
         </Box>

       </form>
     </FormProvider>
  
  </>;
};

export default AddressForm;
