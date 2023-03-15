
import './ItemPopup.scss'

import stockphoto from '../../images/restaurantStockphoto.jpg'
import taskTree from '../../images/taskTree.svg'
import pointsLeaf from '../../images/pointsLeaf.svg'

const ItemPopup = () => {
    return (
        <section className='popup-container'>
            <p className='bee-good'>Be Good at..</p>
            <h1>Inagua Integral Nature Reserve</h1>
            <img className='item-photo' alt='attraction' src={stockphoto}/>
            <img
            alt='BY DOING THIS TASK YOU ARE HELPING THE WORLD BY SUPPORTING THESE UN WOLRD GOALS >'
            className='task-tree' 
            src={taskTree}
            />
          <div className='points-leaf-container'>
            <p>30p</p>
          </div>
          <div className='location-info-button-container'>
            <p>Location</p>
            <p>No plastic. Theyre cups are 100% re- cycleable. Healthy</p>
          </div>
          {sessionStorage.getItem('userId') ? <button>Post your efforts</button> : null}
        </section>
    )
}

export default ItemPopup