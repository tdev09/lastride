import type { FAQ, IconKey, Testimonial } from "./types";

export const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    location: "Rajouri Garden, Delhi",
    service: "Cremation & transport",
    text: "We called at two in the morning and somebody picked up on the second ring. The van reached us in half an hour. The boy who came with it handled everything at the ground so my brother and I could stay with our mother.",
  },
  {
    name: "Priya Sharma",
    location: "Sector 62, Noida",
    service: "Freezer box rental",
    text: "My brother was flying in from Toronto and we needed to wait two days. The freezer box was at the house within an hour and their technician came every morning to check it. Nobody had to think about it after that.",
  },
  {
    name: "Amit Verma",
    location: "Sector 56, Gurugram",
    service: "Repatriation from Dubai",
    text: "My father died in Dubai and I had no idea where to start. They handled the embassy papers, the flight, the customs at Delhi airport and drove him to our village in Rajasthan. I only had to be present.",
  },
  {
    name: "Meera Singh",
    location: "Sector 15, Faridabad",
    service: "Chautha & tehravin",
    text: "They arranged the hall, the pandit, the cards and the food for all thirteen days. The pandit knew our family customs without being told twice, which mattered to my mother in law more than anything else.",
  },
  {
    name: "Suresh Gupta",
    location: "Indirapuram, Ghaziabad",
    service: "Dead body transportation",
    text: "We had to take my father to Kanpur. They gave one price on the phone that included the fuel and the tolls, and it was the same price at the end. After what other people had quoted, that was a relief.",
  },
  {
    name: "Kavita Malhotra",
    location: "Greater Kailash, Delhi",
    service: "Prayer hall & decoration",
    text: "Four hundred people came and the hall was ready an hour before. The photograph was printed and framed from a picture I sent on WhatsApp that morning. Somebody from their team stood at the door the whole evening.",
  },
  {
    name: "Vikram Chauhan",
    location: "Dwarka, Delhi",
    service: "Asthi visarjan",
    text: "None of us could travel to Haridwar. They took the kalash, did the whole vidhi with our gotra and sent us the video. My mother watched it on a call from Canada. It felt complete.",
  },
  {
    name: "Neha Kapoor",
    location: "Whitefield, Bengaluru",
    service: "Interstate transport",
    text: "We needed to take my mother back to Kolkata. They embalmed her the same day, arranged the cargo and had someone waiting at the Kolkata airport. It was done in two days when I had been told it would take a week.",
  },
  {
    name: "Deepak Joshi",
    location: "Rohini, Delhi",
    service: "Cremation at Nigambodh Ghat",
    text: "Three other places told us Nigambodh was full that evening. These people got us a platform in forty minutes and brought the wood and samagri to the gate. I do not know how, and I did not ask.",
  },
  {
    name: "Anjali Reddy",
    location: "Gachibowli, Hyderabad",
    service: "Freezer box & cremation",
    text: "Our building would not allow the stretcher in the passenger lift. They sorted it out with the facility manager themselves and carried everything up the service stairs without making it our problem.",
  },
  {
    name: "Harpreet Singh",
    location: "Sector 70, Mohali",
    service: "Sikh antim ardaas",
    text: "They arranged the granthi, coordinated the sehaj paath at the gurudwara and organised the langar for the bhog. Everything happened when they said it would.",
  },
  {
    name: "Fatima Ansari",
    location: "Old City, Hyderabad",
    service: "Muslim burial",
    text: "The grave was arranged by afternoon so the janaza could happen the same day, which is what we needed. They brought the kafan and everything for the ghusl and did not have to be told what was required.",
  },
];

/** Shown on the home page and the contact page. */
export const generalFaqs: FAQ[] = [
  {
    q: "Are you actually available at 3 in the morning?",
    a: "Yes. The helpline is answered by a person, not a recording, at every hour of every day including festivals. Most of our calls come between 10 pm and 6 am, so it is not an unusual request.",
  },
  {
    q: "How quickly can somebody reach us?",
    a: "Across Delhi NCR, 30 to 45 minutes in most areas. In our other cities, 45 to 90 minutes depending on the location. We give you a realistic arrival time on the call rather than an optimistic one.",
  },
  {
    q: "What does it cost?",
    a: "It depends on what you need arranged, and we tell you the figure on the phone before anything is booked. One price that covers everything we have been asked to do, with nothing added later at the ground.",
  },
  {
    q: "What documents do we need?",
    a: "The death certificate or hospital summary, photo ID of the person who has died, and photo ID of the family member registering. A police NOC is needed only where the death was unnatural or accidental. We will tell you exactly what applies to your situation.",
  },
  {
    q: "Do you handle rites for all communities?",
    a: "Yes. Hindu, Sikh, Jain, Buddhist, Christian, Muslim and Parsi rites, with the regional variations. Tell us the community and the region and we send the right person with the right samagri.",
  },
  {
    q: "Can you keep the body until relatives arrive from abroad?",
    a: "Yes. A freezer box delivered to the house holds a body comfortably for two to three days and up to seven at the outside. For a longer wait we embalm, which gives three to four weeks.",
  },
  {
    q: "Do you work outside Delhi NCR?",
    a: "Yes, in 25 cities including Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune, Chandigarh, Lucknow and Patna. We also handle interstate road transfers and international repatriation.",
  },
  {
    q: "What if we have already started arranging things ourselves?",
    a: "That is fine, call us for whatever is left. Families often have the cremation sorted and need only a freezer box, or have everything except a pandit. We take on the parts you need.",
  },
];

