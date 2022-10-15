import { TextField, Grid, Fab, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Container } from "@mui/system";
import React from "react";

const Personal = (props) => {
  const [institute, onInsChange] = React.useState({
    name: "",
    degree: "",
    year: "",
    result: "",
  });

  const changeEdu = (e) => {
    onInsChange({ ...institute, [e.target.id]: e.target.value });
  };

  const handleClick = () => {
    props.onEduAdd([...props.education, institute]);
    onInsChange({
      name: "",
      degree: "",
      year: "",
      result: "",
    });
  };

  const deleteIns = (e) => {
    var arr = [...props.education];
    arr.splice(e.target.value, 1);
    props.onEduAdd(arr);
  };

  return (
    <Grid container>
      <Grid item lg={12} md={12}>
        <Container sx={{ marginBottom: "10px" }}>
          {props.education.map((ins, id) => (
            <Container sx={{ marginBottom: "10px" }} key={id}>
              <Typography variant="h6">{ins.name}</Typography>
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontSize: "0.8rem",
                  display: "inline-block",
                  margin: "10px",
                }}
              >
                {ins.degree}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  display: "inline-block",
                  margin: "10px",
                }}
              >
                {ins.year}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  display: "inline-block",
                  margin: "10px",
                }}
              >
                {ins.result} / 100
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
          id="name"
          onChange={changeEdu}
          value={institute.name}
          label="Education Institute"
          variant="filled"
          required
          fullWidth
        />
        <TextField
          id="degree"
          onChange={changeEdu}
          value={institute.degree}
          label="Degree"
          variant="filled"
          required
          fullWidth
        />
        <TextField
          id="year"
          onChange={changeEdu}
          value={institute.year}
          label="Year"
          variant="filled"
          required
          fullWidth
        />
        <TextField
          id="result"
          onChange={changeEdu}
          value={institute.result}
          label="Result (in percentage)"
          variant="filled"
          required
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
