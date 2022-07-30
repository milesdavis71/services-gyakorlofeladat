export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;
  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log(`Aktívból inaktív: ${this.activeToInactiveCounter}`);
  }
  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log(`Inaktívból aktív:  ${this.inactiveToActiveCounter}`);
  }
}
