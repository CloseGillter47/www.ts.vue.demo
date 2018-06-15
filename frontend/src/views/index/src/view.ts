import { Component, Provide, Vue } from 'vue-property-decorator';

@Component({
    components: { },
})
export default class Home extends Vue {
    @Provide() private msg: string = 'kuroko';
    private sayHello() {
        this.msg = 'hello kuroko';
    }
}
