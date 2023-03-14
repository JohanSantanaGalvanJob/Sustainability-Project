import './ItemPage.scss'
import { useEffect, useState } from 'react'
import stockPhoto from '../../images/restaurantStockphoto.jpg'
import ItemPopup from '../../Components/ItemPopup/ItemPopup'
import { useParams } from 'react-router-dom'
import CategoryItemsService from '../../Services/categoryitems.service'

const ItemPage = ({ isHamburgerOpen }) => {
    let { id } = useParams();
    let { name } = useParams();
    const [items, setItems] = useState([]);

    const getCategoryItems = () => {
        CategoryItemsService.getByCategory(id).then((response) => {
            console.log(response.data);
            setItems(response.data)

        }).catch((e) => {
            console.log(e)
        });
    }

    const [showItemPopup, setShowItemPopup] = useState(false)

    useEffect(() => {
        getCategoryItems();
    }, []);

    return (
        
        <section className='item-page-container'>
           
            {!isHamburgerOpen ? (<>
                <h1>{name}</h1>
                {items.map((categoryItem, index) =>
                <div className='text-image-container' onClick={() => setShowItemPopup(true)}>
                    <img src={stockPhoto} />
                    <div>
                        <span className='item-name-container'>
                            <h2>{categoryItem.name}</h2>
                        </span>
                    </div>
                </div>
                 )}
            </>) : null}
            {showItemPopup ? (
                <>
                    <ItemPopup />
                </>
            ) : null}
           
        </section>
       
    )
}

export default ItemPage