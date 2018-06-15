import { Component, Provide, Vue, Watch } from 'vue-property-decorator';

Component.registerHooks(['beforeRouteEnter', 'beforeRouteUpdate', 'beforeRouteLeave']);

@Component({
    components: {},
})
export default class NotFoundPage extends Vue {
    @Provide() private msg: string = '404';
    @Provide() private href: string = '';

    @Watch('$route')
    routerUpdate(oldVal?: any, newVal?: any) {
        console.log(oldVal);
        console.log(newVal);
    }
    public beforeRouteEnter(to: any, from: any, next: (vm?: any) => void) {
        console.log('beforeRouteEnter');
        next((vm: NotFoundPage) => {
            vm.href = vm.$route.params.fullPath || '';
        });
    }
    public beforeRouteUpdate(to: any, from: any, next: () => void) {
        console.log('beforeRouteUpdate');
        next();
    }
    public beforeRouteLeave(to: any, from: any, next: () => void) {
        console.log('beforeRouteLeave');
        next();
    }

    public sayhell() {
        this.$router.replace({ name: '404' });
        this.href = new Date().toJSON();
    }
}
