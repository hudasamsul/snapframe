export interface FrameOption {
  id: string;
  name: string;
  thumbnail: string;
}

export const FRAME_OPTIONS: FrameOption[] = [
  {
    id: "classic",
    name: "Classic",
    thumbnail: "/frames/classic.webp",
  },
  {
    id: "minimal",
    name: "Minimal",
    thumbnail: "/frames/minimal.webp",
  },
  {
    id: "polaroid",
    name: "Polaroid",
    thumbnail: "/frames/polaroid.webp",
  },
  {
    id: "vintage",
    name: "Vintage",
    thumbnail: "/frames/vintage.webp",
  },
];
