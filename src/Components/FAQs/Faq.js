import React, { useState } from "react";
import { FaqData } from "./FaqData";
import './Faq.css'
import SectionTitle from "../SectionTitle";

const FAQs = () => {
	return (
		<>
			<SectionTitle title="FAQs" />
			<div className="faq_box">
				{
					FaqData.map((faq, index) => {
						return <Faq key={index} faq={faq} />
					})
				}
			</div>
		</>
	);
}

function Faq({ faq }) {

	const [open, setOpen] = useState(false);

	return (
		<section id="faqs" >
			<div className="faq_wrap" data-aos="fade-up"
				data-aos-delay="1000"
				data-aos-duration="500"
				data-aos-easing="ease-out"
				data-aos-mirror="true"
				data-aos-once="false">
				<div className="faq_title" onClick={() => { setOpen(!open); }}>
					<div>
						<span className="faq_sno">{faq.sno}.</span>
						<span className="faq_ques">{faq.question}</span>
					</div>
					<div><i className={`${open ? 'faq_arrow faq_arrow_active' : 'faq_arrow'} fa-solid fa-angle-down`} /></div>
				</div>
				{
					open &&
					<div className="faq_details" data-aos="zoom-in"
						data-aos-delay="100"
						data-aos-duration="500"
						data-aos-easing="ease-out"
						data-aos-mirror="true"
						data-aos-once="false">
						<div className="faq_divider" />
						<div className="faq_ans">
							{faq.ans}
						</div>
					</div>
				}
			</div>
		</section>
	);
}

export { Faq, FAQs };