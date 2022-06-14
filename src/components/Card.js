const Card = ({character}) => {
    const { name, img, nickname, occupation, status } = character;
    return ( 
        <div className="card my-3">
            <img className="card-img-top" src={img} alt={name} />
            <div className="card-body">
                <span 
                    className={`btn btn-sm float-end ${
                        status.toLowerCase().includes("alive") 
                        ? "btn-success" 
                        : "btn-danger"
                    }`}>{status}</span>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{nickname}</p>

                <div className="row text-left">
                    <div className="text-muted">
                        Ocuppation
                    </div>
                    <br />
                    {occupation.map((item, index) => (
                        <strong key={index}>{item}</strong>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Card;