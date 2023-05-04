import styled from "@emotion/styled";
import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import BarChart from "../components/home/charts/BarChart";
import Stats from "../components/home/stats/Stats";
import TopCountries from "../components/home/TopCountries";
import TransactionCustomer from "../components/home/TransactionCustomer";
import Table from "../components/Table";
import { orders, ordersColumns } from "../data/orders";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Dashboard = () => {

  const {id} = useParams()

  const [data, setData] = useState(null)

  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://easy-ruby-hen-cap.cyclic.app/product/${id}`,
      headers: {}
    };
    
    axios.request(config)
    .then((response) => {
      if(data === null){
        setData(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])
  
  const ComponentWrapper = styled(Box)({
    marginTop: "10px",
    paddingBottom: "10px",
  });

  const navigate = useNavigate()
  const goBack = () => {
    navigate("/");
  };

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>

       <KeyboardBackspaceIcon onClick={goBack} style={{cursor:"pointer"}}/>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Dashboard
      </Typography>
      {/* <ComponentWrapper>
        <Stats />
      </ComponentWrapper> */}

      <ComponentWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <img src={data?.image} onerror="this.src='https://res.cloudinary.com/dkketilf1/image/upload/v1683095812/ellpajeb12vdfvot4dwv.jpg';"/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Paper
              sx={{
                boxShadow: "none !important",
                borderRadius: "12px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "divider",
                height: "100%",
              }}
            >
              <TopCountries />
            </Paper>
          </Grid>
        </Grid>
      </ComponentWrapper>
      <ComponentWrapper>
        <TransactionCustomer />
      </ComponentWrapper>

      <ComponentWrapper>
        <Typography variant="h5" sx={{ my: 3 }}>
          Latest Orders
        </Typography>
        <Table
          data={orders}
          fields={ordersColumns}
          numberOfRows={5}
          enableTopToolBar={false}
          enableBottomToolBar={false}
          enablePagination={false}
          enableRowSelection={false}
          enableColumnFilters={false}
          enableEditing={false}
          enableColumnDragging={false}
        />
      </ComponentWrapper>
    </Box>
  );
};

export default Dashboard;
