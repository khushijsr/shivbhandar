export type ContactType = {
  company: string;
  people: {
    name: string;
    phone: string;
  }[];
};

const contacts: ContactType[] = [
  {
    company: "Amulya",
    people: [
      {
        name: "Ajit",
        phone: "7004655993",
      },
    ],
  },
  {
    company: "Biskfarm",
    people: [
      {
        name: "Paramjit Singh",
        phone: "9142746525",
      },
      {
        name: "Lalit Singh",
        phone: "7485808317",
      },
    ],
  },
];

export { contacts };
