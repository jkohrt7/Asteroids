import './AsteroidList.css';
import { useEffect } from 'react';

function AsteroidList(props) {

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

    return (
        <div className = "outermost-container" >
            <div className = "menu-container">
                <div className = "header">
                    Asteroids or something
                </div>
                <div className = "list-container">
                    <table>
                        <thead>
                            <tr className = "table-header">
                                <th>Name</th>
                                <th>Size (min)</th>
                                <th>Passes on</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data ? renderListItems(props.data) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default AsteroidList;