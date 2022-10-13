import { TextField, Grid, Input, Avatar } from "@mui/material";
import React from "react";
const Personal = (props) => {
  const [formData, onDataChange] = React.useState({
    fullname: "",
    degree: "",
    contact: "",
    email: "",
  });

  const [formError, onError] = React.useState({
    fullname: false,
    degree: false,
    contact: false,
    email: false,
  });

  const [image, onChangeImg] = React.useState(null); 

  function onFormChange(e) {
    
    if( e.target.id === "imageFile") {
      var file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        onChangeImg(reader.result);
      };
    }
    const obj = { ...formData, [e.target.id]: e.target.value };
    onDataChange(obj);
  }

  return (
    <Grid container justifyContent={"center"} columnSpacing={2} rowSpacing={2}>
      {(image !== null)? <Avatar alt="Profile-pic" src={image} />: null }
      <Grid sx={{textAlign: "center"}} item lg={12} md={12}>
        <Input
          accept="image/*"
          id="imageFile"
          type="file"
          onChange={onFormChange}
        />
      </Grid>
      <Grid sx={{textAlign: "center"}} item lg={6}>
        <TextField
          id="fullname"
          onChange={onFormChange}
          value={formData.fullname}
          label="Full Name"
          variant="filled"
          error={formError.fullname}
          required
        />
      </Grid>
      <Grid sx={{textAlign: "center"}} item lg={6}>
        <TextField
          id="degree"
          value={formData.degree}
          onChange={onFormChange}
          label="Degree"
          variant="filled"
          error={formError.degree}
          required
        />
      </Grid>
      <Grid sx={{textAlign: "center"}} item lg={6}>
        <TextField
          id="contact"
          value={formData.contact}
          onChange={onFormChange}
          minRows={10}
          maxRows={10}
          label="Phone number"
          error={formError.contact}
          variant="filled"
          required
        />{" "}
      </Grid>
      <Grid sx={{textAlign: "center"}} item lg={6}>
        <TextField
          id="email"
          value={formData.email}
          onChange={onFormChange}
          type={"email"}
          label="E-mail"
          variant="filled"
          error={formError.email}
          required
        />
      </Grid>
    </Grid>
  );
};

export default Personal;
