import React, { useContext, useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantsContext } from "../context/RestaurantsContext";

const AddReview = () => {
    const { addRestaurants } = useContext(RestaurantsContext)
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [priceRange, setPriceRange] = useState("Price Range");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
              const response = await RestaurantFinder.post("/", {
                name: name,
                location: location,
                price_range: priceRange,
              });
              addRestaurants(response.data.data.restaurant);
            } catch (err) {
              console.log(err);
        }
    };

  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="form-group col">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group col">
            <input
              value={location}
              onChange={e => setLocation(e.target.value)}
              id="location"
              placeholder="location"
              type="text"
              className="form-control"
            />
          </div>
          <div className="col">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2"
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
           </div>
          </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
