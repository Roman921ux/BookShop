import React from 'react'
//ui
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// redux
import { useDispatch } from 'react-redux';
import { toggleIndexSort } from '../store/actions/category-action';

function Filter() {
  const dispatch = useDispatch()
  const list = [{ name: 'Популярности', sort: 'rating', value: '10' }, { name: 'Цене', sort: 'price', value: '20' }, { name: 'Алфавиту', sort: 'title', value: '30' }]
  return (
    <div className="">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Фильтры</InputLabel>
        <Select
          className='w-[15rem]'
          labelId="demo-simple-select-label"
          id="demo-simple-select"

          label="Фильтры"
        // onChange={handleChange}
        >
          {list.map(item => (<MenuItem value={item.value} onClick={() => dispatch(toggleIndexSort(item.sort))}>{item.name}</MenuItem>))}
        </Select>
      </FormControl>
    </div>
  )
}

export default Filter