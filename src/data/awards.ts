interface Award {
  year: string;
  name: string;
  description: string;
}

const awards: Award[] = [
  {
    year: "2025",
    name: "Winner, Huawei Hackathon Software Challenge Final",
    description: "Final contest winner.",
  },
  {
    year: "2025",
    name: "2nd Place, Huawei Software Challenge Preliminary Contest",
    description: "Software challenge preliminary round.",
  },
  {
    year: "2021",
    name: "2nd Place, ICPC 2021-2022 Swiss Subregional Individual Contest",
    description: "Competitive programming.",
  },
  {
    year: "2021-2023",
    name: "Excellence Scholarship, ETH Zurich",
    description: "Graduate study honor.",
  },
  {
    year: "2020",
    name: "Outstanding Graduate of Shanghai Jiao Tong University",
    description: "Graduation honor.",
  },
  {
    year: "2020",
    name: "Honor Degree Bachelor of Engineering, Zhiyuan College",
    description: "Undergraduate degree honor.",
  },
  {
    year: "2016-2019",
    name: "The First Prize Scholarship at Shanghai Jiao Tong University",
    description: "Top scholarship during undergraduate study.",
  },
  {
    year: "2017",
    name: "Rong Chang Scholarship",
    description: "Top 0.02% of Shanghai Jiao Tong University.",
  },
  {
    year: "2017",
    name: "2nd Place, ACM-ICPC 2017-2018 Hua-Lien Regional Contest",
    description: "Asia-Pacific regional contest.",
  },
  {
    year: "2017",
    name: "Gold Medal, 19th Place, ACM-ICPC 2017-2018 Asia ECL Final",
    description: "Asia East Continent Final.",
  },
  {
    year: "2017",
    name: "6th Place, ACM-ICPC 2017-2018 Xi'an Regional Contest",
    description: "Gold medal.",
  },
  {
    year: "2017",
    name: "Gold Medal, 9th Place, CCPC 2017 Hangzhou Regional Contest",
    description: "Competitive programming.",
  },
  {
    year: "2016",
    name: "Gold Medal, 9th Place, ACM-ICPC 2016-2017 Myanmar Regional Contest",
    description: "Competitive programming.",
  },
  {
    year: "2017",
    name: "Gold Medal, 7th Place, ACM-ICPC 2016-2017 Xi'an Invitation Contest",
    description: "Competitive programming.",
  },
]

export { awards, type Award }
