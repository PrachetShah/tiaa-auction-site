import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import { useState } from "react";
import { products, productsColumns } from "../data/products";
import ProductCard from "../components/productUi/productCard";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useEffect } from "react";
import axios from "axios";

const CategoriesNavbar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Tabs
      style={{ marginBottom: "20px" }}
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
  const [productData, setData] = useState([]);
  var config = {
    method: 'get',
    url: 'http://localhost:3001/products',
    headers: {}
  };

  axios(config)
    .then(function (response) {
      setData(response.data.products)

    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <CategoriesNavbar />
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
        {!productData? <div>No auctions there . Come later !</div> : null}
          {productData?.map((x) => {
            return <Grid key={x._id} item xs={4}>
              <ProductCard data={x}/>
            </Grid>
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;
