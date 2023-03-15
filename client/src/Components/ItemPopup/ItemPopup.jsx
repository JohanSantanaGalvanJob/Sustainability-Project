
import './ItemPopup.scss'

import stockphoto from '../../images/restaurantStockphoto.jpg'
import taskTree from '../../images/taskTree.svg'
import pointsLeaf from '../../images/pointsLeaf.svg'
import { useEffect, useState } from 'react'
import CategoryItemsService from '../../Services/categoryitems.service'

const ItemPopup = (props) => {

  const [categoryItem, setCategoryItem] = useState([]);
  let { id } = props;
  const urlImage = 'http://localhost:8080/public/images/'

  const getCatItem = () => {
    CategoryItemsService.get(id).then((response) => {
      setCategoryItem(response.data);
      console.log(response.data)
    }).catch((e) => {
      console.log(e);
    })
  }

  useEffect(() => {
    getCatItem();
  }, []);

  return (
    <>
      {categoryItem.length > 0 ?
        <section className='popup-container'>
          {console.log(categoryItem[0].name)}
          <p className='bee-good'>Be Good at..</p>
          <h1>{categoryItem[0].name}</h1>
          <img className='item-photo' alt='attraction' src={urlImage + categoryItem[0].image} />
          <img
            alt='BY DOING THIS TASK YOU ARE HELPING THE WORLD BY SUPPORTING THESE UN WOLRD GOALS >'
            className='task-tree'
            src={taskTree}
          />
          <div className='points-leaf-container'>
            <p>{categoryItem[0].points}p</p>
          </div>
          <div className='location-info-button-container'>
            <p>Location</p>
            <p>{categoryItem[0].tags}</p>
          </div>
          {sessionStorage.getItem('userId') ? <button>Post your efforts</button> : null}
        </section>
        : null}
    </>
  )
}

export default ItemPopup