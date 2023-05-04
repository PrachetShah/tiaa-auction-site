import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material";
import React from "react";
import { links } from "../../data/links";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import { useLocation } from 'react-router-dom';
import { RiAuctionLine } from "react-icons/ri"


const Sidebar = ({ window, sideBarWidth, mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    <div>
      <Toolbar>
        <RiAuctionLine className="text-2xl text-white" />

        <Typography variant="h6" sx={{ fontWeight: "bold", ml: 2 }}>
          WinWise
        </Typography>
      </Toolbar>
      <Divider />
      <List disablePadding>
        {links?.map((link, index) =>
          link?.subLinks ? (
            <SidebarItemCollapse {...link} key={index} />
          ) : (
            <SidebarItem {...link} key={index} />
          )
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const location = useLocation();
  const path = location.pathname;
  return (
    path == '/login' || path == '/signup' || path == "/inbox" ? null :
      <Box
        component="nav"
        sx={{ width: { md: sideBarWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* For Mobile and Small Sized Tablets. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: sideBarWidth,
              backgroundColor: "sidebar.background",
              color: "sidebar.textColor",
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* For Desktop and large Sized Tablets. */}
        <Drawer
          variant="permanent"
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            "& .MuiDrawer-paper": {
              width: sideBarWidth,
              boxSizing: "border-box",
              borderRight: 0,
              backgroundColor: "sidebar.background",
              color: "sidebar.textColor",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
  );
};

export default Sidebar;
