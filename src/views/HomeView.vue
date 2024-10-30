<script setup>
import { computed } from 'vue';
import { ref, onMounted } from 'vue';
import BlogCard from '@/components/pages/BlogCard.vue'
import HomeSectionEvent from '@/components/pages/HomeSectionEvent.vue'

const list_dist = ref(-1)
const scroll_dist = ref(-1)
const start_dist = ref(-1)
const blogdata = ref([])
const show_recommend = computed(() => {
  return scroll_dist.value > start_dist.value
})
// 顯示 側邊推薦文章的位置
const fixed_recommend = computed(() => {
  return scroll_dist.value > start_dist.value * 2
})
onMounted(() => {
  sidelist_handle()
  getArticlesApi('/homepage.json')

})

const sidelist_handle = () => {
  const sidelist = document.querySelector('.recommend-bloglist')

  window.onscroll = () => {
    scroll_dist.value = document.documentElement.scrollTop;
  }

  if (sidelist) {
    list_dist.value = document.documentElement.scrollTop;

  } else {
    console.log('error')
  }

  const startpos = document.querySelector('.startpos')
  start_dist.value = startpos.offsetTop / 2;

}

const getArticlesApi = async (url) => {
  const response = await fetch(url);
  const data = await response.json()
  console.log(data)
  blogdata.value = data.blogs
}
</script>

<template>
  <div class="recommend-bloglist desktop-only" :class="{ active: show_recommend, sticky: fixed_recommend }">
    <div class="bloglist_header">
      check this!!!{{ scroll_dist }}
    </div>
    <div class="bloglist_list">
      {{ show_recommend }}
    </div>
  </div>
  <div class="container-fluid section-headbanner">
    <div class="banner-group ">
      <div class="banner-group__txtwrap">
        <div class="txtwrap__title">
          <h1>小李的料理中心 <span> by UTL</span>
          </h1>
        </div>
        <div class="txtwrap__divider"></div>
        <div class="txtwrap__subtitle">
          <p>亞洲食材、特色料理食譜分享 </p>
        </div>

      </div>
      <div class="banner-group__imgwrap">
        <img src="https://picsum.photos/id/598/600/400" alt="">
      </div>
    </div>
  </div>
  <div class="container-fluid desktop-hidden">
    <div class="section-mobile-nav">
      <div class="mobile-nav-wrap-linklist row">
        <div class="col-6 col-sm-3">
          <div class="nav-link "><a href="#">文章觀點</a></div>
        </div>
        <div class="col-6 col-sm-3">
          <div class="nav-link "><a href="#">文章觀點</a></div>
        </div>
        <div class="col-6 col-sm-3">
          <div class="nav-link "><a href="#">文章觀點</a></div>
        </div>
        <div class="col-6 col-sm-3">
          <div class="nav-link "><a href="#">文章觀點</a></div>
        </div>
      </div>
    </div>
  </div>
  <!-- startpos class is for side-hover to scrollposition  -->
  <div class="container startpos container-no-gutters section-promo">
    <div class="row promo-row mobile-hidden">
      <div class="col-10">
        <div class="promo-banner"></div>
      </div>
    </div>
    <div class="row subscribe-row mobile-hidden">
      <div class="col-10">
        <div class="subscribe-banner">
          <h2 class="subscribe-banner__title">
            Welcome To Blog
          </h2>
          <p class="subscribe-banner__content">
            想隨時接收文章更新，訂閱電子報，不錯過任何一篇文章！
          </p>
          <div class="subscribe-banner__button">
            <p>訂閱</p>
            <p>Subscribe</p>
          </div>
        </div>
      </div>
    </div>
    <div class="deco-holder"></div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <h1 class="section-title open-sans-400 section-title-latest">
          LATEST ARTICLES
        </h1>
      </div>
    </div>
    <div class="row row-center blog-row ">
      <div class="col-12 col-md-11 col-lg-10 col-xl-4" v-for="n in blogdata ? blogdata : 3 ">
        <BlogCard :tag="n.tag" :title="n.title" :content="n.intro" />
      </div>
    </div>
  </div>



  <!-- <div class="container-fluid section-event">
    <div class="section-event__side">
      <div class="side__wrap">

        <div class="section-event__side__title">
          <h3>最新活動</h3>
          <h3>關注焦點</h3>
        </div>
        <div class="section-event__side__arrow">
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed">
            <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
          </svg>
        </div>
      </div>
    </div>
    <div class="section-event__carousell">
      <div class="carousell__wrap">

        <div class="holder-eventcard" v-for="n in 5">
          <EventCard></EventCard>
        </div>
      </div>
    </div>
  </div> -->

  <HomeSectionEvent />
