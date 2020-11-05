// imorting axios
import axios from "axios";

/** BASE URL FOR ALL API CALLS */
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});
// exporting instance
export default instance;