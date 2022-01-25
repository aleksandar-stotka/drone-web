import React from "react";
import {
  FaAutoprefixer,
  FaSpaceShuttle,
  FaRocket,
  FaBolt,
} from "react-icons/fa";

const grid = [
  {
    id: 1,
    icon: <FaAutoprefixer className="icon" />,
    title: "Create informed, unified go-to-market strategies",
    desc: "I’ve used Cognism to find contacts in companies I thought weren’t qualified, but it turns out they are! Search filters like team size and company revenue are very good for expanding your target audience and prospecting to companies you would’ve previously dismissed”, Alexander Porter",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-9tOTX9jj4OXEQ2J3UXjdr6D5gKDElMBnCw&usqp=CAU",
    descTwo: "",
  },
  {
    id: 2,
    icon: <FaSpaceShuttle className="icon" />,

    title:
      "Increase speed to connect and start having more conversations today",
    desc: " Before we were only calling switchboards and an SDR would be lucky to have two conversations a day. Now using Cognism mobiles, we consistently have eight to ten conversations, resulting in three to four meetings booked",
    url: "/company",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEugkpR9yY7si6HC03ggn2ePJNImR1OKH4EA&usqp=CAU",
  },

  {
    id: 3,
    icon: <FaBolt className="icon" />,
    title: "Revenue Operations",
    desc: "“We wanted to focus on more than just great inbound leads. We wanted to pick the companies we went after. It’s great that we could build out the platform to suit the needs of each team and that they could use it differently. Now everyone can find the companies they’re looking for",

    img: "https://149346090.v2.pressablecdn.com/wp-content/uploads/2022/01/RoW_India_IT_Header-768x432.jpg",
  },

  {
    id: 4,
    icon: <FaRocket className="icon" />,
    title: "Attract qualified leads your sales team will love",
    desc: "We have a big marketing engine, but the problem is turning leads from an MQL to an SQL. With Cognism you can turn them into actionable conversations and opportunities. It’s improved the overall outcome of our B2B sales function,",

    img: "https://149346090.v2.pressablecdn.com/wp-content/uploads/2022/01/RoW_India_IT_Header-768x432.jpg",
  },
];

export default grid;
