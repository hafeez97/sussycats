import React, { useState } from "react";
import "./faqs.css"
import Faq from "react-faq-component";

const Faqs=()=> {
  const [rows, setRowsOption] = useState(null);
  const data = {
    rows: [
      {
        title: "When will the Sussy Cats collection be launched?",
        content:"14th feb. 2022. "
      },
      {
        title: "What will be the size of the collection?",
        content: "The total supply is 1111, but 40 of them will be used for marketing and giveaways, so 1071 will be available for mint."
      },
      {
        title: "What is the price of one Sussy Cat?",
        content:"0.11 SOL. "
      },
      {
        title: "What wallet do you recommend?",
        content: "We recommend to use the Phantom wallet (https://phantom.app/)"
      },
      {
        title: "How can I mint my Sussy Cat?",
        content: "You will be able to mint your Sussy Sol Cat by connecting your wallet to our website on the mint date and just hit the mint button! Website: https://sussycats.netlify.app/ (only use our offical link)"
      },
      {
        title: "Will you ever dm me first?",
        content: "No, we will never dm you first."
      },
      {
        title: "How can I get on the WL?",
        content: "The answer is: there is no whitelist."
      },
      {
        title: "Why should I be here or invest into Sussy Sol Cats?",
        content: "Our project will be community-focused and driven. Our goal is for everyone to be able to make some money with their initial investment by thriving to keep increasing the floor price. We will take community suggestions and organize holder meetings. Every holder will have a voice."
      },
      {
        title: "Is Sussy Sol Cats a long-term project?",
        content: "Absolutely! We are looking forward to launching a second and a third collection!People who will get in early and holders will have a advantage in the upcoming collections and projects. "
      }


    ]
  };
  const styles = {
    bgColor: 'none',
    titleTextColor: "green",
    rowTitleColor: "white",
    titleTextSize: "30px",
    rowTextColor:"white",
    rowContentColor:"white",
    arrowColor: "purple",
    border:"none"

  };
  // useEffect(() => {
  //     if (rows) {
  //         setTimeout(() => {
  //             rows[0].expand();
  //         }, 2500);

  //         setTimeout(() => {
  //             rows[0].close();
  //         }, 5000);

  //         setTimeout(() => {
  //             rows[0].scrollIntoView();
  //             // rows[0].scrollIntoView(true);
  //         }, 10000);
  //     }
  // }, [rows]);

  return (
    <div className="Faqs">
      <div className="faq-style-wrapper">
        <div className="box">
          <h1 style={{textAlign:"center", fontSize:"50px", color:"#3cff00"}}>FAQs</h1>
          <Faq data={data} getRowOptions={setRowsOption} styles={styles} />
        </div>
      </div>

    </div>
  );
}
export default Faqs
