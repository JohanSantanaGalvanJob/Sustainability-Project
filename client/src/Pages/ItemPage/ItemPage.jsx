
import './ItemPage.scss'


import stockPhoto from '../../images/restaurantStockphoto.jpg'


const ItemPage = ({isHamburgerOpen}) => {
    return (
        
        <section className='item-page-container'>
            { !isHamburgerOpen ? (<>
                <h1>Restaurants</h1>
                <div className='text-image-container'>
                    <img src={stockPhoto}/>
                    <div>
                        <span className='item-name-container'>
                            <h2>Name</h2>
                        </span>
                    </div>
                </div>
            </>): null}
        </section>
    )
}

export default ItemPage