const inputArr = document.querySelector('.input_arr'),
    outputNum = document.querySelector('.output_num'),
    btnSort = document.querySelector('.btn_sort'),
    numberElem = document.querySelector('.number_elem');


function arrSort() {
    let value = inputArr.value;
    let arr = value.split(',');
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(arr[i]) || arr[i]<0) {
            alert("Enter only POSITIVE numbers through a comma!)");
            inputArr.value = '';
            return;
        }
    }

        function radixSort(arr) {
        // Find the max number and multiply it by 10 to get a number
        // with no. of digits of max + 1
        const maxNum = Math.max(...arr) * 10;
        let divisor = 10;
        while (divisor < maxNum) {
           // Create bucket arrays for each of 0-9
           let buckets = [...Array(10)].map(() => []);
           // For each number, get the current significant digit and put it in the respective bucket
           for (let num of arr) {
              buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
           }
           // Reconstruct the array by concatinating all sub arrays
           arr = [].concat.apply([], buckets);
           // Move to the next significant digit
           divisor *= 10;
        }
        return arr;
     }
     console.log(radixSort(arr));

    outputNum.innerHTML = radixSort(arr);

    numberElem.innerHTML = arr.length;
    numberElem.style.color = 'blue';
}


btnSort.addEventListener('click', arrSort);