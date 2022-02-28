import SectionTitle from "../SectionTitle"
import "./sponsors.css";
import { SponsorsData } from "./../SponsorsData";

const Sponsors = () => {
  return (
    <div className="sponsors-page">
      <SectionTitle title="Sponsors" />
      <div class="container">
        {
        SponsorsData.map((Sponsor) => {
          return(
            <div className= "card" key={Sponsor.index} >
              <div className="box">
                <div className="content">
                  <img src={Sponsor.img} alt="" />
                  <h3>{Sponsor.name}</h3>
                </div>
              </div>
            </div>
          )
        }) 
      }

      </div>
    </div>
  );
}

export default Sponsors;

