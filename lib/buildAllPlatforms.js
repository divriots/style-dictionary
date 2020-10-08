export default function() {
  Object.keys(this.options.platforms).forEach(platform =>
    this.buildPlatform(platform)
  );
  return this;
}
