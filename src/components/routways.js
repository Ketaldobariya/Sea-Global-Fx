import React from "react";
import { Routes, Route } from "react-router";
import Homepage from "../routes/homepage";
import ForexMarket from "../routes/forexMarket";
import Accountsection from "../routes/account";
import Platforms from "../routes/platforms";
import Partners from "../routes/partners";
import AboutUsPage from "../routes/aboutUsPage";
import BlogsPage from "../routes/blogsPage";
import ContectUsPage from "../routes/contectUsPage";
import LoginPage from "../routes/loginPage";
import OpenAccountPage from "../routes/openAccountPage";

export default function Routways() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/forex-market" element={<ForexMarket />} />
      <Route path="/accounts" element={<Accountsection />} />
      <Route path="/platforms" element={<Platforms />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/contact-us" element={<ContectUsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/open-account" element={<OpenAccountPage />} />
    </Routes>
  );
}