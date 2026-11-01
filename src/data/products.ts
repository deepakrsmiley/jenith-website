export type ProductParameter = {
  label: string
  detail: string
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
}

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
