export class LoggingService {
  logStausChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
