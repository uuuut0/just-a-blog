<script setup>
import EventCard from '@/components/pages/EventCard.vue'
import { onMounted, ref } from 'vue';
const widthcard = ref(-1)
const carouselscroll = ref(-1)
const isScrolling = ref(false)
let root, wrapbelt;
const carouselHandle = () => {
    const card = document.querySelector('.holder-eventcard')
    if (card) {
        widthcard.value = card.clientWidth
    }
}
const carouselClick = (action) => {


    const carousel = document.querySelector('.section-event__carousell')
    const scrollStep = widthcard.value * 1.1
    console.log('w.value is:', widthcard.value)
    const maxScroll = carousel.scrollWidth - carousel.clientWidth
    const currentScroll = carousel.scrollLeft;
    // holdtime is for multiclick problem
    const scrollHoldTime = 300
    console.log(isScrolling.value, 'begin')
    if (isScrolling.value === true) return
    if (!carousel) return
    if (!scrollStep) return

    // prevent scroll on first and last item from causing mobile device error
    if (action == "next" && widthcard.value > 0 && !(currentScroll >= maxScroll)) {
        isScrolling.value = true;
        carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
        carouselscroll.value = carousel.scrollLeft
        setTimeout(() => { isScrolling.value = false }, scrollHoldTime)
    } else if (action == "prev" && widthcard.value > 0 && !(currentScroll <= 0)) {
        isScrolling.value = true;
        carousel.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        carouselscroll.value = carousel.scrollLeft
        setTimeout(() => { isScrolling.value = false }, scrollHoldTime)

    }
}

onMounted(() => {
    window.addEventListener('load', carouselHandle);
});
window.addEventListener('resize', carouselHandle)




</script>
<template>
    <div class="section-event-deco">
        <h1 class="section-title open-sans-400 section-title-events">
            UPCOMING EVENT
        </h1>
    </div>

    <div class="container-fluid section-event">
        <div class="section-event__side">
            <div class="side__wrap">

                <div class="section-event__side__title">
                    <h3>最新活動</h3>
                    <h3>關注焦點</h3>
                </div>
                <div class="section-event__side__arrow-wrap">
                    <div class="section-event__side__arrow arrow--prev" @click="carouselClick('prev')">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="48px"
                            fill="#e8eaed">
                            <path d="M650-80 250-480l400-400 61 61.67L372.67-480 711-141.67 650-80Z" />
                        </svg>
                    </div>
                    <div class="section-event__side__arrow arrow--next" @click="carouselClick('next')">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="48px"
                            fill="#e8eaed">
                            <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-event__carousell hideScrollbar">
            <div class="carousell__wrap">

                <div class="holder-eventcard" v-for="n in 5">
                    <EventCard></EventCard>
                </div>
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

//title : upcoming events
.section-title-events {
    text-align: center;
}

// 區塊裝飾 section top image 
.section-event-deco {
    margin-top: 100px;
    width: 100%;
    aspect-ratio: 13/2;
    border-top: 12px solid $outline-light--main;
    border-radius: 60% 60% 0 0;
    box-shadow: 1px -5px .2px 1px $brandMainColor;
    display: flex;
    align-items: center;
    background-color: $bgSubtle-2;

    .section-title {
        width: 100%;
        padding-top: 30px;
    }

    h2 {
        text-align: center;
        padding-top: 42px;
    }
}


