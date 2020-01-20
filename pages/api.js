import axios from "axios";

const api = axios.create({
    baseURL: "http://www.market09.kr/api/",
    params: {
        uid: "0d6fb9d2-96b4-363a-9e57-91a3dc83e23f",
    },
});

export const goodsApi = {
    main: page => api.get("get_main.php", { params: { start: page } }),
    test: () => api.get("https://api.tvmaze.com/search/shows?q=batman"),
};
