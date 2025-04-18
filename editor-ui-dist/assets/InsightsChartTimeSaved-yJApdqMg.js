import { d as defineComponent, q as computed, fa as dateformat, i1 as DATE_FORMAT_MASK, c as useI18n, e as createBlock, g as openBlock, m as unref, i5 as index, i6 as transformInsightsTimeSaved, i4 as INSIGHTS_UNIT_MAPPING } from "./index-Dz5zUm_l.js";
import { a as generateLineChartOptions, b as generateLinearGradient } from "./chartjs.utils-De32MFd9.js";
import { L as Line } from "./index-DMrV2C0d.js";
import "./InsightsSummary-DaAKRwWD.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsightsChartTimeSaved",
  props: {
    data: {},
    type: {}
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const chartOptions = computed(
      () => generateLineChartOptions({
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.dataset.label ?? "";
                const value = Number(context.parsed.y);
                return `${label} ${transformInsightsTimeSaved(value).toLocaleString("en-US")}${INSIGHTS_UNIT_MAPPING[props.type](value)}`;
              }
            }
          }
        },
        scales: {
          y: {
            ticks: {
              // eslint-disable-next-line id-denylist
              callback(tickValue) {
                return transformInsightsTimeSaved(Number(tickValue));
              }
            }
          }
        }
      })
    );
    const chartData = computed(() => {
      const labels = [];
      const data = [];
      for (const entry of props.data) {
        labels.push(dateformat(entry.date, DATE_FORMAT_MASK));
        data.push(entry.values.timeSaved);
      }
      return {
        labels,
        datasets: [
          {
            label: i18n.baseText("insights.banner.title.timeSaved"),
            data,
            fill: "origin",
            cubicInterpolationMode: "monotone",
            backgroundColor: (ctx) => generateLinearGradient(ctx.chart.ctx, 292),
            borderColor: "rgba(255, 64, 39, 1)"
          }
        ]
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Line), {
        data: chartData.value,
        options: chartOptions.value,
        plugins: [unref(index)]
      }, null, 8, ["data", "options", "plugins"]);
    };
  }
});
export {
  _sfc_main as default
};
