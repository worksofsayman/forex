"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import crimg from "@/assets/crown.png";
import cimg from "@/assets/c.png";
import fimg from "@/assets/f.png";
import { FaCrown } from "react-icons/fa";

const BloodlinesGamePage: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const missionTitles = ["Lore Hunts", "Arena Duels", "Bounties", "Faction Wars"];

  return (
    <div className="min-vh-100" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background Pattern */}
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M30 30l15-15v30zM15 15l15 15L15 45z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.1,
        }}
      />

      <div className="container position-relative">
        {/* Title Section */}
        <div className="text-center py-5 px-4" data-aos="fade-up">
          <h1 className="display-4 text-white fw-bold mb-4 text-start">
            Bloodlines - Factions & Levels
          </h1>
          <p className="text-white-50 text-bolder text-start mb-5 fs-5">
            When you mint, you're assigned to a Bloodline Tier. You can level up
            through XP, quests, and staking.
          </p>

          {/* Faction Cards */}
          <div className="row justify-content-center g-4 mb-5">
            {/* Ancient Founders */}
            <div className="col-12 col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-lg glass-card">
                <div className="p-4 text-center">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <FaCrown className="text-white" size={40} />
                    <span
                      className="badge px-3 py-2 rounded-pill"
                      style={{
                        color: "#66E5DD",
                        fontSize: "0.9rem",
                        border: "1px solid rgb(169, 154, 185)",
                      }}
                    >
                      OG1
                    </span>
                  </div>
                  <h4 className="text-white mb-4 text-start">Ancient Founders</h4>
                  <div className="text-start row">
                    {["Early access", "Rare drops", "High stats"].map((feature) => (
                      <div className="d-flex align-items-center mb-2 col-6" key={feature}>
                        <div
                          className="rounded-circle me-2"
                          style={{ width: "8px", height: "8px", backgroundColor: "#66E5DD" }}
                        />
                        <small className="text-white-50 text-bolder">{feature}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Warforged Clan */}
            <div className="col-12 col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="card h-100 border-0 shadow-lg glass-card">
                <div className="p-4 text-center">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Image src={crimg} alt="Warforged Icon" width={40} height={40} />
                    <span
                      className="badge px-3 py-2 rounded-pill"
                      style={{
                        color: "#66E5DD",
                        fontSize: "0.9rem",
                        border: "1px solid rgb(169, 154, 185)",
                      }}
                    >
                      OG2
                    </span>
                  </div>
                  <h4 className="text-white mb-4 text-start">Warforged Clan</h4>
                  <div className="text-start">
                    {["Bonus missions", "Item airdrops"].map((feature) => (
                      <div className="d-flex align-items-center mb-2" key={feature}>
                        <div
                          className="rounded-circle me-2"
                          style={{ width: "8px", height: "8px", backgroundColor: "#66E5DD" }}
                        />
                        <small className="text-white-50 text-bolder">{feature}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Freeborn Soldiers */}
            <div className="col-12 col-md-6 col-lg-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="card h-100 border-0 shadow-lg glass-card">
                <div className="p-4 text-center">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Image src={cimg} alt="Freeborn Icon" width={40} height={40} />
                    <span
                      className="badge px-3 py-2 rounded-pill"
                      style={{
                        color: "#66E5DD",
                        fontSize: "0.9rem",
                        border: "1px solid rgb(169, 154, 185)",
                      }}
                    >
                      OG3
                    </span>
                  </div>
                  <h4 className="text-white mb-4 text-start">Freeborn Soldiers</h4>
                  <div className="text-start row">
                    {[
                      "Core tier",
                      "Full access to quests",
                      "PvP-ready",
                    ].map((feature) => (
                      <div className="d-flex align-items-center mb-2 col-6" key={feature}>
                        <div
                          className="rounded-circle me-2"
                          style={{ width: "8px", height: "8px", backgroundColor: "#66E5DD" }}
                        />
                        <small className="text-white-50 text-bolder">{feature}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-white mb-4 text-start fs-5" data-aos="fade-up">
            Level up through XP, quests, and staking.
          </p>
          <button
            className="btn btn-light btn-lg px-4 py-2 shadow-lg"
            style={{ fontWeight: "600", color: "purple" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Level UP
          </button>
        </div>

        {/* Mission & XP Section */}
        <div
          className="py-5 px-4"
          style={{ backgroundColor: "rgba(24,15,39,0.87)", borderRadius: "20px" }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="text-center mb-5">
            <h2 className="display-5 text-white fw-bold mb-3 text-start">
              Mission & XP - The Quest System
            </h2>
            <p className="text-white-50 text-bolder fs-5 text-start">
              Once you hold a Fornax warrior, you unlock quests
            </p>
          </div>

          <div className="row justify-content-center g-4 mb-5">
            {missionTitles.map((title, i) => (
              <div
                className="col-12 col-sm-6 col-lg-3"
                data-aos="flip-left"
                data-aos-delay={i * 100 + 100}
                key={title}
              >
                <div
                  className="card h-100 border-0 text-center"
                  style={{
                    background: "rgba(22, 0, 48, 0.3)",
                    borderRadius: "30px",
                  }}
                >
                  <div className="card-body p-4">
                    <Image src={fimg} alt="Quest Icon" width={60} height={60} />
                    <h5 className="text-white mb-2">{title}</h5>
                    <small className="text-white-50 text-bolder">
                      {{
                        "Lore Hunts": "Solve riddles & decode hidden lore",
                        "Arena Duels": "Discord-based PvP contests",
                        "Bounties": "Community art, content & collab tasks",
                        "Faction Wars": "Compete for upgrades as a team",
                      }[title]}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr style={{ border: "1px solid white" }} />

          {/* Connect to Play Section */}
          <div className="py-5 px-1" data-aos="fade-up">
            <div className="text-center mb-5">
              <h2 className="display-5 text-white fw-bold mb-3 text-start">Connect to Play</h2>
              <p className="text-white-50 text-bolder fs-5 text-start">
                Log in with your Solana wallet and explore your warrior's dashboard
              </p>
            </div>

            <div className="row justify-content-center align-items-stretch g-4">
              {["Dashboard Features", "Supported Wallets"].map((section, i) => (
                <div
                  className="col-12 col-lg-4"
                  data-aos="fade-up"
                  data-aos-delay={100 + i * 100}
                  key={section}
                >
                  <div
                    className="card h-100 border-0"
                    style={{
                      background: "rgba(22, 0, 48, 0.3)",
                      borderRadius: "30px",
                    }}
                  >
                    <div className="card-body p-4">
                      <h5 className="text-white mb-4">{section} :</h5>
                      {(section === "Dashboard Features"
                        ? [
                            "View traits and faction",
                            "Track XP and quest progress",
                            "See current missions",
                            "Get rewarded for activity",
                          ]
                        : ["Phantom", "Solflare", "Ledger"]
                      ).map((item) => (
                        <div className="d-flex align-items-center mb-3" key={item}>
                          <div
                            className="rounded-circle me-3"
                            style={{
                              width: "8px",
                              height: "8px",
                              backgroundColor: "#66E5DD",
                            }}
                          />
                          <span className="text-white-50 text-bolder">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div
                className="col-12 col-lg-4 d-flex align-items-center justify-content-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <button
                  className="btn btn-light py-2 shadow-lg d-inline-flex align-items-center mt-3 mt-lg-0"
                  style={{ fontWeight: "400", color: "purple" }}
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodlinesGamePage;
