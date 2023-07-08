import React from "react";
import CardItem from "./CardItem.js";
import './Card.css'
import Blockchain from '../images/blockchain.png'
import NativeApp from '../images/mobile.jpg'
import NeuralNet from '../images/NeuralNetwork.jpg'
import Xamarin from '../images/xamarin.jpg'

function Cards(){
    return(
        <div className="Cards">
            <h1>Check out the services we have to Offer</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="card__items">
                        <CardItem src={Blockchain}
                        text="Backend Blockchain Development"
                        label="Smart Contracts"
                        path="/services"
                        />
                        <CardItem src={Xamarin}
                        text="Native App Development"
                        label="Xamarin"
                        path="/services"
                        />
                        <CardItem src={NeuralNet}
                        text="AI/ML Development"
                        label="Neural Networks"
                        path="/services"
                        />
                        <CardItem src={NativeApp}
                        text="UI/UX Design"
                        label="Mobile UI"
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )

}
export default Cards