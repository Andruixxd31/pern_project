import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder';
import { RestaurantsContext } from '../context/RestaurantsContext';

const RestaurantDetailPage = () => {
    const { id } = useParams();
    const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get(`/${id}`);
                setSelectedRestaurant(response.data.data.restaurants);
            } catch (err) {
                console.log(err)
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <h1>{selectedRestaurant.name}</h1>
        </div>
    )
}

export default RestaurantDetailPage
