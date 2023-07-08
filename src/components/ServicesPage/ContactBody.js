import '../../App.css'
import './ServiceBody.css'
import physics from '../images/twisklogo.png'



const Contact=()=>{

 return(

        <div className="services-container">
           <section class="banner-section">
                <img class="banner-image" src={physics} alt="Blockchain" height={100} width={150}/>
                <h1>Contact</h1>
                <div class="content">
                <p>
                You can also reach us via email at twisk0000@gmail.com or by calling our cell number at +27794309027. We value your feedback, inquiries, and business opportunities. We look forward to hearing from you soon!
                </p>
                
                </div>
            </section>
        </div>

        


    );

}

export default Contact