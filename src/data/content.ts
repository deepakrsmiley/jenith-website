export const benefits = [
  {
    number: "01",
    title: "Quality-focused processes",
    text: "Product requirements are reviewed before supply, pricing, and delivery are discussed.",
  },
  {
    number: "02",
    title: "Durable concrete solutions",
    text: "Precast and concrete products are considered for the exposure and use described in the enquiry.",
  },
  {
    number: "03",
    title: "Project-specific product requirements",
    text: "Dimensions, drawings, and application details are taken from the project rather than assumed.",
  },
  {
    number: "04",
    title: "Professional quotation and delivery coordination",
    text: "Pricing, scope, lead time, and transportation are set out before an order proceeds.",
  },
] as const

export const processSteps = [
  {
    number: "01",
    title: "Share Requirements",
    text: "Customers submit drawings, product details, quantity, and site location.",
  },
  {
    number: "02",
    title: "Technical Review",
    text: "Review feasibility, intended application, and specifications.",
  },
  {
    number: "03",
    title: "Commercial Proposal",
    text: "Discuss pricing, scope, lead time, and transportation.",
  },
  {
    number: "04",
    title: "Order Coordination",
    text: "Coordinate production or sourcing and delivery after agreement.",
  },
] as const

export const whyItems = [
  {
    title: "Quality-oriented approach",
    text: "Enquiries are read for application and detail before a product suggestion is made.",
    icon: "quality",
  },
  {
    title: "Engineering-led discussions",
    text: "Drawings, loading, reinforcement, and installation needs can be reviewed with the request.",
    icon: "engineering",
  },
  {
    title: "Project-specific requirements",
    text: "Products are quoted around the dimensions and conditions of the project at hand.",
    icon: "project",
  },
  {
    title: "Clear commercial communication",
    text: "Scope, pricing, lead time, and transportation are discussed in plain terms.",
    icon: "communication",
  },
] as const

export const faqs = [
  {
    id: "custom-dimensions",
    question: "Can products be reviewed for custom dimensions?",
    answer:
      "Yes. Share the dimensions, drawings, and intended application. Feasibility is reviewed before a quotation is prepared. What can be supplied depends on the product type and the information provided.",
  },
  {
    id: "quotation-information",
    question: "What information is required for a quotation?",
    answer:
      "A quotation needs the product category, quantity, delivery location, and the technical details that apply — for example panel size, block dimensions, paver thickness, or drawings for custom elements. A contact name, phone number, and email are also required so the review can be returned.",
  },
  {
    id: "delivery-installation",
    question: "Are delivery and installation available?",
    answer:
      "Delivery can be discussed as part of the commercial proposal, including lead time and transportation. Installation is not listed as a standard inclusion. Raise it in the enquiry so the scope can be confirmed for that project.",
  },
  {
    id: "engineering-drawings",
    question: "Can customers submit engineering drawings?",
    answer:
      "Yes. Drawings can be attached to the quotation form. They are used to review feasibility, reinforcement, lifting, and installation requirements where those items apply. In demo mode the file is not uploaded.",
  },
  {
    id: "specifications",
    question: "How are product specifications confirmed?",
    answer:
      "Specifications are confirmed during technical review against the drawings, application, and details you provide. This website does not publish fixed dimensions, strength grades, or certifications. Confirmed values are issued with the proposal for that enquiry.",
  },
  {
    id: "contact",
    question: "How can customers contact the company?",
    answer:
      "Use the quotation form on this website. Phone, WhatsApp, email, and office details will be published here once they have been confirmed. Until then, the form is the contact path.",
  },
] as const

export const applications = [
  {
    slug: "residential",
    title: "Residential construction",
    caption: "Boundary walls, masonry, and external paving around homes and housing plots.",
    image: "photo-1600585154340-be6161a56a0c",
  },
  {
    slug: "commercial",
    title: "Commercial buildings",
    caption: "Materials for commercial plots, compounds, and associated external works.",
    image: "photo-1486406146926-c627a92ad1ab",
  },
  {
    slug: "industrial",
    title: "Industrial facilities",
    caption: "Compound walls and concrete products for industrial premises and yards.",
    image: "photo-1565008447742-97f6f38c985c",
  },
  {
    slug: "infrastructure",
    title: "Infrastructure development",
    caption: "Precast elements and drainage components for civil and infrastructure work.",
    image: "photo-1531834685032-c34bf0d84c77",
  },
  {
    slug: "drainage",
    title: "Drainage and civil engineering",
    caption: "Precast U-drains and related components reviewed from civil drawings.",
    image: "photo-1429497419816-9ca5cfb4571a",
  },
  {
    slug: "landscaping",
    title: "Landscaping and external paving",
    caption: "Interlocking pavers for walkways, parking, and landscaped external spaces.",
    image: "photo-1600566753190-17f0baa2a6c3",
  },
] as const

