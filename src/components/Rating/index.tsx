const Rating = (props: RatingProps) => {
    const {
        rate,
    } = props;

    return (
        <div className={`rating ${rate >= 8 ? "rating--green" : ""}`}>
            {rate}
        </div>
    )
};

export default Rating;