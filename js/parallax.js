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

function randomInt(low, high) {
    return Math.round(randomFloat(low, high));
}

function randomFloat(low, high) {
    return Math.random() * high + low;
}

function randomBool() {
    return Math.random() > 0.5;
}


const entityHandler = (function() {
    let entities = [];
    setInterval(() => {
        window.requestAnimationFrame(() => {
            if (asteroids.length <= 10) {
                asteroids.push(createAsteroid(randomInt(2, 3), "asteroid" + Number(randomBool())));
                asteroids[asteroids.length - 1].init();
            }
            asteroids.forEach(asteroid => asteroid.update());

            for (let i = 0; i < entities.length; i++) {
                for (let j = i + 1; j < entities.length; j++) {
                    if (areColliding(entities[i], entities[j])) {
                        let [one, two] = [entities[i], entities[j]];
                        one.onCollision(two);
                        two.onCollision(one);
                    }
                }
            }
        })
    }, 1000 / 60)

    function areColliding(entity, other) {
        const [a, b] = [entity.width * 0.1, other.width * 0.1];
        var collidingX = (entity.x + a < other.x + other.width - b && entity.x + entity.width - a > other.x + b);
        var collidingY = (entity.y + a < other.y + other.height - b && entity.y + entity.height - a > other.y + b);
        return (collidingX && collidingY);
    }
    return {
        registerEntity(entity) {
            entities.push(entity);
        },
        remove(entity) {
            entities.splice(entities.indexOf(entity), 1);
        },
    }
})()

const asteroidProto = {
    init(customPosition = false, positionArgs) {
        if (customPosition) {
            this.setPosition(...positionArgs);
        }
        else {
            let x, y;
            let [dx, dy] = [randomFloat(0.5, 1), randomFloat(0.5, 1)];

            if (randomBool()) {
                x = 0 - this.width - 10;
            }
            else {
                x = parallaxRect.width + 10;    
                dx *= -1;
            }
            if (randomBool()) {
                y = 0 - this.height - 10;
            }
            else {
                y = parallaxRect.height + 10;
                dy *= -1;
            }
            
            this.setPosition(x, y, dx, dy, randomFloat(-2.5, 5));
        }
        setTimeout(() => entityHandler.registerEntity(this), 250);
        parallax.appendChild(this.element);
    },
    setPosition(x, y, dx, dy, rot) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.rotPerFrame = rot;
        this.rot = 0;

        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
    },
    update() {
        this.x += this.dx;
        this.y += this.dy;
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";
        this.rot += this.rotPerFrame;
        this.rot %= 360;
        this.element.style.transform = "rotate(" + this.rot + "deg)";

        if (this.x < 0 && this.dx < 0) {
            this.dx = -this.dx;
        }
        else if (this.x + this.width > parallaxRect.width && this.dx > 0) {
            this.dx = -this.dx;
        }
        if (this.y < 0 + window.pageYOffset && this.dy < 0) {
            this.dy = -this.dy;
        }
        else if (this.y + this.height > parallaxRect.height && this.dy > 0) {
            this.dy = -this.dy;
        } 
    },
    onCollision(other) {
        if (other.entityType == "asteroid") {
            if (other.size >= this.size) {
                entityHandler.remove(this);
                asteroids.splice(asteroids.indexOf(this), 1);

                if (this.size > 1) {
                    for (let i = -1; i < 2; i += 2) {
                        let asteroid = createAsteroid(this.size - 1, this.image);
                        asteroid.init(true,
                            [
                                this.x + this.width / 2 + i * (this.size - 1) * 25, this.y,
                                -this.dx / 2 + randomFloat(-0.75, 1.5),
                                -this.dy / 2 + randomFloat(-0.75, 1.5),
                                Math.max(-4, Math.min(4, this.rotPerFrame + randomFloat(-2.5, 5))) // == clamp into [-4, 4]
                            ]
                        );
                        asteroids.push(asteroid);
                    }
                }

                for (let i = 0; i < 9; i++) {
                    setTimeout(() => {
                        this.element.src = imageRoot + "explosion" + i + ".png";
                    }, i * 50);
                }
                setTimeout(() => {
                    parallax.removeChild(this.element);
                }, 450);
            }
        }
    }
}

let asteroids = [];
function createAsteroid(size, image) {
    let asteroid = Object.create(asteroidProto);
    
    asteroid.image = image;
    asteroid.size = size;
    asteroid.width = size * 25;
    asteroid.height = size * 25;
    asteroid.entityType = "asteroid";
    
    asteroid.element = document.createElement("img");
    asteroid.element.className = "asteroid " + asteroid.size;
    asteroid.element.src = imageRoot + image + ".png";
    asteroid.element.style.width = asteroid.size * 25 + "px";
    asteroid.element.style.height = asteroid.size * 25 + "px";
    return asteroid;
}

let parallax;
let parallaxRect;
$(document).ready(() => {
    parallax = document.querySelector("#parallax");
    parallaxRect = parallax.getBoundingClientRect();
});