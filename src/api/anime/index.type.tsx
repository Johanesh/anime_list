interface AnimeListFilterProps {
    q: string;
    page: number;
    limit: number;
}

interface AnimeData {
    mal_id: number;
    score: number | null;
    title: string;
    images: {
        jpg: {
            image_url: string;
        }
    }
    type: string;
    year: number | null;
    genres: {
        mal_id: number;
        name: string;
        type: string;
        url: string;
    }[];
    status: string;
    trailer: {
        youtube_id: string;
        url: string;
        embed_url: string;
        images: {
            image_url: string;
            large_image_url: string;
            maximum_image_url: string;
            medium_image_url: string;
            small_image_url: string;
        } 
    }
    episodes: number;
    duration: string;
}