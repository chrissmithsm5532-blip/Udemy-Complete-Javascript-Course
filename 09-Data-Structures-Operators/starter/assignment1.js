'use strict';

// [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);

// [, , thirdbook] = books;
// console.log(thirdbook);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];

// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// // title auther isnb

// const { title, author, ISBN } = books[0];

// console.log(title);
// console.log(author);
// console.log(ISBN);

// const { keywords: tags } = books[0];

// console.log(tags);

// const { language, programmingLanguage = 'unknown' } = books[6];

// console.log(language, programmingLanguage);

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';

// ({ title: bookTitle, author: bookAuthor } = books[0]);

// console.log(title, author);

// // Each book object has a deeply nested rating property as illustrated below:

// // {
// //   title: 'Algorithms',
// //   ...
// //   thirdParty: {
// //     goodreads: {
// //       rating: 4.41,              // <-- HERE
// //       ratingsCount: 1733,
// //       reviewsCount: 63,
// //       fiveStarRatingCount: 976,
// //       oneStarRatingCount: 13
// //     }
// //   }
// // },
// // Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

// // Please do most of the work on the left side of the assignment operator: const ... = books[0];

// const {
//   thirdParty: {
//     goodreads: { rating: bookRating },
//   },
// } = books[0];

// console.log(bookRating);

// // Write a function called printBookInfo that has three parameters called title, author and year. This function should work for a single object passed as an argument, and it should log to the console information about the book in this format: "${title} by ${author}, ${year}".

// // If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

// const printBookInfo = function (booknum) {
//   const { title, author, year = 'year unknown' } = books[booknum];
//   console.log(`${title} by ${author}, ${year}`);
// };

// printBookInfo(1);

// const bookAuthors = [...books[0].author, ...books[1].author];

// console.log(bookAuthors);

// // Write a function called spellWord that accepts a single string as an argument. This function should log to the console each letter of the argument separated by a space.

// const spellWord = function (inputword) {
//   console.log(...inputword);
// };

// spellWord('Hello');

// const [mainkeyword, ...rest] = books[0].keywords;
// console.log(mainkeyword);
// console.log(rest);

// const { publisher, ...restofbook } = books[1];

// console.log(publisher, restofbook);

// // Write a function called printBookAuthorsCount that has two parameters called title and authors. The authors parameter should accept any number of arguments. This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".

// function printBookAuthorsCount(title, ...authors) {
//   console.log(`The book "${title}" has ${authors.length} authors`);
// }

// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// // Write a function called hasExamplesInJava that takes a book object from the books array as an argument. This function should return true if the book uses Java, or a string 'no data available' if it uses other language or no programming language at all.

// // Use short-circuiting.

// function hasExamplesInJava(book) {
//   return book.programmingLanguage === 'Java' || 'No data available';
// }

// console.log(hasExamplesInJava(books[0]));
// console.log(hasExamplesInJava(books[1]));
// console.log(hasExamplesInJava(books[2]));
// console.log(hasExamplesInJava(books[3]));
// console.log(hasExamplesInJava(books[4]));
// console.log(hasExamplesInJava(books[5]));
// console.log(hasExamplesInJava(books[6]));
// console.log(hasExamplesInJava(books[7]));

// function hasOnlineContent(books) {}
// for (i = 0; i < books.length; i++)
//   books[i].onlineContent &&
//     console.log(`${books[i].title} provides online content`);

// hasOnlineContent(books);

// function hasNoOnlineContent(books) {}
// for (i = 0; i < books.length; i++)
//   books[i].onlineContent ??
//     console.log(`${books[i].title} provides no online content`);

// hasNoOnlineContent(books);

// // Some of the book objects from the books array are missing the edition property. Loop over the books array, and assign this property with a number 1 (if it doesn't already exist). Use logical assignment operators.

// for (i = 0; i < books.length; i++) {
//   books[i].edition ||= 1;
// }

// // Some of the book objects from the books array have the highlighted property, which by default is set to true. Iterate over the books array, and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.

// // Use the &&= operator (tip: you may also need the ! operator)

// for (x = 0; x < books.length; x++) {
//   books[x].highlighted && !books[x].thirdParty.goodreads.rating < 4.2;
// }

