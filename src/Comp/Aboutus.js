import React, { useState } from "react";
import {
  Container,
  Header,
  Segment,
  Breadcrumb,
  Divider,
  GridRow,
  GridColumn,
  Grid,
  Image,
} from "semantic-ui-react";

const Aboutus = () => {
  const [sections, setsections] = useState([
    { key: "Home", content: "Home", link: true },
    { key: "Store", content: "About Us", link: true },
  ]);
  return (
    <div>
      <div className="breadCrumb">
        <Breadcrumb
          style={{ color: "white" }}
          size="big"
          icon="right angle"
          sections={sections}
        />
      </div>

      <Container>
        <Divider hidden />
        <Header as="h1">About Us</Header>
        <Divider hidden />
        <p>
          Established in the year 1991, Libratherm Instruments Private Limited
          is a reputed manufacturer and exporter of an Electronic Process
          Control Instruments. We are globally renowned for offering a
          distinctive range of supreme quality products
        </p>
        <Divider hidden />

        <Grid stackable centered columns={2}>
          <GridRow textAlign="center">
            <GridColumn width={4}>
              <a src="https://www.libratherm.com/wp-content/uploads/2020/11/ISO-Certificate-Libratherm.jpg">
                <Image
                  size="medium"
                  src="https://www.libratherm.com/wp-content/uploads/2020/11/ISO-Certificate-Libratherm.jpg"
                />
              </a>
            </GridColumn>
            <GridColumn width={4}>
              <a src="https://www.libratherm.com/wp-content/uploads/2021/01/ISO-Certificate-2.jpg">
                <Image
                  size="medium"
                  src="https://www.libratherm.com/wp-content/uploads/2020/11/ISO-Certificate-Libratherm.jpg"
                />
              </a>
            </GridColumn>
          </GridRow>
        </Grid>
        <Divider hidden />
        <Divider hidden />
      </Container>
    </div>
  );
};
export default Aboutus;
