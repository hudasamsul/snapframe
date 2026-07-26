import { create } from "zustand";

interface SessionState {
  name: string;
  selectedFrame: string;
  selectedFilter: string;
  photo: string | null;
  livePhoto: string | null;
  downloadId: string | null;

  setName: (name: string) => void;
  setSelectedFrame: (frame: string) => void;
  setSelectedFilter: (filter: string) => void;
  setPhoto: (photo: string | null) => void;
  setLivePhoto: (photo: string | null) => void;
  setDownloadId: (id: string | null) => void;
  reset: () => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  name: "",
  selectedFrame: "",
  selectedFilter: "",
  photo: null,
  livePhoto: null,
  downloadId: null,
  setName: (name) =>
    set({
      name,
    }),

  setSelectedFrame: (selectedFrame) =>
    set({
      selectedFrame,
    }),

  setSelectedFilter: (selectedFilter) =>
    set({
      selectedFilter,
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
      selectedFrame: "",
      selectedFilter: "",
      photo: null,
      livePhoto: null,
      downloadId: null,
    }),
}));
