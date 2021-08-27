import React from "react";
import { Link } from "react-router-dom";
import { Divider, Grid, GridColumn, GridRow, Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <div className="footer">
      <Grid container>
        <GridColumn mobile={12} tablet={7} computer={5}>
          <GridRow style={{ padding: "5px", color: "white" }}>
            Usefull Link
          </GridRow>
          <GridRow style={{ padding: "5px" }}>
            <Link style={{ color: "orange" }} to="/careers">
              Carrers
            </Link>
          </GridRow>
          <GridRow style={{ padding: "5px" }}>
            <Link style={{ color: "orange" }} to="/ Quality_Policy">
              Quality Policy
            </Link>
          </GridRow>
          <GridRow style={{ padding: "5px" }}>
            <Link style={{ color: "orange" }} to="/ Privacy_Policy">
              Privacy Policy
            </Link>
          </GridRow>

          <GridRow style={{ padding: "5px" }}>
            <Link style={{ color: "orange" }} to="/ Shopping_Privacy">
              Shopping Privacy
            </Link>
          </GridRow>

          <GridRow style={{ padding: "5px" }}>
            <Link style={{ color: "orange" }} to="/ Cancellation_Policy">
              Cancellation Policy
            </Link>
          </GridRow>

          <GridRow style={{ padding: "5px" }}>
            <Link style={{ color: "orange" }} to="/Return_&_Refund Policy">
              Return & Refund Policy
            </Link>
          </GridRow>

          <GridRow style={{ padding: "5px" }}>
            <Link style={{ color: "orange" }} to="/Terms_&_Service">
              Terms & Service
            </Link>
          </GridRow>
        </GridColumn>

        <GridColumn mobile={12} tablet={7} computer={5}>
          <GridRow style={{ padding: "5px", color: "white" }}>
            Contact Us
          </GridRow>
          <GridRow style={{ padding: "5px" }}>
            <label style={{ color: "white" }}>Landline : </label>
            <a style={{ color: "orange" }} href="tel:+91-22-42555333">
              +91-22-42555333
            </a>
          </GridRow>

          <GridRow style={{ padding: "5px" }}>
            <label style={{ color: "white" }}>Mobile : </label>
            <a style={{ color: "orange" }} href="tel: +91-8104971151">
              +91-8104971151 ,
            </a>
            <a style={{ color: "orange" }} href="tel:+91-8104971154">
              +91-8104971154
            </a>
          </GridRow>

          <GridRow style={{ padding: "5px" }}>
            <label style={{ color: "white" }}>Email : </label>
            <a style={{ color: "orange" }} href="mailto:enuiry@libratherm.com">
              enuiry@libratherm.com
            </a>
          </GridRow>

          <GridRow style={{ padding: "5px" }}>
            <label style={{ color: "white" }}>
              401-403, Diamond Industrial Estate, Ketki Pada Road, Dahisar
              (East), Mumbai 400068, Maharashtra, India.
            </label>
          </GridRow>

          <GridRow style={{ padding: "5px" }}>
            <label style={{ color: "white" }}>We are Social</label>
          </GridRow>
          <GridRow style={{ padding: "5px" }}>
            <a href="https://www.facebook.com/LibrathermInstruments/">
              <Icon name="facebook" size="big" color="blue" />
            </a>
            <a href="https://twitter.com/LibrathermIPL">
              <Icon name="twitter" size="big" color="blue" />
            </a>
            <a href="https://www.linkedin.com/company/3095641/admin/">
              <Icon name="linkedin" size="big" color="blue" />
            </a>
            <a href="https://www.youtube.com/channel/UCQeScLexXRxt1P8-My6jOvA">
              <Icon name="youtube" size="big" color="red" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=912242555333&text=Hello%2C+I+want+to+know+more+about+Libratherm%27s+Products.&app_absent=0">
              <Icon name="whatsapp" size="big" color="green" />
            </a>
          </GridRow>
        </GridColumn>

        <GridColumn mobile={12} tablet={7} computer={5}>
          <GridRow style={{ padding: "10px", color: "white" }}>
            Download Catalog
          </GridRow>
          <GridRow textAlign="center" style={{ padding: "10px" }}>
            <a href="#">
              <Icon name="download" size="huge" color="green" />
            </a>
          </GridRow>
          <GridRow style={{ padding: "10px" }}>
            <a href="#">Whatsapp me catalog</a>
          </GridRow>
        </GridColumn>
      </Grid>
    </div>
  );
};
export default Footer;
