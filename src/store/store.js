import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  increment() {
    this.count++;
  },
  incrementByTen() {
    this.count += 10;
  },
  incrementByRandomNumber() {
    this.count += Math.ceil(Math.random()*10);
  },
  reset() {
    this.count = 0;
  }
})