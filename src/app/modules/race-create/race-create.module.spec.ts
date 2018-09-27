import { RaceCreateModule } from './race-create.module';

describe('RaceCreateModule', () => {
  let raceCreateModule: RaceCreateModule;

  beforeEach(() => {
    raceCreateModule = new RaceCreateModule();
  });

  it('should create an instance', () => {
    expect(raceCreateModule).toBeTruthy();
  });
});
