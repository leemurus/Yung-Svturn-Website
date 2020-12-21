$('object').on('load', function () {
    let svg = $('object').contents().find('svg')
    gsap.to(svg.find("#headStripe"), {
        y: 0.5,
        rotation: 1,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        duration: 1
    });
    gsap.to(svg.find("#spaceman"), {
        y: 0.5,
        rotation: 1,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        duration: 1
    });
    gsap.to(svg.find("#craterSmall"), {
        x: -3,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "sine.inOut"
    });
    gsap.to(svg.find("#craterBig"), {
        x: 3,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "sine.inOut"
    });
    gsap.to(svg.find("#planet"), {
        rotation: -2,
        yoyo: true,
        repeat: -1,
        duration: 1,
        ease: "sine.inOut",
        transformOrigin: "50% 50%"
    });

    gsap.to(svg.find("#starsBig g"), {
        rotation: "random(-30,30)",
        transformOrigin: "50% 50%",
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });
    gsap.fromTo(
        svg.find("#starsSmall g"),
        {scale: 0, transformOrigin: "50% 50%"},
        {scale: 1, transformOrigin: "50% 50%", yoyo: true, repeat: -1, stagger: 0.1}
    );
    gsap.to(svg.find("#circlesSmall circle"), {
        y: -4,
        yoyo: true,
        duration: 1,
        ease: "sine.inOut",
        repeat: -1
    });
    gsap.to(svg.find("#circlesBig circle"), {
        y: -2,
        yoyo: true,
        duration: 1,
        ease: "sine.inOut",
        repeat: -1
    });

    gsap.set(svg.find("#glassShine"), {x: -68});

    gsap.to(svg.find("#glassShine"), {
        x: 80,
        duration: 2,
        rotation: -30,
        ease: "expo.inOut",
        transformOrigin: "50% 50%",
        repeat: -1,
        repeatDelay: 8,
        delay: 2
    });
})

$('.home_button').on('click', function () {
    window.location.href = "main.html";
});