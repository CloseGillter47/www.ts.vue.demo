import { Component, Provide, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/modules/biz/Status404Box';

@Component({
    components: {
        HelloWorld,
    },
})
export default class Home extends Vue {
    @Provide() private msg: string = 'kuroko';
    private sayHello() {
        this.msg = 'hello kuroko';
    }
}
