var data = [
    {
        id: 'box1',
        title: 'First box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'special-header', 'important'],
        soldOut: true,
        price: 150,
        currency: '$',
	},
    {
        id: 'box2',
        title: 'Second box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['special-header', 'important'],
        soldOut: true,
        price: 50,
        currency: '$',
	},
    {
        id: 'box3',
        title: 'Third box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'important'],
        soldOut: true,
        price: 50,
        currency: '$',
	},
    {
        id: 'box4',
        title: 'Fourth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted'],
        soldOut: false,
        price: 70,
        currency: '$',
	},
    {
        id: 'box5',
        title: 'Fifth',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: [],
        soldOut: true,
        price: 35,
        currency: '$',
	},
];

var container = document.getElementById('boxes');
//zmieniajac output musze zmienic tez appendChild
for (var i = 0; i < data.length; i++) {

    var box = document.createElement('div');

    box.id = data[i].id;

    var header = document.createElement('header');
    header.innerHTML = data[i].title;
    box.appendChild(header);

    box.innerHTML += data[i].content;
    box.className = 'box ' + data[i].categories.join(' ');

    if (data[i].soldOut === true) { //jesli dane z tablicy sa true to stworz mi nowy paragraf ktory pokaze napis sold out
        var h4 = document.createElement('h4');
        h4.innerHTML = 'SOLD OUT'; // data[i].soldOut;
        box.appendChild(h4); // to mi go tworzy
    }
    if (data[i].soldOut === false) {
        var h4 = document.createElement('h4');
        h4.innerHTML = '<br>';
        box.appendChild(h4);
    }


    box.innerHTML += data[i].price;
    box.innerHTML += data[i].currency;

    container.appendChild(box);
}
