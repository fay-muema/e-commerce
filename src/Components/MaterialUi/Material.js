import React from 'react'
import {Typography, Button, Stack, IconButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const Material = () => {
  return (
    <div>
        <Typography variant="h1">Hello there</Typography>
        <Stack spacing={4} direction="row">
        <Button variant="text" color="error">Text</Button>
        <Button variant="contained" color="secondary">Contained</Button>
        <Button variant="outlined" color="warning">Outlined</Button>
        </Stack>
        <Stack spacing ={4} direction="row">
            <Button variant="contained" color ="secondary" startIcon={<SendIcon/>}>Sent</Button>
            <IconButton aria-label='send'>
                <SendIcon onClick={()=> {alert("clicked")}}/>
            </IconButton>

        </Stack>
    </div>
  )
}

export default Material
