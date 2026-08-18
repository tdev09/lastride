import { site } from "@/config/site";

/**
 * The plain language summary AI crawlers read at /llms.txt.
 *
 * It lives here rather than in `public/` so that `site.seoEnabled` can take it
 * off the air: a file in `public/` is served whatever the flag says. Edit the
 * text below as you would edit the file.
 */
const body = `# Last Ride Funeral Services India

> Last Ride is India's leading 24x7 dignified funeral, cremation, dead body transportation, freezer box rental, and international repatriation service provider. Operating since 2010, Last Ride serves Delhi NCR (Delhi, Gurugram, Noida, Faridabad, Ghaziabad) with 30-45 minute emergency response times and operates across 20+ additional major Indian cities through partner depots.

## Emergency Helpline
- **Phone / Call 24x7**: +91 98188 30454
- **WhatsApp**: https://wa.me/919818830454
- **Official Website**: https://lastride.in
- **Email**: care@lastride.in

## Core Services Covered
1. **Cremation Services & Ground Booking**:
   - Booking and end-to-end coordination at all major cremation grounds in Delhi NCR (Nigambodh Ghat, Lodhi Road, Punjabi Bagh, Sector 94 Noida Antim Nivas, Sector 10A Gurugram, etc.).
   - Wood pyre, CNG, electric cremations, pandit ji arrangement, and complete antim sanskar samagri.
2. **Dead Body Ambulance & Transport**:
   - Local AC hearse vans and freezer ambulances for city transfers.
   - Long-distance interstate road transfer across India with dual drivers.
3. **Dead Body Freezer Box Rental**:
   - Delivery of stainless steel temperature-controlled freezer boxes within 45 minutes across Delhi NCR.
4. **Dead Body Embalming Services**:
   - Certified embalming with government medical certificates for long distance transport and international air cargo.
5. **Asthi Visarjan Services**:
   - Ritual ash immersion assistance at sacred river ghats in Haridwar, Varanasi, Garhmukteshwar, and Prayagraj.
6. **International Repatriation of Mortal Remains**:
   - Complete air cargo repatriation services into and out of India (UK, USA, UAE, Canada, Australia, etc.), including embassy clearance, NOC, customs, and airline bookings.
7. **Prayer Hall & Chautha / Tehravin Booking**:
   - Booking of AC prayer halls, floral tribute setups, and ceremony arrangements.

## Priority Cities Covered
- **Delhi NCR**: Delhi, Gurugram, Noida, Faridabad, Ghaziabad (Response time: 30 to 45 minutes).
- **Other Cities**: Mumbai, Pune, Nagpur, Bengaluru, Hyderabad, Chennai, Coimbatore, Kolkata, Patna, Lucknow, Kanpur, Agra, Bhopal, Indore, Chandigarh, Mohali, Panchkula, Zirakpur, Surat, Vadodara.

## Death Certificate Guidance (Delhi NCR)
- Death certificates in Delhi NCR must be registered within 21 days on respective municipal portals (e-District Delhi, MCG Haryana Saral, UP e-Nagar Sewa).
- Supporting documents required: Hospital Death Summary / Form 4, Cremation Ground Receipt, Aadhaar card of deceased and applicant.

## Key Principles & Commitments
- **24x7 Human Response**: Every call is answered by a real person, 365 days a year including festivals.
- **Fixed Transparent Pricing**: Total itemised costs provided upfront before service dispatch; no gate charges.
- **Dignified Conduct**: Respectful, protocol-compliant handling of mortal remains.
`;

export function GET() {
  if (!site.seoEnabled) {
    return new Response("Not Found", { status: 404 });
  }

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
