<template>
    <div class="event-card boxshadow-1">
        <div class="event-card__date">2024-06-12</div>
        <div class="event-card__body">
            <h3 class="event-card__body__title">日式咖哩研習會</h3>
            <div class="event-card__body__features">
                <h5 class="features__subtitle">關注焦點</h5>
                <ul class="features-list">
                    <li>辛香料使用挑選</li>
                    <li>食材組合討論</li>
                    <li>實作觀摩和品嚐</li>
                </ul>

            </div>
        </div>
        <div class="event-card__link">
            <p>前往本站 閱讀更多</p>
        </div>
    </div>
</template>
<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.event-card {
    @extend .disableSelect;
    width: 100%;
    aspect-ratio: 9/7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .event-card__date {
        @extend .hideOverflowText;

        background-color: #f7bd1e;
        text-align: center;
        line-height: 2;
        width: 100%;
        height: fit-content;

    }

    .event-card__body {
        flex-grow: 1;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: $softWhite-2;

        .event-card__body__title {
            @extend .hideOverflowText;
            text-align: center;
            width: 100%;
            line-height: 2;
            background-color: $softWhite;
        }

        .event-card__body__features {

            width: 90%;
            max-width: max-content;
            margin: auto;
            padding: 20px 0;

            .features__subtitle {
                @extend .hideOverflowText;

                margin-bottom: 5px;
            }

            ul.features-list {
                @extend .hideOverflowText;


                >li {
                    @extend .hideOverflowText;
                    list-style-position: inside;
                    list-style-type: '！';
                }
            }

        }

    }


    .event-card__link {
        height: fit-content;
        width: 100%;
        background-color: $softWhite;
        padding: 5px 0;
        text-align: right;

        p {
            @extend .hideOverflowText;

            padding-right: 12px;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                bottom: 0;
                right: 0;
                height: 4px;
                width: 0;
                background-color: #3f3a3a;
                transition: all .3s ease-in-out;
            }


        }


    }

    &:hover {
        .event-card__link {
            p {
                &:before {

                    background-color: $outline-light--main;
                    height: 2px;
                    width: 100%;
                }
            }
        }

    }

}
</style>