import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/common/Navbar";
import {
  AddProduct,
  Brands,
  Customers,
  Inbox,
  Orders,
  OrderTemplate,
  ProductCategories,
  Products,
  ProductSales,
  Reviews,
  SalesAnalytics,
  Settings,
  SingleCustomer,
  SingleOrder,
  SingleProduct,
  Suppliers,
  Transactions,
} from "./pages";
import Footer from "./components/common/Footer";

const sideBarWidth = 250;

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Products />} />
        <Route path="/signup" element={<AddProduct />} />
      </Routes>
      <Box sx={{ display: "flex" }}>
        <Navbar
          sideBarWidth={sideBarWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Sidebar
          sideBarWidth={sideBarWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            px: { xs: 1, md: 2 },
            width: { xs: "100%", md: `calc(100% - ${sideBarWidth}px)` },
          }}
        >
          {/* Routes */}
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/products/:id" element={<Dashboard />} />
            <Route path="/products/list" element={<ProductCategories />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/customers/:id" element={<SingleCustomer />} />
            <Route path="/sales/analysis" element={<SalesAnalytics />} />
            <Route path="/sales" element={<ProductSales />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/template" element={<OrderTemplate />} />
            <Route path="/orders/:id" element={<SingleOrder />} />
            <Route path="/profile/settings" element={<Settings />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/inbox" element={<Inbox />} />
          </Routes>
          <Footer />
        </Box>
      </Box>
    </div>

  );
}

export default App;
