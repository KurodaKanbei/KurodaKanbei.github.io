<template>
  <v-app-bar class="site-nav d-none d-md-flex" :elevation="0" height="64">
    <v-container class="nav-inner">
      <v-btn
        to="/#card-overview"
        variant="text"
        class="name-button"
        :active="false"
      >
        <span>Yuda Fan</span>
      </v-btn>
      <v-spacer />
      <v-btn to="/#card-overview" prepend-icon="mdi-home-outline" variant="text" :active="false">
        Home
      </v-btn>
      <v-btn to="/#card-education" prepend-icon="mdi-school-outline" variant="text" :active="false">
        Education
      </v-btn>
      <v-btn to="/#card-experience" prepend-icon="mdi-briefcase-outline" variant="text" :active="false">
        Experience
      </v-btn>
      <v-btn to="/#card-research" prepend-icon="mdi-flask-outline" variant="text" :active="false">
        Research
      </v-btn>
      <v-btn to="/#card-archive" prepend-icon="mdi-archive-outline" variant="text" :active="false">
        Archive
      </v-btn>
      <v-btn to="/#card-awards" prepend-icon="mdi-medal-outline" variant="text" :active="false">
        Honors
      </v-btn>
    </v-container>
  </v-app-bar>

  <v-bottom-navigation class="d-md-none mobile-nav" grow :elevation="4">
    <v-btn to="/#card-overview" :active="false">
      <v-icon icon="mdi-home-outline" />
      <span>Home</span>
    </v-btn>
    <v-btn to="/#card-education" :active="false">
      <v-icon icon="mdi-school-outline" />
      <span>Edu</span>
    </v-btn>
    <v-btn to="/#card-experience" :active="false">
      <v-icon icon="mdi-briefcase-outline" />
      <span>Work</span>
    </v-btn>
    <v-btn to="/#card-research" :active="false">
      <v-icon icon="mdi-flask-outline" />
      <span>Research</span>
    </v-btn>
    <v-btn to="/#card-archive" :active="false">
      <v-icon icon="mdi-archive-outline" />
      <span>Archive</span>
    </v-btn>
  </v-bottom-navigation>
</template>
