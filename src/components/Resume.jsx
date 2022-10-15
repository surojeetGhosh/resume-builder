import { Typography, Avatar, Card, CardContent } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";

export const Resume = (props) => {
  return (
    <div>
      <Typography
        sx={{ fontFamily: "Merriweather, serif", fontSize: "1rem", mt: 2 }}
        variant="h6"
        align={"center"}
      >
        Final View
      </Typography>
      <Card
        sx={{ width: "100%", marginBottom: "10px", backgroundColor: "#F5EFE6" }}
        id="Personal-Section"
      >
        <CardContent>
          {props.src !== null ? (
            <Avatar
              sx={{
                height: 100,
                width: 100,
                float: "right",
                marginBottom: "10px",
              }}
              alt="Profile-pic"
              src={props.src}
            />
          ) : null}
          {props.formData.fullname !== "" ? (
            <Typography
              sx={{ clear: "right", textAlign: "right", fontWeight: "900" }}
            >
              {props.formData.fullname}
            </Typography>
          ) : null}
          {props.formData.degree !== "" ? (
            <Typography
              sx={{
                clear: "right",
                textAlign: "right",
                fontStyle: "italic",
                fontSize: "0.8rem",
              }}
            >
              {props.formData.degree}
            </Typography>
          ) : null}
          {props.formData.contact !== "" ? (
            <Typography
              sx={{ clear: "right", textAlign: "right", fontSize: "0.8rem" }}
            >
              <LocalPhoneIcon sx={{ fontSize: "0.8rem" }} /> {"+91"}{" "}
              {props.formData.contact}
            </Typography>
          ) : null}
          {props.formData.email !== "" ? (
            <Typography
              sx={{ clear: "right", textAlign: "right", fontSize: "0.8rem" }}
            >
              <EmailIcon sx={{ fontSize: "0.8rem" }} /> {props.formData.email}
            </Typography>
          ) : null}
          {props.formData.address !== "" ? (
            <Typography
              sx={{
                clear: "right",
                textAlign: "right",
                width: "50%",
                marginLeft: "auto",
                marginRight: "0",
                fontSize: "0.8rem",
              }}
            >
              <HomeIcon sx={{ fontSize: "0.8rem" }} /> {props.formData.address}
            </Typography>
          ) : null}
        </CardContent>
      </Card>
      <Card
        sx={{ width: "100%", backgroundColor: "#425F57", color: "white" }}
        id="description"
      >
        <CardContent
          sx={{
            padding: "1%",
            "&:last-child": {
              paddingBottom: "1%",
            },
          }}
        >
          <Typography sx={{ padding: 0 }} variant="h6">
            BRIEF OVERVIEW
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
