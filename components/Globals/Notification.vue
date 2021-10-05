<template>
    <div :class="`notification ${notification.type} ${notification.hide ? 'hide' : ''}`">
        <object type="image/svg+xml" :data="require(`~/assets/icons/System/${notification.type}-fill.svg`)" class="icon">
            <img :src="require(`~/assets/icons/System/${notification.type}-fill.svg`)" />
        </object>
        <p>{{notification.content}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Notification',
        props: ['notification'],
    }
</script>

<style lang="css" scoped>
    .notification {
        width: 50vw;
        padding: 18px 24px;
        margin-top: 16px;
        background: #161A1D;
        box-shadow: -4.08px -4.08px 12.25px rgba(255, 255, 255, 0.2), 6.125px 6.125px 12.25px rgba(174, 174, 192, 0.4), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.2);
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        border-radius: 24px;
        animation: notificationAppear .4s ease 1;
        pointer-events: none;
        color: #F5F3F4;
    }

    .notification.hide {
        animation: notificationHidding .4s ease 1;
    }

    .notification .icon {
        width: 24px;
        height: 24px;
        margin-right: 16px;
    }
</style>