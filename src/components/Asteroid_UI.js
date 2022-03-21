import './Asteroid_UI.css'

function Asteroid_UI(props) {
    return(
        <div className="UI-container">
            <div className = "UI-top">
                {props.currAsteroid.name}
            </div>
            <div className='UI-bottom'>
                <div className = 'UI-bottom-CAD'>
                    <div className = 'UI-bottom-title'>
                        Miss Distance
                    </div>
                    <div className='UI-data'>
                        {Math.round(props.currAsteroid.close_approach_data[0].miss_distance.miles) + " Miles"}
                    </div>
                </div>

                <div className = 'UI-bottom-diameter'>
                    <div className = 'UI-bottom-title'>
                        Diameter
                    </div>
                    <div className = "UI-data">
                        {Math.round(props.currAsteroid.estimated_diameter.feet.estimated_diameter_min) + " Feet"}
                    </div>
                </div>

                <div className='UI-bottom-hazardous'>
                    <div className = 'UI-bottom-title'>
                        Level of Concern
                    </div>
                    <div className = {props.currAsteroid.is_potentially_hazardous_asteroid ? 'UI-data-danger' : 'UI-data-safe'}>
                        {props.currAsteroid.is_potentially_hazardous_asteroid ? "Potentially Hazardous" : "Not Hazardous"}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Asteroid_UI;