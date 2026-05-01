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
    year: "2020",
    name: "Outstanding Graduate of Shanghai Jiao Tong University",
    description: "Graduation honor.",
  },
  {
    year: "2017",
    name: "2nd Place, ACM-ICPC 2017-2018 Hua-Lien Regional Contest",
    description: "Asia-Pacific regional contest.",
  },
  {
    year: "2017",
    name: "6th Place, ACM-ICPC 2017-2018 Xi'an Regional Contest",
    description: "Gold medal.",
  },
]

export { awards, type Award }
