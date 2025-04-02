document.addEventListener("DOMContentLoaded", function () {
    let currentPath = window.location.pathname.split("/").pop(); // الحصول على اسم الصفحة فقط

    document.querySelectorAll("nav a").forEach(link => {
        if (link.getAttribute("href") === currentPath || link.id === "addactive") {
            link.classList.add("active1"); // إضافة الكلاس للرابط النشط
        } else {
            link.classList.remove("active1"); // إزالة الكلاس من الروابط الأخرى
        }
    });
});


// Pop-up window
function openModal(imgElement) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");
    let captionText = document.getElementById("caption");
    captionText.innerHTML = imgElement.getAttribute("data-text");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.getAttribute("data-text");
}

function openModal1(imgElement) {
    let modal = document.getElementById("modal1");
    let modalImg = document.getElementById("modal-img1");
    let captionText = document.getElementById("caption1");
    captionText.innerHTML = imgElement.getAttribute("data-text1");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.getAttribute("data-text1");
}

function openModal2(imgElement) {
    let modal = document.getElementById("modal2");
    let modalImg = document.getElementById("modal-img2");
    let captionText = document.getElementById("caption2");
    captionText.innerHTML = imgElement.getAttribute("data-text1");

    modal.style.display = "block";
    modalImg.src = imgElement.src;
    captionText.innerHTML = imgElement.getAttribute("data-text1");
}

function handleImageClick(imgElement) {
    let screenWidth = window.innerWidth; // الحصول على عرض الشاشة
    let link = imgElement.getAttribute("data-link");
    
    if (screenWidth <= 1050) {
        window.open(link, "_blank" ,  "noopener,noreferrer")
    } else {
        openModal(imgElement);
    }
}

function handleImageClick1(imgElement) {
    let screenWidth = window.innerWidth; // الحصول على عرض الشاشة
    let link = imgElement.getAttribute("data-link"); // الحصول على الرابط

    if (screenWidth <= 1050) {
        window.open(link, "_blank" ,  "noopener,noreferrer")
    } else {
        openModal1(imgElement);
    }
}

function handleImageClick2(imgElement) {
    let screenWidth = window.innerWidth; // الحصول على عرض الشاشة
    let link = imgElement.getAttribute("data-link"); // الحصول على الرابط

    if (screenWidth <= 1050) {
        window.open(link, "_blank" ,  "noopener,noreferrer")
        if (link) {
            window.open(link, "_blank", "noopener,noreferrer");
        }
    } else {
        openModal2(imgElement);
    }
}


function closeModal() {
    document.getElementById("modal").style.display = "none";
}


// Pop-Up--window--Large


function closeModal1() {
    document.getElementById("modal1").style.display = "none";
}

// Pop-up-Window-Small-Large


function closeModal2() {
    document.getElementById("modal2").style.display = "none";
}


// Open Links

function openSafeLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}


// Open The link any
let selectedLink = "";
function setLink(imgId) {
    const links = {
        "img1": "https://wa.me/2001551432804?text=%E2%80%8E%20I%20want%20%22Sport%20Logo%20Shield%20Template%20Design%22",
        "img2": "https://wa.me/2001551432804?text=%E2%80%8E%20I%20want%20%22Sportsman%20Logo%20Template%20Design%22",
        "img3": "https://wa.me/2001551432804?text=%E2%80%8E%20I%20want%20%22Rectangular%20Sports%20Logo%20Art%20Design%22",
        "img4": "https://wa.me/2001551432804?text=%E2%80%8E%20I%20want%20%22Soccer%20Sport%20Club%20Logo%20Design%22",
        "img5": "https://wa.me/2001551432804?text=%E2%80%8E%20I%20want%20%22Company%20Est.Year%20Logo%20Design%22",
        "img6": "https://wa.me/2001551432804?text=%E2%80%8E%20I%20want%20%22Swan%20Logo%20Design%22",
        "banner1": "https://wa.me/2001551432804?text=%E2%80%8E%20I%20want%20%22Gaming%20banner%20with%20aquamarine%20color%22"

    };
    selectedLink = links[imgId] || "";
}

function openLink() {
    if (selectedLink) {
        window.open(selectedLink, "_blank", "noopener,noreferrer");
    } else {
        alert("No link set !");
    }
}

window.onload = function () {
    document.getElementById("img1").addEventListener("click", function () { setLink("img1"); });
    document.getElementById("img2").addEventListener("click", function () { setLink("img2"); });
    document.getElementById("img3").addEventListener("click", function () { setLink("img3"); });
    document.getElementById("img4").addEventListener("click", function () { setLink("img4"); });
    document.getElementById("img5").addEventListener("click", function () { setLink("img5"); });
    document.getElementById("img6").addEventListener("click", function () { setLink("img6"); });
    document.getElementById("banner1").addEventListener("click", function () { setLink("banner1"); });
};