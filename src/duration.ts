export function formatDuration(seconds: number): string {
  if (seconds < 0) {
    throw new Error("Number cannot be negative");
  }

  const roundedSeconds = Math.round(seconds);
  const hours = Math.floor(roundedSeconds / 3600);
  const minutes = Math.floor((roundedSeconds % 3600) / 60);
  const secs = roundedSeconds % 60;

  let result = '';
  if (hours > 0) result += `${hours}h`;
  if (minutes > 0) result += `${minutes}m`;
  if (secs > 0 || result === '') result += `${secs}s`;

  return result;
}
