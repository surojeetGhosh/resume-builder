import { Grid, Divider } from "@mui/material";
import { ResumeForm } from "./ResumeForm";
import { Resume } from "./Resume";

export function Playground() {
    return(
        <div>
           <Grid columnSpacing={2} sx={{mt: 1, minHeight: '1000px'}} container>
                <Grid xs={6} item>
                    <ResumeForm />
                </Grid>
                <Divider orientation="vertical" flexItem sx={{ ml: "-1px" }}/>
                <Grid item xs={6}>
                    <Resume />
                </Grid>
            </Grid> 
        </div>
    );
}