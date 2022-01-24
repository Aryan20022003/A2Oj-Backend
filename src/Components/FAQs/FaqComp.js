import React from 'react';
import './FaqComp.css';
function FaqComp(props) {

  const[active,setActive]=React.useState(false);

  return (
    <div
      className="m-4 p-2 cursor-pointer ease-in rounded-2xl shadow-2xl hover:scale-110  duration-200 "
      onClick={() => {
        setActive(!active);
        console.log(active);
      }}
    >
      <div>
        <span class="flex   mx-8 my-2 items-center w-full">
          <span class="animate-ping absolute inline-flex w-8 h-8  rounded-full bg-sky-400 opacity-75"></span>
          <span class="relative flex justify-center h-8 w-8 rounded-full items-center bg-sky-500 ">
            {props.sno}
          </span>
          <div className="mx-8 text-xl font-semibold">{props.ques}</div>
        </span>
      </div>
      <div className={`${active ? "hidden" : null} ease-in duration-300 `}>
        <div className="">{props.ans}</div>
      </div>
    </div>
  );
}

export default FaqComp;
