import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DetailsCar from '../DetailsCar/DetailsCar';
import NurService from '../NurServices/NurService';
const Large = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/service')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);

 

  
  const filterService = services?.filter(data => data.price == "45");

  
  return (
    <div>
      <DetailsCar></DetailsCar>
      <Container>
        <h1 className='car-service-headline'>Our Services</h1>
        <Grid container spacing={{ xs: 2, md: 3, lg: 5 }} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>

          {
            filterService.map((cardata) => <NurService
              key={cardata._id}
              alldata={cardata}
            ></NurService>)
          }

        </Grid>
      </Container>
    </div>
  );
};

export default Large;