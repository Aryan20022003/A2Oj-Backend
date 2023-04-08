// import React from 'react'

// import {
//     HiOutlineClipboardList,
//     HiOutlineScale,
//   } from "react-icons/hi";
// import {
//     SiCodeforces,
//   } from "react-icons/si";
// import SectionTitle from '../../SectionTitle';
// import A2oj from '../A2oj';
// function Header() {
//   return (
//     <div>
//       <div
//         id="a2oj"
//         style={{
//           background: "rgba(13, 13, 46, 0.4)",
//           padding: "1.5rem 0 2rem 0",
//           borderRadius: "0.5rem",
//           margin: "0 1rem 2rem 1rem",
//         }}
//       >
//         <SectionTitle title="A2 Online Judge"/>
//         <div className="flex flex-wrap justify-center whitespace-no-wrap text-gray-600 dark:text-gray-300 font-medium mt-3 leading-5">
//           <div className="flex items-center mx-3 sm:mx-4 xl:ml-0 xl:mr-8 mt-3">
//             <div className="mr-2">
//               <HiOutlineClipboardList className="h-5 w-5 text-purple-500" />
//             </div>
//             <div>1800+ Questions</div>
//           </div>
//           <div className="flex items-center mx-3 sm:mx-4 xl:ml-0 xl:mr-8 mt-3">
//             <div className="mr-2">
//               <HiOutlineScale className="h-5 w-5 text-purple-500" />
//             </div>
//             <div>Open Source</div>
//           </div>
//           <div className="flex items-center mx-3 sm:mx-4 xl:mx-0 mt-3">
//             <div className="mr-2">
//               <SiCodeforces className="h-5 w-5 text-purple-500" />
//             </div>
//             <div>Codeforces</div>
//           </div>
//         </div>
//         {/* <LoadingSkeleton/> */}
//         <A2oj/>
//       </div>
//     </div>
//   )
// }

// export default Header


import React from "react";
import Heading from "./Heading";
import {
  HiOutlineClipboardList,
  HiOutlineMoon,
  HiOutlineScale,
} from "react-icons/hi";

import {
  SiCodeforces,
} from "react-icons/si";

const Header = () => {
  return (
    <header className="h-auto p-6 container mx-auto sm:w-8/12 lg:w-6/12 rounded-md ">
      <Heading>A2 Online Judge</Heading>
      <div className="flex flex-wrap justify-center whitespace-no-wrap text-gray-300 font-medium mt-3 leading-5">
        <div className="flex items-center mx-3 sm:mx-4 xl:ml-0 xl:mr-8 mt-3">
          <div className="mr-2">
            <HiOutlineClipboardList className="h-5 w-5 text-purple-500" />
          </div>
          <div>1800+ Questions</div>
        </div>
        <div className="flex items-center mx-3 sm:mx-4 xl:ml-0 xl:mr-8 mt-3">
          <div className="mr-2">
            <HiOutlineScale className="h-5 w-5 text-purple-500" />
          </div>
          <div>Open Source</div>
        </div>
        <div className="flex items-center mx-3 sm:mx-4 xl:mx-0 mt-3">
          <div className="mr-2">
            <SiCodeforces className="h-5 w-5 text-purple-500" />
          </div>
          <div>Codeforces</div>
        </div>
      </div>
    </header>
  );
};

export default Header;