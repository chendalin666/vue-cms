// 导入vue
import Vue from 'vue';
// 导入moment
import moment from 'moment';
// 全局时间过滤器formatStr是dateFormat的参数。moment(要过滤的时间字符串).format(过滤后的时间格式)
Vue.filter('dateFormat', (dateStr, formatStr = 'YYYY年MM月DD日HH:mm:ss') => moment(dateStr).format(formatStr));
