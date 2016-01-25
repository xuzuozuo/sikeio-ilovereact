function animateLogo() {
    TweenMax.fromTo(".react-logo", 1, {
        // from
        css: {
            y: "-10px",
        }
    }, {
        // to
        css: {
            y: "10px",
        },

        // 永久重复动画的选项
        repeat: -1,

        // 反转、重新运行动画的选项
        yoyo: true,

        // 改变 easing 类型
        ease: Power2.easeInOut,
    });
}

function animateRobot() {
    var t = new TimelineMax({
        repeat: -1
    });
    t.to("#android-robot", 0.4, {
            rotation: "-=30deg"
        })
        .to("#android-robot", 0.8, {
            rotation: "+=60deg"
        })
        .to("#android-robot", 0.4, {
            rotation: "-=30deg"
        });
}

function updateSliderControl() {
    // 获得所有的 slider 链接
    var links = document.querySelectorAll("#slider-control a")
    var sections = ["#intro-section", "#native", "#touch", "#android"]

    for (var i = 0; i < links.length; i++) {
        var link = links[i];

        // 获取被链接指向的部分
        var section = document.querySelector(sections[i]);
        var sectionTop = section.offsetTop
        var sectionBottom = sectionTop + section.offsetHeight


        // 检查 window.scrollY 是否在这部分中
        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            link.className = "active";
        } else {
            link.className = "";
        }
    }
}

function scrollToElement(element) {
    var topOfElement = document.querySelector(element).offsetTop;
    console.log("scrollTo"+topOfElement);
    TweenMax.to(window, 1, {
        scrollTo: {
            y: topOfElement,
        },

        ease: Power2.easeInOut,
    });
}

function addSmoothScrolling() {
    var links = document.querySelectorAll("#slider-control a")
    for(var i = 0; i < links.length; i++) {
        var link = links[i];

        link.addEventListener("click", function(event) {
        	event.preventDefault();

            var href = this.getAttribute("href")

            scrollToElement(href);
        });
    }
}


// 使用 onscroll 回调函数来更新 slider
window.onscroll = function() {

    updateSliderControl();
}


window.onload = function() {
    animateLogo();
    animateRobot();
    updateSliderControl();
    addSmoothScrolling()
};
