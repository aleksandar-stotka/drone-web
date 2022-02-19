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
import { ContactlessOutlined } from "@material-ui/icons";

const AddressForm = ({ checkoutToken, cart }) => {
 const [shippingCountries, setShippingContries ] =useState([])
 const [shippingCountry, setShippingContry ] =useState('')
 const [shippingSubdivisions, setShippingSubdivisions] = useState([])
 const [shippingSubdivision, setShippingSubdivision] = useState('')
 const [shippingOptions, setShippingOptions] = useState([])
 const [shippingOption, setShippingOption] = useState('')

   


  const methods = useForm()
  const countries = Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name }))
  const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name }))
   
 



  console.log(countries)
   const fetchShippingCountries = async (checkoutToken) => {
     const { countries } = await commerce.services.localeListShippingCountries(checkoutToken)


     setShippingContries(countries)
     setShippingContry(Object.keys(countries)[0])   //give me just key of countries ...AD  give me the firstone
       //[AL,AT,BA]

  }

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)
    
    setShippingSubdivisions(subdivisions)
    setShippingSubdivision(Object.keys(subdivisions)[0])

  }
  ////////////////////////////////////////////////
    
  useEffect(() => {
    fetchShippingCountries(checkoutToken.id)
    
        
  }, [])
  
  useEffect(() => {
   if(shippingCountry) fetchSubdivisions(shippingCountry)
    
        
   },[shippingCountry])


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
            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingContry(e.target.value)} >
              {countries.map((country) => (
                   <MenuItem key={country.id} value={country.id}>
                    {country.label}
                   </MenuItem>
                        
                      ))}
                

                 </Select>
            </Grid>
            <Grid  xs={12} sm={6}>
                 <InputLabel>Shipping Subdivision</InputLabel>
                <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)} >
              {subdivisions.map((subdivision) => (
                   <MenuItem key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                   </MenuItem>
                        
                      ))}
                

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
