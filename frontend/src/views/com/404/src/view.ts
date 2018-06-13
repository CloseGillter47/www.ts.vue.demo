import { Component, Provide, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/modules/biz/Status404Box';

@Component({
    components: {
        HelloWorld,
    },
})
export default class NotFoundPage extends Vue {
    @Provide() private msg: string = '404';
    private sayHello() {
        this.msg = 'hello kuroko';
    }
}
