let Assignment = function (name, description, finished, dueDate) {
  this.name = name;
  this.description = description;
  this.finished = finished;
  this.dueDate = dueDate;
};


let AssignmentCreator = function () {
  let name;
  let description;
  let isFinished = false;
  let dueDate;



  return {
    setName: function (name) {
      this.name = name;
      return this;
    },
    setDescription: function (description) {
      this.description = description;
      return this;
    },
    setFinished: function (finished) {
      this.finished = finished;
      return this;
    },
    setDueDate: function (dueDate) {
      this.dueDate = dueDate;
      return this;
    },
    create : function () {
      return new Assignment(name, description, isFinished, dueDate);
    },
  };
};



let assignment = new AssignmentCreator()
  .setName("Assignment A")
  .setDescription("Study book")
  .setDueDate(new Date(2019, 5, 12));
console.log(assignment);
