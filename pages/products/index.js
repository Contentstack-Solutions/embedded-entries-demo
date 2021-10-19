/* eslint-disable @next/next/no-img-element */
import Navigation from "../../components/Navigation";
import { Container, Carousel, Row, Col, Card, Button } from "react-bootstrap";
import Footer from "/components/Footer";
import useSWR from "swr";
import Link from "next/link";
import fetcher from "/lib/fetcher";
import colorGenerator from '/lib/colorGenerator';

export default function Products() {
  const { data, error } = useSWR(
    `https://api.contentstack.io/v3/content_types/product/entries?environment=${process.env.NEXT_PUBLIC_ENVIRONMENT}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  console.log(colorGenerator())

  return (
    <div>
      <Navigation jsonmodal={data}></Navigation>

      <Container>
        <Row>
          <h3 className="text-center mb-4">Products</h3>
        </Row>
        <Row>
          {data.entries.map((product) => (
            <Col key={Math.random()} sm={6} lg={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.images[0].url} />
                <Card.Body>
                  <Row>
                    <Col sm={5}>
                      <p>XXS - 3XL</p>
                    </Col>

                    <Col sm={7}>
                    <Row>{colorGenerator()}</Row>

                    </Col>
                  </Row>
                  <Card.Text>
                    <Link href={`products/${product.uid}`}>
                      {product.title}
                    </Link>
                  </Card.Text>
                  <Row>
                    {/* <Card.Title className="card-pricing-former">$95</Card.Title> */}
                    <Col sm={4} className="card-product-row">
                      <Card.Title className="card-pricing">
                        {(product.price / 100).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </Card.Title>
                    </Col>
                    <Col sm={8}>
                      <button type="button" className="w-100 btn btn-primary">
                        {/* <Icon.CartPlus size={15}></Icon.CartPlus> */}
                        Add to Cart
                      </button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}
