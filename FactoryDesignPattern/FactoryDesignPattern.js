
function Developer(name)
{
  this.name = name
  this.type = "Developer"
}

function Tester(name)
{
  this.name = name
  this.type = "Tester"
}

function EmployeeFactory()
{
  this.create = (name, type) => {
    switch(type)
    {
      case 1:
        return new Developer(name)
      case 2:
        return new Tester(name)
    }
  }
}

function say()
{
  console.log("Hi, I am " + this.name + " and I am a " + this.type)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("JAMAL", 1))
employees.push(employeeFactory.create("ESMAT", 2))
employees.push(employeeFactory.create("HABIB", 1))
employees.push(employeeFactory.create("YASEEN", 1))
employees.push(employeeFactory.create("MOHAMMAD", 2))

employees.forEach( emp => {
  say.call(emp)
})
