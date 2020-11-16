import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import stylings from "./apollo.module.css";
import ClinicCards from './ClinicCards';


class Smiles extends Component {
    handleBack = () => {
        this.props.history.push("/");
      };
    render() { 
        return ( 
            <div className={stylings.container}>
                <div className={stylings.title}>
                    <h1>32 Smiles Multispeciality Dental Clinic</h1>
                </div>
                <div className={stylings.wrapper}>
                <Carousel autoPlay className={stylings.sliders} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false}>
                     
                      <div className={stylings.slider}>
                       <img alt="" src="32smiles2.jpg" />
                      </div>
                      <div className={stylings.slider}>
                       <img alt="" src="32smiles3.jpg" />
                      </div>
                      <div className={stylings.slider}>
                       <img alt="" src="32smiles4.jpg"/>
                      </div>
                      <div className={stylings.slider}>
                       <img alt="" src="32smiles5.jpg"/>
                      </div>
                     
                    </Carousel>
                </div>
                <div className={stylings.info}>
                    <p className={stylings.firstpara}><b>Address:</b> Marathahalli, Bangalore
130, Green Garden Layout, Kundalahalli Gate, Sai Baba Temple Road, Silver Springs Layout,, Landmark: Near Pavani Prestige, Kundalahalli Gate Signal & Opposite Family Mall, Bangalore</p>
<p>32 Smiles Multispecialty Dental Clinic is located in Marathahalli, Bangalore with specialists on board for all the dental treatments required. They are open on all the days catering to the needs of the patients who visit them with dental & oral requirements.</p>
    </div>
    <div className={stylings.doctors}>
        <h2>Doctors working in this Clinic..</h2>
        <div className={stylings.useflex}>
        <ClinicCards src="32smilesdoc1.jpg" h2="Dr. M. R. Pujari" h4="BDS, MDS - Oral Medicine and Radiology

Dentist, Dental Surgeon, Oral Medicine and Radiology."
p="14 Years Experience Overall  (14 years as specialist)"/>
        <ClinicCards src="32smilesdoc2.jpg" h2="
Dr. Lakshmi Mohandas" h4="BDS, MDS - Paedodontics And Preventive Dentistry

Pediatric Dentist, Dentist
"
p="13 Years Experience Overall  (13 years as specialist)" />
        <ClinicCards src="32smilesdoc3.jpg" h2="Dr. Javad Saleem" h4="BDS, MDS - Prosthodontics

Prosthodontist, Implantologist, Cosmetic/Aesthetic Dentist

"
p="13 Years Experience Overall  (13 years as specialist)"/>
 <ClinicCards src="32smilesdoc4.jpg" h2="Dr. Poorvi Shrivastava" h4="MDS - Conservative Dentistry & Endodontics, BDS

Endodontist, Dental Surgeon, Dentist
"
p="9 Years Experience Overall  (9 years as specialist)"/>
        </div>
    </div>
    <button onClick={this.handleBack}>Back</button>
            </div>
         );
    }
}
 
export default Smiles;