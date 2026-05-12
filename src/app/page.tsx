'use client'
import {Box, Container, Grid, Paper, Radio, Stack, Switch, TextField, Typography} from '@mui/material'

export default function Home() {
    return (
        <Grid container spacing={3} sx={{justifyContent: 'space-between'}}>
            <Grid size={2}>
                on/off
                <Switch/>

            </Grid>
            <Grid size={3}>
                is good
                <Radio/>
            </Grid>
            <Grid size={"grow"}>
                enter your name
                <TextField/>
            </Grid>

        </Grid>
    )
}
