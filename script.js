const wantedArray = ['Train conductor', 'Teacher', 'Plumber', 'Phone repair mechanic', 'Painter', 'Interior decorator', 'Gardener', 'Computer programmer', 'Children\'s books author', 'Vegan chef', 'Musician', 'Dog walker']

const possessionArray = ['complete chef\'s knives set', 'bachelor\'s degree in computer science', 'color swatches', '20-foot ladder', 'wild imagination', 'dry-erase pens', 'sensible walking shoes', 'shovel, rake, and hoe', 'sharp eyes', 'keyboard and harmonica', 'dog leashes']

const skillsArray = ['typing', 'chopping avocados', 'keeping children quiet', 'caring for plants', 'writing innovative programs', 'reading train time tables', 'devising crazy stories', 'cleaning up paint messes', 'singing background vocals', 'playing catch', 'teaching math']

let jobArrayNumber = Math.floor(Math.random() * wantedArray.length);
let job = wantedArray[jobArrayNumber];

let possessionArrayNumber = Math.floor(Math.random() * possessionArray.length);
let possession = possessionArray[possessionArrayNumber];

let skillsArrayNumber = Math.floor(Math.random() * skillsArray.length);
let skill = skillsArray[skillsArrayNumber];

console.log(`Wanted: ${job}. In possession of ${possession}. Good at ${skill}. Call Joe @ 555-123 4567.`);


