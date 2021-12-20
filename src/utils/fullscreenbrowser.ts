export function toggleFullscreen(fullscreen: boolean) {
  if (!fullscreen) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
