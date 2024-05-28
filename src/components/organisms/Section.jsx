import mysql from "../../data/mysql"
import Cards from "../molecules/Cards"
import './Section.css'
function Section (){

    return (
        
    
        <div id="seccion1">
            <h3>HOLLOW KNIGH</h3>
            <div id="seccion1-cards">  
            {
            
                mysql.grupo1.map(grupo=><Cards image1 ={grupo.image1} text1 ={grupo.text1}></Cards>)
            }
            </div>
        </div>



    )
}

export default Section