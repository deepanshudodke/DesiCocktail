const Shimmer = () => {
    return (
        <div className="shimmer-body">
            {Array(30)
                .fill("")
                .map((value, index) => {
                    return <div className="shimmer-card" key={index}></div>;
                })}
        </div>
    );
};

export default Shimmer;
