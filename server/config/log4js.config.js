/**
 * Created by Administrator on 2017/12/30.
 */
const config = {
    replaceConsole: true,
    appenders: {
        stdout: {//控制台输出
            type: 'stdout'
        },
        req: {//请求日志
            type: 'dateFile',
            filename: 'server/logs/reqlog/',
            pattern: 'req-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        err: {//错误日志
            type: 'dateFile',
            filename: 'server/logs/errlog/',
            pattern: 'err-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        },
        oth: {//其他日志
            type: 'dateFile',
            filename: 'server/logs/othlog/',
            pattern: 'oth-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: {appenders: ['stdout', 'req'], level: 'debug'},//appenders:采用的appender,取appenders项,level:设置级别
        err: {appenders: ['stdout', 'err'], level: 'error'},
        oth: {appenders: ['stdout', 'oth'], level: 'info'}
    }
}

module.exports = config;