interface VKVideoPlayer {
  on(event: string, callback: () => void): void;
  mute(): void;
}

interface YMEventParams {
  placement?: string;
}

interface Window {
  VK?: { VideoPlayer: (iframe: HTMLIFrameElement) => VKVideoPlayer };
  ym?: (ymId: number, goal: string, eventName: string, eventParams: YMEventParams) => {};
}
