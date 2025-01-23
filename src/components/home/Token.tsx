import { Divider } from "@mui/material";
import OnScrollAnimation from "../animation/OnScrollAnimation";
import { Visibility } from "@mui/icons-material";

const Token = () => {
  const tokenData = [
    { title: "Token Name", value: "Germy Wormy" },
    { title: "Token Symbol", value: "GERM" },
    { title: "Total Supply", value: "23,000,000 Germy Wormy Tokens" },
    { title: "Token Address", value: "Token Address" },
  ];
  return (
    <div className="customLeftRightPadding relative z-20 text-center bg-white">
      <OnScrollAnimation>
        <div className="container flex flex-col gap-6 py-20">
          <h3 className="titleFont capitalize text-center text-primary text-3xl md:text-4xl font-semibold tracking-wider">
            The Germy Wormy Breakdown
          </h3>
          <Divider />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tokenData.map((data, index) => (
              <div key={index}>
                <h3 className="titleFont capitalize text-center text-primary text-xl md:text-2xl font-semibold tracking-wider mb-4">
                  {data.title}
                </h3>

                <p className="font-semibold mb-4 md:mb-0">{data.value}</p>
                <Divider
                  sx={{
                    visibility: {
                      xs:
                        index === 0 || index === 1 || index === 2
                          ? "visible"
                          : "hidden",
                      sm: "hidden",
                    },
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </OnScrollAnimation>
    </div>
  );
};

export default Token;
