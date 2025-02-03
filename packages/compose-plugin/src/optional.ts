export const OPTIONAL_SYMBOL = Symbol('__NEXT_COMPOSE_PLUGINS_OPTIONAL');

/**
 * Marks a plugin as optional
 *
 * @param plugin - function which requires a plugin
 */
export const markOptional = (plugin: Function): Function => {
  (plugin as any)[OPTIONAL_SYMBOL] = true; // eslint-disable-line no-param-reassign

  return plugin;
};

/**
 * Check if a plugin has been marked as optional before
 *
 * @param plugin - plugin to check
 */
export const isOptional = (plugin: Function): boolean => (plugin as any)[OPTIONAL_SYMBOL] === true;

/**
 * Resolve an optional plugin
 *
 * @param plugin - function which requires a plugin
 */
export const resolveOptionalPlugin = (plugin: Function): any => plugin();
