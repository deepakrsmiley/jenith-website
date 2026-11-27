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
  { length: "600", width: "100 - 200", height: "450/420/400" },
  { length: "600", width: "100 - 200", height: "300/350" },
  { length: "915", width: "100 - 150", height: "305" },
  { length: "915", width: "100 - 150", height: "255/200/150" },
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
    image: "/catalog/walls/installation.jpg",
    gallery: [
      "/catalog/walls/installation.jpg",
      "/catalog/walls/stone-finish.jpg",
      "/catalog/walls/panel-yard.jpg",
      "/catalog/walls/panel-lift.jpg",
      "/catalog/walls/relief-panels.jpg",
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
      "Solid blocks in 4 inch, 6 inch, and 8 inch widths, plus hollow blocks quoted to the project specification.",
    description: [
      "Solid blocks are offered in three widths. Each size below is length × width × height in millimetres. The inch name is the width.",
      "Hollow blocks are quoted against the dimensions, strength class, density, and quantity stated for the project. Strength class and density are confirmed with the proposal.",
    ],
    image: "/catalog/blocks/solid-block-side.jpg",
    gallery: ["/catalog/blocks/solid-block-side.jpg", "/catalog/blocks/solid-block-top.jpg"],
    parameters: [
      { label: "Dimensions", detail: "Length, width, and height required." },
      { label: "Strength class", detail: "The class specified for the application." },
      { label: "Density", detail: "Any density requirement stated by the project." },
      { label: "Quantity", detail: "Number of blocks, or the wall area to be covered." },
    ],
    suitableFor: ["Structural masonry", "Non-structural walls", "Partition work"],
    profiles: [
      {
        name: "Solid blocks",
        detail: "The three solid sizes commonly requested. Hollow sizes are sent with the enquiry.",
        sizes: [
          { length: "400", width: "100 (4 inch)", height: "200" },
          { length: "400", width: "150 (6 inch)", height: "200" },
          { length: "400", width: "200 (8 inch)", height: "200" },
        ],
      },
    ],
  },
  {
    slug: "interlocking-pavers",
    name: "Interlocking Pavers",
    summary:
      "Rubber-mould, hydraulic, grass, and flexi pavers for walkways, parking, landscaping, and external spaces.",
    description: [
      "Name the paver type, the thickness, and the traffic the surface must take. Colour, laying pattern, and edge conditions can be included when they are already decided.",
      "Rubber-mould pavers are the standard interlocking unit. Hydraulic pavers are for heavier pressing and tighter tolerances. Grass pavers leave openings for turf. Flexi pavers follow a curve or an irregular edge.",
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
    otherProfiles: [
      { name: "Rubber mould pavers", detail: "Standard interlocking units cast in a rubber mould." },
      { name: "Hydraulic pavers", detail: "Hydraulically pressed units for surfaces that need a tighter finish." },
      { name: "Grass pavers", detail: "Open units that let grass grow through the paved surface." },
      { name: "Flexi pavers", detail: "Units that follow a curve or an irregular edge." },
    ],
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
      "/catalog/kerbs/half-batter.jpg",
      "/kerbs/bullnose.jpg",
      "/kerbs/flush.jpg",
      "/catalog/kerbs/dish-unit.jpg",
      "/catalog/kerbs/dish-channel.jpg",
      "/kerbs/heel.jpg",
      "/catalog/kerbs/dish-load.jpg",
      "/catalog/kerbs/half-batter-sheet.jpg",
      "/catalog/kerbs/bullnose-sheet.jpg",
      "/catalog/kerbs/flush-sheet.jpg",
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
        image: "/catalog/kerbs/half-batter.jpg",
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
      {
        name: "Water dish channel",
        detail: "A shallow dished channel that carries surface water along an edge.",
        image: "/catalog/kerbs/dish-unit.jpg",
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
    image: "/catalog/drains/u-drain-covers.jpg",
    gallery: ["/catalog/drains/u-drain-covers.jpg", "/catalog/drains/u-drain-stack.jpg"],
    parameters: [
      { label: "Internal opening", detail: "Clear width and depth of the channel." },
      { label: "Length", detail: "Unit length or total run to be supplied." },
      { label: "Wall thickness", detail: "Thickness stated on the drawing or brief." },
      { label: "Loading requirements", detail: "The load case the drain must be reviewed against." },
    ],
    suitableFor: ["Infrastructure drainage", "Civil engineering works", "Site drainage"],
  },
  {
    slug: "chambers",
    name: "Chambers",
    summary: "Precast inspection and junction chambers for drainage and service lines.",
    description: [
      "Chambers are quoted from the internal size, depth, wall thickness, and the pipes or ducts that enter the unit. Send the section and the cover arrangement with the enquiry.",
      "Opening positions, benching, and step irons are taken from the drawing. They are confirmed with the proposal.",
    ],
    image: "/catalog/chambers/inspection-chamber.jpg",
    gallery: ["/catalog/chambers/inspection-chamber.jpg"],
    parameters: [
      { label: "Internal size", detail: "Clear length, width, and depth of the chamber." },
      { label: "Wall thickness", detail: "Thickness stated on the drawing or brief." },
      { label: "Openings", detail: "Pipe or duct positions, diameters, and invert levels." },
      { label: "Cover", detail: "Cover slab or frame loading the chamber must accept." },
    ],
    suitableFor: ["Drainage networks", "Service ducts", "Inspection access"],
  },
  {
    slug: "water-tanks",
    name: "Water Tanks",
    summary: "Precast concrete tanks for water storage, reviewed from capacity and the site drawing.",
    description: [
      "Tank enquiries need the capacity or internal dimensions, whether the tank is above or below ground, and the inlet, outlet, and overflow positions.",
      "Wall thickness, base, cover, and any divider walls are taken from the drawing. Waterproofing and exposure are confirmed during review.",
    ],
    image: "/catalog/tanks/water-tank-lift.jpg",
    gallery: ["/catalog/tanks/water-tank-lift.jpg"],
    parameters: [
      { label: "Capacity", detail: "Stored volume, or the internal dimensions that set it." },
      { label: "Arrangement", detail: "Above ground or below ground, and any divider walls." },
      { label: "Connections", detail: "Inlet, outlet, overflow, and access positions." },
      { label: "Cover", detail: "Open top, cover slab, or access opening." },
    ],
    suitableFor: ["Water storage", "Sites and compounds", "Utility reserves"],
  },
  {
    slug: "retaining-walls",
    name: "Retaining Walls",
    summary: "Precast retaining-wall units for changes in ground level.",
    description: [
      "Retaining walls are reviewed from the retained height, the surcharge behind the wall, and the ground conditions. Panel length and thickness come from the drawing.",
      "Drainage behind the wall, the toe or base, and how units connect should be included when they are already decided.",
    ],
    image: "/catalog/walls/retaining-trench.jpg",
    gallery: ["/catalog/walls/retaining-trench.jpg", "/catalog/walls/retaining-run.jpg"],
    parameters: [
      { label: "Retained height", detail: "Height of soil or fill the wall has to hold." },
      { label: "Surcharge", detail: "Load on the ground behind the wall, if known." },
      { label: "Unit size", detail: "Panel length, height, and thickness on the drawing." },
      { label: "Foundation", detail: "Base, toe, and ground conditions from the project." },
    ],
    suitableFor: ["Level changes", "Plot edges", "Road and site cuttings"],
  },
  {
    slug: "crash-barriers",
    name: "Crash Barriers",
    summary: "Precast concrete barriers for separating traffic and protecting work areas.",
    description: [
      "Crash-barrier enquiries need the profile, unit length, and the road or site condition the barrier is for. A named containment level or drawing is the usual starting point.",
      "End units, connections, and any reflective or joint details should be noted when the layout is already known.",
    ],
    image: "photo-1531834685032-c34bf0d84c77",
    gallery: ["photo-1531834685032-c34bf0d84c77", "photo-1477959858617-67f85cf4f1df", "photo-1541888946425-d81bb19240f5"],
    parameters: [
      { label: "Profile", detail: "The barrier section named on the drawing or specification." },
      { label: "Length", detail: "Unit length and the total run to be supplied." },
      { label: "Containment", detail: "Any containment or performance level the project states." },
      { label: "Connections", detail: "Joint, end terminal, and fixing details if already decided." },
    ],
    suitableFor: ["Roads", "Work zones", "Site separation"],
  },
  {
    slug: "box-culverts",
    name: "Box Culverts",
    summary: "Precast box culverts for crossings, waterways, and buried service routes.",
    description: [
      "Box culverts are quoted from the internal opening, the wall and slab thickness, the unit length, and the earth and traffic load over the unit.",
      "Invert level, skew, and how units join are taken from the civil drawing. Cover slabs are a separate product when the opening is not a closed box.",
    ],
    image: "photo-1504307651254-35680f356dfd",
    gallery: ["photo-1504307651254-35680f356dfd", "photo-1541888946425-d81bb19240f5", "photo-1429497419816-9ca5cfb4571a"],
    parameters: [
      { label: "Internal opening", detail: "Clear width and height of the box." },
      { label: "Thickness", detail: "Wall, roof, and base thickness on the drawing." },
      { label: "Length", detail: "Unit length or the total crossing length." },
      { label: "Loading", detail: "Fill depth and the traffic or other load over the culvert." },
    ],
    suitableFor: ["Road crossings", "Waterways", "Buried services"],
  },
  {
    slug: "cover-slabs",
    name: "Cover Slabs",
    summary: "Precast cover slabs for drains, chambers, culverts, and service openings.",
    description: [
      "Cover slabs are reviewed from the clear opening they span, the slab thickness, and the load the slab must accept. Bearing on the supporting walls should be shown on the drawing.",
      "Lifting points and any access opening in the slab are confirmed with the proposal.",
    ],
    image: "/catalog/drains/u-drain-covers.jpg",
    gallery: ["/catalog/drains/u-drain-covers.jpg"],
    parameters: [
      { label: "Opening", detail: "Clear span and width the slab has to cover." },
      { label: "Thickness", detail: "Slab thickness stated on the drawing." },
      { label: "Loading", detail: "Pedestrian, vehicle, or other load on the slab." },
      { label: "Bearing and lifting", detail: "Bearing length, lifting points, and any access opening." },
    ],
    suitableFor: ["U-drains", "Chambers", "Culverts and ducts"],
  },
  {
    slug: "rcc-precast-elements",
    name: "RCC Precast Elements",
    summary:
      "Reinforced concrete components designed around approved drawings and project requirements.",
    description: [
      "Reinforced precast elements are reviewed from approved drawings. The photographs show the kind of unit this category covers: column stubs on foundation pads, pedestals with starter bars, and large solid units with lifting points.",
      "This category covers project elements rather than a fixed product list. If a drawing is still in progress, send the current issue and note what remains to be confirmed.",
    ],
    image: "/catalog/precast/solid-unit-yard.jpg",
    gallery: [
      "/catalog/precast/solid-unit-yard.jpg",
      "/catalog/precast/column-stubs.jpg",
      "/catalog/precast/pedestals.jpg",
      "/catalog/precast/solid-unit-bed.jpg",
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
    slug: "precast-poles",
    name: "Precast Poles",
    summary: "Precast concrete poles for fencing lines, yards, and site services.",
    description: [
      "Pole enquiries are reviewed from the section, the overall length, and the hole or fitting positions the line needs. The yard photograph shows the I-section poles held in stock.",
      "Spacing, foundation, and any fence or service loading are confirmed from the drawing during technical review.",
    ],
    image: "/catalog/precast/poles.jpg",
    gallery: ["/catalog/precast/poles.jpg"],
    parameters: [
      { label: "Section", detail: "The pole profile shown on the drawing." },
      { label: "Length", detail: "Overall length of each pole." },
      { label: "Fittings", detail: "Hole positions, brackets, or other fittings the line requires." },
      { label: "Quantity", detail: "Number of poles and the delivery location." },
    ],
    suitableFor: ["Fencing lines", "Yard boundaries", "Site services"],
  },
  {
    slug: "custom-concrete-products",
    name: "Custom Concrete Products",
    summary:
      "Project-specific concrete products based on dimensions, drawings, technical requirements, and feasibility.",
    description: [
      "Custom products are considered when the requirement does not sit in a standard category. Relief patterns and stone-face panels are typical of the architectural finishes reviewed here. Dimensions, drawings, technical requirements, and site constraints are taken together for feasibility.",
      "A custom enquiry can still result in a recommendation to use one of the principal categories. That decision is made during technical review and explained in the proposal.",
    ],
    image: "/catalog/walls/relief-panels.jpg",
    gallery: ["/catalog/walls/relief-panels.jpg", "/catalog/walls/stone-finish.jpg"],
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
