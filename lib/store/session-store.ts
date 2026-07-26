import { create } from "zustand";

interface SessionState {
  name: string;
  frame: string;
  filter: string;

  photo: string | null;
  livePhoto: string | null;

  downloadId: string | null;

  setName: (name: string) => void;
  setFrame: (frame: string) => void;
  setFilter: (filter: string) => void;

  setPhoto: (photo: string | null) => void;
  setLivePhoto: (photo: string | null) => void;

  setDownloadId: (id: string | null) => void;

  reset: () => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  name: "",
  frame: "",
  filter: "",

  photo: null,
  livePhoto: null,

  downloadId: null,

  setName: (name) =>
    set({
      name,
    }),

  setFrame: (frame) =>
    set({
      frame,
    }),

  setFilter: (filter) =>
    set({
      filter,
    }),

  setPhoto: (photo) =>
    set({
      photo,
    }),

  setLivePhoto: (livePhoto) =>
    set({
      livePhoto,
    }),

  setDownloadId: (downloadId) =>
    set({
      downloadId,
    }),

  reset: () =>
    set({
      name: "",
      frame: "",
      filter: "",
      photo: null,
      livePhoto: null,
      downloadId: null,
    }),
}));
