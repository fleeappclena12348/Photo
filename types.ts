
export interface ImageState {
  originalUrl: string | null;
  processedUrl: string | null;
  isProcessing: boolean;
  error: string | null;
}
export interface GeminiProcessResult {
  imageUrl: string;
  text?: string;
}