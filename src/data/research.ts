interface ResearchLink {
  label: string;
  href: string;
}

interface ResearchItem {
  title: string;
  authors: string;
  time: string;
  imgPath: string;
  description: string;
  status: string;
  links: ResearchLink[];
}

const research: ResearchItem[] = [
  {
    title: "Hidden Points and Hidden Vertices in Classes of Polygons",
    authors: "Yuda Fan",
    time: "2024",
    imgPath: "/research/hidden.png",
    description: "Visibility problems in polygons, including approximation and exact algorithms for pseudo-triangles, terrains, fan-shaped polygons, staircase polygons, and related classes.",
    status: "JCDCGGG, Invited to special issue",
    links: [
      { label: "Paper", href: "/publications/JCDCG_2024.pdf" },
      { label: "Diploma Thesis", href: "/publications/MT.pdf" },
    ],
  },
  {
    title: "USO Polytope",
    authors: "Yuda Fan",
    time: "2022",
    imgPath: "/research/USO.png",
    description: "Studies the structure of the polytope spanned by all unique sink orientations of a hypercube, via local and global views of relationships between USOs.",
    status: "Manuscript",
    links: [
      { label: "PDF", href: "/publications/USO.pdf" },
    ],
  },
  {
    title: "SDP Verifier",
    authors: "Yuda Fan, Linyi Li",
    time: "2019",
    imgPath: "/research/sdp.png",
    description: "A neural network verification approach based on semi-definite programming and linear matrix inequalities, targeting the trade-off between expressiveness and tractability.",
    status: "Manuscript",
    links: [
      { label: "PDF", href: "/publications/SDP.pdf" },
    ],
  },
  {
    title: "ROME: Robustifying Memory-Efficient NAS via Topology Disentanglement and Gradients Accumulation",
    authors: "Xiaoxing Wang, Xiangxiang Chu, Yuda Fan, Zhexi Zhang, Junchi Yan, Xiaokang Yang",
    time: "2023",
    imgPath: "/research/nas.png",
    description: "A method for memory-efficient neural architecture search that addresses performance collapse in single-path DARTS-style training.",
    status: "ICCV 2023",
    links: [
      { label: "PDF", href: "/publications/ROME.pdf" },
    ],
  },
  {
    title: "Transferable Active Grasping and Real Embodied Dataset",
    authors: "Xiangyu Chen, Zelin Ye, Jiankai Sun, Yuda Fan, Fang Hu, Chenxi Wang, Cewu Lu",
    time: "2020",
    imgPath: "/research/robotics.png",
    description: "A robotic grasping dataset and active viewpoint optimization strategy for more reliable grasping in sparse reward settings.",
    status: "ICRA 2020",
    links: [
      { label: "PDF", href: "/publications/ICRA.pdf" },
    ],
  },
  // {
  //   title: "CyberPanda: A Universal Robotic Arm Simulator Towards Photorealistic Visual Perception",
  //   authors: "Yuda Fan",
  //   time: "2020",
  //   imgPath: "/research/simulator.svg",
  //   description: "A universal robotic arm simulator integrating remote procedure calls, rendering, and physics simulation for photorealistic visual perception research.",
  //   status: "Bachelor's Thesis",
  //   links: [
  //     { label: "PDF", href: "/publications/BT.pdf" },
  //   ],
  // },
]

export { research, type ResearchItem, type ResearchLink }
