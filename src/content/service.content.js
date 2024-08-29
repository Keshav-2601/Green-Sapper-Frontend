import React from "react";
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';
import dayPerformance1 from '../Images-services/dayperformance1.Jpg';
import dayPerformance2 from '../Images-services/dayPerformance2.Jpg';
import energyPerformance1 from '../Images-services/energyperformance1.JPG';
import energyPerformance2 from '../Images-services/energyperformance2.JPG';
import thermalPerformance1 from '../Images-services/ThermalPerformance1.JPG';

import energyPerformance3 from '../Images-services/energyperformance3.JPG';
import dayperformance3 from '../Images-services/dayperformance3.JPG';

export default class ServiceContent extends React.Component {
    render() {
        return (
            <>
                <div className="Service-Content">
                    <h3>Green Buiding Consultancy Services:-</h3>
                    <MDBAccordion flush>
                        <MDBAccordionItem collapseId={1} headerTitle='Building Day Light Performance Simulations & Assessment'>
                            <img id="dayimages1" className="service-images" src={dayPerformance1} alt="Day Performance 1" />
                            <img id="dayimages2" className="service-images" src={dayPerformance2} alt="Day Performance 2" />
                            <img id="dayimages3" className="service-images" src={dayperformance3} alt="Day Performance 2" />
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={2} headerTitle='Building Energy Performance Simulation & Assessment'>
                            <img id="serviceimg1"  className="service-images" src={energyPerformance1} alt="Energy Performance 1" />
                            <img  id="serviceimg2" className="service-images" src={energyPerformance2} alt="Energy Performance 2" />
                            <img id="serviceimg3" className="service-images" src={energyPerformance3} alt="Energy Performance 3" />
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId={3} headerTitle='Thermal Performance & Comfort hours Analysis & Improvement '>
                            <img id="ThermalImg1" className="service-images" src={thermalPerformance1} alt="Thermal 1" />
                        </MDBAccordionItem>
                    </MDBAccordion>
                </div>
            </>
        )
    }
}