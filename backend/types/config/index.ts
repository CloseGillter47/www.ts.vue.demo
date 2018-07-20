export default interface CONFIG {
    PACKNAME: string,
    DATABASE: {
        name: string,
        host: string,
        port: string,
        dialect: string,
        username: string,
        timezone: string
    }
}