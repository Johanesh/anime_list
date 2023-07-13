import Link from "next/link";
import Rating from "../Rating";

const CardItem = (props: CardItemProps) => {
    const {
        data,
        onOpenDetail
    } = props;

    return (
        <div className="card">
            <div className="row">
                <div className="col-lg-4 text-center">
                    <img className="card__image" src={data.images.jpg.image_url} alt={data.title} />
                </div>
                <div className="col-lg-8">
                    <div className="card__title text-ellipsis-two-row" onClick={() => onOpenDetail(data.mal_id)}>
                        {
                            data.score && (
                                <Rating rate={data.score} />
                            )
                        }
                        <h4>{data.title}</h4>
                    </div>
                    <div className="card__info">
                        <div>
                            <span>{data.type} {data.year && `- ${data.year}`}</span>
                            <span>Eps: {data.episodes} [{data.duration}]</span>
                        </div>
                        {
                            data.genres.length > 0 && (
                                <div className="text-ellipsis-two-row">
                                    {data.genres.map((item, index) => <i key={index}>{item.name}</i>)}
                                </div>
                            )
                        }
                        <div>
                            Status: {data.status}
                        </div>
                        {
                            data.trailer.url && (
                                <div>
                                    <Link href={data.trailer.url} target="_blank">
                                        Trailer
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardItem;