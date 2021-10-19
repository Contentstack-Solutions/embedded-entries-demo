import Navigation from '/components/Navigation';
import {
  Container,
  Col,
  Row,
  Accordion,
  Form,
  Card,
  Button,
} from 'react-bootstrap';
import Footer from '/components/Footer'

export default function Search() {
  return (
    <div>
      <Navigation></Navigation>

      <Container>
        <Row>
          <Col md={3}>
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Skill Level</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Check aria-label="option 1" label="Easy" />
                    <Form.Check aria-label="option 1" label="Medium" />
                    <Form.Check aria-label="option 1" label="Hard" />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Cook Time</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {[
                      "Everything",
                      "Under 30 Minutes",
                      "30 - 60 Minutes",
                      "60+ Minutes",
                    ].map((type) => (
                      <Form.Check
                        key={type}
                        inline
                        aria-label="option 1"
                        label={type}
                      />
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Serving Time</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {[
                      "Everything",
                      "Under 30 Minutes",
                      "30 - 60 Minutes",
                      "60+ Minutes",
                    ].map((type) => (
                      <Form.Check
                        key={type}
                        inline
                        aria-label="option 1"
                        label={type}
                      />
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Exclude Allergies</Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {[
                      "Buckwheat",
                      "Celery",
                      "Citrus",
                      "Egg",
                      "Fish",
                      "Fruit",
                      "Garlic",
                      "Hot Peppers",
                      "Maize",
                      "Milk",
                      "Nuts",
                      "Oats",
                      "Peanut",
                      "Shellfish",
                      "Soy",
                      "Sulfites",
                      "Wheat",
                    ].map((type) => (
                      <Form.Check
                        key={type}
                        aria-label="option 1"
                        label={type}
                      />
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col md={9}>
            <Row>
              {Array(9)
                .fill()
                .map(() => (
                  <Col key={Math.random} xs={6} lg={4} className="mb-4">
                    <Card>
                      <Card.Img
                        variant="top"
                        src="https://via.placeholder.com/500x300"
                      />
                      <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                          Some quick example text to build on the card title and
                          make up the bulk of the card&apos;s content.
                        </Card.Text>
                        <i className="mb-0 italic">By: Author</i>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
        <Footer />
      </Container>

    </div>
  );
}
