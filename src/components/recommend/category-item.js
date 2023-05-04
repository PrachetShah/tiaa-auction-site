import React from "react";
import { Box, Typography } from "@mui/material";

const CategoryItem = ({ items }) => {
  console.log(items);
  const { id, name, imageUrl, price } = items;
  // console.log(imageUrl);
  return (
    <Box sx={{ width: "50%", mx: 6, my: 3, px: 1, color: "black" }}>
      <Box
        component="div"
        sx={{
          height: 260,
          width: 220,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        href={imageUrl}
        alt={name}
      />
      <Typography variant="h5">Date</Typography>
      <Typography variant="body1" color="black">
        {name}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Shop Now - {price}
      </Typography>
    </Box>
  );
};

export default CategoryItem;
