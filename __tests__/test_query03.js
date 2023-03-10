import { expect, describe, it, jest } from '@jest/globals';
import './jest_extensions';

jest.setTimeout(500000);


// // test the complete result
// describe('Query 03', () => {
//   it('should return the correct results', async () => {
//     await expect('../query03.sql')
//       .toReturnRecords(['expected_results/query03.csv']);
//   });
// });





describe('Query 03', () => {
  it('should return the correct results', async () => {
    await expect('../query03.sql')
      .toReturnRecords(
      	['expected_results/query03_short.csv'],
      	{ limit: 5 },
      	);
  });

  it('should return the correct results in reverse', async () => {
    await expect('../query03.sql')
      .toReturnRecords(
      	['expected_results/query03_short_reverse.csv'],
      	{ orderBy: 'distance asc, stop_name asc, stop_geog asc, parcel_address asc, parcel_geog asc', limit: 5 },
  	  );
  });
});




