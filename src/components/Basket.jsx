import React, { useState } from 'react'
// ui 
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// redux
import { useDispatch, useSelector } from 'react-redux'
import { removeBook } from '../store/actions/basket-action';
import { Link } from 'react-router-dom';
import { basketSelector, sumBasketSelector } from '../store/selectors/basket-selectors';


function Basket() {
  const [price, setPrice] = useState(0)
  const basket = useSelector(basketSelector)
  const sumBasket = useSelector(sumBasketSelector)
  const dispatch = useDispatch()
  // console.log(basket)
  return (
    <div className="basket">
      <ButtonGroup variant="text" aria-label="text button group" className='mt-[1rem]'>
        <Button>Ваши книги</Button>
        <Button>{basket.length}</Button>
        <Button>Цена</Button>
        <Button>{sumBasket}$</Button>
      </ButtonGroup>
      <div className="basket_map">
        {basket.map(book => {
          return (<div className="bookitem max-w-[230px]">
            <div className="img-block">
              <img src={book.imageUrl} alt="" className='img' />
            </div>
            {/* <span>{book.title}</span> */}
            <div className="types mt-[1rem] flex justify-between mb-[0.5rem]">
              <Button className='w-[10rem]' variant='outlined'>{book.types}</Button>
              <Button variant='outlined'>{book.age}</Button>
            </div>
            <div className="flex justify-between items-center">
              <span className='text-[1.2rem] font-mono'>{book.price}$</span>
              <Button variant='outlined' onClick={() => dispatch(removeBook(book.id))}>Удалить</Button>
            </div>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Basket