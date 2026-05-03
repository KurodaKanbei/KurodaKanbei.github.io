interface ArchiveLink {
  label: string;
  href: string;
}

interface ArchiveItem {
  category: string;
  name: string;
  description: string;
  descriptionHtml?: string;
  time: string;
  links: ArchiveLink[];
}

const archiveItems: ArchiveItem[] = [
  {
    category: "Problem Sets",
    name: "CCPC 2018",
    description: "Problem I and K are dedicated to Mr. Kazuki Takahashi and Dr. Richard Garfield, who created the fascinating world of Yu-Gi-Oh! and Magic: The Gathering, respectively.",
    time: "2018",
    links: [
      { label: "Problems", href: "/archive/ccpc.pdf" },
      { label: "Solution", href: "/archive/ccpc_solution.pdf" },
    ],
  },
  {
    category: "Problem Sets",
    name: "National Olympiad of Informatics 2019",
    description: "Problem A is dedicated to my love Dawn, who constantly supports and inspires me throughout my journey from Hong Kong to Beijing.",
    descriptionHtml: "Problem A is dedicated to my love <a href=\"https://www.linkedin.com/in/%E5%86%AC%E6%99%93-%E6%AF%9B-808867252/\" target=\"_blank\" rel=\"noopener noreferrer\">Dawn</a>, who constantly supports and inspires me throughout my journey from Hong Kong to Beijing.",
    time: "2019",
    links: [
      { label: "Problems", href: "/archive/noi.pdf" },
    ],
  },
  {
    category: "Problem Sets",
    name: "Asia East Continent Final 2021",
    description: "Problem J is dedicated to Mr. Hidetaka Miyazaki and those who bring colorful flavors through their masterpieces.",
    time: "2021",
    links: [
      { label: "Problems", href: "https://codeforces.com/gym/103861/problems" },
    ],
  },
  {
    category: "Problem Sets",
    name: "Chinese Girls' Mathematical Olympiad 2023",
    description: "Problem 8 is a combinatorial gem built on the Erdos-Szekeres theorem.",
    time: "2023",
    links: [
      { label: "Problems", href: "/archive/CGMO.png" },
    ],
  },
  {
    category: "Problem Sets",
    name: "Asia East Continent Final 2024",
    description: "Problem H is built on a corollary of my JCDCGGG paper, which computes the hidden point set of a staircase polygon in linear time.",
    time: "2024",
    links: [
      { label: "Problems", href: "/archive/ecf24.pdf" },
    ],
  },
  {
    category: "Random Pieces",
    name: "56 Interesting Problems from Andrew Stankevich Contest",
    description: "My collection of selected ASC problems from the past 20 years with personal solutions.",
    time: "Slides",
    links: [
      { label: "PDF", href: "/archive/ASC_Problems.pdf" },
    ],
  },
  {
    category: "Random Pieces",
    name: "Simple Polygonization",
    description: "An combinatorial geometry project proposal.",
    time: "Draft",
    links: [
      { label: "PDF", href: "/archive/SP.pdf" },
    ],
  },
]

export { archiveItems, type ArchiveItem, type ArchiveLink }
