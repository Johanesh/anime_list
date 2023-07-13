import EpisodeItem from "@/components/EpisodeItem";
import Rating from "@/components/Rating";
import { faAward, faChartSimple, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const AnimeDetail = () => {
    return (
        <div className="anime-detail">
            <div className="anime-detail__headline" style={{ backgroundImage: `url(${"https://cdn.myanimelist.net/images/anime/1011/111551.jpg"})` }}>
                <div className="anime-detail__overlay"/>
                <img src="https://cdn.myanimelist.net/images/anime/1011/111551.jpg" alt="anime" />
            </div>
            <div className="anime-detail__content">
                <div className="row">
                    <div className="col-lg-8">
                        <div>TV</div>
                        <div className="anime-detail__title">
                            <Rating rate={8.1} />
                            <h4 className="d-inline">Nanatsu no Taizai: Funnu no Shinpan</h4>
                            <p>After the Kingdom of Liones faces a new threat, the Seven Deadly Sins split up in order to defeat an enemy force spanning Britannia. With their members divided, they face 3 powerful foes, attempt to rescue the lost part of a dear friend, and begin their rescue of Elizabeth.\n\nHowever, all is not quite as it seems. Along the way, the truth of what brought the end of the Holy War 3000 years ago is uncovered, causing old friends to come face to face against each other.\n\nNanatsu no Taizai: Funnu no Shinpan continues the adventure of the Seven Deadly Sins and their friends, and sees a great power released.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="anime-detail__info">
                            <div>Status</div>
                            <span>Finished Airing</span>
                        </div>
                        <div className="anime-detail__info">
                            <div>Studio</div>
                            <span>Studio Deen</span>
                        </div>
                        <div className="anime-detail__info">
                            <div>Genre(s)</div>
                            <span>Action, Adventure, Fantasy</span>
                        </div>
                        <div className="anime-detail__statistic">
                            <div>
                                <FontAwesomeIcon icon={faAward}/>
                                123
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faChartSimple}/>
                                401347
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h5>Trailer</h5>
                    <div className="anime-detail__trailer">
                        <Link href={"https://www.youtube.com/watch?v=3OdKxdaxzyg"} target="_blank">
                            <FontAwesomeIcon icon={faPlayCircle}/>
                            <img src="https://img.youtube.com/vi/3OdKxdaxzyg/mqdefault.jpg" alt="trailer-image" />
                        </Link>
                    </div>
                </div>
                <div className="anime-detail__episode">
                    <h5>Episodes <span>(24)</span></h5>
                    <hr />
                    <EpisodeItem />
                    <EpisodeItem />
                    <EpisodeItem />
                    <EpisodeItem />
                    <EpisodeItem />
                    <EpisodeItem />
                </div>
            </div>
        </div>
    )
}

export default AnimeDetail;