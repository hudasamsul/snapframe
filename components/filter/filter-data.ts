export interface FilterOption {
  id: string;
  name: string;
  previewClass: string;
}

export const FILTER_OPTIONS: FilterOption[] = [
  {
    id: "original",
    name: "Original",
    previewClass: "",
  },
  {
    id: "bw",
    name: "Black & White",
    previewClass: "grayscale",
  },
  {
    id: "warm",
    name: "Warm",
    previewClass: "sepia",
  },
  {
    id: "cool",
    name: "Cool",
    previewClass: "brightness-110",
  },
  {
    id: "dreamy",
    name: "Dreamy",
    previewClass: "blur-[1px]",
  },
  {
    id: "vintage",
    name: "Vintage",
    previewClass: "sepia brightness-95",
  },
];
