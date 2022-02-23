import CareScale from './CareScale'
import '../styles/PlantItem.css'


function PlantItem({name, cover, id, light, water, isSpecialOffer}){
    return (
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {isSpecialOffer && <div className="lmj-sales">Soldes</div>}
            <div>
                {name}
                <CareScale careType='light' scaleValue={light} />
                <CareScale careType='water' scaleValue={water} />
            </div>
        </li>
    )
}

function handleClick(plantName) {

    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix`)
}

export default PlantItem;