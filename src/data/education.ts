interface EducationItem {
  title: string;
  role: string;
  time: string;
  location: string;
  imgPath: string;
  link: string;
  highlights: string[];
}

const education: EducationItem[] = [
  {
    title: "ETH Zurich",
    role: "Direct Doctorate Program and M.Sc. in Computer Science",
    time: "Sep. 2021 - May 2024",
    location: "Zurich, Switzerland",
    imgPath: "/brands/eth.svg",
    link: "https://ethz.ch/",
    highlights: [
      "Double enrolled in the Direct Doctorate Program and M.Sc. in Computer Science.",
      "Ph.D. researcher in Prof. Emo Welzl's group at CADMO, working on computational geometry, graph theory, and combinatorics.",
      "Graduated from ETH Zurich with distinction in 2024."
    ],
  },
  {
    title: "Shanghai Jiao Tong University",
    role: "B.Eng. in Computer Science, ACM Honor Class",
    time: "Sep. 2016 - Jun. 2020",
    location: "Shanghai, China",
    imgPath: "/brands/sjtu.svg",
    link: "https://en.sjtu.edu.cn/",
    highlights: [
      "GPA: 90.3/100; graduated summa cum laude from the ACM Honor Class.",
      "Undergraduate researcher in Prof. Cewu Lu's group at MVIG, working on robotic simulation and transferable active grasping.",
      "Outstanding Graduate of Shanghai Jiao Tong University."
    ],
  },
  {
    title: "CCF NOI Contest Series",
    role: "Problem Setter and Technical Staff",
    time: "2019 - 2020",
    location: "China",
    imgPath: "/brands/ccf.svg",
    link: "https://www.noi.cn/",
    highlights: [
      "Member of technical staff for the CCF NOI contest series.",
      "Problem setter for CCF NOI 2019, with broader contest service including CCPC 2018 and ICPC Asia East Continent Finals."
    ],
  },
  {
    title: "SJTU ICPC Team",
    role: "Contestant and Head Coach",
    time: "2016 - 2019",
    location: "Shanghai, China",
    imgPath: "/brands/icpc.svg",
    link: "https://icpc.global/",
    highlights: [
      "Head coach of the competitive programming team of SJTU from 2018 to 2019.",
      "Placed 2nd at ACM-ICPC 2017-2018 Hua-Lien Regional Contest and 6th at ACM-ICPC 2017-2018 Xi'an Regional Contest.",
      "Placed 2nd at ICPC 2021-2022 Swiss Subregional Individual Contest."
    ],
  },
]

export { education, type EducationItem }
