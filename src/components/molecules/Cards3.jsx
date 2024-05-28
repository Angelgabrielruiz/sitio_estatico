import Text3 from "../atoms/imagen3/Text3";
import Image3 from "../atoms/imagen3/Image3";
import './Cards3.css'

function Cards3 (props){

    return (

        
        
        <div id="contenedor3-img-text">
           
                   <Text3 text3={props.text3}></Text3>

        <Image3 image3={props.image3}></Image3>

        </div>

    )

}

export default Cards3;