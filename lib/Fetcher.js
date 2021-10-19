const fetcher = (url) =>
fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    api_key: process.env.NEXT_PUBLIC_API_KEY,
    access_token: process.env.NEXT_PUBLIC_DELIVERY_TOKEN
  },
}).then((res) => res.json());

export default fetcher