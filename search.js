const imgs = [{
    id: "1",
    imgName: `Sport Logo Shield Template<br> <div class="sub">Sports</div>`,
    Poster: `Imgs/Sports-logo-1.jpg`,
    href1: `Logo-page.html`,
},
{
    id: "2",
    imgName: `Sportsman Logo Template<br> <div class="sub">Sports</div>`,
    Poster: `Imgs/Sports-logo-2.jpg`,
    href1: `Logo-page.html`,
},
{
    id: "3",
    imgName: 'Rectangular Sports Logo Art<br> <div class="sub">Sports</div>',
    Poster: `Imgs/Sports-logo-3.jpg`,
    href1: `Logo-page.html`,
},
{
    id: "4",
    imgName: 'Soccer Sport Club Logo Design<br> <div class="sub">Sports</div>',
    Poster: `Imgs/Sports-logo-4.jpg`,
    href1: `Logo-page.html`,
},
{
    id: "5",
    imgName: 'Volleyball Logo Design<br> <div class="sub">Sports</div>',
    Poster: `Imgs/Sports-logo-5.png`,
    href1: `Logo-page-2.html`,
},
{
    id: "6",
    imgName: 'Company Est.Year Logo Design<br> <div class="sub">Luxury & Corporate</div>',
    Poster: `Imgs/Company-logo-1.jpg`,
    href1: `Logo-page.html`,
},
{
    id: "7",
    imgName: 'Swan Logo Design<br> <div class="sub">Luxury</div>',
    Poster: `Imgs/Luxury-logo-1.png`,
    href1: `Logo-page.html`,
},
{
    id: "8",
    imgName: 'Gaming aquamarine Banner<br> <div class="sub">ESport</div>',
    Poster: `Imgs/Banner-Gaming-1.jpg`,
    href1: `Logo-page.html`,
},
{
    id: "9",
    imgName: 'Company Shares Logo<br> <div class="sub">Corporate</div>',
    Poster: `Imgs/Company-logo-2.png`,
    href1: `Logo-page-2.html`,
},
{
    id: "10",
    imgName: 'Company Orange Shares Logo<br> <div class="sub">Corporate</div>',
    Poster: `Imgs/Company-logo-3.png`,
    href1: `Logo-page-2.html`,
},
{
    id: "11",
    imgName: 'Gold Handwritten Logo<br> <div class="sub">Handwritten</div>',
    Poster: `Imgs/HandWritten-logo-1.png`,
    href1: `Logo-page-2.html`,
},
{
    id: "12",
    imgName: 'Gold In Orange Bird Logo Design<br> <div class="sub">Luxury & Corporate</div>',
    Poster: `Imgs/Luxury-logo-2.png`,
    href1: `Logo-page-2.html`,
},
{
    id: "13",
    imgName: 'Gold Sparrow Logo Design<br> <div class="sub">Luxury & Corporate</div>',
    Poster: `Imgs/Luxury-logo-3.png`,
    href1: `Logo-page-2.html`,
},
{
    id: "14",
    imgName: 'Gaming Pink Banner Design<br> <div class="sub">ESport</div>',
    Poster: `Imgs/Banner-Gaming-2.jpg`,
    href1: `Logo-page-2.html`,
}
]

// search data start 

let res = document.getElementsByClassName('result')[0];

imgs.forEach(element => {
    const { id, imgName, Poster, href1 } = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = href1;
    card.innerHTML = `
    <img src = "${Poster}">
    <div class="content">
        ${imgName}
    </div>
    `;
    res.appendChild(card);
});


let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', () => {
    let input_value = input.value.toUpperCase();
    let items = res.getElementsByTagName('a');

    for (let i = 0; i < items.length; i++) {
        let as = items[i].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[i].style.display = "flex";
        } else {
            items[i].style.display = "none";
        }

        if (input.value == 0) {
            res.style.display = "none";
        } else {
            res.style.display = "";
        }
    }
})
// search data end