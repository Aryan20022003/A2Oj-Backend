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
import thanos from "./thanos.jpg";
import "./About.css"

export default function About() {
  const contributorList = [
    {
      name: "Aryan",
      // image: {thanos},
      image:
        "https://www.adobe.com/express/feature/image/convert/jpg-to-png/media_1b0ad89a4a5ad233f5708e21b5998d6638cb07929.png?width=750&format=png&optimize=medium",
      altText: "Aryan's photo",
      role: "Competitive Programmer",
      batch: "NITA CSE-25",
    },
    {
      name: "Chetan Saini",
      // image: {thanos},
      image:
        "https://www.adobe.com/express/feature/image/convert/jpg-to-png/media_1b0ad89a4a5ad233f5708e21b5998d6638cb07929.png?width=750&format=png&optimize=medium",
      // image: 'https://media-exp1.licdn.com/dms/image/C4E03AQGyjlKPAJlcxQ/profile-displayphoto-shrink_400_400/0/1628573551678?e=1639008000&v=beta&t=LrujJa0fXbccrpguAV8yOAc-l_umKOR7Rq-7I5HPyYo',
      altText: "Chetan's photo",
      role: "Competitive Programmer",
      batch: "NITA CSE-25",
    },
  ];

  const contributors = contributorList.map((item, i) => {
    return (
      <div
        className=" h-62 w-full  rounded-lg flex flex-col justify-center items-center"
        key={i}
      >
        <div className="border bhabhiji  p-8 w-2/3 mb-4 rounded ">
          <div className="mb-8 flex justify-center m-auto">
            <img
              src={item.image}
              width={100}
              height={100}
              className="object-center object-cover rounded-full h-48 w-48 "
              alt={item.altText}
            />
          </div>
          <div className="text-center">
            <p className="sm:text-xl text-white font-bold mb-2">{item.name}</p>
            <p className="text-sm text-slate-300">
              <span className="mb-1.5 sm:mb-0 block sm:inline">
                {item.role}
              </span>
              <span className="hidden sm:inline"> | </span>
              <span className="block sm:inline">{item.batch}</span>
            </p>
          </div>
        </div>
      </div>
      
    );
  });

  return (
    <section id="about">
      <SectionTitle title="About" />

      <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://unpkg.com/tailwindcss@2.2.4/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
          {/* <h1 className="py-12 font-bold text-3xl text-center md:text-4xl lg:text-5xl font-heading text-indigo-900">
          Check our contributors
        </h1> */}
          <div className="grid grid-cols-1 pt-12  gap-4 hover:gap-8 sm:gap-8 sm:grid-cols-2">{contributors}</div>
        </section>
      </div>
    </section>
  );
}
