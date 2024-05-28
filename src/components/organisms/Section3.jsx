import mysql from "../../data/mysql"
import Cards3 from "../molecules/Cards3"
import './Section3.css'

function Section3 (){

    return (

        <div id="seccion3">
           
            
            {
                mysql.grupo3.map(grupo3=><Cards3 image3={grupo3.image3} text3={grupo3.text3} ></Cards3>)
            }

        </div>

    );
}

export default Section3;