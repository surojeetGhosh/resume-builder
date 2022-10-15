import { TextField, Grid } from "@mui/material";
import React from "react";

const Personal = (props) => {
  return (
    <Grid container justifyContent={"center"}>
      <Grid sx={{ textAlign: "center" }} item lg={12} md={12}>
        <TextField
          fullWidth
          variant="filled"
          id="description"
          label="Brief Overview"
          multiline
          rows={4}
          value={props.formData.description}
          onChange={props.onFormChange}
          required
        />
      </Grid>
    </Grid>
  );
};

export default Personal;
