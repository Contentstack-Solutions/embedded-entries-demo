/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import Navigation from '/components/Navigation';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Footer from '/components/Footer';
import StarRating from '/lib/StarRating';
import InputSpinner from '/lib/InputSpinner';
import useSWR from 'swr';
import fetcher from '/lib/fetcher';
import { jsonToHtml } from "@contentstack/json-rte-serializer"
import SizeChecker from '../../lib/SizeChecker';

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://api.contentstack.io/v3/content_types/product/entries?environment=production",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        api_key: process.env.NEXT_PUBLIC_API_KEY,
        access_token: process.env.NEXT_PUBLIC_DELIVERY_TOKEN
      },
    }
  );
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.entries.map(product => {
    return {
      params: { id: product.uid },
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {

  // Pass post data to the page via props
  return { props: { params } }
}


export default function ProductPage({ params }) {

  const { data, error } = useSWR(
    `https://api.contentstack.io/v3/content_types/product/entries/${params.id}?environment=${process.env.NEXT_PUBLIC_ENVIRONMENT}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  console.log(data)

  const product = data.entry

  const description = jsonToHtml(product.description)

  return (
    <div>
      <Navigation></Navigation>

      <Container>
        <Row>
          <p>{`Products / Fall 2021 / ${product.title}`}</p>
          <Col sm={7}>
          <Card.Img
                    variant="top"
                    src={product.images[0].url}
                  />
          </Col>
          <Col sm={5}>
            <h2>{product.title}</h2>
            <div className="stars-row"><StarRating rating={product.rating} /></div>
            <div></div>
            <Col className="size-row"><SizeChecker sizes={product.sizes}></SizeChecker></Col>
            <div className="content" dangerouslySetInnerHTML={{__html: description}}></div>
            
            {/* <p>Kloster Eberbach's Spätburgunder was born on the banks of the Rhine in the German region of Hesse.</p>
            <p>It is produced entirely with Pinot Noir grapes grown in the ancient vineyards of the Eberbach monastery, where the production of red wines boasts a centuries-old tradition, starting from the XIIth Century.</p>
            <p>It is a body wine with a soft red color and characterized by delicate fruity aromas, with characteristic hints of red berries and spices. In the mouth it is rich, slightly sapid and well balanced. Overall it is a very elegant wine.</p>
            <p>Perfect to accompany pasta and meat, it is ideal in combination with cheese dishes.</p> */}

            <h4>Category</h4>
            <p>Vino</p>
  
              <Col>
              <InputSpinner />
              </Col>

            <button type="button" className=" btn btn-primary">
              Add to Cart
            </button>


          </Col>
        </Row>
        </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
}