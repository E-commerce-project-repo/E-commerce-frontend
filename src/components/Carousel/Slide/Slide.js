// import React, { useEffect, useState } from "react";
// import * as Elements from "./Slide.elements";
// import logo from "../../../images/mac1.jpg";
// import { Button } from "./Slide.elements";
// import { config, constant_variables } from "../../../constants/constants";
// export const Slider = ({ data, onclick }) => {
//   const [showTitle, setshowTitle] = useState(false);
//   const [logoUrl, setlogoUrl] = useState(null);
//   const [mobile, setMobile] = useState(false);
//   console.log(data);

//   useEffect(() => {
//     if (window.innerWidth <= 500) {
//       setMobile(true);
//     }
//     window.addEventListener("resize", () => {
//       if (window.innerWidth <= 500) {
//         setMobile(true);
//       } else {
//         setMobile(false);
//       }
//     });
//   });

//   return (
//     <Elements.SlideContainer
//       to={{
//         pathname: config.singlePage,
//         data: data,
//       }}
//       onClick={() => onclick(data)}
//     >
//       <Elements.SlideInfo>
//         {data.name ? (
//           <Elements.CaptionContainer>
//             <Elements.Caption>{data.name}</Elements.Caption>
//           </Elements.CaptionContainer>
//         ) : (
//           <Elements.CaptionContainer />
//         )}

//         {data.description ? (
//           <Elements.Overview>{data.description}</Elements.Overview>
//         ) : null}
//         <Elements.Caption>
//           <Button
//             big={true}
//             fontBig={true}
//             to={{
//               pathname: config.singlePage,
//               data: data,
//             }}
//             onClick={() => onclick(data)}
//           >
//             View detail
//           </Button>
//         </Elements.Caption>
//       </Elements.SlideInfo>

//       <Elements.SliderImageContainer>
//         <Elements.SliderImage alt="" src={logo} />
//       </Elements.SliderImageContainer>
//     </Elements.SlideContainer>
//   );
// };

import React from "react";
import * as Elements from "./Slide.elements";
import { config } from "../../../constants/constants";

export const Slider = ({ data, onclick }) => {
  return (
    <Elements.FeatureContainer
      to={{
        pathname: config.singlePage,
        data: data,
      }}
    >
      <Elements.OverviewContainer>
        <Elements.Title>{data?.name}</Elements.Title>
        <Elements.Overview>{data.description}</Elements.Overview>
        <Elements.FeatureButton
          to={{
            pathname: config.singlePage,
            data: data,
          }}
        >
          View Item
        </Elements.FeatureButton>
      </Elements.OverviewContainer>
    </Elements.FeatureContainer>
  );
};
