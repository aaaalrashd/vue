<!-- <template> -->

<!--
  display The current Temperature for 5 saudi cities with the Following Functionality:

1- Creat a table with three columns (city/max temperature/min temperature).
2- use a Public Weather API to get the values(you can search for and use any Weather API you see fit).
3- color code the temperature. use Red for 40+ degrees, Yellow for 30-39 and green for 29 and under.
4- add a button to delete a city from the Table.


hint: you can use a vue plug-in to create the table.
 for the API calls you can use the default vue functions or use Axios plug-in to preform them.

note: you should Style/CSS the page to be more presentable.
-->

<template>
  <h1 :style="{ 'text-align': 'center' }">
    Weather in 5 cites on Saudi Arabia
  </h1>
  <a-table
    class="table"
    :pagination="false"
    bordered
    :data-source="tempArray"
    :columns="columns"
  >
    <template #bodyCell="{ column, text, record }">
      <template v-if="column.dataIndex !== 'delete'">
        <div class="editable-cell">
          <div
            :class="[
              text > 40
                ? 'red'
                : text < 40 && text >= 30
                ? 'orange'
                : text < 30
                ? 'green'
                : '',
            ]"
          >
            {{ text }}
          </div>
        </div>
      </template>
      <template v-else>
        <a-popconfirm title="Sure to delete?" @confirm="onDelete(record.min)">
          <a>Delete</a>
        </a-popconfirm>
      </template>
    </template>
  </a-table>
</template>
<script>
import { defineComponent } from "vue";

import apiClient from "@/http-common";
const moonLanding = new Date(Date.now());
const cities = [
  { long: "46.7219", lat: "24.6877" },
  { long: "50.1924", lat: "26.2737" },
  { long: "39.1855", lat: "21.5400" },
  { long: "41.7700", lat: "27.5911" },
  { long: "42.5053", lat: "18.2164" },
];
export default defineComponent({
  setup() {
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Max Temp",
        dataIndex: "max",
        key: "max",
        customRender: (data) => {
          return <strong>{data.text}</strong>;
        },
      },
      {
        title: "Min Temp",
        dataIndex: "min",
        key: "min",
      },
      {
        title: "Actions",
        dataIndex: "delete",
        key: "delete",
      },
    ];

    return {
      columns,
    };
  },
  data() {
    return {
      tempArray: [],
      allWeatherData: [],
    };
  },
  watch: {
    init: {
      handler() {
        this.getList();
        this.onDelete();
      },
      immediate: true,
    },
  },
  methods: {
    onDelete(key) {
      this.tempArray = this.tempArray.filter((item) => item.min !== key);
    },
    getList() {
      cities.forEach((e, i = 0) => {
        apiClient
          .get(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${e.lat}&lon=${
              e.long
            }&appid=ec73c4dece7e2488999ff406615c65bb&dt=${moonLanding.getTime()}&exclude=hourly&units=metric`
          )
          .then((response) => {
            this.tempArray.push(response.data.daily[i].temp);
            this.allWeatherData.push(response.data);
            this.getName();
          })
          .catch((e) => {
            console.log(e);
          });
      });
    },
    getName() {
      cities.forEach((e) => {
        apiClient
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${e.lat}&lon=${e.long}&appid=ec73c4dece7e2488999ff406615c65bb`
          )
          .then((ress) => {
            this.allWeatherData.forEach((el, i = 0) => {
              if (el.lon == ress.data.coord.lon) {
                el.name = ress.data.name;
                this.tempArray[i].name = ress.data.name;
              }
            });
          });
      });
    },
  },
});
</script>

<style scoped>
.table {
  width: 50%;
  margin: auto;
}
.red {
  color: red;
}
.orange {
  color: #fdc12f;
}
.green {
  color: green;
}

@media screen and (max-width: 700px) {
  .table {
    width: unset;
  }
}
</style>
