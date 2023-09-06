export interface Question {
  question: string;
  answer: string;
}

const fakeTopQuestions: Question[] = [
  {
    question: "How to Become a Pikla Captains",
    answer:
      "Go to drive.pikla.com to start the registration process to become a Careem Captain.",
  },
  {
    question: "Which documents are required to become a Pikla Captain?",
    answer:
      "These are the 4 documents that are required: profile picture, id card, driving license, and car registration document.",
  },
  {
    question: "Do I need a car to start driving with Pikla?",
    answer: "Yes, you will need a car to drive with Pikla.",
  },
  {
    question: "How can I maximise my earnings?",
    answer:
      "You can become a full time Captain through which you can get 100% of your earnings from this platform. You can also take advantage of peak demand hours to increase your earnings.",
  },
  {
    question: "How does Pikla pay me?",
    answer: "Pikla pays on a daily and weekly basis.",
  },
];

export default fakeTopQuestions;
