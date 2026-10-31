declare module 'swiper/element/css/navigation' {
  const styles: string;
  export default styles;
}

declare module 'swiper/element/css/a11y' {
  const styles: string;
  export default styles;
}

interface VKVideoPlayer {
  on(event: string, callback: () => void): void;
  mute(): void;
}

interface YMEventParams {
  placement?: string;
}

interface YandexMetrika {
  (
    ymId: number,
    command: 'init',
    options: {
      webvisor: boolean;
      clickmap: boolean;
      accurateTrackBounce: boolean;
      trackLinks: boolean;
    },
  ): void;
  (ymId: number, command: 'reachGoal', eventName: string, eventParams: YMEventParams): void;
  a?: unknown[][];
  l?: number;
}

interface Window {
  VK?: { VideoPlayer: (iframe: HTMLIFrameElement) => VKVideoPlayer };
  ym?: YandexMetrika;
}
