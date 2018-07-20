import CONFIG_TYPE from '../types/config';

const CONFIG: CONFIG_TYPE = {
    PACKNAME: 'kuroko.club',
    DATABASE: {
        name: 'kuroko.club',
        host: '127.0.0.1',
        port: '2306',
        dialect: 'mysql',
        username: 'root',
        timezone: '+08:00'
    }
}

export default CONFIG;
