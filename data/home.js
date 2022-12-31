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
    img: "/images/Home/Clients/1 (34).png",
    name: "Neha Chavan Raje",
    designation: "Managing Director of Sea Garden, Goa",
    comment: "Best Marketing company",
    paragragh:
      " Best services and result oriented approach. If you really wish to achieve success with the help of social media marketing, you must have digilligence doing marketing for you. Best results received so far for my business Sea Garden Boutique Beachfront Cottages. Highly Recommended.",
  },
  {
    img: "/images/Home/Clients/1 (22).png",
    name: "Harshal Adarkar",
    designation: "Founder & Director of Shellcode IT Services",
    comment: "Team of young creative minds",
    paragragh:
      " We were looking for Digital Marketing Services in Mumbai & we came across Digilligence. They're a team of young creative minds. Right from Logo Designing, Branding & Social Media Marketing, we found Digilligence to be one of Mumbai's Best Digital Marketing Agency. Highly recommend to take their Services!.",
  },
  {
    img: "/images/Home/Clients/1 (3).png",
    name: "Gaurav Randive",
    designation: "Founder of TheHours",
    comment: "Team of young creative minds",
    paragragh:
      "Our Startup TheHours has had a wonderful relationship with Digilligence. We started with them by designing our app with Digi's UXUI team working on the user experience & user interface. Soon after our app was live, we opted for their digital marketing services and it has given us great brand awareness till now. Moving forward, we're going to tie-up with them for performance marketing as well. The team is highly passionate about their work and has a result-oriented approach!",
  },
  {
    img: "/images/Home/Clients/1 (33).png",
    name: "Sanal Nair",
    designation: "Founder of Zaika Biryaniwala",
    comment: "Team of young creative minds",
    paragragh:
      "With the ever-growiWng digital world, I decided to opt for the best digital marketing agency in Mumbai: Digilligence's digital marketing services for my brand Zaika Biryaniwala. Ever since they've taken over, it's been quite amazing to see our business grow digitally.",
  },
  {
    img: "/images/Home/Clients/1 (32).png",
    name: "Abhimanyu Nimbalkar",
    designation: "Ajay Translink",
    comment: "Team of young creative minds",
    paragragh:
      "Our company opted for Digilligence's branding services! They delivered an amazing Logo, and helped us with some crazy, out-of-the-box mockups for our trucks & trailers! They also customized an aesthetic brochure that we use for our business meetings. I would honestly say that they are surely The Best Digital Marketing Agency in Mumbai! ",
  },
];

export const service = [
  {
    link: "/services/Social-media-marketing-agencies-in-Mumbai",

    img: "/images/Home/Service/1.png",
    name: "Social Media Marketing",
  },
  {
    link: "/services/best-Mobile-app-development-company-in-mumbai",

    img: "/images/Home/Service/2.png",
    name: "Mobile App Development",
  },
  {
    link: "/services/Branding-Graphic-Designing",

    img: "/images/Home/Service/3.png",
    name: "Branding & Graphic Designing",
  },
  {
    link: "/services/best-website-developer-in-mumbai",

    img: "/images/Home/Service/4.png",
    name: "Website Development",
  },
  {
    link: "/services/best-ux-ui-designing-agency-in-mumbai-thane",
    img: "/images/Home/Service/5.png",
    name: "UX/UI Development",
  },
];
