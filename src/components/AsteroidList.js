import './AsteroidList.css';
import { useEffect } from 'react';

function AsteroidList(props) {

    //Uses the list of asteroids in props to build table rows.
    function renderListItems(data) {
        let tableRowHTML = data.map((item, index) => {
            return(
                <div 
                key = {item.id} 
                className = {(index % 2 ? "light-row" : "dark-row") + " " + (props.currAsteroid.id === item.id ? "selected" : "")} 
                onClick = {() => setAsteroid(item.id)}
                >
                    <div className = "table-data">{item.name}</div>
                    <div className = "table-data">{Math.round(item.estimated_diameter.feet.estimated_diameter_min) + " Ft"}</div>
                    <div className = "table-data">{item.close_approach_data[0].close_approach_date}</div>
                </div>
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

        //Sort contents based on what column was clicked.
        //-1 means b comes before a, 1 means a comes before b.
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
                    <div className = "table-header-container">
                        <div className = "table-header-name" onClick = {() => sortBy("name")}>Name</div>
                        <div className = "table-header-size" onClick = {() => sortBy("size")}>Size (min)</div>
                        <div className = "table-header-date" onClick = {() => sortBy("date")}>Passes on</div>
                    </div>
                    <div className = "table-body-container">
                        {props.data ? renderListItems(props.data) : <div><div className = "loading-text">Loading, please wait...</div></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsteroidList;