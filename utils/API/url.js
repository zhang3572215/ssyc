let baseUrl = ""
if(process.env.NODE_ENV === 'production'){
    // 生产环境
    baseUrl = ''
}else{
    // 开发环境
    baseUrl = ''
}
export default baseUrl