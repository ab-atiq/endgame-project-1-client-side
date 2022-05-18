import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OurDriver from './OurDriver';

const OurDrivers = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('/drivers.json')
            .then(res => res.json())
            .then(data => setItems(data.slice(0, 4)))
    }, [])

    return (
        <Container>
            <Typography sx={{ textAlign: "center" }} gutterBottom variant="h4" component="div">
                Our Drivers
            </Typography>
            <Grid container spacing={2}>
                {
                    items.map(item =>
                        <OurDriver
                            key={item._id}
                            item={item}
                        ></OurDriver>)
                }
            </Grid>
            <Link to="/drivers">More...</Link>
        </Container>
    );
};

export default OurDrivers;

