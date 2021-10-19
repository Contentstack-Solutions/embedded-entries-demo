/* eslint-disable @next/next/no-html-link-for-pages */

import Navigation from '/components/Navigation';
import { Container, Col, Row } from 'react-bootstrap';
import useSWR from "swr";
import fetcher from "/lib/fetcher";
import Footer from '/components/Footer';

export default function Blog() {
  const { data, error } = useSWR(
    `https://api.contentstack.io/v3/content_types/blog_post/entries?environment=${process.env.NEXT_PUBLIC_ENVIRONMENT}`,
    fetcher
  );
  
  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  
  console.log(data)
  return (
    <div>
      <Navigation></Navigation>

      <Container>
        <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
          <Col md={6} className="px-0">
            <h1 className="display-4 fst-italic">
              Title of a longer featured blog post
            </h1>
            <p className="lead my-3">
              Multiple lines of text that form the lede, informing new readers
              quickly and efficiently about what’s most interesting in this
              post’s contents.
            </p>
            <p className="lead mb-0">
              <a href="#" className="text-white fw-bold">
                Continue reading...
              </a>
            </p>
          </Col>
        </div>

        <Row mb={2}>
        {data.entries.map((blog_post) => (
          <Col md={6}>
            <Row className="g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <Col className="p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-primary">
                  Business
                </strong>
                <h3 className="mb-0">{blog_post.title}</h3>
                <div className="mb-1 text-muted">Nov 12</div>
                <p className="card-text mb-auto">
                  {blog_post.summary}
                </p>
                <a href={`/blog/${blog_post.uid}`} className="stretched-link">
                  Continue reading
                </a>
              </Col>
              <Col className="col-auto d-none d-xl-block">
                <svg
                  className="bd-placeholder-img"
                  width="200"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c"></rect>
                  <text x="30%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
              </Col>
            </Row>
          </Col>))}
          
        </Row>
        <Footer></Footer>
      </Container>
    </div>
  );
}
