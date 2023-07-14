interface AnimeDetailProps {
    modalId: number;
    dataDetail?: AnimeData;
}

interface AnimeEpisodes {
    aired: string;
    filler: boolean;
    forum_url: string;
    mal_id: number;
    recap: boolean
    score: number;
    title: string;
    title_japanese: string | null;
    title_romanji: string | null
    url: string;
}