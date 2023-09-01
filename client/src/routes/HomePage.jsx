import React from 'react'
import AddReview from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'

const Home = () => {
    return (
        <div className='container'>
            <Header/>
            <AddReview/>
            <RestaurantList/>
        </div>
    )
}

export default Home
