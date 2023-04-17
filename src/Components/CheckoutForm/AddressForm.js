import React, { useState, useEffect } from 'react'
import {Button, Grid, InputLabel, MenuItem, Typography, Select} from '@mui/material'
import {useForm, FormProvider} from 'react-hook-form'
import {Link} from 'react-router-dom'

import { commerce } from '../../Components/lib/commerce'
import CustomTextForm from './CustomTextForm'

const AddressForm = ({ checkoutToken, next }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingsubdivision, setShippingsubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const methods = useForm();

    const countries =  Object.entries(shippingCountries).map(([code, name]) => ({id: code, label:name}))
    const subdivisions =  Object.entries(shippingSubdivisions).map(([code, name]) => ({id: code, label:name}))
    const options = shippingOptions.map((sO) =>({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})`}))


    const fetchShippingCountries = async (checkoutTokenId) => {
      const {countries} = await commerce.services.localeListCountries(checkoutTokenId)
      setShippingCountries(countries)
      setShippingCountry(Object.keys(countries)[0])
    }


    const fetchSubdivisions = async (countrycode) => {
      const {subdivisions} = await commerce.services.localeListSubdivisions(countrycode);

      setShippingSubdivisions(subdivisions)
      setShippingsubdivision(Object.keys(subdivisions)[0])
    }

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) =>{
      const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region})

      setShippingOptions(options);
      setShippingOption(options[0].id);
    }


    useEffect(()=>{
      fetchShippingCountries(checkoutToken.id)
    }, []);

    useEffect(()=> {
     if (shippingCountry) fetchSubdivisions(shippingCountry)
    },[shippingCountry])


    useEffect(()=> {
      if(shippingsubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingsubdivision)
    }, [shippingsubdivision])


  return (
    <>
    <Typography variant="h6" gutterbottom ="true">Shipping Address</Typography>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data)=> next({...data, shippingCountry, shippingsubdivision, shippingOption}) )}>
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
                <Grid item xs ={12} sm={6}>
                    <InputLabel>Shipping Subdivison</InputLabel>
                    <Select value={shippingsubdivision} fullWidth onChange={(e) => setShippingsubdivision(e.target.value)}>
                     {subdivisions.map((subdivision) => (
                    <MenuItem key ={subdivision.id} value= {subdivision.id}>
                    {subdivision.label}
                    </MenuItem>
                     ))}

                    </Select>

                </Grid>
                <Grid item xs ={12} sm={6}>
                    <InputLabel>Shipping Option</InputLabel>
                    <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                     {options.map((option) => (
                    <MenuItem key ={option.id} value= {option.id}>
                    {option.label}
                    </MenuItem>
                     ))}

                    </Select>

                </Grid>

            </Grid>
            <br/>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <Button component={Link} to='/cart' variant='outlined'>Back to Cart</Button>
              <Button type='submit' variant='contained' color='primary'>Next</Button>
            </div>
        </form>

      </FormProvider>
    </>
  )
}

export default AddressForm
