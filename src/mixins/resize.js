export const resizeMixin = {
  methods: {
    changeIsOpen () {
      if (window.screen.width < 767) this.isOpen = false;
      else this.isOpen = true
    }
  },
  mounted() {
    this.changeIsOpen()
    window.addEventListener('resize', this.changeIsOpen)
  },
  unmounted() {
    window.removeEventListener('resize', this.changeIsOpen)
  },
};
