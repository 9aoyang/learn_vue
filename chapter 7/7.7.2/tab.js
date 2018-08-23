Vue.component('tabs', {
  template: `
  <div class="tabs">
    <div class="tabs-bar">
      <div
        :class="tabCls(item)"
        v-for="(item, index) in navList"
        @click="handleChange(index)">
        {{ item.label }}
      </div>
    </div>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
  `,
  props: {
    value: {
      type: [String, Number]
    }
  },
<<<<<<< HEAD
  data: function () {
=======
  data: () => {
>>>>>>> ed37ced525b99f86d32575a69d2caf5aba1e5805
    return {
      currentValue: this.value,
      navList: []
    }
  },
  methods: {
    tabCls(item) {
      return [
        'tabs-tab',
        {
          'tabs-tab-active': item.name === this.currentValue
        }
      ]
    },
    getTabs() {
      return this.$children.filter(function (item) {
        return item.$options.name === 'pane'
      })
    },
    updateNav() {
      this.navList = []
      _this = this

<<<<<<< HEAD
      this.getTabs().forEach(function (pane, index) {
=======
      this.getTabs().forEach((pane, index) => {
>>>>>>> ed37ced525b99f86d32575a69d2caf5aba1e5805
        _this.navList.push({
          label: pane.label,
          name: pane.name || index
        })

        if (!pane.name) pane.name = index
        if (index === 0) {
          if (!_this.currentValue) {
            _this.currentValue = pane.name || index
          }
        }
      });

      this.updateStatus()
    },
    updateStatus() {
<<<<<<< HEAD
      var tabs = this.getTabs()
      var _this = this
      tabs.forEach(function (tab) {
        return tab.show = tab.name === _this.currentValue
      });
    },
    handleChange: function (index) {
      var nav = this.navList[index]
      var name = nav.name
=======
      let tabs = this.getTabs()
      let _this = this
      tabs.forEach(tab => {
        return tab.show = tab.name === _this.currentValue
      });
    },
    handleChange(index) {
      let nav = this.navList[index]
      let name = nav.name
>>>>>>> ed37ced525b99f86d32575a69d2caf5aba1e5805
      this.currentValue = name

      this.$emit('input', name)
      this.$emit('on-click', name)
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    },
    currentValue() {
      this.updateStatus()
    }
  }
})
