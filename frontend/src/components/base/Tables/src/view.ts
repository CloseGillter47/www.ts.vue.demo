import { Component, Provide, Vue } from 'vue-property-decorator';

@Component
export default class TablesComponent extends Vue {
    @Provide() private msg: string = 'tables';
    private sayHello() {
        this.msg = 'hello kuroko';
    }
}
