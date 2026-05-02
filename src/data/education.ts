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
    imgPath: "/brands/eth.jpg",
    link: "https://ethz.ch/",
    highlights: [
      "Doctorate researcher in Prof. Emo Welzl's group at CADMO, working on computational geometry, discrete geometry, and combinatorics.",
      "Graduated from ETH Zurich with distinction in 2024."
    ],
  },
  {
    title: "Shanghai Jiao Tong University",
    role: "B.Eng. in Computer Science, ACM Honor Class",
    time: "Sep. 2016 - Jun. 2020",
    location: "Shanghai, China",
    imgPath: "/brands/sjtu.png",
    link: "https://en.sjtu.edu.cn/",
    highlights: [
      "GPA: 90.3/100; Summa cum laude.",
      "Undergraduate researcher in Prof. Cewu Lu's group at MVIG, working on robotic simulation and transferable active grasping.",
      "Outstanding Graduate of Shanghai Jiao Tong University."
    ],
  },
  {
    title: "CCF NOI",
    role: "Member of Technical Staff",
    time: "2019 - 2020",
    location: "Beijing, China",
    imgPath: "/brands/ccf.png",
    link: "https://www.noi.cn/",
    highlights: [
      "Technical staff of CCF NOI contest series.",
      "Problem setter for CCF NOI 2019, with broader contest service including ICPC ECL Final and CCPC."
    ],
  },
  {
    title: "SJTU ICPC Team",
    role: "Team Leader and Coach",
    time: "2016 - 2019",
    location: "Shanghai, China",
    imgPath: "/brands/icpc.png",
    link: "https://icpc.global/",
    highlights: [
      "Head coach of the competitive programming team of SJTU from 2018 to 2019.",
      "Placed 2nd at ACM-ICPC 2017-2018 Hua-Lien Regional Contest and 6th at ACM-ICPC 2017-2018 Xi'an Regional Contest."
    ],
  },
]

export { education, type EducationItem }
