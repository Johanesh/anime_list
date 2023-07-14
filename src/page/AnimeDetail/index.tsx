import { getAnimeEpisodes } from "@/api/anime";
import EpisodeItem from "@/components/EpisodeItem";
import Rating from "@/components/Rating";
import { AlertContext } from "@/context/Alert";
import { faAward, faChartSimple, faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const AnimeDetail = (props: AnimeDetailProps) => {
    const {
        modalId,
        dataDetail
    } = props;
    const [isLoadingEps, setIsLoadingEps] = useState(false);
    const [dataEpisodes, setDataEpisodes] = useState([]);
    const {setAlert} = useContext(AlertContext);

    const fetchAnimeEpisodes = async (id: number) => {
        setIsLoadingEps(true);
        try {
            const response = await getAnimeEpisodes(id);
            if (response.status === 200) {
                const resData = response.data;
                setDataEpisodes(resData.data);
                setIsLoadingEps(false);
            }
        } catch (error: any) {
            setAlert({
                isOpen: true,
                message: error.response.data.message
            });
            setIsLoadingEps(false);
        }
    }

    useEffect(() => {
        if (modalId) fetchAnimeEpisodes(modalId);
    }, [modalId]);

    return (
        <div className="anime-detail">
            <div className="anime-detail__headline" style={{ backgroundImage: `url(${dataDetail?.images.jpg.image_url})` }}>
                <div className="anime-detail__overlay"/>
                <img src={dataDetail?.images.jpg.image_url} alt={dataDetail?.title} />
            </div>
            <div className="anime-detail__content">
                <div className="row">
                    <div className="col-lg-8">
                        <div>{dataDetail?.type}</div>
                        <div className="anime-detail__title">
                            {
                                dataDetail?.score && (
                                    <Rating rate={dataDetail?.score} />
                                )
                            }
                            <h4 className="d-inline">{dataDetail?.title}</h4>
                            <p>{dataDetail?.synopsis}</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="anime-detail__info">
                            <div>Status</div>
                            <span>{dataDetail?.status}</span>
                        </div>
                        <div className="anime-detail__info">
                            <div>Studio</div>
                            {dataDetail?.studios.map((item, index) => <span key={index}>{item.name}</span>)}
                        </div>
                        <div className="anime-detail__info">
                            <div>Genre(s)</div>
                            {dataDetail?.genres.map((item, index) => <span key={index}>{item.name}</span>)}
                        </div>
                        <div className="anime-detail__statistic">
                            <div>
                                <FontAwesomeIcon icon={faAward}/>
                                {dataDetail?.rank}
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faChartSimple}/>
                                {dataDetail?.popularity}
                            </div>
                        </div>
                    </div>
                </div>
                {
                    dataDetail && dataDetail.trailer.url && (
                        <div>
                            <h5>Trailer</h5>
                            <div className="anime-detail__trailer">
                                <Link href={dataDetail ? dataDetail.trailer.url : ""} target="_blank">
                                    <FontAwesomeIcon icon={faPlayCircle}/>
                                    <img src={dataDetail?.trailer.images.medium_image_url} alt="trailer-image" />
                                </Link>
                            </div>
                        </div>
                    )
                }
                <div className="anime-detail__episode">
                    {
                        !isLoadingEps ? (
                            <>
                                {
                                    dataEpisodes.length > 0 ? (
                                        <>
                                            <h5>Episodes <span>({dataDetail?.episodes})</span></h5>
                                            <hr />
                                            {
                                                dataEpisodes.map((item, index) => (
                                                    <EpisodeItem key={index} data={item} />
                                                ))
                                            }
                                        </>
                                    ) : <>&nbsp;</>
                                }
                            </>
                        ) : (
                            <div className="text-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default AnimeDetail;