import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'

function ShoppingList({cart, setCart}) {
    const categories = plantList.reduce(
        (acc, elem) =>
            acc.includes(elem.category) ? acc : acc.concat(elem.category),
            []
    )

	function addToCart(name, price){
		const currentPlantAdded = cart.find((element) => element.name===name);
		if(currentPlantAdded){
			const cartFilter = cart.filter(
				(element)=> element.name !== name
			)
			setCart([...cartFilter, {name, price, amount: currentPlantAdded.amount+1}])
		}
		else{
			setCart([...cart, {name, price, amount: 1}])
		}
	}
    
    return (
        <div className='lmj-shopping-list'>
            <ul>
                {categories.map((cat) => (
                <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, price }) => (
                    <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} />
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList