interface Experience {
  title: string;
  role: string;
  time: string;
  location: string;
  imgPath: string;
  link: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    title: "Rednote Dots",
    role: "Staff Engineer & Tech Lead, AI Infra Team",
    time: "Feb. 2026 - Present",
    location: "Beijing, China",
    imgPath: "/brands/rednote.png",
    link: "https://www.xiaohongshu.com/",
    highlights: [
      "Current focus includes quantization, speculative decoding, sparse attention, and etc."
    ],
  },
  {
    title: "Huawei Hong Kong Research Center",
    role: "Senior Engineer, Information Theory Team",
    time: "Nov. 2024 - Feb. 2026",
    location: "Hong Kong, China",
    imgPath: "/brands/huawei.png",
    link: "https://www.huawei.com/",
    highlights: [
      "Built Omni-Infer features on top of vLLM and SGLang, including multi-token speculative decoding, rejection sampling, NPU accelerated sampling, and multistep execution.",
      "Improved LLM inference and high performance computing paths on Ascend NPU, Armv8-A Neon, and HiSilicon Kirin devices."
    ],
  },
  {
    title: "Citadel Securities London",
    role: "Quantitative Developer, Trading Platform Team",
    time: "April. 2024 - Jul. 2024",
    location: "London, UK",
    imgPath: "/brands/citadel.png",
    link: "https://www.citadelsecurities.com/",
    highlights: [
      "Worked on high frequency trading systems with a focus on exchange arbitrage.",
      "Applied low-latency engineering experience to production trading infrastructure."
    ],
  },
]

export { experiences, type Experience }
