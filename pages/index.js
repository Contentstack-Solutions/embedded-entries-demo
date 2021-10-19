/* eslint-disable @next/next/no-img-element */
import useSWR from 'swr';
import { Container, Carousel, Row, Col, Card, Button, Spinner } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import Divider from '/components/Divider';
import Footer from '/components/Footer';
import fetcher from '/lib/fetcher';
// {api_key, delivery, environment}
export default function Home() {

  const { data, error } = useSWR(
    `https://api.contentstack.io/v3/content_types/product/entries?environment=${process.env.NEXT_PUBLIC_ENVIRONMENT}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return (<div></div>)

  return (
    <div>
      <Navigation jsonmodal={data}></Navigation>
      
      <Container>
        {data.entries.map((entry) => (
          <div key={entry.title}>
            <h3>{entry.title}</h3>
            <p>{entry.url}</p>
          </div>
              
            ))}
        <Carousel className="mb-5">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/1600X600"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/1600X600"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://via.placeholder.com/1600X600"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row>
          <h3 className="text-center mb-4">Featured Content</h3>
        </Row>
        <Row>
          {Array(4)
            .fill()
            .map(() => (
              <Col key={Math.random()} sm={6} lg={3} className="mb-4">
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
        <Divider />
        <Row>
          <Col className="text-center">
            <img
              className="d-block w-100 mb-4"
              src="https://via.placeholder.com/1600X600"
              alt="First slide"
            />
            <h3 className="">Lorem Ipsum Dolor Sit Amet</h3>
            <p className="">
              Aenean quis nulla tellus. Ut at urna vitae libero consectetur
              tincidunt in sit amet velit. Ut aliquet lorem.
            </p>
            <Button variant="outline-secondary" className="mx-auto">
              See More
            </Button>
          </Col>
        </Row>

        <Divider />
        <Row className="mb-5">
          <Col className="text-center">
            <p className="fw-light mb-1">Ut Erat Massa, Pretium</p>
            <h3 className="mb-5">Sed Sodales Sugue At</h3>
          </Col>
          <Row className="justify-content-md-center">
            <Col md={4}>
              <p>
                Nothing hits the spot like a cookie fresh out of the oven. Check
                out this mix of classic and new treats.
              </p>
              <ul>
                <li>Chocolate Chip Cookies</li>
                <li>Coconut Clouds</li>
                <li>Ginger Snaps</li>
                <li>Peppermint Meltaways</li>
                <li>Cranberry Oatmeal Cookies</li>
              </ul>
            </Col>
            <Col md={4}>
              <img alt="" src="https://via.placeholder.com/1000X600"></img>
            </Col>
          </Row>
        </Row>
      </Container>

      <Container fluid>
        <Row className="justify-content-md-center pt-5 pb-5">
          <Col md={3}>
            <iframe
              width="420"
              height="255"
              src="https://www.youtube.com/embed/Kas0jIob5QQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Col>
          <Col md={3}>
            <h3>Proin Aitae Urna Sagittis Augue</h3>
            <p>
              estibulum magna velit, porttitor id rhoncus ut, volutpat sit amet
              orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vivamus efficitur laoreet arcu et volutpat. Sed luctus vitae eros
              eget iaculis. Vestibulum arcu massa, placerat in laoreet ut,
              elementum eget leo.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-md-center pt-5 pb-5">
          <Col md={3}>
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $0<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>- 10 users included</li>
                  <li>- 2 GB of storage</li>
                  <li>- Email support</li>
                  <li>- Help center access</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-primary"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $15<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>- 20 users included</li>
                  <li>- 10 GB of storage</li>
                  <li>- Priority email support</li>
                  <li>- Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">
                  Get started
                </button>
              </div>
            </div>
          </Col>
          <Col md={3}>
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-white bg-primary border-primary">
                <h4 className="my-0 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $29<small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>- 30 users included</li>
                  <li>- 15 GB of storage</li>
                  <li>- Phone and email support</li>
                  <li>- Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">
                  Contact us
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}