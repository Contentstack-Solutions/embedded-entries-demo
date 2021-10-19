import React from 'react';
import contentstack from 'contentstack';
import useSWR from 'swr';

const Stack = process.env.API_KEY && process.env.DELIVERY_TOKEN && process.env.ENVIRONMENT
  ? contentstack.Stack({
    api_key: process.env.API_KEY,
    delivery_token: process.env.DELIVERY_TOKEN,
    environment: process.env.ENVIRONMENT,
    region: "us",
  }) : "";

const Query = Stack.ContentType('product').Query();
Query
   .find()
   .then(
      (results) => {return results});


function Home({ result }) {
  // const { data, error } = useSWR("product", fetcher);

  // if (error) return "An error has occurred.";
  // if (!data) return "Loading...";

  return <div>
    temp
    {/* {result[0][0].title} */}
    </div>;
}

// export async function getStaticProps(context) {
//   const result = getEntry("product", "en-us");
//   return { props: { result } };
// }

export default Home;
