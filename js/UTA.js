document.addEventListener("DOMContentLoaded", function() {
    indexKategori = 1;
    index = 1;
    indexKandidat = 1;
    indexClick = 0;
    indexSave = 0;

    let textId = "kandidat";
    let divKandidat = document.getElementById("divKandidat");
    let tambahKandidat = document.getElementById("tambahKandidat");

    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
        let rowIndex = 1;
        let tableProses = document.getElementById("tableProses");

        let kategori1 = document.getElementById("kategori1").value;
        let kategori2 = document.getElementById("kategori2").value;
        let kategori3 = document.getElementById("kategori3").value;

        console.log("1 : " + kategori1 + "," + "2 : " + kategori2 + "," + "3 : " + kategori3);

        if (kategori1 != "" && kategori2 != "" && kategori3 != "") {
            document.getElementById("kate1").innerHTML = kategori1;
            document.getElementById("kate2").innerHTML = kategori2;
            document.getElementById("kate3").innerHTML = kategori3;

        } else {
            alert("Kategori tidak boleh kosong")
        }

        let bobotKategori1 = parseInt(document.getElementById("bobotKategori1").value);
        let bobotKategori2 = parseInt(document.getElementById("bobotKategori2").value);
        let bobotKategori3 = parseInt(document.getElementById("bobotKategori3").value);

        if ((bobotKategori2 + bobotKategori1 + bobotKategori3) == 100) {
            indexSave++;
            if (indexSave == 1) {
                for (indexKandidat = 1; indexKandidat < 6; indexKandidat++) {
                    if (document.getElementById("nilaiKat1Kan" + indexKandidat) !== null) {

                        var nilai1 = parseInt(document.getElementById("nilaiKat1Kan" + indexKandidat).value);
                        var nilai2 = parseInt(document.getElementById("nilaiKat2Kan" + indexKandidat).value);
                        var nilai3 = parseInt(document.getElementById("nilaiKat3Kan" + indexKandidat).value);
                        var kandidat = document.getElementById("kandidat" + indexKandidat).value;

                        let nilaixBobot1 = (nilai1 * bobotKategori1);
                        let nilaixBobot2 = (nilai2 * bobotKategori2);
                        let nilaixBobot3 = (nilai3 * bobotKategori3);
                        console.log(kandidat);

                        console.log(nilai1 + " * " + bobotKategori1 + " = " + (nilai1 * bobotKategori1));
                        console.log(nilai2 + " * " + bobotKategori2 + " = " + (nilai2 * bobotKategori2));
                        console.log(nilai3 + " * " + bobotKategori3 + " = " + (nilai3 * bobotKategori3));
                        console.log("jumlah nilai kategori : " + nilaixBobot1 + " + " + nilaixBobot2 + " + " + nilaixBobot3)

                        if (nilai1 != null && nilai2 != null && nilai3 != null) {
                            let row = tableProses.insertRow(rowIndex);
                            let kan = row.insertCell(0);
                            let kat1 = row.insertCell(1);
                            let kat2 = row.insertCell(2);
                            let kat3 = row.insertCell(3);
                            let jumlah = row.insertCell(4);

                            let jumlahText = document.createElement("p");
                            jumlahText.innerHTML = (nilaixBobot1 + nilaixBobot2 + nilaixBobot3);
                            jumlahText.id = "jumlah" + indexKandidat;

                            jumlah.appendChild(jumlahText);
                            kan.appendChild(document.createTextNode(kandidat));
                            kat1.appendChild(document.createTextNode(nilai1 + " * " + bobotKategori1 + " = " + (nilaixBobot1)));
                            kat2.appendChild(document.createTextNode(nilai2 + " * " + bobotKategori2 + " = " + (nilaixBobot2)));
                            kat3.appendChild(document.createTextNode(nilai3 + " * " + bobotKategori3 + " = " + (nilaixBobot3)));

                            rowIndex++;
                        }
                    }
                }
            } else {
                alert("Reload page untuk menyimpan data baru");
            }
        } else {
            alert("Jumlah ketiga bobot harus 100");
        }
    })

    document.getElementById("tampilkan").addEventListener("click", function(event) {
        event.preventDefault();
        let table = document.getElementById("tableProses");
        let tampil = document.getElementById("tampil");
        console.log(table.rows[1]);
        if (table.rows[1] != null) {
            indexClick++;
            if (indexClick == 1) {
                let arrayJumlah = [];
                for (i = 0; i < 6; i++) {
                    if (document.getElementById("jumlah" + i) !== null) {
                        arrayJumlah.push(document.getElementById("jumlah" + i).innerHTML);
                    }
                }
                arrayJumlah.sort(function(a, b) {
                    return b - a;
                });
                console.log(arrayJumlah);

                indexPemenang = 1;
                for (ini = 0; ini < arrayJumlah.length; ini++) {
                    for (i = 1; i < table.rows.length; i++) {
                        let row = table.rows[i];
                        let cellValues = row.cells[4].innerText;
                        console.log(parseInt(arrayJumlah[i - 1]));
                        console.log(parseInt(cellValues));
                        if (parseInt(arrayJumlah[ini]) == parseInt(cellValues) && arrayJumlah[ini] != null && cellValues != null) {
                            let h5 = document.createElement("h5");
                            // let textMenang = document.createElement("h4");
                            // textMenang.innerHTML = "Pemenang";
                            // tampil.appendChild(textMenang);
                            h5.innerHTML = indexPemenang + ". " + row.cells[0].innerText;
                            h5.className = "text-center";
                            tampil.appendChild(h5);
                            indexPemenang++;
                        }
                    }
                }
            }
        } else {
            console.log("no row");
        }
    })


    tambahKandidat.addEventListener("click", function(event) {
        event.preventDefault;
        index++;
        console.log(index);
        // addNilaiKandidat(index, br);
        addKandidat(index);
        addNKK();
    })

    function addNKK() {
        if (index >= 6) {
            alert("Maximum Candidates Allowed are 5");
        } else {
            var br = document.createElement("br");

            var div = document.createElement("div");
            div.id = "divNilaiKategoriKandidat" + index;
            div.className = "form-group";

            var h = document.createElement("h4");
            h.textContent = "Nilai KATEGORI KANDIDAT-" + index;

            var div2 = document.createElement("div");
            div2.className = "col-12 row";

            var div31 = document.createElement("div");
            div31.className = "col-4";

            var div32 = document.createElement("div");
            div32.className = "col-4";

            var div33 = document.createElement("div");
            div33.className = "col-4";

            var input1 = document.createElement("input");
            input1.type = "text";
            input1.className = "form-control form-control-user nilai-input";
            input1.placeholder = "Kategori 1";
            input1.id = "nilaiKat" + indexKategori + "Kan" + index;;

            var input2 = document.createElement("input");
            input2.type = "text";
            input2.className = "form-control form-control-user nilai-input";
            input2.placeholder = "Kategori 2"
            input2.id = "nilaiKat" + (indexKategori + 1) + "Kan" + index;;

            var input3 = document.createElement("input");
            input3.type = "text";
            input3.className = "form-control form-control-user nilai-input";
            input3.placeholder = "Kategori 3";
            input3.id = "nilaiKat" + (indexKategori + 2) + "Kan" + index;;

            div31.appendChild(input1);
            div31.appendChild(br.cloneNode());

            div32.appendChild(input2);
            div32.appendChild(br.cloneNode());

            div33.appendChild(input3);
            div33.appendChild(br.cloneNode());

            div2.appendChild(div31);
            div2.appendChild(div32);
            div2.appendChild(div33);

            div.appendChild(h);
            div.appendChild(div2);

            var form = document.getElementById("form");
            var buttons = form.querySelectorAll("input[type='button']");
            form.insertBefore(div, buttons[0]);
        }
    }


    function addKandidat(index, br) {
        var br = document.createElement("br");
        var newKandidat = document.createElement("input");
        newKandidat.type = "text";
        newKandidat.placeholder = "Kandidat " + index;
        newKandidat.className = "form-control form-control-user";
        newKandidat.id = textId + index;

        divKandidat.appendChild(newKandidat);
        divKandidat.appendChild(br);
    }
});


//commenting riyan