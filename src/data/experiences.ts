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
    title: "Rednote Hilab",
    role: "Staff Engineer, AI Infra Team",
    time: "2026 - Present",
    location: "China",
    imgPath: "/brands/rednote.svg",
    link: "https://www.xiaohongshu.com/",
    highlights: [
      "Working on hardware-friendly techniques to improve LLM inference throughput and latency.",
      "Current focus includes quantization, speculative decoding, sparse attention, and related AI infrastructure systems."
    ],
  },
  {
    title: "Huawei Hong Kong Research Center",
    role: "Senior Engineer, Information Theory Group",
    time: "Nov. 2024 - 2026",
    location: "Hong Kong, China",
    imgPath: "/brands/huawei.svg",
    link: "https://www.huawei.com/",
    highlights: [
      "Built Omni-Infer features on top of vLLM and SGLang, including multi-token speculative decoding, rejection sampling, NPU accelerated sampling, and multistep execution.",
      "Improved LLM inference and high performance computing paths on Ascend NPU, Armv8-A Neon, and HiSilicon Kirin devices."
    ],
  },
  {
    title: "Citadel Securities",
    role: "Quantitative Developer",
    time: "2024",
    location: "Hong Kong",
    imgPath: "/brands/citadel.svg",
    link: "https://www.citadelsecurities.com/",
    highlights: [
      "Worked on high frequency trading systems with a focus on exchange arbitrage.",
      "Applied low-latency engineering and systems programming experience to production trading infrastructure."
    ],
  },
]

export { experiences, type Experience }
