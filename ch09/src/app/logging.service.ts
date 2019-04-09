export class LoggingService {
  logStatusChange(status: string) {
    console.log(`A server state changed, new status: ${status}`);
  }
}
