import React, { useState } from "react";

const AddReview = () => {
  return (
    <div className="mb-4">
      <form action="">
        <div className="form-row">
          <div className="form-group col">
            <input
              id="name"
              placeholder="name"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group col">
            <input
              id="location"
              placeholder="location"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group col">
            <label htmlFor="rating">Rating</label>
            <select
              id="rating"
              className="custom-select"
            >
              <option disabled>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
