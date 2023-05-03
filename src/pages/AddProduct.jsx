import styled from "@emotion/styled";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { categories, auctionTypes } from "../data/categories";
import { BiImageAdd } from "react-icons/bi";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import axios from "axios";

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const imageInput = useRef(null);
  const [image, setImage] = useState("");
  const [ startDate, setStartDate ] = useState(new Date());
  const [ endDate, setEndDate ] = useState(new Date());
  const [ aucType, setAucType ] = useState("");
  const [ data, setData ] = useState({
    name: "",
    description: "",
    type: "Electronics",
    auctionType: "Normal",
    startPrice: "",
    startDate: new Date(),
    endDate: new Date(),
    image: "",
    seller: "6451583e92a3b18816a34e4e", //get from loclaSTorage after login & signup integration
  });

  const handleStartDateChange = (date) => {
    setData({...data, startDate: date});
  };

  const handleEndDateChange = (date) => {
    setData({...data, endDate: date});
  };

  const UploadBox = styled(Box)({
    marginTop: 30,
    height: 200,
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderStyle: "dashed",
    borderWidth: "2px",
    borderColor: "divider",
  });

  console.log(data);

  const createProduct = async () => {
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:3001/product/create',
      headers: { 
        "Content-Type": "application/json"
      },
      data : data
    };
    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Box sx={{ pt: "80px", pb: "20px" }}>
      <Typography variant="h6" sx={{ marginBottom: "14px" }}>
        Add Product
      </Typography>
      <Paper
        sx={{
          boxShadow: "none !important",
          borderRadius: "12px",
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "divider",
          p: "20px",
          maxWidth: "800px",
          margin: "0 auto",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        <Box sx={{ my: 2 }}>
          <TextField
            label="Product Name"
            variant="outlined"
            size="small"
            fullWidth
            value={data.name}
            onChange={(e) => setData({...data, name: e.target.value})}
          />
        </Box>
        <Box sx={{ mt: 4 }}>
          <TextField
            label="Product Description"
            variant="outlined"
            rows={4}
            fullWidth
            multiline
            value={data.description}
            onChange={(e) => setData({...data, description: e.target.value})}
          />
        </Box>
        <Box sx={{ mt: 4 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Category"
              value={data.type}
              onChange={(e) => setData({...data, type:e.target.value})}
            >
              {categories?.map(({ category_id, name }) => (
                <MenuItem value={name} key={category_id}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ mt: 4 }}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Auction Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Auction Type"
              value={data.auctionType}
              onChange={(e) => {setData({...data, auctionType:e.target.value})}}
            >
              {auctionTypes?.map(({ type_id, type }) => (
                <MenuItem value={type} key={type_id}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        {/* <Box>
          <Autocomplete
            sx={{ mt: 4 }}
            multiple
            id="tags-filled"
            options={categories.map((option) => option.name)}
            defaultValue={[categories[0].name, categories[3].name]}
            freeSolo
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  variant="standard"
                  label={option}
                  {...getTagProps({ index })}
                />
              ))
            }
            renderInput={(params) => (
              <TextField
                {...params}
                helperText="Select a tag or type any tag and press enter"
                variant="outlined"
                label="Product Tags"
                placeholder="Product Tags"
              />
            )}
          />
        </Box> */}
        <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 4 }}>
          <TextField
            label="Price"
            variant="outlined"
            rows={4}
            fullWidth
            size="small"
            value={data.startPrice}
            onChange={(e) => setData({...data, startPrice: e.target.value})}
          />
        </Box>
        <Box sx={{ mt: 4, display: "flex", alignItems: "center", gap: 17 }}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Auction Start Date"
              variant="outlined"
              minDate={new Date()}
              rows={4}
              size="small"
              fullWidth
              value={data.startDate}
              onChange={handleStartDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
              label="Auction End Date"
              variant="outlined"
              minDate={new Date()}
              rows={4}
              size="small"
              fullWidth
              value={data.endDate}
              onChange={handleEndDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <input
          type="file"
          hidden
          ref={imageInput}
          onChange={(e) => {
            setData({...data, image: e.target.files[0]})
          }}
        />
        <UploadBox onClick={() => imageInput.current.click()}>
          {data.image ? (
            <img
              src={data.image && URL.createObjectURL(data.image)}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          ) : (
            <Box sx={{ textAlign: "center" }}>
              <BiImageAdd style={{ fontSize: "50px", color: "#027edd" }} />
              <Typography>
                Drop your image here or{" "}
                <span style={{ color: "#027edd", cursor: "pointer" }}>
                  browse
                </span>
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                JPG, PNG and GIF images are allowed
              </Typography>
            </Box>
          )}
        </UploadBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "30px",
          }}
        >
          <Button variant="contained" sx={{ borderRadius: "20px" }} onClick={createProduct()}>
            Submit
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AddProduct;
