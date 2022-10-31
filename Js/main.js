document.getElementById("btnTinh").onclick = function () {
    var number = 0;
    var sum = 0 ;
    var total = 0;
    //xu ly
while (sum < 10000) {
    number++;
    sum = sum + number;
}

    var result = "Số nguyên dương nhỏ nhất là: " + number;
  
  
    //Show kết quả
    document.getElementById("infoTinh").innerHTML = result;
  };
    //style
    document.getElementById("infoTinh").classList.add("alert-success");





    document.getElementById("btnTinhTong").onclick = function () {
       
        var result = "Tổng là: " + Sum();
        function Sum() {
            var sum1 = 0;
            var math1 =0;
            var sum2 =0;
            var numb1 = document.getElementById("Numb1").value * 1;
            var numb2 = document.getElementById("Numb2").value * 1;
            while (numb1 <= numb2) {
                math1 = Math.pow(numb1 , numb2);
                sum1 = numb1
                sum2 = sum1 + +sum2 +math1;
                numb1++;
            }
            return sum2;
        }
       

        //Show kết quả
        document.getElementById("infoTinhTong").innerHTML = result;
      };
        //style
        document.getElementById("infoTinhTong").classList.add("alert-success");








        document.getElementById("btnLuyThua").onclick = function () {
            var Number1 = document.getElementById("Numb1").value * 1;
            var Sumbit = 0 ;
            while (condition) {
                Number1++
                Sumbit = Sumbit * Number1
            }
        
            var result = "Số nguyên dương nhỏ nhất là: " + number;
          
          
            //Show kết quả
            document.getElementById("infoLuyThua").innerHTML = result;
          };
            //style
            document.getElementById("infoLuyThua").classList.add("alert-success");