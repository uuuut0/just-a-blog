<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>
<template>
    <div class="maintenance-sign-notify">
        <p>
            {{ route.name }} is not ready
        </p>
    </div>
    <div class="maintenance-sign-wrap">
        <div class="maintenance-sign">
            <div class="maintenance-sign__imgwrap">
                <img src="/noun-fixing-6822547.svg" alt="">
            </div>
        </div>
    </div>


</template>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.maintenance-sign-wrap {
    min-height: 50vh;
    display: flex;

    .maintenance-sign {
        width: fit-content;
        margin: auto;

        .maintenance-sign__imgwrap {
            width: 180px;
            margin: auto;

            >img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

    }
}

.maintenance-sign-notify {

    text-align: center;
    background: #2662d1;
    color: rgb(226, 225, 225);

    @media screen and (min-width: map-get($screen-breakpoints, lg)) {
        margin-top: 40px;
    }

    >p {
        animation: revealAnim .8s forwards;
    }
}

@keyframes revealAnim {
    from {
        line-height: 0%;
        opacity: 20%;
    }

    to {
        line-height: 200%;
        opacity: 80%;

    }
}
</style>