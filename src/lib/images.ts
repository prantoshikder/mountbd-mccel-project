const BASE = "https://images.unsplash.com";

function u(id: string, w: number, h: number) {
  return `${BASE}/photo-${id}?w=${w}&h=${h}&q=85&auto=format&fit=crop`;
}

/* Verified Unsplash CDN photo IDs */
const IDS = {
  crane:       "1609867271967-a82f85c48531", // construction site with crane
  aerialField: "1723107638694-b7b98672d10d", // aerial building site in field
  aerialBlue:  "1723369962563-5e873df9b93b", // aerial construction blue shutters
  bwSite:      "1645434926657-6b03be95310d", // B&W construction site
  houseFrame:  "1749882120788-0237b2198b5f", // house under construction frame
  desertSite:  "1691890878506-dcc649280fb6", // aerial desert construction
  signage:     "1548880021-76c14b1f6602",    // construction signage
  aerialCars:  "1565528197993-95b55c3b6eeb", // aerial construction with cars
  tripod:      "1675600360017-f0d90a17ea54", // construction site camera/tripod
  equipment:   "1723367194881-fe2e53534170", // construction equipment aerial
  warehouse:   "1553413077-190dd305871c",    // warehouse industrial interior
  engineers:   "1504307651254-35680f356dfd", // engineers reviewing blueprints (professional)
};

/* ─── Hero Slider ─── 1920×900 */
export const HERO_SLIDES = [
  { src: u(IDS.crane,       1920, 900), alt: "Construction site with crane" },
  { src: u(IDS.aerialField, 1920, 900), alt: "Aerial view of building site" },
  { src: u(IDS.aerialCars,  1920, 900), alt: "Aerial construction overview" },
  { src: u(IDS.equipment,   1920, 900), alt: "Construction equipment at site" },
];

/* ─── About Section ─── 800×600 */
export const ABOUT_IMAGE = u(IDS.engineers, 800, 600);

/* ─── Complete Work ─── 800×600 */
export const COMPLETE_WORK_IMAGE = u(IDS.desertSite, 800, 600);

/* ─── Service / Product card ─── 800×480 */
export const SERVICE_CARD_IMAGE = u(IDS.signage, 800, 480);

/* ─── Product Cards ─── 800×480 (6 unique, one per product) */
export const PRODUCT_IMAGES = [
  u(IDS.crane,       800, 480), // Admixture
  u(IDS.aerialBlue,  800, 480), // Water Proofing
  u(IDS.houseFrame,  800, 480), // Retrofitting
  u(IDS.desertSite,  800, 480), // Grouts and Anchors
  u(IDS.tripod,      800, 480), // Industrial Flooring
  u(IDS.bwSite,      800, 480), // Joint Sealants
];

/* ─── Stats Background ─── 1920×400 */
export const STATS_BG = u(IDS.warehouse, 1920, 400);

/* ─── Page Banners ─── 1920×500 */
export const BANNERS = {
  about:    u(IDS.aerialBlue,  1920, 500),
  services: u(IDS.crane,       1920, 500),
  products: u(IDS.tripod,      1920, 500),
  gallery:  u(IDS.aerialField, 1920, 500),
  blogs:    u(IDS.bwSite,      1920, 500),
  contact:  u(IDS.equipment,   1920, 500),
};

/* ─── Blog Thumbnails ─── 800×480 (all unique) */
export const BLOG_IMAGES = [
  u(IDS.crane,       800, 480),
  u(IDS.aerialField, 800, 480),
  u(IDS.houseFrame,  800, 480),
  u(IDS.desertSite,  800, 480),
  u(IDS.signage,     800, 480),
  u(IDS.aerialCars,  800, 480),
];

/* ─── Gallery Images ─── 600×600 square */
export const GALLERY_IMAGES = [
  { id: "g1",  src: u(IDS.crane,       600, 600), alt: "Construction crane",       category: "Gallery1" },
  { id: "g2",  src: u(IDS.aerialField, 600, 600), alt: "Aerial building site",     category: "Gallery2" },
  { id: "g3",  src: u(IDS.aerialBlue,  600, 600), alt: "Construction overview",    category: "Gallery3" },
  { id: "g4",  src: u(IDS.bwSite,      600, 600), alt: "Construction site",        category: "Gallery4" },
  { id: "g5",  src: u(IDS.houseFrame,  600, 600), alt: "House frame",              category: "Gallery1" },
  { id: "g6",  src: u(IDS.desertSite,  600, 600), alt: "Site aerial view",         category: "Gallery2" },
  { id: "g7",  src: u(IDS.signage,     600, 600), alt: "Construction signage",     category: "Gallery3" },
  { id: "g8",  src: u(IDS.aerialCars,  600, 600), alt: "Aerial construction",      category: "Gallery4" },
  { id: "g9",  src: u(IDS.tripod,      600, 600), alt: "Engineering on site",      category: "Gallery1" },
  { id: "g10", src: u(IDS.equipment,   600, 600), alt: "Construction equipment",   category: "Gallery2" },
  { id: "g11", src: u(IDS.bwSite,      600, 600), alt: "Site overview B&W",        category: "Gallery3" },
  { id: "g12", src: u(IDS.aerialBlue,  600, 600), alt: "Building site aerial",     category: "Gallery4" },
];
