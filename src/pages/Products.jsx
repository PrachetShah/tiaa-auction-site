import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import { useState, useEffect } from "react";
import { products, productsColumns } from "../data/products";
import ProductCard from "../components/productUi/productCard";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import axios from "axios";

const CategoriesNavbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Tabs
      style={{marginBottom:"20px"}}
      value={activeTab}
      onChange={handleTabChange}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Category 1" />
      <Tab label="Category 2" />
      <Tab label="Category 3" />
    </Tabs>
  );
};


const Products = () => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:3001/products',
      headers: { }
    };
    
    axios.request(config)
    .then((response) => {
      console.log(response.data.products);
      setData(response.data.products);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
    <CategoriesNavbar/>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
          marginLeft: "16px",
        }}
      >
        <Grid container spacing={2}>
          {data.map((inst) => {
            return <Grid item xs={4}>
              <ProductCard data={inst} />
            </Grid>
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;
