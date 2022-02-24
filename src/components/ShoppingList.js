import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categorie from './Categorie'
import { useState } from "react";


function ShoppingList({cart, setCart}) {

    
    const [categorie, setCategorie] = useState("classique");
    console.log(categorie);
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
            <Categorie categorie={categorie} setCategorie={setCategorie}/>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light, price, category }) => (
                    <div key={id}>
                        {category===categorie && <PlantItem cover={cover} name={name} water={water} light={light} />}
                        {category===categorie && <button onClick={() => addToCart(name, price)}>Ajouter</button>}
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList