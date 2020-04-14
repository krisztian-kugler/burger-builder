import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-3f19f.firebaseio.com/",
});

export default instance;
