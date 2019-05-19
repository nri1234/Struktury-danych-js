'use strict';

var data = [
    {
        id: 'box1',
        title: 'First box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'special-header', 'important']
	},
    {
        id: 'box2',
        title: 'Second box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['special-header', 'important']
	},
    {
        id: 'box3',
        title: 'Third box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted', 'important']
	},
    {
        id: 'box4',
        title: 'Fourth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: ['highlighted']
	},
    {
        id: 'box5',
        title: 'Fifth box',
        content: '<p>Lorem ipsum dolor sit amet!</p>',
        categories: []
	},
];

var output = document.getElementById('boxes');

for (var i = 0; i < data.length; i++) {

    var box = document.createElement('categories');
    box.id = data[i].id;

    var header = document.createElement('header');
    header.innerHTML = data[i].title;
    box.appendChild(header);
    box.innerHTML += data[i].content;
    box.className = 'box ' + data[i].categories.join(' ');

    output.appendChild(box);
}
