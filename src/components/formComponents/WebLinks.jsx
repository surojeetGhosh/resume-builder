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
    link: "",
  });

  const changeInfo = (e) => {
    onInfoChange({ ...info, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    props.onLinkAdd([...props.webL, info]);
    onInfoChange({
      type: "",
      link: "",
    });
  };

  const deleteIns = (e) => {
    var arr = [...props.webL];
    arr.splice(e.target.value, 1);
    props.onLinkAdd(arr);
  };

  const typeVal = [
    { val: "GitHub" },
    { val: "CodeChef" },
    { val: "CodeForces" },
    { val: "LinkedIn" },
    { val: "WhatsApp" },
  ];

  return (
    <Grid container>
      <Grid item lg={12} md={12}>
        <Container sx={{ marginBottom: "10px" }}>
          {props.webL.map((ins, id) => (
            <Container sx={{ marginBottom: "10px" }} key={id}>
              <Typography
                sx={{
                  fontWeight: "900",
                  fontSize: "0.8rem",
                  display: "inline-block",
                  margin: "10px",
                }}
              >
                {ins.type}:
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.8rem",
                  display: "inline-block",
                  margin: "10px",
                }}
              >
                {ins.link}
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
          name="link"
          onChange={changeInfo}
          value={info.link}
          label="Link"
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
