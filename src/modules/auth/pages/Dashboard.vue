<template>
  <div class="w-full min-h-screen">
    <div class="flex flex-col lg:flex-row justify-around items-stretch">
      <div class="flex-1 m-4">
        <AppCard>
          <apexchart
            height="100%"
            type="donut"
            :options="optionsDonut"
            :series="seriesDonuts"
          ></apexchart>
        </AppCard>
      </div>
      <div class="flex-1 m-4">
        <AppCard>
          <apexchart
            height="100%"
            type="donut"
            :options="optionsDonutParts"
            :series="seriesDonutsParts"
          ></apexchart>
        </AppCard>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row justify-around items-stretch">
      <div class="flex-1 m-4">
        <AppCard>
          <apexchart
            height="100%"
            type="bar"
            :options="optionsBars"
            :series="seriesBars"
          ></apexchart>
        </AppCard>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row justify-around items-stretch">
      <div class="flex-1 m-4">
        <AppCard :scroll="true">
          <h3>Last words</h3>
          <GridLayout :list="wordLastList(5)" />
        </AppCard>
      </div>
    </div>
  </div>
</template>

<script>
import GridLayout from "@/modules/words/components/GridLayout";
import { mapGetters } from "vuex";
import { MONTHS } from "@/helpers/constants";
export default {
  components: {
    GridLayout,
  },
  data: function () {
    return {
      optionsBars: {
        chart: {
          toolbar: {
            show: false,
          },
        },
        colors: ["#2563EB", "#059669"],
        tooltip: {
          enabled: false,
        },
        xaxis: {
          categories: [],
          labels: {
            style: {
              colors: [
                "white",
                "white",
                "white",
                "white",
                "white",
                "white",
                "white",
              ],
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: [
                "white",
                "white",
                "white",
                "white",
                "white",
                "white",
                "white",
              ],
              fontSize: "12px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
            },
          },
        },
        legend: {
          labels: {
            colors: [
              "white",
              "white",
              "white",
              "white",
              "white",
              "white",
              "white",
            ],
          },
        },
        title: {
          text: "Last 6 months activity",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "white",
          },
        },
        subtitle: {
          text: "All the words you saved the last months",
          style: {
            color: "white",
          },
        },
      },
      optionsDonut: {
        colors: ["#2563EB", "#059669"],
        labels: ["Normal words", "Marked words"],
        legend: {
          labels: {
            colors: [
              "white",
              "white",
              "white",
              "white",
              "white",
              "white",
              "white",
            ],
          },
        },
        title: {
          text: "Total Words",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "white",
          },
        },
        // responsive: [
        //   {
        //     breakpoint: 630,
        //     options: {
        //       plotOptions: {
        //         bar: {
        //           horizontal: false,
        //         },
        //       },
        //       legend: {
        //         position: "bottom",
        //       },
        //     },
        //   },
        // ],
      },
      optionsDonutParts: {
        legend: {
          labels: {
            colors: [
              "white",
              "white",
              "white",
              "white",
              "white",
              "white",
              "white",
            ],
          },
        },
        title: {
          text: "Parts of Speech",
          style: {
            fontSize: "14px",
            fontWeight: "bold",
            color: "white",
          },
        },
        // responsive: [
        //   {
        //     breakpoint: 630,
        //     options: {
        //       plotOptions: {
        //         bar: {
        //           horizontal: false,
        //         },
        //       },
        //       legend: {
        //         position: "bottom",
        //       },
        //     },
        //   },
        // ],
      },
    };
  },
  computed: {
    ...mapGetters("words", ["wordFullList", "wordListByParts", "wordLastList"]),
    seriesBars() {
      // Getting the possible years and the last 6 months, and find its words
      if (this.wordFullList.length === 0) {
        return [
          {
            name: "Normal words",
            data: [],
          },
          {
            name: "Marked words",
            data: [],
          },
        ];
      }
      const data = [];
      const dataFav = [];
      const possibleMonths = [];
      const today = new Date();
      const currentMonth = today.getMonth();
      const possibleYears =
        currentMonth < 5
          ? [today.getFullYear(), today.getFullYear() - 1]
          : [today.getFullYear()];
      possibleMonths.push(currentMonth);
      let month = currentMonth;
      for (let index = 1; index < 6; index++) {
        if (month === 0) {
          month = 11;
        } else {
          month--;
        }
        possibleMonths.push(month);
      }
      possibleMonths.forEach((mon) => {
        this.optionsBars.xaxis.categories.push(MONTHS[mon]);
        const wordsPerMonthAndYear = this.wordFullList.filter((word) => {
          const month = word.dateCreation.toDate().getMonth();
          const year = word.dateCreation.toDate().getFullYear();
          return mon === month && possibleYears.includes(year); // there never be the same month within two years
        });
        data.push(wordsPerMonthAndYear.length);
        dataFav.push(wordsPerMonthAndYear.filter((w) => w.favourite).length);
      });
      return [
        {
          name: "Normal words",
          data,
        },
        {
          name: "Marked words",
          data: dataFav,
        },
      ];
    },
    seriesDonuts() {
      return [
        this.wordFullList.filter((item) => !item.favourite).length,
        this.wordFullList.filter((item) => item.favourite).length,
      ];
    },
    seriesDonutsParts() {
      return Object.keys(this.wordListByParts).map((key) => {
        return this.wordListByParts[key];
      });
    },
  },
  watch: {
    wordListByParts: {
      handler: function (newVal) {
        this.optionsDonutParts = {
          ...this.optionsDonutParts,
          labels: [...Object.keys(newVal)],
        };
      },
      immediate: true,
    },
  },
};
</script>