// // for (let i = 0; i < books.length; i++) {
// //   books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2)
// // }

// let pageSum = 0;

// for (let book of books) {
//   pageSum += book.pages;
// }
// console.log(pageSum);

// const allAuthors = [];

// for (let book of books) {
//   if (typeof book.author === 'string') allAuthors.push(book.author);
//   else {
//     allAuthors.push(...book.author);
//   }
// }

// for (let [index, value] of allAuthors.entries()) {
//   console.log(`${index + 1}. ${value}`);
// }

// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
// };

// const getFirstKeyword = function (book) {
//   return book.keywords?.[0] ?? 'No Keyword';
// };

// console.log(getFirstKeyword(books[1]));

// const entries = [];

// for (let item of Object.keys(books[0].thirdParty.goodreads)) {
//   entries.push([item]);
// }

// console.log(entries);

// for (const [index, value] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries[index].push(value);
// }

// console.log(entries);

// const entries2 = Object.entries(books[0].thirdParty.goodreads);

// console.log(entries2);

// const allKeywords = [];

// for (let book of books) {
//   allKeywords.push(...book.keywords);
// }

// let uniqueKeywords = new Set(allKeywords);

// uniqueKeywords.add('coding');
// uniqueKeywords.add('science');

// uniqueKeywords.delete('business');

// console.log(uniqueKeywords);

// let uniqueKeywordsArr = [...uniqueKeywords];

// console.log(uniqueKeywordsArr);

// uniqueKeywords.clear();
// console.log(uniqueKeywords);

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

console.log(books[0].ISBN);

console.log(
  books[0].ISBN[6],
  books[0].ISBN[4],
  books[0].ISBN[9],
  books[0].ISBN[6]
);

const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';

console.log(quote.indexOf('chess'));

console.log(quote.endsWith('boxing'));

console.log(quote.slice(-6));

// const isContributor = function (name) {
//   if (books[0].author.includes(name)) {
//     return true;
//   } else return false;
// };

// console.log(isContributor('Julie Sussman (Contributor)'));

// normalizeAuthorName('  JuliE sussMan (Contributor)');

// "Julie Sussman"

//const normalizeAuthorName = function (name) {};

// const [firstname, Surname] = 'Chris Smith'.split(' ');
// console.log(firstname, Surname);

//console.log('Julie Sussman (Contributor)'.slice(lastIndexOf('Contributor')));

// const nameTest = 'Julie Sussman (Contributor)';

// console.log(nameTest.lastIndexOf('Contributor'));

// const NewName = nameTest.slice(0, nameTest.lastIndexOf('Contributor') - 1);

// console.log(NewName);

// const capitaliseName = function (name) {
//   const names = name.split(' ');
//   const nameUpper = [];

//   for (const n of names) {
//     nameUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   return nameUpper.join(' ');
// };

// const normaliseAuthorName = function (name) {
//   if (name.lastIndexOf('(Contributor)') !== -1) {
//     name = name.replace('(Contributor)', '').trim();
//   }
//   console.log(capitaliseName(name));
// };

// normaliseAuthorName('Julie SDDssman (Contributor)');

// Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.

// const newBookTitle = books[1].title.replace('Programs', 'Software');

// const logBookCategories = function (categories) {
//   const category = categories.split(';');
//   for (let x = 0; x < category.length; x++) {
//     console.log(category[x]);
//   }
// };

// const bookCategories =
//   'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
// logBookCategories(bookCategories);

// Now, the opposite. Each book from the books array has the keywords property.

// Write a function called getKeywordsAsString that takes the books array as an argument, collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.

// const getKeywordsAsString = function (booksArray) {
//   let complete = '';
//   for (let x = 0; x < booksArray.length; x++) {
//     if (x === 0) {
//       complete = complete + booksArray[x];
//     } else complete = complete + ';' + booksArray[x];
//   }
//   console.log(complete);
// };

// getKeywordsAsString(books[0].keywords);

const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];

const logBookCategories = function (books) {
  for (const [title, page] of books) {
    console.log(title.padEnd(25, '_'), page);
  }
};

logBookCategories(bookChapters);
