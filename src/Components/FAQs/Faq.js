import React from 'react';
import SectionTitle from '../SectionTitle';
import FaqComp from './FaqComp'


function Faq() {
  return (
    <>
      <SectionTitle title={'FAQs'} />
      <div className="flex flex-col justify-center items-center my-10">
        <FaqComp sno="1" ques="Why this kolaveri di?" ans="Jai shree Ram" />
        <FaqComp sno="2" ques="Why this kolaveri di?" ans="Jai shree Ram" />
        <FaqComp sno="3" ques="Why this kolaveri di?" ans="Jai shree Ram" />
        <FaqComp sno="4" ques="Why this kolaveri di?" ans="Jai shree Ram" />
        <FaqComp sno="5" ques="Why this kolaveri di?" ans="Jai shree Ram" />
      </div>
    </>
  );
}

export default Faq;
