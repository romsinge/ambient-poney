import { RaceListModule } from './race-list.module';

describe('RaceListModule', () => {
  let raceListModule: RaceListModule;

  beforeEach(() => {
    raceListModule = new RaceListModule();
  });

  it('should create an instance', () => {
    expect(raceListModule).toBeTruthy();
  });
});
