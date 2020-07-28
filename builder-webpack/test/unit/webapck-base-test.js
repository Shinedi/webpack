const assert = require('assert')
describe('webpack.base.js test case', () => {

    const baseConfig = require('../../lib/webpack.base.js');
    console.log(baseConfig)
    it('entry', ()=> {
        assert.equal(baseConfig.entry.index, '/Users/fubodi/learn_dirctory/webpack/webpack-test/builder-webpack/test/smoke/template/src/index/index.js');
        assert.equal(baseConfig.entry.search, '/Users/fubodi/learn_dirctory/webpack/webpack-test/builder-webpack/test/smoke/template/src/search/index.js');
    })
    it('output', ()=> {
        assert.equal(baseConfig.output.path, '/Users/fubodi/learn_dirctory/webpack/webpack-test/builder-webpack/test/smoke/template/dist');
    })
})