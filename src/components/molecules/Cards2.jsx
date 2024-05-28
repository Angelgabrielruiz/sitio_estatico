import Text2 from "../atoms/imagen2/Text2";
import Image2 from "../atoms/imagen2/Image2";
import './Cards2.css'

function Cards2 (props){

    return (

        <div id="contenedor2-img-text">

            <Image2 image2={props.image2}></Image2>
            

        </div>

    )

}

export default Cards2;