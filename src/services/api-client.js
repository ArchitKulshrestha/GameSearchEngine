import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
  params: {
    key: "484e9b2b843a4d8a8beb72f0dbc4f3b8",
  },
});
