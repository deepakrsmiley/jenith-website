export type GalleryCategory =
  | "products"
  | "construction"
  | "manufacturing"
  | "infrastructure"
  | "closeups"

export type GalleryItem = {
  id: string
  title: string
  image: string
  category: GalleryCategory
  aspect: "wide" | "tall" | "square"
  alt: string
}

export const galleryFilters: { id: "all" | GalleryCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "products", label: "Products" },
  { id: "construction", label: "Construction" },
  { id: "manufacturing", label: "Manufacturing" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "closeups", label: "Close-ups" },
]

export const heroFrames = [
  "/catalog/walls/installation.jpg",
  "/catalog/walls/retaining-trench.jpg",
  "/catalog/drains/u-drain-covers.jpg",
  "/catalog/tanks/water-tank-lift.jpg",
  "/catalog/walls/relief-panels.jpg",
  "/catalog/precast/solid-unit-yard.jpg",
  "/catalog/walls/panel-lift.jpg",
  "/catalog/precast/poles.jpg",
]

export const introFrames = [
  "/catalog/blocks/solid-block-side.jpg",
  "/catalog/kerbs/dish-unit.jpg",
  "/catalog/walls/panel-yard.jpg",
  "/catalog/precast/column-stubs.jpg",
  "/catalog/walls/stone-finish.jpg",
  "/catalog/chambers/inspection-chamber.jpg",
  "/catalog/precast/pedestals.jpg",
]

