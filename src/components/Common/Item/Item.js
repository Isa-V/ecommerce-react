import "../Item/Item.css"
import {Link} from 'react-router-dom'
const Item = ({id, name, description, price, image}) => {

    return(
        <div className='ItemCard'>
            <div className='ItemCardImgContainer'>
                <img src={image} alt={name} className='ItemCardImg'/>
                <Link to={`/item/${id}`} className="ItemlinkDetails" >Ver detalle</Link>
            </div>
            <div className='ItemCardDetails'>
                <h4 className="ItemCardTitle">{name}</h4>
                <h3 className="ItemCardPrice">CLP ${parseInt(price).toLocaleString('es-CL', { minimumFractionDigits: 0})}</h3>
            </div>

        </div>
    )
}

export default Item