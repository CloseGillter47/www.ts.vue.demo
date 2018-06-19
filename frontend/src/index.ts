import { Component, Provide, Vue, Watch } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    @Provide() private transition: string = '';
    @Watch('$route')
    public routeUpdateEvent(to: any, from: any) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    }
}
