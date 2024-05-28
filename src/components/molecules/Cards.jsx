import Text from "../atoms/imagen1/Text";
import Image from "../atoms/imagen1/Image";
import './Cards.css'

function Cards (props){

    return (

        
        <div id="contenedor-img-text">
        

            <Image image1={props.image1}></Image>
            

        </div>
    )

}

export default Cards;