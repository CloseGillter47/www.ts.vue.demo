import { Component, Provide, Vue } from 'vue-property-decorator';
import Tables from '@/components/base/Tables';
@Component({
    components: { 'ku-tables': Tables },
})
export default class Home extends Vue {
    @Provide() private msg: string = 'kuroko';
    private sayHello() {
        this.msg = 'hello kuroko';
    }
}
