import { Link } from 'react-router-dom'

function Starship(props) {

    const starshipList = props.starships.map((ship) => {
        return (
            <div>
                <Link to={{ pathname: '/starship', state: ship }} key={ship.name}>{ship.name}</Link>
            </div>
        )
    })
    return (
        <div>
           {starshipList}
        </div>
    )
}

export default Starship; 