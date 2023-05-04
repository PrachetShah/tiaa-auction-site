import React from "react";
import {styled} from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {BsChevronDown} from "react-icons/bs";
// import { AiFillCheckCircle } from "react-icons/ai";

const FairFAQs = () => {
  const Accordion = styled(props => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({theme}) => ({
    borderBottom: `1px solid #16bdff`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));

  return (
    <div id="FAQ's">
      <div className="pastCompanies">--------- FAQ's</div>
      <div
        id="FAQS"
        className="mobileview"
        style={{
          color: "black",
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          fontSize: "18px",
        }}
      >
        <div
          style={{
            width: "80%",
            paddingBottom: "5%",
            paddingTop: "2%",
            margin: "40px",
          }}
        >
          <div data-aos="fade-up">
            <Accordion
              defaultExpanded={true}
              className="accordionFair"
              style={{borderBottom: "#FFFFFF"}}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{color: "#2ABEA2", padding: "5px"}} />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                >
                  Who all can take part in the internship fair?
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{backgroundColor: "#F2FCFB"}}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "16px",
                  }}
                >
                  Students from any department from DJ Sanghvi can take part in
                  the IF belonging to the 2nd, 3rd and 4th year.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up">
            <Accordion
              className="accordionFair"
              style={{borderBottom: "#FFFFFF"}}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{color: "#2ABEA2", padding: "5px"}} />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                >
                  What roles can you apply for?
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{backgroundColor: "#F2FCFB"}}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "16px",
                  }}
                >
                  There are Technical as well as Non-Technical roles that you
                  can apply for. Technical roles include ML Engineer, Software
                  Developer, Data Analyst, etc. Non-Technical roles include
                  Business Development, Marketing, Content Writing, Video
                  Editing, etc.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up">
            <Accordion
              className="accordionFair"
              style={{borderBottom: "#FFFFFF"}}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{color: "#2ABEA2", padding: "5px"}} />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                >
                  What are the perks for ACM members?
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{backgroundColor: "#F2FCFB"}}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "16px",
                  }}
                >
                  ACM Members will have access to mock interviews and can apply
                  upto 3 companies for free for the Internship Fair after which
                  regular application fees will be charged per interview.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up">
            <Accordion
              className="accordionFair"
              style={{borderBottom: "#FFFFFF"}}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{color: "#2ABEA2", padding: "5px"}} />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                >
                  How can Non-ACM members apply for IF?
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{backgroundColor: "#F2FCFB"}}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "16px",
                  }}
                >
                  IF is open to everyone and interested candidates will have to
                  pay a small fee of ₹100 per company for which they can apply
                  to any number of roles provided by them.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up">
            <Accordion
              className="accordionFair"
              style={{borderBottom: "#FFFFFF"}}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{color: "#2ABEA2", padding: "5px"}} />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                >
                  How many internship interviews can we sit for?
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{backgroundColor: "#F2FCFB"}}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "16px",
                  }}
                >
                  You can sit for as many interviews you wish to apply for.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up">
            <Accordion
              className="accordionFair"
              style={{borderBottom: "#FFFFFF"}}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{color: "#2ABEA2", padding: "5px"}} />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                >
                  What are some of the perks of getting an internship?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{backgroundColor: "#F2FCFB"}}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "16px",
                  }}
                >
                  You'll receive a guaranteed stipend, gain industry experience
                  and based on your performance you can also receive a Letter of
                  Recommendation .{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up">
            <Accordion
              className="accordionFair"
              style={{borderBottom: "#FFFFFF"}}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{color: "#2ABEA2", padding: "5px"}} />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                >
                  Will the Internship Fair be conducted online or offline?
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{backgroundColor: "#F2FCFB"}}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "16px",
                  }}
                >
                  IF will be conducted in Hybrid Mode and based on your
                  preference and available slots you will be allocated an Online
                  or Offline interview.{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up">
            <Accordion
              className="accordionFair"
              style={{borderBottom: "#FFFFFF"}}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{color: "#2ABEA2", padding: "5px"}} />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                >
                  When will the internship start?
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{backgroundColor: "#F2FCFB"}}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "16px",
                  }}
                >
                  The Internships will commence after the end semester exams for
                  at least one month. Based on your performance and company
                  requirements, you can receive an extension in your internship
                  tenure.{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up">
            <Accordion
              className="accordionFair"
              style={{borderBottom: "#FFFFFF"}}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{color: "#2ABEA2", padding: "5px"}} />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                >
                  What are some of the companies you can expect?
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{backgroundColor: "#F2FCFB"}}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "16px",
                  }}
                >
                  Big companies, as well as emerging startups, visit the
                  internship fair. Some of the known companies that visited last
                  year are Yocket, MonkE, PrixLED, CPPSecrets.com, etc.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up">
            <Accordion
              className="accordionFair"
              style={{borderBottom: "#FFFFFF"}}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{color: "#2ABEA2", padding: "5px"}} />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                >
                  Will the internships be Remote or On-Site?
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{backgroundColor: "#F2FCFB"}}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "16px",
                  }}
                >
                  Your internship can either be remote or on-site as per the
                  company requirements.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
          <div data-aos="fade-up">
            <Accordion
              className="accordionFair"
              style={{borderBottom: "#FFFFFF"}}
            >
              <AccordionSummary
                expandIcon={
                  <BsChevronDown style={{color: "#2ABEA2", padding: "5px"}} />
                }
                aria-controls="panel2a-content"
                id="panel2a-header"
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  boxShadow: "rgb(49, 47, 47, 0.12) 2px 2px 2px 2px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Poppins",
                    color: "#585E62",
                    textAlign: "left",
                    fontWeight: "bold",
                  }}
                  variant="h6"
                >
                  Do you require any prior experience to apply for IF?{" "}
                </Typography>
              </AccordionSummary>
              <AccordionDetails style={{backgroundColor: "#F2FCFB"}}>
                <Typography
                  style={{
                    textAlign: "left",
                    fontFamily: "Poppins",
                    color: "#585E62",
                    fontSize: "16px",
                  }}
                >
                  No, you don't need any prior experience to apply for IF.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FairFAQs;