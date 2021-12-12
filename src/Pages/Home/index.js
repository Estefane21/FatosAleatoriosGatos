import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Api";
import HeaderResponsive from "../../Components/HeaderResponsive";
import "./styles.css";




function Home(){
   

    const [data, setData] = useState(null);
    
    
    useEffect( () => {
        const load = async()=>{
            
            let response = await api.getRandomFacts();
            setData(response);
            
            
        }
        load();
    },)
    return(
        <div>
            <HeaderResponsive />
            <div>
                { data && 
                    (
                        <div>
                            <center>                                                       
                            <div className="frase">
                                <div className="linha">                                 
                                </div>
                                <br/>
                                <span>"{data.text}"</span>
                                <div className="user">                                    
                                    <span >{data.user}</span>
                                </div>                                                               
                            </div>
                            </center>                            
                        </div>
                    )
                }
            </div>
            

        </div>
    );
}

export default Home;