export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://www.pedrowtwr.jumpingcrab.com"
    : "http://localhost:3001";

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status} ${res.statusText}`);
};
