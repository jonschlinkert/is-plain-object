function parseFixtures(fixtures) {
  var output = { trues:[], falses:[] };
  fixtures.helpers.forEach(eval);
  fixtures.trues.forEach( function(_true) {
    output.trues.push( eval(_true) );
  });
  fixtures.falses.forEach( function(_false) {
    output.falses.push( eval(_false) );
  });
  return output;
}
