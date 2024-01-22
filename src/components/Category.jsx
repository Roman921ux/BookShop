import React from 'react'
import { useState } from 'react';
// ui
import Button from '@mui/material/Button';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleIndex } from '../store/actions/category-action';

function Category() {
  //redux
  const dispatch = useDispatch()
  //
  const active = useSelector(state => state.category.type)
  const category = ['Все', 'Философия', 'Психология', 'Классика']

  const onClickCategory = (i) => {
    dispatch(toggleIndex(i))
  }
  return (
    <div className="category pt-[1rem] flex gap-[0.2rem]">
      {category.map((item, i) => (<Button onClick={() => onClickCategory(i)} variant={active === i ? 'contained' : 'outlined'}>{item}</Button>))}
    </div>
  )
}

export default Category