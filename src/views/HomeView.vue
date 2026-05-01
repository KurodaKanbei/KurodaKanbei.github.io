<script setup lang="ts">
import { computed } from "vue"
import { archiveItems } from "@/data/archive"
import { awards } from "@/data/awards"
import { education } from "@/data/education"
import { experiences } from "@/data/experiences"
import { research } from "@/data/research"

const archiveGroups = computed(() => {
  const categories = [...new Set(archiveItems.map((item) => item.category))]
  return categories.map((category) => ({
    category,
    items: archiveItems.filter((item) => item.category === category),
  }))
})

const linkTarget = (href: string) => href.startsWith("http") ? "_blank" : undefined
</script>

<template>
  <section id="card-overview" class="profile-section">
    <v-row align="center" class="profile-grid">
      <v-col cols="12" md="3" class="photo-col">
        <v-img
          src="/photo.png"
          alt="Yuda Fan"
          class="profile-photo d-none d-md-block"
          cover
        />
        <v-avatar size="150" class="d-md-none profile-avatar">
          <v-img src="/photo.png" alt="Yuda Fan" cover />
        </v-avatar>
      </v-col>
      <v-col cols="12" md="9">
        <p class="eyebrow">AI Infrastructure / HPC / Computational Geometry</p>
        <h1>Yuda Fan | 范裕达</h1>
        <p class="subtitle">I drink water for what it is.</p>
        <div class="summary-copy">
          <p>
            I am a staff engineer on the AI Infra team at
            <a href="https://www.xiaohongshu.com/" target="_blank">Rednote Hilab</a>,
            working on hardware-friendly techniques for LLM inference throughput and latency.
          </p>
          <p>
            Previously, I worked on LLM inference and high performance computing at Huawei Hong Kong Research Center,
            and on high frequency trading systems at Citadel Securities. My systems experience spans Armv8 CPU,
            Intel AVX512 CPU, Nvidia GPU, Ascend NPU, AMD Alveo FPGA, and Habana HPU.
          </p>
          <p>
            I graduated from ETH Zurich with distinction in 2024 and received my B.Eng. from the ACM Honor Class
            at Shanghai Jiao Tong University.
          </p>
        </div>
        <div class="profile-links">
          <v-btn href="mailto:mistergalahad@gmail.com" prepend-icon="mdi-email-outline" variant="tonal">
            Email
          </v-btn>
          <v-btn href="/archive/resume.pdf" prepend-icon="mdi-file-account-outline" variant="tonal">
            Academic CV
          </v-btn>
          <v-btn href="/archive/cv_new.pdf" prepend-icon="mdi-file-document-outline" variant="tonal">
            Resume
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </section>

  <section id="card-experience" class="content-section">
    <div class="section-heading">
      <h2>Experience</h2>
    </div>
    <div class="timeline-list">
      <v-card
        v-for="experience in experiences"
        :key="experience.title"
        class="entry-card"
        variant="outlined"
      >
        <v-row align="center">
          <v-col cols="12" md="3" class="logo-col">
            <a :href="experience.link" target="_blank" class="logo-link">
              <v-img :src="experience.imgPath" :alt="experience.title" class="entry-logo" />
            </a>
          </v-col>
          <v-col cols="12" md="9">
            <div class="entry-header">
              <div>
                <a :href="experience.link" target="_blank" class="entry-title">{{ experience.title }}</a>
                <p class="entry-role">{{ experience.role }}</p>
              </div>
              <v-chip size="small" color="secondary" variant="tonal">{{ experience.time }}</v-chip>
            </div>
            <p class="entry-location">{{ experience.location }}</p>
            <ul class="compact-list">
              <li v-for="highlight in experience.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </section>

  <section id="card-education" class="content-section">
    <div class="section-heading">
      <h2>Education</h2>
    </div>
    <div class="timeline-list">
      <v-card
        v-for="item in education"
        :key="item.title"
        class="entry-card"
        variant="outlined"
      >
        <v-row align="center">
          <v-col cols="12" md="3" class="logo-col">
            <a :href="item.link" target="_blank" class="logo-link">
              <v-img :src="item.imgPath" :alt="item.title" class="entry-logo" />
            </a>
          </v-col>
          <v-col cols="12" md="9">
            <div class="entry-header">
              <div>
                <a :href="item.link" target="_blank" class="entry-title">{{ item.title }}</a>
                <p class="entry-role">{{ item.role }}</p>
              </div>
              <v-chip size="small" color="primary" variant="tonal">{{ item.time }}</v-chip>
            </div>
            <p class="entry-location">{{ item.location }}</p>
            <ul class="compact-list">
              <li v-for="highlight in item.highlights" :key="highlight">{{ highlight }}</li>
            </ul>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </section>

  <section id="card-research" class="content-section">
    <div class="section-heading">
      <h2>Research</h2>
    </div>
    <div class="timeline-list">
      <v-card
        v-for="item in research"
        :key="item.title"
        class="entry-card research-card"
        variant="outlined"
      >
        <v-row align="center">
          <v-col cols="12" md="3" class="logo-col">
            <v-img :src="item.imgPath" :alt="item.title" class="research-visual" />
          </v-col>
          <v-col cols="12" md="9">
            <div class="entry-header">
              <div>
                <h3 class="research-title">{{ item.title }}</h3>
                <p class="entry-role">{{ item.authors }}</p>
              </div>
              <v-chip size="small" color="accent" variant="tonal">{{ item.time }}</v-chip>
            </div>
            <p class="entry-location">{{ item.status }}</p>
            <p class="entry-description">{{ item.description }}</p>
            <div class="inline-links">
              <v-btn
                v-for="link in item.links"
                :key="link.href"
                :href="link.href"
                :target="linkTarget(link.href)"
                prepend-icon="mdi-file-pdf-box"
                variant="text"
                size="small"
              >
                {{ link.label }}
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </section>

  <section id="card-archive" class="content-section">
    <div class="section-heading">
      <h2>Archive</h2>
    </div>
    <div v-for="group in archiveGroups" :key="group.category" class="archive-group">
      <h3>{{ group.category }}</h3>
      <v-row>
        <v-col
          v-for="item in group.items"
          :key="item.name"
          cols="12"
          md="6"
        >
          <v-card class="archive-card" variant="outlined">
            <div class="archive-card-header">
              <h4>{{ item.name }}</h4>
              <v-chip size="x-small" variant="tonal">{{ item.time }}</v-chip>
            </div>
            <p>{{ item.description }}</p>
            <div class="inline-links">
              <v-btn
                v-for="link in item.links"
                :key="link.href"
                :href="link.href"
                :target="linkTarget(link.href)"
                prepend-icon="mdi-open-in-new"
                variant="text"
                size="small"
              >
                {{ link.label }}
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </section>

  <section id="card-awards" class="content-section">
    <div class="section-heading">
      <h2>Selected Honors</h2>
    </div>
    <v-list class="honor-list">
      <v-list-item v-for="award in awards" :key="award.name" class="honor-item">
        <template #prepend>
          <v-icon icon="mdi-medal-outline" color="accent" />
        </template>
        <v-list-item-title class="text-wrap">
          <strong>{{ award.name }}</strong>
        </v-list-item-title>
        <v-list-item-subtitle class="text-wrap">
          {{ award.year }}<span v-if="award.description">, {{ award.description }}</span>
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </section>

  <footer class="site-footer">
    <p>
      <v-icon icon="mdi-xml" size="small" />
      Built with Vue 3 and Vuetify. Source lives at
      <a href="https://github.com/KurodaKanbei/KurodaKanbei.github.io" target="_blank">GitHub</a>.
    </p>
  </footer>
</template>
