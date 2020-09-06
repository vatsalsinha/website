import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


export function About (){
    return(
        <Zoom>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 text-white">
              <h2> About Us</h2>
              <h3 className="Section-heading"> inGenius, the flagship event of PESITSouth IEEE Computer Society</h3>
              <p className="mt-3">
                An annual 24-hour hackathon.After seven successful iterations, inGenius 2019 is back! This time around, our theme is Open Hack. The future is data-driven.
              </p>
              <p className="mt-3">
              #GetSetHack
              </p>
            </div>
          </div>
        </div>
        </Zoom>
    )
}

export function Events(){
  return(
      <Zoom>
          <div className="container">
              <h2 className="text-white">Pre-Hack Events</h2>
              <a className="brand-title js-scrool-trigger" href="#">
                  <img className="card-body" src="img/events.jpg" alt="event timeline" />
          </a>
          </div>
      </Zoom>
  )
}

export function Faq(){
  return(
    <Zoom>
      <Fade>
      <div className="container">
        <h3 className="text-white"> FAQs</h3>
        <p className="mt-3 text-white">
        At inGenius we strive to bring together developers to participate in the hackathon irrespective of
        gender,racec socioeconomic backgroung or ethenticity. We ususally try to keep things simple. Read our FAQs to phase out ambiguity."
        </p>
      </div>
      <div className="row mt-5" id="accordian">
        <div className="col-lg-6 col-12">
          <div className="card my-3 active">
            <div className =" card-header btn collapsed" id="faqOne" >
              "Who can participate?"
            </div>
            <div id="collapseOne" className="collapse" >
              <div className="card-body pt-2">
              "Everyone is welcome to apply, be it students, professionals or turing-test certified androids. If you are under 18 years of age, we’ll need a parental consent form"
              </div>
            </div>
          </div>
          
          <div className="card my-3">
            <div className =" card-header btn collapsed" id="faqOne" >
              "Who can participate?"
            </div>
            <div id="collapseOne" className="collapse" >
              <div className="card-body pt-2">
              "Everyone is welcome to apply, be it students, professionals or turing-test certified androids. If you are under 18 years of age, we’ll need a parental consent form"
              </div>
            </div>
          </div>
          
          <div className="card my-3 ">
            <div className =" card-header btn collapsed" id="faqTwo" >
              "How does the appliaction process work"
            </div>
            <div id="collapseTwo" className="collapse" >
              <div className="card-body pt-2">
              "Everyone is welcome to apply, be it students, professionals or turing-test certified androids. If you are under 18 years of age, we’ll need a parental consent form"
              </div>
            </div>
          </div>
          
          <div className="card my-3 ">
            <div className =" card-header btn collapsed" id="faqThree" >
              "Who can participate?"
            </div>
            <div id="collapseThree" className="collapse" >
              <div className="card-body pt-2">
              "Everyone is welcome to apply, be it students, professionals or turing-test certified androids. If you are under 18 years of age, we’ll need a parental consent form"
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fade>
      </Zoom>
  )
}

export function Sponsers(){
  return(
      <div className="container">
        <h3 className="text-white"> Our Proud Sponsors</h3>
        <br></br>
        <div className="row">
          <div className="offset-sm-1 col-sm-3 col-12 sponsors-frame">
            <img className="rounded" src="img/mslogo.png" alt="Microsoft Logo"/>
          </div>
          <div className=" col-sm-3 col-12 sponsors-frame">
            <img className="rounded" src="img/skillenza.png" alt="Skillenza Logo"/>
          </div>
          <div className=" col-sm-3 col-12 sponsors-frame">
            <img className="rounded" src="img/sahaj.png" alt="Sahaj Logo"/>
          </div> 
        </div>		
      </div>
  )
}