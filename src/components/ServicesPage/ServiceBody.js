
import './ServiceBody.css'
import NeuralNet from '../images/NeuralNetwork.jpg'
import NativeApp from '../images/mobile.jpg'
import BlockChain from '../images/blockchain.png'
import WebApp from '../images/physics.png'
import Fantasy from '../images/fantastic.jpg'


const ServiceBody=()=>{
    return(
        <div className="services-container">
           <section className='Paragraph'>
           <h1>Services</h1>
           </section>
           <section class="banner-section">
                <div className='item-bx'>
                <h1>Blockchain</h1>
                <div class="content">
                <p>Blockchain technology is a revolutionary concept that has gained significant attention in recent years. It is a decentralized and distributed digital ledger that records transactions across multiple computers or nodes, making it secure, transparent, and tamper-resistant. At its core, blockchain enables the secure transfer of data or assets without the need for intermediaries like banks or governments.
                 we offer services ranging from smart contracts to NFT minting and crytpo technologies advicement services.
                </p>
                </div>
                </div>

                <div className='background-image-frame'>
                <iframe src="https://giphy.com/embed/3oEduIBjrydlnXYrAI" Title="Starwars" width="480" height="376" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
                <div className='background-image-image'>
                <img src={Fantasy} width="1200" height="600" alt='Desktop Image' />
                </div>
                <div className='item-bx'>
                <h1>UI/UX Design</h1>
                <div class="content">
                <p>
                At our company, we are dedicated to providing exceptional UI/UX design services that enhance user experiences and drive customer satisfaction. We believe that a well-crafted user interface and user experience are key to capturing users' attention and creating lasting impressions. Our talented team of designers combines creativity, functionality, and user-centered design principles to deliver visually appealing and intuitive interfaces. By conducting in-depth user research and usability testing, we ensure that our designs are user-friendly, accessible, and aligned with our clients' brand identity. Whether it's crafting intuitive navigation, designing captivating visuals, or optimizing interactions, we strive to create engaging and seamless experiences that leave a lasting impact on users, 
                ultimately helping our clients achieve their business goals.
                </p>
                </div>
                </div>
                
                <div className='background-image-frame'>
                <iframe src="https://giphy.com/embed/26FPNS5L0v9wEF6ko" Title="Starwars" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
                <div className='background-image-image'>
                <img src={NativeApp} width="1200" height="600" alt='Desktop Image'/>
                </div>
                <div className='item-bx'>
                <h1>Native App Development</h1>
                <div class="content">
                <p>
                  We specialize in Xamarin cross-platform development, creating high-performance native mobile apps that run seamlessly on iOS, 
                  Android, and Windows. With shared codebases, we reduce development time and costs while ensuring a native user experience. 
                  Reach a broader audience and deliver consistent, engaging apps across platforms with our Xamarin expertise.
                </p>
                </div>
                </div>
                <div className='background-image-frame'>
                <iframe src="https://giphy.com/embed/3oEduN21VyqC7cwTIs" Title="Starwars" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
                <div className='background-image-image'>
                <img src={BlockChain} alt='Desktop Image'/>
                </div>
                <div className='item-bx'>
                <h1>Machine Learing/AI Development</h1>
                <div class="content">
                <p>
                Our company excels in offering AI and machine learning development services,
                empowering businesses to leverage the power of cutting-edge technologies.
                With our expertise in artificial intelligence and machine learning,
                we develop intelligent solutions that automate processes, 
                extract valuable insights from data, and enable predictive capabilities. 
                By utilizing advanced algorithms and frameworks such as TensorFlow or PyTorch, we create customized models and applications tailored to our clients' specific needs. Whether it's natural language processing, computer vision, or predictive analytics, our team of skilled data scientists and engineers ensures the successful implementation of AI and machine learning solutions, driving innovation and efficiency for our clients' businesses.
                </p>
                </div>
                </div>
                
                <div className='background-image-frame'>
                <iframe src="https://giphy.com/embed/3o7abpQzRWVA99CAI8" Title="Starwars" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </div>
                <div className='background-image-image'>
                <img src={WebApp} alt='Desktop Image'/>
                </div>
                <div className='item-bx'>
                <h1>Web Development</h1>
                <div class="content">
                <p>
                At our company, we employ React for full stack development, which involves creating both the frontend and backend components of an application.
                With React's component-based architecture and efficient state management, 
                we build reusable UI components and establish seamless communication with the backend
                . We follow a structured workflow that encompasses planning, designing, implementation, testing, and deployment. By leveraging React's ecosystem and community support, we deliver modern and scalable applications, while staying agile in addressing user feedback and making iterative improvements. Our team is dedicated to providing high-quality, user-centric software solutions through the power of React.
                </p>         
                </div>
                </div>
            </section>
        </div>
    );

}
export default  ServiceBody;