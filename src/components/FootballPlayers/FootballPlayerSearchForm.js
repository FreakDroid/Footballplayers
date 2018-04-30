import React from 'react';
import PropTypes from 'prop-types';

const FootballPlayerSearchForm = ({ submitFunction }) => {
    return (
        <form id="searchBar" action="" className="form-inline justify-content-center" onSubmit={submitFunction}>
            <div className="form-group">
                <input type="text" className="form-control" name="name" placeholder="Name" />
            </div>
            <div className="form-group">
                <select className="form-control" name="position">
                    <option value="">Select Player's Position</option>
                    <option value="Attacking Midfield">Attacking Midfield</option>
                    <option value="Central Midfield">Central Midfield</option>
                    <option value="Centre-Back">Centre-Back</option>
                    <option value="Centre-Forward">Centre-Forward</option>

                    <option value="Defensive Midfield">Defensive Midfield</option>
                    <option value="Keeper">Keeper</option>
                    <option value="Left Midfield">Left Midfield</option>

                    <option value="Left Wing">Left Wing</option>
                    <option value="Left-Back">Left-Back</option>
                    <option value="Right-Back">Right-Back</option>

                </select>
            </div>
            <div className="form-group">
                <input type="number" className="form-control" name="age" min="18" max="40" placeholder="Age" />
            </div>
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    );
};

FootballPlayerSearchForm.propTypes = {
    submitFunction: PropTypes.func.isRequired,
};

export default FootballPlayerSearchForm;