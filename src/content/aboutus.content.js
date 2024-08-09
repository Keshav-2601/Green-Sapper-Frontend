import React from "react";
import { Container } from "react-bootstrap";
import Dx from '../Images-services/Dx.JPG';
export default class AboutUSContent extends React.Component {
    render() {
        return (
            <>
                <Container className="mt-5">
                    <section className="about-section">
                        <h2 className="Title">About Us</h2>
                        <p>Welcome to Green Sappers, where innovation meets sustainability. We are a forward-thinking company dedicated to transforming the built environment through advanced green building design and cutting-edge building energy simulations.</p>
                    </section>
                    <section className="mission-section">
                        <h2 className="Title">Our Mission</h2>
                        <p>At Green Sappers, our mission is to create energy-efficient, environmentally friendly buildings that not only meet but exceed modern sustainability standards. We believe that through intelligent design and precise simulation, we can contribute to a greener, more sustainable future.</p>
                    </section>

                    <section className="what-we-do-section">
                        <h2 className="Title">What We Do</h2>
                        <p><strong>Green Building Design:</strong> Our team of expert architects and engineers specialize in designing buildings that are not only aesthetically pleasing but also highly efficient. We focus on incorporating sustainable materials, optimizing natural light, and ensuring superior indoor air quality.</p>
                        <p><strong>Building Energy Simulation:</strong> Using state-of-the-art software tools like TRNSYS and eQUEST we perform detailed energy simulations to predict and enhance the performance of your building. Our simulations help in understanding the energy consumption, thermal comfort, and overall efficiency, enabling us to make data-driven decisions to reduce energy usage and operational costs.</p>
                        <p><strong>Prediction of Building’s Future Performance:</strong> Using the machine learning algorithm we also predict the future performance of the building with the changing weather.</p>
                    </section>
                    <section className="why-choose-us">
                        <h2 className="Title">Why to choose us?</h2>
                        <p>Our team with expertise in Building energy modeling, we have a strong technical background and experience in design, analysis, and optimization of energy systems in buildings. We possess excellent problem-solving skills, a keen attention to detail, and the ability to work effectively. In terms of work experience, We have worked on a variety of projects, including new construction and retrofit projects. We also have experience with other building systems, such as HVAC, lighting, and controls.</p>
                    </section>
                </Container>
                <Container className="mt-6">
                <span id="SoftwareLine">Software Used:-</span>
                    <section className="SoftwareSection">
                        <img className="SoftwareUsedImages" src="https://www.filepicker.io/api/file/ISb3e710QSmh95AYIdef"></img>
                        <img className="SoftwareUsedImages" src="https://th.bing.com/th/id/R.63e81bccc9676c4305782a040b36b2d7?rik=hmkaFYUK97FLfw&riu=http%3a%2f%2fsel.me.wisc.edu%2ftrnsys%2fimages%2flogo_trnsys18.gif&ehk=J%2fdX8UGq3fey47jWX8VqV3ilhwWusvwjX088NdRnNUY%3d&risl=&pid=ImgRaw&r=0"></img>
                        <img className="SoftwareUsedImages" src="https://seeklogo.net/wp-content/uploads/2016/07/sketchup-vector-logo.png"></img>
                        <img className="SoftwareUsedImages" src="https://static.vecteezy.com/system/resources/previews/028/691/134/non_2x/letter-dx-logo-design-initial-letter-dx-logo-in-whit-background-free-free-vector.jpg"></img>
                        
                    </section>
                </Container>
            </>

        )
    }
}
/**
 * 
 * img1=
 * img2=
 * img3=
 * img4=
 * img5=
 */