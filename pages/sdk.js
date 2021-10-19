/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* TRY AWS LAMBA / WEBSOCKET TO REFRESH THE PAGE */

import React, { useState, useEffect } from "react";
import Contentstack from "contentstack";

function placeData (data) {
  return (<div>{data.entries[0].title}</div>)
}


function Home() {


  return <div>
    {placeData()}
    </div>;
}

async function getData() {
  const response = await fetch(
    "https://api.contentstack.io/v3/content_types/product/entries?environment=production",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        api_key: "blt18c4a67f10bab815",
        access_token: "cs0bfc7b69ca2ee9700cfab2e8",
      },
    }
  )
  const data = await response.json()

  console.log(data)

  placeData(data)
  return data
}
// export async function getServerSideProps() {
//   // useEffect(() => {
//   //   window.addEventListener('focus', getData().then(data => console.log(data)));

//   //   return () => {
//   //     window.removeEventListener('focus', getData().then(data => console.log(data)));
//   //   };
//   // });

//   const response = await fetch(
//     "https://api.contentstack.io/v3/content_types/product/entries?environment=production",
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         api_key: "blt18c4a67f10bab815",
//         access_token: "cs0bfc7b69ca2ee9700cfab2e8",
//       },
//     }
//   );

//   const data = await response.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default Home;

// /* eslint-disable no-unused-expressions */
// /* eslint-disable no-nested-ternary */
// /* eslint-disable consistent-return */
// /* eslint-disable import/extensions */
// /* eslint-disable react/prop-types */
// /* TRY AWS LAMBA / WEBSOCKET TO REFRESH THE PAGE */

// import React from 'react';
// import Stack from '../sdk-plugins/index';

// class Home extends React.Component {
//   static async getInitialProps() {
//     try {
//       const result = await Stack.getEntry('product', "en-us");
//       return { data: { result } };
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   render() {
//     console.log(this.props)
//     return (
//       <div>{this.props.data.result[0][0].title}
//       </div>
//     );
//   }
// }

// export default Home;
