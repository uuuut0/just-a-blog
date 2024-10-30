<script setup>
import HubBlogCard from '@/components/pages/HubBlogCard.vue';
</script>
<template>
    <div class="container section-bloglist">

        <div class="row">


            <div class="col-12 col-lg-4 ">
                <div class="bloglist__side">
                    <ul class="row">
                        <div class="col-12 col-md-4 col-lg-12">
                            <li>所有文章</li>
                        </div>
                        <div class="col-6 col-md-4 col-lg-12">
                            <li>嘉賓食譜</li>
                        </div>
                        <div class="col-6 col-md-4 col-lg-12">
                            <li>季節食材</li>
                        </div>
                        <div class="col-6 col-md-4 col-lg-12">
                            <li>特色料理</li>
                        </div>
                        <div class="col-6 col-md-4 col-lg-12">
                            <li>其他文章</li>
                        </div>
                    </ul>
                </div>
            </div>
            <div class="col-12 col-lg-8">
                <div class="bloglist__title">
                    <h2>所有文章</h2>
                </div>
                <div class="bloglist__body">
                    <div class="row">
                        <div class="col-12 col-sm-10 col-md-6 hubcard-holder" v-for="n in 4">
                            <HubBlogCard />
                        </div>

                    </div>
                </div>
                <div class="bloglist__button">
                    <div class="loadmore-button">
                        <img src="@/assets/images/icons/load.svg" alt="" srcset="">
                    </div>
                    <div class="loadmore-holder">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

@keyframes iconHover {
    0% {
        transform: translateY(0);
    }

    80% {
        transform: translateY(9%);
    }

    100% {
        transform: translateY(12%);
    }
}

@keyframes iconActive {
    0% {
        background: #e7e7e7;
        transform: scaleX(1) translateY(0%);
    }

    20% {
        background: #e7e7e7;

        transform: scaleX(1.05) translateY(12%);
    }

    80% {
        transform: scaleX(1.02) translateY(10%);
    }
}

// section-title height: 讓側邊選項調整margin-top 和blogcard對齊高度
.section-bloglist {
    display: grid;
    margin-top: 20px;

    .bloglist__side {
        width: 100%;

        ul {
            li {
                width: 100%;
                background-color: #edecec;
                margin: 8px auto;
                text-align: center;
                padding: 10px unset;
                color: $softBlack--text;
            }
        }
    }

    .bloglist__title {
        color: $softBlack;
        width: 100%;
        height: 80px;
        display: flex;
        align-items: center;

        h2 {
            width: 100%;
            height: fit-content;
        }
    }

    .bloglist__body {
        //background-color: #726f6f;

        .row {
            //gap: 24px;
        }
    }

    .bloglist__button {
        position: relative;
        width: 100%;

        .loadmore-button {
            position: relative;
            @extend .disableSelect;
            background-color: $bluetint--bg;
            width: 30%;
            margin: 0 auto;
            position: relative;
            transition: .3s;
            cursor: pointer;

            &:hover {
                background-color: $bluetintGrey--bg;

                transform: translateY(10%);

                >img {
                    animation: iconHover .4s ease-in-out infinite alternate;

                }
            }

            &:active {
                //@extend .boxshadow-3;
                animation: iconActive .3s ease-in-out alternate;

                >img {
                    animation-play-state: paused;
                }
            }

            >img {
                display: block;
                margin: 0 auto;
                width: 40px;
                aspect-ratio: 1;
                animation: iconHover .6s ease-in-out infinite alternate;

            }

        }

        .loadmore-holder {
            position: relative;
            z-index: 1;
            @extend .boxshadow-3;
            background-color: $bgSubtle;
            height: 30px;
        }



    }

    @media screen and (min-width: map-get($screen-breakpoints, md)) {
        .bloglist__side {
            width: 100%;
            margin-top: 80px;

        }
    }

    @media screen and (min-width: map-get($screen-breakpoints, lg)) {
        margin-top: 80px;

        .bloglist-side {
            width: 100%;
            margin-top: 80px;

            ul {
                li {
                    width: 60%;


                }
            }
        }

        .bloglist-title {
            text-align: center;
        }
    }
}
</style>
