import React from 'react'

import { Grid, TextField } from '@mui/material' 
import { useFormContext, Controller } from 'react-hook-form'

const CustomTextForm = ({name, required, label}) => {
    const { control }  = useFormContext();
    // const isError = false;
  return (
    <Grid item xs={12} sm={6}>
        <Controller
        control = {control}
        name ={name}
        render = {
            ( {field}) => (
                <TextField
                fullWidth
                label ={label}
                required
                />
            )}

        />

    </Grid>
  )
}

export default CustomTextForm
