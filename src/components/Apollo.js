import React, { Component } from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import stylings from "./apollo.module.css";
import ClinicCards from './ClinicCards';


class Apollo extends Component {
    
    handleBack = () => {
        this.props.history.push("/");
      };
    render() { 
        return ( 
            <div className={stylings.container}>
                <div className={stylings.title}>
                    <h1>Apollo Clinic</h1>
                </div>
                <div className={stylings.wrapper}>
                <Carousel autoPlay className={stylings.sliders} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false}>
                      <div className={stylings.slider}>
                       <img alt="" src="apollo1.jpg"/>
                      </div>
                      <div className={stylings.slider}>
                       <img alt="" src="apollo2.jpg" />
                      </div>
                      <div className={stylings.slider}>
                       <img alt="" src="apollo3.jpg" />
                      </div>
                      <div className={stylings.slider}>
                       <img alt="" src="apollo4.jpg"/>
                      </div>
                     
                    </Carousel>
                </div>
                <div className={stylings.info}>
                    <p className={stylings.firstpara}><b>Address:</b> Indiranagar, Bangalore
#2012, 1st Floor, 100 Feet Road, HAL 2nd stage, Indira Nagar., Landmark: Above Vision Express, Bangalore</p>
<p>
Apollo Clinic was a culmination of the vision to work towards creating a world where quality healthcare is made accessible to every one by setting up Clinics in neighborhoods. Intended to cater to the primary health care needs of the family, community, corporate houses and society in response to the growing demand for a one stop health care destination that offers facilities for consultation, diagnostic, health check, dental care, vaccination, pharmacy and minor procedure as a comprehensive health care solution for day to day health care needs. Apollo Clinic is today a fast growing network with over 61 clinics, both owned and franchised in India and 2 clinics in the Middle East. These conveniently located Apollo clinics bring expert healthcare services - medical talent, advanced technologies - closer to people through integrated health care model. All this with the experience, expertise, skills, warmth and care unique only to the Apollo Hospitals make a visit to Apollo Clinics a truly satisfying experience
</p>
    </div>
    <div className={stylings.doctors}>
        <h2>Doctors working in this Clinic..</h2>
        <div className={stylings.useflex}>
        <ClinicCards src="apollodoc1.jpg" h2="Dr. Rajendra Prasad" h4="MD - General Medicine, MBBS
Internal Medicine, General Physician."
p="33 Years Experience Overall  (33 years as specialist)"/>
        <ClinicCards src="apollodoc2.jpg" h2="Dr. Dhanalakshmi B" h4="MBBS, Diploma in Medical Radio-Diagnosis

Radiologist"
p="20 Years Experience Overall  (19 years as specialist)" />
        <ClinicCards src="apollodoc3.jpg" h2="Dr. Adarsh M. Patil" h4="MS - General Surgery, MBBS, FRCP - Gastroenterology, DNB - Surgical Oncology,
 Laparoscopic Surgeon."
p="17 Years Experience Overall  (17 years as specialist)"/>
        <ClinicCards src="apollodoc4.jpg" h2="Dr. Sindhu V A" h4="MBBS, MS - General Surgery, MCh - Surgical Oncology

Surgical Oncologist"
p="13 Years Experience Overall  (6 years as specialist)"/>
</div>
    </div>
    <button onClick={this.handleBack}>Back</button>
            </div>
         );
    }
}
 
export default Apollo;