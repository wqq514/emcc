const burger = document.querySelector("#opener");
	const layer = document.querySelector("#layer-popup");

	burger.addEventListener("click",function(){
		layer.classList.add("show");
	})

	const closeBtn = document.querySelector("#closer");
	closeBtn.addEventListener("click",function(){
		layer.classList.remove("show");
	})