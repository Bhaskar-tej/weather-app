import { Button, CircularProgress, Stack, TextField, Typography } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help';
import React from 'react'
import { Box } from '@mui/system';

const header = ({loading}) => {
    loading= true
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 1, md: 3 }}
            sx={{ padding: 5 }}
        >
            <Typography variant='h5' sx={{ color: "#FF5733 ", marginRight: 10 }} >Weather in your city</Typography>
            <TextField

                id="outlined-size-small"
                defaultValue="Enter city...."
                size="small"
                inputProps={{style:{outlineColor:"#FF5733"}}}
            >
            </TextField>
           
            <Button
            variant='contained'
            sx={{color:"white",bgcolor:"#FF5733"}}
            ><HelpIcon 
            fontSize='small'
            sx={{padding:0.5}}/>Search</Button>
            {loading && <CircularProgress 
            size={18}/>}
            
        </Stack>
    )
}

export default header