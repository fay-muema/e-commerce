import React, { useState, useEffect } from 'react'
import {Button, Grid, InputLabel, MenuItem, Typography, Select} from '@mui/material'
import {useForm, FormProvider} from 'react-hook-form'

import { commerce } from '../../Components/lib/commerce'
import CustomTextForm from './CustomTextForm'

const AddressForm = ({ checkoutToken }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingsubdivision, setShippingsubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const methods = useForm();


    const fetchShippingCountries = async (checkoutTokenId) => {
      const {countries} = await commerce.services.localeListCountries(checkoutTokenId)
      console.log(countries)
      setShippingCountries(countries)
      setShippingCountry(Object.keys(countries))
    }

    useEffect(()=>{
      fetchShippingCountries(checkoutToken.id)
    }, [])

    const countries =  Object.entries(shippingCountries).map(([code, name]) => ({id: code, label:name}))
    console.log(countries)
  return (
    <>
    <Typography variant="h6" gutterbottom ="true">Shipping Address</Typography>

      <FormProvider {...methods}>
        <form>
            <Grid container spacing ={3}>
                <CustomTextForm required name = 'firstName' label='First name'/>
                <CustomTextForm required name = 'lastName' label='Last name'/>
                <CustomTextForm required name = 'address1' label='Address'/>
                <CustomTextForm required name = 'email' label='Email'/>
                <CustomTextForm required name = 'city' label='City'/>
                <CustomTextForm required name = 'zip' label='Zip/Postal code'/>
                <CustomTextForm required name = 'appartment' label='Apartment/ Road'/>

                <Grid item xs ={12} sm={6}>
                    <InputLabel>Shipping Country</InputLabel>
                    <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                     {countries.map((country) => (
                    <MenuItem key ={country.id} value= {country.id}>
                    {country.label}
                    </MenuItem>
                     ))}

                    </Select>
                </Grid>
                {/* <Grid item xs ={12} sm={6}>
                    <InputLabel>Shipping Subdivison</InputLabel>
                    <Select value={} fullWidth>
                    <MenuItem key ={} value={}>
                    Select
                    </MenuItem>
                    </Select>
                </Grid>
                <Grid item xs ={12} sm={6}>
                    <InputLabel>Shipping Option</InputLabel>
                    <Select value={} fullWidth>
                    <MenuItem key ={} value={}>
                    Select
                    </MenuItem>
                    </Select>
                </Grid> */}

            </Grid>
        </form>

      </FormProvider>
    </>
  )
}

export default AddressForm
