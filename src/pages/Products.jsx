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
          {products.map((x) => {
            return <Grid item xs={4}>
              <ProductCard />
            </Grid>
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;
