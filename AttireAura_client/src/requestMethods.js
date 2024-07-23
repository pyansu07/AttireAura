import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
 const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NWY2MTBiZTE3OGZjNDgxMzllMzNhOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxODI4MTA5NSwiZXhwIjoxNzE4NTQwMjk1fQ.i6Itps5Zm8EF6j7waKMJwtShGqjxs-pA8FBnQRC_0nU";
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});