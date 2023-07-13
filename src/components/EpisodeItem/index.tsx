import moment from "moment";
import Rating from "../Rating";

const EpisodeItem = (props: EpisodeItemProps) => {
    const {
        data,
    } = props;

    return (
        <div className="episode">
            <div className="row">
                <div className="col-8">
                    <h5>{data.title}</h5>
                    {
                        data.aired && (
                            <div>{moment(data.aired).format("DD MMMM YYYY")}</div>
                        )
                    }
                </div>
                <div className="col-4 text-end">
                    <Rating rate={data.score} minRate={4} />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default EpisodeItem;