type LogLevel = 'debug' | 'info' | 'warn' | 'error';
const LOG_COLORS: Record<LogLevel, string> = {
  debug: '#888', info: '#4FC3F7', warn: '#FFB74D', error: '#EF5350',
};
const LEVEL_PRIORITY: Record<LogLevel, number> = {
  debug: 0, info: 1, warn: 2, error: 3,
};
const currentLevel: LogLevel = 'info';
function shouldLog(level: LogLevel): boolean {
  return LEVEL_PRIORITY[level] >= LEVEL_PRIORITY[currentLevel];
}
export const logger = {
  debug: (msg: string, ...args: unknown[]) => { if (shouldLog('debug')) console.log('%c[DEBUG] ' + msg, 'color:' + LOG_COLORS.debug, ...args); },
  info: (msg: string, ...args: unknown[]) => { if (shouldLog('info')) console.log('%c[INFO] ' + msg, 'color:' + LOG_COLORS.info, ...args); },
  warn: (msg: string, ...args: unknown[]) => { if (shouldLog('warn')) console.warn('%c[WARN] ' + msg, 'color:' + LOG_COLORS.warn, ...args); },
  error: (msg: string, ...args: unknown[]) => { if (shouldLog('error')) console.error('%c[ERROR] ' + msg, 'color:' + LOG_COLORS.error, ...args); },
};