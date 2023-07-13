import { faStar, faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Card = () => {
    return (
        <div className="card">
            <div className="row">
                <div className="col-lg-4">
                    <img className="card__image" src="https://cdn.myanimelist.net/images/anime/1011/111551.jpg" alt="anime" />
                </div>
                <div className="col-lg-8">
                    <div className="card__title text-ellipsis-two-row">
                        <div className="card__rating">
                            6.7
                        </div>
                        <Link href={"#"} target="_blank">
                            <h4>Nanatsu no Taizai: Funnu no Shinpan</h4>
                        </Link>
                    </div>
                    <div className="card__info">
                        <div>
                            <span>TV - 2021</span>
                            <span>Eps: 24 [24 min per ep]</span>
                        </div>
                        <div className="text-ellipsis-two-row">
                            Action, Adventure, Fantasy
                        </div>
                        <div>
                            Status: Finished Airing
                        </div>
                        <div>
                            <Link href={"#"} target="_blank">
                                Trailer Link
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;