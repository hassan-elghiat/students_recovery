import React from "react";
import "./QueueBar.css";
import "./barcss.css";
import "./utsframe.css";


const QueueBar = ({
  firstName,
  id,
  lastName,
  image,
  cin,
  address,
  phoneNumber,
  childreen,
  index,
}) => {
  return (
    // the code of the parent bar should be Here
    

    <section class=" u-section-1" id="sec-4fba">
      <div class="u-container-style u-group u-radius-17 u-shape-round u-white u-group-1">
        <div class="u-container-layout u-container-layout-1">
        <img class=" u-border-palette-2-light-2 u-image u-image-circle u-image-1" src="assets/images/ImageHolder_3.png" alt="" data-image-width="400" data-image-height="265"></img>
            <img class=" u-border-palette-2-light-2 u-image u-image-circle u-image-2" src="assets/images/ImageHolder_2.png" alt="" data-image-width="400" data-image-height="265"></img>
            <img class="u-border-palette-2-light-2 u-image u-image-circle u-image-3" src="assets/images/ImageHolder_1.png" alt="" data-image-width="400" data-image-height="265"></img>
            <img class=" u-border-palette-2-light-2 u-image u-image-circle u-image-4" src="assets/images/ImageHolder.png" alt="" data-image-width="400" data-image-height="265"></img>
          <h3 class="u-text u-text-1">{firstName}</h3>
        </div>
    
    
       

          
      {/* {childreen.map((child, i) => (
     
            
            // pour les image de l'enfant
        <div className="" key={`child-${id}-${i}`}>
          Enfant  {++i} {child.firstName}
          
          
          
        </div>
      ))} */}
      </div>
      </section>
  );
};

export default QueueBar;
