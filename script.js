data = [
	{
		id: '2463',
		article: 'a',
		name: 'plate armor',
		atributes: {
			weight: 1200,
			armor: 10,
			slotType: 'body',
		},
	},
	{
		id: '2464',
		article: 'a',
		name: 'chain armor',
		attributes: {
			weight: 10000,
			armor: 6,
			slotType: 'body',
		},
	},
	{
		id: '2465',
		article: 'a',
		name: 'brass armor',
		attributes: {
			weight: 8000,
			armor: 8,
			slotType: 'body',
		},
	},
]

const itemsWrapper = document.querySelector('.items')
const properties = document.querySelector('.propertys')
const propertiesName = document.querySelector('.properties__name')
const propertiesId = document.querySelector('.properties__id')
const propertiesWeight = document.querySelector('#weight')
const propertiesArmor = document.querySelector('#armor')
const propertiesButton = document.querySelector('.properties__submit')

const renderItems = () => {
	data.forEach(itemData => {
		const item = document.createElement('div')
		const itemName = document.createElement('p')
		const itemId = document.createElement('p')
		item.classList.add('item')
		itemName.classList.add('item__name')
		itemId.classList.add('item__id')
		itemName.textContent = itemData.name
		itemId.textContent = `ID: ${itemData.id}`
		item.appendChild(itemName)
		item.appendChild(itemId)
		itemsWrapper.appendChild(item)
		item.addEventListener('click', () => renderProperties(itemData))
	})
}

const renderProperties = item => {
	propertiesName.textContent = item.name.toUpperCase()
	propertiesId.textContent = item.id
	propertiesWeight.value = item.attributes.weight
	propertiesArmor.value = item.attributes.armor
}


propertiesButton.addEventListener('click',  (event) => {
	event.preventDefault()
	const item = data.find(item => item.id === propertiesId.textContent)
	item.attributes.weight = parseInt(propertiesWeight.value)
	item.attributes.armor = parseInt(propertiesArmor.value)
	console.log(item)
})

renderItems()
