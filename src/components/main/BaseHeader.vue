<template>
    <div class="base-header__spaceholder"></div>
    <header class="base-header">
        <div class="header-wrap">
            <div class="header-wrap__logoimg mobile-hidden">
                <img src=" @/assets/images/utl-logo.jpg " alt="">
            </div>
            <div class="header-wrap__bgshade">
                <img src="@/assets/images/bgdeco/header_navshade.svg
                " alt="">
            </div>
            <div class="header-wrap__menuicon desktop-hidden " @click="sidemenu_toggle">
                <span class="material-symbols-sharp">menu</span>
            </div>
            <div class="header-wrap__sidemenu-wrap desktop-hidden hidden">
                <div class="sidemenu-wrap__logoimg mobile-only">side-logo-only-mobile</div>
                <div class="sidemenu-wrap__linklist">
                    <div class="sidemenu-link">
                        <RouterLink to="/">HOME</RouterLink>
                    </div>
                    <div class="sidemenu-link">
                        <RouterLink to="bloghub">文章觀點</RouterLink>
                    </div>
                    <div class="sidemenu-link">
                        <RouterLink to="eventinfo">關鍵活動</RouterLink>
                    </div>
                    <div class="sidemenu-link">
                        <RouterLink to="topics">主題瀏覽</RouterLink>
                    </div>
                    <div class="sidemenu-link">
                        <RouterLink to="aboutus">關於我們</RouterLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-nav-wrap desktop-only">
            <div class="nav-wrap-linklist">
                <div class="nav-link">
                    <RouterLink to="/">HOME</RouterLink>
                </div>
                <div class="nav-link">
                    <RouterLink to="bloghub">文章觀點</RouterLink>
                </div>
                <div class="nav-link">
                    <RouterLink to="eventinfo">關鍵活動</RouterLink>
                </div>
                <div class="nav-link">
                    <RouterLink to="topics">主題瀏覽</RouterLink>
                </div>
                <div class="nav-link">
                    <RouterLink to="aboutus">關於我們</RouterLink>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
const sidemenu_isActive = ref(false);

const sidemenu_toggle = () => {
    const sidenav = document.querySelector('.header-wrap__sidemenu-wrap')
    if (sidemenu_isActive.value) {
        sidemenu_isActive.value = false
        sidenav.classList.remove('active')
        sidenav.addEventListener('transitionend',
            () => {
                console.log('after')
                sidenav.classList.add('hidden')
            }, { once: true }
        )

    } else {
        sidenav.classList.remove('hidden')
        sidenav.classList.add('active')
        console.log('remove hidden')

        sidemenu_isActive.value = true
    }
}

onMounted(() => {
    window.addEventListener('resize', resize_handler)
})

// handle overscreen-popup or fixed element for better experience
const resize_handler = () => {
    sidenav_reset()
    function sidenav_reset() {
        const sidenav = document.querySelector('.header-wrap__sidemenu-wrap')


        if (!sidenav) return
        sidemenu_isActive.value = false
        if (sidenav.classList.contains('active')) {
            sidenav.classList.remove('active')
        }
        if (!sidenav.classList.contains('hidden')
        ) {
            sidenav.classList.add('hidden')
        }
    }


}




</script>
<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
$header-height-desktop: 54px;
$header-height-mobile: 42px;

.base-header__spaceholder {
    //background-color: #922727;
    height: $header-height-mobile;
    transition: .4s ease-in-out;

    @media screen and (min-width: map-get($screen-breakpoints, lg)) {
        height: $header-height-desktop ;
    }


}

.base-header {
    transition: all .2s;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 5;
    //transition: all 2s ease;




    * {
        transition: inherit;
    }

    .header-wrap {
        height: $header-height-mobile;
        background-color: $brandMainColor;
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0px 10px;



        .header-wrap__logoimg {
            width: 120px;
            height: 36px;

            >img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }

        }

        .header-wrap__bgshade {
            position: absolute;
            top: 0;
            right: 0;
            height: $header-height-mobile;
            width: 60%;
            z-index: 0;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .header-wrap__menuicon {
            z-index: 1;
            width: $header-height-mobile;
            height: $header-height-mobile;
            display: flex;
            justify-content: center;
            align-items: center;


            &:hover {
                background: #00000011;

                >span {
                    color: $brandSecondary;
                }
            }

            >span {
                //background-color: #fff;
                width: $header-height-mobile - 5px;
                height: $header-height-mobile - 5px;
                font-size: $header-height-mobile - 5px;
            }

        }


        .header-wrap__sidemenu-wrap {
            position: absolute;
            right: 0;
            bottom: 0;
            transform: translateX(100%) translateY(100%);
            height: 100vh;
            min-height: 500px;
            padding-right: 20px;
            padding-left: 20px;
            background-color: $bgGray;

            transition: all .2s;

            &.active {
                transform: translateY(100%);
                max-width: 100vw;
            }

            &.hidden {
                display: none;
            }

            .sidemenu-wrap__linklist {
                padding: 10px 0;
                padding-top: 40px;
                min-height: 400px;
                display: flex;
                flex-wrap: wrap;
                align-items: space-around;

                .sidemenu-link {
                    width: 100%;
                    height: fit-content;
                    padding: 10px 2px;
                    // background-color: #3f3636;

                    a {
                        display: block;
                        color: $softWhite;
                        width: 100%;
                        text-align: center;
                        font-size: 18px;

                    }

                    &:hover {
                        background-color: #848484;
                    }
                }
            }
        }
    }

    .header-nav-wrap {

        .nav-wrap-linklist {
            min-height: 40px;

            background-color: #82747490;
            display: flex;
            justify-content: center;
            align-items: center;

            .nav-link {
                padding: 5px 8px;
                margin-right: 5px;
                background-color: #a7a4a4;

                &:last-child {
                    margin-right: 0;
                }

                &:hover {
                    a {
                        background-color: #fff;

                    }
                }
            }

        }
    }
}

@media screen and (min-width: map-get($screen-breakpoints, sm)) {
    .base-header .header-wrap {
        justify-content: space-between;
        align-items: center;
    }

    .base-header .header-wrap .header-wrap__menuicon {

        >span {
            display: inline-block;
            font-size: $header-height-mobile*0.8;
            width: $header-height-mobile*0.8;
            height: $header-height-mobile* 0.8;
        }
    }
}

@media screen and (min-width: map-get($screen-breakpoints, md)) {}

@media screen and (min-width: map-get($screen-breakpoints, lg)) {
    .base-header .header-wrap {
        height: $header-height-desktop;

        .header-wrap__bgshade {
            height: $header-height-desktop;
        }

        .header-wrap__menuicon {
            height: 0;
            width: 0;
            overflow: hidden;
        }
    }
}

@media screen and (min-width: map-get($screen-breakpoints, xl)) {}


@mixin menuicon($query) {}
</style>