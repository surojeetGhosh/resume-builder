
import { TextField, Grid } from "@mui/material";
import React from "react";
const Personal = (props) => {
    const [formData, onDataChange] = React.useState({
        fullname: "",
        degree: "",
        contact: "",
        email: ""
    });
    
    const [formError, onError] = React.useState({
        fullname: false,
        degree: false,
        contact: false,
        email: false
    });

    function onFormChange(e) {
        if(e.target.id === "contact" && (e.target.value.length !== 10 || Number(e.target.value))) {
            
        }
        const obj = {...formData, [e.target.id]: e.target.value};
        console.log(obj);
        onDataChange(obj);
    }


    return(
        <Grid container justifyContent={"center"} columnSpacing={2} rowSpacing={2}>
            <Grid item>
                <TextField id="fullname" onChange={onFormChange} value={formData.fullname}  label="Full Name" variant="filled" error={formError.fullname} required/>
            </Grid>
            <Grid item>
                <TextField id="degree" value={formData.degree} onChange={onFormChange} label="Degree" variant="filled" error={formError.degree} required/>
            </Grid>
            <Grid item>
                <TextField id="contact" value={formData.contact} onChange={onFormChange} minRows={10} maxRows={10} label="Phone number" error={formError.contact} variant="filled" required/>            </Grid>
            <Grid item>
                <TextField id="email" value={formData.email} onChange={onFormChange} type={"email"} label="E-mail" variant="filled" error={formError.contact} required/>
            </Grid>
        </Grid>
    );
}

export default Personal;