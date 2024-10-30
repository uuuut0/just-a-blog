<script setup>
import { ref } from 'vue';
// props(component setting)
const props = defineProps({
    imgURL: String,
    tag: String,
    title: String,
    content: String

})

// for image loading-anim
const loaded = ref(false)
const loadImgHandle = () => {
    loaded.value = true
}
const textLengthHandle = (text) => {
    const max = 50;
    let result = text
    if (text.length >= max) {
        result = text.substring(0, max - 1) + '...'
    }
    return result
}
</script>
<template>
    <div class="blog-card">
        <div class="blog-card__image" :class="{ 'pauseAnim': loaded }">
            <!-- :class toggle:
              'close'&'loaded' are for loading image 
              listener: @load
            -->
            <div class="image-filler" :class="{ 'close': loaded }">
            </div>
            <img :class="{ 'loaded': loaded }" loading="lazy" src="https://picsum.photos/id/1076/600/400" alt=""
                @load="loadImgHandle">
        </div>
        <div class="blog-card__head">
            <div class="blog-card__tag">
                <p class="tag-fontsize">{{ props.tag ? props.tag : '' }}</p>
            </div>
            <div class="blog-card__title">
                <h3>{{ props.title ? props.title : '' }}</h3>
            </div>
        </div>
        <div class="blog-card__body">
            <p>{{ textLengthHandle(props.content) }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';


@keyframes loading-grad {
    0% {
        background-position-x: -50%;
    }

    40% {
        background-position-x: 120%;
    }

    100% {
        background-position-x: 120%;
    }
}

.blog-card {
    @extend .boxshadow-2;

    width: 100%;
    background-color: $softWhite;
    margin: 20px 0;

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 4fr auto 2fr;
    max-height: 360px;
    aspect-ratio: 4/3;


    .blog-card__image {

        min-height: 56.25%;
        animation: loading-grad 1s infinite;
        // skeleton loading background
        background: linear-gradient(135deg, #e5e5e5 30%, #f0f0f0 35%, #f0f0f0 38%, #e5e5e5 45%);
        background-size: 200% 100%;
        background-position-x: -50%;

        &.pauseAnim {
            animation-play-state: paused;

        }

        >img {
            border-left: 45px solid #dea22a;

            display: block;
            width: 100%;
            height: 0%;
            object-fit: cover;
            opacity: 0%;
            transition: all .8s;
            transition-delay: .6s;

            &.loaded {
                height: 100%;
                opacity: 100%;
                border-left: none;

            }
        }

        .image-filler {

            &.close {
                height: 0;
            }
        }
    }

    .blog-card__head {
        padding: 0 2%;
        // margin-top for title overflow space
        margin-top: -40px;
        position: relative;

        .blog-card__tag {
            background: $orange--bg-grad;
            width: fit-content;
            margin-bottom: 5px;
            box-sizing: content-box;
            padding: 0 16px;
        }

        .blog-card__title {
            background-color: #fff;
            border: 1px solid #000;

            >h3 {
                line-height: 1.6;
                padding: 0 5px;

            }
        }
    }

    .blog-card__body {
        padding: 10px 4%;

        >p {
            line-height: 1.2;
        }
    }
}

@media screen and (min-width: map-get($screen-breakpoints, md)) {


    .blog-card {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto auto;
        aspect-ratio: 3/1;

        .blog-card__image {
            grid-row: 1/4;
            aspect-ratio: unset;
            min-width: unset;
            min-height: 100%;



            >img {
                //height: 100%;
            }



        }

        .blog-card__head {
            margin-top: 0px;
            grid-row: 2/3;
        }

        .blog-card__body {
            grid-row: 3/4;
        }
    }
}

@media screen and (min-width: map-get($screen-breakpoints, lg)) {
    .blog-card {
        .blog-card__image {
            min-height: 100%;

            img {
                opacity: .2;
            }
        }
    }
}

@media screen and (min-width: map-get($screen-breakpoints, xl)) {


    .blog-card {
        display: block;

        .blog-card__head {
            margin-top: -40px;
        }

        .blog-card__image {
            aspect-ratio: 16/9;
        }
    }

}
</style>