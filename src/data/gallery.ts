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

export const galleryItems: GalleryItem[] = [
  {
    id: "facade-study",
    title: "Concrete architectural facade",
    image: "photo-1487958449943-2429e8be8625",
    category: "products",
    aspect: "tall",
    alt: "Illustrative photograph of a pale concrete building facade.",
  },
  {
    id: "boundary-mass",
    title: "Boundary and wall massing",
    image: "photo-1493397212122-2b85dda8106b",
    category: "products",
    aspect: "wide",
    alt: "Illustrative photograph of a modern concrete architectural mass.",
  },
  {
    id: "masonry-volume",
    title: "Masonry volume",
    image: "photo-1518005020951-eccb494ad742",
    category: "products",
    aspect: "square",
    alt: "Illustrative photograph of a concrete building volume.",
  },
  {
    id: "external-paving",
    title: "External paving approach",
    image: "photo-1416331108676-a22ccb276e35",
    category: "products",
    aspect: "wide",
    alt: "Illustrative photograph of a house exterior and paved approach.",
  },
  {
    id: "site-work",
    title: "Active construction site",
    image: "photo-1541888946425-d81bb19240f5",
    category: "construction",
    aspect: "tall",
    alt: "Illustrative photograph of a construction site.",
  },
  {
    id: "site-crew",
    title: "Site coordination",
    image: "photo-1504307651254-35680f356dfd",
    category: "construction",
    aspect: "wide",
    alt: "Illustrative photograph of construction work in progress.",
  },
  {
    id: "structural-frame",
    title: "Structural frame",
    image: "photo-1545558014-8692077e9b5c",
    category: "construction",
    aspect: "square",
    alt: "Illustrative photograph of a building under construction.",
  },
  {
    id: "drawing-review",
    title: "Drawing review",
    image: "photo-1503387762-592deb58ef4e",
    category: "manufacturing",
    aspect: "wide",
    alt: "Illustrative photograph of construction drawings on a table.",
  },
  {
    id: "works-aerial",
    title: "Works and materials handling",
    image: "photo-1565008447742-97f6f38c985c",
    category: "manufacturing",
    aspect: "tall",
    alt: "Illustrative aerial photograph of a construction and materials area.",
  },
  {
    id: "precast-yard",
    title: "Industrial yard",
    image: "photo-1460317442991-0ec209397118",
    category: "manufacturing",
    aspect: "square",
    alt: "Illustrative photograph of an industrial concrete interior.",
  },
  {
    id: "city-infrastructure",
    title: "Urban infrastructure",
    image: "photo-1477959858617-67f85cf4f1df",
    category: "infrastructure",
    aspect: "wide",
    alt: "Illustrative photograph of a dense urban infrastructure setting.",
  },
  {
    id: "civil-concrete",
    title: "Civil concrete works",
    image: "photo-1429497419816-9ca5cfb4571a",
    category: "infrastructure",
    aspect: "tall",
    alt: "Illustrative photograph of a white concrete civic structure.",
  },
  {
    id: "lifting-context",
    title: "Lifting and site plant",
    image: "photo-1531834685032-c34bf0d84c77",
    category: "infrastructure",
    aspect: "wide",
    alt: "Illustrative photograph of tower cranes over a construction site.",
  },
  {
    id: "joint-detail",
    title: "Facade joint",
    image: "photo-1486325212027-8081e485255e",
    category: "closeups",
    aspect: "tall",
    alt: "Illustrative close photograph looking up a concrete and glass facade.",
  },
  {
    id: "column-rhythm",
    title: "Column rhythm",
    image: "photo-1448630360428-65456885c650",
    category: "closeups",
    aspect: "square",
    alt: "Illustrative photograph of repeated concrete columns.",
  },
  {
    id: "surface-plane",
    title: "Surface plane",
    image: "photo-1511818966892-d7d671e672a2",
    category: "closeups",
    aspect: "wide",
    alt: "Illustrative photograph of a finely detailed building facade.",
  },
]
