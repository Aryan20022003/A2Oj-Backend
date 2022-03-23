import SectionTitle from "../SectionTitle";
import '../../App.css';
import { Fade } from "react-reveal";

export default function SupportedBy() {
  return (
    <div>
      <SectionTitle title="Supported By" />
      <div className="mt-12">
        <Fade duration={500} bottom>
          <div className="flex flex-col justify-between gap-4 items-center px-4 pb-20 md:flex-row">
            <div style={{ width: "230px", borderRadius: "10px", overflow: "hidden" }}>
              <img src="/Images/about/dsc-placeholder.jpg" className="" alt="" />
            </div>
            <div style={{ fontWeight: "400" }} className="font-secondary text-lg leading-7 text-center md:text-left md:w-9/12">
              <h4 style={{ fontWeight: "500", color: "#22A7F0" }} className="font-secondary text-2xl mb-4 md:text-xl">
                National Institute of Technology, Agartala
              </h4>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda tempore temporibus amet numquam obcaecati ut, deserunt laudantium veniam expedita velit id atque beatae tenetur in magni est nam. Ea, ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam consequuntur blanditiis fugit non, fuga repellendus! Culpa totam repellendus ipsum ducimus qui recusandae quidem, nihil sed neque voluptas quo earum!
            </div>
          </div>
        </Fade>
        <Fade duration={500} bottom>
          <div className="flex flex-col gap-4 justify-between items-center px-4 pb-20 md:flex-row-reverse">
            <div style={{ width: "230px", borderRadius: "10px", overflow: "hidden" }}>
              <img src="/Images/about/dsc-placeholder.jpg" className="" alt="" />
            </div>
            <div style={{ fontWeight: "400" }} className="font-secondary text-lg leading-7 text-center md:text-left md:w-9/12">
              <h4 style={{ fontWeight: "500", color: "#22A7F0" }} className="font-secondary text-2xl mb-4 md:text-xl">
                National Institute of Technology, Agartala
              </h4>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda tempore temporibus amet numquam obcaecati ut, deserunt laudantium veniam expedita velit id atque beatae tenetur in magni est nam. Ea, ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam consequuntur blanditiis fugit non, fuga repellendus! Culpa totam repellendus ipsum ducimus qui recusandae quidem, nihil sed neque voluptas quo earum!
            </div>
          </div>
        </Fade>
        <Fade duration={500} bottom>
          <div className="flex justify-between gap-4 flex-col items-center px-4 pb-10 md:flex-row">
            <div style={{ width: "230px", borderRadius: "10px", overflow: "hidden" }}>
              <img src="/Images/about/dsc-placeholder.jpg" className="" alt="" />
            </div>
            <div style={{ fontWeight: "400" }} className="font-secondary text-lg leading-7 text-center md:w-9/12 md:text-left">
              <h4 style={{ fontWeight: "500", color: "#22A7F0" }} className="font-secondary text-2xl mb-4 md:text-xl">
                National Institute of Technology, Agartala
              </h4>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda tempore temporibus amet numquam obcaecati ut, deserunt laudantium veniam expedita velit id atque beatae tenetur in magni est nam. Ea, ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam consequuntur blanditiis fugit non, fuga repellendus! Culpa totam repellendus ipsum ducimus qui recusandae quidem, nihil sed neque voluptas quo earum!
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
