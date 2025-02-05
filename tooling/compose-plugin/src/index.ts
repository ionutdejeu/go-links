import { composePlugins } from './compose';
import { markOptional } from './optional';

/**
 * Composes all plugins together.
 *
 * @param plugins - all plugins to load and initialize
 * @param nextConfig - direct configuration for next.js (optional)
 */
const withPlugins = ([...plugins]: any[], nextConfig: Record<string, any> = {}) => (phase: string, { defaultConfig }: { defaultConfig: any }) => {
  const config = {
    ...defaultConfig,
    ...nextConfig,
  };

  return composePlugins(phase, plugins, config);
};

/**
 * Extends a base next config.
 *
 * @param baseConfig - basic configuration
 */
const extend = (baseConfig: (phase: string, nextOptions: any) => any) => ({
  withPlugins: (...params: any[]) => (phase: string, nextOptions: any) => {
    const processedBaseConfig = baseConfig(phase, nextOptions);

    return withPlugins([...params])(phase, {
      ...nextOptions,
      defaultConfig: processedBaseConfig,
    });
  },
});

// define exports
const e = withPlugins as any;
e.withPlugins = withPlugins;
e.optional = markOptional;
e.extend = extend;

export default e;