</template>
<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';



.section-headbanner {
  background: $darkGrey--bg-grad;

  .banner-group {
    //max-width: map-get($map: $screen-breakpoints, $key: xl);
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

    .banner-group__txtwrap {
      position: absolute;
      bottom: 20px;
      padding: 5px;
      background-color: #eac74a;

      @media screen and (min-width: map-get($screen-breakpoints, md)) {
        padding: 20px;
        bottom: 40px;
      }

      .txtwrap__divider {
        background-color: #343333;
        height: 1px;
        width: 100%;
      }
    }

    .banner-group__imgwrap {
      opacity: 100%;
      height: 400px;
      margin: 0 auto;
      background-color: #34a08f;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    }
  }
}

.section-mobile-nav {
  width: 100%;
  position: relative;
  z-index: 2;
  background-color: #968e8e;

  .mobile-nav-wrap-linklist {
    //background-color: $brandSecondary-dark;
    padding: 20px 0;
    margin: 0 0px;
    position: relative;


    >div {
      transition: none;
      background-color: unset;
    }

    .nav-link {
      background-color: $bgSubtle-blue;
      margin: 5px auto;
      width: 80%;

      >a {
        text-align: center;
        display: block;
        color: $softBlack;
      }
    }
  }
}


.blog-row {
  position: relative;
  z-index: 1;

}


.section-promo {
  margin-top: 24px;
  z-index: 1;
  position: relative;

  .deco-holder {
    width: 200px;
    aspect-ratio: 1;
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(50%);
    z-index: 0;

    background: center / contain no-repeat;
    background-image: url('@/assets/images/bgdeco/swirl.svg');

    @media screen and (min-width: map-get($screen-breakpoints, sm)) {
      width: 400px;
      transform: translateY(60%);

    }
  }

  .promo-row {
    //position: relative;
    z-index: 2;

    .col-10 {
      position: relative;
      z-index: inherit;


      .promo-banner {
        aspect-ratio: 4/1;
        background: $orange--bg-grad;
      }
    }
  }

  .subscribe-row {
    .subscribe-banner {
      background-color: #fff;
      display: grid;
      grid-template-columns: 10fr 2fr;
      grid-template-rows: 1fr 1fr;
      align-items: center;
      position: relative;
      padding: 10px 0;
      padding-left: 24px;
      z-index: 1;

      &::before {
        content: "";
        width: 12px;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: $brandSecondary;
      }

      .subscribe-banner__title {
        grid-row: 1/2;
      }

      .subscribe-banner__content {
        grid-row: 2/3;
      }

      .subscribe-banner__button {
        // width: 20%;
        grid-row: 1/3;
        height: fit-content;

        border: 1px solid #000;
        background-color: #bf8c14;

        * {
          text-align: center;
        }
      }
    }
  }
}



// standalone- style -zone
* {
  transition: all .2s;
}

.row-center {
  justify-content: center;
}

.spaceholder {
  min-height: 1200px;
  width: 100%;
}


// left side-div fixed on screen
.recommend-bloglist {
  position: fixed;
  bottom: 20%;
  right: 0;
  z-index: 3;
  background: $brandSecondary;
  width: 0px;
  transition: all .4s;

  &.sticky {
    position: fixed;
    bottom: 80%;
  }

  &.active {
    width: 200px;
  }
}

// title : latest articles
.section-title-latest {
  padding-top: 64px;
}



// a section for other pages link :only show in mobile-device</style>
