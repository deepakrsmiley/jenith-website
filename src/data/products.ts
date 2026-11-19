export type ProductParameter = {
  label: string
  detail: string
}

export type ProductSize = {
  length: string
  width: string
  height: string
}

export type ProductProfile = {
  name: string
  detail: string
  image?: string
  sizes?: ProductSize[]
}

export type Product = {
  slug: string
  name: string
  summary: string
  description: string[]
  image: string
  gallery: string[]
  parameters: ProductParameter[]
  suitableFor: string[]
  profiles?: ProductProfile[]
  otherProfiles?: ProductProfile[]
  finishes?: string[]
}

const standardKerbSizes: ProductSize[] = [
  { length: "600", width: "100–200", height: "450 / 420 / 400" },
  { length: "600", width: "100–200", height: "300 / 350" },
  { length: "915", width: "100–150", height: "305" },
  { length: "915", width: "100–150", height: "255 / 200 / 150" },
]

export const products: Product[] = [
  {
    slug: "precast-compound-walls",
    name: "Precast Compound Walls",
    summary:
      "Panel-and-column boundary wall systems for industrial, commercial, and property applications.",
    description: [
      "Compound wall enquiries are reviewed as a panel-and-column system. Share the intended height, panel size, post spacing, and any foundation notes so feasibility can be discussed against the site.",
      "The system is considered for industrial premises, commercial plots, and property boundaries. Final arrangement, finish, and installation scope are confirmed during technical review rather than assumed from a standard catalogue size.",
    ],
    image: "photo-1493397212122-2b85dda8106b",
    gallery: [
      "photo-1493397212122-2b85dda8106b",
      "photo-1511818966892-d7d671e672a2",
      "photo-1486325212027-8081e485255e",
    ],
    parameters: [
      {
        label: "Panel dimensions",
        detail: "Length, height, and thickness the boundary requires.",
      },
      {
        label: "Height",
        detail: "Overall wall height from the finished ground level.",
      },
      {
        label: "Post spacing",
        detail: "Centre-to-centre spacing of columns or posts.",
      },
      {
        label: "Foundation requirements",
        detail: "Ground conditions and any foundation notes from the project.",
      },
    ],
    suitableFor: ["Industrial premises", "Commercial plots", "Property boundaries"],
  },
  {
    slug: "concrete-blocks",
    name: "Solid and Hollow Concrete Blocks",
    summary:
      "Concrete masonry products for suitable structural and non-structural applications according to project specifications.",
    description: [
      "Solid and hollow blocks are quoted against the dimensions, strength class, density, and quantity stated for the project. The appropriate block is selected for the stated application, whether structural or non-structural.",
      "Published sizes and grades are not listed here. Confirmed specifications are issued with the proposal after the technical details have been reviewed.",
    ],
    image: "photo-1518005020951-eccb494ad742",
    gallery: [
      "photo-1518005020951-eccb494ad742",
      "photo-1479839672679-a46483c0e7c8",
      "photo-1448630360428-65456885c650",
    ],
    parameters: [
      { label: "Dimensions", detail: "Length, width, and height required." },
      { label: "Strength class", detail: "The class specified for the application." },
      { label: "Density", detail: "Any density requirement stated by the project." },
      { label: "Quantity", detail: "Number of blocks, or the wall area to be covered." },
    ],
    suitableFor: ["Structural masonry", "Non-structural walls", "Partition work"],
  },
  {
    slug: "interlocking-pavers",
    name: "Interlocking Pavers",
    summary:
      "Paving solutions for walkways, parking areas, landscaping, and external spaces.",
    description: [
      "Interlocking pavers are discussed for walkways, parking, landscaping, and other external surfaces. Thickness, shape, grade, and the traffic the surface must accept are the details used to review a request.",
      "Colour, laying pattern, and edge conditions can be included with the enquiry when they are already decided. They are not treated as a fixed range on this website.",
    ],
    image: "photo-1416331108676-a22ccb276e35",
    gallery: [
      "photo-1416331108676-a22ccb276e35",
      "photo-1600566753190-17f0baa2a6c3",
      "photo-1600585154340-be6161a56a0c",
    ],
    parameters: [
      { label: "Thickness", detail: "Paver thickness required for the surface." },
      { label: "Shape", detail: "The unit shape specified for the area." },
      { label: "Grade", detail: "The grade named in the project specification." },
      { label: "Intended traffic", detail: "Pedestrian, light vehicle, or heavier use." },
    ],
    suitableFor: ["Walkways", "Parking areas", "Landscaping", "External spaces"],
  },
  {
    slug: "kerb-stones",
    name: "Kerb Stones",
    summary:
      "Precast kerbs for road edges, footpaths, driveways, and landscaped boundaries, including half batter, flush, bullnose, and heel profiles.",
    description: [
      "Kerbs mark the edge between a carriageway, footpath, or planted area and give the pavement a defined line. A request can name one of the profiles below or a special section such as a splay, upstand, rollover, barrier, bus, gutter, drain, quadrant, corner, or crescent.",
      "Sizes are in millimetres. Where a cell lists more than one height, each figure is an alternative section, not a single unit. The quotation confirms the profile, finish, and quantity. Other sizes are reviewed from the drawing or the dimensions you send.",
    ],
    image: "/kerbs/roadside.jpg",
    gallery: [
      "/kerbs/roadside.jpg",
      "/kerbs/half-batter.jpg",
      "/kerbs/flush.jpg",
      "/kerbs/bullnose.jpg",
      "/kerbs/heel.jpg",
    ],
    parameters: [
      { label: "Profile", detail: "Half batter, flush, bullnose, heel, or another named section." },
      { label: "Dimensions", detail: "Length, width, and height in millimetres." },
      { label: "Finish", detail: "Shot blast, polished, honed, rubbed, acid etched, or smooth." },
      { label: "Quantity", detail: "Piece count or the length of edge, plus the delivery location." },
    ],
    suitableFor: ["Road edges", "Footpaths", "Driveways", "Parking", "Landscaping"],
    finishes: ["Shot blast", "Polished", "Honed", "Rubbed", "Acid etched", "Smooth"],
    profiles: [
      {
        name: "Half batter",
        detail: "A sloping face along the road side, used where the kerb has to turn vehicles back toward the carriageway.",
        image: "/kerbs/half-batter.jpg",
        sizes: standardKerbSizes,
      },
      {
        name: "Flush",
        detail: "A square section laid near the level of the adjoining surface, for crossovers and edges that vehicles cross.",
        image: "/kerbs/flush.jpg",
        sizes: standardKerbSizes,
      },
      {
        name: "Bullnose",
        detail: "A rounded top edge for footpaths, landscaping, and places where people walk close to the kerb.",
        image: "/kerbs/bullnose.jpg",
        sizes: standardKerbSizes,
      },
      {
        name: "Heel kerb",
        detail: "A lower section with a heel along the base, used as a lighter edge or where a shallow upstand is enough.",
        image: "/kerbs/heel.jpg",
        sizes: [
          { length: "600", width: "100", height: "200" },
          { length: "600", width: "75", height: "150" },
        ],
      },
    ],
    otherProfiles: [
      { name: "Splay", detail: "A sloped face with a gentler rise from the road than a half batter." },
      { name: "Upstand", detail: "A raised edge between the carriageway and the footpath." },
      { name: "Rollover", detail: "A low profile that vehicles can mount, typically at driveways." },
      { name: "Barrier", detail: "A higher containment section along the carriageway." },
      { name: "Bus", detail: "A boarding-edge profile used at bus stops." },
      { name: "Trief", detail: "A high-containment safety kerb where that section is specified." },
      { name: "Gutter", detail: "A kerb combined with a channel for water at the road edge." },
      { name: "Drain", detail: "A kerb used with edge drainage." },
      { name: "Quadrant", detail: "A quarter-circle unit for a tight corner." },
      { name: "Corner", detail: "A return unit where the edge changes direction." },
      { name: "Crescent", detail: "A curved unit for a radius in the edge." },
      { name: "Water dish channel", detail: "A shallow channel that carries surface water along the edge." },
    ],
  },
  {
    slug: "precast-u-drains",
    name: "Precast U-Drains",
    summary:
      "Precast drainage components for infrastructure and civil engineering projects.",
    description: [
      "U-drain enquiries are reviewed from the internal opening, unit length, wall thickness, and loading the drain must accept. These details come from the civil drawings or the engineer’s brief.",
      "Cover slabs, falls, and connection details should be included when they affect the unit. They are confirmed with the proposal, not taken from a generic schedule.",
    ],
    image: "photo-1477959858617-67f85cf4f1df",
    gallery: [
      "photo-1477959858617-67f85cf4f1df",
      "photo-1429497419816-9ca5cfb4571a",
      "photo-1531834685032-c34bf0d84c77",
    ],
    parameters: [
      { label: "Internal opening", detail: "Clear width and depth of the channel." },
      { label: "Length", detail: "Unit length or total run to be supplied." },
      { label: "Wall thickness", detail: "Thickness stated on the drawing or brief." },
      { label: "Loading requirements", detail: "The load case the drain must be reviewed against." },
    ],
    suitableFor: ["Infrastructure drainage", "Civil engineering works", "Site drainage"],
  },
  {
    slug: "rcc-precast-elements",
    name: "RCC Precast Elements",
    summary:
      "Reinforced concrete components designed around approved drawings and project requirements.",
    description: [
      "Reinforced precast elements are reviewed from approved drawings. Reinforcement, lifting points, and installation requirements need to be clear before feasibility and a quotation can be discussed.",
      "This category covers project elements rather than a fixed product list. If a drawing is still in progress, send the current issue and note what remains to be confirmed.",
    ],
    image: "photo-1541888946425-d81bb19240f5",
    gallery: [
      "photo-1541888946425-d81bb19240f5",
      "photo-1504307651254-35680f356dfd",
      "photo-1545558014-8692077e9b5c",
    ],
    parameters: [
      { label: "Drawings", detail: "Current approved or issued-for-review drawings." },
      { label: "Reinforcement", detail: "Bar arrangement and cover shown on the drawing." },
      { label: "Lifting", detail: "Lifting points, weight if known, and handling limits." },
      { label: "Installation requirements", detail: "How the element is to be placed and connected." },
    ],
    suitableFor: ["Drawing-led elements", "Structural components", "Project-specific units"],
  },
  {
    slug: "custom-concrete-products",
    name: "Custom Concrete Products",
    summary:
      "Project-specific concrete products based on dimensions, drawings, technical requirements, and feasibility.",
    description: [
      "Custom products are considered when the requirement does not sit in a standard category. Dimensions, drawings, technical requirements, and site constraints are reviewed together for feasibility.",
      "A custom enquiry can still result in a recommendation to use one of the principal categories. That decision is made during technical review and explained in the proposal.",
    ],
    image: "photo-1503387762-592deb58ef4e",
    gallery: [
      "photo-1503387762-592deb58ef4e",
      "photo-1565008447742-97f6f38c985c",
      "photo-1460317442991-0ec209397118",
    ],
    parameters: [
      { label: "Drawings", detail: "Sketches or drawings showing the required product." },
      { label: "Dimensions", detail: "Critical sizes, tolerances if stated, and quantity." },
      { label: "Technical requirements", detail: "Exposure, finish, reinforcement, or other stated needs." },
      { label: "Feasibility notes", detail: "Access, lifting, installation, and programme constraints." },
    ],
    suitableFor: ["Non-standard units", "Drawing-based requests", "Project-specific details"],
  },
]

export function getProduct(slug: string | undefined) {
  return products.find((product) => product.slug === slug)
}

export function relatedProducts(slug: string) {
  const index = products.findIndex((product) => product.slug === slug)
  if (index < 0) return products.slice(0, 3)
  return [1, 2, 3].map((step) => products[(index + step) % products.length])
}
