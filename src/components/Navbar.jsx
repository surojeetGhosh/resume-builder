import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Grid,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";

const NavBar = () => {
  return (
    <AppBar sx={{ border: 0}} position="static" color="transparent">
      <Toolbar>
        <Grid justifyContent="space-between" alignItems={"center"} container>
          <Grid item>
            <Typography sx={{fontFamily: 'Dancing Script, cursive', fontWeight: 'bold', display:'inline-block'}} variant="h5">Resume Builder</Typography>
          </Grid>
          <Grid item>
            <Button
              sx={{backgroundColor: '#92B4EC'}}
              variant="contained"
              startIcon={<DownloadIcon />}
              size="small"
            >
              <Typography variant="button">Resume</Typography>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;