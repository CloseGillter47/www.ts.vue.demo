import * as PROCESS from 'process';
import DEV_CONFIG from '@/config/dev.config';
import PRO_CONFIG from '@/config/pro.config';

const CONFIG = PROCESS.env.NODE_ENV === 'production' ? PRO_CONFIG : DEV_CONFIG;

export default CONFIG;