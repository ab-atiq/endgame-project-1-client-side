import { Container} from "@mui/material";
import Grid from '@mui/material/Grid';
import React from "react";
import NurService from "./NurService";
import "./NurServices.css";
import {data} from "../FakeData/FakeData"

const NurServices = () => {
  

  return (
    <div>
      <Container>
        <h1 className='car-service-headline'>Our Services</h1>
        <Grid container spacing={{ xs: 2, md: 3, lg: 5}} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}>

          {
            data.map((cardata) => <NurService
            key={cardata._id}
            alldata ={cardata} 
            ></NurService>  )
          }
            
        </Grid>         
      </Container>
    </div>
  );
};

export default NurServices;

