import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
export default function Footer() {
    return(
        <Box sx={{
            position: 'relative',
            bottom: 0,
            width: '100%',
            backgroundColor: '#EFEFEF',
            p: 2,
        }}>
            <Container>
                <Typography sx={{fontFamily: 'Roboto, sans-serif'}}  variant="body1" align="center">
                    copyright @ 2022
                </Typography>
            </Container>
        </Box>
    );
}
