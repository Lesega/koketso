import React from "react";
import "./style.css";

export default function App() {
  return (
    <body>
       <div class="print-area">
           <div class="header">
            <div class="header-text">
            <h1> Innocentia Koketso Maelane</h1>
            <p>Software developer</p>
           </div>
         </div>
      </div>

          <div class="content">
            <div class="left-area">
              <div class="contact">
                <h4> Contact</h4>
                <h5>Phone</h5>
                <p>067-0462-620</p>
                <h5>Email</h5>
                <p>Maelaneik@gmail.com</p>
                <h5>Linkedin</h5>
               <p>www.linkedin.com/in/innocentia-maelane-85b892183</p>
              </div>

              <div class="skils">
               <h1>Skills</h1>
                <div class="bars">
                 <p>SQL</p>
                 <span></span>
                </div>

                <div class="bars">
                 <p>C++</p>
                 <span></span>
                </div>

                <div class="bars">
                 <p>Javascript</p>
                 <span></span>
                </div>
         
                <div class="bars">
                 <p>Cisco</p>
                 <span></span>
                </div>
            
               <div class="bars">
                 <p>Computer literacy: Microsoft office suite</p>
                 <span></span>
               </div>

              </div>

           </div>
           <div class="right-area">
                <div class="about">
                 <h1><span><i class="far fa-user"></i></span>Objectives</h1>
                 <p>To gain experience and the necessary skills in my fields of study in order to be productive and work effectively and efficiently as will be required of me and gain all the necessary credits in order to graduate. With my diligence, experience and eager to learn, I believe that I can objectively execute my duties in demand and benefit from the appropriate position to be offered and grow</p>
                </div>

                <div class="work">
                  <h1><span><i class="far fa-suitcase-rolling"></i></span>Work Experience</h1>
                 <div class="work-group">
                   <h3>Digital Intern</h3>
                   <h4>Space4Good</h4>
                   <span>03/2021-04/2021</span>
                   <p>Doing research and organising the data found into a database</p>
                 </div>

                 <div class="work-group">
                   <h3>Brand Ambassador</h3>
                   <h4>Nicky's Spotlight</h4>
                   <span>2019-2021</span>
                   <p>●	Educating customers, retailers, and distributors about our products.</p>
                   <p> ●	Monitoring customer feedback and escalating complaints to the marketing department.</p>
                   <p>  ●	Tracking customer preferences, metrics, and media campaigns.</p>
                   <p> ●	Representing the company at product launches, events, and trade shows.</p>
                   <p> ●	Brainstorming ideas and participating in training and workshops.</p>
                   <p> ●	Maintaining a positive image of the brand at all times </p>
                 </div>
                </div>

                <div class="education">
                    <h1><span><i class="far fa-book"></i></span>Education</h1>
                    <div class="edu-group"></div>
                     <h4>Tshwane University of Technology</h4>
                     <span>2015-Present</span>
                     <p>National diploma: Information Technology: Software Development</p>

                    <div class="edu-group"></div>
                     <h4>Ntolo High School</h4>
                     <span>2012-2014</span>
                     <p>Matriculation</p>
               </div>

           </div>
          </div>
    </body>
  );
}
