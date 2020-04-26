import type { Config } from 'karma';
import type { KarmaEsmConfig } from '../karma-esm/src/esm-config';

declare module 'karma' {
  export interface Config {
    grep: string|RegExp;
    esm: KarmaEsmConfig
    snapshot: {
      update: boolean;
      prune: boolean;
      limitUnusedSnapshotsInWarning: number;
      pathResolver(basePath: string, suiteName: string): string;
    }
  }
}

export function createDefaultConfig(config: Config): Config
