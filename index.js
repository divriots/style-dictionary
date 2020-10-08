import transform from "./lib/common/transforms";
import transformGroup from "./lib/common/transformGroups";
import format from "./lib/common/formats";
import action from "./lib/common/actions";
import registerTransform from './lib/register/transform'
import registerTransformGroup from './lib/register/transformGroup'
import registerFormat from './lib/register/format'
import registerAction from './lib/register/action'
import registerFilter from './lib/register/filter'

import exportPlatform from "./lib/exportPlatform";
import buildPlatform from "./lib/buildPlatform";
import buildAllPlatforms from "./lib/buildAllPlatforms";
import extend from "./lib/extend";

export default {
  properties: {},
  allProperties: [],
  options: {},

  transform,
  transformGroup,
  format,
  action,
  filter: {}, // we need to initialise the object, since we don't have built-in filters

  registerTransform,
  registerTransformGroup,
  registerFormat,
  registerAction,
  registerFilter,

  exportPlatform,
  buildPlatform,
  buildAllPlatforms,
  extend,
  emit: (platform, tree) => console.log("Emitting tree:", platform, tree)
};
