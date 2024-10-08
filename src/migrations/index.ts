import * as migration_20241008_130722 from './20241008_130722';

export const migrations = [
  {
    up: migration_20241008_130722.up,
    down: migration_20241008_130722.down,
    name: '20241008_130722'
  },
];
