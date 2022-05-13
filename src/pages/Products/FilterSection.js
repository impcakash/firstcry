import React from "react";
import { Box } from "@mui/system";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const FilterSection = ({ getMensData }) => {
  return (
    <Box
      bgcolor="pink"
      flex={1}
      p={2}
      sx={{
        width: "150px",
        marginLeft: "20px",
        marginTop: "20px",
        padding: "10px",
        color: "black",
      }}
    >
      {" "}
      <List>
        <ListItem key={0} disablePadding>
          <ListItemButton>
            <ListItemText
              onClick={() => {
                getMensData(1, "Bestseller");
              }}
              primary="Bestseller"
            />
          </ListItemButton>
        </ListItem>
        <ListItem key={1} disablePadding>
          <ListItemButton>
            <ListItemText
              onClick={() => {
                getMensData(1, "Vehicle");
              }}
              primary="Vehicle"
            />
          </ListItemButton>
        </ListItem>
        <ListItem key={2} disablePadding>
          <ListItemButton>
            <ListItemText
              onClick={() => {
                getMensData(1, "Puzzle");
              }}
              primary="Puzzle"
            />
          </ListItemButton>
        </ListItem>
        <ListItem key={3} disablePadding>
          <ListItemButton>
            <ListItemText
              onClick={() => {
                getMensData(1, "Sports");
              }}
              primary="Sports"
            />
          </ListItemButton>
        </ListItem>
        <ListItem key={4} disablePadding>
          <ListItemButton>
            <ListItemText primary="Color" />
          </ListItemButton>
        </ListItem>
        <ListItem key={4} disablePadding>
          <ListItemButton>
            <ListItemText primary="Size" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default FilterSection;
