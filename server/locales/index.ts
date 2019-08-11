import zhCN from './zh-CN';
import enUS from './en-US';

interface LanguageMap {
  [key: string]: JsObject;
}

const languageMap: LanguageMap = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

export function getLanguageData(
  id: string,
  language: string = 'zh-CN') {
  const data: JsObject = languageMap[language];
  if (data && data[id]) {
    return data[id];
  }
  return '';
}
