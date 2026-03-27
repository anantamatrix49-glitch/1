export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  units: number;
}

export const subjects: Subject[] = [
  { id: "electronics", name: "Electronics", icon: "Cpu", color: "174 62% 32%", units: 5 },
  { id: "physics", name: "Physics", icon: "Atom", color: "220 70% 50%", units: 5 },
  { id: "pps", name: "PPS", icon: "Code", color: "280 60% 50%", units: 5 },
  { id: "environment", name: "Environment & Ecology", icon: "Leaf", color: "140 60% 40%", units: 5 },
  { id: "mathematics", name: "Mathematics II", icon: "Calculator", color: "36 95% 55%", units: 5 },
];

export const notices = [
  { id: 1, title: "CT 2 😱", date: "16-17-18 April",image: "/notices/CT 2.jpg" },
  { id: 2, title: "Avtar'26", date: "7-8 April" , image: "/notices/Avtar'26.jpeg" },
  { id: 3, title: "Workshop on Web Devlopment", date: "23 March to 1 April", image: "/notices/workshop.jpeg" },
  { id: 4, title: "SPL(Student Premier League)", link:"https://forms.gle/ZDjNj7MstPWxwGZF7", image: "/notices/auction.jpeg" },
];

export const latestUpdates = [
  "📚 New PDFs uploaded for Electronics Unit 3",
  "🎥 Video lectures added for Mathematics II",
  "📢 Mid-semester exam dates announced",
  "🔬 Physics lab manual updated",
  "💻 PPS practice problems available",
  "🌿 Environment project guidelines released",
];

export const youtubeVideos: Record<string, string[]> = {
  electronics: [
    "https://www.youtube.com/embed/f2joxLSk0GA",
    "https://www.youtube.com/embed/WOluBk-myRs",
    "https://www.youtube.com/embed/X43i7ImqPds",
    "https://www.youtube.com/embed/BMHFbcJtCYA",
    "https://www.youtube.com/embed/f_vZX4zHLxM",
  ],
  physics: [
    "https://www.youtube.com/embed/20DALIRwvDg&t=4530s",
    "https://www.youtube.com/embed/20DALIRwvDg&t=4530s",
    "https://www.youtube.com/embed/20DALIRwvDg&t=4530s",
    "https://www.youtube.com/embed/DkzyhhzSIzw",
    "https://www.youtube.com/embed/3FTAgnE4Quw",
  ],
  pps: [
    "https://www.youtube.com/embed/AMrcsLzH47o",
    "https://www.youtube.com/embed/KVeJnyyUQ74",
    "https://www.youtube.com/embed/GHGqd5nhHAg",
    "https://www.youtube.com/embed/wv1pVTlJe1k",
    "https://www.youtube.com/embed/s6jWMQsL774",
  ],
  environment: [
    "https://www.youtube.com/embed/LHDbD8hDxQw",
    "https://www.youtube.com/embed/WsWU8CVXlA0",
    "https://www.youtube.com/embed/9Dtc6eb5bYE",
    "https://www.youtube.com/embed/BYXxAhl1nsE",
    "https://www.youtube.com/embed/0OBCaX31SDY",
  ],
  mathematics: [
    "https://www.youtube.com/embed/M2y9lwcy9tc",
    "https://www.youtube.com/embed/zFceoSitEo8",
    "https://www.youtube.com/embed/lpuvX4zRl7Q",
    "https://www.youtube.com/embed/leeYyymYcdA",
    "https://www.youtube.com/embed/4grvNMw43jQ",
  ],
};
