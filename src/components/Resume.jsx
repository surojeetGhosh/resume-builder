import { Typography } from "@mui/material";
import React from "react";



export const Resume = (props) => {
  
  
  return (
    <div>
      <Typography
        sx={{ fontFamily: "Merriweather, serif", fontSize: "1rem", mt: 2 }}
        variant="h6"
        align={"center"}
      >
        Final View
      </Typography>

      {(imageFile !== null)? <Avatar alt="Profile-pic" src={imageFile} />: null }
    </div>
  );
};
