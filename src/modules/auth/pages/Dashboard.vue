<template>
  <div class="flex flex-col lg:flex-row justify-around items-stretch">
    <AppCard>
      <template slot="title">
        <h3 class="text-blue-600 dark:text-gray-200">Last Words by months</h3>
      </template>
      <apexchart
        height="100%"
        type="bar"
        :options="options"
        :series="seriesMonths"
      ></apexchart>
    </AppCard>
    <AppCard>
      <template slot="title">
        <h3 class="text-blue-600 dark:text-gray-200">Total Words</h3>
      </template>
      <apexchart
        type="donut"
        :options="optionsWords"
        :series="seriesWords"
      ></apexchart>
    </AppCard>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import { MONTHS } from "@/helpers/constants";
export default {
  data: function () {
    return {
      options: {
        xaxis: {
          categories: [],
        },
        responsive: [
          {
            breakpoint: 630,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false,
                },
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      optionsWords: {
        responsive: [
          {
            breakpoint: 630,
            options: {
              plotOptions: {
                bar: {
                  horizontal: false,
                },
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters("words", ["wordFullList"]),
    seriesMonths() {
      // TODO
      if (this.wordFullList.length === 0) return [];
      const data = [];
      const today = new Date();
      data.push(today.getMonth());
      let month = today.getMonth();
      for (let index = 1; index < 6; index++) {
        if (month === 0) {
          month = 11;
        } else {
          month--;
        }
        data.push(month);
      }
      console.log(data);
      // this.wordFullList.forEach((word) => {
      //   const month = word.dateCreation.toDate().getMonth();
      //   const year = word.dateCreation.toDate().getFullYear();
      //   console.log(month);
      //   console.log(year);
      // });
      return [{ data }];
    },
    seriesWords() {
      return [
        this.wordFullList.filter((item) => !item.favourite).length,
        this.wordFullList.filter((item) => item.favourite).length,
      ];
    },
  },
};
</script>
