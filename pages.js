
const page_button_content = `
	<button class="pages-button" onclick="goToPage('home/index.html');">Home</button>
	<button class="pages-button" onclick="goToPage('projmotioncalc/index.html');">Projectile Motion Calc</button>
	<button class="pages-button" onclick="goToPage('numsorter/index.html');">Number Sorter/Calc</button>
	<button class="pages-button" onclick="goToPage('games/index.html');">Games</button>
	<button class="pages-button" onclick="goToPage('nesguide/index.html');">NES Dev Guide</button>
`;

const title = "captrojothe3rd.github.io";
const subtitle = "Stupid website I made for some reason";

const url_prefix = "file:///C:/Users/silve/Documents/Github/captrojothe3rd.github.io/";
//const url_prefix = "captrojothe3rd.github.io/";

const is_debug = true;

function loadPageButtons()
{
	document.getElementById("page-button-content").innerHTML = page_button_content;
	document.getElementById("title").innerHTML = title;
	document.getElementById("subtitle").innerHTML = subtitle;	
}

function goToPage(page)
{
	window.location.href = url_prefix.concat(page);
}
