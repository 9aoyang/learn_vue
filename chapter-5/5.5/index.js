let app = new Vue({
  el: '#app',
  data: {
    list: [
      {
        id: 1,
        name: 'iPhone X',
        price: 8188,
        count: 1
      },
      {
        id: 2,
        name: 'iPad Pro',
        price: 5888,
        count: 1
      },
      {
        id: 3,
        name: 'MacBook Pro',
        price: 14188,
        count: 1
      }
    ]
  },
  computed: {
    totalPrice() {
      let total = 0
      for (const item of this.list) {
        total += item.price * item.count
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ',')
    }
  },
  methods: {
    handleReduce(index) {
      if (this.list[index].count === 1) return
      this.list[index].count--
    },
    handleAdd(index) {
      this.list[index].count++
    },
    handleRemove(index) {
      this.list.splice(index, 1)
    }
  },
})
