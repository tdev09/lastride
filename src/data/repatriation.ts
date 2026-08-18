import type { RepatriationRoute } from "./types";

export const repatriationRoutes: RepatriationRoute[] = [
  {
    slug: "uk-to-india",
    title: "Dead Body Repatriation from the UK to India",
    navTitle: "UK to India",
    from: "United Kingdom",
    to: "India",
    direction: "inbound",
    timeline: "5 to 8 days from the date of death",
    airports: [
      "London Heathrow",
      "London Gatwick",
      "Manchester",
      "Birmingham",
      "Glasgow",
    ],
    metaTitle: "Repatriation from UK to India | Documents & Timeline",
    metaDescription:
      "Repatriation of mortal remains from the UK to India. Coroner clearance, Out of England order, High Commission NOC, embalming and coffin arranged.",
    intro: [
      "The UK process is slower than families expect, and the reason is almost always the coroner. Any death that was not clearly expected gets referred, and until the coroner releases the body nothing else can move. That referral alone can take two to five days.",
      "We work with funeral directors across the UK and receive at Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Kolkata, Amritsar and Kochi. The family in India usually deals only with us, and we deal with everyone else.",
    ],
    documents: [
      {
        name: "Certificate of Registration of Death",
        detail:
          "Issued by the local Register Office in the UK once the medical certificate of cause of death has been submitted. This is the legal death certificate.",
      },
      {
        name: "Coroner's Out of England Order, Form 104",
        detail:
          "Permission from HM Coroner to remove the body out of England and Wales. There is a statutory notice period, and no body leaves without it.",
      },
      {
        name: "Freedom from Infection Certificate",
        detail:
          "Signed by the attending doctor or the funeral director confirming the death was not from a notifiable infectious disease.",
      },
      {
        name: "Embalming Certificate",
        detail:
          "From the UK funeral director confirming the body was embalmed and naming the chemicals used. Compulsory for air transport.",
      },
      {
        name: "Coffin Sealing Certificate",
        detail:
          "Confirming the zinc lined coffin was sealed after embalming, in the presence of a witness.",
      },
      {
        name: "No Objection Certificate from the High Commission of India",
        detail:
          "Issued in London, Birmingham or Edinburgh. Requires the death certificate, the passport and the coroner's order.",
      },
      {
        name: "Cancelled Indian passport, or the OCI card",
        detail:
          "The passport of the person who has died is surrendered and cancelled, and travels with the coffin.",
      },
      {
        name: "Air Waybill",
        detail:
          "The cargo booking document issued by the airline once the coffin is accepted at the terminal.",
      },
    ],
    steps: [
      {
        title: "Register the death and check the coroner position",
        text: "The death is registered at the local Register Office. If the coroner has been involved, the Out of England order has to be applied for and there is a notice period before it is granted.",
      },
      {
        title: "Embalming and coffin",
        text: "The UK funeral director embalms the body and places it in a zinc lined coffin, which is sealed and witnessed. Certificates are issued for both.",
      },
      {
        title: "High Commission NOC",
        text: "The complete file goes to the Indian High Commission for the no objection certificate. The passport is surrendered and cancelled at the same time.",
      },
      {
        title: "Cargo booking",
        text: "We book the flight, usually Heathrow to Delhi or Mumbai on a direct service. The coffin reaches the cargo terminal about six hours before departure.",
      },
      {
        title: "Receiving in India",
        text: "We clear customs at the Indian airport, take charge of the coffin and move it by road to the home town, or straight to the cremation ground.",
      },
    ],
    sections: [
      {
        heading: "The coroner is what decides the timeline",
        body: [
          "If the death was expected and a doctor can certify the cause, the registration happens quickly and the whole repatriation can be done in about five days. If the coroner is involved, add two to five days, sometimes more where a post mortem is ordered.",
          "There is no way to speed this up and anybody who promises otherwise is not being straight with you. What we can do is have everything else ready so that the moment the coroner releases, the file moves the same day.",
        ],
      },
      {
        heading: "Cost, and who usually pays",
        body: [
          "Repatriation from the UK is expensive. The UK funeral director's charges, the embalming, the zinc lined coffin, the air freight on 150 to 250 kg and the Indian side handling all add up.",
          "Check three things before assuming the family bears it. Travel insurance frequently covers repatriation of remains and many people are unaware their policy includes it. Employers often cover it for staff who died while posted abroad. And where the person was a British citizen or settled resident, some local authorities have hardship provisions.",
        ],
        bullets: [
          "Travel and medical insurance policies very often include repatriation of remains",
          "Employer policies for overseas postings usually cover it in full",
          "The Indian High Commission can advise on assistance in genuine hardship cases",
          "We give a written breakdown so you can submit it to an insurer directly",
        ],
      },
      {
        heading: "What we handle on the Indian side",
        bullets: [
          "Customs clearance at the arrival airport",
          "Receiving the coffin and taking charge from the cargo terminal",
          "Road transfer to the home town anywhere in India, in a freezer ambulance",
          "Freezer box at the home so relatives can gather",
          "Cremation ground booking, pandit ji and the full antim sanskar arrangements",
          "Asthi visarjan at Haridwar, Garhmukteshwar or Prayagraj afterwards",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does repatriation from the UK take?",
        a: "Five to eight days in most cases. Where the coroner has ordered a post mortem it can run longer. The coroner's release is the step that controls everything else.",
      },
      {
        q: "Can the coffin be opened in India?",
        a: "The zinc lining is sealed and airlines require it to stay that way. It can be opened in India for the family to view before the cremation, and we arrange that properly rather than at the airport.",
      },
      {
        q: "Will insurance cover the cost?",
        a: "Very often, yes. Travel policies, medical policies and employer cover for overseas postings frequently include repatriation of remains. Check the policy before assuming the family has to pay, and we will provide an itemised invoice for the claim.",
      },
      {
        q: "Do you have people in the UK?",
        a: "We work with established funeral directors across the UK who handle the local side. Our own coordination, the High Commission file and everything on the Indian side is done by us directly.",
      },
      {
        q: "Can ashes be brought back instead?",
        a: "Yes, and it is far simpler and cheaper. Cremation in the UK followed by carrying the ashes to India needs only the cremation certificate and the death certificate. Many families choose this and perform the visarjan on the Ganga afterwards.",
      },
    ],
  },

  {
    slug: "india-to-uk",
    title: "Repatriation from India to the UK",
    navTitle: "India to UK",
    from: "India",
    to: "United Kingdom",
    direction: "outbound",
    timeline: "3 to 5 days from the date of death",
    airports: [
      "Delhi",
      "Mumbai",
      "Chennai",
      "Bengaluru",
      "Hyderabad",
      "Kochi",
      "Amritsar",
    ],
    metaTitle: "Repatriation from India to UK | Documents & Process",
    metaDescription:
      "Send mortal remains from India to the UK. Embalming, zinc lined coffin, municipal death certificate, High Commission clearance and cargo booking.",
    intro: [
      "This route is faster than the reverse, usually three to five days. India has no coroner referral system holding things up, and the British High Commission processes the paperwork efficiently.",
      "Most of these cases are British nationals or UK residents who died while visiting family in India. We handle it from any major Indian airport.",
    ],
    documents: [
      {
        name: "Municipal Death Certificate",
        detail:
          "Issued by the municipal corporation, not the hospital summary. This is the document the UK authorities will want, and it is often the slowest to obtain.",
      },
      {
        name: "Embalming Certificate",
        detail: "From a licensed Indian embalmer, naming the chemicals and the date.",
      },
      {
        name: "Coffin Sealing Certificate",
        detail: "Confirming the zinc lined coffin was sealed after embalming.",
      },
      {
        name: "Non Infectious Disease Certificate",
        detail:
          "From the treating hospital confirming the death was not caused by a notifiable infectious disease.",
      },
      {
        name: "Passport and visa pages",
        detail:
          "The passport of the person who has died, with the Indian visa or OCI card where applicable. Indian passports are surrendered and cancelled.",
      },
      {
        name: "No Objection Certificate",
        detail:
          "From the British High Commission in New Delhi or the Deputy High Commissions in Mumbai, Chennai, Kolkata, Bengaluru, Hyderabad or Ahmedabad.",
      },
      {
        name: "Police NOC",
        detail:
          "Required only where the death was unnatural, accidental or a medico legal case, along with the post mortem report.",
      },
      {
        name: "Consignee details in the UK",
        detail:
          "The name, address and contact of the UK funeral director who will receive the coffin. The airline needs this before it will book.",
      },
    ],
    steps: [
      {
        title: "Municipal death certificate",
        text: "This is the first priority and often the slowest step. We prepare the file and follow it through the municipal office rather than leaving the family to chase it.",
      },
      {
        title: "Embalming",
        text: "Carried out at a licensed facility, taking two to three hours, with the certificate issued the same day.",
      },
      {
        title: "Coffin and sealing",
        text: "The body is placed in a zinc lined coffin, sealed and packed in a wooden outer crate to the airline specification, and the sealing certificate is issued.",
      },
      {
        title: "High Commission clearance",
        text: "The file goes to the British High Commission for clearance. This normally takes a day.",
      },
      {
        title: "Cargo booking and departure",
        text: "We book the flight, file the customs export documents and deliver the coffin to the terminal. You get the air waybill number to track it.",
      },
      {
        title: "Receiving in the UK",
        text: "The nominated UK funeral director collects from the airport cargo terminal and takes it from there.",
      },
    ],
    sections: [
      {
        heading: "Appoint a UK funeral director early",
        body: [
          "The airline will not book cargo without a named consignee at the destination, so this needs to happen at the start rather than at the end. The family in the UK should appoint a funeral director on day one.",
          "That firm collects the coffin from the airport, holds the body, and arranges the funeral or cremation in the UK. If the family does not have one in mind, we can suggest firms in most UK cities that regularly handle Indian repatriations.",
        ],
      },
      {
        heading: "The municipal death certificate is the bottleneck",
        body: [
          "The hospital summary is not enough. The UK authorities want the certificate issued by the municipal corporation, and in most Indian cities that takes 7 to 21 days through the normal channel.",
          "There is an urgent route for repatriation cases and we use it. It usually brings the certificate down to two or three days. Getting this moving on day one is the single biggest thing that shortens the whole timeline.",
        ],
      },
      {
        heading: "Bringing ashes instead",
        body: [
          "Cremating in India and carrying the ashes to the UK is far simpler and costs a small fraction of a full repatriation. UK customs allow ashes in accompanied or unaccompanied baggage with the death certificate and the crematorium certificate.",
          "We arrange the cremation, the certificates and a proper sealed urn suitable for air travel. A good number of families choose this once they see the cost difference, and there is nothing improper about it.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take?",
        a: "Three to five days in most cases. The municipal death certificate is the step that decides it, and we use the urgent route for repatriation cases to bring it down to two or three days.",
      },
      {
        q: "Do we need a UK funeral director?",
        a: "Yes. The airline requires a named consignee before it will accept the cargo booking. Appoint one on the first day, and we can suggest firms that handle Indian repatriations regularly.",
      },
      {
        q: "What does it cost?",
        a: "Air freight is charged on the weight of the sealed coffin, typically 150 to 250 kg, plus embalming, coffin, documentation and handling. We break it into those parts in writing so it can be submitted to an insurer.",
      },
      {
        q: "Can the body be viewed in the UK?",
        a: "The coffin is sealed for the flight. The UK funeral director can open it on arrival for the family to view, and most do.",
      },
      {
        q: "Is it simpler to carry ashes?",
        a: "Considerably, and much cheaper. Cremation in India followed by carrying the ashes needs only the death certificate and the crematorium certificate. Many families choose this route.",
      },
    ],
  },

  {
    slug: "usa-to-india",
    title: "Dead Body Repatriation from the USA to India",
    navTitle: "USA to India",
    from: "United States",
    to: "India",
    direction: "inbound",
    timeline: "5 to 9 days from the date of death",
    airports: [
      "New York JFK",
      "Newark",
      "Chicago O'Hare",
      "San Francisco",
      "Dallas Fort Worth",
      "Atlanta",
      "Washington Dulles",
    ],
    metaTitle: "Repatriation from USA to India | Process & Documents",
    metaDescription:
      "Repatriation of mortal remains from the USA to India. Consular mortuary certificate, embalming, transit permit and cargo booking arranged.",
    intro: [
      "The American process is well defined but it runs state by state, and the requirements differ between them. A death in New Jersey and a death in California do not follow the same paperwork path, which is where families lose time.",
      "We coordinate with US funeral homes and the Indian consulates, and we receive at Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Kolkata, Amritsar and Kochi.",
    ],
    documents: [
      {
        name: "Certified US Death Certificate",
        detail:
          "Issued by the vital records office of the county or state where the death occurred. Order at least six certified copies, they will all be needed.",
      },
      {
        name: "Consular Mortuary Certificate",
        detail:
          "Issued by the Indian consulate with jurisdiction over that state. This is the central document for the transfer.",
      },
      {
        name: "Embalming Certificate",
        detail:
          "From the licensed US funeral director confirming the embalming and the chemicals used.",
      },
      {
        name: "Affidavit from the funeral director",
        detail:
          "A notarised statement confirming the casket contains only the remains of the named person and no other material.",
      },
      {
        name: "Non Contagious Disease Certificate",
        detail:
          "From the attending physician or the local health department, confirming the death was not from a communicable disease.",
      },
      {
        name: "Burial Transit Permit",
        detail:
          "Issued by the local health department or registrar, authorising the removal and transport of the remains.",
      },
      {
        name: "Cancelled Indian passport or OCI card",
        detail:
          "Surrendered to and cancelled by the consulate. It travels with the casket.",
      },
      {
        name: "Air Waybill",
        detail: "The airline cargo document, issued when the casket is accepted.",
      },
    ],
    steps: [
      {
        title: "Appoint a US funeral home",
        text: "Nothing can begin without one. The funeral home handles the embalming, the casket, the local permits and the delivery to the airport cargo terminal.",
      },
      {
        title: "Death certificate and permits",
        text: "The funeral home files for the certified death certificate and the burial transit permit with the county or state office.",
      },
      {
        title: "Embalming and casket",
        text: "The body is embalmed and placed in a hermetically sealed, zinc lined casket packed in an air tray or wooden crate.",
      },
      {
        title: "Indian consulate",
        text: "The complete file goes to the Indian consulate covering that state for the consular mortuary certificate. The passport is surrendered at the same time.",
      },
      {
        title: "Flight and arrival",
        text: "Cargo is booked on a direct or one stop service to India. We clear customs at arrival, take charge and move the casket onward by road.",
      },
    ],
    sections: [
      {
        heading: "Which consulate covers you",
        body: [
          "India has consulates in New York, Chicago, San Francisco, Houston and Atlanta, along with the Embassy in Washington DC. Each covers a defined group of states, and the file has to go to the right one. Sending it to the wrong consulate costs days.",
          "We identify the correct jurisdiction at the start and prepare the file to that consulate's requirements, which do vary slightly between them.",
        ],
        bullets: [
          "New York: the north eastern states",
          "Chicago: the midwest",
          "San Francisco: the west coast and the mountain states",
          "Houston: the south central states",
          "Atlanta: the south eastern states",
          "Washington DC embassy: Virginia, Maryland and the district",
        ],
      },
      {
        heading: "Cost and insurance",
        body: [
          "Repatriation from the US is the most expensive of the common routes, because US funeral home charges are high before the air freight is even counted.",
          "Check the insurance position before assuming the family pays. Many US health and life policies include repatriation. Employers routinely cover it for staff on assignment. University policies for international students almost always include it, and families are frequently unaware of that.",
        ],
      },
      {
        heading: "Cremating in the US instead",
        body: [
          "Cremation in the US and carrying the ashes to India costs a small fraction of a full repatriation and involves far less paperwork. The ashes travel with a family member in hand baggage with the cremation certificate and the death certificate.",
          "Many families choose this and then perform the asthi visarjan at Haridwar or Prayagraj, which we arrange. It is fully proper and increasingly common.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take from the US?",
        a: "Five to nine days. The certified death certificate and the consular mortuary certificate are the two steps that decide the timeline. Where a medical examiner is involved, add several days.",
      },
      {
        q: "Do we need a US funeral home?",
        a: "Yes, without exception. US law requires a licensed funeral director to handle the remains, the embalming, the permits and the airport delivery. We coordinate with them on your behalf.",
      },
      {
        q: "Will insurance cover it?",
        a: "Frequently. Health policies, life policies, employer cover for assignments and university policies for international students very often include repatriation of remains. Check before assuming the family bears the cost.",
      },
      {
        q: "Can we bring ashes instead?",
        a: "Yes, and it is far simpler and much cheaper. Ashes travel in hand baggage with the cremation and death certificates. We arrange the asthi visarjan on the Ganga once you reach India.",
      },
      {
        q: "Where can you receive the casket in India?",
        a: "Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Kolkata, Amritsar and Kochi. From there we move it by road anywhere in the country in a freezer ambulance.",
      },
    ],
  },

  {
    slug: "india-to-usa",
    title: "Repatriation from India to the USA",
    navTitle: "India to USA",
    from: "India",
    to: "United States",
    direction: "outbound",
    timeline: "4 to 6 days from the date of death",
    airports: [
      "Delhi",
      "Mumbai",
      "Chennai",
      "Bengaluru",
      "Hyderabad",
      "Kochi",
      "Ahmedabad",
    ],
    metaTitle: "Repatriation from India to USA | Documents & Timeline",
    metaDescription:
      "Send mortal remains from India to the USA. Embalming, zinc lined casket, death certificate, consular mortuary certificate and cargo booking.",
    intro: [
      "Most cases on this route are US citizens or green card holders who died while visiting family in India. The US Embassy in New Delhi and the consulates in Mumbai, Chennai, Kolkata and Hyderabad issue the consular mortuary certificate, and they are efficient about it.",
      "The timeline is usually four to six days, and as with the UK route the municipal death certificate is what sets the pace.",
    ],
    documents: [
      {
        name: "Municipal Death Certificate",
        detail:
          "From the municipal corporation, with an official English translation where the original is in a regional language.",
      },
      {
        name: "Embalming Certificate",
        detail: "From a licensed Indian embalmer, naming the chemicals and the date.",
      },
      {
        name: "Coffin Sealing Certificate",
        detail: "Confirming the zinc lined casket was sealed after embalming.",
      },
      {
        name: "Non Infectious Disease Certificate",
        detail:
          "From the treating hospital, confirming the death was not from a communicable disease.",
      },
      {
        name: "Consular Mortuary Certificate",
        detail:
          "Issued by the US Embassy in New Delhi or the consulates in Mumbai, Chennai, Kolkata or Hyderabad. This is the key document for US entry.",
      },
      {
        name: "US passport or green card",
        detail:
          "Of the person who has died. The US authorities will require it and it is cancelled by the consulate.",
      },
      {
        name: "Police NOC and post mortem report",
        detail:
          "Only where the death was unnatural, accidental or a medico legal case.",
      },
      {
        name: "US funeral home consignee details",
        detail:
          "Name, address and contact of the receiving funeral home. Required before the cargo booking can be made.",
      },
    ],
    steps: [
      {
        title: "Report the death to the US Embassy",
        text: "The death of a US citizen abroad is reported to the Embassy or the nearest consulate, which begins the consular record and issues the Consular Report of Death Abroad in due course.",
      },
      {
        title: "Municipal death certificate",
        text: "Applied for immediately through the urgent route for repatriation. This is the slowest step and the one we push hardest on.",
      },
      {
        title: "Embalming and casket",
        text: "Embalming at a licensed facility, then a hermetically sealed zinc lined casket packed to the airline specification.",
      },
      {
        title: "Consular mortuary certificate",
        text: "The complete file goes to the Embassy or consulate. Normally issued within a day of a complete submission.",
      },
      {
        title: "Cargo booking and departure",
        text: "Flight booked, customs export documents filed, casket delivered to the terminal. We send you the air waybill number.",
      },
      {
        title: "Receiving in the US",
        text: "The nominated US funeral home clears it at the arrival airport and takes it from there.",
      },
    ],
    sections: [
      {
        heading: "The Consular Report of Death Abroad",
        body: [
          "This is a separate document from the Indian death certificate and it matters afterwards. US banks, insurers, the Social Security Administration and probate courts want the Consular Report of Death Abroad rather than a foreign certificate.",
          "It is issued by the Embassy after the death is reported, and it takes a few weeks. Start the process while the repatriation is being arranged rather than after the family returns to the US.",
        ],
      },
      {
        heading: "Appoint the US funeral home first",
        body: [
          "As on the UK route, the airline needs a named consignee before it will accept the booking. The family in the US should appoint a funeral home on the first day.",
          "That firm receives the casket, holds the remains and arranges the funeral or burial. If they have not handled an Indian repatriation before, we speak to them directly and tell them what to expect.",
        ],
      },
      {
        heading: "Translation of documents",
        body: [
          "Where the death certificate or the hospital records are in Hindi, Tamil, Bengali or another regional language, the US authorities need a certified English translation attached.",
          "We arrange the translation and the attestation as part of the file. It is a small thing that holds up cases surprisingly often when families try to do this themselves.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take?",
        a: "Four to six days in most cases. The municipal death certificate is the slowest step, and we use the urgent repatriation route to shorten it.",
      },
      {
        q: "What is the Consular Report of Death Abroad?",
        a: "The US document recording the death of a citizen overseas. US banks, insurers, Social Security and probate courts want this rather than the Indian certificate. Apply early, it takes a few weeks.",
      },
      {
        q: "Do we need a US funeral home?",
        a: "Yes. The airline requires a named consignee before booking, and the funeral home clears the casket at the US airport. Appoint one on day one.",
      },
      {
        q: "Can ashes be carried instead?",
        a: "Yes, and it is much simpler. Cremation in India and carrying the ashes needs only the death certificate and the crematorium certificate. US customs allow ashes in accompanied baggage in a sealed, scannable urn.",
      },
      {
        q: "Which Indian airports can you send from?",
        a: "Delhi, Mumbai, Chennai, Bengaluru, Hyderabad, Kochi and Ahmedabad. If the death was elsewhere we move the body to the nearest of these by road.",
      },
    ],
  },
];

export const routeMap = new Map(repatriationRoutes.map((r) => [r.slug, r]));

export function getRoute(slug: string) {
  return routeMap.get(slug);
}
