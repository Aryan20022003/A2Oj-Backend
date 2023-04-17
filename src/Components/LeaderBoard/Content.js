import React, { useEffect, useState } from "react";
import "./Content.css";
import { useNavigate} from "react-router-dom";
import Issue from "../Issue/Issue";
import Loding from "../Loding/Loding";

// data.result.sort((a, b) => b.rating - a.rating);

function Content(props) {
  const [items, setItems] = useState([]);
  const [ismax, setIsmax] = useState(0);
  const [iscur, setIscur] = useState(1);
  const [ind, setInd] = useState(-1);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    state: 0,
    handle: "",
    maxRating: 0,
    curRating: 0,
    rank: "",
    avatar: "",
    maxRank: "",
  });

  const updateInd = (newInd) => {
    setInd(newInd);
  };

  useEffect(() => {
    fetch(
      `https://codeforces.com/api/user.info?handles=Mayur9agt;SHARAD_0_1;pravesh_2505;arya_afzal;Rishant_07;nishant0129;kumarabhishek0776;127001evil;dipayan2002;arupdeb00;kvdmt2401;Adityaraj5200;prathamnagaria;Afk-Akash;qwertynoob;charan_kumar;saurabhm04;Ancore;anubhavsingh11;ankitraj00;vkpmail019;7288saurabhkumar;ankit0003;sriramsanthosh;ravi.ranjan;Keshav178;ankitgirase27;PRIME3015;Aman_singh0;____V;jon-snow23;Zamiul043;mukund0007;theflash17;sebastian01;kavi_khalique;pradeptakandar.nita;uttamkr12;lalitkishor;demon_98;Vishnu_Sandeep;csud_1;Vanam_2021;popeyeff;ritik_kaushal;ankit0369;ekta.jain2931;pavani_koyyana;AbhinavAbhishek;indravihar15722;Manshi417;Anshuman_21;vineet_kash_p;thish;__ish-gpt__99;rahul04517;shubhamkr78700;Niraj.100;jaadu_bhaiya;rookie09;tanishqkapoor;_rohit_n;mcpigeons_04;am_kumar9955;ankit12_lucifer;ishita1053;ranjan_prabhat;recrown;rajan087;bkaurav;shashi_42;harsh_agarwal30;six_05;ankit748846;prakriti06;its_kundan;geeta_Krishna_dev;singh1128;adityakanu;iris-xe_i7;AwnishShahi;Courage2003;anuroop2709;	JNbalraj17;21UEE091Sonali;rittikamaj21;vikram110703;parnashree_16;PriyankaSheoran;Palak_priya;rounak428;saha_rimi;Gupta2025;azmatroshan;vishu__0123;Ssaloni_009;Undead_King;HEMANT12;wintersoldier2004;Anuj_Shahi;mohit_369;dhruvg13;manish_rohila;aman0037;annhilator_08;Harsh_Chugh;Nilesh.ky;coder_ravan;chetan_saini;akshatverma;Govind_Singh;gourabsingha1;biprajitpaul5555;gollum123;yashpal_97;Ambika_kumar;GC_PRIYANSHU;suyasho786;ami_2025;Aryan20022003;loki_7;Tanzei;zombiedub;Tharun0102;tanyarajhans7;Simp_coder;coder_vk;aryaman3007;chandan_1357;prajna_;abhishek75230;Austin_5;VIDYASAGAR2000;Desh_Deepak_Kant;amit5012003;abhigeddam94;Angiradas;Mjxt77;SATYENDRA_JANGID;Debajyoti_2003;Adarsh1662;alok64;shubha2003;vedant_vaidya_77;saumyadipdeb07;Prime9431;SamIsTheFBI;riya2025;oohomohit;shikha_01;suraj_nita;ravishankar_tiwari;aryan_619;anuj_7072a;Aman_Sirmaur19;Praths;Parthib_Nita;Manish81912;praveennqumar;Ragefury123;satwikgupta18;gouravmajumder6;Akshatawasthi;Raj225;su01;erpranjal;muskangupta30;DevilDeepak;debanshuswag;ishitakar2003;aditya_raj1719;neel2022;aadiXD;Ritika5136;anjalisingh22122003;abhirajjha_001;Saptadipa;li_ght;Mayank_NitA;Kaithedevil;coder_adi07;`
    )
      .then((result) => result.json())
      .then((result) => {
        if (result.status === "OK") {
          const sortedItems = result.result.sort((a, b) => {
            if (iscur === 1) {
              return b.rating - a.rating;
            } else if (iscur === 2) {
              return -b.rating + a.rating;
            } else if (ismax === 2) {
              return b.maxRating - a.maxRating;
            } else if (ismax === 1) {
              return -b.maxRating + a.maxRating;
            } else {
              return 0;
            }
          });

          setItems(sortedItems);
        }
        if (result.status === "FAILED") {
          console.log("Error");
          setError("Error");
        }
      })
      .catch((err) => {
        setError(err.response);
      });
  }, [ismax, iscur]);

  const [isExpanded, setIsExpanded] = useState(false);
  // const displayCount = isExpanded ? 400 : 10;
  const displayCount = 400;
  const displayedObjects = items.slice(0, displayCount);
  const navigate = useNavigate();
  const showClick = () => {
    navigate("/leaderboard");
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      {error === null && items.length === 0 ? <Loding /> : null}
      {error !== null ? (
        <Issue title="Codeforces is temporarily unavailable. Please, return in several minutes." />
      ) : null}
      {error === null && items.length !== 0 ? (
        <div className="w-full ">
          {/* Header */}
          <div
            className="font-serif  "
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <div className="w-1/12 flex justify-center">Rank</div>
            <div className="w-3/12 justify-center flex">Avatar</div>
            <div className="w-3/12 flex justify-center">Handle</div>
            <button
              className="w-3/12 underline flex justify-center"
              onClick={() => {
                if (iscur !== 1) {
                  // data.result.sort((a, b) => b.rating - a.rating);
                  setIscur(1);
                } else {
                  // data.result.sort((a, b) => - b.rating + a.rating);
                  setIscur(2);
                }
                setIsmax(0);
              }}
            >
              {iscur === 0
                ? "Cur. Rating"
                : iscur === 2
                ? "Cur. Rating \u2193"
                : "Cur. Rating \u2191"}{" "}
            </button>
            <button
              className="w-3/12 underline flex justify-center"
              onClick={() => {
                if (ismax !== 2) {
                  setIsmax(2);
                } else {
                  setIsmax(1);
                }
                setIscur(0);
              }}
            >
              {" "}
              {ismax === 0
                ? "Max. Rating"
                : ismax === 1
                ? "Max. Rating \u2193"
                : "Max. Rating \u2191"}{" "}
            </button>
            <div className="w-3/12 flex justify-center">Level</div>
          </div>

          {/* Header Close */}

          <hr className="mb-5 border-none h-px bg-white"></hr>
          {displayedObjects.map((item, index) => (
            <div
              className="sngl"
              key={item.handle}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <div className="w-1/12 justify-center flex">{index + 1}.</div>
              <div className="w-3/12 justify-center flex">
                <a
                  href={`https://codeforces.com/profile/${item.handle}`}
                  target="_blank"
                  rel="noreferrer"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   setInd(-1);
                  //   setInd(index);
                  //   setUser({
                  //     handle: item.handle,
                  //     avatar: item.avatar,
                  //     maxRating: item.maxRating,
                  //     curRating: item.rating,
                  //     rank: item.rank,
                  //     maxRank: item.maxRank,
                  //     state: ((iscur!=2)&&(ismax!=1)) ? index : items.length-index-1
                  //   });
                  // }}
                >
                  <img src={item.avatar} alt={item.handle} className="Avatar" />
                </a>
              </div>
              <div className="w-3/12 flex justify-center overflow-hidden">
                <a
                  href={`https://codeforces.com/profile/${item.handle}`}
                  target="_blank"
                  rel="noreferrer"
                  // onClick={(e) => {
                  //   e.preventDefault();
                  //   setInd(-1);
                  //   setInd(index);
                  //   setUser({
                  //     handle: item.handle,
                  //     avatar: item.avatar,
                  //     maxRating: item.maxRating,
                  //     curRating: item.rating,
                  //     rank: item.rank,
                  //     maxRank: item.maxRank,
                  //     state: ((iscur!=2)&&(ismax!=1)) ? index : items.length-index-1
                  //   });
                  // }}
                >
                  <code>
                    <b>{item.handle}</b>
                  </code>
                </a>
              </div>
              <div className="w-3/12 flex justify-center ">
                <kbd>{item.rating}</kbd>
              </div>
              <div className="w-3/12 flex justify-center ">
                <kbd>{item.maxRating}</kbd>
              </div>
              <div className="w-3/12 flex justify-center">
                <div
                  className={`badge  rounded badge-lg ${
                    ismax
                      ? item.maxRating >= 2100
                        ? "bg-mstr rt"
                        : item.maxRating >= 1900
                        ? "bg-cm rt"
                        : item.maxRating >= 1600
                        ? "bg-expert rt"
                        : item.maxRating >= 1400
                        ? "bg-specialist rt"
                        : item.maxRating >= 1200
                        ? "bg-pupil rt"
                        : "bg-newbie rt"
                      : item.rating >= 2100
                      ? "bg-mstr"
                      : item.rating >= 1900
                      ? "bg-cm"
                      : item.rating >= 1600
                      ? "bg-expert"
                      : item.rating >= 1400
                      ? "bg-specialist"
                      : item.rating >= 1200
                      ? "bg-pupil"
                      : "bg-newbie"
                  }`}
                >
                  {ismax ? (
                    item.maxRank == "candidate master" ? (
                      <span className="d-inline-block d-md-none">
                        Cand. Master
                      </span>
                    ) : (
                      item.maxRank.charAt(0).toUpperCase() +
                      item.maxRank.slice(1)
                    )
                  ) : item.rank == "candidate master" ? (
                    <span>Cand. Master</span>
                  ) : (
                    item.rank.charAt(0).toUpperCase() + item.rank.slice(1)
                  )}
                </div>
              </div>
            </div>
          ))}
          {/* <div className="show-more-container">
          <button className="show-more-button rounded opacity-50 hover:opacity-100" onClick={showClick}>
            {isExpanded ? "Hide" : "Show More"}
          </button>
        </div> */}
        </div>
      ) : null}
    </>
  );
}

export default Content;
