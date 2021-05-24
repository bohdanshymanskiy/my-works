/* eslint-disable no-magic-numbers */
const appRoot = document.getElementById('app-root');
const listOfRegions = externalService.getRegionsList();
const listOfLanguages = externalService.getLanguagesList();


let head = document.createElement('h1');
head.innerHTML = 'Countries Search';
head.classList.add('header');

appRoot.appendChild(head);

let formHead = document.createElement('div');
formHead.classList.add('formHead');
appRoot.appendChild(formHead);

let headerOfForm = document.createElement('p');
headerOfForm.innerText = 'Please choose the type of search:';
formHead.appendChild(headerOfForm);

let form = document.createElement('form');
form.innerHTML = `
<input type="radio" id="r1" name="country" value="Region">By Region <br>
<input type="radio" id="r2" name="country" value="Language">By Language
`;
formHead.appendChild(form);

let chooseCountry = document.createElement('div');
chooseCountry.classList.add('choose');
appRoot.appendChild(chooseCountry);

let headerOfSelect = document.createElement('p');
headerOfSelect.innerText = 'Please choose search query:';
chooseCountry.appendChild(headerOfSelect);
let select = document.createElement('select');
select.innerHTML = `<option selected disabled>Select value</option>`
select.classList.add('select');
let activeCheckBox = null;
const regionCheckBox = document.querySelector('#r1');
const languageCheckBox = document.querySelector('#r2');

function dropDown(list) {
	select.innerHTML = `<option selected disabled>Select value</option>`;
	container.innerHTML = `<p>No items, please choose search query</p>`;
	for (let i = 0; i < list.length; i++) {
		let addOption = document.createElement('option')
		addOption.innerText = `${list[i]}`;
		select.appendChild(addOption)
	}
	activeCheckBox = regionCheckBox.checked ? 'region' : 'language';
}

chooseCountry.appendChild(select);
const container = document.createElement('div');
container.classList.add('container');
appRoot.appendChild(container);
regionCheckBox.addEventListener('change', function () {
	dropDown(listOfRegions)
});
languageCheckBox.addEventListener('change', function () {
	dropDown(listOfLanguages)
});
select.addEventListener('change', function (e) {
	getSelectValue(e)
});

function getSelectValue(e) {
	container.innerHTML = '';
	setTable(e.target.value)
}

function setTable(query) {
	let countries = activeCheckBox === 'language' ? externalService.getCountryListByLanguage(query)
		: externalService.getCountryListByRegion(query);
	let table = document.createElement('table');
	table.innerHTML = `<tr>
	<th id = 'countrySort'>Country name</th>
	<th>Capital</th>
	<th>World Region</th>
	<th>Languages</th>
	<th id = 'areaSort'>Area</th>
	<th>Flag</th>
	</tr>`

	for (let i of countries) {
		let addRow = document.createElement('tr');
		addRow.innerHTML = `
		<td>${i.name}</td>
	<td>${i.capital}</td>
	<td>${i.region}</td>
	<td>${Object.values(i.languages)}</td>
	<td>${i.area}</td>
	<td><img src = '${i.flagURL}'  width = '45px' height = '35px'></img></td>`;
		table.appendChild(addRow);
	}
	container.appendChild(table);


	let sortOfCountry = document.querySelector('#countrySort');
	let areaSort = document.querySelector('#areaSort');
	sortOfCountry.addEventListener('click', function () {
		sortTableName(countries)
	});
	areaSort.addEventListener('click', function () {
		sortTableArea(countries)
	});
	areaSort.addEventListener('click', changeTable);
	sortOfCountry.addEventListener('click', changeTable);
	function sortTableName(arr) {
		return arr.sort((a, b) => a.name > b.name ? 1 : -1);
	}
	function sortTableArea(arr) {
		return arr.sort((a, b) => b.area > a.area ? 1 : -1);
	}

	function changeTable() {
		container.innerHTML = '';
		let table = document.createElement('table');
		table.innerHTML = `<tr>
	<th id = 'countrySort'>Country name</th>
	<th>Capital</th>
	<th>World Region</th>
	<th>Languages</th>
	<th id = 'areaSort'>Area</th>
	<th>Flag</th>
	</tr>`

		for (let i of countries) {
			let addRow = document.createElement('tr');
			addRow.innerHTML = `
		<td>${i.name}</td>
	<td>${i.capital}</td>
	<td>${i.region}</td>
	<td>${Object.values(i.languages)}</td>
	<td>${i.area}</td>
	<td><img src = '${i.flagURL}'  width = '40px' height = '35px'></img></td>`;
			table.appendChild(addRow);
		}
		container.appendChild(table);

	}
};




