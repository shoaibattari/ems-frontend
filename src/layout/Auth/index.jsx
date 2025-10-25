import React from "react";
import { Route, Routes } from "react-router-dom";
import { LandingPageScreen, LoginScreen, SignupScreen } from "../../views";

const AuthLayout = () => {
  return (
    <div>
      <div className="w-full">
        <div className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-lightBlue to-white font-outfit overflow-hidden">
          <img src="./logo.png" alt="" />

          {/* background glow */}
          <div className="absolute inset-0 bg-gold-soft-gradient opacity-20 blur-[100px]" />

          {/* heading */}
          <h1 className="text-[2.5rem] phone:text-[3rem] tablet:text-[4rem] laptop:text-[5rem] font-extrabold text-primary drop-shadow-lg animate-fade-in-scale">
            COMING <span className="text-blue">SOON</span>
          </h1>
          <h2 className="text-[1.8rem] phone:text-[2.5rem] tablet:text-[3rem] laptop:text-[4rem] font-nunito font-bold text-green animate-fade-in-right">
            OKHAI MEMON JAMAT{" "}
          </h2>
          <h2 className="text-[1.8rem] phone:text-[2.5rem] tablet:text-[3rem] laptop:text-[4rem] font-nunito font-bold text-primary animate-fade-in-scale">
            SOCIAL WELFARE <span className="text-blue"> COMMITTEE</span>
          </h2>
          <h2 className="text-[1.8rem] phone:text-[2.5rem] tablet:text-[3rem] laptop:text-[4rem] font-nunito font-bold text-grey animate-fade-in-right">
            BIG <span className="text-orange">SURPRISE</span>
          </h2>

          <p className="text-mediumGray  text-base tablet:text-lg laptop:text-xl max-w-lg animate-fade-slide">
            Something exciting is coming your way. Stay tuned!
          </p>

          {/* <div className="absolute bottom-8 text-sm text-darkGray animate-fade-in-scale">
            © {new Date().getFullYear()} — All Rights Reserved
          </div> */}
        </div>

        {/* <Routes>
          <Route path="/" element={<LandingPageScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
        </Routes> */}
      </div>
    </div>
  );
};

export default AuthLayout;
