import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
import germyImg from "@/assets/germy/Germy Wormy.png";
import OnScrollAnimation from "../animation/OnScrollAnimation";
import OpacityTransition from "../animation/OpacityTransition";

const FAQ = () => {
  const faqData = [
    {
      ques: "What is Germy Wormy?",
      ans: "Germy Wormy is a fun and humorous meme token built on the Solana blockchain. It’s designed to bring joy to the crypto space while fostering a strong, engaged community.",
    },
    {
      ques: "How can I buy Germy Wormy?",
      ans: 'You can purchase Germy Wormy on Raydium by swapping SOL for GERM. Check out the "How to Buy" section for a step-by-step guide.',
    },
    {
      ques: "What is the total supply of Germy Wormy?",
      ans: "Germy Wormy has a total supply of 23,000,000 tokens.",
    },
    {
      ques: "What is the token symbol?",
      ans: "The token symbol is GERM.",
    },
    {
      ques: "What makes Germy Wormy unique?",
      ans: "Germy Wormy combines meme culture with a vibrant community and future plans for staking, NFTs, and games. It’s about having fun while wiggling to the moon!",
    },
    {
      ques: "Where can I find updates and connect with the community?",
      ans: "Follow us on Instagram, TikTok, Twitter, and Facebook, and join our Discord for the latest updates, memes, and giveaways.",
    },
  ];
  return (
    <div className="bg-white w-full relative z-20 py-24">
      <OnScrollAnimation>
        <div className="container customLeftRightPadding">
          <h3 className="titleFont capitalize text-primary text-center text-3xl md:text-4xl font-semibold tracking-wider mb-4 md:mb-10">
            Frequently asked questions
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-4">
            <OnScrollAnimation>
              <div className="w-[80%] hidden lg:block">
                <Image src={germyImg} alt="" />
              </div>
            </OnScrollAnimation>
            <div className="flex flex-col gap-4">
              {faqData.map((data, index) => (
                <Accordion key={index} defaultExpanded={index === 0}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography
                      style={{
                        fontFamily: "Comic Neue, sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {data.ques}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      style={{
                        fontFamily: "Nunito, sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {data.ans}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </OnScrollAnimation>
    </div>
  );
};

export default FAQ;
