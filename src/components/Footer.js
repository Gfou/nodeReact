
import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('dupont@exemple.com')  //la syntaxe [ ] c'est de la decomposition ou destructuration, useState renvoie un tableau, c'est une syntaxe pour extraire les données du tableau

    function onBlurEvent(){
        if(!inputValue.includes('@')){
            alert("Adresse mail invalide");
        }
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <textarea 
                className='lmj-footer-textarea'
                onBlur={onBlurEvent}
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}>
            </textarea>
		</footer>
	)
}

export default Footer;