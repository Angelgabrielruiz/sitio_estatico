import mysql from "../../data/mysql"
import Cards2 from "../molecules/Cards2"
import './Section2.css'
function Section2 (){

    return (

        <div id="seccion2">

        <h3>DESCUBRE UN GRAN MUNDO</h3>
            <div>
            {
                
                mysql.grupo2.map(grupo2=><Cards2 image2={grupo2.image2} text2={grupo2.text2} ></Cards2>)
            }
            </div>

        </div>
    )
}

export default Section2