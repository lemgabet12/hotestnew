"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9150],{9150:(P,c,n)=>{n.r(c),n.d(c,{Tab2PageModule:()=>v});var r=n(1024),d=n(6814),g=n(95),h=n(3554),l=n(3044),u=n(3239);u.kL.register(...u.zX);const i=u.kL;var a=n(6689),b=n(9862);const p=[{path:"",component:(()=>{var t;class e{constructor(o){this.http=o}ngOnInit(){this.http.get("https://www.omdbapi.com/?i=tt3896198&apikey=ffb23b0").subscribe(o=>{this.chartData=o,this.doughnutChartMethod()})}doughnutChartMethod(){this.doughnutChart=new i(this.doughnutCanvas.nativeElement,{type:"doughnut",data:{labels:["BJP","Congress","AAP","CPM","SP"],datasets:[{label:"# of Votes",data:[50,29,15,10,7],backgroundColor:["rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)"],hoverBackgroundColor:["#FFCE56","#FF6384","#36A2EB","#FFCE56","#FF6384"]}]}})}}return(t=e).\u0275fac=function(o){return new(o||t)(a.Y36(b.eN))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-tab2"]],decls:6,vars:0,consts:[[1,"chart-container"],["id","doughnutChart"]],template:function(o,T){1&o&&(a.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),a._uU(3,"Hotest"),a.qZA()()(),a.TgZ(4,"div",0),a._UZ(5,"canvas",1),a.qZA())},dependencies:[r.Gu,r.wd,r.sr]}),e})()}];let m=(()=>{var t;class e{}return(t=e).\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[l.Bz.forChild(p),l.Bz]}),e})(),v=(()=>{var t;class e{}return(t=e).\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[r.Pc,d.ez,g.u5,h.e,m]}),e})()}}]);