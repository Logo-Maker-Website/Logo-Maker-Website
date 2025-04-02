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

// Open In page-2
let selectedLink1 = "";
function setLink1(imgId) {
    const links1 = {
        "img7": "https://wa.me/2001551432804?text=I%20want%E2%80%8E%20%20%22Company%20Shares%20Logo%20Template%20Design%22",
        "img8": "https://wa.me/2001551432804?text=I%20want%E2%80%8E%20%20%22Company%20Orange%20Shares%20Logo%20Template%20Design%22",
        "img9": "https://wa.me/2001551432804?text=I%20want%E2%80%8E%20%20%22Gold%20Handwritten%20Logo%20Design%22",
        "img10": "https://wa.me/2001551432804?text=I%20want%E2%80%8E%20%20%22Volleyball%20Logo%20Design%22",
        "img11": "https://wa.me/2001551432804?text=I%20want%E2%80%8E%20%20%22Gold%20In%20Orange%20Bird%20Logo%20Design%22",
        "img12": "https://wa.me/2001551432804?text=I%20want%E2%80%8E%20%20%22Gold%20Sparrow%20Logo%20Design%22",
        "banner2": "https://wa.me/2001551432804?text=I%20want%E2%80%8E%20%20%22Gaming%20Pink%20Banner%20Design%22"
    };
    selectedLink1 = links1[imgId] || "";
}

function openLink1() {
    if (selectedLink1) {
        window.open(selectedLink1, "_blank", "noopener,noreferrer");
    } else {
        alert("No link set !");
    }
}

window.onload = function () {
    document.getElementById("img7").addEventListener("click", function () { setLink1("img7"); });
    document.getElementById("img8").addEventListener("click", function () { setLink1("img8"); });
    document.getElementById("img9").addEventListener("click", function () { setLink1("img9"); });
    document.getElementById("img10").addEventListener("click", function () { setLink1("img10"); });
    document.getElementById("img11").addEventListener("click", function () { setLink1("img11"); });
    document.getElementById("img12").addEventListener("click", function () { setLink1("img12"); });
    document.getElementById("banner2").addEventListener("click", function () { setLink1("banner2"); });
};

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