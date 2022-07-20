const data = require("./dulieu.json");

const studentFactory = (student) => ({
  maSV: student.maSV,
  tenSV: student.tenSV,
  lop: student.lop,
  diemTrungBinh: averageScore(student),
  xepLoai: rank(averageScore(student)),
});

function averageScore(student) {
  return (
    (student.diemToan + student.diemLy + student.diemHoa + student.diemAnh) / 4
  );
}

function studentMaxScore(major) {
  const students = listOfStudent.filter((infors) => infors.lop === major);
  max = students[0].diemTrungBinh;
  for (var i = 0; i < students.length; i++) {
    if (max < students[i].diemTrungBinh) {
    max = students[i].diemTrungBinh;
    }
  }
  const studentMax = students.filter((student) => student.diemTrungBinh === max);

  return studentMax;
}


function studentMinScore(major) {
    const students = listOfStudent.filter((student) => student.lop === major);
    min = students[0].diemTrungBinh;
    for (var i = 0; i < students.length; i++) {
      if (min > students[i].diemTrungBinh) {
      min = students[i].diemTrungBinh;
      }
    }
    const studentMin = students.filter((student) => student.diemTrungBinh === min);
  
    return studentMin;
  }

function passAll(student) {
    if (student.diemToan > 4 && student.diemLy > 4 && student.diemHoa > 4 && student.diemAnh > 4 ){
        return true
    }
    return false
}

function rank(score) {
  if (score < 4) {
    return "F";
  } 
  if (score < 5) {
    return "D";
  }  
  if (score < 5.5) {
    return "D+";
  } 
  if (score < 7) {
    return "C";
  }  
  if (score < 8.5) {
    return "B";
  }  
    return "A";
}

const listOfStudent = data.map((infors) => studentFactory(infors));
console.log("Danh sách sinh viên và điểm trung bình: ");
console.log(listOfStudent);

const listOfMajor = [...new Set(data.map((student) => student.lop))];

console.log("Danh sách sinh viên có điểm trung bình cao nhất các lớp: ");
const maxScore = listOfMajor.map((major) => studentMaxScore(major));
console.log(maxScore);

console.log("Danh sách sinh viên có điểm trung bình thấp nhất các lớp: ");
const minScore = listOfMajor.map((major) => studentMinScore(major));
console.log(minScore);

console.log("Sinh viên qua môn với điểm các môn ≥ 4.0: ")
const passedStudent = data.map((student) => passAll(student))
for (let j =0; j< data.length; j++){
    if (passedStudent[j]){
        console.log(data[j].tenSV)
    }
}