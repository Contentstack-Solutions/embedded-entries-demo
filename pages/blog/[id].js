/* eslint-disable @next/next/no-img-element */
import Navigation from '/components/Navigation';
import { useRouter } from 'next/router'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Footer from '/components/Footer';
import StarRating from '/lib/StarRating';
import InputSpinner from '/lib/InputSpinner';
import useSWR from 'swr';
import fetcher from '/lib/fetcher';
import { jsonToHtml } from "@contentstack/json-rte-serializer"

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://api.contentstack.io/v3/content_types/blog_post/entries?environment=production",
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


export default function BlogPost({ params }) {

  const { data, error } = useSWR(
    `https://api.contentstack.io/v3/content_types/blog_post/entries/${params.id}?environment=${process.env.NEXT_PUBLIC_ENVIRONMENT}`,
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";

  console.log(data)

  const blog_post = data.entry

  const description = jsonToHtml(blog_post.body)

  return (
    <div>
      <Navigation></Navigation>

      <Container>
        <Row className="mt-5">
          <Col md={8}>
            <img alt="" src="https://via.placeholder.com/2000x1000"></img>
      <article className="blog-post">
        <div className="content" dangerouslySetInnerHTML={{__html: description}}></div>
      </article>


          </Col>
          <Col md={4}>
            <div className="position-sticky">
              <div className="p-4 mb-3 bg-light rounded">
                <h4 className="fst-italic">About</h4>
                <p className="mb-0">
                  Customize this section to tell your visitors a little bit
                  about your publication, writers, content, or something else
                  entirely. Totally up to you.
                </p>
              </div>

              <div className="p-4">
                <h4 className="fst-italic">Archives</h4>
                <ol className="list-unstyled mb-0">
                  <li>
                    <a href="#">March 2021</a>
                  </li>
                  <li>
                    <a href="#">February 2021</a>
                  </li>
                  <li>
                    <a href="#">January 2021</a>
                  </li>
                  <li>
                    <a href="#">December 2020</a>
                  </li>
                  <li>
                    <a href="#">November 2020</a>
                  </li>
                  <li>
                    <a href="#">October 2020</a>
                  </li>
                  <li>
                    <a href="#">September 2020</a>
                  </li>
                  <li>
                    <a href="#">August 2020</a>
                  </li>
                  <li>
                    <a href="#">July 2020</a>
                  </li>
                  <li>
                    <a href="#">June 2020</a>
                  </li>
                  <li>
                    <a href="#">May 2020</a>
                  </li>
                  <li>
                    <a href="#">April 2020</a>
                  </li>
                </ol>
              </div>

              <div className="p-4">
                <h4 className="fst-italic">Elsewhere</h4>
                <ol className="list-unstyled">
                  <li>
                    <a href="#">GitHub</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                </ol>
              </div>
            </div>
          </Col>
        </Row>

        <Footer></Footer>
      </Container>


    </div>
  );
}
