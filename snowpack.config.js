const scripts = {
  'mount:public': 'mount public --to /',
  'mount:src': 'mount src --to /_dist_',
};

module.exports = {
  scripts,
  plugins: ['@snowpack/plugin-babel', '@snowpack/plugin-dotenv'],
  devOptions: {},
  installOptions: {
    namedExports: ['recoil'],
  },
};