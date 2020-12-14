const assert = require('assert');
const Rooster = require('../index');

describe('Rooster',()=>{
  describe('.announceDawn',()=>{
    it('retuens a rooster call',()=>{

      //Setup

      const expected = 'cock-a-doodle-doo!';
      //exercise

      const outSound = Rooster.announceDawn();
      //verfiy

      assert.equal(outSound, expected);
      //teardown
    });
  });
  describe('.timeAtDawn',()=>{
    it('returns its argument as a string',()=>{

      //Setup

      const expected = 'string';
      const hour = 7;

      //exercise

      const out = Rooster.timeAtDawn(hour);
      const outType = typeof(out);

      //verfiy
      
      assert.ok(outType === expected);

      //teardown
    })
    it('throws an error if passed a number less than 0',()=>{

      //Setup

      const hour = -7;

      //exercise

      try{
      const out = Rooster.timeAtDawn(hour);}

      //verfiy

      catch(error){
      assert.ok(error.constructor,RangeError)}

      //teardown
    })
    it('throws an error if passed a number greater than 23',()=>{

      //Setup

      const hour = 27;

      //exercise

      try{
      const out = Rooster.timeAtDawn(hour);}

      //verfiy

      catch(error){
      assert.ok(error.constructor,RangeError)}

      //teardown
    })
  })
});