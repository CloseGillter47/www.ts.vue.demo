import { Component, Provide, Vue } from 'vue-property-decorator';
@Component
export default class Home extends Vue {
    @Provide() private msg: string = 'kuroko';
    private sayHello() {
        this.msg = 'hello kuroko';
    }
}
