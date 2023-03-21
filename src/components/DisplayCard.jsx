import { Grid, Typography } from '@mui/material'
import React from 'react'

const DisplayCard = () => {
    return (
        <Grid
            container
            border={1}
            margin={3}
            xs={2}
            direction="column"
            justifyContent="center"
            alignItems="center">
            <Grid border={1} container direction= "row"  justifyContent="space-evenly"> <Typography>Date: DD/MM/YYYY</Typography></Grid>
            <Grid border={1} container justifyContent="space-evenly"><Typography>Temperature</Typography></Grid>
            <Grid 
            border={1}
            container
            direction= "row"
            justifyContent="space-evenly">
                <Typography>Min</Typography>
            
                <Typography>Max</Typography>
            </Grid>
            <Grid 
            border={1}
            container
            direction= "row"
            justifyContent="space-evenly">
                <Typography>23.44</Typography>
                <Typography>42.55</Typography>
            </Grid>
            <Grid 
            border={1}
            container
            direction= "row"
            justifyContent="space-evenly">
                <Typography>Pressure</Typography>
                <Typography>4233.55</Typography>
            </Grid>
            <Grid 
            border={1}
            container
            direction= "row"
            justifyContent="space-evenly">
                <Typography>Humidity</Typography>
                <Typography>42.55</Typography>
            </Grid>

        </Grid>
    )
}

export default DisplayCard