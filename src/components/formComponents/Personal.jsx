import { TextField, Grid, Input } from "@mui/material";
import React from "react";

const Personal = (props) => {
  return (
    <Grid container justifyContent={"center"} columnSpacing={2} rowSpacing={2}>
      <Grid sx={{ textAlign: "center" }} item lg={12} md={12}>
        <Input
          accept="image/*"
          id="imageFile"
          type="file"
          onChange={props.onFormChange}
        />
      </Grid>
      <Grid sx={{ textAlign: "center" }} item lg={6}>
        <TextField
          id="fullname"
          onChange={props.onFormChange}
          value={props.formData.fullname}
          label="Full Name"
          variant="filled"
          error={props.formError.fullname}
          required
        />
      </Grid>
      <Grid sx={{ textAlign: "center" }} item lg={6}>
        <TextField
          id="degree"
          value={props.formData.degree}
          onChange={props.onFormChange}
          label="Degree"
          variant="filled"
          error={props.formError.degree}
          required
        />
      </Grid>
      <Grid sx={{ textAlign: "center" }} item lg={6}>
        <TextField
          id="contact"
          value={props.formData.contact}
          onChange={props.onFormChange}
          minRows={10}
          maxRows={10}
          label="Phone number"
          error={props.formError.contact}
          variant="filled"
          required
        />{" "}
      </Grid>
      <Grid sx={{ textAlign: "center" }} item lg={6}>
        <TextField
          id="email"
          value={props.formData.email}
          onChange={props.onFormChange}
          type={"email"}
          label="E-mail"
          variant="filled"
          error={props.formError.email}
          required
        />
      </Grid>
      <Grid sx={{ textAlign: "center" }} item lg={12} md={12}>
        <TextField
          fullWidth
          variant="filled"
          id="address"
          label="Permanent Address"
          multiline
          rows={4}
          value={props.formData.address}
          onChange={props.onFormChange}
          required
        />
      </Grid>
    </Grid>
  );
};

export default Personal;
