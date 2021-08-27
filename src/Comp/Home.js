import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";
import productMerge from "../Img/libratherm-all-products.png";
import pow1pa from "../Img/POW-1-PA-20A-FRONT-300x300.png";
import pow1pacl from "../Img/POW-1-PA-CL-right-300x300.png";
import pow2pa from "../Img/POW-2-PA-20A-side-300x300.png";
import pow2pacl from "../Img/POW-2-PA-CL-right-300x300.png";
import ohmsIcon from "../Img/Icons/International-Safety-Standards.png";
import { Link } from "react-router-dom";
import { right } from "@popperjs/core";

const Home = () => {
  return (
    <div>
      <Container>
        <Grid columns={2} spaced doubling stackable>
          <GridRow stretched>
            <GridColumn textAlign="left" verticalAlign="middle" width="6">
              <Container>
                <Header as="h1">Partners in Measurement & Control.</Header>

                <Segment>
                  Libratherm Instruments Pvt. Ltd. is an ISO 9001:2015 Certified
                  Indian Company engaged in the manufacturing of Electronic
                  Process Control Instruments and Systems since 1991.
                </Segment>
                <Divider />
                <Button primary size="medium" positive>
                  Our Applications
                </Button>
              </Container>
            </GridColumn>
            <GridColumn width="10">
              <Image centered src={productMerge} />
            </GridColumn>
          </GridRow>
        </Grid>

        <Divider hidden />
        <Divider hidden />

        <Grid as="Segment" padded spaced>
          <GridRow
            as="Segment"
            centered
            textAlign="center"
            verticalAlign="middle"
          >
            <Header as="h1"> Our Products </Header>
            <Divider hidden />
            We are one of the most prominent manufacturers and exporters of a
            broad range of microprocessors and digital-based electronic process
            control instruments. Our product range includes Temperature and
            Process Indicators, Large/Jumbo Display Indicators, Portable
            Thermometers, Process Controllers such as On-Off Controllers, PID
            Controllers, Ramp/Soak Controllers, and Multi Zone Controllers,
            Temperature and Process Data Loggers and Scanners, Temperature and
            Humidity Sensors and Transmitters, Indicators, and Controllers,
            Clean Room Monitoring Systems for Environment, Cold Storage, Data
            Centre, Server Room, Greenhouse, Warehouse to measure Temperature,
            Humidity, and Differential Pressure. Thyristor Triggering Cards,
            Thyristor Power Controllers, Signal Converters/Conditioners and
            Isolators, Molten Metal Pyrometers, DC Motor Controllers, Motor Soft
            Starters, IoT Modules, Instrumentation Control Panels, Data
            Acquisition Software, Customized Instruments, and many more services
          </GridRow>
        </Grid>

        <Divider hidden />
        <Divider hidden />
        <Grid columns={2} spaced stackable>
          <GridRow centered textAlign="center">
            <GridColumn
              as="Container"
              textAlign="center"
              tablet={6}
              computer={4}
            >
              <Image spaced bordered src={pow1pa} />
              <h2>Single Phase Thyristor Power Controller</h2>
              <p>$4725</p>
              <Button positive compact>
                Visit Product
              </Button>
            </GridColumn>

            <GridColumn
              as="Container"
              textAlign="center"
              tablet={6}
              computer={4}
            >
              <Image spaced bordered src={pow1pacl} />
              <h2>Single Phase Thyristor Power Controller</h2>
              <p>$4725</p>
              <Button positive compact>
                Visit Product
              </Button>
            </GridColumn>

            <GridColumn
              as="Container"
              textAlign="center"
              tablet={6}
              computer={4}
            >
              <Image spaced bordered src={pow2pa} />
              <h2>Single Phase Thyristor Power Controller</h2>
              <p>$4725</p>
              <Button positive compact>
                Visit Product
              </Button>
            </GridColumn>

            <GridColumn
              as="Container"
              textAlign="center"
              tablet={6}
              computer={4}
            >
              <Image spaced bordered src={pow2pacl} />
              <h2>Single Phase Thyristor Power Controller</h2>
              <p>$4725</p>
              <Button positive compact>
                Visit Product
              </Button>
            </GridColumn>
          </GridRow>
        </Grid>

        <Divider hidden />
        <Divider />
        <Divider hidden />
        <Divider hidden />

        <Grid textAlign="center">
          <GridRow centered>
            <Header as="h1">We simply pursue Ω's Law!</Header>
          </GridRow>

          <GridRow textAlign="center" centered>
            <GridColumn mobile={6} tablet={4} computer={2}>
              <Image spaced src={ohmsIcon} />
            </GridColumn>
            <GridColumn mobile={10} tablet={12} computer={14}>
              <p>
                We offer complete solutions for accurate measurement and control
                of Humidity, Pressure, Flow, Level, pH, Speed, etc. Our products
                are reliable and excellent in quality and are conforming to
                EN61010 International Safety Standards.
              </p>
              <Link to="">Know us better</Link>
            </GridColumn>
          </GridRow>
        </Grid>

        <Divider hidden />
        <Divider hidden />
        <Divider />
        <Divider hidden />

        <Grid columns={2} spaced stackable>
          <GridRow centered textAlign="center">
            <GridColumn
              as="Container"
              textAlign="center"
              tablet={6}
              computer={4}
            >
              <Image
                spaced
                src="https://www.libratherm.com/wp-content/uploads/2020/06/latest-technology.png"
              />
              <h2>Latest TEchnology</h2>
              <p>
                We use the latest available and accessible technology for long
                lasting and trouble-free field performance
              </p>
            </GridColumn>

            <GridColumn
              as="Container"
              textAlign="center"
              tablet={6}
              computer={4}
            >
              <Image
                spaced
                src="https://www.libratherm.com/wp-content/uploads/2020/06/global-standards.png"
              />
              <h2>Global Standards</h2>
              <p>
                Our products are performing in nearly all the states in the
                country and in more than 25 countries around the world.
              </p>
            </GridColumn>

            <GridColumn
              as="Container"
              textAlign="center"
              tablet={6}
              computer={4}
            >
              <Image
                spaced
                src="https://www.libratherm.com/wp-content/uploads/2020/06/client-centred-approch.png"
              />
              <h2>Client Centered Approach</h2>
              <p>
                While designing and manufacturing our products, we sustain a way
                in which our services benefit the customers.
              </p>
            </GridColumn>

            <GridColumn
              as="Container"
              textAlign="center"
              tablet={6}
              computer={4}
            >
              <Image
                spaced
                src="https://www.libratherm.com/wp-content/uploads/2020/06/well-equipped-infrastructure.png"
              />
              <h2>Well-equipped Infrastructure</h2>
              <p>
                We always thrive to be one of the best companies manufacturing
                the most rugged and reliable instruments.
              </p>
            </GridColumn>
          </GridRow>
          <Divider hidden />
          <GridRow centered textAlign="center">
            <GridColumn
              as="Container"
              textAlign="center"
              tablet={6}
              computer={4}
            >
              <Image
                spaced
                src="https://www.libratherm.com/wp-content/uploads/2020/06/excellent-manufacturing.png"
              />
              <h2>Excellent Manufacturing</h2>
              <p>
                The company finds its strengths from its operations, D&D
                facilities as well as manufacturing facilities at a single
                location.
              </p>
            </GridColumn>

            <GridColumn
              as="Container"
              textAlign="center"
              tablet={6}
              computer={4}
            >
              <Image
                spaced
                src="https://www.libratherm.com/wp-content/uploads/2020/06/field-proven-products.png"
              />
              <h2>Field-proven Products</h2>
              <p>
                We always thrive to be one of the best companies manufacturing
                the most rugged, reliable and field proved instruments.
              </p>
            </GridColumn>

            <GridColumn
              as="Container"
              textAlign="center"
              tablet={6}
              computer={4}
            >
              <Image
                spaced
                src="https://www.libratherm.com/wp-content/uploads/2020/06/fine-track-record.png"
              />
              <h2>Fine Track Record</h2>
              <p>
                The company derives its competitive advantage from its track
                record of enhancing value for the customers
              </p>
            </GridColumn>

            <GridColumn
              as="Container"
              textAlign="center"
              tablet={6}
              computer={4}
            >
              <Image
                spaced
                src="https://www.libratherm.com/wp-content/uploads/2020/06/customer-satisfaction.png"
              />
              <h2>Customer Satisfaction</h2>
              <p>
                As on date, we have more than 1,50,000 systems and processes to
                our credit, which are working satisfactorily across the globe.
              </p>
            </GridColumn>
          </GridRow>
        </Grid>
        <Divider hidden />
        <Divider hidden />
      </Container>
    </div>
  );
};
export default Home;
