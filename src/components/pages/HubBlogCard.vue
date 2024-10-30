<script setup>
const haveImg = true
</script>
<template>
    <div class="hub-blogcard">
        <div class="card__head" :class="{ withimg: haveImg }">
            <h3>露營野炊-秋季食譜分享</h3>
        </div>
        <div class="card__body">
            <div class="card__body__img" v-if="haveImg">
                <img src="https://picsum.photos/id/1020/600/400" alt="">
            </div>
            <div class="card__body__preview" v-else>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ipsa voluptatibus vel molestiae
                    ducimus, ab porro sit perspiciatis.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio ipsa voluptatibus...</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/_variables.scss';

.hub-blogcard {
    //background-color: #fff;
    margin-bottom: 16px;

    .card__head {
        background-color: $brandMainColor--light;

        h3 {
            color: $softBlack;

            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            line-height: 2.5;
            padding: 0 2%;
            text-align: center;
            border-bottom: 2px solid $outline-dark--grey;
        }

        &.withimg {
            background-color: unset;

            h3 {
                border-bottom: none;
                border-top: 4px solid $outline-dark--black;
            }

        }
    }

    .card__body {
        .card__body__img {
            background-color: $midGrey--bg;
            background: $midGrey--bg-grad;
            aspect-ratio: 19/9;

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: contain;
                margin: 0 auto;
            }
        }

        .card__body__preview {
            padding: 0 4%;
            margin: 16px 0;

            p {}
        }
    }
}
</style>