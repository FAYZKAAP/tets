import './card.css'

function Card(props) {
    console.log(props);
    return (
        <div>
              <div className="card">
                        <div className="img">
                            <img src={props.rasm} alt="" />
                            <button className='btn2'>Add To Cart</button>
                        </div>

                        <h3>{props.ism}</h3>
                        <p>{props.pul}</p>
                    </div>
          
          
        </div>
    )
}

export default Card