/** Home page process strip. */
export const howItWorks: {
  title: string;
  text: string;
  icon: IconKey;
}[] = [
  {
    title: "You call, at any hour",
    text: "A person answers. Tell us where you are and what has happened. We will tell you what needs to happen next and what it will cost, on that call.",
    icon: "phone",
  },
  {
    title: "We dispatch immediately",
    text: "A vehicle leaves while we are still talking. In Delhi NCR that means somebody at your door in 30 to 45 minutes.",
    icon: "route",
  },
  {
    title: "One coordinator takes over",
    text: "One named person handles the ground booking, the paperwork, the pandit and the samagri. You have one number to call, not six.",
    icon: "users",
  },
  {
    title: "We stay through the rites",
    text: "Through the cremation, the chautha, the tehravin and the asthi visarjan. The work does not end when the cremation does.",
    icon: "heart",
  },
];

/** Trust markers used across service and city pages. */
export const promises: { title: string; text: string; icon: IconKey }[] = [
  {
    title: "One price, said upfront",
    text: "The figure we give on the phone is the figure you pay. Nothing gets added at the crematorium gate when you are in no position to argue.",
    icon: "rupee",
  },
  {
    title: "A person answers, always",
    text: "No call menu, no callback queue, no recording. At 3 am on Diwali night, a person picks up.",
    icon: "phone",
  },
  {
    title: "Your rites, not a template",
    text: "Bengali, Tamil, Marathi, Punjabi, Sikh, Jain, Christian, Muslim, Parsi. We send someone who performs your vidhi regularly.",
    icon: "om",
  },
  {
    title: "We say what is not needed",
    text: "If a freezer box will do, we will not sell you embalming. If air cargo works, we will not push a charter. That is the whole business.",
    icon: "shield",
  },
];

/** Gallery items. Replace the src paths with real photographs when available. */
export const galleryItems: {
  title: string;
  caption: string;
  category: string;
  tone: "ink" | "marigold" | "sage" | "paper";
  icon: IconKey;
}[] = [
  {
    title: "Freezer box installation",
    caption: "A unit delivered and set up at a family home in Noida, ready within the hour.",
    category: "Freezer Box",
    tone: "ink",
    icon: "snowflake",
  },
  {
    title: "Hearse van, marigold work",
    caption: "Simple garland work along the platform, the option most families take at short notice.",
    category: "Hearse Van",
    tone: "marigold",
    icon: "van",
  },
  {
    title: "Prayer meeting stage",
    caption: "White backdrop with the photograph centred and a marigold border, set up 90 minutes early.",
    category: "Prayer Hall",
    tone: "paper",
    icon: "hall",
  },
  {
    title: "Antim sanskar samagri",
    caption: "The full kit laid out and delivered to the cremation ground gate rather than the house.",
    category: "Samagri",
    tone: "marigold",
    icon: "basket",
  },
  {
    title: "Freezer ambulance",
    caption: "Sub zero unit checked before every dispatch, with a trained attendant on board.",
    category: "Transport",
    tone: "ink",
    icon: "truck",
  },
  {
    title: "Asthi visarjan at Garhmukteshwar",
    caption: "The kalash carried to Brajghat for a family who could not make the journey themselves.",
    category: "Asthi Visarjan",
    tone: "sage",
    icon: "water",
  },
  {
    title: "Full flower decoration",
    caption: "Complete cover in white and yellow, booked the previous evening.",
    category: "Decoration",
    tone: "marigold",
    icon: "flower",
  },
  {
    title: "Prayer hall seating",
    caption: "Air conditioned hall laid out for 250, with sound tested before the first guest arrived.",
    category: "Prayer Hall",
    tone: "paper",
    icon: "hall",
  },
  {
    title: "Sealed coffin for air cargo",
    caption: "Zinc lined and packed to airline specification, with the labelling checked twice.",
    category: "Repatriation",
    tone: "ink",
    icon: "plane",
  },
  {
    title: "Pandit ji at the ground",
    caption: "Rites conducted at Nigambodh Ghat, with the samagri brought to the platform.",
    category: "Rituals",
    tone: "sage",
    icon: "om",
  },
  {
    title: "Wood pyre setup",
    caption: "Seasoned timber, kindling and cow dung cakes, built up before the family arrives.",
    category: "Cremation",
    tone: "marigold",
    icon: "flame",
  },
  {
    title: "Photograph framing",
    caption: "Printed, framed and garlanded the same day from a picture sent on WhatsApp.",
    category: "Decoration",
    tone: "paper",
    icon: "candle",
  },
];
