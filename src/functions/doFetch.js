const api = "http://localhost:3000/development";

export async function doFetch(endpoint, body) {
  return fetch(`${api}/${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify(body),
  });
}
