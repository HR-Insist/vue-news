import axios from 'axios'

import {
  AppCode
} from './config'

// 获取新闻频道
export async function getNewsChannels() {
  const res = await axios.get('http://ali-news.showapi.com/channelList', {
    headers: {
      Authorization: `APPCODE ${AppCode}`
    }
  })
  return res.data.showapi_res_body.channelList;
}

// 获取频道的新闻
/**
 * @param {*} channelId 
 * @param {*} page 
 * @param {*} maxResult 
 */
export async function getNews(channelId, page = 1, maxResult = 20) {
  let res = await axios.get('http://ali-news.showapi.com/newsList', {
    headers: {
      Authorization: `APPCODE ${AppCode}`
    },
    params: {
      channelId,
      page,
      maxResult,
      needContent: 1,
      needAllList: 0
    }
  });
  // return res.data.showapi_res_body.pagebean.contentlist;
  return res.data.showapi_res_body.pagebean;
}