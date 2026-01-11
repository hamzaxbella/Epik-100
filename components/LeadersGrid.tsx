"use client";

import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import SectionTitle from "./SectionTitle";

export default function LeadersGrid() {
  const [flipped, setFlipped] = useState<number | null>(null);

  const leaders = [
    {
      id: 1,
      name: "Amina Kamara",
      country: "SL",
      sector: "Education",
      image: "",
      bioShort:
        "Community-driven education advocate focused on inclusive learning models across rural areas.",
      bioFull:
        "Community-driven education advocate focused on inclusive learning models across rural areas. She has led multiple initiatives improving access to education for underserved communities and works closely with local institutions.",
    },
    {
      id: 2,
      name: "Amina Kamara",
      country: "SL",
      sector: "Education",
      image: "",
      bioShort:
        "Community-driven education advocate focused on inclusive learning models across rural areas.",
      bioFull:
        "Community-driven education advocate focused on inclusive learning models across rural areas. She has led multiple initiatives improving access to education for underserved communities and works closely with local institutions.",
    },
    {
      id: 3,
      name: "Amina Kamara",
      country: "SL",
      sector: "Education",
      image: "",
      bioShort:
        "Community-driven education advocate focused on inclusive learning models across rural areas.",
      bioFull:
        "Community-driven education advocate focused on inclusive learning models across rural areas. She has led multiple initiatives improving access to education for underserved communities and works closely with local institutions.",
    },
    {
      id: 4,
      name: "Amina Kamara",
      country: "MA",
      sector: "Education",
      image: "",
      bioShort:
        "Community-driven education advocate focused on inclusive learning models across rural areas.",
      bioFull:
        "Community-driven education advocate focused on inclusive learning models across rural areas. She has led multiple initiatives improving access to education for underserved communities and works closely with local institutions.",
    },
    {
      id: 5,
      name: "Amina Kamara",
      country: "SL",
      sector: "Education",
      image: "",
      bioShort:
        "Community-driven education advocate focused on inclusive learning models across rural areas.",
      bioFull:
        "Community-driven education advocate focused on inclusive learning models across rural areas. She has led multiple initiatives improving access to education for underserved communities and works closely with local institutions.",
    },
    {
      id: 6,
      name: "Amina Kamara",
      country: "SL",
      sector: "Education",
      image: "",
      bioShort:
        "Community-driven education advocate focused on inclusive learning models across rural areas.",
      bioFull:
        "Community-driven education advocate focused on inclusive learning models across rural areas. She has led multiple initiatives improving access to education for underserved communities and works closely with local institutions.",
    },
    {
      id: 7,
      name: "Amina Kamara",
      country: "SL",
      sector: "Education",
      image: "",
      bioShort:
        "Community-driven education advocate focused on inclusive learning models across rural areas.",
      bioFull:
        "Community-driven education advocate focused on inclusive learning models across rural areas. She has led multiple initiatives improving access to education for underserved communities and works closely with local institutions.",
    },
    {
      id: 8,
      name: "Amina Kamara",
      country: "MA",
      sector: "Education",
      image: "",
      bioShort:
        "Community-driven education advocate focused on inclusive learning models across rural areas.",
      bioFull:
        "Community-driven education advocate focused on inclusive learning models across rural areas. She has led multiple initiatives improving access to education for underserved communities and works closely with local institutions.",
    },
  ];

  return (
    <section className="w-full py-28 bg-white">
        <SectionTitle title="THE 100 YOUNG AFRICAN LEADERS – EPIK 100" />
      <div className="max-w-[1600px] mx-auto px-6">
        {/* TITLE */}

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {leaders.map((leader) => {
            const hasImage = !!leader.image;
            const letter = leader.name.charAt(0);

            return (
              <div key={leader.id} className="perspective2">
                <div
                  className={`card-3d2 relative w-full h-[340px] border border-black/5 rounded-2xl ${
                    flipped === leader.id ? "is-flipped2" : ""
                  }`}
                >
                  {/* FRONT */}
                  <div className="card-face2 card-front2 bg-white rounded-2xl shadow-lg p-6 flex flex-col">
                    {/* IMAGE / LETTER */}
                    <div className="w-full h-[140px] rounded-xl overflow-hidden mb-4 flex items-center justify-center">
                      {hasImage ? (
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-white bg-gradient-to-br from-[#020052] via-[#0b1a7a] to-[#132a9c]">
                          {letter}
                        </div>
                      )}
                    </div>

                    {/* NAME */}
                    <h3 className="text-[#1f2937] font-semibold text-base">
                      {leader.name}
                    </h3>

                    {/* COUNTRY + SECTOR */}
                    <div className="flex items-center gap-2 text-xs text-[#4b5563] mt-1">
                      <ReactCountryFlag
                        svg
                        countryCode={leader.country}
                        style={{ width: "2.1em", height: "2.1em" }}
                      />
                        <span className="inline-flex items-center px-4 py-1 rounded-full border border-[#e4c45c]/80 text-[#e4c45c] text-xs font-medium tracking-wide">
                            {leader.sector}
                        </span>
                    </div>

                    {/* BIO SHORT */}
                    <p className="text-[#4b5563] text-xs mt-3 line-clamp-3">
                      {leader.bioShort}
                    </p>

                    {/* SEE MORE */}
                    <button
                      onClick={() => setFlipped(leader.id)}
                      className="mt-auto text-xs text-[#e4c45c] font-semibold self-start"
                    >
                      See more
                    </button>
                  </div>

                  {/* BACK */}
                  <div className="card-face2 card-back2 absolute inset-0 bg-gradient-to-br from-[#020052] via-[#0b1a7a] to-[#132a9c] rounded-2xl p-5 text-white flex flex-col">
                    <h3 className="text-[#e4c45c] font-semibold text-base mb-3">
                      {leader.name}
                    </h3>

                    <p className="text-xs leading-relaxed text-white/90 flex-1">
                      {leader.bioFull}
                    </p>

                    <button
                      onClick={() => setFlipped(null)}
                      className="mt-4 text-xs text-[#e4c45c] font-semibold self-start"
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
