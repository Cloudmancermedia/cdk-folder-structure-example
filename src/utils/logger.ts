export function logInfo(message: string) {
  if (process.env.LOG_LEVEL === 'INFO') {
    console.log(`[INFO] ${message}`);
  }
}
