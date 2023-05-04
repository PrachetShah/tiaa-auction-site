import { Grid, Typography, Stack } from "@mui/material";
import "./InternshipFair.css";
import { MdLocationOn } from "react-icons/md";
import { Button } from "@mui/material";
import { CgArrowLongRight } from "react-icons/cg";
import {RiInstagramFill, RiFacebookCircleFill, RiLinkedinBoxFill} from "react-icons/ri";

export default function Contact() {
  return (
    <div id='Contact Us'>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          md={7}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 className="heading">-------- CONTACT US</h1>
          <iframe
            className="map"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.002340483474!2d72.83433341393042!3d19.10755325594757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sDwarkadas%20J.%20Sanghvi%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1638180891128!5m2!1sen!2sin"
            loading="lazy"
            style={{
              height: "80%",
              width: "80%",
              padding: "5% 10% 5% 15%",
            }}
          />
          <div className="address">
            <MdLocationOn
              style={{
                fontSize: "4.5rem",
                color: "#187271",
                paddingInline: "2%",
              }}
            />
            <p className="addressContact">
              No. U, 15, Bhaktivedanta Swami Rd, opp. Cooper Hospital, Navpada,
              JVPD Scheme, Vile Parle, Mumbai, Maharashtra 400056
            </p>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          columnGap={2}
          style={{
            padding: "10% 4% 8% 10%",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontFamily: "montserrat",
              fontSize: "17px",
              color: "black",
            }}
          >
            <div>
            </div>
            <div style={{ textAlign: "left" }}>
              <Typography variant="h4"> For Companies </Typography>
              <p style={{ fontSize: "20px", py:"3px", color: "black" }}>
                Interested in Bidding in Auction Lots?
              </p>
              <a
                href="https://forms.gle/n6LhNHRWZLSxsXwHA"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Button
                  style={{
                    backgroundColor: "#187271",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    marginBottom: "20px",
                    marginTop: "5px",
                    padding: "6px",
                  }}
                >
                  Join Now
                  <CgArrowLongRight style={{ fontSize: "1.8rem", paddingLeft: "1rem" }}/>
                </Button>
              </a>
              <Typography variant="h4" className="phoneHeading"> Contact Us </Typography>
              <div style={{ textAlign: "left" }}>
                <a
                  style={{ color: "#fff", textDecoration: "none" }}
                  href="tel:+91 9987748170"
                >
                  <p style={{ fontSize: "20px", color: "black" }}>
                  Mr ABC - 1122334455
                  </p>
                </a>
                <a
                  style={{ color: "#fff", textDecoration: "none" }}
                  href="tel:+91 9819705248"
                >
                  <p style={{ fontSize: "20px", color: "black" }}>
                  Mr XYZ - 1122334455
                  </p>
                </a>
                <Stack direction="row" style={{ paddingTop: "5px" }}>
                  <a
                    href="# "
                    rel="noreferrer"
                    target="_blank"
                    style={{
                      color: "#187271",
                      fontSize: "1.7rem",
                      padding: "2%",
                    }}
                  >
                    <RiInstagramFill style={{fontSize:"2rem"}}/>
                  </a>
                  <a
                    href="https://in.linkedin.com/company/dj-sanghvi-acm"
                    rel="noreferrer"
                    target="_blank"
                    style={{
                      color: "#187271",
                      fontSize: "1.7rem",
                      padding: "2%",
                    }}
                  >
                    <RiLinkedinBoxFill  style={{fontSize:"2rem"}}/>
                  </a>
                  <a
                    href="https://www.facebook.com/djscoe.acm.5"
                    rel="noreferrer"
                    target="_blank"
                    style={{
                      color: "#187271",
                      fontSize: "1.7rem",
                      padding: "2%",
                    }}
                  >
                    <RiFacebookCircleFill  style={{fontSize:"2rem"}}/>
                  </a> 
                </Stack>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}