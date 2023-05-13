$(document).ready(function () {
	var screenWidth = $(window).width();
	var previousScrollPosition = $(window).scrollTop();

	const ctx = $("#myChart");

	new Chart(ctx, {
		type: "doughnut",
		data: {
			datasets: [
				{
					label: "3C Research",
					data: [20, 30, 50],
					backgroundColor: ["#c2c2c2", "#676767", "#dd3333"],
					hoverOffset: 3,
					borderWidth: 1,
					hoverBorderWidth: 20,
					hoverBorderColor: "white",
				},
			],
		},
		options: {
			responsive: true,
			plugins: {
				tooltip: {
					enabled: false,
				},
			},
			onHover: function (event, chartElement) {
				if ($(window).width() >= 1024) {
					if (chartElement && chartElement.length) {
						if (chartElement[0].index === 0) {
							$("#container-content-chart .chart-title")
								.css({
									backgroundColor: "#c2c2c2",
								})
								.text("2. Nghiên cứu đối thủ cạnh tranh");
							$("#container-content-chart .chart-content").text(
								"SkyX Solar có thể sử dụng nhiều phương pháp nghiên cứu khác nhau để tìm hiểu về đối thủ cạnh tranh trong ngành năng lượng mặt trời và đưa ra các giải pháp kinh doanh phù hợp và cạnh tranh.",
							);
							$("#container-content-chart .chart-img").attr(
								"src",
								"https://demo2.okhub.tech/wp-content/lib/skyx/images/slider1.jpg",
							);
							$("#tooltip-20").css({
								backgroundColor: "#333333",
								padding: "8px",
							});
							$("#tooltip-20>span").text("20%");
							$("#tooltip-20>p").css({
								backgroundColor: `${chartElement[0].element.options.backgroundColor}`,
								width: "calc(2*100vw/100)",
							});
							$("#tooltip-30>span").text("");
							$("#tooltip-50>span").text("");
							$("#tooltip-30").css({
								padding: "0",
							});
							$("#tooltip-50").css({
								padding: "0",
							});
						} else if (chartElement[0].index === 1) {
							$("#container-content-chart .chart-title")
								.css({
									backgroundColor: "#676767",
								})
								.text("3. Nghiên cứu phát triển công ty");
							$("#container-content-chart .chart-content").html(
								'SkyX Solar cùng nhau, chúng ta định hình và đẩy nhanh quá trình chuyển đổi hướng tới phát triển năng lượng bền vững.Là người lãnh đạo " <span class="uppercase text-second-red">MEGA</span> - <span class="uppercase text-second-red">M</span> ake <span class="uppercase text-second-red">E</span> arth <span class="uppercase text-second-red">G</span> reen <span class="uppercase text-second-red">A</span> gain".',
							);
							$("#container-content-chart .chart-img").attr(
								"src",
								"https://demo2.okhub.tech/wp-content/lib/skyx/images/slider2.jpg",
							);
							$("#tooltip-30").css({
								backgroundColor: "#333333",
								padding: "8px",
							});
							$("#tooltip-30>span").text("30%");
							$("#tooltip-30>p").css({
								backgroundColor: `${chartElement[0].element.options.backgroundColor}`,
								width: "calc(2*100vw/100)",
							});
							$("#tooltip-50>span").text("");
							$("#tooltip-20>span").text("");
							$("#tooltip-50").css({
								padding: "0",
							});
							$("#tooltip-20").css({
								padding: "0",
							});
						} else {
							$("#container-content-chart .chart-title")
								.css({
									backgroundColor: "#dd3333",
								})
								.text("1. Nghiên cứu khách hàng");
							$("#container-content-chart .chart-content").text(
								"SkyX Solar là một tập đoàn chuyên về năng lượng mặt trời, do đó việc nghiên cứu khách hàng của họ tập trung vào việc tìm hiểu nhu cầu và mong muốn của khách hàng liên quan đến giải pháp năng lượng mặt trời.",
							);
							$("#container-content-chart .chart-img").attr(
								"src",
								"https://demo2.okhub.tech/wp-content/lib/skyx/images/customer.jpg",
							);
							$("#tooltip-50").css({
								backgroundColor: "#333333",
								padding: "8px",
							});
							$("#tooltip-50>span").text("50%");
							$("#tooltip-50>p").css({
								backgroundColor: `${chartElement[0].element.options.backgroundColor}`,
								width: "calc(2*100vw/100)",
							});
							$("#tooltip-30>span").text("");
							$("#tooltip-20>span").text("");
							$("#tooltip-30").css({
								padding: "0",
							});
							$("#tooltip-20").css({
								padding: "0",
							});
						}
					}
				}
			},
		},
	});
	$("#myChart").mouseout(function () {
		$(".tooltip-chart >span").text("");
		$(".tooltip-chart").css({
			padding: "0",
		});
	});

	$(".list-slider-page").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: (13.75 * screenWidth) / 100 + "px",
		infinite: true,
		arrows: false,
		variableWidth: true,
		autoplay: true,
		autoplaySpeed: 1000,
		responsive: [
			{
				breakpoint: 767.8,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
					centerPadding: 0,
					variableWidth: false,
				},
			},
		],
	});
	var numberCheck = 1;
	$("#list-icon").css({
		rowGap: (2.5 * screenWidth) / 100 + "px",
	});
	// scroll event
	$(window).on("scroll", () => {
		screenWidth = $(window).width();
		previousScrollPosition = $(window).scrollTop();
		if (screenWidth < 768) {
		} else {
		}
		if (numberCheck === 1) {
			let isCheckLook = document.querySelector(
				".percent-chart.aos-animate",
			);
			if (isCheckLook) {
				let valueDisplays = document.querySelectorAll(".percent-chart");
				let interval = 2500;
				valueDisplays.forEach((valueDisplay) => {
					let startValue = 0;
					let endValue = parseInt(
						valueDisplay.getAttribute("data-val"),
					);
					let duration = Math.floor(interval / endValue);
					let counter = setInterval(function () {
						startValue += 1;
						valueDisplay.textContent = startValue + "%";
						if (startValue == endValue) {
							clearInterval(counter);
						}
					}, duration);
				});
				numberCheck++;
			}
		}
	});

	// resize event
	$(window).resize(function () {
		screenWidth = $(window).width();
		if (screenWidth < 768) {
			$("canvas").css({ width: "100%", height: "100%" });
			$("div.img-whatwedo").height("calc(57.86*100vw/100)");
			$("div.img-whatwedo img").css({ height: "100%", width: "100%" });
			$("#container-content-chart .chart-title")
				.css({
					backgroundColor: "#dd3333",
				})
				.text("1. Nghiên cứu khách hàng");
			$("#container-content-chart .chart-content").text(
				"SkyX Solar là một tập đoàn chuyên về năng lượng mặt trời, do đó việc nghiên cứu khách hàng của họ tập trung vào việc tìm hiểu nhu cầu và mong muốn của khách hàng liên quan đến giải pháp năng lượng mặt trời.",
			);
			$("#container-content-chart .chart-img").attr(
				"src",
				"https://demo2.okhub.tech/wp-content/lib/skyx/images/customer.jpg",
			);
		} else {
			$("div.img-whatwedo").height(
				(40.56 * (screenWidth / 100)).toFixed(2) + "px",
			);
			$("ul.list-slider-page li").width(
				(40 * (screenWidth / 100)).toFixed(2) + "px",
			);
			$("#myChart").width((30.75 * screenWidth) / 100 + "px");
			$("#myChart").height((30.75 * screenWidth) / 100 + "px");
			$("#list-icon").css({
				rowGap: (2.5 * screenWidth) / 100 + "px",
			});
		}
	});
	$(window).trigger("resize");
});
