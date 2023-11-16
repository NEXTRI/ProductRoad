"use client";
import React, { useState } from "react";
import { css } from "../../styled-system/css";
import supabase from "@/lib/supabase/supabase-client";
type Props = {};

const LoginPage = (props: Props) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const signIn = async () => {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: "http://localhost:3000/welcome",
      },
    });
    if (data) {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={css({
        bg: "athensGray",
        h: "screen",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "5",
      })}
    >
      <div
        className={css({
          display: "flex",
          justifyContent: "space-between",
          w: "full",
        })}
      >
        <div
          className={css({
            display: "flex",
            justifyContent: "center",
            w: "16",
            h: "16",
          })}
        >
          <div
            className={css({
              width: "3/4",
              color: "frenchRose",
            })}
          >
            <svg
              fill="none"
              viewBox="0 0 47 45"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m39.2528.419591c.5343-.3931317 1.1652-.530861 1.7858-.3236642 1.8079.6035262 2.3334 2.4963332 2.3334 4.2933732 0 1.69386-.3687 5.15523-2.5027 9.7683-.6876 1.4866-1.5714 3.3305-2.5666 5.0842.1966 1.123.466 2.0979.8105 2.8325.442.9424.8876 1.2531 1.2439 1.2964 1.2879.1563 2.2543-.3861 3.0583-1.2458.7746-.8281 1.3245-1.8728 1.7768-2.7323l.0017-.0032c.033-.0626.0654-.1242.0974-.1847.2344-.4434.7832-.6125 1.2259-.3778s.6116.7844.3772 1.2278c-.0345.0652-.0705.134-.1082.2058-.4385.836-1.0962 2.0899-2.0469 3.1064-1.0603 1.1337-2.5628 2.0547-4.6005 1.8073-1.3065-.1586-2.1415-1.2062-2.6674-2.3276-.2003-.427-.3735-.9002-.5229-1.4055-.0812.1201-.1629.2385-.245.3552-.8166 1.1609-1.7167 2.2082-2.6705 2.8762-.963.6743-2.1284 1.0529-3.3179.5336-1.3332-.5821-2.1377-1.9206-2.6405-3.3515-.0158-.0448-.0313-.09-.0466-.1354-.255.3932-.5279.7864-.8158 1.1628-.578.7556-1.2468 1.4843-1.9884 2.0092-.7413.5248-1.6314.8977-2.6107.7887-1.3402-.1491-2.1528-1.0701-2.5981-2.1007-.1097-.2539-.2011-.5217-.2766-.7982-.171.1519-.3531.2947-.5468.4264-1.4466.9831-2.7096 1.5615-3.8463 1.5945-1.2416.0361-2.1547-.5755-2.8362-1.5062-.3661-.5001-.4925-1.093-.5186-1.6363-.0263-.5474.0455-1.1236.1485-1.6643.1038-.5447.2471-1.0923.3805-1.5842.0256-.0944.0506-.1861.0749-.2751.1064-.3894.199-.7285.2646-1.0244l.0013-.0064c-.0624-.0382-.2123-.0978-.464-.102-.5999-.01-1.1628.284-1.3613.6983-.981 2.0476-2.74286 4.0305-4.53778 5.6193-1.22654 1.0857-2.5121 2.0256-3.64324 2.6999 5.26027 5.161 6.22801 11.1428 5.32118 14.7501-.23644.9406-.61306 1.7679-1.12272 2.3753-.51091.6089-1.22103 1.063-2.07518 1.0327-.84671-.0301-1.58123-.528-2.1676-1.2645-.58779-.7382-1.09984-1.7994-1.52185-3.1853-.899307-2.9535-1.402783-9.3384-1.2654146-15.8274.0955096-4.5118.4661896-9.1457 1.1447246-12.8029.33852-1.82461.7604-3.44395 1.28089-4.69403.26041-.62545.55689-1.18646.89956-1.64154.33989-.45139.76156-.84666 1.28603-1.06154.72794-.29825 1.48757-.29843 2.14311.12699.60352.39168.9654 1.04822 1.1831 1.72818.43713 1.3653.45319 3.32224.12872 5.45194-.63795 4.1873-2.66531 9.4984-6.25949 13.2873-.00131.0745-.00253.1489-.00366.2233 1.0234-.5997 2.25958-1.4879 3.4706-2.5598 1.70698-1.5109 3.27065-3.3053 4.1036-5.0439.60302-1.2589 1.97702-1.7464 3.02692-1.7289.537.009 1.1355.1478 1.5961.5209.5173.4191.769 1.0679.6072 1.7979-.0762.3433-.1837.7366-.2906 1.1279-.0232.0849-.0464.1697-.0692.2538-.1321.4873-.2594.9774-.3492 1.4486-.0905.475-.135.8927-.1185 1.2365.0167.348.0924.5437.1696.6492.427.5832.824.7791 1.3208.7647.6016-.0175 1.5053-.3474 2.8803-1.2819.5106-.347.9246-.8345 1.2534-1.3857-.0004-.0322-.0007-.0642-.0009-.0961-.0067-1.1311.1297-2.2391.3218-3.0549.0936-.3973.2129-.7802.3634-1.0698.0679-.1308.1902-.3393.3937-.4984.0802-.0627.1939-.1341.3392-.1796.0677-.0351.1465-.0658.2369-.0852.3275-.0703.617.0434.8053.2031.1568.1328.2336.2846.2673.3602.0703.1577.0955.316.1075.4118.0141.1132.0202.2343.0212.3558.0038.4781-.0708 1.1648-.2477 1.9177-.155.6597-.4016 1.4245-.7782 2.1711.0446.8012.1803 1.5399.4238 2.1036.2885.6675.66.9639 1.1337 1.0166.3811.0424.8304-.0893 1.3635-.4667.5327-.3771 1.0733-.9479 1.5954-1.6305.6354-.8306 1.1985-1.766 1.6521-2.5877-.1216-.7485-.207-1.5196-.2651-2.2848-.2629-3.4628.0187-7.01087.1983-8.30078.1569-1.12742.5726-3.21631 1.2461-5.0082.3342-.88917.756-1.77168 1.2849-2.42749.5189-.643449 1.2989-1.2498354 2.3192-1.1104858.8871.1211598 1.4024.7789698 1.6808 1.4118358.2777.631.4056 1.40668.4593 2.1641.1085 1.53011-.0681 3.28752-.2595 4.43759l-.0034.02027-.0043.02009c-.9388 4.40327-2.6215 7.44047-3.7069 9.39947l-.0001.0002c-.2334.4214-.4392.7929-.6041 1.1174-.1228.2418-.2732.5367-.4479.8669.1241.6328.2773 1.2248.464 1.756.4485 1.2767 1.0224 2.0133 1.6542 2.2892.3827.167.8647.1253 1.5536-.3571.698-.4888 1.4542-1.3348 2.2272-2.4336.4057-.5769.8038-1.2052 1.189-1.859-.0114-.0786-.0225-.1573-.0332-.2362-.4225-3.1041-.3463-6.7092-.0531-9.01831.3565-3.61249.9483-6.02815 1.6572-7.51784.3536-.74307.7711-1.330364 1.2722-1.699059zm-1.2999 15.619009c.4658-.9259.8937-1.83 1.2706-2.6447 2.0203-4.36728 2.3345-7.56728 2.3345-9.0046 0-1.64053-.4822-2.36597-1.093-2.56986-.0087-.00291-.0102-.00261-.0133-.00197l-.001.00021c-.0074.0014-.0488.01074-.124.06605-.1634.12019-.4198.40972-.7086 1.01659-.5751 1.20839-1.1417 3.38104-1.4908 6.92737l-.0013.01305-.0016.013c-.2044 1.60126-.2981 3.90536-.1715 6.18486zm-9.0137.3128c1.0747-1.9486 2.5193-4.6547 3.3633-8.59905.1767-1.07029.3302-2.66214.236-3.99009-.0479-.67578-.1556-1.20966-.3098-1.5602-.0749-.17033-.1449-.26016-.1906-.30294-.0362-.03382-.0557-.03872-.0754-.0414-.0882-.01204-.3033.00589-.663.45193-.3498.43369-.6901 1.10585-.9983 1.92599-.6114 1.62674-1.0019 3.57504-1.1473 4.61908-.158 1.13487-.4149 4.31888-.2149 7.49668zm-7.2066.5624c.0001.0002-.0017.0034-.0057.0092.0037-.0065.0056-.0094.0057-.0092zm-1.274-.3924c.0001 0 .0006.0026.0014.0082-.0003-.0012-.0005-.0023-.0007-.0032-.0001-.001-.0003-.0018-.0004-.0025-.0003-.0016-.0004-.0025-.0003-.0025zm-7.5941.5492s.0001.0004.0001.0013c-.0001-.0009-.0001-.0013-.0001-.0013zm-7.0742-11.71758c-.05219-.03387-.16488-.09513-.46989.02984-.11915.04882-.30076.17671-.52458.47395-.22104.29356-.4487.70668-.67363 1.24689-.45018 1.08123-.84377 2.55935-1.17167 4.3267-.5283 2.8475-.86864 6.3477-1.02978 9.9353 2.42296-3.2611 3.86867-7.3105 4.37461-10.6313.30748-2.01815.249-3.64909-.06285-4.6231-.15678-.48969-.33801-.69066-.44221-.75828zm-3.96443 22.20578c.0788 5.0466.541 9.4857 1.19699 11.64.38472 1.2635.81154 2.0885 1.20503 2.5827.3949.496.68406.5769.8137.5815.1222.0043.34111-.0509.62218-.3859.28232-.3365.56064-.8874.75236-1.65.72341-2.8777.03238-8.0822-4.59026-12.7683zm19.77893-14.1348c.6122 0 1.1085-.4971 1.1085-1.1103 0-.6131-.4963-1.1102-1.1085-1.1102s-1.1085.4971-1.1085 1.1102c0 .6132.4963 1.1103 1.1085 1.1103z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <p className={css({ color: "nevada", fontSize: "small" })}>
          Don't have an account?{" "}
          <a className={css({ color: "azureRadiance" })} rel="" href="/signup">
            Sign up
          </a>
        </p>
      </div>
      <div
        className={css({
          w: "full",
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            w: "full",
            maxWidth: "400px",
          })}
        >
          <h1
            className={css({
              fontSize: "3xl",
              md: { fontSize: "4xl" },
              fontWeight: "semibold",
            })}
          >
            Log in
          </h1>
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              my: "5",
            })}
          >
            <input
              type="text"
              name="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
              className={css({
                my: "3",
                p: "3",
                rounded: "md",
                outline: "none",
                border: "1px solid",
                borderColor: "gray.200",
              })}
              placeholder="email"
            />
            <button
              className={css({
                bg: "frenchRose",
                color: "white",
                my: "3",
                p: "3",
                rounded: "md",
                cursor: isLoading ? "not-allowed" : "pointer",
                display: "flex",
                justifyContent: "center",
              })}
              disabled={isLoading}
              type="button"
              onClick={() => signIn()}
            >
              {isLoading ? (
                <span
                  className={css({
                    w: "24px",
                    h: "24px",
                    border: "solid 3px",
                    borderRadius: "full",
                    borderColor: "white",
                    borderLeftColor: "frenchRose",
                    animation: "spin",
                  })}
                ></span>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
