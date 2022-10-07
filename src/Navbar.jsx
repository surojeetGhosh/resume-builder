import {
  AppBar,
  CssBaseline,
  Toolbar,
  Avatar,
  Button,
  Typography,
  Grid,
} from "@mui/material";

import DownloadIcon from "@mui/icons-material/Download";

const NavBar = () => {
  return (
    <AppBar sx={{ border: 0 }} position="relative" color="transparent">
      <Toolbar>
        <Grid justifyContent="space-between" container>
          <Grid item>
            <Avatar variant="rounded" alt="brand-image" src="Logo.png" />
          </Grid>
          <Grid item>
            <Button
              sx={{ justifySelf: "flex-end" }}
              variant="contained"
              color="warning"
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