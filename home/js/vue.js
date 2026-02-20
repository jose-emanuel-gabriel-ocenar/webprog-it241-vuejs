const app = Vue.createApp({
  data() {
    return {
      name: "Jeggy Ocenar",
      role: "Aspiring System Administrator",

      about: "I am passionate about system infrastructure, server management, and building scalable architectures. I enjoy learning how systems work behind the scenes.",

      skills: [
        "Linux Basics",
        "Networking Fundamentals",
        "HTML & CSS",
        "JavaScript",
        "Vue.js"
      ],

      goal: "To become a skilled System Administrator and eventually move into System Architecture.",

      available: true
    }
  },

  computed: {
    statusButton() {
      return this.available ? "Set as Busy" : "Set as Available"
    }
  },

  methods: {
    toggleStatus() {
      this.available = !this.available
    }
  }
})

app.mount('#app')