export const audiences = [
  "Builders",
  "Contractors",
  "Architects",
  "Developers",
  "Industrial buyers",
] as const

export type TechnicalGroup = {
  id: string
  title: string
  summary: string
  productSlug: string
  parameters: { name: string; note: string }[]
}

export const technicalGroups: TechnicalGroup[] = [
  {
    id: "walls",
    title: "Compound walls",
    summary: "Panel-and-column boundary systems reviewed from the wall brief.",
    productSlug: "precast-compound-walls",
    parameters: [
      { name: "Panel dimensions", note: "Length, height, and thickness the boundary requires." },
      { name: "Height", note: "Overall wall height from finished level." },
      { name: "Post spacing", note: "Centre-to-centre spacing of columns or posts." },
      { name: "Foundation requirements", note: "Ground conditions and foundation notes from the project." },
    ],
  },
  {
    id: "drains",
    title: "U-drains",
    summary: "Precast drainage units reviewed from the civil opening and load case.",
    productSlug: "precast-u-drains",
    parameters: [
      { name: "Internal opening", note: "Clear width and depth of the channel." },
      { name: "Length", note: "Unit length or the total run required." },
      { name: "Wall thickness", note: "Thickness stated on the drawing or brief." },
      { name: "Loading requirements", note: "The load case the unit must be reviewed against." },
    ],
  },
  {
    id: "blocks",
    title: "Concrete blocks",
    summary: "Solid and hollow masonry quoted from the stated block specification.",
    productSlug: "concrete-blocks",
    parameters: [
      { name: "Dimensions", note: "Length, width, and height required." },
      { name: "Strength class", note: "The class specified for the application." },
      { name: "Density", note: "Any density requirement stated by the project." },
      { name: "Quantity", note: "Piece count or the area of wall to be built." },
    ],
  },
  {
    id: "pavers",
    title: "Interlocking pavers",
    summary: "Paving units reviewed for the surface and the traffic it will take.",
    productSlug: "interlocking-pavers",
    parameters: [
      { name: "Thickness", note: "Paver thickness required for the surface." },
      { name: "Shape", note: "The unit shape specified for the area." },
      { name: "Grade", note: "The grade named in the project specification." },
      { name: "Intended traffic", note: "Pedestrian, light vehicle, or heavier use." },
    ],
  },
  {
    id: "custom",
    title: "Custom precast elements",
    summary: "RCC elements and other custom products reviewed from drawings and handling needs.",
    productSlug: "custom-concrete-products",
    parameters: [
      { name: "Drawings", note: "Approved or issued-for-review drawings." },
      { name: "Reinforcement", note: "Bar arrangement and cover where the element is reinforced." },
      { name: "Lifting", note: "Lifting points and any known handling limits." },
      { name: "Installation requirements", note: "Placement, connection, and site constraints." },
    ],
  },
]

export const comparisonColumns = [
  { key: "walls", label: "Compound walls" },
  { key: "drains", label: "U-drains" },
  { key: "blocks", label: "Concrete blocks" },
  { key: "pavers", label: "Interlocking pavers" },
  { key: "custom", label: "RCC and custom" },
] as const

export type ComparisonKey = (typeof comparisonColumns)[number]["key"]

export const comparisonRows: { parameter: string; values: Record<ComparisonKey, string> }[] = [
  {
    parameter: "Information to submit",
    values: {
      walls: "Panel dimensions, height, post spacing, foundation requirements",
      drains: "Internal opening, length, wall thickness, loading requirements",
      blocks: "Dimensions, strength class, density, quantity",
      pavers: "Thickness, shape, grade, intended traffic",
      custom: "Drawings, reinforcement, lifting, installation requirements",
    },
  },
  {
    parameter: "Drawings",
    values: {
      walls: "Layout or sketch of the boundary where available",
      drains: "Civil section showing opening and load",
      blocks: "Specification or schedule of the masonry",
      pavers: "Paving layout and traffic note",
      custom: "Issued drawings for the element",
    },
  },
  {
    parameter: "Quantity and location",
    values: {
      walls: "Run of wall and delivery location",
      drains: "Number of units or length of run, plus site",
      blocks: "Quantity and delivery location",
      pavers: "Area or piece count, plus site",
      custom: "Piece count and delivery location",
    },
  },
  {
    parameter: "How specifications are confirmed",
    values: {
      walls: "During technical review for that enquiry",
      drains: "During technical review for that enquiry",
      blocks: "During technical review for that enquiry",
      pavers: "During technical review for that enquiry",
      custom: "During technical review for that enquiry",
    },
  },
]

export type TechnicalDocument = {
  title: string
  href: string
  format: string
}

/** Add a file here only when the document actually exists in /public or at a real URL. */
export const technicalDocuments: TechnicalDocument[] = []
