
const page_button_content = `
	<button class="pages-button" onclick="goToPage('home/index.html');">Home</button>
	<button class="pages-button" onclick="goToPage('projmotioncalc/index.html');">Projectile Motion Calc</button>
	<button class="pages-button" onclick="goToPage('numsorter/index.html');">Number Sorter/Calc</button>
	<button class="pages-button" onclick="goToPage('games/index.html');">Games</button>
	<button class="pages-button" onclick="goToPage('nesguide/index.html');">NES Dev Guide</button>
`;

const title = "captrojothe3rd.github.io";
const subtitle = "Stupid website I made for some reason";

const quote_element = '<p class="next-to-subtitle-font" id="quote">lmao</p>';
const quote_text = "'; DROP ALL TABLES; --";

const url_prefix = "https://captrojothe3rd.github.io/";

const is_debug = true;

function loadPageButtons()
{
	document.getElementById("page-button-content").innerHTML = page_button_content;
	document.getElementById("title").innerHTML = title;
	document.getElementById("subtitle").innerHTML = subtitle;

	var quote = document.createElement("p");
	quote.textContent = quote_text;
	quote.className = "next-to-subtitle-font";
	quote.id = "quote";
	document.getElementById("subtitle").after(quote);

	if (window.innerWidth < 900)
	{
		document.getElementById("quote").style["margin-top"] = "20";
		document.getElementById("quote").style["float"] = "left";
	}
}

function goToPage(page)
{
	window.location.href = url_prefix.concat(page);
}
