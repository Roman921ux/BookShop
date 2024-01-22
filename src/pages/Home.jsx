import React from 'react'
import { useEffect, useState } from 'react'
import Category from '../components/Category';
import BookItem from '../components/BookItem';
import { useSelector } from 'react-redux';
import Filter from '../components/Filter';

function Home() {
  const [bookItems, setBookItems] = useState([])
  const category = useSelector(state => state.category.type)
  const sort = useSelector(state => state.category.sort)
  const bookBasket = useSelector(state => state.basket)
  console.log(bookBasket)

  useEffect(() => {
    fetch(`https://65478e96902874dff3ac756a.mockapi.io/items-pizzas?${category > 0 ? `category=${category}` : ''
      }&sortBy=${sort}&order=desc`)
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        setBookItems(json)
      })
  }, [category, sort])
  return (
    <div className="home">
      <div className="flex justify-between">
        <Category />
        <Filter />
      </div>
      <div className="flex-box">
        {bookItems.map(item => <BookItem item={item} key={item.id} />)}
      </div>
    </div>
  )
}

export default Home