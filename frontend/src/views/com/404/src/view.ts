import { Component, Provide, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

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
