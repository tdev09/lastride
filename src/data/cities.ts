import type { City } from "./types";

export const cities: City[] = [
  /* ============================== DELHI NCR ============================== */
  {
    slug: "delhi",
    name: "Delhi",
    state: "Delhi",
    region: "Delhi NCR",
    featured: true,
    responseTime: "30 to 45 minutes across most of the city",
    metaTitle: "Funeral & Cremation Services in Delhi | 24x7 Helpline",
    metaDescription:
      "Funeral services in Delhi with cremation booking at Nigambodh Ghat, Lodhi Road, Punjabi Bagh and Dwarka. Freezer box, hearse van, pandit ji and samagri.",
    intro: [
      "Delhi has more than forty registered cremation grounds and they do not all work the same way. Some take CNG only, some have a wood platform, a few close their gates strictly at sunset. Choosing the wrong one costs a family several hours on the worst day of their lives.",
      "Our office is in Raghubir Nagar and our vehicles are positioned across the city, north to south. When you call we tell you which ground has a slot, how long the drive is, and what the paperwork will need. Then we arrange all of it.",
    ],
    facilities: [
      {
        name: "Nigambodh Ghat",
        area: "Kashmere Gate, on the Yamuna",
        note: "The largest and oldest ground in the city. CNG platforms and a wide wood pyre area. Registration counter is open through the day and it rarely turns a family away.",
      },
      {
        name: "Lodhi Road Cremation Ground",
        area: "Lodhi Road, central Delhi",
        note: "Electric and CNG. Quiet, well maintained and the usual choice for families in south and central Delhi. Slots fill quickly in the afternoon.",
      },
      {
        name: "Punjabi Bagh Shamshan Ghat",
        area: "West Delhi",
        note: "CNG and wood, with covered seating for the family. The main ground for west Delhi and it handles a heavy daily load.",
      },
      {
        name: "Green Park Cremation Ground",
        area: "Green Park, south Delhi",
        note: "Smaller and calmer than the big grounds. Preferred by families in Hauz Khas, Safdarjung and the surrounding colonies.",
      },
      {
        name: "Cremation Ground Sector 24 Dwarka",
        area: "Dwarka, south west Delhi",
        note: "Modern facility with CNG and wood platforms, good parking and a prayer hall on the premises.",
      },
      {
        name: "Moksh Dham Kalkaji",
        area: "Kalkaji, south east Delhi",
        note: "Serves Kalkaji, Govindpuri, Nehru Place and the Greater Kailash colonies. CNG and wood both available.",
      },
    ],
    areas: [
      "Raghubir Nagar",
      "Rajouri Garden",
      "Janakpuri",
      "Dwarka",
      "Rohini",
      "Pitampura",
      "Model Town",
      "Karol Bagh",
      "Paharganj",
      "Connaught Place",
      "Lajpat Nagar",
      "Greater Kailash",
      "Saket",
      "Vasant Kunj",
      "Mayur Vihar",
      "Preet Vihar",
      "Shahdara",
      "Narela",
    ],
    localNotes: [
      {
        heading: "Getting the death certificate in Delhi",
        body: [
          "The hospital gives you a death summary, not the legal death certificate. The legal one comes from the MCD, the NDMC or the Delhi Cantonment Board depending on where the death took place, and you will need it for bank accounts, insurance and property transfer.",
          "Apply on the e-District Delhi portal within 21 days and there is no late fee. The crematorium receipt is one of the supporting documents, so keep it safe rather than leaving it in the car.",
        ],
        bullets: [
          "Apply within 21 days on edistrict.delhigovt.nic.in with no penalty",
          "You need the hospital death summary, the cremation receipt and the ID proofs",
          "Certificates are usually issued in 7 to 21 days by zone",
          "Order at least six copies, because every bank and insurer wants an original",
        ],
      },
      {
        heading: "Traffic and timing",
        body: [
          "A cremation slot booked for 2 pm means being at the gate by 1.15 pm, and in Delhi that decision has to account for the traffic. Crossing from Dwarka to Kashmere Gate in the evening peak takes well over an hour.",
          "We plan the departure backwards from the slot and pick a ground that does not need the family to cross the city. If you are in Rohini we will not send you to Green Park.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which cremation ground is best in Delhi?",
        a: "The nearest one that has a slot. Nigambodh Ghat is the largest and almost never full. Lodhi Road is calmer but books up. Tell us your area and we will name the right one instead of sending you across the city.",
      },
      {
        q: "How much does cremation cost in Delhi?",
        a: "The ground charges a modest registration fee. The real variable is the pyre. CNG is inexpensive, a full wood pyre needs 300 to 400 kg of timber and costs considerably more. We give you the total before booking.",
      },
      {
        q: "Can you reach anywhere in Delhi within an hour?",
        a: "In almost every case yes, and usually within 30 to 45 minutes. Outer areas like Narela and Bawana take a little longer and we will tell you honestly when you call.",
      },
      {
        q: "Do I need a police NOC?",
        a: "Only if the death was unnatural, accidental, a suicide or under investigation. A natural death at home or in hospital does not need one. If a post mortem was done, carry the report.",
      },
    ],
    nearby: ["gurugram", "noida", "faridabad", "ghaziabad"],
  },

  {
    slug: "gurugram",
    name: "Gurugram",
    state: "Haryana",
    region: "Delhi NCR",
    featured: true,
    responseTime: "30 to 40 minutes across the sectors and Old Gurugram",
    metaTitle: "Funeral & Cremation Services in Gurugram | 24x7 Support",
    metaDescription:
      "Funeral and cremation services in Gurugram. Freezer box delivery, hearse van, cremation booking at Sector 10 and Wazirabad grounds, pandit ji and samagri.",
    intro: [
      "Gurugram has a particular problem. A large part of the city moved here for work, the extended family is somewhere else, and when a death happens there is nobody nearby who knows how any of this is done.",
      "That is most of our work here. We have an office in Sector 57 and we handle the whole sequence for families who have never had to arrange a funeral in this city before.",
    ],
    facilities: [
      {
        name: "Sector 10A Cremation Ground",
        area: "Sector 10A",
        note: "The main municipal ground for the newer sectors. CNG and wood, with reasonable parking and covered seating.",
      },
      {
        name: "Wazirabad Shamshan Bhoomi",
        area: "Sector 52, near Wazirabad village",
        note: "Serves Golf Course Road, Sushant Lok and the surrounding sectors. Wood pyre platforms with a small prayer area.",
      },
      {
        name: "Bhondsi Cremation Ground",
        area: "Bhondsi, Sohna Road",
        note: "Used by families along Sohna Road and southern Gurugram. Quieter and rarely crowded.",
      },
      {
        name: "Jharsa Shamshan Ghat",
        area: "Jharsa village, near Sector 39",
        note: "An older village ground still used by long settled Gurugram families, wood pyre only.",
      },
    ],
    areas: [
      "DLF Phase 1 to 5",
      "Sushant Lok",
      "Golf Course Road",
      "Sohna Road",
      "Sector 56 to 57",
      "Sector 14 and 15",
      "Palam Vihar",
      "New Gurugram Sectors 80 to 95",
      "Manesar",
      "Old Gurugram",
      "MG Road",
      "Udyog Vihar",
    ],
    localNotes: [
      {
        heading: "Condominium and society arrangements",
        body: [
          "A large share of Gurugram lives in high rise condominiums, and that changes the practical detail. Stretchers do not always fit in a passenger lift, so the service lift has to be arranged with the facility manager. Some societies want a written intimation before a freezer box comes in.",
          "Our staff deal with this constantly. Tell us the tower and the floor when you call and we will send enough people and speak to the facility desk ourselves.",
        ],
        bullets: [
          "Service lift access arranged with the facility manager before arrival",
          "Freezer box carried up by four staff where the lift will not take a stretcher",
          "RWA intimation handled by our coordinator where a society asks for it",
          "Parking for the hearse van organised at the tower entrance",
        ],
      },
      {
        heading: "Registration with the Municipal Corporation",
        body: [
          "The death certificate in Gurugram is issued by the Municipal Corporation of Gurugram, and the application goes through the Haryana e-Disha or the Saral portal. Register within 21 days to avoid the late fee.",
          "For a death in one of the private hospitals along Golf Course Road or Sohna Road, the hospital usually files the initial registration itself. Ask them for the registration number, since it makes the certificate application much faster.",
        ],
      },
    ],
    faqs: [
      {
        q: "How fast can you reach a Gurugram condominium?",
        a: "Thirty to forty minutes for most sectors from our Sector 57 office. Manesar and the newer sectors past 95 take a little longer.",
      },
      {
        q: "Can the cremation happen in Delhi instead?",
        a: "Yes, and many Gurugram families prefer Delhi grounds where the wider family lives there. Moving a body from Haryana to Delhi needs no permit. We handle the transport and the booking.",
      },
      {
        q: "Will a freezer box fit in a flat?",
        a: "Yes. It needs about 7 feet by 3 feet of floor space and a 15 amp point. The main question is lift access, so tell us the floor when you book.",
      },
      {
        q: "Where do I get the death certificate?",
        a: "From the Municipal Corporation of Gurugram, applied through the Haryana Saral or e-Disha portal. We prepare the file and walk you through the submission.",
      },
    ],
    nearby: ["delhi", "faridabad", "noida", "ghaziabad"],
  },

  {
    slug: "noida",
    name: "Noida",
    state: "Uttar Pradesh",
    region: "Delhi NCR",
    featured: true,
    responseTime: "30 to 40 minutes across Noida and Greater Noida",
    metaTitle: "Funeral & Cremation Services in Noida | Antim Nivas",
    metaDescription:
      "Funeral services in Noida and Greater Noida. Cremation booking at Antim Nivas Sector 94, freezer box delivery, hearse van, pandit ji and samagri.",
    intro: [
      "Antim Nivas in Sector 94 handles most of Noida's cremations and it is a genuinely well run facility, which is not something you can say about every ground in NCR. Electric, CNG and wood are all available and the registration process is orderly.",
      "We have an office in Sector 62 and cover Noida, Greater Noida and the Yamuna Expressway sectors. Freezer box delivery here is usually under an hour.",
    ],
    facilities: [
      {
        name: "Antim Nivas, Sector 94",
        area: "Sector 94, near the DND and Kalindi Kunj approach",
        note: "Noida's principal cremation ground. Electric, CNG and wood platforms, a prayer hall, clean waiting areas and organised registration. The default choice for most of the city.",
      },
      {
        name: "Sector 118 Cremation Ground",
        area: "Sector 118",
        note: "Serves the sectors along the Noida Extension side. Wood pyre platforms, less crowded than Sector 94.",
      },
      {
        name: "Hindon Shamshan Ghat",
        area: "On the Hindon river, near Sector 63",
        note: "An older riverside ground used by families in the industrial sectors and the nearby villages. Wood pyre only.",
      },
      {
        name: "Greater Noida Cremation Ground",
        area: "Near Surajpur, Greater Noida",
        note: "Covers Greater Noida, Pari Chowk and the Alpha and Beta sectors. Wood and CNG platforms.",
      },
    ],
    areas: [
      "Sector 15 to 30",
      "Sector 44 to 51",
      "Sector 62 and 63",
      "Sector 76 to 79",
      "Sector 93 to 100",
      "Sector 110 to 128",
      "Noida Extension",
      "Greater Noida West",
      "Pari Chowk",
      "Alpha and Beta sectors",
      "Jewar and Yamuna Expressway",
      "Dadri",
    ],
    localNotes: [
      {
        heading: "Why Sector 94 is usually the right choice",
        body: [
          "Antim Nivas gives you three options on one site, which matters when a family is still deciding between wood and CNG when they arrive. The prayer hall on the premises also means the immediate gathering can happen there instead of arranging a separate venue.",
          "It is close to the DND and the Kalindi Kunj road, so families coming from Delhi reach it quickly. For anybody in south Delhi it is often faster than a Delhi ground.",
        ],
      },
      {
        heading: "Death registration in Noida",
        body: [
          "Registration is with the Noida Authority or the Nagar Palika depending on the sector, and the application goes through the Uttar Pradesh e-Nagar Sewa portal. The 21 day window applies here as well.",
          "Greater Noida falls under a separate authority, so make sure the application goes to the right one. We check this before you file, since a misdirected application means starting again.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Antim Nivas open at night?",
        a: "Registration closes around sunset, as at most grounds. If you reach us in the evening we will tell you honestly whether the cremation is possible that night, and arrange a freezer box for the wait if it is not.",
      },
      {
        q: "How quickly can a freezer box reach Greater Noida?",
        a: "Usually within an hour. Greater Noida West and the Extension sectors are covered from the same stock as Noida.",
      },
      {
        q: "Can we cremate in Delhi if we live in Noida?",
        a: "Yes. There is no restriction on moving a body from UP to Delhi and many families do it when relatives are based there. We arrange the transport and book the Delhi ground.",
      },
      {
        q: "Do you cover the Yamuna Expressway sectors?",
        a: "Yes, including Jewar and the villages along the expressway. Response time is longer, closer to 90 minutes, and we will say so when you call.",
      },
    ],
    nearby: ["delhi", "ghaziabad", "gurugram", "faridabad"],
  },

  {
    slug: "faridabad",
    name: "Faridabad",
    state: "Haryana",
    region: "Delhi NCR",
    responseTime: "35 to 50 minutes across Old and New Faridabad",
    metaTitle: "Funeral & Cremation Services in Faridabad | 24x7 Helpline",
    metaDescription:
      "Funeral and cremation services in Faridabad. Cremation ground booking, freezer box on rent, hearse van, pandit ji and complete samagri.",
    intro: [
      "Faridabad splits into Old Faridabad, the NIT sectors and the newer Greater Faridabad stretch along the bypass, and the practical arrangements differ across the three. The older parts have long established village grounds. Greater Faridabad has newer municipal facilities.",
      "We cover all of it from our Delhi and Gurugram bases, along with Ballabgarh and the industrial sectors.",
    ],
    facilities: [
      {
        name: "Sector 15 Cremation Ground",
        area: "Sector 15, New Faridabad",
        note: "The main municipal ground for the newer sectors. Wood platforms with a CNG unit, covered seating and parking.",
      },
      {
        name: "Ajronda Shamshan Ghat",
        area: "Ajronda, near the Mathura Road",
        note: "Long established ground serving the NIT sectors and central Faridabad. Wood pyre platforms.",
      },
      {
        name: "Ballabgarh Cremation Ground",
        area: "Ballabgarh",
        note: "Covers Ballabgarh, Sector 62 to 65 and the southern industrial belt.",
      },
      {
        name: "Badkhal Shamshan Bhoomi",
        area: "Near Badkhal Lake",
        note: "Used by families in Sector 21, Badkhal and the surrounding colonies.",
      },
    ],
    areas: [
      "NIT Sectors 1 to 5",
      "Old Faridabad",
      "Sector 15 and 16",
      "Sector 21 A to D",
      "Greater Faridabad Sectors 75 to 89",
      "Ballabgarh",
      "Sector 62 to 65",
      "Surajkund",
      "Badkhal",
      "Neharpar",
    ],
    localNotes: [
      {
        heading: "Reaching the Delhi grounds from Faridabad",
        body: [
          "Many Faridabad families have roots in south Delhi and want the cremation at Green Park, Lodhi Road or Kalkaji. That is an easy run up Mathura Road outside peak hours and a slow one during it.",
          "If the slot is in the afternoon, we plan to leave early rather than risk the Badarpur bottleneck. Tell us at booking and we will build the timing around it.",
        ],
      },
      {
        heading: "Death registration",
        body: [
          "The Municipal Corporation of Faridabad issues the certificate, applied through the Haryana Saral portal. Registration within 21 days avoids the late fee. Hospitals in the sector 16 and sector 21 belt normally file the initial registration themselves, so ask them for the number.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a vehicle take to reach Faridabad?",
        a: "Thirty five to fifty minutes for most sectors. Greater Faridabad and Ballabgarh sit at the longer end of that.",
      },
      {
        q: "Can we take the body to Delhi for cremation?",
        a: "Yes, it is common and needs no permit. We arrange the transport and book the Delhi ground for you.",
      },
      {
        q: "Do you deliver freezer boxes in Faridabad?",
        a: "Yes, usually within 60 to 90 minutes, including Greater Faridabad and Ballabgarh.",
      },
    ],
    nearby: ["delhi", "gurugram", "noida", "ghaziabad"],
  },

  {
    slug: "ghaziabad",
    name: "Ghaziabad",
    state: "Uttar Pradesh",
    region: "Delhi NCR",
    responseTime: "35 to 50 minutes across Ghaziabad and Indirapuram",
    metaTitle: "Funeral & Cremation Services in Ghaziabad | Hindon Ghat",
    metaDescription:
      "Funeral services in Ghaziabad, Indirapuram, Vaishali and Raj Nagar. Cremation booking at Hindon Shamshan Ghat, freezer box, hearse van, pandit ji and samagri.",
    intro: [
      "Ghaziabad's main cremation ground sits on the Hindon river and has served the city for generations. The newer townships at Indirapuram, Vasundhara and Raj Nagar Extension mostly use it too, along with the smaller sector grounds.",
      "We cover the whole district including Modinagar and Loni, working from our Noida and Delhi bases.",
    ],
    facilities: [
      {
        name: "Hindon Shamshan Ghat",
        area: "On the Hindon river, near the Ghaziabad city side",
        note: "The principal ground for the district. Wood pyre platforms along the river with a CNG unit added in recent years. Busy through the day.",
      },
      {
        name: "Raj Nagar Cremation Ground",
        area: "Raj Nagar",
        note: "Serves Raj Nagar, Raj Nagar Extension and the northern colonies. Wood platforms with covered seating.",
      },
      {
        name: "Indirapuram Shamshan Ghat",
        area: "Near Indirapuram, on the Hindon side",
        note: "The nearest ground for Indirapuram, Vaishali and Vasundhara families. Reasonable parking.",
      },
      {
        name: "Kaila Bhatta Cremation Ground",
        area: "Kaila Bhatta, old Ghaziabad",
        note: "An older ground used by families in the walled city and the surrounding mohallas.",
      },
    ],
    areas: [
      "Indirapuram",
      "Vaishali",
      "Vasundhara",
      "Kaushambi",
      "Raj Nagar",
      "Raj Nagar Extension",
      "Crossings Republik",
      "Sahibabad",
      "Modinagar",
      "Loni",
      "Govindpuram",
      "Nehru Nagar",
    ],
    localNotes: [
      {
        heading: "Indirapuram and Vaishali are effectively Delhi NCR",
        body: [
          "Families in Indirapuram, Vaishali and Kaushambi are usually closer to east Delhi than to Ghaziabad city, and many prefer a Delhi ground. Nigambodh Ghat is a straightforward run across the Yamuna and is often faster than getting to the Hindon ghat in traffic.",
          "We will tell you which is actually quicker on the day rather than assuming the local ground is the right answer.",
        ],
      },
      {
        heading: "Death registration in Ghaziabad",
        body: [
          "Registration is with the Ghaziabad Nagar Nigam through the Uttar Pradesh e-Nagar Sewa portal, within 21 days. Modinagar and Loni fall under their own municipal bodies, so check which one applies before filing.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the Hindon ghat open through the day?",
        a: "Yes, though registration stops around sunset like most grounds. It gets busy in the late morning, so an early slot is easier.",
      },
      {
        q: "Do you cover Modinagar and Loni?",
        a: "Yes. Response time is longer, usually 60 to 90 minutes, and we will give you the honest figure when you call.",
      },
      {
        q: "Can Indirapuram families cremate in Delhi?",
        a: "Yes, and many do. There is no permit needed to cross from UP into Delhi. We book the ground and arrange the transport.",
      },
    ],
    nearby: ["noida", "delhi", "faridabad", "gurugram"],
  },

  /* ============================== MAHARASHTRA ============================== */
  {
    slug: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    region: "Maharashtra",
    featured: true,
    responseTime: "45 to 75 minutes depending on the line and the traffic",
    metaTitle: "Funeral & Cremation Services in Mumbai | 24x7 Helpline",
    metaDescription:
      "Funeral services in Mumbai. Cremation at Chandanwadi, Worli, Shivaji Park and Oshiwara, freezer box delivery, hearse van, pandit ji and complete samagri.",
    intro: [
      "Mumbai runs its cremations differently from the north. The BMC maintains the grounds, most of the central ones use electric or gas furnaces because of the space constraint, and the whole process is more regulated and faster than in Delhi.",
      "The difficulty in Mumbai is not the ground. It is getting there. A body moving from Andheri to Chandanwadi at 6 pm is a two hour job, and the flat itself is often a fourth floor walk up in a building with a lift that will not take a stretcher.",
    ],
    facilities: [
      {
        name: "Chandanwadi Crematorium",
        area: "Marine Lines, south Mumbai",
        note: "The best known ground in the city. Electric and gas furnaces plus a traditional wood facility. Well organised and it handles a heavy load.",
      },
      {
        name: "Shivaji Park Hindu Smashan Bhumi",
        area: "Dadar",
        note: "The ground most associated with Mumbai's public funerals. Electric and wood, with a large open area for gatherings.",
      },
      {
        name: "Worli Hindu Crematorium",
        area: "Worli",
        note: "Serves Worli, Prabhadevi and Lower Parel. Electric furnaces with a wood section.",
      },
      {
        name: "Oshiwara Crematorium",
        area: "Andheri West",
        note: "The main facility for the western suburbs. Electric and gas, with good access from the Link Road.",
      },
      {
        name: "Bhoiwada Crematorium",
        area: "Parel",
        note: "Central Mumbai ground serving Parel, Dadar East and Sewri. Electric and wood platforms.",
      },
    ],
    areas: [
      "Colaba and Fort",
      "Marine Lines and Girgaon",
      "Worli and Prabhadevi",
      "Dadar and Matunga",
      "Bandra and Khar",
      "Andheri East and West",
      "Goregaon and Malad",
      "Borivali and Kandivali",
      "Powai and Chandivali",
      "Chembur and Ghatkopar",
      "Mulund and Bhandup",
      "Navi Mumbai",
      "Thane",
    ],
    localNotes: [
      {
        heading: "The building problem",
        body: [
          "Old Mumbai buildings were not designed for a stretcher. Lifts are narrow, staircases turn sharply, and chawl corridors are too tight for a freezer box on wheels. This is the single most common practical issue we deal with in this city.",
          "Our staff carry rather than wheel where they have to, and we send four people instead of two when the address suggests it. Tell us the building type and the floor when you call and we will plan for it rather than discovering it on arrival.",
        ],
        bullets: [
          "Four staff sent by default for walk up buildings above the second floor",
          "Compact freezer boxes available for flats where the standard unit will not fit through the door",
          "Chawl and older building access handled without needing the family to arrange anything",
          "Society permission for a freezer box coordinated by our team",
        ],
      },
      {
        heading: "Electric and gas rather than wood",
        body: [
          "Most Mumbai grounds push families towards electric or gas because of space and air quality rules. Wood is still available at Chandanwadi, Shivaji Park and a few others, but it takes longer and needs to be booked earlier in the day.",
          "If the family specifically wants a wood pyre, say so when you call and we will book a ground that has one free rather than assuming electric is acceptable.",
        ],
      },
    ],
    faqs: [
      {
        q: "How fast can you reach a Mumbai address?",
        a: "Forty five to seventy five minutes depending on the line and the hour. The western suburbs and the island city are covered from separate points, so we dispatch from whichever is closer.",
      },
      {
        q: "Is wood cremation available in Mumbai?",
        a: "Yes, at Chandanwadi, Shivaji Park and a few other grounds, though most of the city uses electric or gas. Wood needs to be booked earlier in the day because it takes four to six hours.",
      },
      {
        q: "Will a freezer box fit in an old building?",
        a: "We keep compact units for exactly this. Tell us the building and the floor when you book and we will send the right box and enough staff to carry it up.",
      },
      {
        q: "Do you cover Thane and Navi Mumbai?",
        a: "Yes, both, including Kalyan, Dombivli and Panvel. Response time is similar to the far suburbs.",
      },
    ],
    nearby: ["pune", "nagpur", "surat", "bengaluru"],
  },

  {
    slug: "pune",
    name: "Pune",
    state: "Maharashtra",
    region: "Maharashtra",
    responseTime: "45 to 60 minutes across the city and the PCMC belt",
    metaTitle: "Funeral & Cremation Services in Pune | Vaikunth Ghat",
    metaDescription:
      "Funeral services in Pune and Pimpri Chinchwad. Cremation booking at Vaikunth and Kailas Smashan Bhumi, freezer box on rent, hearse van, pandit ji and samagri.",
    intro: [
      "Vaikunth Smashan Bhumi in Navi Peth handles the largest share of Pune's cremations and is well equipped, with electric, gas and wood all on one site. Kailas at Yerwada serves the eastern side.",
      "Pune has spread a long way in twenty years, and families in Hinjewadi, Wakad or Kharadi are often a long way from any of the older grounds. We plan the route and the timing around that.",
    ],
    facilities: [
      {
        name: "Vaikunth Smashan Bhumi",
        area: "Navi Peth, central Pune",
        note: "The main ground for the city. Electric, gas and wood platforms with an organised registration process and covered waiting areas.",
      },
      {
        name: "Kailas Smashan Bhumi",
        area: "Yerwada",
        note: "Serves Yerwada, Vishrantwadi, Kalyani Nagar and the eastern suburbs. Electric and wood.",
      },
      {
        name: "Baner Cremation Ground",
        area: "Baner",
        note: "The nearest facility for Baner, Aundh, Balewadi and Pashan families.",
      },
      {
        name: "Chinchwad Smashan Bhumi",
        area: "Chinchwad, PCMC",
        note: "The principal ground for the Pimpri Chinchwad belt including Wakad, Ravet and Nigdi.",
      },
    ],
    areas: [
      "Kothrud",
      "Deccan and Shivajinagar",
      "Camp and Koregaon Park",
      "Kalyani Nagar and Viman Nagar",
      "Kharadi and Wagholi",
      "Hadapsar and Magarpatta",
      "Baner and Aundh",
      "Hinjewadi and Wakad",
      "Pimpri Chinchwad",
      "Katraj and Dhankawadi",
      "Warje and Bavdhan",
    ],
    localNotes: [
      {
        heading: "IT corridor families",
        body: [
          "A very large part of Hinjewadi, Kharadi and Magarpatta is people working away from their home state, with parents visiting or living with them. When a death happens the family is often planning to take the body back to Karnataka, Kerala, UP or Bengal.",
          "That is a road or air transfer, not a local cremation, and it needs embalming plus documentation. Call us early in that situation because the timing depends on paperwork more than distance.",
        ],
      },
      {
        heading: "Death registration",
        body: [
          "The Pune Municipal Corporation issues the certificate, with the PCMC handling Pimpri Chinchwad separately. Applications go through the respective corporation portals, within 21 days.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which is the main cremation ground in Pune?",
        a: "Vaikunth at Navi Peth, which offers electric, gas and wood on the same site. Kailas at Yerwada is the usual choice for the eastern side of the city.",
      },
      {
        q: "Do you cover Pimpri Chinchwad?",
        a: "Yes, the full PCMC belt including Wakad, Ravet, Nigdi and Bhosari.",
      },
      {
        q: "Can you take a body from Pune to another state?",
        a: "Yes, by road or by air cargo from Pune airport. For anything over about twelve hours we embalm first. Tell us the destination and we will advise which is faster.",
      },
    ],
    nearby: ["mumbai", "nagpur", "bengaluru", "surat"],
  },

  {
    slug: "nagpur",
    name: "Nagpur",
    state: "Maharashtra",
    region: "Maharashtra",
    responseTime: "45 to 60 minutes across the city",
    metaTitle: "Funeral & Cremation Services in Nagpur | Ambazari Ghat",
    metaDescription:
      "Funeral services in Nagpur. Cremation at Ambazari Ghat and Mokshadham, freezer box on rent, hearse van, pandit ji, samagri and interstate transport.",
    intro: [
      "Nagpur sits at the centre of the country and that shapes a lot of our work here. Bodies pass through on the way somewhere else, and families in Nagpur frequently need transport to Chhattisgarh, Madhya Pradesh or Telangana.",
      "Locally, Ambazari Ghat and Mokshadham at Manewada handle most cremations. Both have wood and electric facilities.",
    ],
    facilities: [
      {
        name: "Ambazari Ghat",
        area: "Near Ambazari Lake",
        note: "One of the city's principal grounds, with electric and wood facilities and a large open area.",
      },
      {
        name: "Mokshadham Ghat",
        area: "Manewada",
        note: "Modern facility serving south Nagpur. Electric and gas furnaces along with wood platforms.",
      },
      {
        name: "Gangabai Ghat",
        area: "Near the old city",
        note: "A long established ground used by families in the central and northern parts of the city.",
      },
      {
        name: "Sahakar Nagar Ghat",
        area: "Sahakar Nagar",
        note: "Serves the surrounding residential colonies, wood platforms with covered seating.",
      },
    ],
    areas: [
      "Dharampeth",
      "Civil Lines",
      "Sadar",
      "Sitabuldi",
      "Manewada",
      "Wardha Road",
      "Hingna",
      "Kamptee Road",
      "Besa and Beltarodi",
      "Koradi Road",
    ],
    localNotes: [
      {
        heading: "The central India transit point",
        body: [
          "Nagpur is roughly equidistant from Delhi, Mumbai, Hyderabad and Kolkata, and it is often the natural handover point for a long road transfer. We run vehicles through here regularly and can pick up or hand over a body mid route.",
          "The airport also takes cargo on most major domestic routes, which makes it a practical alternative to a twenty hour drive.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you transport a body from Nagpur to another state?",
        a: "Yes, regularly. Chhattisgarh, Madhya Pradesh, Telangana and Maharashtra destinations are all straightforward by road. For longer distances air cargo from Nagpur airport is usually faster.",
      },
      {
        q: "Is electric cremation available?",
        a: "Yes, at Ambazari and Mokshadham. Wood platforms are available at all the main grounds.",
      },
      {
        q: "How quickly can a freezer box reach me?",
        a: "Usually within 90 minutes anywhere in the city.",
      },
    ],
    nearby: ["pune", "mumbai", "bhopal", "hyderabad"],
  },

  /* ============================== PUNJAB / HARYANA ============================== */
  {
    slug: "chandigarh",
    name: "Chandigarh",
    state: "Chandigarh",
    region: "Punjab & Haryana",
    responseTime: "40 to 60 minutes across the tricity",
    metaTitle: "Funeral & Cremation Services in Chandigarh | Sector 25",
    metaDescription:
      "Funeral services in Chandigarh and the tricity. Cremation booking at the Sector 25 ground, freezer box on rent, hearse van, granthi and pandit ji arranged.",
    intro: [
      "Chandigarh, Mohali, Panchkula and Zirakpur function as one city for practical purposes, and families move freely between them. The Sector 25 ground is the main facility and takes families from all four.",
      "A large share of our work here is Sikh families, which means a granthi, the antim ardaas and the sehaj paath rather than a pandit and a havan. We arrange both according to what the family follows.",
    ],
    facilities: [
      {
        name: "Sector 25 Cremation Ground",
        area: "Sector 25, Chandigarh",
        note: "The city's principal ground. Electric and wood platforms, well maintained, with organised parking and a covered gathering area.",
      },
      {
        name: "Manimajra Cremation Ground",
        area: "Manimajra",
        note: "Serves Manimajra, the Panchkula side and the eastern colonies. Wood pyre platforms.",
      },
      {
        name: "Sector 42 Cremation Ground",
        area: "Sector 42",
        note: "A smaller facility used by families in the southern sectors.",
      },
    ],
    areas: [
      "Sectors 1 to 30",
      "Sectors 31 to 47",
      "Manimajra",
      "Mohali",
      "Panchkula",
      "Zirakpur",
      "Kharar",
      "Dera Bassi",
      "IT Park",
      "Industrial Area",
    ],
    localNotes: [
      {
        heading: "Sikh rites",
        body: [
          "For a Sikh family the sequence is different. The body is bathed and dressed with the five kakaars, the antim ardaas is performed before the cremation, and the sehaj paath runs over the following days concluding with the bhog and the final ardaas.",
          "We arrange the granthi, coordinate with the gurudwara for the paath and the bhog, and organise the langar. There is no havan and no thirteen day cycle in the way a Hindu family observes it.",
        ],
        bullets: [
          "Granthi for the antim ardaas at the cremation ground",
          "Sehaj paath arranged at the gurudwara or at home",
          "Bhog and the final ardaas coordinated with the gurudwara",
          "Langar arrangements for the sangat",
          "Rumala sahib and the required samagri supplied",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you cover Mohali, Panchkula and Zirakpur?",
        a: "Yes, all of them, plus Kharar and Dera Bassi. The tricity is treated as one service area and families can use whichever ground is closest.",
      },
      {
        q: "Can you arrange a granthi?",
        a: "Yes, for the antim ardaas, the sehaj paath and the bhog. We coordinate with the gurudwara and arrange the langar.",
      },
      {
        q: "Is electric cremation available?",
        a: "Yes, at the Sector 25 ground, alongside traditional wood platforms.",
      },
    ],
    nearby: ["mohali", "panchkula", "zirakpur", "delhi"],
  },

  {
    slug: "mohali",
    name: "Mohali",
    state: "Punjab",
    region: "Punjab & Haryana",
    responseTime: "40 to 60 minutes across Mohali and Kharar",
    metaTitle: "Funeral & Cremation Services in Mohali | 24x7 Support",
    metaDescription:
      "Funeral services in Mohali and Kharar. Cremation ground booking, freezer box on rent, hearse van, granthi for antim ardaas and pandit ji.",
    intro: [
      "Mohali families use the Phase 7 cremation ground or the Sector 25 facility in Chandigarh, whichever is closer on the day. Both are a short drive from most of the city.",
      "We cover Mohali, Kharar, the Airport Road sectors and the newer development towards Landran.",
    ],
    facilities: [
      {
        name: "Phase 7 Cremation Ground",
        area: "Phase 7, Mohali",
        note: "The main municipal ground for Mohali. Wood platforms with an electric unit, covered seating and parking.",
      },
      {
        name: "Sector 25 Chandigarh Ground",
        area: "Sector 25, Chandigarh",
        note: "Used by many Mohali families, particularly those in the sectors closer to the Chandigarh border.",
      },
      {
        name: "Kharar Cremation Ground",
        area: "Kharar",
        note: "Serves Kharar, Landran and the surrounding villages.",
      },
    ],
    areas: [
      "Phase 1 to 11",
      "Sector 66 to 71",
      "Sector 78 to 82",
      "Airport Road",
      "Kharar",
      "Landran",
      "Sohana",
      "Balongi",
    ],
    localNotes: [
      {
        heading: "Sikh and Hindu rites both handled",
        body: [
          "Mohali has a mix of Sikh and Hindu families and we arrange for either. For Sikh families that means the granthi, the antim ardaas and the sehaj paath. For Hindu families the pandit, the havan and the thirteen day cycle.",
          "Tell us which when you call so we send the right person the first time.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can we use the Chandigarh ground?",
        a: "Yes. There is no restriction and many Mohali families do, particularly from the sectors near the border. We book whichever is quicker for you.",
      },
      {
        q: "Do you deliver freezer boxes in Mohali?",
        a: "Yes, usually within 60 to 90 minutes, including Kharar and Landran.",
      },
      {
        q: "Do you arrange langar?",
        a: "Yes, along with the gurudwara coordination for the paath and the bhog.",
      },
    ],
    nearby: ["chandigarh", "panchkula", "zirakpur", "delhi"],
  },

  {
    slug: "panchkula",
    name: "Panchkula",
    state: "Haryana",
    region: "Punjab & Haryana",
    responseTime: "40 to 60 minutes across Panchkula and Pinjore",
    metaTitle: "Funeral & Cremation Services in Panchkula | 24x7 Helpline",
    metaDescription:
      "Funeral services in Panchkula, Pinjore and Kalka. Cremation ground booking, freezer box delivery, hearse van, pandit ji and samagri arranged round the clock.",
    intro: [
      "Panchkula is compact and well laid out, and the Sector 20 cremation ground serves most of the city. Families in the northern sectors sometimes use the Manimajra ground in Chandigarh instead.",
      "We also cover Pinjore, Kalka and the stretch up towards the Himachal border.",
    ],
    facilities: [
      {
        name: "Sector 20 Cremation Ground",
        area: "Sector 20, Panchkula",
        note: "The main municipal ground. Wood platforms with an electric unit, clean and well managed.",
      },
      {
        name: "Manimajra Cremation Ground",
        area: "Manimajra, on the Chandigarh border",
        note: "Convenient for families in the sectors closest to Chandigarh.",
      },
      {
        name: "Pinjore Cremation Ground",
        area: "Pinjore",
        note: "Serves Pinjore, Kalka and the villages along the Himachal road.",
      },
    ],
    areas: [
      "Sector 1 to 12",
      "Sector 14 to 21",
      "MDC Sectors",
      "Pinjore",
      "Kalka",
      "Barwala",
      "Raipur Rani",
    ],
    localNotes: [
      {
        heading: "Moving on to Himachal",
        body: [
          "Families here often need a body taken up to Shimla, Solan, Baddi or further into Himachal. The roads are slower than the distance suggests, and a freezer ambulance is the right vehicle for anything past Solan.",
          "We run this route regularly and will give you an honest driving time rather than a map estimate.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you cover Pinjore and Kalka?",
        a: "Yes, along with Barwala and Raipur Rani. Response time is a little longer for the outlying areas.",
      },
      {
        q: "Can you transport a body to Himachal?",
        a: "Yes, regularly. Shimla, Solan, Baddi, Nahan and beyond. We use a freezer ambulance because the hill roads take longer than the distance suggests.",
      },
      {
        q: "Is the Sector 20 ground open every day?",
        a: "Yes, with registration closing around sunset as at most grounds.",
      },
    ],
    nearby: ["chandigarh", "mohali", "zirakpur", "delhi"],
  },

  {
    slug: "zirakpur",
    name: "Zirakpur",
    state: "Punjab",
    region: "Punjab & Haryana",
    responseTime: "45 to 60 minutes across Zirakpur and Dera Bassi",
    metaTitle: "Funeral & Cremation Services in Zirakpur | 24x7 Helpline",
    metaDescription:
      "Funeral services in Zirakpur, Dera Bassi and the surrounding areas. Cremation booking, freezer box on rent, hearse van, granthi and pandit ji.",
    intro: [
      "Zirakpur has grown quickly along the highway and most of its residents moved here in the last fifteen years. The local shamshan ghat serves the older village areas, and families in the newer societies usually use the Chandigarh or Mohali grounds.",
      "We cover Zirakpur, Dera Bassi, Dhakoli and the VIP Road stretch.",
    ],
    facilities: [
      {
        name: "Zirakpur Shamshan Ghat",
        area: "Zirakpur town",
        note: "The local municipal ground, wood platforms serving the older parts of town and the nearby villages.",
      },
      {
        name: "Sector 25 Chandigarh Ground",
        area: "Sector 25, Chandigarh",
        note: "The usual choice for families in the newer societies. Electric and wood on one site.",
      },
      {
        name: "Dera Bassi Cremation Ground",
        area: "Dera Bassi",
        note: "Serves Dera Bassi and the villages along the Ambala road.",
      },
    ],
    areas: [
      "VIP Road",
      "Dhakoli",
      "Peer Muchalla",
      "Baltana",
      "Lohgarh",
      "Dera Bassi",
      "Singhpura",
    ],
    localNotes: [
      {
        heading: "Highway society addresses",
        body: [
          "Most of Zirakpur is high rise societies along the highway, which raises the same lift and access questions as Gurugram. Tell us the tower and the floor when you call and we will send enough staff.",
          "Traffic on the Ambala highway can be heavy in the evening, so if the cremation slot is late in the day we plan to leave earlier.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which ground do Zirakpur families use?",
        a: "The local shamshan ghat for the older areas, and the Chandigarh Sector 25 ground for most of the newer societies. We book whichever suits your location and timing.",
      },
      {
        q: "Do you deliver freezer boxes here?",
        a: "Yes, usually within 60 to 90 minutes across Zirakpur, Dhakoli and Dera Bassi.",
      },
      {
        q: "Can you arrange a granthi?",
        a: "Yes, for the antim ardaas and the sehaj paath, along with the gurudwara coordination.",
      },
    ],
    nearby: ["chandigarh", "mohali", "panchkula", "delhi"],
  },

  /* ============================== UTTAR PRADESH ============================== */
  {
    slug: "lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    region: "Uttar Pradesh",
    responseTime: "45 to 60 minutes across the city",
    metaTitle: "Funeral & Cremation Services in Lucknow | Bhaisakund",
    metaDescription:
      "Funeral services in Lucknow. Cremation booking at Bhaisakund and Baikunth Dham, freezer box on rent, hearse van, pandit ji, maulvi and samagri.",
    intro: [
      "Bhaisakund on the Gomti is Lucknow's main cremation ground and has been for a very long time. Baikunth Dham at Gulala Ghat is the other principal facility, with an electric unit.",
      "Lucknow also has a large Muslim population and a good share of our work here is burial arrangements, which means the kabristan allotment, the kafan and the maulvi rather than a cremation.",
    ],
    facilities: [
      {
        name: "Bhaisakund Cremation Ground",
        area: "On the Gomti, near Daliganj",
        note: "The city's principal ghat. Wood pyre platforms along the river with a covered area, and an electric unit added later.",
      },
      {
        name: "Baikunth Dham",
        area: "Gulala Ghat, on the Gomti",
        note: "Electric and wood facilities, generally less crowded than Bhaisakund.",
      },
      {
        name: "Aishbagh Kabristan",
        area: "Aishbagh",
        note: "One of the main burial grounds for the city's Muslim families.",
      },
      {
        name: "Nishatganj Cremation Ground",
        area: "Nishatganj",
        note: "Serves Nishatganj, Mahanagar and the surrounding colonies.",
      },
    ],
    areas: [
      "Hazratganj",
      "Gomti Nagar",
      "Aliganj",
      "Mahanagar",
      "Indira Nagar",
      "Aminabad",
      "Chowk",
      "Alambagh",
      "Rajajipuram",
      "Jankipuram",
      "Sushant Golf City",
    ],
    localNotes: [
      {
        heading: "Muslim burial arrangements",
        body: [
          "For a Muslim family the burial should happen as soon as possible, ideally the same day, and the grave allotment is what decides whether that is achievable. We move on that first, before anything else.",
          "The kafan, the ghusl material, the maulvi for the janaza namaz and the transport are arranged alongside. Aishbagh and the other city kabristans each have their own allotment procedure and we know which will confirm quickly.",
        ],
      },
      {
        heading: "Onward transport",
        body: [
          "Lucknow families frequently need a body taken to a home town in eastern UP, Bihar or Nepal. Gorakhpur, Varanasi, Ayodhya, Patna and the border crossings are all routine runs for us and take between five and twelve hours by road.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which is the main cremation ground in Lucknow?",
        a: "Bhaisakund on the Gomti, with Baikunth Dham at Gulala Ghat as the other principal facility. Both have wood platforms and an electric unit.",
      },
      {
        q: "Can you arrange a Muslim burial?",
        a: "Yes. We handle the kabristan allotment, the kafan, the ghusl material, the maulvi and the janaza transport, working to get the burial done the same day.",
      },
      {
        q: "Do you transport bodies to eastern UP and Bihar?",
        a: "Yes, regularly. Gorakhpur, Varanasi, Ayodhya, Patna and the Nepal border crossings are all routine road transfers for us.",
      },
    ],
    nearby: ["kanpur", "agra", "delhi", "patna"],
  },

  {
    slug: "kanpur",
    name: "Kanpur",
    state: "Uttar Pradesh",
    region: "Uttar Pradesh",
    responseTime: "45 to 60 minutes across the city",
    metaTitle: "Funeral & Cremation Services in Kanpur | Bhairon Ghat",
    metaDescription:
      "Funeral services in Kanpur. Cremation at Bhairon Ghat and Bhagwatdas Ghat on the Ganga, freezer box on rent, hearse van, pandit ji and samagri.",
    intro: [
      "Kanpur's cremation grounds sit on the Ganga, which means families can perform the cremation and the asthi visarjan at the same place on consecutive days. That is a real convenience and it is why the riverside ghats stay busy.",
      "Bhairon Ghat and Bhagwatdas Ghat handle most of the city. Both have wood platforms and an electric facility.",
    ],
    facilities: [
      {
        name: "Bhairon Ghat",
        area: "On the Ganga, near the old city",
        note: "The city's main cremation ghat. Wood platforms along the river with an electric unit, and the visarjan can be done here directly.",
      },
      {
        name: "Bhagwatdas Ghat",
        area: "On the Ganga",
        note: "The other principal ghat, serving the central and northern parts of the city.",
      },
      {
        name: "Sarsaiya Ghat",
        area: "Near Civil Lines",
        note: "Used by families in Civil Lines, Swaroop Nagar and the surrounding areas.",
      },
    ],
    areas: [
      "Civil Lines",
      "Swaroop Nagar",
      "Kidwai Nagar",
      "Govind Nagar",
      "Kakadeo",
      "Panki",
      "Kalyanpur",
      "Barra",
      "Naubasta",
      "Shyam Nagar",
    ],
    localNotes: [
      {
        heading: "Cremation and visarjan together",
        body: [
          "Because the ghats are on the Ganga, families can collect the asthi the next morning and immerse it a few steps away. No separate trip to Haridwar or Garhmukteshwar is needed unless the family particularly wants it.",
          "We arrange the pandit for both, on the day of the cremation and again for the visarjan.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can the asthi visarjan be done in Kanpur itself?",
        a: "Yes. The cremation ghats are on the Ganga so the immersion can happen at the same place the next morning. We arrange the pandit for the vidhi.",
      },
      {
        q: "Is electric cremation available?",
        a: "Yes, at Bhairon Ghat, alongside the traditional wood platforms.",
      },
      {
        q: "Do you transport bodies to Lucknow or Delhi?",
        a: "Yes. Lucknow is about four hours and Delhi around nine by road, both in a freezer ambulance.",
      },
    ],
    nearby: ["lucknow", "agra", "delhi", "patna"],
  },

  {
    slug: "agra",
    name: "Agra",
    state: "Uttar Pradesh",
    region: "Uttar Pradesh",
    responseTime: "45 to 60 minutes across the city",
    metaTitle: "Funeral & Cremation Services in Agra | Taj Ganj Dham",
    metaDescription:
      "Funeral services in Agra. Cremation booking at Taj Ganj Moksh Dham and Balkeshwar Ghat, freezer box on rent, hearse van, pandit ji and samagri.",
    intro: [
      "Agra's main grounds are Taj Ganj Moksh Dham and Balkeshwar Ghat on the Yamuna. Both handle wood cremations, and Taj Ganj has an electric facility.",
      "Agra sits on the Yamuna Expressway, which puts Delhi about three hours away and makes transfers in either direction straightforward.",
    ],
    facilities: [
      {
        name: "Taj Ganj Moksh Dham",
        area: "Taj Ganj",
        note: "The city's principal cremation ground. Wood platforms and an electric unit, with covered seating and parking.",
      },
      {
        name: "Balkeshwar Ghat",
        area: "On the Yamuna, Balkeshwar",
        note: "A riverside ghat where the cremation and the visarjan can both be performed.",
      },
      {
        name: "Poiya Ghat",
        area: "On the Yamuna",
        note: "Serves the areas across the river and the northern colonies.",
      },
    ],
    areas: [
      "Taj Ganj",
      "Sadar Bazaar",
      "Civil Lines",
      "Kamla Nagar",
      "Dayal Bagh",
      "Sikandra",
      "Shahganj",
      "Fatehabad Road",
      "Bodla",
    ],
    localNotes: [
      {
        heading: "The Delhi connection",
        body: [
          "The Yamuna Expressway makes Delhi about three hours away, and we move bodies in both directions regularly. Families whose relatives are in Delhi often bring the body up rather than cremating in Agra, and Delhi families with roots here do the reverse.",
          "Either way it is a comfortable single stretch in a freezer ambulance with no overnight stop needed.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take to move a body from Agra to Delhi?",
        a: "About three to four hours on the Yamuna Expressway in a freezer ambulance. No overnight stop and no permit needed.",
      },
      {
        q: "Can the visarjan be done in Agra?",
        a: "Yes, at Balkeshwar or Poiya Ghat on the Yamuna. Families who want the Ganga instead usually go to Garhmukteshwar, about four hours away.",
      },
      {
        q: "Is a freezer box available in Agra?",
        a: "Yes, delivered usually within 90 minutes anywhere in the city.",
      },
    ],
    nearby: ["delhi", "kanpur", "lucknow", "noida"],
  },

  /* ============================== MADHYA PRADESH ============================== */
  {
    slug: "bhopal",
    name: "Bhopal",
    state: "Madhya Pradesh",
    region: "Madhya Pradesh",
    responseTime: "45 to 60 minutes across the city",
    metaTitle: "Funeral & Cremation Services in Bhopal | 24x7 Helpline",
    metaDescription:
      "Funeral services in Bhopal. Cremation at Bhadbhada and Subhash Nagar Vishram Ghat, freezer box on rent, hearse van, pandit ji, maulvi and samagri.",
    intro: [
      "Bhadbhada Vishram Ghat is Bhopal's main cremation ground and one of the better run facilities in central India, with electric, gas and wood available on one site.",
      "Bhopal has a large Muslim population as well, and burial arrangements are a regular part of what we do here.",
    ],
    facilities: [
      {
        name: "Bhadbhada Vishram Ghat",
        area: "Near Bhadbhada Road",
        note: "The city's principal cremation ground. Electric, gas and wood platforms with a prayer hall and organised registration.",
      },
      {
        name: "Subhash Nagar Vishram Ghat",
        area: "Subhash Nagar",
        note: "Serves the northern and central parts of the city. Wood platforms with covered seating.",
      },
      {
        name: "Jehangirabad Kabristan",
        area: "Jehangirabad",
        note: "A principal burial ground for the city's Muslim families.",
      },
    ],
    areas: [
      "Arera Colony",
      "MP Nagar",
      "Shahpura",
      "Kolar Road",
      "Hoshangabad Road",
      "New Market",
      "Old Bhopal",
      "Bairagarh",
      "Ayodhya Bypass",
      "Karond",
    ],
    localNotes: [
      {
        heading: "Both cremation and burial handled",
        body: [
          "Bhopal's mix means we keep pandits and maulvis both on call. For a Muslim burial the priority is the grave allotment and the same day janaza. For a Hindu cremation it is the ghat slot and the samagri.",
          "Tell us which when you call and the right team goes out.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which cremation ground should we use in Bhopal?",
        a: "Bhadbhada Vishram Ghat for most of the city, since it offers electric, gas and wood on one site. Subhash Nagar is closer for families in the northern areas.",
      },
      {
        q: "Do you arrange Muslim burials?",
        a: "Yes. Kabristan allotment, kafan, ghusl material, maulvi and janaza transport, arranged to complete the burial the same day.",
      },
      {
        q: "Can you transport a body to another city?",
        a: "Yes. Indore is about four hours, Nagpur around six, Delhi twelve to fourteen. All by freezer ambulance.",
      },
    ],
    nearby: ["indore", "nagpur", "delhi", "surat"],
  },

  {
    slug: "indore",
    name: "Indore",
    state: "Madhya Pradesh",
    region: "Madhya Pradesh",
    responseTime: "45 to 60 minutes across the city",
    metaTitle: "Funeral & Cremation Services in Indore | Ramabaug Dham",
    metaDescription:
      "Funeral services in Indore. Cremation at Ramabaug and Juni Indore Mukti Dham, freezer box on rent, hearse van, pandit ji and antim sanskar samagri.",
    intro: [
      "Indore's mukti dhams are noticeably better maintained than the average in this part of the country, a consequence of the city's long standing focus on civic upkeep. Ramabaug is the main one.",
      "The city also has a substantial Jain and Marwari population, and the rites differ. We match the pandit and the samagri to the community rather than sending a standard kit.",
    ],
    facilities: [
      {
        name: "Ramabaug Mukti Dham",
        area: "Ramabaug",
        note: "The city's principal cremation ground. Electric and wood platforms, clean and well managed with a prayer hall.",
      },
      {
        name: "Juni Indore Mukti Dham",
        area: "Juni Indore",
        note: "An older ground serving the central and western parts of the city.",
      },
      {
        name: "Regional Park Mukti Dham",
        area: "Near Regional Park, Bypass Road",
        note: "Serves the newer developments along the bypass and the eastern side.",
      },
      {
        name: "Meghdoot Mukti Dham",
        area: "Vijay Nagar side",
        note: "Convenient for Vijay Nagar, Scheme 54 and the surrounding colonies.",
      },
    ],
    areas: [
      "Vijay Nagar",
      "Scheme 54 and 78",
      "Rajendra Nagar",
      "Palasia",
      "Sudama Nagar",
      "Bhawarkuan",
      "AB Road",
      "Bypass Road",
      "Mhow Road",
      "Rau",
    ],
    localNotes: [
      {
        heading: "Jain rites",
        body: [
          "Indore has a large Jain community and the antim kriya follows its own vidhi. The samagri is different, kesar and sandalwood feature prominently, and the rites are conducted by a Jain pandit rather than a general one.",
          "We keep the Jain kit separately and arrange the appropriate person. Say so when you call.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which mukti dham is best in Indore?",
        a: "Ramabaug for most of the city, with electric and wood on one site. Meghdoot is closer for Vijay Nagar families and Regional Park for the bypass side.",
      },
      {
        q: "Do you arrange Jain antim kriya?",
        a: "Yes, with the correct samagri and a Jain pandit who performs the vidhi regularly.",
      },
      {
        q: "How far is Bhopal by road?",
        a: "About four hours in a freezer ambulance. We run this route regularly in both directions.",
      },
    ],
    nearby: ["bhopal", "surat", "vadodara", "nagpur"],
  },

  /* ============================== SOUTH ============================== */
  {
    slug: "bengaluru",
    name: "Bengaluru",
    state: "Karnataka",
    region: "South India",
    featured: true,
    responseTime: "50 to 80 minutes depending on the part of the city",
    metaTitle: "Funeral & Cremation Services in Bengaluru | 24x7 Helpline",
    metaDescription:
      "Funeral services in Bengaluru. Cremation at Wilson Garden, Banashankari, Hebbal and Sumanahalli, freezer box delivery, hearse van, priest and samagri.",
    intro: [
      "Bengaluru's crematoriums are run by the BBMP and most of the main ones use gas or electric furnaces. They are efficient and the process is quicker than in the north, usually finishing within two hours.",
      "The larger part of our work here is not local cremation at all. It is families who moved here for work and need a parent taken back to Kerala, Tamil Nadu, Andhra, Bengal or the north. That is a transport and documentation job, and the sooner you call the better.",
    ],
    facilities: [
      {
        name: "Wilson Garden Crematorium",
        area: "Wilson Garden, south Bengaluru",
        note: "One of the busiest BBMP facilities. Gas and electric furnaces, well organised, with a waiting hall.",
      },
      {
        name: "Banashankari Crematorium",
        area: "Banashankari",
        note: "Serves the south and south west of the city. Electric furnaces with a wood section.",
      },
      {
        name: "Hebbal Crematorium",
        area: "Hebbal",
        note: "The main facility for north Bengaluru, convenient for Yelahanka, Hebbal and the airport side.",
      },
      {
        name: "Sumanahalli Crematorium",
        area: "Sumanahalli, Magadi Road",
        note: "Gas furnaces serving the western part of the city.",
      },
      {
        name: "Kalpalli Crematorium and Burial Ground",
        area: "Kalpalli, east Bengaluru",
        note: "Cremation and Christian burial on the same site, serving the eastern suburbs.",
      },
    ],
    areas: [
      "Koramangala",
      "Indiranagar",
      "HSR Layout",
      "Whitefield",
      "Marathahalli",
      "Electronic City",
      "Jayanagar and JP Nagar",
      "Banashankari",
      "Malleshwaram",
      "Yelahanka",
      "Hebbal",
      "Sarjapur Road",
      "Bannerghatta Road",
    ],
    localNotes: [
      {
        heading: "Taking a parent home",
        body: [
          "This is the situation we handle most often in Bengaluru. An elderly parent visiting or living with children here, and the family wants the last rites performed in the home town.",
          "Two routes. By road for Tamil Nadu, Kerala, Andhra and coastal Karnataka, which takes eight to fourteen hours in a freezer ambulance. By air cargo for Delhi, Kolkata, Patna, Guwahati or Bhubaneswar, which needs embalming and a full day of paperwork but gets there the same day.",
        ],
        bullets: [
          "Road transfer to Chennai, Coimbatore, Kochi, Hyderabad, Mangaluru and Vijayawada",
          "Air cargo from Kempegowda International for anywhere further",
          "Embalming arranged the same day, which is compulsory for any flight",
          "Death certificate from the BBMP arranged alongside",
        ],
      },
      {
        heading: "Traffic and dispatch",
        body: [
          "Bengaluru traffic makes response times unpredictable. We position vehicles at multiple points rather than running everything from one base, and we give you a realistic arrival time when you call rather than an optimistic one.",
        ],
      },
    ],
    faqs: [
      {
        q: "How quickly can you reach me in Bengaluru?",
        a: "Fifty to eighty minutes depending on where you are and the hour. Whitefield and Electronic City at peak time sit at the longer end, and we will say so honestly rather than promising forty minutes.",
      },
      {
        q: "Can you take a body to Kerala or Tamil Nadu?",
        a: "Yes, regularly. Kochi, Thrissur, Coimbatore, Chennai and Madurai are all road transfers of eight to fourteen hours in a freezer ambulance.",
      },
      {
        q: "Is wood cremation available?",
        a: "At a few grounds, though most BBMP facilities use gas or electric. If the family wants a wood pyre, say so when you call and we will book a ground that has one.",
      },
      {
        q: "Do you arrange Christian burial?",
        a: "Yes. Kalpalli and several parish grounds handle burials, and we arrange the plot, the coffin and the priest.",
      },
    ],
    nearby: ["chennai", "hyderabad", "coimbatore", "pune"],
  },

  {
    slug: "chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    region: "South India",
    responseTime: "50 to 75 minutes across the city",
    metaTitle: "Funeral & Cremation Services in Chennai | Besant Nagar",
    metaDescription:
      "Funeral services in Chennai. Cremation at Besant Nagar, Anna Nagar and Velangadu, freezer box on rent, hearse van, iyer for the rites and samagri.",
    intro: [
      "Chennai's crematoriums are run by the Greater Chennai Corporation and most use electric furnaces. Besant Nagar is the best known and among the better maintained.",
      "Tamil rites differ from the north in several respects, including the days on which the ceremonies fall. We send an iyer who performs the Tamil vidhi rather than a general pandit.",
    ],
    facilities: [
      {
        name: "Besant Nagar Electric Crematorium",
        area: "Besant Nagar, near the beach",
        note: "The city's best known facility. Electric furnaces, clean and well managed, with a large waiting area.",
      },
      {
        name: "Anna Nagar Crematorium",
        area: "Anna Nagar",
        note: "Serves north and central Chennai. Electric furnaces with a wood section.",
      },
      {
        name: "Velangadu Crematorium",
        area: "Velangadu",
        note: "A large facility handling a heavy daily load from the western parts of the city.",
      },
      {
        name: "Mylapore Crematorium",
        area: "Mylapore",
        note: "Serves Mylapore, Alwarpet and the surrounding traditional neighbourhoods.",
      },
    ],
    areas: [
      "Adyar",
      "Besant Nagar",
      "Mylapore",
      "T Nagar",
      "Anna Nagar",
      "Velachery",
      "OMR and Sholinganallur",
      "Porur",
      "Ambattur",
      "Tambaram",
      "Nungambakkam",
      "Perambur",
    ],
    localNotes: [
      {
        heading: "Tamil rites and the ceremony days",
        body: [
          "The Tamil sequence does not follow the north Indian thirteen day pattern. The karumathi is generally on the sixteenth day, with the ceremonies on the days between following the family's specific custom, and Iyer, Iyengar and other communities each have their own variations.",
          "We send an iyer who performs your family's vidhi and supply the samagri to match. Tell us the community when you call.",
        ],
      },
      {
        heading: "Monsoon and coastal timing",
        body: [
          "During the northeast monsoon between October and December, parts of Chennai flood and vehicle access to some areas becomes difficult. We plan routes around the known waterlogging points and will tell you if the arrival time is going to be affected.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which crematorium is best in Chennai?",
        a: "Besant Nagar is the best maintained and the usual first choice. Anna Nagar and Velangadu serve the north and west respectively. We book whichever is closest with a free slot.",
      },
      {
        q: "Do you arrange an iyer for Tamil rites?",
        a: "Yes, one who performs the Tamil vidhi regularly rather than a general pandit. Tell us the community and we match accordingly.",
      },
      {
        q: "Can you transport a body to another Tamil Nadu city?",
        a: "Yes. Madurai, Coimbatore, Trichy, Salem and Tirunelveli are all road transfers of five to ten hours in a freezer ambulance.",
      },
    ],
    nearby: ["coimbatore", "bengaluru", "hyderabad", "kolkata"],
  },

  {
    slug: "coimbatore",
    name: "Coimbatore",
    state: "Tamil Nadu",
    region: "South India",
    responseTime: "45 to 70 minutes across the city",
    metaTitle: "Funeral & Cremation Services in Coimbatore | 24x7 Helpline",
    metaDescription:
      "Funeral services in Coimbatore. Cremation ground booking, freezer box on rent, hearse van, iyer for the Tamil rites and complete samagri.",
    intro: [
      "Coimbatore's crematoriums are managed by the city corporation, with the Ukkadam and Vellalore facilities handling most of the load. Both have electric furnaces.",
      "The city sits close to the Kerala border, and a good part of our work here involves moving bodies between Tamil Nadu and Kerala, which is a short and straightforward run.",
    ],
    facilities: [
      {
        name: "Ukkadam Crematorium",
        area: "Ukkadam",
        note: "The main corporation facility. Electric furnaces with a wood section, serving central and southern Coimbatore.",
      },
      {
        name: "Vellalore Crematorium",
        area: "Vellalore",
        note: "A larger facility on the outskirts, handling the eastern side of the city.",
      },
      {
        name: "Peelamedu Crematorium",
        area: "Peelamedu",
        note: "Convenient for Peelamedu, Hopes and the areas near the airport.",
      },
    ],
    areas: [
      "RS Puram",
      "Gandhipuram",
      "Peelamedu",
      "Saibaba Colony",
      "Race Course",
      "Singanallur",
      "Vadavalli",
      "Kuniamuthur",
      "Sulur",
      "Ganapathy",
    ],
    localNotes: [
      {
        heading: "Kerala transfers",
        body: [
          "Palakkad is under two hours, Thrissur about three, Kochi around four and a half. These are common runs for us and they need no special documentation beyond the death certificate and ID proofs.",
          "For anything longer, or where the body will wait, we embalm first.",
        ],
      },
    ],
    faqs: [
      {
        q: "How quickly can you reach Coimbatore?",
        a: "Forty five to seventy minutes across the city. The outlying areas towards Sulur and Annur take a little longer.",
      },
      {
        q: "Can you take a body to Kerala?",
        a: "Yes, and it is a routine run. Palakkad is under two hours, Kochi about four and a half, in a freezer ambulance.",
      },
      {
        q: "Do you arrange the Tamil rites?",
        a: "Yes, with an iyer who performs the correct vidhi and the samagri to match the community.",
      },
    ],
    nearby: ["chennai", "bengaluru", "hyderabad", "pune"],
  },

  {
    slug: "hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    region: "South India",
    responseTime: "50 to 75 minutes across the city and Secunderabad",
    metaTitle: "Funeral & Cremation Services in Hyderabad | Punjagutta",
    metaDescription:
      "Funeral services in Hyderabad and Secunderabad. Cremation at Mahaprasthanam Punjagutta and Amberpet, freezer box, hearse van, pandit ji and maulvi.",
    intro: [
      "Mahaprasthanam at Punjagutta is Hyderabad's principal cremation ground and it is a well organised facility with electric and wood both available. Amberpet and Bansilalpet serve the older parts of the city.",
      "Hyderabad has a very large Muslim population, particularly in the old city, and burial arrangements form a substantial part of our work here.",
    ],
    facilities: [
      {
        name: "Mahaprasthanam, Punjagutta",
        area: "Punjagutta",
        note: "The city's main cremation ground. Electric and wood platforms, well maintained, with a prayer hall and organised registration.",
      },
      {
        name: "Amberpet Crematorium",
        area: "Amberpet",
        note: "Serves the eastern and central parts of the city. Electric and wood facilities.",
      },
      {
        name: "Bansilalpet Crematorium",
        area: "Secunderabad",
        note: "The main facility for Secunderabad and the cantonment areas.",
      },
      {
        name: "Daira Mir Momin Kabristan",
        area: "Old City",
        note: "One of the principal burial grounds for the old city's Muslim families.",
      },
    ],
    areas: [
      "Banjara Hills",
      "Jubilee Hills",
      "Gachibowli",
      "Madhapur and HITEC City",
      "Kondapur",
      "Kukatpally",
      "Secunderabad",
      "Begumpet",
      "Old City and Charminar",
      "Uppal",
      "LB Nagar",
      "Shamshabad",
    ],
    localNotes: [
      {
        heading: "Old city and new city",
        body: [
          "Hyderabad functions as two rather different cities for our purposes. The old city has narrow lanes where a full sized ambulance cannot always reach the door, and the customs are predominantly Muslim with same day burial expected.",
          "The HITEC City and Gachibowli side is high rise, largely people from other states, and the common requirement there is transport home rather than local rites. We staff for both.",
        ],
      },
      {
        heading: "Muslim burial in the old city",
        body: [
          "Grave allotment is the step that decides the timing, and the old city kabristans each have their own procedure. We start on that immediately so that the janaza can happen the same day, and arrange the kafan, the ghusl material and the maulvi alongside.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which is the main cremation ground?",
        a: "Mahaprasthanam at Punjagutta, with electric and wood on one site. Amberpet and Bansilalpet serve the eastern side and Secunderabad respectively.",
      },
      {
        q: "Can you reach addresses in the old city?",
        a: "Yes. Where the lane is too narrow for the ambulance we park at the nearest access point and our staff carry from there. Tell us the address and we will plan for it.",
      },
      {
        q: "Do you arrange Muslim burials?",
        a: "Yes, including the kabristan allotment, kafan, ghusl material, maulvi and janaza transport, worked to complete the same day.",
      },
      {
        q: "Can you transport a body to Andhra or another state?",
        a: "Yes. Vijayawada, Visakhapatnam, Bengaluru and Chennai are all road transfers. Air cargo from Shamshabad handles anything further.",
      },
    ],
    nearby: ["bengaluru", "chennai", "nagpur", "pune"],
  },

  /* ============================== EAST ============================== */
  {
    slug: "kolkata",
    name: "Kolkata",
    state: "West Bengal",
    region: "East India",
    responseTime: "45 to 70 minutes across the city",
    metaTitle: "Funeral & Cremation Services in Kolkata | Keoratala",
    metaDescription:
      "Funeral services in Kolkata. Cremation at Keoratala and Nimtala Mahasmashan, freezer box on rent, hearse van, purohit for the Bengali rites and samagri.",
    intro: [
      "Keoratala at Kalighat and Nimtala on the Hooghly are Kolkata's two great cremation grounds and both have served the city for well over a century. Each has electric furnaces alongside the traditional wood platforms.",
      "Bengali rites follow their own calendar, with the shradh on the eleventh day rather than the thirteenth, and the niyam bhango marking the end of the mourning period. We send a purohit who follows the Bengali vidhi.",
    ],
    facilities: [
      {
        name: "Keoratala Mahasmashan",
        area: "Kalighat, south Kolkata",
        note: "The city's principal cremation ground. Electric furnaces and wood platforms, with a large covered gathering area.",
      },
      {
        name: "Nimtala Mahasmashan",
        area: "On the Hooghly, north Kolkata",
        note: "The historic riverside ghat. Wood platforms along the river with electric furnaces added, and the visarjan can be done here directly.",
      },
      {
        name: "Siriti Mahasmashan",
        area: "Siriti, south Kolkata",
        note: "A large modern facility with electric furnaces, serving Behala, Tollygunge and the southern suburbs.",
      },
      {
        name: "Dhapa Crematorium",
        area: "Dhapa, east Kolkata",
        note: "Serves Salt Lake, New Town and the eastern parts of the city.",
      },
    ],
    areas: [
      "Ballygunge",
      "Alipore",
      "Bhowanipore",
      "Tollygunge",
      "Behala",
      "Salt Lake",
      "New Town and Rajarhat",
      "Dum Dum",
      "Howrah",
      "Shyambazar",
      "Park Street",
      "Jadavpur",
    ],
    localNotes: [
      {
        heading: "The Bengali sequence",
        body: [
          "The shradh falls on the eleventh day for most Bengali Hindu families, not the thirteenth, and the niyam bhango follows it. The mukhagni, the ashouch period and the specific offerings all have their own form.",
          "We arrange a purohit who conducts the Bengali vidhi and supply the samagri accordingly, including the items for the shradh and the niyam bhango.",
        ],
        bullets: [
          "Purohit for the antim kriya and the eleventh day shradh",
          "Bengali samagri including the specific items for the niyam bhango",
          "Ghat coordination at Keoratala, Nimtala or Siriti",
          "Asthi visarjan in the Hooghly at the ghat itself",
        ],
      },
      {
        heading: "Visarjan in the Hooghly",
        body: [
          "Because Nimtala sits on the river, the asthi visarjan can be done at the same ghat the following morning. Families who want the Ganga at Prayagraj or Haridwar instead travel there, and we arrange that trip separately.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which is the main cremation ground?",
        a: "Keoratala at Kalighat and Nimtala on the Hooghly are the two principal grounds. Siriti serves the southern suburbs and Dhapa the Salt Lake side.",
      },
      {
        q: "Do you arrange a Bengali purohit?",
        a: "Yes, one who follows the Bengali vidhi with the shradh on the eleventh day and the niyam bhango, rather than the north Indian thirteen day pattern.",
      },
      {
        q: "Can the visarjan be done in Kolkata?",
        a: "Yes, in the Hooghly at Nimtala Ghat the morning after the cremation. We arrange the purohit for the vidhi.",
      },
      {
        q: "Do you cover Howrah and New Town?",
        a: "Yes, along with Salt Lake, Rajarhat, Dum Dum and Barrackpore.",
      },
    ],
    nearby: ["patna", "hyderabad", "chennai", "delhi"],
  },

  {
    slug: "patna",
    name: "Patna",
    state: "Bihar",
    region: "East India",
    responseTime: "50 to 75 minutes across the city",
    metaTitle: "Funeral & Cremation Services in Patna | Bans Ghat",
    metaDescription:
      "Funeral services in Patna. Cremation at Bans Ghat and Gulbi Ghat on the Ganga, freezer box on rent, hearse van, pandit ji and samagri.",
    intro: [
      "Patna's cremation ghats sit directly on the Ganga, which means the cremation and the asthi visarjan happen at the same place. Bans Ghat and Gulbi Ghat handle most of the city.",
      "A lot of our work here involves bodies arriving from Delhi, Mumbai, Bengaluru and the Gulf, because a very large number of Bihari families working elsewhere want the last rites performed at home. We receive at Patna airport and by road.",
    ],
    facilities: [
      {
        name: "Bans Ghat",
        area: "On the Ganga, near Rajapur",
        note: "The city's principal cremation ghat. Wood platforms along the river with an electric unit, and the visarjan can be done at the same place.",
      },
      {
        name: "Gulbi Ghat",
        area: "On the Ganga",
        note: "The other main ghat, with wood platforms and a covered area, serving the central parts of the city.",
      },
      {
        name: "Khaja Kalan Ghat",
        area: "Old Patna, on the river",
        note: "An older riverside ghat used by families in the walled city and the surrounding mohallas.",
      },
    ],
    areas: [
      "Kankarbagh",
      "Boring Road",
      "Patliputra Colony",
      "Rajendra Nagar",
      "Danapur",
      "Phulwari Sharif",
      "Bailey Road",
      "Ashiana Nagar",
      "Gandhi Maidan",
      "Patna City",
    ],
    localNotes: [
      {
        heading: "Receiving a body from another city",
        body: [
          "This is most of what we do in Patna. A family member dies in Delhi, Mumbai, Bengaluru or the Gulf, and the body has to come home to Bihar for the rites.",
          "We receive at Patna airport as cargo, clear it, and either take the body onward to the district town or straight to the ghat. For arrivals from the Gulf the clearance and the onward road transfer are arranged as one job.",
        ],
        bullets: [
          "Airport cargo clearance at Jayaprakash Narayan International",
          "Onward road transfer to Gaya, Muzaffarpur, Bhagalpur, Darbhanga and the district towns",
          "Receiving road transfers arriving from Delhi, Kolkata and Lucknow",
          "Freezer box at the home village while relatives gather",
        ],
      },
      {
        heading: "Pind daan at Gaya",
        body: [
          "Gaya is about two and a half hours from Patna and is where families come from all over the country for the pind daan. We arrange the pandit at the Vishnupad temple and the Falgu river, the samagri and the stay.",
          "The full ritual runs over two to three days. A shortened one day version is also performed and is widely accepted.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you receive a body arriving at Patna airport?",
        a: "Yes. We clear the cargo, complete the formalities and take the body onward to the ghat or to the district town, including the Gulf arrivals.",
      },
      {
        q: "Can the asthi visarjan be done in Patna?",
        a: "Yes. The cremation ghats are on the Ganga so the immersion happens at the same place the next morning.",
      },
      {
        q: "Do you arrange the pind daan at Gaya?",
        a: "Yes. Pandit at the Vishnupad temple and the Falgu, all the samagri, and the accommodation. The full ritual takes two to three days and a one day version is also available.",
      },
      {
        q: "Do you cover the district towns?",
        a: "Yes. Muzaffarpur, Gaya, Bhagalpur, Darbhanga, Chhapra and the surrounding areas, by road from Patna.",
      },
    ],
    nearby: ["kolkata", "lucknow", "kanpur", "delhi"],
  },

  /* ============================== GUJARAT ============================== */
  {
    slug: "surat",
    name: "Surat",
    state: "Gujarat",
    region: "Gujarat",
    responseTime: "45 to 65 minutes across the city",
    metaTitle: "Funeral & Cremation Services in Surat | Ashwinikumar",
    metaDescription:
      "Funeral services in Surat. Cremation at Ashwinikumar and Ramnath Ghela Smashan on the Tapi, freezer box on rent, hearse van, pandit ji and samagri.",
    intro: [
      "Ashwinikumar Smashan Bhumi on the Tapi is Surat's main cremation ground, with electric, gas and wood available. It is a large and well run facility.",
      "Surat's population comes from all over India, particularly Odisha, Bihar and UP working in the textile and diamond trades. Transport home is a frequent requirement and we handle it by road and by air cargo.",
    ],
    facilities: [
      {
        name: "Ashwinikumar Smashan Bhumi",
        area: "On the Tapi, near Ashwinikumar Road",
        note: "The city's principal cremation ground. Electric, gas and wood platforms with a prayer hall and organised registration.",
      },
      {
        name: "Ramnath Ghela Smashan Bhumi",
        area: "Near Ghela village",
        note: "Serves the western and southern parts of the city. Electric and wood facilities.",
      },
      {
        name: "Umra Smashan Bhumi",
        area: "Umra",
        note: "Convenient for Athwalines, Piplod and the surrounding areas.",
      },
    ],
    areas: [
      "Adajan",
      "Vesu",
      "Piplod",
      "Athwalines",
      "Katargam",
      "Varachha",
      "Udhna",
      "Pal",
      "Dumas Road",
      "Sachin",
    ],
    localNotes: [
      {
        heading: "Sending a body to Odisha, Bihar or UP",
        body: [
          "Surat's workforce comes largely from eastern India and families regularly need a body sent to Ganjam, Cuttack, Balasore, Patna or the eastern UP districts. These are long journeys, between eighteen and thirty hours by road.",
          "Air cargo from Surat or Mumbai airport is usually the better answer for anything beyond about twenty hours. It costs more but the body arrives in a day rather than a day and a half, and we arrange the embalming and paperwork.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which is the main cremation ground in Surat?",
        a: "Ashwinikumar Smashan Bhumi on the Tapi, which has electric, gas and wood on one site. Ramnath Ghela serves the western side.",
      },
      {
        q: "Can you send a body to Odisha or Bihar?",
        a: "Yes. By road it takes eighteen to thirty hours in a freezer ambulance. Air cargo from Surat or Mumbai is faster and we arrange the embalming and documentation for it.",
      },
      {
        q: "Do you deliver freezer boxes in Surat?",
        a: "Yes, usually within 90 minutes anywhere in the city.",
      },
    ],
    nearby: ["vadodara", "mumbai", "indore", "pune"],
  },

  {
    slug: "vadodara",
    name: "Vadodara",
    state: "Gujarat",
    region: "Gujarat",
    responseTime: "45 to 65 minutes across the city",
    metaTitle: "Funeral & Cremation Services in Vadodara | Kailashdham",
    metaDescription:
      "Funeral services in Vadodara. Cremation at Kailashdham and Harni Smashan, freezer box on rent, hearse van, pandit ji and complete antim sanskar samagri.",
    intro: [
      "Kailashdham on the Vishwamitri is Vadodara's main cremation ground, with electric and wood facilities on one site. Harni serves the northern and eastern parts of the city.",
      "Vadodara sits on the highway between Ahmedabad and Mumbai, which makes road transfers in either direction quick and straightforward.",
    ],
    facilities: [
      {
        name: "Kailashdham Smashan Bhumi",
        area: "On the Vishwamitri river",
        note: "The city's principal cremation ground. Electric and wood platforms, well maintained, with covered seating.",
      },
      {
        name: "Harni Smashan Bhumi",
        area: "Harni",
        note: "Serves the northern and eastern parts of the city including the airport side.",
      },
      {
        name: "Chhani Smashan Bhumi",
        area: "Chhani",
        note: "Convenient for Chhani, Nizampura and the northern suburbs.",
      },
    ],
    areas: [
      "Alkapuri",
      "Fatehgunj",
      "Gotri",
      "Manjalpur",
      "Akota",
      "Nizampura",
      "Waghodia Road",
      "Karelibaug",
      "Sama",
      "Vasna",
    ],
    localNotes: [
      {
        heading: "The Ahmedabad and Mumbai corridor",
        body: [
          "Ahmedabad is about two hours and Mumbai around six on the expressway. Both are comfortable single stretch runs in a freezer ambulance with no overnight stop.",
          "For families who need to reach further, Ahmedabad and Mumbai airports both take cargo on all major domestic routes and Vadodara has its own flights on several sectors.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which cremation ground should we use?",
        a: "Kailashdham for most of the city, with electric and wood on one site. Harni is closer for families on the northern and eastern side.",
      },
      {
        q: "How long to Ahmedabad or Mumbai?",
        a: "About two hours to Ahmedabad and six to Mumbai on the expressway, in a freezer ambulance with no overnight stop needed.",
      },
      {
        q: "Do you arrange Gujarati rites?",
        a: "Yes, with a pandit who performs the Gujarati vidhi and the samagri to match, including for Jain families.",
      },
    ],
    nearby: ["surat", "indore", "mumbai", "bhopal"],
  },
];

export const cityMap = new Map(cities.map((c) => [c.slug, c]));

export function getCity(slug: string) {
  return cityMap.get(slug);
}

export const featuredCities = cities.filter((c) => c.featured);

/** Cities grouped by region, in the order used by the mega menu. */
export const citiesByRegion = cities.reduce<Record<string, City[]>>(
  (acc, city) => {
    (acc[city.region] ||= []).push(city);
    return acc;
  },
  {},
);

export const regionOrder = [
  "Delhi NCR",
  "Punjab & Haryana",
  "Uttar Pradesh",
  "Maharashtra",
  "Madhya Pradesh",
  "Gujarat",
  "South India",
  "East India",
];

export function nearbyCities(slug: string) {
  const city = cityMap.get(slug);
  if (!city) return [];
  return city.nearby
    .map((s) => cityMap.get(s))
    .filter((c): c is City => Boolean(c));
}
