
import './ItemPage.scss'

import { useState } from 'react'

import stockPhoto from '../../images/restaurantStockphoto.jpg'

import ItemPopup from '../../Components/ItemPopup/ItemPopup'


const ItemPage = ({isHamburgerOpen}) => {
    const [showItemPopup, setShowItemPopup] = useState(false)
    return (
        <section className='item-page-container'>
            { !isHamburgerOpen ? (<>
                <h1>Restaurants</h1>
                <div className='text-image-container' onClick={() => setShowItemPopup(true)}>
                    <img src={stockPhoto}/>
                    <div>
                        <span className='item-name-container'>
                            <h2>Name</h2>
                        </span>
                    </div>
                </div>
            </>): null}
            {showItemPopup ? (
                <>
                <ItemPopup/>
                </>
            ): null}
           
        </section>
    )
}

export default ItemPage