import { Grid, Divider } from "@mui/material";
import { ResumeForm } from "./ResumeForm";
import { Resume } from "./Resume";

export function Playground() {
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

  const [imageFile, setImage] = React.useState(null);
  return (
    <div>
      <Grid columnSpacing={2} sx={{ mt: 1, minHeight: "1000px" }} container>
        <Grid xs={6} item>
          <ResumeForm formData = {formData} onFormChange = {onFormChange}  />
        </Grid>
        <Divider orientation="vertical" flexItem sx={{ ml: "-1px" }} />
        <Grid item xs={6}>
          <Resume />
        </Grid>
      </Grid>
    </div>
  );
}
