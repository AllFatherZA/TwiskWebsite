import React from "react";
import CardItem from "./CardItem.js";
import './Card.css';
import Blockchain from '../images/blockchain.png';
import NativeApp from '../images/mobile.jpg';
import NeuralNet from '../images/NeuralNetwork.jpg';
import Xamarin from '../images/xamarin.jpg';
import ValentinesVideo from '../images/valentines.mp4'; // Import the video file

function Cards() {
    return (
        <div className="Cards">
            {/* Video Background */}
            <video className="video-bg" autoPlay muted loop>
                <source src={ValentinesVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Content */}
            <h1 className="Card_H1">Check out the services we have to Offer</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="card__items">
                        <CardItem
                            src={Blockchain}
                            text="Backend Blockchain Development"
                            label="Smart Contracts"
                            path="/services"
                        />
                        <CardItem
                            src={Xamarin}
                            text="Native App Development"
                            label="Xamarin"
                            path="/services"
                        />
                        <CardItem
                            src={NeuralNet}
                            text="AI/ML Development"
                            label="Neural Networks"
                            path="/services"
                        />
                        <CardItem
                            src={NativeApp}
                            text="UI/UX Design"
                            label="Mobile UI"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
