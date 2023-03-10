
import './ItemPage.scss'


import stockPhoto from '../../images/restaurantStockphoto.jpg'


const ItemPage = () => {
    return (
        <section className='item-page-container'>
            <h1>Restaurants</h1>
            <div className='text-image-container'>
                <img src={stockPhoto}/>
                <div className='item-name-container'>
                    <h2>Name</h2>
                </div>
            </div>
        </section>
    )
}

export default ItemPage