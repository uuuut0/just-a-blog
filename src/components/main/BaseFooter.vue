<script setup>
import { RouterLink, useRouter } from 'vue-router';
const router = useRouter()
const goToHomepage = () => {
    router.push('/')
}
</script>

<template>
    <div class="base-footer">
        <div class="footer__main">
            <div class="container">
                <div class="footer__logo-wrap" @click="goToHomepage">
                    <img src=" /utlblogs-logo-main_white.svg " alt="">
                </div>
                <div class="footer__link-list">
                    <ul>
                        <li>
                            <RouterLink to="aboutus">關於本站</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="bloghub">文章觀點</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="eventinfo">近期活動</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="topics">主題瀏覽</RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="footer__social-list">
                    <ul>
                        <li><a href="#"><img src="@/assets/images/icons/facebook.svg" alt=""></a></li>
                        <li><a href="#"><img src="@/assets/images/icons/instagram.svg" alt=""></a></li>
                        <li><a href="#"><img src="@/assets/images/icons/youtube.svg" alt=""></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer__statement">
            <div class="container">
                <a href="#">網頁內容資料使用聲明</a>
                <p>Developed and desgined by utinglin. <br> This is a web development skill demostraion project</p>
            </div>
        </div>

    </div>

</template>
<style lang="scss" scoped>
@use '@/assets/styles/_grid.scss' as grid;
//will use $grid-breakpoints and $container-max-widths
@import '@/assets/styles/_variables.scss';

.footer-test {
    background-color: #f5c5c5;
}

$footer-padding: 20px;


.base-footer {

    // 不設置margin-top 皆以頁面最後元件處理空間
    .footer__main {
        min-height: 300px;
        background-color: $brandSecondary-dark;

        .footer__logo-wrap {
            width: 120px;
            aspect-ratio: 7/4;
            overflow: hidden;
            cursor: pointer;
            transition: all .5s;

            &:hover {
                background: #cacaca3f;
            }

            >img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        .footer__link-list {
            >ul {
                padding: 20px 0;

                >li {
                    //background-color: #fff;
                    width: fit-content;
                    margin-bottom: 12px;

                    //border: 1px solid #000;


                    >a {
                        color: $softWhite;
                    }
                }
            }
        }

        .footer__social-list {
            >ul {
                display: flex;
                justify-content: end;
                gap: 5px;

                >li {
                    width: 50px;
                    aspect-ratio: 1;


                    >a img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        filter: invert(92%)
                    }
                }
            }
        }
    }

    .footer__statement {
        padding: 20px 8%;

        width: 100%;
        background-color: $bgGray;

        .container>a {
            //margin-top: 30px;
            display: block;
        }

        .container>a,
        p {
            margin-top: 10px;
            text-align: left;
            color: $softWhite;
        }
    }
}

@media screen and (min-width: map-get($screen-breakpoints, sm)) {
    .base-footer {
        .footer__statement {


            a,
            >p {
                text-align: right;
            }
        }
    }
}

@media screen and (min-width: map-get($screen-breakpoints, md)) {}

@media screen and (min-width: map-get($screen-breakpoints, lg)) {}
</style>