.section-event {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: flex-end;
    //不用margin，為了區塊顏色用padding處理空間
    $padding-space: 5px;
    padding-top: $padding-space ;
    padding-bottom: $padding-space*4;

    background-color: $bgSubtle-2;

    .section-event__side {
        grid-column: 1/1;
        //order -->buttons below carousell in mobile-device
        order: 2;
        min-width: 200px;
        //background-color: $bgSubtle-2;


        .side__wrap {
            display: flex;



            width: 10%;
            min-width: fit-content;
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            box-sizing: content-box;
            height: 100%;
            margin-left: auto;
            margin-right: 1%;


            .section-event__side__arrow-wrap {
                $iconwidth: 36px;
                width: 100%;
                display: flex;
                justify-content: space-between;
                height: $iconwidth;
                min-width: $iconwidth * 2.5;


                .section-event__side__arrow {
                    display: inline-block;
                    height: 100%;
                    aspect-ratio: 1;
                    cursor: pointer;

                    //box-sizing: content-box;
                    &:hover {

                        svg {
                            background-color: $outline-dark--grey_active;
                        }
                    }

                    svg {
                        background-color: $outline-dark--grey;
                        fill: $softBlack;
                        display: block;
                        width: 100%;
                        height: 100%;
                        padding: 16%;
                        transition: all;
                    }

                }

            }


            .section-event__side__title {
                display: none;
                color: rgb(52, 52, 52);
                width: 100%;
                flex-grow: 0;

                h3 {
                    text-align: center;
                }
            }
        }
    }

    .section-event__carousell {

        grid-column: 1/1;
        overflow-x: scroll;
        scroll-behavior: smooth;
        scroll-snap-type: mandatory;
        scroll-snap-type: x mandatory;

        padding: 20px 0;
        width: 100%;
        max-width: 1200px;
        margin-right: auto;
        //background-color: $bgSubtle-2;
        mask: linear-gradient(90deg,
                transparent,
                #ffffff 8%,
                #ffffff 92%,
                transparent);


        .carousell__wrap {
            //  width--> (all-cards-width/display-cards-width)%
            // example: 
            // cardwidth:1,gap:.1 
            // (allwidth=5+0.1*4 + 0.3 *2padding ,display=1+(0.1+.2)*2 
            // (nextcard-display and the padding before only in mobile,to have space
            // so it can snap in center))

            width: calc(5.4/ 1.6 * 100%);
            padding: 0 calc((.3 / 5.4) * (5.4/ 1.6) * 100%);
            box-sizing: content-box;

            display: inline-flex;
            justify-content: space-between;
            position: relative;

            .holder-eventcard {
                width: calc((1 / (5.4)) * 100%);
                //width: calc((1 / 6) * 100%);
                scroll-snap-align: center;

            }

            @media screen and (min-width: map-get($screen-breakpoints, sm)) {
                // view is 1 + (.1+.4)*2 = 2 
                width: calc(5.4 / 2 * 100%);
                padding: 0 calc((.5 / 5.4) * (5.4 / 2) * 100%);

            }

            @media screen and (min-width: map-get($screen-breakpoints, md)) {
                // wrap padding left= .05, full = 5.4+ .05 , view = 1+.1 +.6 +.05
                width: calc(5.4 / 1.7 * 100%);
                padding-right: 0;
                // also affect on parent container(scroll-padding-left set to 0.05)
                // to be able see the shadow 避免蓋住首張卡片陰影保留空間也調整滾輪空間
                padding-left: calc(0.05 / 5.4 * (5.4 / 1.7) * 100%);

                .holder-eventcard {
                    //width: calc((1 / 5.45) * 100%);

                }

            }

            @media screen and (min-width: map-get($screen-breakpoints, lg)) {
                width: calc(5.4 / 2.7 * 100%);
            }




        }
    }

    // == outside the event-wrap and item settings
    @media screen and (min-width: map-get($screen-breakpoints, sm)) {}

    @media screen and (min-width: map-get($screen-breakpoints, md)) {
        grid-template-columns: 36% 64%;

        .section-event__side {
            grid-column: 2/1;
            grid-row: 1/1;

            .side__wrap {
                width: fit-content;

                max-width: 200px;
                gap: 15px;
                padding: 0px 10%;

                .section-event__side__arrow-wrap {
                    //width: 64%;
                    min-width: fit-content;


                    .section-event__side__arrow {}
                }

                .section-event__side__title {
                    display: block;
                    width: fit-content;

                    >h3 {
                        width: 100%;
                        //border: 1px solid #000;
                    }
                }
            }
        }

        .section-event__carousell {
            grid-column: 2/2;
            //margin-right: 0;
            mask: linear-gradient(90deg,
                    transparent,
                    #ffffff 1%,
                    #ffffff 92%,
                    transparent);
            scroll-padding-left: calc(0.05 / 5.45 * 100%);

            .carousell__wrap {
                .holder-eventcard {
                    scroll-snap-align: start;
                }
            }
        }

    }

    @media screen and (min-width: map-get($screen-breakpoints, lg)) {
        .section-event__carousell {
            width: 100%;
            margin-bottom: 36px;

        }
    }
}
</style>