export const galleryItems: GalleryItem[] = [
  {
    id: "solid-block-side",
    title: "Solid concrete block",
    image: "/catalog/blocks/solid-block-side.jpg",
    category: "closeups",
    aspect: "wide",
    alt: "Grey solid concrete block with an open surface texture, shown from the side.",
  },
  {
    id: "solid-block-top",
    title: "Solid block, top face",
    image: "/catalog/blocks/solid-block-top.jpg",
    category: "products",
    aspect: "square",
    alt: "Top face of a grey solid concrete block.",
  },
  {
    id: "retaining-trench",
    title: "Retaining wall in place",
    image: "/catalog/walls/retaining-trench.jpg",
    category: "construction",
    aspect: "wide",
    alt: "L-shaped precast retaining wall panels set along an excavated site.",
  },
  {
    id: "retaining-run",
    title: "Retaining wall run",
    image: "/catalog/walls/retaining-run.jpg",
    category: "construction",
    aspect: "tall",
    alt: "A long run of precast L-shaped retaining wall panels on a prepared base.",
  },
  {
    id: "dish-unit",
    title: "Dish channel unit",
    image: "/catalog/kerbs/dish-unit.jpg",
    category: "products",
    aspect: "wide",
    alt: "Precast concrete water dish channel with a shallow dished top.",
  },
  {
    id: "water-tank-lift",
    title: "Precast water tank",
    image: "/catalog/tanks/water-tank-lift.jpg",
    category: "manufacturing",
    aspect: "wide",
    alt: "A rectangular precast concrete water tank suspended from lifting chains.",
  },
  {
    id: "u-drain-covers",
    title: "U-drain with cover slabs",
    image: "/catalog/drains/u-drain-covers.jpg",
    category: "infrastructure",
    aspect: "wide",
    alt: "Precast U-drain channel with patterned cover slabs over part of the opening.",
  },
  {
    id: "wall-installation",
    title: "Compound wall installation",
    image: "/catalog/walls/installation.jpg",
    category: "construction",
    aspect: "wide",
    alt: "Stone-face precast compound wall panels being set between columns.",
  },
  {
    id: "u-drain-stack",
    title: "Stacked precast U-drains",
    image: "/catalog/drains/u-drain-stack.jpg",
    category: "infrastructure",
    aspect: "tall",
    alt: "Precast concrete U-drain sections stacked in the yard.",
  },
  {
    id: "relief-panels",
    title: "Relief wall panels",
    image: "/catalog/walls/relief-panels.jpg",
    category: "products",
    aspect: "wide",
    alt: "Precast wall panels with a cast leaf relief, held between columns.",
  },
  {
    id: "precast-poles",
    title: "Precast poles",
    image: "/catalog/precast/poles.jpg",
    category: "infrastructure",
    aspect: "tall",
    alt: "Stacks of precast concrete poles in the yard.",
  },
  {
    id: "inspection-chamber",
    title: "Inspection chamber",
    image: "/catalog/chambers/inspection-chamber.jpg",
    category: "infrastructure",
    aspect: "tall",
    alt: "Square precast inspection chamber with wall openings.",
  },
  {
    id: "stone-finish",
    title: "Stone-face wall finish",
    image: "/catalog/walls/stone-finish.jpg",
    category: "closeups",
    aspect: "tall",
    alt: "Close view of a stone-face precast wall panel after installation.",
  },
  {
    id: "panel-yard",
    title: "Wall panels in the yard",
    image: "/catalog/walls/panel-yard.jpg",
    category: "manufacturing",
    aspect: "tall",
    alt: "Rows of precast compound-wall columns and panels stored in the yard.",
  },
  {
    id: "panel-lift",
    title: "Compound wall panel lift",
    image: "/catalog/walls/panel-lift.jpg",
    category: "construction",
    aspect: "wide",
    alt: "A stone-face compound wall panel suspended from a crane during installation.",
  },
  {
    id: "pedestals",
    title: "Precast pedestals",
    image: "/catalog/precast/pedestals.jpg",
    category: "products",
    aspect: "wide",
    alt: "Precast concrete pedestals with starter bars and side pockets.",
  },
  {
    id: "solid-unit-yard",
    title: "Solid precast unit",
    image: "/catalog/precast/solid-unit-yard.jpg",
    category: "manufacturing",
    aspect: "wide",
    alt: "Large solid precast concrete unit standing in the casting yard.",
  },
  {
    id: "column-stubs",
    title: "Precast column stubs",
    image: "/catalog/precast/column-stubs.jpg",
    category: "construction",
    aspect: "wide",
    alt: "Precast column stubs cast on foundation pads, with reinforcement above.",
  },
  {
    id: "solid-unit-bed",
    title: "Precast unit on the bed",
    image: "/catalog/precast/solid-unit-bed.jpg",
    category: "manufacturing",
    aspect: "wide",
    alt: "Large solid precast concrete unit beside the casting bed.",
  },
  {
    id: "dish-channel",
    title: "Water dish channel",
    image: "/catalog/kerbs/dish-channel.jpg",
    category: "products",
    aspect: "square",
    alt: "Precast water dish channel with a textured dished face.",
  },
  {
    id: "dish-load",
    title: "Dish channels for delivery",
    image: "/catalog/kerbs/dish-load.jpg",
    category: "products",
    aspect: "wide",
    alt: "Two precast dish channels loaded for delivery.",
  },
  {
    id: "half-batter",
    title: "Half batter kerb",
    image: "/catalog/kerbs/half-batter.jpg",
    category: "closeups",
    aspect: "square",
    alt: "Half batter precast kerb stone.",
  },
  {
    id: "bullnose-sheet",
    title: "Bullnose kerb",
    image: "/catalog/kerbs/bullnose-sheet.jpg",
    category: "products",
    aspect: "wide",
    alt: "Bullnose kerb stone profile.",
  },
  {
    id: "half-batter-sheet",
    title: "Half batter kerb profile",
    image: "/catalog/kerbs/half-batter-sheet.jpg",
    category: "products",
    aspect: "wide",
    alt: "Half batter kerb stone profile.",
  },
  {
    id: "flush-sheet",
    title: "Flush kerb",
    image: "/catalog/kerbs/flush-sheet.jpg",
    category: "products",
    aspect: "wide",
    alt: "Flush kerb stone profile.",
  },
]
