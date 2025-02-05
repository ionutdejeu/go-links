/**
 * Check if the current phase is in the phase config and so a plugin should get applied
 *
 * @param currentPhase - current phase
 * @param phaseConfig - phase config in an array ([PHASE1, PHASE2])
 *                      or string (PHASE1 + PHASE2)
 */
export const isInCurrentPhase = (currentPhase: string, phaseConfig: string[] | string): boolean => {
    // phase config can be an array or string, so always convert it to a string
    const parsedPhaseConfig = Array.isArray(phaseConfig) ? phaseConfig.join('') : phaseConfig;
  
    // negate the check
    if (parsedPhaseConfig.charAt(0) === '!') {
      return parsedPhaseConfig.indexOf(currentPhase) < 0;
    }
  
    return parsedPhaseConfig.indexOf(currentPhase) >= 0;
  };
  
  /**
   * Merge the configuration of a plugin with specific values only applied on the current phase
   *
   * @param currentPhase - current phase
   * @param config - plugin configuration
   */
  export const mergePhaseConfiguration = (currentPhase: string, config: Record<string, any>): Record<string, any> => {
    let mergedConfig: Record<string, any> = {};
  
    Object.keys(config).forEach((key) => {
      if (key.startsWith('phase-') || key.startsWith('!phase-')) {
        if (isInCurrentPhase(currentPhase, key)) {
          mergedConfig = {
            ...mergedConfig,
            ...config[key],
          };
        }
      } else {
        mergedConfig[key] = config[key];
      }
    });
  
    return mergedConfig;
  };
  