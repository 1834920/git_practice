const wantedArray = ['Train conductor', 'Teacher', 'Plumber', 'Phone repair mechanic', 'Painter', 'Interior decorator', 'Gardener', 'Computer programmer', 'Children\'s books author', 'Vegan chef']

const possessionArray = ['Complete chef\'s knives set', 'Bachelor\'s degree in computer science', 'Color swatches', '20-foot ladder', 'Wild imagination', 'Dry-erase pens', 'Sensible walking shoes', 'Shovel, rake, and hoe', 'Sharp eyes']

const skillsArray = ['Typing', 'Chopping avocados', 'Keeping children quiet', 'Caring for plants', 'Writing innovative programs', 'Reading train time tables', 'Devising crazy stories', 'Cleaning up paint messes', ]

let jobArrayNumber = Math.floor(Math.random() * wantedArray.length);
let job = wantedArray[jobArrayNumber];

let possessionArrayNumber = Math.floor(Math.random() * possessionArray.length);
let possession = possessionArray[possessionArrayNumber];

let skillsArrayNumber = Math.floor(Math.random() * skillsArray.length);
let skill = skillsArray[skillsArrayNumber];

console.log(`Wanted: ${job}`);
console.log(`In possession of: ${possession}`);
console.log(`Good at: ${skill}`);

