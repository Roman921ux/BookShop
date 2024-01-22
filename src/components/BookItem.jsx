import React, { useState } from 'react'
// ui
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
// import { BookmarkBorderIcon } from '@mui/icons-material';
// redux
import { useDispatch } from 'react-redux';
import { addBook } from '../store/actions/basket-action';

function BookItem({ item }) {
  const [types, setTypes] = useState(0)
  const [age, setAge] = useState(0)
  //outlined
  const dispatch = useDispatch()
  const addB = () => {
    if (types && age === 0) {
      alert('Выбирете тип обложки и год издательства' + age + types)
    } else {
      const obj = { ...item, types: types, age: age };
      dispatch(addBook(obj))
    }
  }
  return (
    <div className="bookitem max-w-[230px]">
      <div className="img-block mb-[0.5rem]">
        <img src={item.imageUrl} alt="" className='img' />
      </div>
      <div className="">
        <Typography component="legend">{item.title}</Typography>
        <Rating name="read-only" value={item.rating} readOnly />
      </div>
      {/* <span className='font-bold text-[1.2rem]'>{item.title}</span> */}
      <div className="types mt-[1rem] flex justify-between">
        {item.types.map(i => <Button className='w-[7rem]' onClick={() => setTypes(prev => prev = i)} variant={types === i ? 'contained' : 'outlined'}>{i}</Button>)}
      </div>
      <div className="age flex justify-between mt-[0.3rem]">
        {item.age.map(i => <Button className='w-[4.6rem]' onClick={() => setAge(prev => prev = i)} variant={age === i ? 'contained' : 'outlined'}>{i}</Button>)}
      </div>

      <div className="flex justify-between items-center mt-[1rem]">
        <span className='text-[1.2rem] font-mono'>{item.price}$</span>
        <Button variant='outlined' onClick={() => addB()}>Добавить</Button>
      </div>

    </div>
  )
}

export default BookItem