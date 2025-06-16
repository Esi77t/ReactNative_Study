import axios from "axios";
import { clientId, clientSecret } from "../constants/apiConfig";

const BASE_API = "https://openapi.naver.com/v1/search/book.json";

const searchBooks = async (query) => {
    try {
        const response = await axios.get(BASE_API, {
            params: { query },
            headers: {
                'X-Naver-Client-Id' : clientId,
                'X-Naver-Client-Secret' : clientSecret,
            },
        });

        return response.data.items;
    } catch (error) {
        throw error;
    }
}

export default searchBooks;