<template>
  <div>

    <header>
      <nav>
        <h1>My Profile</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <section id="home" class="hero">
      <img :src="profileImage" alt="Profile Picture" />
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
    </section>

    <section id="about">
      <h2>About Me</h2>
      <p class="about-text">
        I am currently a student taking up Web Programming. I enjoy building clean
        and responsive websites while continuously improving my skills.
      </p>
    </section>

    <section id="skills">
      <h2>Skills</h2>
      <div class="grid">
        <div class="card" v-for="skill in skills" :key="skill.title">
          <h3>{{ skill.title }}</h3>
          <p>{{ skill.desc }}</p>
        </div>
      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p class="contact-text">
        Email: {{ email }} <br />
        GitHub:
        <a :href="github" target="_blank">{{ github }}</a>
      </p>
    </section>

    <footer>
      <p>
        2026 {{ name }} | WEBPROG Personalized Profile Website
      </p>
    </footer>

  </div>
</template>

<script src="./App.js"></script>
<style src="./App.css"></style>