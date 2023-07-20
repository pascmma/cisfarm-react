import React from "react";




const makeCards = (num) =>{
    const cards = [];

    for(let i=0;i<num;i++){
        cards.push(
            
                <div className="card my-3 bg-image-card" style={{'width': '18rem'}} >
                    <div className="card-body">
                        <h5 className="card-title ">Añade el evento</h5>
                        <h6 className="card-subtitle mb-2 ">Tipo del evento</h6>
                        <p className="card-text">Fecha del evento</p>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        
                    </div>
                </div>

            
        )
    }
    return cards;
}


const makeCardFinal = (numero) =>{
    const cardFinal = [];
    cardFinal.push(
        <div className="container">
            <div className="row">

            </div>

        </div>
    );
}



// style={{'width': '18rem'}}  Ajustar el tamaño del card
function Cards(){

    const numero = 10;
    return(
        <>
            <div className="cards-container">
                <div className="cards-wrapper">
                    {makeCards(numero)}

                </div>
                
                
            </div>

        </>
    );
}

export default Cards;