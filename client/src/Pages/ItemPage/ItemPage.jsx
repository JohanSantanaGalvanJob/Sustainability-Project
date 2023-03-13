
import './ItemPage.scss'


import stockPhoto from '../../images/restaurantStockphoto.jpg'
import CategoryItemsService from '../../Services/categoryitems.service'
import { useEffect, useState } from 'react'

const ItemPage = ({isHamburgerOpen}) => {
    const [items ,setItems] = useState(null)

    useEffect(() => {
   CategoryItemsService.getAll().then((response) => {
    setItems(response.data);
    
  });
  
    }, [])
    console.log(items);
    
    return (
        
        <section className='item-page-container'>
            { !isHamburgerOpen ? (<>
                <h1>Restaurants</h1>
                {items ? items.map((item) =>
    <div className='text-image-container'>
                    <img src={stockPhoto}/>
                    <div>
                        <span className='item-name-container'>
                            <h2>{item.name}</h2>
                        </span>
                    </div>
                </div>
) : null}
                
            </>): null}
        </section>
    )
}

export default ItemPage