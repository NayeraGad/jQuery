// Scroll
$(".navLink").on("click", function () {
  const sectionId = $(this).attr("href");
  const { top } = $(sectionId).offset();

  $("html, body").animate({ scrollTop: top }, 2000);
});

// Slide navbar from left side
const navbarWidth = $(".menu").outerWidth(true);
$(".openNavbar").on("click", () => {
  $(".menu").animate({ left: 0 });
  $(".home").animate({ marginLeft: navbarWidth });
});

$(".closeNavbar").on("click", () => {
  $(".menu").animate({ left: -navbarWidth });
  $(".home").animate({ marginLeft: 0 });
});

// Accordion Section
$(".toggleHeader").on("click", function () {
  $(this).next().slideToggle(500);
  $(".toggleInner").not($(this).next()).slideUp(500);
});

// Countdown
let countDown = setInterval(() => {
  const countDownDate = new Date("July 6, 2025 20:00:00").getTime();
  let current = new Date().getTime();

  let difference = countDownDate - current;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  $(".days").html(`${days} D`);
  $(".hrs").html(`${hours} H`);
  $(".mins").html(`${minutes} M`);
  $(".secs").html(`${seconds} S`);
});

// Characters Counter
$("textarea").on("keyup", function () {
  let letters = $(this).val().length;
  let remaining = 100 - letters;

  if (remaining > 0) {
    $(".charCounter").text(remaining);
  } else {
    $(".charCounter").text("No");
  }
});
