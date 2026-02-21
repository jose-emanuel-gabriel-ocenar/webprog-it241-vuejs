import profile from './assets/profile.jpg'

export default {
  data() {
    return {
      name: 'Jose Emmanuel Gabriel M. Ocenar',
      description:
        'A student passionate about web development, design, and learning modern technologies.',
      email: 'jmocenar@student.apc.edu.ph',
      github: 'https://github.com/JegOcenar',
      profileImage: profile,
      skills: [
        {
          title: 'HTML',
          desc: 'Semantic structure, accessibility, and validation-compliant markup.'
        },
        {
          title: 'CSS',
          desc: 'Responsive layouts, Flexbox, Grid, animations, and color systems.'
        },
        {
          title: 'JavaScript',
          desc: 'Basic interactivity and DOM manipulation.'
        }
      ]
    }
  }
}