import React from 'react';
import {Box, Switch} from "@mui/material";

const HomePage = () => {
    return (
        <Box>

            <Box sx={{
                backgroundColor: {xs: 'primary.main', sm: 'secondary.main'},
                color: {xs: 'primary.contrastText', sm: 'secondary.contrastText'},
                textAlign: 'center',
                borderRadius: 1,
                height: 50,
            }}>
                <Switch sx={{
                    display: {sm:'none'},
                }}/>
                Amir
            </Box>

        </Box>
    );
};

export default HomePage;