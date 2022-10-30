const changeImg = (id) => {
        switch (id) {
            case 0:
                document.getElementById("imgid").src="https://imgs.search.brave.com/xoCPIAVS5dl6H_ALQ6aBw-conXyAXyu4PwL3GdHAJO0/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/NXZrX1FINlBPWEJR/LWh1SFY5WVNBSGFI/YSZwaWQ9QXBp";
                break;
            case 1:
                document.getElementById("imgid").src= "https://imgs.search.brave.com/IOdvUlLBf1iP68XPolYT7SB2n4JFZiPHDUkJQr546Bo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/Ym91dGlxdWVyZXRh/aWxlci5jb20uYXUv/YXNzZXRzL2Z1bGwv/Njc5NDI0LTYwOS5q/cGc_MjAxOTAzMTcx/OTMyMzk"

                break;
            case 2:
                document.getElementById("imgid").src="https://imgs.search.brave.com/khYMISMEham3-hwOjQfboSeS6b3md_LKBdkO4L9S3TQ/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5l/QXRNUDVqbWktOEZF/Rm1iaDlUZHlnSGFI/YSZwaWQ9QXBp"

                break;

            case 3:
                document.getElementById("imgid").src="https://imgs.search.brave.com/LqhpI4Q_Mf7chqmXqqRLf8TV40WXq5BhVZa8QdRxLs0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/Ym91dGlxdWVyZXRh/aWxlci5jb20uYXUv/YXNzZXRzL2Z1bGwv/Njc5NDI0LTEwMC5q/cGc_MjAxOTAzMTcx/OTMzMDY"

                break;
            default:
                document.getElementById("imgid").src="https://imgs.search.brave.com/xoCPIAVS5dl6H_ALQ6aBw-conXyAXyu4PwL3GdHAJO0/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC53/NXZrX1FINlBPWEJR/LWh1SFY5WVNBSGFI/YSZwaWQ9QXBp"

                break;
        }
}

let countCard = document.getElementById("add-card")

let count = 0

function addCard() {
    count = count + 1
    countCard.innerText = count 
}

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Show More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Show Less"
        moreText.style.display = "inline"
    }

}