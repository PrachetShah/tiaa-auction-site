import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import Table from "../components/Table";

import { products, productsColumns } from "../data/products";
import ProductCard from "../components/productUi/productCard";

const Products = () => {
  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
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
