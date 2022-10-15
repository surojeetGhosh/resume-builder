import { AppBar, Toolbar, Button, Typography, Grid } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import DownloadIcon from "@mui/icons-material/Download";

const NavBar = () => {
  async function printDocument() {
    const element = document.getElementById("divToPrint");
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("print.pdf");
  }
  return (
    <AppBar sx={{ border: 0 }} position="static" color="transparent">
      <Toolbar>
        <Grid justifyContent="space-between" alignItems={"center"} container>
          <Grid item>
            <Typography
              sx={{
                fontFamily: "Dancing Script, cursive",
                fontWeight: "bold",
                display: "inline-block",
              }}
              variant="h5"
            >
              Resume Builder
            </Typography>
          </Grid>
          <Grid item>
            <Button
              sx={{ backgroundColor: "#92B4EC" }}
              variant="contained"
              startIcon={<DownloadIcon />}
              size="small"
              onClick={printDocument}
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
