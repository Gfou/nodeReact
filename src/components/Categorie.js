import { plantList } from '../datas/plantList'


function Categorie({categorie, setCategorie}){
    const categories = plantList.reduce(
        (acc, elem) =>
            acc.includes(elem.category) ? acc : acc.concat(elem.category),
            []
    )

    function onChangeOption(value){
        setCategorie(value);
    }

    return(
        <select onChange={(event)=>onChangeOption(event.target.value)}>
            {categories.map((element)=>
                <option>{element}</option>
            )}
            <option></option>
        </select>
    )
}

export default Categorie;