/*
2022.10.4更新：
根据我发现的没有自适应，间距不合理问题进行调整，如果用了这个的朋友们建议改一改
*/
#page-name::before{
    font-size:18px;
    position: absolute;
    width:100%;
    height:100%;
    border-radius: 8px;
    color:white!important;
    top:0;
    left:0;
    content:'回到顶部';
    background-color: var(--lyx-theme);
    transition: all .3s;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    opacity: 0;
    box-shadow: 0 0 3px var(--lyx-theme);
    line-height: 45px; /*如果垂直位置不居中可以微调此值，也可以删了*/
}
#page-name:hover:before{
    opacity: 1;
}
@media screen and (max-width:900px){
    #page-name,#menus{
      display:none!important;
    }
}

#name-container{
    transition: all .3s;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
}
#name-container:hover{
    scale:1.03
}
#page-name{
    position: relative;
    padding:10px 30px/*如果文字间隔不合理可以微调修改，第二个是水平方向的padding，第一个是垂直的*/
}
#nav{
    padding: 0 20px;
}