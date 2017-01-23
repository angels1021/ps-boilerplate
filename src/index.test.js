import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe("first test", () => {
  it("shoud pass", () => {
    //arrange

    //act

    //assert
    expect(true).to.equal(true);

  });
});

describe("intex.html tests", () => {
  it("shoud have h1 that says 'Users'", (done) => {
    //arrange
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, (err, window) => {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Users');
      done();
      window.close();
    });
    //act

    //assert
    expect(true).to.equal(true);

  });
});
