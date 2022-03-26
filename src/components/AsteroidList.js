import './AsteroidList.css';
import { useEffect } from 'react';

function AsteroidList(props) {

    //Uses the list of asteroids in props to build table rows.
    function renderListItems(data) {
        let tableRowHTML = data.map((item, index) => {
            return(
                <tr 
                key = {item.id} 
                className = {(index % 2 ? "light-row" : "dark-row") + " " + (props.currAsteroid.id === item.id ? "selected" : "")} 
                onClick = {() => setAsteroid(item.id)}
                >
                    <td>{item.name}</td>
                    <td>{Math.round(item.estimated_diameter.feet.estimated_diameter_min) + " Ft"}</td>
                    <td>{item.close_approach_data[0].close_approach_date}</td>
                </tr>
            )
        })

        return tableRowHTML;
    }

    //Changes the selected Asteroid
    function setAsteroid(id) {
        let asteroid = props.data.find(element => element.id === id)
        props.asteroidSetter(asteroid)
        console.log(asteroid)
    }

    //Sorts the asteroid data by name, size or passing date
    function sortBy(colName) {
        //Get values of original array, not the reference
        let sortedData = props.data.slice(0);

        //Sort contents based on what column was clicked
        if(colName === "name") {
            sortedData = sortedData.sort((a,b) => {
                if(a.name > b.name) {return -1};
                if(a.name < b.name) {return 1};
                return 0;
            });
        }
        else if(colName === "size") {
            sortedData = sortedData.sort((a,b) => {
                if(a.estimated_diameter.feet.estimated_diameter_min > b.estimated_diameter.feet.estimated_diameter_min) {return -1};
                if(a.estimated_diameter.feet.estimated_diameter_min < b.estimated_diameter.feet.estimated_diameter_min) {return 1};
                return 0;
            })
        }
        else if(colName === "date") {
            sortedData = sortedData.sort((a,b) => {
                if(a.close_approach_data[0].close_approach_date > b.close_approach_data[0].close_approach_date) {return -1};
                if(a.name < b.name) {return 1};
                return 0;
            })
        }

        //set parent state with sorted values, triggering re-render of AsteroidList
        props.setAsteroidData(sortedData);
    }

    //Returns the AsteroidList component
    return (
        <div className = "outermost-container" >
            <div className = "menu-container">
                <div className = "header-container">
                    <div className = "header">NEO Visualizer</div>
                    <div className = "sub-header">View nearby comets and asteroids.</div>
                </div>
                <div className = "list-container">
                    <table>
                        <thead>
                            <tr className = "table-header">
                                <th onClick = {() => sortBy("name")}>Name</th>
                                <th onClick = {() => sortBy("size")}>Size (min)</th>
                                <th onClick = {() => sortBy("date")}>Passes on</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data ? renderListItems(props.data) : <tr><td className = "loading-text">Loading, please wait...</td></tr>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AsteroidList;