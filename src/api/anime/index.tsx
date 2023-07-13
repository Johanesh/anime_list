import axios from "axios"

export const getAnimeList = (filter: AnimeListFilterProps) => {
    return axios.get("https://api.jikan.moe/v4/anime", { params: filter });
}