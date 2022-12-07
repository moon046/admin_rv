import React, { useEffect, useRef, useState } from 'react';
import { Chart, registerables } from 'chart.js';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import axios from "axios";


const ChartLargeLineStock = () => {
  const [dataUser, setdataUser] = useState([]);
  const { themeValues } = useSelector((state) => state.settings);
  const chartContainer = useRef(null);
  const tooltipRef = useRef(null);
  const [countT11, setcountT11] = useState(0);
  const getMonth = (date) => {
    const temp = new Date(date);
    return Number(temp.getMonth() + 1);
  }

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;
  let count4 = 0;
  let count5 = 0;
  let count6 = 0;
  let count7 = 0;
  let count8 = 0;
  let count9 = 0;
  let count10 = 0;
  let count11 = 0;
  let count12 = 0;
let count=0;
  axios.get(`http://localhost:5000/api/users`).then(
    ({ data }) => {
      for (let i = 0; i < data.length; i += 1) {
        if ((getMonth(data[i].date)) === 1) {
          count1 += 1;
        
        }
        if ((getMonth(data[i].date)) === 2) {
          count2 += 1;
        }
        if (data[i] && getMonth(data[i].date) === 3
        ) {
          count3 += 1;

        }
        if (data[i] && getMonth(data[i].date) === 4
        ) {
          count4 += 1;

        }
        if (data[i] && getMonth(data[i].date) === 5
        ) {
          count5 += 1;

        }
        if (data[i] && getMonth(data[i].date) === 6
        ) {
          count6 += 1;

        }
        if (data[i] && getMonth(data[i].date) === 7
        ) {
          count7 += 1;

        }
        if (data[i] && getMonth(data[i].date) === 8
        ) {
          count8 += 1;

        }
        if (data[i] && getMonth(data[i].date) === 9
        ) {
          count9 += 1;

        }
        if (data[i] && getMonth(data[i].date) === 10
        ) {
          count10 += 1;

        }
        if (data[i] && getMonth(data[i].date) === 11
        ) {
          count11 += 1;

        }
        if (data[i] && getMonth(data[i].date) === 12
        ) {
          count12 += 1;

        }

      } count= count1+count2+count3+count4+count5+count6+count7+count8+count9+count10+count11+count12;
      console.log("ab",count);
      localStorage.setItem("T1", JSON.stringify(count1));
      localStorage.setItem("T2", JSON.stringify(count2));
      localStorage.setItem("T3", JSON.stringify(count3));
      localStorage.setItem("T4", JSON.stringify(count4));
      localStorage.setItem("T5", JSON.stringify(count5));
      localStorage.setItem("T6", JSON.stringify(count6));
      localStorage.setItem("T7", JSON.stringify(count7));
      localStorage.setItem("T8", JSON.stringify(count8));
      localStorage.setItem("T9", JSON.stringify(count9));
      localStorage.setItem("T10", JSON.stringify(count10));
      localStorage.setItem("T11", JSON.stringify(count11));
      localStorage.setItem("T12", JSON.stringify(count12));
      localStorage.setItem("sumCount", JSON.stringify(count));



    }
  )

  const SelectLastOnePlugin = React.useMemo(() => {
    return {
      id: 'selectLastOne',
      afterDraw: (chart) => {
        const { tooltip } = chart;
        if (tooltip.getActiveElements().length === 0) {
          const meta = chart.getDatasetMeta(0);
          const rect = chart.canvas.getBoundingClientRect();
          const point = meta.data[meta.data.length - 1].getCenterPoint();
          tooltip.setActiveElements(
            [
              {
                datasetIndex: 0,
                index: meta.data.length - 1,
              },
            ],
            {
              x: rect.left + point.x,
              y: rect.top + point.y,
            }
          );
        }
      },
    };
  }, []);

  const ExternalTooltip = React.useCallback(({ chart, tooltip }) => {
    let text = '';
    let value = '';
    let icon = '';
    const positionY = chart.canvas.offsetTop;
    const positionX = chart.canvas.offsetLeft;

    if (tooltipRef.current.opacity === 0) {
      tooltipRef.current.style.opacity = 0;
      return;
    }

    const left = `${positionX + tooltip.dataPoints[0].element.x - 75}px`;
    const top = `${positionY + tooltip.caretY}px`;

    if (tooltip.body) {
      const { dataIndex, datasetIndex } = tooltip.dataPoints[0];
      text = chart.data.labels[dataIndex];
      value = chart.data.datasets[datasetIndex].data[dataIndex];
      icon = chart.data.datasets[datasetIndex].icons[dataIndex];
    }

    tooltipRef.current.style.left = left;
    tooltipRef.current.style.top = top;

    ReactDOM.render(
      <>
        <div>
          <div className="cta-2 text-primary value d-inline-block align-middle sw-4">{value}</div>
          <CsLineIcons icon={icon} className="icon d-inline-block align-middle text-primary" size="15" />
        </div>
        <div className="text-small text-muted mb-1 text text-uppercase">{text}</div>
      </>,
      tooltipRef.current
    );
  }, []);
  const data = React.useMemo(() => {
    const result1 = JSON.parse(localStorage.getItem("T1"));
    const result2 = JSON.parse(localStorage.getItem("T2"));
    const result3 = JSON.parse(localStorage.getItem("T3"));
    const result4 = JSON.parse(localStorage.getItem("T4"));
    const result5 = JSON.parse(localStorage.getItem("T5"));
    const result6 = JSON.parse(localStorage.getItem("T6"));
    const result7 = JSON.parse(localStorage.getItem("T7"));
    const result8 = JSON.parse(localStorage.getItem("T8"));
    const result9 = JSON.parse(localStorage.getItem("T9"));
    const result10 = JSON.parse(localStorage.getItem("T10"));
    const result11 = JSON.parse(localStorage.getItem("T11"));
    const result12 = JSON.parse(localStorage.getItem("T12"));
    const result = JSON.parse(localStorage.getItem("sumCount"));
    // const sum= result1+result2+result3+result4+result5+result6+result7+result8+result9+result10;
 
    // localStorage.setItem("sum_nam",sum);
    console.log("á",result);
    return {

      labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", " Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
      datasets: [
        {
          label: 'Stock',
          data: [result1, result2, result3, result4, result5, result6, result7, result8, result9, result10, result11, result12],

          icons: ['arrow-top', (result2>result1)?'arrow-top':'arrow-bottom', (result3>result2)?'arrow-top':'arrow-bottom',(result4>result3)?'arrow-top':'arrow-bottom', (result5>result4)?'arrow-top':'arrow-bottom',
          (result6>result5)?'arrow-top':'arrow-bottom',
          (result7>result6)?'arrow-top':'arrow-bottom',
          (result8>result7)?'arrow-top':'arrow-bottom',
          (result9>result8)?'arrow-top':'arrow-bottom',
          (result10>result11)?'arrow-top':'arrow-bottom',
          (result11>result10)?'arrow-top':'arrow-bottom',
          (result12>result11)?'arrow-top':'arrow-bottom'
        ],
          borderColor: themeValues.secondary,
          pointBackgroundColor: themeValues.secondary,
          pointBorderColor: themeValues.secondary,
          pointHoverBackgroundColor: themeValues.foreground,
          pointHoverBorderColor: themeValues.secondary,
          borderWidth: 2,
          pointRadius: 2,
          pointBorderWidth: 2,
          pointHoverBorderWidth: 2,
          pointHoverRadius: 5,
          fill: false,
          cubicInterpolationMode: 'monotone',
        },
      ],
    };
  }, [themeValues]);
  const config = React.useMemo(() => {
    return {
      type: 'line',
      plugins: [SelectLastOnePlugin, ChartDataLabels],
      options: {
        layout: {
          padding: {
            left: 15,
            right: 15,
            top: 35,
            bottom: 0,
          },
        },
        showLine: true,
        interaction: {
          intersect: false,
          mode: 'index',
        },
        plugins: {
          crosshair: false,
          datalabels: {
            align: 'end',
            anchor: 'end',
            offset: 5,
            backgroundColor: 'transparent',
            borderRadius: parseInt(themeValues.borderRadiusMd, 10),
            borderWidth: 1,
            padding: 5,
            borderColor(context) {
              return context.dataset.borderColor;
            },
            color: themeValues.alternate,
            font: {
              size: 10,
            },
            formatter: Math.round,
          },
          tooltip: {
            enabled: false,
            external: ExternalTooltip,
          },
          legend: false,
          streaming: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            type: 'linear',
            grid: {
              display: false,
              drawBorder: false,
              drawTicks: false,
            },
            ticks: {
              display: false,
            },
          },
          x: {
            type: 'category',
            grid: {
              display: false,
              drawTicks: false,
              drawBorder: false,
            },
            ticks: { display: false },
          },
        },
      },
      data,
    };
  }, [data, themeValues, SelectLastOnePlugin, ExternalTooltip]);
  // const sum_nam1 = JSON.parse(localStorage.getItem("sum_nam"));
  useEffect(() => {
    let myChart = null;
    if (chartContainer && chartContainer.current) {
      Chart.register(...registerables);

      myChart = new Chart(chartContainer.current, config);
    }
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [config]);
  // const sum= result1+result2+result3+result4+result5+result6+result7+result8+result9+result10;
  const result = JSON.parse(localStorage.getItem("sumCount"));
  return (
    <>
      <Col xs="12" sm="auto" className="d-flex flex-column justify-content-between custom-tooltip pe-0 pe-sm-4">
        <p className="heading title mb-1">NGƯỜI DÙNG</p>
        <div ref={tooltipRef} />
        <Row>
          <Col xs="auto">
            <div className="cta-3 text-alternate">{result}</div>
            <div className="text-small text-muted mb-1">TRONG NĂM</div>
          </Col>
          {/* <Col>
            <div className="cta-3 text-alternate">{result}</div>
            <div className="text-small text-muted mb-1">Tháng này</div>
          </Col> */}
        </Row>
      </Col>
      <Col xs="12" className="col-sm sh-17">
        <canvas ref={chartContainer} />
      </Col>
    </>
  );
};

export default React.memo(ChartLargeLineStock);
