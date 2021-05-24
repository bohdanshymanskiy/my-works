function visitLink(path) {
	localStorage.setItem(path, +localStorage.getItem(path) + 1)
}

function viewResults() {
	let container = document.querySelector('.container');
	container.insertAdjacentHTML('afterend',
		`<ul>
			<li>You visited Page1 ${localStorage.getItem('Page1') || 0} time(s)</li>
			<li>You visited Page2 ${localStorage.getItem('Page2') || 0} time(s)</li>
			<li>You visited Page3 ${localStorage.getItem('Page3') || 0} time(s)</li>
		</ul>
	`)
	localStorage.clear()
}



