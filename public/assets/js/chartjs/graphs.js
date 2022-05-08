

const data = {
labels: [
    'جيد ',
    'ممتاز ',
    'متوسط'
],
datasets: [{
    label: 'تصنيف عام ',
    data: [300, 50, 100],
    backgroundColor: [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
}]
};
const config = {
type: 'pie',
data: data,
};
// discount Chart 
const dataDiscount = {
labels: [
    'مهام بالخصومات  ',
    'غير مهتم ',

],
datasets: [{
    label: 'تصنيف عام ',
    data: [300, 100],
    backgroundColor: [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    ],
    hoverOffset: 4
}]
};
const configDiscount = {
type: 'pie',
data: dataDiscount,
}; 

// client Type chart 

const dataClientType = {
labels: [
    'عميل صباحي  ',
    'عميل مسائي  ',

],
datasets: [{
    label: 'تصنيف عام ',
    data: [150, 150],
    backgroundColor: [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    ],
    hoverOffset: 4
}]
};
const configClientType = {
type: 'pie',
data: dataClientType,
}; 


const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  const myChart2 = new Chart(
    document.getElementById('myChart2'),
    configDiscount
  );
  const myChart3 = new Chart(
    document.getElementById('myChart3'),
    configClientType
  );

