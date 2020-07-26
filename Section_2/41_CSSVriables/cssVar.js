/*on vozvrashayet computed stili*/
console.log(window.getComputedStyle(document.documentElement).getPropertyValue('--box-bg'))
console.log(window.getComputedStyle(document.body).getPropertyValue('--box-bg'))

/*chtob polucit css znacheniye kakogo-to konkretnogo elementa nujno sdelat:*/
console.log(document.body.style.getPropertyValue('--box-bg'));// no mi nicheqo ne poluchim, nujno zadat znacheniye
console.log(document.body.style.setProperty("--box-bg", "red"));// sootvetstvenno izmenitsa color, mi pomenali ee globalno

/*Mi mojem zadat peremennuyu box'u, i ona primenayetsa v ego ramkax */
console.log(document.querySelector('.box').style.setProperty('--box-bg', 'green'))

/*V teorii mi mojem zadavat kajdomu elementu zadavat odnu i tu je peremennuyu s raznimi znacheniyami. Pri pomoshi setProperty i getPropertyValue mi mojem zadavat znacheniya nashix peremenix i chitat ix svoystva */