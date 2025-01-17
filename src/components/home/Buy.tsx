import OnScrollAnimation from "../animation/OnScrollAnimation";

const Buy = () => {
  const buyData = [
    {
      step: 1,
      title: "Add SOL to Your Wallet",
      description:
        "Purchase Solana (SOL) from an exchange like Coinbase or Binance, and transfer it to your Phantom wallet.",
    },
    {
      step: 2,
      title: "Connect to Raydium",
      description:
        "Visit Raydium.io and connect your Phantom wallet to the platform.",
    },
    {
      step: 3,
      title: "Swap for Germy Wormy (GERM)",
      description:
        "Search for Germy Wormy using the token address: [Insert Token Address Here]. Swap your SOL for GERM and confirm the transaction.",
    },
    {
      step: 4,
      title: "Celebrate Your Wiggle",
      description:
        "You’re now part of the Germy Wormy community! Hold your tokens, participate in the fun, and wiggle your way to the moon!",
    },
  ];
  return (
    <OnScrollAnimation>
      <div className="container customLeftRightPadding relative z-20 py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div></div>
          <div>
            {buyData.map((data, index) => (
              <div key={index} className="text-white flex items-center gap-4">
                <div className="titleFont text-primary text-6xl font-bold">
                  {data.step}
                </div>
                <div
                  className={`flex flex-col gap-2 w-full my-4  ${
                    index === 0 || index === 1 || index === 2 ? "border-b" : ""
                  }`}
                >
                  <h4 className="titleFont text-3xl font-semibold tracking-wider">
                    {data.title}
                  </h4>
                  <p className="mb-4">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </OnScrollAnimation>
  );
};

export default Buy;
