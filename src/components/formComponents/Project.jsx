import {
  TextField,
  Grid,
  Fab,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Container } from "@mui/system";
import React from "react";

const Personal = (props) => {
  const [info, onInfoChange] = React.useState({
    type: "",
    title: "",
    certno: "",
    desc: "",
  });

  const changeInfo = (e) => {
    onInfoChange({ ...info, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    props.onProjAdd([...props.project, info]);
    onInfoChange({
      type: "",
      title: "",
      certno: "",
      desc: "",
    });
  };

  const deleteIns = (e) => {
    var arr = [...props.project];
    arr.splice(e.target.value, 1);
    props.onProjAdd(arr);
  };

  const typeVal = [
    { val: "Project" },
    { val: "Certificate" },
    { val: "Internship" },
  ];

  return (
    <Grid container>
      <Grid item lg={12} md={12}>
        <Container sx={{ marginBottom: "10px" }}>
          {props.project.map((ins, id) => (
            <Container sx={{ marginBottom: "10px" }} key={id}>
              <Typography variant="h6">{ins.type}</Typography>
              <Typography
                sx={{
                  fontWeight: "900",  
                  fontSize: "1rem",
                  margin: "10px",
                }}
              >
                {ins.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  margin: "10px",
                }}
              >
                <span style={{fontWeight: "900"}}>Certificate No.:</span> {ins.certno}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  margin: "10px",
                }}
              >
                {ins.desc}
              </Typography>
              <Button value={id} onClick={deleteIns}>
                x
              </Button>
            </Container>
          ))}
        </Container>
      </Grid>

      <Grid item lg={12} md={12}>
        <TextField
          name="type"
          select
          label="Type"
          value={info.type}
          onChange={changeInfo}
          required
          fullWidth
        >
          {typeVal.map((option, id) => (
            <MenuItem key={id} value={option.val}>
              {option.val}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          name="title"
          onChange={changeInfo}
          value={info.title}
          label="Title"
          variant="filled"
          required
          fullWidth
        />
        <TextField
          name="certno"
          onChange={changeInfo}
          value={info.certno}
          label="Certificate Number"
          variant="filled"
          required
          fullWidth
        />
        <TextField
          name="desc"
          onChange={changeInfo}
          value={info.desc}
          label="Description"
          variant="filled"
          required
          multiline
          minRows={10}
          fullWidth
        />
        <Container align={"center"} sx={{ padding: "1%" }}>
          <Fab color="primary" onClick={handleClick} size={"small"}>
            <AddIcon />
          </Fab>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Personal;
