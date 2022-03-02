import './AsteroidList.css';
import { useEffect } from 'react';

function AsteroidList() {
    
    useEffect(() => {
        
    })

    const asteroids = [{name: "namehere", size: "sizeHere", distance: "distanceHere"},
    {name: "namehere", size: "sizeHere", distance: "distanceHere"}];
    const listItems = asteroids.map((item, index) => {
        return(
            <tr key = {item.name} className = {index % 2 ? "light-row" : "dark-row"} >
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>{item.distance}</td>
            </tr>
        )
    })



    return (
        <div className = "for-margins" >
            <div className = "menu-container">
                <div className = "header">
                    Asteroids or something
                </div>
                <div className = "list-container">
                    <table>
                        <tr className = "table-header">
                            <th>Name</th>
                            <th>Size</th>
                            <th>Distance</th>
                        </tr>

                        {listItems}

                    </table>
                </div>
            </div>
        </div>
    )
}

export default AsteroidList;