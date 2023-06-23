import { format, register } from "timeago.js";
import koLocale from 'timeago.js/lib/lang/ko'
//nodejs 파일연결 >  timeago.js(timeago API)/lib(라이브러리)/lang(언어팩)/ko(한국어)

register('ko',koLocale)
//lang 설정 = 기본 en_US(영어), ko(한국어)


export function formatAgo(data, lang='en_US'){
    return format(data, lang)
    //변환할 데이터, 변경할 언어를 받아와서 처리
}