import React, { useEffect, useState } from "react";
import SHOP_DATA from "../../shop-data.json";
import CategoryItem from "./category-item";
import axios from "axios";
import { Box, Typography, Stack, Card, Button } from "@mui/material";

function RecommendProducts({ productName }) {
  console.log(productName);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .post("http://localhost:5000/recommend", {
        item: [productName],
      })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.products);
      });
  }, [productName]);
  return (
    <Box>
      <Box>
        <Typography variant="h4" sx={{ py: 3, mx: 6 }}>
          Recommended Auctions - {productName}
        </Typography>
      </Box>
      <Stack
        direction="row"
        sx={{
          overflowX: "scroll",
          diplay: "flex",
          px: 1,
          my: 2,
        }}
      >
        {products?.map((item) => {
          console.log(item);

          return (
            <Box
              sx={{
                mb: 4,
                mx: 3,
                pb: 2,
                border: "2px solid black",
                backgroundColor: "#F6F1F1",
              }}
              className="mb-4 mx-3 pb-2 border-2 rounded-lg border-gray-400"
            >
              <CategoryItem items={item}></CategoryItem>
              <Button
                sx={{
                  border: "2px",
                  mx: 6,
                  px: 4,
                }}
                variant="contained"
              >
                FOLLOW
              </Button>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}

export default RecommendProducts;
