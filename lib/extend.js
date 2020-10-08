import deepExtend from "./utils/deepExtend";
export default function(options) {
  const to_ret = deepExtend([{}, this, { options: options }, options]);
  return to_ret;
}
