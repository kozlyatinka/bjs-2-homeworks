function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    return this.hasOwnProperty("marks") ? this.marks.push(...marks) : 0;
}

Student.prototype.getAverage = function () {
    if (this.marks !== undefined) {
        return this.marks.reduce((total, amount) => total + amount, 0)/(this.marks.length || 1);
    } else {
        return 0;
    }
}

Student.prototype.exclude = function (reason) {
    delete this.subject; 
    delete this.marks; 
    this.excluded = reason;
}

