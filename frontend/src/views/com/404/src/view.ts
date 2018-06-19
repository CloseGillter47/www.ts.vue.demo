import { Component, Provide, Vue } from 'vue-property-decorator';

Component.registerHooks(['beforeRouteEnter', 'beforeRouteUpdate', 'beforeRouteLeave']);

@Component({
    components: {},
})
export default class NotFoundPage extends Vue {
    @Provide() private msg: string = '404';
    @Provide() private href: string = '';

    public beforeRouteEnter(to: any, from: any, next: (vm?: any) => void) {
        next((vm: NotFoundPage) => {
            vm.href = vm.$route.params.fullPath || '';
        });
    }
    public beforeRouteUpdate(to: any, from: any, next: () => void) {
        next();
    }
    public beforeRouteLeave(to: any, from: any, next: () => void) {
        this.href = !to.name ? window.location.href.split('#')[0] + '#' + to.fullPath : '';
        next();
    }

    public sayhell() {
        this.$router.replace({ name: '404' });
        this.href = new Date().toJSON();
    }
}
