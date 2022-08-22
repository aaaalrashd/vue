<template>
  <section>
    <h1
      :style="{
        'text-align': 'center',
        'font-weight': 'bold',
        padding: '6rem 0 0 0',
      }"
    >
      STC Soltuons Assignmanet
    </h1>

    <h2 :style="{ 'text-align': 'center', 'font-weight': 'bold' }">
      Please Select whice page you need:
    </h2>

    <a-row class="rowFlex">
      <a-col :xs="22" :sm="22" :md="10" :lg="7" :xl="5">
        <router-link to="/weather">
          <a-card class="card" hoverable>
            <template #actions> </template>
            <img
              class="saudi-image"
              alt="example"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo6qKXTqHvvBWAAvYHoat2td1TI1Ywz-zlOQ&usqp=CAU"
            />
            <a-card-meta title="Weather in 5 cities on Suadi Araiba ">
            </a-card-meta>
          </a-card> </router-link
      ></a-col>

      <a-col
        :xs="22"
        :sm="22"
        :md="{ span: 10, offset: 0 }"
        :lg="{ span: 7, offset: 2 }"
        :xl="{ span: 5, offset: 2 }"
      >
        <router-link to="/sum">
          <a-card class="card" hoverable>
            <img
              class="sum-image"
              alt="example"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPinWZTrnX9Q9P8FuiR50n5ZYTsn0RD7z8A&usqp=CAU"
            />
            <a-card-meta title="Sum Numbers"> </a-card-meta>
          </a-card>
        </router-link>
      </a-col>
    </a-row>
  </section>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped>
.rowFlex {
  height: 30rem;
  align-content: center;
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 760px) {
  .rowFlex {
    height: 50rem;
  }
}
.saudi-image {
  padding-bottom: 2rem;
}

.sum-image {
  width: 225px;
  height: 257px;
  padding-bottom: 2rem;
}

.card {
  text-align: center;
}
</style>
