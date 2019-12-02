function roll() {
    var dicePics1 = [
        "<img src='https://66.media.tumblr.com/5240dc2418bbd8cadafc6a238e84f51d/tumblr_puhatt8Lzf1s8erfco2_100.png'>",
        "<img src='https://66.media.tumblr.com/a9e433dace9d745dbd7c157ddacdf6f3/tumblr_puhatt8Lzf1s8erfco1_100.png'>",
        "<img src='https://66.media.tumblr.com/4487da1524b8d90e0007c5da72fc49e7/tumblr_puhatt8Lzf1s8erfco3_100.png'>",
        "<img src='https://66.media.tumblr.com/fd6e3e52de325f1f2023e320a1ff8191/tumblr_puhatt8Lzf1s8erfco4_100.png'>",
        "<img src='https://66.media.tumblr.com/1baf8a8bffc14a37b2ceda91d7ba495c/tumblr_puhatt8Lzf1s8erfco5_100.png'>",
        "<img src='https://66.media.tumblr.com/ee1eeff4acbec1af9223c76df28dae8a/tumblr_puhatt8Lzf1s8erfco6_100.png'>"
    ]

    var dicePics2 = [
        "<img src='https://66.media.tumblr.com/5240dc2418bbd8cadafc6a238e84f51d/tumblr_puhatt8Lzf1s8erfco2_100.png'>",
        "<img src='https://66.media.tumblr.com/a9e433dace9d745dbd7c157ddacdf6f3/tumblr_puhatt8Lzf1s8erfco1_100.png'>",
        "<img src='https://66.media.tumblr.com/4487da1524b8d90e0007c5da72fc49e7/tumblr_puhatt8Lzf1s8erfco3_100.png'>",
        "<img src='https://66.media.tumblr.com/fd6e3e52de325f1f2023e320a1ff8191/tumblr_puhatt8Lzf1s8erfco4_100.png'>",
        "<img src='https://66.media.tumblr.com/1baf8a8bffc14a37b2ceda91d7ba495c/tumblr_puhatt8Lzf1s8erfco5_100.png'>",
        "<img src='https://66.media.tumblr.com/ee1eeff4acbec1af9223c76df28dae8a/tumblr_puhatt8Lzf1s8erfco6_100.png'>"
    ]

    one.innerHTML = dicePics1[Math.floor(Math.random() * dicePics1.length)];
    two.innerHTML = dicePics2[Math.floor(Math.random() * dicePics2.length)];

}