const Rating = (props: RatingProps) => {
    const {
        rate,
        minRate
    } = props;

    return (
        <div className={`rating ${rate >= (minRate ? minRate : 8) ? "rating--green" : ""}`}>
            {rate}
        </div>
    )
};

export default Rating;