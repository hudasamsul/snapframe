export interface CameraState {
  stream: MediaStream | null;
  isReady: boolean;
  isLoading: boolean;
  error: string | null;
}
