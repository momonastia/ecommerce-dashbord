const baseUrl = "https://api.escuelajs.co/api/v1/";

const GET = (type, id = "") => {
  return fetch(baseUrl + type + id).then((res) => res.json());
};

export default GET;
