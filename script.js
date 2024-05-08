let bilgisayarinTuttuguSayi = Math.trunc(Math.random() * 10)
document.querySelector(".hesapla").addEventListener("click" , function(){
    let kullanicininGirdigiDeger = Number(document.querySelector(".deger").value);
    if (bilgisayarinTuttuguSayi == kullanicininGirdigiDeger) {
        document.querySelector("body").style.backgroundColor="#2bc999"
        document.querySelector(".durum").textContent = "Tebrikler. Doğru Bildiniz."
    }
    if (kullanicininGirdigiDeger != bilgisayarinTuttuguSayi) {
        document.querySelector("body").style.backgroundColor="red"
        document.querySelector(".durum").textContent = "Yanlış Tahmin. Tekrar Deneyiniz."
    }
    if (kullanicininGirdigiDeger <= 0) {
        alert("Lütfen Geçerli Bir Sayı Giriniz.")
    }
    if (kullanicininGirdigiDeger >= 10) {
        alert("Lütfen Geçerli Bir Sayı Giriniz.")
    }
    console.log(bilgisayarinTuttuguSayi);
});
document.querySelector(".clear").addEventListener("click" , function(){
    document.querySelector(".deger").value = "";
    document.querySelector("body").style.backgroundColor="turquoise"
    document.querySelector(".durum").textContent = "Durum :"
});
document.querySelector(".restart").addEventListener("click" , function(){
    document.querySelector(".deger").value = "";
    document.querySelector("body").style.backgroundColor="turquoise"
    document.querySelector(".durum").textContent = "Durum :"
});