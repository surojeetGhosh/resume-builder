import {
  Typography,
  Avatar,
  Card,
  CardContent,
  Container,
} from "@mui/material";
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
      <div id="divToPrint">
        <Card
          sx={{
            width: "100%",
            marginBottom: "10px",
            backgroundColor: "#F5EFE6",
          }}
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
                <HomeIcon sx={{ fontSize: "0.8rem" }} />{" "}
                {props.formData.address}
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
        <Card
          sx={{
            width: "100%",
            marginBottom: "10px",
            backgroundColor: "#F5EFE6",
          }}
          id="description-info"
        >
          <CardContent>
            {props.formData.description !== "" ? (
              <Typography variant="body1" sx={{ fontSize: "0.8rem" }}>
                {props.formData.description}
              </Typography>
            ) : null}
          </CardContent>
        </Card>
        <Card
          sx={{ width: "100%", backgroundColor: "#425F57", color: "white" }}
          id="skills"
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
              KEY SKILLS
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "100%",
            marginBottom: "10px",
            backgroundColor: "#F5EFE6",
          }}
          id="skills-info"
        >
          <CardContent>
            {props.skills.map((skill, id) => (
              <Typography
                variant="h6"
                sx={{
                  fontSize: "0.8rem",
                  display: "inline-block",
                  margin: "5px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  padding: "5px",
                }}
                key={id}
              >
                {skill}
              </Typography>
            ))}
          </CardContent>
        </Card>
        <Card
          sx={{ width: "100%", backgroundColor: "#425F57", color: "white" }}
          id="institute"
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
              EDUCATION
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "100%",
            marginBottom: "10px",
            backgroundColor: "#F5EFE6",
          }}
          id="institute-info"
        >
          <CardContent>
            {props.education.map((ins, id) => (
              <Container
                sx={{
                  marginBottom: "10px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  padding: "5px",
                }}
                key={id}
              >
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
              </Container>
            ))}
          </CardContent>
        </Card>
        <Card
          sx={{ width: "100%", backgroundColor: "#425F57", color: "white" }}
          id="project"
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
              PROJECT/ CERTIFICATION/ INTERNSHIP
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "100%",
            marginBottom: "10px",
            backgroundColor: "#F5EFE6",
          }}
          id="project-info"
        >
          <CardContent>
            {props.project.map((ins, id) => (
              <Container
                sx={{
                  marginBottom: "10px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  padding: "5px",
                }}
                key={id}
              >
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
                  <span style={{ fontWeight: "900" }}>Certificate No.:</span>{" "}
                  {ins.certno}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    margin: "10px",
                  }}
                >
                  {ins.desc}
                </Typography>
              </Container>
            ))}
          </CardContent>
        </Card>
        <Card
          sx={{ width: "100%", backgroundColor: "#425F57", color: "white" }}
          id="web-link"
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
              WEB LINK
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            width: "100%",
            marginBottom: "10px",
            backgroundColor: "#F5EFE6",
          }}
          id="web-link-info"
        >
          <CardContent>
            {props.webL.map((ins, id) => (
              <Container
                sx={{
                  marginBottom: "10px",
                  backgroundColor: "white",
                  borderRadius: "5px",
                  padding: "5px",
                }}
                key={id}
              >
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
              </Container>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
