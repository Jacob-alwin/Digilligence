const client = [
  "/images/Home/Clients/1 (1).png",
  "/images/Home/Clients/1 (2).png",
  "/images/Home/Clients/1 (3).png",
  "/images/Home/Clients/1 (4).png",
  "/images/Home/Clients/1 (5).png",
  "/images/Home/Clients/1 (6).png",
  "/images/Home/Clients/1 (7).png",
  "/images/Home/Clients/1 (8).png",
  "/images/Home/Clients/1 (9).png",
  "/images/Home/Clients/1 (10).png",
  "/images/Home/Clients/1 (11).png",
  "/images/Home/Clients/1 (12).png",
  "/images/Home/Clients/1 (13).png",
  "/images/Home/Clients/1 (14).png",
  "/images/Home/Clients/1 (15).png",
  "/images/Home/Clients/1 (16).png",
  "/images/Home/Clients/1 (17).png",
  "/images/Home/Clients/1 (18).png",
  "/images/Home/Clients/1 (19).png",
  "/images/Home/Clients/1 (20).png",
  "/images/Home/Clients/1 (21).png",
  "/images/Home/Clients/1 (22).png",
  "/images/Home/Clients/1 (23).png",
  "/images/Home/Clients/1 (24).png",
  "/images/Home/Clients/1 (25).png",
  "/images/Home/Clients/1 (26).png",
  "/images/Home/Clients/1 (27).png",
  "/images/Home/Clients/1 (28).png",
  "/images/Home/Clients/1 (29).png",
  "/images/Home/Clients/1 (30).png",
  "/images/Home/Clients/1 (31).png",
  "/images/Home/Clients/1 (32).png",
  "/images/Home/Clients/1 (33).png",
  "/images/Home/Clients/1 (34).png",
  "/images/Home/Clients/1 (35).png",
  "/images/Home/Clients/1 (36).png",
  "/images/Home/Clients/1 (37).png",
  "/images/Home/Clients/1 (38).png",
  "/images/Home/Clients/1 (39).png",
  "/images/Home/Clients/1 (40).png",
  "/images/Home/Clients/1 (41).png",
];

export let clients = [];
let count = 5;
while (client.length > 0) {
  clients.push(client.splice(0, count));
  if (count === 5) count = 4;
  else count = 5;
}

export const comments = [
  {
    img: "/images/Home/Testimonial/neha.png",
    name: "Neha Chavan Raje",
    designation: "Managing Director of Sea Garden, Goa",
    comment: "Best Marketing company",
    paragragh:
      " Best services and result oriented approach. If you really wish to achieve success with the help of social media marketing, you must have digilligence doing marketing for you. Best results received so far for my business Sea Garden Boutique Beachfront Cottages. Highly Recommended.",
  },
  {
    img: "/images/Home/Testimonial/harshal.png",
    name: "Harshal Adarkar",
    designation: "Founder & Director of Shellcode IT Services",
    comment: "Team of young creative minds",
    paragragh:
      " We were looking for Digital Marketing Services in Mumbai & we came across Digilligence. They're a team of young creative minds. Right from Logo Designing, Branding & Social Media Marketing, we found Digilligence to be one of Mumbai's Best Digital Marketing Agency. Highly recommend to take their Services!.",
  },
];

export const service = [
  {
    img: "/images/Home/Service/1.png",
    name: "Social Media Marketing",
  },
  {
    img: "/images/Home/Service/2.png",
    name: "Mobile App Development",
  },
  {
    img: "/images/Home/Service/3.png",
    name: "Branding & Graphic Designing",
  },
  {
    img: "/images/Home/Service/4.png",
    name: "Website Development",
  },
  {
    img: "/images/Home/Service/5.png",
    name: "UX/UI Development",
  },
];
