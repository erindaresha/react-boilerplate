/**
 *
 * UserChart
 *
 */

import React, { memo } from 'react';
import { Chart } from 'react-charts';
import axios from 'axios';

function UserChart() {
  axios.get(`https://covid19.mathdro.id/api/`).then(res => {
    const dataa = res;
    console.log('dataa');
    console.log(dataa);
  });

  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [
          ['First', 0],
          ['Second', 2],
          ['Third', 4],
          ['Forth', 2],
          ['Fifth', 7],
        ],
      },
    ],
    [],
  );

  const series = React.useMemo(
    () => ({
      type: 'bar',
    }),
    [],
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: 'ordinal', position: 'bottom' },
      { type: 'linear', position: 'left' },
    ],
    [],
  );

  return (
    <div
      style={{
        width: '100%',
        height: '200px',
      }}
    >
      <Chart data={data} series={series} axes={axes} />
    </div>
  );
}

UserChart.propTypes = {};

export default memo(UserChart);
