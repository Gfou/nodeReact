function CareScale({ scaleValue, careType }) { //ici on utilise la destructuration ou decomposition
    const range = [1, 2, 3];
    const scaleType = careType === 'light' ? '☀️' : '💧';

    return (
        <div onClick={(event)=> handleClick(careType, scaleValue, event)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

function handleClick(careType, scaleValue, event){
    event.stopPropagation();
    if(careType==='light'){
        switch(scaleValue){
            case 1: alert("Cette plante requiert peu de lumière"); break;
            case 2: alert("Cette plante requiert modérement de lumière"); break;
            case 3: alert("Cette plante requiert beaucoup de lumière"); break;
            default: alert("Erreur");
        }
    }
    else{
        switch(scaleValue){
            case 1: alert("Cette plante requiert peu d'eau"); break;
            case 2: alert("Cette plante requiert modérement d'eau"); break;
            case 3: alert("Cette plante requiert beaucoup d'eau"); break;
            default: alert("Erreur");
        }
    }
}

export default CareScale;