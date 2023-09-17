import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent  implements OnInit {
  selectedLanguage: string = 'en';

  url = {
    url_base:'https://newsapi.org/v2/everything?q=',
    apikey: '9b36382bfdf945af883ad4a2282eb7f2',
    search: 'news',
    end_url_base: '&language=&sortBy=publishedAt&apiKey=' 
  }


  Allnews:any = []
  FilterNews: any = []

  search: string = '';
  // 9b36382bfdf945af883ad4a2282eb7f2 News - APIKEY
  // https://newsapi.org/v2/everything?q=[TITLE]&from=2023-08-16&language=es&sortBy=publishedAt&apiKey=9b36382bfdf945af883ad4a2282eb7f2

  constructor(private httpclient: HttpClient) { }

  ngOnInit() {
    this.httpclient.get(`https://newsapi.org/v2/everything?q=news&language=${this.selectedLanguage}&sortBy=publishedAt&apiKey=9b36382bfdf945af883ad4a2282eb7f2`)
    .toPromise().then((res) => {
      console.log('Welcome to News: ', res);
      this.Allnews = res;
      const articlesSinNullUrl = this.Allnews.articles.filter((article:any) => article.urlToImage !== null);
      this.FilterNews = articlesSinNullUrl;
    })
  }


  async getNews(search: string){
    // this.url.search = search;
    if(this.Allnews === '[]' || search === ''){
      const language = this.selectedLanguage; 
      this.httpclient.get(`https://newsapi.org/v2/everything?q=news&language=${language}&sortBy=publishedAt&apiKey=9b36382bfdf945af883ad4a2282eb7f2`)
      .toPromise().then((res) => {
        console.log('response: ', res);
        this.Allnews = res;
        const articlesSinNullUrl = this.Allnews.articles.filter((article:any) => article.urlToImage !== null);
      this.FilterNews = articlesSinNullUrl;
      })
    }
    const language = this.selectedLanguage;
    const url = `${this.url.url_base}${search}&language=${language}${this.url.end_url_base}${this.url.apikey}`;
    console.log(url);
    if(search == 'news'){
      // this.httpclient.get(`${this.url.url_base}${search}${this.url.end_url_base}${this.url.apikey}`)
      this.httpclient.get(url)
      .toPromise().then ((res) => {
        console.log(url);
        console.log('response: ', res);
        this.Allnews = res;
        const articlesSinNullUrl = this.Allnews.articles.filter((article:any) => article.urlToImage !== null);
      this.FilterNews = articlesSinNullUrl;
      });
    } else {
      // this.httpclient.get(`${this.url.url_base}${search}${this.url.end_url_base}${this.url.apikey}`)
      this.httpclient.get(url)
      .toPromise().then ((res) => {
        console.log('response: ', res);
        console.log('this.news: ', this.Allnews);
        this.Allnews = res;
        const articlesSinNullUrl = this.Allnews.articles.filter((article:any) => article.urlToImage !== null);
        this.FilterNews = articlesSinNullUrl;
      });
    }
  }
}
