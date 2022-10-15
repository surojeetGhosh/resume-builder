import { Grid, Divider } from "@mui/material";
import { ResumeForm } from "./ResumeForm";
import { Resume } from "./Resume";
import React from "react";

export function Playground() {
  const [formData, onDataChange] = React.useState({
    fullname: "",
    degree: "",
    contact: "",
    email: "",
    address: "",
    description: ""
  });

  const [skills, onSkillsChange] = React.useState([]);

  const [formError, onError] = React.useState({
    fullname: false,
    degree: false,
    contact: false,
    email: false,
  });

  const [image, onChangeImg] = React.useState(null);
  function onFormChange(e) {
    if (e.target.id === "imageFile") {
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
    <div>
      <Grid columnSpacing={2} sx={{ mt: 1, minHeight: "1000px" }} container>
        <Grid lg={6} md={6} sx={{ width: "100%" }} item>
          <ResumeForm
            formData={formData}
            onFormChange={onFormChange}
            formError={formError}
            onError={onError}
            skills = {skills}
            onSkillsChange = {onSkillsChange}
          />
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ ml: "-1px" }} />
        <Grid item lg={6} md={6} sx={{ width: "100%" }}>
          <Resume src={image} formData={formData} skills={skills}/>
        </Grid>
      </Grid>
    </div>
  );
}
