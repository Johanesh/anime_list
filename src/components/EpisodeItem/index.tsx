import Rating from "../Rating";

const EpisodeItem = () => {
    return (
        <div className="episode">
            <div className="row">
                <div className="col-8">
                    <h5>Title</h5>
                    <div>05 September 2022</div>
                </div>
                <div className="col-4 text-end">
                    <Rating rate={6.7} />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default EpisodeItem;