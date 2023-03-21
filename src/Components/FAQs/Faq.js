// import React, { useState } from "react";
// import './Faq.css'
// import { Fade } from "react-reveal";

// const FAQs = () => {
// 	return (
// 		<>
// 			<SectionTitle title="About" />

// 		</>
// 	);
// }

// function Faq({ faq }) {

// 	const [open, setOpen] = useState(false);

// 	return (
// 		<Fade bottom>

// 		</Fade>
// 	);
// }

// export { Faq, FAQs };

import React from "react";
import SectionTitle from "../SectionTitle";

export default function Faq() {
  return <div>
	<SectionTitle title="About" />
  </div>;
}
