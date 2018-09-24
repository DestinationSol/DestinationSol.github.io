$("header, #headerBuffer").addClass("small");


/* Scrolling effect */

let animating = false
let lastScrollTop = 0;

$(document).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (!animating && scrollTop > lastScrollTop) {
        animateScroll(false, scrollTop - lastScrollTop);
    }
    else if (!animating && scrollTop < lastScrollTop) {
        animateScroll(true, lastScrollTop - scrollTop);
    }
    lastScrollTop = scrollTop;
});

function animateScroll(down, pixels) {
    animating = true;
    const direction = down ? "-" : "+";
    const distance = "=" + pixels + "px";
    $(document.body).animate({
        backgroundPositionY: direction + distance
    }, 0, () => animating = false);
}

(function slideParallax() {
    $(document.body).animate({
        backgroundPositionX: "+=1px"
    }, 20, slideParallax);
})();


/* Floating game assets */

function randomInt(low) {
    return function(high) {
        return Math.round(Math.random() * high) + low
    }
}
const randomFromZero = randomInt(0)
const randomBool = () => Math.random() > 0.5;


const asteroidPrototype = {
    init() {
        $("#parallax").append(this.element);

        this.width = $(this.element).height() / $("#parallax").width() * 100;
        this.height = $(this.element).height() / $("#parallax").height() * 100;

        const rand = randomFromZero(3);

        if (rand == 0) {
            this.x = 0;
            this.y = randomInt(25)(75);
            this.angle = randomInt(-160)(-20);
        }
        else if (rand == 1) {
            this.x = 100;
            this.y = randomInt(25)(75);
            this.angle = randomInt(-70)(70);
        }
        else if (rand == 2) {
            this.x = randomInt(25)(75);
            this.y = 0;
            this.angle = randomInt(20)(160);
        }
        else if (rand == 3) {
            this.x = randomInt(25)(75);
            this.y = 100;
            this.angle = randomInt(130)(250);
        }

        const rad = this.angle * Math.PI / 180;
        
        this.dx = Math.cos(rad) * this.speed / 10;
        this.dy = Math.sin(rad) * this.speed / 10;
    },
    update() {
        this.x += this.dx;
        this.y += this.dy;
        
        if (this.x < 0 && this.dx < 0) {
            this.dx = -this.dx;
        }
        if (this.y < 0 + window.pageYOffset / $("#parallax").height() * 100 && this.dy < 0) {
            this.dy = -this.dy;
        }
        if (this.x > 100 - this.width && this.dx > 0) {
            this.dx = -this.dx;
        }
        if (this.y > 100 - this.height && this.dy > 0) {
            this.dy = -this.dy;
        }

        $(this.element).css({
            "left": this.x + "%",
            "top": this.y + "%"
        });
    }
}

function createAsteroid(size, type, health, speed) {
    let asteroid = Object.create(asteroidPrototype);
    asteroid.size = (size == 0 ? "small" : (size == 1 ? "medium" : "large"));
    asteroid.type = type;
    asteroid.health = health;
    asteroid.speed = speed;

    asteroid.element = document.createElement("img");
    asteroid.element.className = "asteroid " + asteroid.size;
    asteroid.element.src = imageRoot + "asteroid_" + asteroid.type + ".png";
    
    asteroid.init();
    return asteroid;
}

$(document).ready(() => {

    let asteroids = [];
    for (let i = 0, j = randomInt(7)(12); i < j; i++) {
        asteroids.push(createAsteroid(1, 1, 1, 1));
    }

    (function() {
        setInterval(() => asteroids.forEach(asteroid => asteroid.update(), 10));
    })();
});