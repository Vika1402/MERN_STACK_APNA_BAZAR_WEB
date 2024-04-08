import axios from "axios";

const params = {
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APNA_APP_KEY,
    },
};

export const fetchDataFromApi = async (url) => {
    try {
        const { data } = await axios.get(
            process.env.REACT_APP_STRIPE_APP_APNA_URL + url,
            params
        );
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
export const makePaymentRequest = axios.create({
    baseURL:  process.env.REACT_APP_STRIPE_APP_APNA_URL,
    headers: {
        Authorization: "bearer " + process.env.REACT_APP_STRIPE_APNA_APP_KEY,
    },
});
