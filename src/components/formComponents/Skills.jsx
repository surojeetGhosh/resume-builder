import { TextField, Grid, Fab, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Container } from "@mui/system";
import React from "react";

const Personal = (props) => {
  const handleClick = () => {
    props.onSkillsChange([...props.skills, skill]);
    onSkillChange("");
  };
  const deleteSkill = (e) => {
    var arr = [...props.skills];
    arr.splice(e.target.value, 1)
    props.onSkillsChange(arr);
  }
  const changeSkill = (e) => {
    onSkillChange(e.target.value);
  };
  const [skill, onSkillChange] = React.useState("");
  return (
    <Grid container>
      <Grid item lg={12} md={12}>
        <Container sx={{ marginBottom: "10px" }}>
          {props.skills.map((skill, id) => (
            <Typography
              variant="h6"
              sx={{
                fontSize: "0.8rem",
                display: "inline-block",
                margin: "5px",
              }}
              key={id}
            >
              {skill}
              <Button value={id} onClick={deleteSkill}>x</Button>
            </Typography>
          ))}
        </Container>
        <TextField
          id="skill"
          onChange={changeSkill}
          value={skill}
          label="Add Skill"
          variant="filled"
          required
          fullWidth
        />
        <Container align={"center"} sx={{padding: "1%"}}>
          <Fab color="primary" onClick={handleClick} size={"small"}>
            <AddIcon />
          </Fab>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Personal;
